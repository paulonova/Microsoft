var MsSc = MsSc || {},
  StatusEnum = {
    NEW: 0,
    VIEWED: 1,
    READ: 2,
    ARCHIVED: 3
  };
MsSc.Notifications = MsSc.Notifications || {
  newCount: 0,
  iconCount: 0,
  latestIndex: 0,
  statusDict: {},
  listNotifications: [],
  notificationDropdown: ".js-notifications-dropdown",
  notificationEmptyMessageIcon: ".js-notifications-empty-message-icon",
  notificationEmptyMessageClass: "pull-right dropdown-toggle icon icon-notification-outline loggedin-notification darker lighter",
  notifcationFilledMessageIcon: ".icon-notification.darker.lighter",
  notificationFilledMessageClass: "pull-right dropdown-toggle icon icon-notification loggedin-notification darker lighter",
  notificationNormal: "notification-item",
  notificationRead: "notification-item notification-read",
  notificationDate: "notification-date",
  notificationCloseIcon: "icon icon-close",
  notificationEmptyCount: ".js-notifications-empty-count",
  notificationNewCount: ".notification-count",
  notificationCountInner: ".notification-count-inner",
  notificationCountInnerClass: "notification-count-inner",
  notificationOpenDropdownMobile: "nav-item-notification dropdown open",
  notificationOpenDropdownDesktop: "pull-right uh-right-icons open",
  getNotifications: function (n) {
    var i = jQuery(MsSc.Notifications.notificationDropdown).data("notificationIsUnregistered"),
      r = i !== "True",
      u = jQuery(MsSc.Notifications.notificationDropdown).data("notificationSitecoreContext"),
      t;
    r && (t = jQuery(MsSc.Notifications.notificationDropdown).data("getNotifications"), t && jQuery.ajax({
      url: t,
      cache: !1,
      data: {
        contextId: u
      },
      contentType: "application/json;",
      success: function (t) {
        n(t);
        MsSc.Notifications.newCount = t.newNotificationsCount;
        MsSc.Notifications.iconCount = t.newNotificationsCount;
        MsSc.Notifications.closeOpenPanelClick(t)
      },
      error: function () {}
    }))
  },
  createNotifications: function (n, t, i) {
    var o = jQuery(MsSc.Notifications.notificationDropdown),
      r, u, s, h, e, f;
    o !== null && (r = document.createElement("li"), i === StatusEnum.READ ? r.setAttribute("class", MsSc.Notifications.notificationRead) : r.setAttribute("class", MsSc.Notifications.notificationNormal), r.setAttribute("data-notification-id", n.id), u = document.createElement("a"), u.setAttribute("target", "_blank"), u.innerText = n.title, s = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/, s.test(n.destination) ? u.setAttribute("href", n.destination) : (h = jQuery(MsSc.Notifications.notificationDropdown).data("gleamHostLink") + n.destination, u.setAttribute("href", h)), e = document.createElement("span"), e.setAttribute("class", MsSc.Notifications.notificationDate), e.innerText = n.localeBasedCreatedTime, u.appendChild(e), f = document.createElement("span"), f.setAttribute("href", "javascript:void()"), f.setAttribute("class", MsSc.Notifications.notificationCloseIcon), f.setAttribute("title", "Dismiss"), r.appendChild(u), r.appendChild(f), o[t].appendChild(r))
  },
  loadNotifications: function (n) {
    var u, f, r, t;
    if (typeof n == "object")
      for (MsSc.Notifications.listNotifications = n.notifications, u = jQuery(MsSc.Notifications.notificationDropdown).data("notificationMaxShown"), f = 0, MsSc.Notifications.latestIndex = u, r = n.newNotificationsCount, MsSc.Notifications.totalCount = n.notificationsCount, r > 0 && (jQuery(MsSc.Notifications.notificationEmptyMessageIcon).attr("class", MsSc.Notifications.notificationFilledMessageClass), jQuery(MsSc.Notifications.notificationEmptyCount).attr("class", MsSc.Notifications.notificationCountInnerClass)[0].style.display = "inline-block", jQuery(MsSc.Notifications.notificationCountInner)[0].innerText = "(" + r + ")"), jQuery(MsSc.Notifications.notificationNewCount), MsSc.Notifications.totalCount === 0 && jQuery(MsSc.Notifications.notificationDropdown).each(function (n) {
          jQuery(MsSc.Notifications.notificationEmptyCount)[n].style.display = "inline"
        }), f = MsSc.Notifications.totalCount > u ? u : MsSc.Notifications.totalCount, i = 0; i < f; i++) t = MsSc.Notifications.listNotifications[i], t !== null && t !== undefined && (MsSc.Notifications.statusDict[t.id] = t.status, jQuery(MsSc.Notifications.notificationDropdown).each(function (n) {
        MsSc.Notifications.createNotifications(t, n, t.status);
        r > 0 && jQuery(MsSc.Notifications.notificationNewCount) !== null && jQuery(MsSc.Notifications.notificationNewCount)[n] !== null && (jQuery(MsSc.Notifications.notificationNewCount)[n].innerText = r)
      }))
  },
  addLatestNotification: function () {
    var n = MsSc.Notifications.listNotifications[MsSc.Notifications.latestIndex];
    n !== null && n !== undefined && (MsSc.Notifications.statusDict[n.id] = n.status, jQuery(MsSc.Notifications.notificationDropdown).each(function (t) {
      MsSc.Notifications.createNotifications(n, t, n.status)
    }), MsSc.Notifications.latestIndex = MsSc.Notifications.latestIndex + 1)
  },
  closeOpenPanelClick: function () {
    var n = jQuery(MsSc.Notifications.notificationDropdown).data("updateNotifications"),
      t = jQuery(MsSc.Notifications.notificationDropdown).data("notificationSitecoreContext");
    jQuery(MsSc.Notifications.notifcationFilledMessageIcon).on("click", function () {
      (jQuery(this).parent().hasClass(MsSc.Notifications.notificationOpenDropdownMobile) || jQuery(this).parent().hasClass(MsSc.Notifications.notificationOpenDropdownDesktop)) && (jQuery(MsSc.Notifications.notifcationFilledMessageIcon).attr("class", MsSc.Notifications.notificationEmptyMessageClass), jQuery(MsSc.Notifications.notificationNewCount).hide(), MsSc.Notifications.getNotifications(function (i) {
        newCount = i.newNotificationsCount;
        var r = i.notifications;
        r.forEach(function (i) {
          if (i !== null && i !== undefined) {
            var r = i.id;
            n !== null && i.status === StatusEnum.NEW && jQuery.ajax({
              url: n,
              data: {
                contextId: t,
                notificationId: r,
                statusId: StatusEnum.VIEWED
              },
              success: function () {},
              error: function (n) {
                console.error(n)
              }
            })
          }
        })
      }))
    })
  },
  itemClick: function () {
    var t = jQuery(MsSc.Notifications.notificationDropdown).data("notificationIsUnregistered"),
      i = t !== "True",
      r = jQuery(MsSc.Notifications.notificationDropdown).data("notificationSitecoreContext"),
      n;
    if (i) {
      n = jQuery(MsSc.Notifications.notificationDropdown).data("updateNotifications");
      jQuery(MsSc.Notifications.notificationDropdown).on("click", "a", function () {
        var i = jQuery(this).parents("li").index(),
          t;
        jQuery(MsSc.Notifications.notificationDropdown).each(function () {
          jQuery(this).closest(MsSc.Notifications.notificationDropdown).children().eq(i).addClass("notification-read")
        });
        t = jQuery(this).parent().attr("data-notification-id");
        n !== null ? (MsSc.Notifications.statusDict[t] === StatusEnum.NEW || MsSc.Notifications.statusDict[t] === StatusEnum.VIEWED) && jQuery.ajax({
          url: n,
          data: {
            contextId: r,
            notificationId: t,
            statusId: StatusEnum.READ
          },
          success: function () {
            MsSc.Notifications.iconCount > 0 && (MsSc.Notifications.iconCount = MsSc.Notifications.iconCount - 1, MsSc.Notifications.statusDict[t] = StatusEnum.READ, jQuery(MsSc.Notifications.notificationDropdown).each(function (n) {
              jQuery(MsSc.Notifications.notificationNewCount) !== null && jQuery(MsSc.Notifications.notificationNewCount)[n] !== null && (jQuery(MsSc.Notifications.notificationNewCount)[n].innerText = MsSc.Notifications.iconCount, jQuery(MsSc.Notifications.notificationCountInner)[0].innerText = "(" + MsSc.Notifications.iconCount + ")")
            }));
            MsSc.Notifications.iconCount === 0 && (jQuery(MsSc.Notifications.notifcationFilledMessageIcon).attr("class", MsSc.Notifications.notificationEmptyMessageClass), jQuery(MsSc.Notifications.notificationNewCount).hide())
          },
          error: function (n) {
            console.error(n)
          }
        }) : console.log("Not integrated with Gleam or notification not enabled.")
      })
    }
  },
  closeClick: function () {
    var n = jQuery(MsSc.Notifications.notificationDropdown).data("updateNotifications"),
      t = jQuery(MsSc.Notifications.notificationDropdown).data("notificationSitecoreContext"),
      i = jQuery(MsSc.Notifications.notificationDropdown).data("notificationMaxShown");
    jQuery(MsSc.Notifications.notificationDropdown).on("click", ".icon-close", function (r) {
      r.stopPropagation();
      var u = jQuery(this).parent().attr("data-notification-id"),
        e = jQuery(this).parent().index(),
        f = jQuery(".uh-dropdown-notification li:nth-child(" + (e + 1) + ")");
      n !== null ? (f && (f.remove(), MsSc.Notifications.totalCount > i && MsSc.Notifications.addLatestNotification(), MsSc.Notifications.totalCount = MsSc.Notifications.totalCount - 1, MsSc.Notifications.totalCount === 0 && jQuery(MsSc.Notifications.notificationDropdown).each(function (n) {
        jQuery(MsSc.Notifications.notificationEmptyCount)[n].style.display = "inline"
      }), MsSc.Notifications.iconCount > 0 && (MsSc.Notifications.statusDict[u] === StatusEnum.NEW || MsSc.Notifications.statusDict[u] === StatusEnum.VIEWED) && (MsSc.Notifications.iconCount = MsSc.Notifications.iconCount - 1, MsSc.Notifications.statusDict[u] = StatusEnum.ARCHIVED, jQuery(MsSc.Notifications.notificationDropdown).each(function (n) {
        MsSc.Notifications.totalCount === 0 && (jQuery(MsSc.Notifications.notificationEmptyCount)[n].style.display = "inline");
        jQuery(MsSc.Notifications.notificationNewCount) !== null && jQuery(MsSc.Notifications.notificationNewCount)[n] !== null && (jQuery(MsSc.Notifications.notificationNewCount)[n].innerText = MsSc.Notifications.iconCount, jQuery(MsSc.Notifications.notificationCountInner)[0].innerText = "(" + MsSc.Notifications.iconCount + ")")
      }), MsSc.Notifications.iconCount === 0 && (jQuery(MsSc.Notifications.notifcationFilledMessageIcon).attr("class", MsSc.Notifications.notificationEmptyMessageClass), jQuery(MsSc.Notifications.notificationNewCount).hide()))), jQuery.ajax({
        url: n,
        data: {
          contextId: t,
          notificationId: u,
          statusId: StatusEnum.ARCHIVED
        },
        success: function () {},
        error: function (n) {
          console.error(n)
        }
      })) : console.log("Not integrated with Gleam or notification not enabled.")
    })
  }
};
jQuery(document).ready(function () {
  MsSc.Notifications.getNotifications(MsSc.Notifications.loadNotifications);
  MsSc.Notifications.itemClick();
  MsSc.Notifications.closeClick()
})