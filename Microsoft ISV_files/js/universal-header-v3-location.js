var MsSc=MsSc|| {}

,
jq2143;

MsSc.UniversalHeaderV3=MsSc.UniversalHeaderV3|| {}

;
jq2143=jQuery;

$(function() {
    typeof SCBeacon !="undefined"&&SCBeacon.push(["ready", MsSc.UniversalHeaderV3.LocationInit])
  }

);

MsSc.UniversalHeaderV3.LocationInit=function() {
  var t=$(".universal-header-v3"),
  i=t.find(".current-site a"),
  r=t.find(".mobile-header a");
  i.addClass("selected");
  var u=$(".selected"),
  f=window.location.pathname,
  n=t.find('a[href="'+f+'"]');
  n.length !==0&&(u.addClass("sitename"), u.removeClass("selected"), n.addClass("selected"), n.closest(".categories-nav-items").find("a.base-menu-item").addClass("selected"), n.closest(".uh-navigation-dropdown-submenu,.uh-secondary").css("text-decoration", "underline"), n.closest(".uh-navigation-dropdown-submenu-tertiary").css("text-decoration", "underline"), n.closest(".uh-tertiary-child-menu").find("a").css("text-decoration", "underline"), i.hasClass("selected")?r.addClass("selected"):r.removeClass("selected"))
}

;

jQuery(document).ready(function() {
    MsSc.UniversalHeaderV3.LocationInit()
  }

)