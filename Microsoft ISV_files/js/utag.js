//tealium universal tag - utag.loader ut4.0.202103071710, Copyright 2021 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
window.__tealium_twc_switch = false;
try {
  try {
    var tealium_load_start_time = Date.now();
  } catch (e) {
    utag.DB(e)
  }
} catch (e) {};
if (!utag_condload) {
  try {
    try {
      (function () {
        if (typeof window.CustomEvent === "function") return false;

        function CustomEvent(event, params) {
          params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
          };
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        }
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
      })();
      var CEloaded = true;
    } catch (e) {
      utag.DB(e)
    }
  } catch (e) {}
};
if (!utag_condload) {
  try {
    (function (a, b, c) {
      if (typeof utag_data == 'undefined') utag_data = {};
      a = location.pathname.split('/');
      b = (a.length > 9) ? 9 : a.length;
      for (c = 1; c < b; c++) {
        utag_data['_pathname' + c] = (typeof a[c] != 'undefined') ? a[c] : ''
      }
    })();
  } catch (e) {}
};
if (!utag_condload) {
  try {
    window.analytics = window.analytics || {};
    window.analytics._ = window.analytics._ || {};
    window.analytics.data = window.analytics.data || {};
    window.analytics.utilities = window.analytics.utilities || {};
    window.analytics.awaUtilities = window.analytics.awaUtilities || {};
    window.analytics.globalfunctions = window.analytics.globalfuctions || {};
    var pM = window.analytics._;
    var util = window.analytics.utilities;
    var awaUtil = window.analytics.awaUtilities;
    var data = window.analytics.data;
    var globalfunctions = window.analytics.globalfunctions;
    var aValidExtensions = ['doc', 'docx', 'ppx', 'pptx', 'pdf', 'xls', 'xlsx', 'xlsm', 'zip', 'wmv', 'dot', 'msi', 'bat', 'csv', 'eps', 'mdb', 'rtf', 'pot', 'mdb', 'mp4', 'oft', 'jpg', 'onepkg'];
    window.analytics._ = {
      prepareAttributes: function (object) {
        var prepared = {},
          key;
        for (key in object) {
          if (object.hasOwnProperty(key)) {
            prepared['ms.' + key] = window.analytics._.truncateString(jQuery.trim(object[key]));
          }
        }
        return prepared;
      },
      prepareAWAAttributes: function (object) {
        var prepared = {},
          key;
        for (key in object) {
          if (object.hasOwnProperty(key)) {
            prepared['data-bi-' + key] = window.analytics._.truncateString(jQuery.trim(object[key]));
          }
        }
        return prepared;
      },
      truncateString: function (str) {
        var desiredLength = 1250;
        return str.length > desiredLength ? str.substring(0, desiredLength - 3) + '...' : str;
      }
    };
    window.analytics.utilities = {
      setWEDCSAttributes: function (element, wedcsAttributes) {
        var dataAttributes = window.analytics.utilities.dataAnalyticsAttributes(element),
          merged = jQuery.extend(wedcsAttributes, dataAttributes),
          prepared = window.analytics._.prepareAttributes(merged);
        element.attr(prepared);
      },
      dataAnalyticsAttributes: function (element) {
        var elementHasDataAnalyticsTag = element.is('[data-analyticstag]'),
          parsed = {};
        if (elementHasDataAnalyticsTag) {
          var dataAnalyticsAttributeArray = element.attr('data-analyticstag').split('_'),
            linkType = dataAnalyticsAttributeArray.slice(0, 3);
          if (linkType.join('')) {
            parsed.link_type = linkType.join(':');
          }
          parsed.index = dataAnalyticsAttributeArray[4].match(/\d$/).join('');
          parsed.cmpgrp = dataAnalyticsAttributeArray[3];
        }
        return parsed;
      },
      getMetaTagContent: function (metaName) {
        return jQuery('meta[name="' + metaName + '"]').attr('content');
      },
      mscomCustomEventBuilder: function (wedcsAttributes) {
        var msComEventArray = [],
          wedcskey;
        for (wedcskey in wedcsAttributes) {
          if (wedcsAttributes.hasOwnProperty(wedcskey)) {
            msComEventArray.push(wedcskey, wedcsAttributes[wedcskey]);
          }
        }
        window.MscomCustomEvent.apply(this, msComEventArray);
      },
      readCookie: function (cookieName) {
        var nameEQ = cookieName + "=",
          ca = document.cookie.split(';'),
          i, c;
        for (i = 0; i < ca.length; i++) {
          c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
          }
        }
        return null;
      },
      validateCookie: function (cookieName, cookieValue) {
        var cookie = decodeURI(window.analytics.utilities.readCookie(cookieName));
        return !cookie || cookie.indexOf(cookieValue) === -1 ? false : true;
      },
      getParameterByName: function (name) {
        var match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
      },
      setMetaTag: function (name, content) {
        var metaNode = document.createElement('meta'),
          s = document.getElementsByTagName('script');
        metaNode.name = name;
        metaNode.content = content;
        if (s.length) {
          s = s[0];
          s.parentNode.insertBefore(metaNode, s);
        }
      },
      getPageTemplate: function () {
        return jQuery('#content > div').attr('id');
      },
      insertScript: function (a, b, c, d) {
        b = document;
        c = 'script';
        d = b.createElement(c);
        d.src = a;
        d.type = 'text/java' + c;
        d.async = true;
        a = b.getElementsByTagName(c)[0];
        a.parentNode.insertBefore(d, a);
      },
      atlasTrack: function (uri, m) {
        if (m === undefined || m === null || m === '') {
          m = '11087201299407';
        }
        var timestamp = new Date();
        var qs = "&random=" + Math.ceil(Math.random() * 99999999) + timestamp.getUTCFullYear() + timestamp.getUTCMonth() + timestamp.getUTCDate() + timestamp.getUTCHours() + timestamp.getUTCMinutes() + timestamp.getUTCSeconds() + timestamp.getUTCMilliseconds();
        var uriPlus = "//ad.atdmt.com/m/a.js;m=" + m + "?event=" + uri + qs;
        window.analytics.utilities.insertScript(uriPlus);
      },
      addingTag: function (tagCollection, m) {
        for (var j = 0; j < tagCollection.length; j++) {
          var tag = tagCollection[j].t;
          $(tagCollection[j].s).attr("tag", tag);
          $(tagCollection[j].s).on("click", function () {
            window.analytics.utilities.atlasTrack($(this).attr("tag"), m);
          });
        }
      },
      addAllAttributes: function ($this, msIndex, msTitle, msCmpNm, msCmpgrp, msCmptype, msInteractionType, msPgarea, msEaAction, msEaOffer, msEaName) {
        window.analytics.utilities.setWEDCSAttributes($this, {
          'index': $this.attr("ms.index") ? $this.attr("ms.index") : msIndex,
          'cmptyp': $this.attr("ms.cmptyp") ? $this.attr("ms.cmptyp") : msCmptype,
          'interactiontype': $this.attr("ms.interactiontype") ? $this.attr("ms.interactiontype") : msInteractionType,
          'cmpgrp': $this.attr("ms.cmpgrp") ? $this.attr("ms.cmpgrp") : msCmpgrp,
          'cmpnm': $this.attr("ms.cmpnm") ? $this.attr("ms.cmpnm") : msCmpNm,
          'title': $this.attr("ms.title") ? $this.attr("ms.title") : msTitle,
          'pgarea': $this.attr("ms.pgarea") ? $this.attr("ms.pgarea") : msPgarea,
          'ea_action': $this.attr("ms.ea_action") ? $this.attr("ms.ea_action") : msEaAction,
          'ea_offer': $this.attr("ms.ea_offer") ? $this.attr("ms.ea_offer") : msEaOffer,
          'ea_name': $this.attr("ms.ea_name") ? $this.attr("ms.ea_name") : msEaName
        });
      },
      checkMetaTag: function (name, content) {
        if (window.analytics.utilities.getMetaTagContent(name) === undefined) {
          window.analytics.utilities.setMetaTag(name, content);
        } else {
          jQuery("meta[name='" + name + "']").attr("content", content);
        }
      },
      loadScriptCallback: function (a, b, d) {
        var c = document.getElementsByTagName("script"),
          h;
        d = c[0];
        for (h = 0; h < c.length; h++)
          if (c[h].src === a && c[h].readyState && /loaded|complete/.test(c[h].readyState))
            try {
              b();
            } catch (f) {
              console.log(f);
            } finally {
              return;
            }
        c = document.createElement("script");
        c.type = "text/javascript";
        c.async = !0;
        c.src = a;
        c.onerror = function () {
          this.addEventListener && (this.readyState = "loaded")
        };
        c.onload = c.onreadystatechange = function () {
          if (!this.readyState || "complete" === this.readyState || "loaded" === this.readyState) {
            this.onload = this.onreadystatechange = null;
            this.addEventListener && (this.readyState = "loaded");
            try {
              b.call(this);
            } catch (a) {
              console.log(a);
            }
          }
        };
        d.parentNode.insertBefore(c, d);
      }
    };
    window.analytics.utilities.propertyWatcher = function (options) {
      var _private = {
          watchers: []
        },
        _public = {};
      _private.options = options || {};
      _private.options.interval = _private.options.interval || 50;
      _private.Watcher = function (propertyFn, options) {
        var _public = {};
        _public.propertyFn = propertyFn;
        _public.lastValue = undefined;
        _public.options = options;
        _public.change = function (oldVal, newVal) {};
        return _public;
      };
      _private.doChecks = function () {
        for (var i = 0; i < _private.watchers.length; i++) {
          var w = _private.watchers[i],
            p = w.propertyFn ? w.propertyFn() : null;
          if (w.lastValue != p) {
            w.change(w.lastValue, p);
            w.lastValue = p;
          }
        }
        _private.resetTimer();
      };
      _private.resetTimer = function () {
        window.setTimeout(function () {
          _private.doChecks();
        }, _private.options.interval);
      };
      _private.addWatcher = function (fn, options) {
        var w = _private.Watcher(fn, options);
        _private.watchers.push(w);
        return w;
      }
      _public = {
        create: _private.addWatcher
      };
      _private.doChecks();
      return _public;
    }();
    window.analytics.utilities.ajaxListener = (function () {
      var listeners = {},
        listener = function (a, b) {
          var detected = [],
            selector = a || function () {},
            attach = b || function (node) {};
          return function () {
            if (typeof selector == 'function' && typeof attach == 'function') {
              var n = selector();
              if (typeof n == 'object') {
                if (typeof n.length != 'undefined') {
                  n = Array.prototype.slice.call(n, 0);
                  for (var i = n.length - 1; i >= 0; i--) {
                    for (var j = 0; j < detected.length; j++) {
                      if (n[i] == detected[j]) {
                        n.splice(i, 1);
                      }
                    }
                  }
                  for (var i = 0; i < n.length; detected.push(n[i++]));
                  for (var i = 0; i < n.length; attach.call(n[i], n[i++]));
                } else {
                  for (var i = 0; i < detected.length; i++) {
                    if (n == detected[i]) {
                      return;
                    }
                  }
                  detected.push(n);
                  attach.call(n, n);
                }
              }
            }
          }
        },
        _public = {
          create: function (x, y) {
            do {
              var a = parseInt(Math.random() * 100000) + ''
            } while (listeners[a]);
            listeners[a] = listener(x, y);
          }
        }
      setInterval(function () {
        for (key in listeners) {
          listeners[key]();
        }
      }, 500);
      return _public;
    })();
    data.heatIndex = 0;
    data.heatIndex2 = 0;
    data.heatIndex3 = 0;
    data.heatIndex4 = 0;
    data.heatIndex5 = 0;
    data.heatIndex6 = 0;
    data.heatIndex7 = 0;
    data.heatIndex8 = 0;
    data.heatIndex9 = 0;
    data.heatIndex10 = 0;
    data.heatIndex11 = 0;
    data.heatIndex12 = 0;
    data.heatIndex13 = 0;
    data.heatIndex14 = 0;
    data.heatIndex15 = 0;
    data.heatIndex16 = 0;
    data.heatIndex17 = 0;
    data.heatIndex18 = 0;
    data.heatIndex19 = 0;
    data.heatIndex20 = 0;
    data.heatIndex21 = 0;
    var markeri = 0,
      markerj = 0,
      markerk = 0,
      markerl = 0,
      markerm = 0,
      markern = 0,
      markero = 0,
      markerp = 0,
      markerq = 0,
      markerr = 0,
      markers = 0,
      markert = 0,
      markeru = 0,
      markerv = 0,
      markerw = 0,
      markerx = 0,
      markery = 0,
      markerz = 0,
      markerii = 0,
      markerjj = 0,
      markerkk = 0;
    window.analytics.awaUtilities = {
      setAWAAttributes: function (element, awaAttributes) {
        var prepared = window.analytics._.prepareAWAAttributes(awaAttributes);
        element.attr(prepared);
      },
      getMetaTagContent: function (metaName) {
        return jQuery('meta[name="' + metaName + '"]').attr('content');
      },
      awaPageActionBuilder: function (actionAttributes, contentAttributes, pageAttributes) {
        var eventPayload = {};
        eventPayload.contentTags = contentAttributes === undefined ? {} : contentAttributes;
        jQuery.extend(eventPayload, actionAttributes, pageAttributes);
        awa.ct.captureContentPageAction(eventPayload);
      },
      readCookie: function (cookieName) {
        var nameEQ = cookieName + "=",
          ca = document.cookie.split(';'),
          i, c;
        for (i = 0; i < ca.length; i++) {
          c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
          }
        }
        return null;
      },
      validateCookie: function (cookieName, cookieValue) {
        var cookie = decodeURI(window.analytics.awaUtilities.readCookie(cookieName));
        return !cookie || cookie.indexOf(cookieValue) === -1 ? false : true;
      },
      getParameterByName: function (name) {
        var match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
      },
      setMetaTag: function (name, content) {
        var metaNode = document.createElement('meta'),
          s = document.getElementsByTagName('script');
        metaNode.name = name;
        metaNode.content = content;
        if (s.length) {
          s = s[0];
          s.parentNode.insertBefore(metaNode, s);
        }
      },
      insertScript: function (ele, src, callback) {
        var element = document.getElementsByTagName(ele)[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        if (callback !== undefined) {
          script.onload = function () {
            callback;
          }
        }
        script.src = src;
        element.appendChild(script);
      },
      heatMap: function ($myContainer, childNode, index, marker) {
        var awaName = ($myContainer.attr('name')) ? $myContainer.attr('name') : '',
          role = ($myContainer.attr('role')) ? $myContainer.attr('role') : '',
          id = ($myContainer.attr('id')) ? $myContainer.attr('id') : '',
          bladename = ($myContainer.data('trackingBladename')) ? $myContainer.data('trackingBladename') : '',
          name = '',
          thisIndex = '';
        if (typeof awaName === 'string' && awaName !== '') {
          name = awaName.toLowerCase();
        } else if (typeof role === 'string' && role !== "") {
          name = role.toLowerCase();
        } else if (typeof bladename === 'string' && bladename !== "") {
          name = bladename.toLowerCase();
        } else {
          name = index + '-layer-' + childNode;
        }
        if (typeof id === 'string' && id !== '') {
          thisIndex = index + '-' + id.toLowerCase() + '-' + childNode;
        } else {
          thisIndex = index + '-id-' + childNode;
        }
        window.analytics.awaUtilities.setAWAAttributes($myContainer, {
          'id': thisIndex,
          'name': marker + '-' + name
        });
      },
      heatPage: function ($thisLink, childNode, index, marker) {
        var thisName = ($thisLink.attr('name')) ? $thisLink.attr('name') : '',
          thisElementTitle = ($thisLink.attr('title')) ? $thisLink.attr('title') : '',
          thisElementID = ($thisLink.attr('id')) ? $thisLink.attr('id') : '',
          thisValueTitle = ($thisLink.attr('value')) ? $thisLink.attr('value') : '',
          thisLabel = ($thisLink.attr('aria-label')) ? $thisLink.attr('aria-label') : '',
          thisTitle = '',
          thisTitleClean = '',
          thisIndex = '';
        if (typeof thisLabel === "string" && thisLabel !== "") {
          thisTitle = index + '-' + thisLabel.toLowerCase();
        } else if (typeof thisElementTitle === "string" && thisElementTitle !== "") {
          thisTitle = index + '-' + thisElementTitle.toLowerCase();
        } else if (typeof thisValueTitle === "string" && thisValueTitle !== "") {
          thisTitle = index + '-' + thisValueTitle.toLowerCase();
        } else if (typeof thisName === "string" && thisName !== "") {
          thisTitle = index + '-' + thisName.toLowerCase();
        } else {
          thisTitle = index + '-link';
        }
        if (typeof thisElementID === 'string' && thisElementID !== "") {
          thisIndex = index + '-' + thisElementID.toLowerCase() + '-' + childNode;
        } else {
          thisIndex = index + '-' + childNode;
        }
        window.analytics.awaUtilities.fbEmail(thisTitle);
        if (data.mytext.indexOf('*FLAGGED*') === -1) {
          window.analytics.awaUtilities.setAWAAttributes($thisLink, {
            'id': thisIndex,
            'name': marker + '-' + data.mytext
          });
        } else {
          window.analytics.awaUtilities.setAWAAttributes($thisLink, {
            'id': thisIndex,
            'name': marker + '-' + data.mytext,
            'behavior': '124'
          });
        }
      },
      fbEmail: function (mytext) {
        window.analytics.data.mytext = mytext.replace(/(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+\b/gi, "*FLAGGED*");
      },
      linageWalker: function () {
        var childNode = '',
          containerArray = ['DIV', 'MAIN', 'UL', 'OL', 'LI', 'NAV', 'FOOTER', 'FORM', 'SPAN', 'SECTION', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HEADER', 'EM', 'SEARCH', 'P', 'NG-INCLUDE'],
          linkArray = ['A', 'INPUT', 'SELECT', 'BUTTON'];
        data.heatIndex = 1;
        for (var i = 0; i < jQuery('body')[0].children.length; i++) {
          var $that = jQuery('body')[0].children[i],
            $this = jQuery($that);
          markeri = 0;
          if (typeof $this[0] !== 'undefined') {
            childNode = $this[0].nodeName;
            if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
              window.analytics.awaUtilities.heatMap(jQuery($this), childNode, data.heatIndex, markeri);
              data.heatIndex++;
              data.heatIndex2 = 1;
              for (var j = 0; j < $this[0].children.length; j++) {
                var $that2 = $this[0].children[j],
                  $this2 = jQuery($that2);
                markerj = 1;
                if (typeof $this2[0] !== 'undefined') {
                  childNode = $this2[0].nodeName;
                  if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                    window.analytics.awaUtilities.heatMap(jQuery($this2), childNode, data.heatIndex2, markerj);
                    data.heatIndex2++;
                    data.heatIndex3 = 1;
                    for (var k = 0; k < $this2[0].children.length; k++) {
                      var $that3 = $this2[0].children[k],
                        $this3 = jQuery($that3);
                      markerk = 2;
                      if (typeof $this3[0] !== 'undefined') {
                        childNode = $this3[0].nodeName;
                        if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                          window.analytics.awaUtilities.heatMap(jQuery($this3), childNode, data.heatIndex3, markerk);
                          data.heatIndex3++;
                          data.heatIndex4 = 1;
                          for (var l = 0; l < $this3[0].children.length; l++) {
                            var $that4 = $this3[0].children[l],
                              $this4 = jQuery($that4);
                            markerl = 3;
                            if (typeof $this4[0] !== 'undefined') {
                              childNode = $this4[0].nodeName;
                              if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                window.analytics.awaUtilities.heatMap(jQuery($this4), childNode, data.heatIndex4, markerl);
                                data.heatIndex4++;
                                data.heatIndex5 = 1;
                                for (var m = 0; m < $this4[0].children.length; m++) {
                                  var $that5 = $this4[0].children[m],
                                    $this5 = jQuery($that5);
                                  markerm = 4;
                                  if (typeof $this5[0] !== 'undefined') {
                                    childNode = $this5[0].nodeName;
                                    if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                      window.analytics.awaUtilities.heatMap(jQuery($this5), childNode, data.heatIndex5, markerm);
                                      data.heatIndex5++;
                                      data.heatIndex6 = 1;
                                      for (var n = 0; n < $this5[0].children.length; n++) {
                                        var $that6 = $this5[0].children[n],
                                          $this6 = jQuery($that6);
                                        markern = 5;
                                        if (typeof $this6[0] !== 'undefined') {
                                          childNode = $this6[0].nodeName;
                                          if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                            window.analytics.awaUtilities.heatMap(jQuery($this6), childNode, data.heatIndex6, markern);
                                            data.heatIndex6++;
                                            data.heatIndex7 = 1;
                                            for (var o = 0; o < $this6[0].children.length; o++) {
                                              var $that7 = $this6[0].children[o],
                                                $this7 = jQuery($that7);
                                              markero = 6;
                                              if (typeof $this7[0] !== 'undefined') {
                                                childNode = $this7[0].nodeName;
                                                if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                  window.analytics.awaUtilities.heatMap(jQuery($this7), childNode, data.heatIndex7, markero);
                                                  data.heatIndex7++;
                                                  data.heatIndex8 = 1
                                                  for (var p = 0; p < $this7[0].children.length; p++) {
                                                    var $that8 = $this7[0].children[p],
                                                      $this8 = jQuery($that8);
                                                    markerp = 7;
                                                    if (typeof $this8[0] !== 'undefined') {
                                                      childNode = $this8[0].nodeName;
                                                      if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                        window.analytics.awaUtilities.heatMap(jQuery($this8), childNode, data.heatIndex8, markerp);
                                                        data.heatIndex8++;
                                                        data.heatIndex9 = 1;
                                                        for (var q = 0; q < $this8[0].children.length; q++) {
                                                          var $that9 = $this8[0].children[q],
                                                            $this9 = jQuery($that9);
                                                          markerq = 8;
                                                          if (typeof $this9[0] !== 'undefined') {
                                                            childNode = $this9[0].nodeName;
                                                            if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                              window.analytics.awaUtilities.heatMap(jQuery($this9), childNode, data.heatIndex9, markerq);
                                                              data.heatIndex9++;
                                                              data.heatIndex10 = 1;
                                                              for (var r = 0; r < $this9[0].children.length; r++) {
                                                                var $that10 = $this9[0].children[r],
                                                                  $this10 = jQuery($that10);
                                                                markerr = 9;
                                                                if (typeof $this10[0] !== 'undefined') {
                                                                  childNode = $this10[0].nodeName;
                                                                  if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                    window.analytics.awaUtilities.heatMap(jQuery($this10), childNode, data.heatIndex10, markerr);
                                                                    data.heatIndex10++;
                                                                    data.heatIndex11 = 1;
                                                                    for (var s = 0; s < $this10[0].children.length; s++) {
                                                                      var $that11 = $this10[0].children[s],
                                                                        $this11 = jQuery($that11);
                                                                      markers = 10;
                                                                      if (typeof $this11[0] !== 'undefined') {
                                                                        childNode = $this11[0].nodeName;
                                                                        if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                          window.analytics.awaUtilities.heatMap(jQuery($this11), childNode, data.heatIndex11, markers);
                                                                          data.heatIndex11++;
                                                                          data.heatIndex12 = 1;
                                                                          for (var t = 0; t < $this11[0].children.length; t++) {
                                                                            var $that12 = $this11[0].children[t],
                                                                              $this12 = jQuery($that12);
                                                                            markert = 11;
                                                                            if (typeof $this12[0] !== 'undefined') {
                                                                              childNode = $this12[0].nodeName;
                                                                              if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                window.analytics.awaUtilities.heatMap(jQuery($this12), childNode, data.heatIndex12, markert);
                                                                                data.heatIndex12++;
                                                                                data.heatIndex13 = 1;
                                                                                for (var u = 0; u < $this12[0].children.length; u++) {
                                                                                  var $that13 = $this12[0].children[u],
                                                                                    $this13 = jQuery($that13);
                                                                                  markeru = 12;
                                                                                  if (typeof $this13[0] !== 'undefined') {
                                                                                    childNode = $this13[0].nodeName;
                                                                                    if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                      window.analytics.awaUtilities.heatMap(jQuery($this13), childNode, data.heatIndex13, markeru);
                                                                                      data.heatIndex13++;
                                                                                      data.heatIndex14 = 1;
                                                                                      for (var v = 0; v < $this13[0].children.length; v++) {
                                                                                        var $that14 = $this13[0].children[v],
                                                                                          $this14 = jQuery($that14);
                                                                                        markerv = 13;
                                                                                        if (typeof $this14[0] !== 'undefined') {
                                                                                          childNode = $this14[0].nodeName;
                                                                                          if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                            window.analytics.awaUtilities.heatMap(jQuery($this14), childNode, data.heatIndex14, markerv);
                                                                                            data.heatIndex14++;
                                                                                            data.heatIndex15 = 1;
                                                                                            for (var w = 0; w < $this14[0].children.length; w++) {
                                                                                              var $that15 = $this14[0].children[w],
                                                                                                $this15 = jQuery($that15);
                                                                                              markerw = 14;
                                                                                              if (typeof $this15[0] !== 'undefined') {
                                                                                                childNode = $this15[0].nodeName;
                                                                                                if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                                  window.analytics.awaUtilities.heatMap(jQuery($this15), childNode, data.heatIndex15, markerw);
                                                                                                  data.heatIndex15++;
                                                                                                  data.heatIndex16 = 1;
                                                                                                  for (var x = 0; x < $this15[0].children.length; x++) {
                                                                                                    var $that16 = $this15[0].children[x],
                                                                                                      $this16 = jQuery($that16);
                                                                                                    markerx = 15;
                                                                                                    if (typeof $this16[0] !== 'undefined') {
                                                                                                      childNode = $this16[0].nodeName;
                                                                                                      if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                                        window.analytics.awaUtilities.heatMap(jQuery($this16), childNode, data.heatIndex16, markerx);
                                                                                                        data.heatIndex16++;
                                                                                                        data.heatIndex17 = 1;
                                                                                                        for (var y = 0; y < $this16[0].children.length; y++) {
                                                                                                          var $that17 = $this16[0].children[y],
                                                                                                            $this17 = jQuery($that17);
                                                                                                          markery = 16;
                                                                                                          if (typeof $this17[0] !== 'undefined') {
                                                                                                            childNode = $this17[0].nodeName;
                                                                                                            if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                                              window.analytics.awaUtilities.heatMap(jQuery($this17), childNode, data.heatIndex17, markery);
                                                                                                              data.heatIndex17++;
                                                                                                              data.heatIndex18 = 1;
                                                                                                              for (var z = 0; z < $this17[0].children.length; z++) {
                                                                                                                var $that18 = $this17[0].children[z],
                                                                                                                  $this18 = jQuery($that18);
                                                                                                                markerz = 17;
                                                                                                                if (typeof $this18[0] !== 'undefined') {
                                                                                                                  childNode = $this18[0].nodeName;
                                                                                                                  if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                                                    window.analytics.awaUtilities.heatMap(jQuery($this18), childNode, data.heatIndex18, markerz);
                                                                                                                    data.heatIndex18++;
                                                                                                                    data.heatIndex19 = 1;
                                                                                                                    for (var ii = 0; ii < $this18[0].children.length; ii++) {
                                                                                                                      var $that19 = $this18[0].children[ii],
                                                                                                                        $this19 = jQuery($that19);
                                                                                                                      markerii = 18;
                                                                                                                      if (typeof $this19[0] !== 'undefined') {
                                                                                                                        childNode = $this19[0].nodeName;
                                                                                                                        if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                                                          window.analytics.awaUtilities.heatMap(jQuery($this19), childNode, data.heatIndex19, markerii);
                                                                                                                          data.heatIndex19++;
                                                                                                                          data.heatIndex20 = 1;
                                                                                                                          for (var jj = 0; jj < $this19[0].children.length; jj++) {
                                                                                                                            var $that20 = $this19[0].children[jj],
                                                                                                                              $this20 = jQuery($that20);
                                                                                                                            markerjj = 19;
                                                                                                                            if (typeof $this20[0] !== 'undefined') {
                                                                                                                              childNode = $this20[0].nodeName;
                                                                                                                              if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                                                                window.analytics.awaUtilities.heatMap(jQuery($this20), childNode, data.heatIndex20, markerjj);
                                                                                                                                data.heatIndex20++;
                                                                                                                                data.heatIndex21 = 1;
                                                                                                                                for (var kk = 0; kk < $this20[0].children.length; kk++) {
                                                                                                                                  var $that21 = $this20[0].children[kk],
                                                                                                                                    $this21 = jQuery($that21);
                                                                                                                                  markerkk = 20;
                                                                                                                                  if (typeof $this21[0] !== 'undefined') {
                                                                                                                                    childNode = $this21[0].nodeName;
                                                                                                                                    if (jQuery.inArray(childNode, containerArray) > -1 || childNode.indexOf('PAGED-') > -1 || childNode.indexOf('FILTER-') > -1 || childNode.indexOf('CONTENT-') > -1 || childNode.indexOf('CHECKBOX-') > -1) {
                                                                                                                                      window.analytics.awaUtilities.heatMap(jQuery($this21), childNode, data.heatIndex21, markerkk);
                                                                                                                                      data.heatIndex21++;
                                                                                                                                    } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                                                                      childNode = $this21[0].nodeName;
                                                                                                                                      window.analytics.awaUtilities.heatPage(jQuery($this21), childNode, data.heatIndex21, markerkk);
                                                                                                                                      data.heatIndex21++;
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                                                                childNode = $this20[0].nodeName;
                                                                                                                                window.analytics.awaUtilities.heatPage(jQuery($this20), childNode, data.heatIndex20, markerjj);
                                                                                                                                data.heatIndex20++;
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                                                          childNode = $this19[0].nodeName;
                                                                                                                          window.analytics.awaUtilities.heatPage(jQuery($this19), childNode, data.heatIndex19, markerii);
                                                                                                                          data.heatIndex19++;
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                                                    childNode = $this18[0].nodeName;
                                                                                                                    window.analytics.awaUtilities.heatPage(jQuery($this18), childNode, data.heatIndex18, markerz);
                                                                                                                    data.heatIndex18++;
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                                              childNode = $this17[0].nodeName;
                                                                                                              window.analytics.awaUtilities.heatPage(jQuery($this17), childNode, data.heatIndex17, markery);
                                                                                                              data.heatIndex17++;
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                                        childNode = $this16[0].nodeName;
                                                                                                        window.analytics.awaUtilities.heatPage(jQuery($this16), childNode, data.heatIndex16, markerx);
                                                                                                        data.heatIndex16++;
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                                  childNode = $this15[0].nodeName;
                                                                                                  window.analytics.awaUtilities.heatPage(jQuery($this15), childNode, data.heatIndex15, markerw);
                                                                                                  data.heatIndex15++;
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                            childNode = $this14[0].nodeName;
                                                                                            window.analytics.awaUtilities.heatPage(jQuery($this14), childNode, data.heatIndex14, markerv);
                                                                                            data.heatIndex14++;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                      childNode = $this13[0].nodeName;
                                                                                      window.analytics.awaUtilities.heatPage(jQuery($this13), childNode, data.heatIndex13, markeru);
                                                                                      data.heatIndex13++;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                                childNode = $this12[0].nodeName;
                                                                                window.analytics.awaUtilities.heatPage(jQuery($this12), childNode, data.heatIndex12, markert);
                                                                                data.heatIndex12++;
                                                                              }
                                                                            }
                                                                          }
                                                                        } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                          childNode = $this11[0].nodeName;
                                                                          window.analytics.awaUtilities.heatPage(jQuery($this11), childNode, data.heatIndex11, markers);
                                                                          data.heatIndex11++;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                                    childNode = $this10[0].nodeName;
                                                                    window.analytics.awaUtilities.heatPage(jQuery($this10), childNode, data.heatIndex10, markerr);
                                                                    data.heatIndex10++;
                                                                  }
                                                                }
                                                              }
                                                            } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                              childNode = $this9[0].nodeName;
                                                              window.analytics.awaUtilities.heatPage(jQuery($this9), childNode, data.heatIndex9, markerq);
                                                              data.heatIndex9++;
                                                            }
                                                          }
                                                        }
                                                      } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                        childNode = $this8[0].nodeName;
                                                        window.analytics.awaUtilities.heatPage(jQuery($this8), childNode, data.heatIndex8, markerp);
                                                        data.heatIndex8++;
                                                      }
                                                    }
                                                  }
                                                } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                                  childNode = $this7[0].nodeName;
                                                  window.analytics.awaUtilities.heatPage(jQuery($this7), childNode, data.heatIndex7, markero);
                                                  data.heatIndex7++;
                                                }
                                              }
                                            }
                                          } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                            childNode = $this6[0].nodeName;
                                            window.analytics.awaUtilities.heatPage(jQuery($this6), childNode, data.heatIndex6, markern);
                                            data.heatIndex6++;
                                          }
                                        }
                                      }
                                    } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                      childNode = $this5[0].nodeName;
                                      window.analytics.awaUtilities.heatPage(jQuery($this5), childNode, data.heatIndex5, markerm);
                                      data.heatIndex5++;
                                    }
                                  }
                                }
                              } else if (jQuery.inArray(childNode, linkArray) > -1) {
                                childNode = $this4[0].nodeName;
                                window.analytics.awaUtilities.heatPage(jQuery($this4), childNode, data.heatIndex4, markerl);
                                data.heatIndex4++;
                              }
                            }
                          }
                        } else if (jQuery.inArray(childNode, linkArray) > -1) {
                          childNode = $this3[0].nodeName;
                          window.analytics.awaUtilities.heatPage(jQuery($this3), childNode, data.heatIndex3, markerk);
                          data.heatIndex3++;
                        }
                      }
                    }
                  } else if (jQuery.inArray(childNode, linkArray) > -1) {
                    childNode = $this2[0].nodeName;
                    window.analytics.awaUtilities.heatPage(jQuery($this2), childNode, data.heatIndex2, markerj);
                    data.heatIndex2++;
                  }
                }
              }
            } else if (jQuery.inArray(childNode, linkArray) > -1) {
              childNode = $this[0].nodeName;
              window.analytics.awaUtilities.heatPage(jQuery($this), childNode, data.heatIndex, markeri);
              data.heatIndex++;
            }
          }
        }
      }
    };
    data.awaShareIndex = 0;
    data.awaSource = '';
    data.doDivCheck = true;
    data.feedbackEnd = 0;
    data.feedbackEndAWA = 0;
    data.feedbackVote = 0;
    data.flag = 0;
    data.FWFASpecializedPractice = false;
    data.FWFBDataandAI = false;
    data.FWFCSecurityCompliance = false;
    data.FWFDApplicationInnovation = false;
    data.FWFECloudInfrastructureManagement = false;
    data.FWFFCollaboration = false;
    data.FWFGModernDesktop = false;
    data.hashTarget = '';
    data.link_text = '';
    data.maxValue = 0;
    data.msCounter = 0;
    data.msFlag = 0;
    data.msFlag1 = 0;
    data.msNav1 = '';
    data.msNav2 = '';
    data.msSubtop = '';
    data.msSupCln = '';
    data.msTitles = '';
    data.msTitle = '';
    data.msTop = '';
    data.msTopic = '';
    data.myhref = '';
    data.myhref2 = '';
    data.mytext = '';
    data.scrollIndex = 0;
    data.scrollIndex1 = 0;
    data.skip = 0;
    data.submitOnce = 0;
    data.utcName = '';
    data.videoOnPage = jQuery(document).find('a[href*="vimeo"]').attr('href') ? 1 : 0;
    data.volume = 1;
    window.analytics.globalfunctions = {
      allPage: function ($this) {
        try {
          var href = '',
            mytitle = '',
            existingEa = $this.attr('data-bi-type');
          if (existingEa === null || existingEa === undefined) {
            href = $this.attr('href');
            mytitle = $this.attr('title');
            if (mytitle == undefined) {
              mytitle = '';
            }
            var endaction = 'none';
            if ((href !== null && href !== undefined) && href.match(/customers.microsoft.com/i)) {
              endaction = 'cst';
            }
            if ((href !== null && href !== undefined) && (href.match(/download\.microsoft\.com/i) || href.match(/microsoft\.com\/..-..\/download/i) || href.match(/assets\.microsoft\.com/i) || href.match(/microsoft\.com\/download/i))) {
              endaction = 'dwn';
            }
            if ((href !== null && href !== undefined) && (href.match(/info\.microsoft\.com/i) || href.match(/azureinfo\.microsoft\.com/i))) {
              endaction = 'gtd';
            }
            if ((href !== null && href !== undefined) && (href.match(/vimeo\.com/i) || href.match(/channel9\.microsoft\.com/i) || href.match(/youtube\.com/i) || href.match(/channel9\.msdn\.com/i))) {
              endaction = 'vid';
            }
            if ((href !== null && href !== undefined) && href.match(/technet\.microsoft\.com/i)) {
              endaction = 'try';
            }
            if ((href !== null && href !== undefined && mytitle.match(/follow/i)) && (href.match(/youtube\.com/i) || href.match(/yammer\.com/i) || href.match(/twitter\.com/i) || href.match(/www\.facebook\.com/i) || href.match(/www\.linkedin\.com/i) || href.match(/reddit\.com/i) || href.match(/plus\.google\.com/i))) {
              endaction = 'follow';
            }
            if ((href !== null && href !== undefined && mytitle.match(/share/i)) && (href.match(/youtube\.com/i) || href.match(/yammer\.com/i) || href.match(/twitter\.com/i) || href.match(/www\.facebook\.com/i) || href.match(/www\.linkedin\.com/i) || href.match(/reddit\.com/i) || href.match(/plus\.google\.com/i))) {
              endaction = 'shr';
            }
            if ((href !== null && href !== undefined) && href.match(/\/community\//i)) {
              endaction = 'cmmnty';
            }
            if (href === null || href === undefined || href.match(/(.gif)|(.png)|(.jpeg)|(^#$)/i)) {
              endaction = 'none';
            }
            if (endaction !== 'none') {
              $this.attr('data-bi-type', endaction);
            }
          }
        } catch (e) {}
        return;
      },
      assetsAddMsIndex: function () {
        try {
          awaUtil.linageWalker();
          var msIndex = 0;
          jQuery('div.asset-card.ng-scope a.media').each(function () {
            var $this = jQuery(this);
            awaUtil.setAWAAttributes($this, {
              'mto': '',
              'slot': msIndex,
              'area': 'body-asset'
            });
            msIndex++;
          });
          msIndex = 0;
          jQuery('div.asset-card.ng-scope h4.card-title a').each(function () {
            var $this = jQuery(this);
            awaUtil.setAWAAttributes($this, {
              'mto': '',
              'slot': msIndex,
              'area': 'body-asset'
            });
            msIndex++;
          });
          msIndex = 0;
          jQuery('div.one-card-x h4.subhead4 a').each(function () {
            var $this = jQuery(this);
            awaUtil.setAWAAttributes($this, {
              'mto': '',
              'slot': msIndex,
              'area': 'body-asset'
            });
            msIndex++;
          });
          msIndex = 0;
          jQuery('p.adp-asset-list a').each(function () {
            var $this = jQuery(this);
            awaUtil.setAWAAttributes($this, {
              'mto': '',
              'slot': msIndex,
              'area': 'body-asset'
            });
            msIndex++;
          });
        } catch (e) {}
        return;
      },
      assetQP: function () {
        var qpText = '',
          newText = '',
          splitText = '',
          replaceText = '',
          awaSource = '';
        data.awaSource = '';
        try {
          var sourceParameterItems = ['campaign|', 'lang|', 'market|', 'stage|', 'product|', 'product|', 'category|', 'type|', 'type|', 'life|', 'industry|', 'partner type|', 'program|', 'topic|', 'solution area|', 'practice|', 'practice building block|', 'lifecycle|', 'product area|', 'assets by campaign|', 'interest area|'];
          var queryParameterItems = ['[?&]campaign=([^&]*)', '[?&]lang=([^&]*)', '[?&]market=([^&]*)', '[?&]bystage=([^&]*)', '[?&]products=([^&]*)', '[?&]prod=([^&]*)', '[?&]bycateg=([^&]*)', '[?&]type=)([^&]*)', '[?&]bytype=([^&]*)', '[?&]life=([^&]*)', '[?&]industry=([^&]*)', '[?&]ptype=([^&]*)', '[?&]prog=([^&]*)', '[?&]topic=([^&]*)', '[?&]sol=([^&]*)', '[?&]practice=([^&]*)', '[?&]pbb=([^&]*)', '[?&]life=([^&]*)', '[?&]area=([^&]*)', '[?&]campaigns=([^&]*)', '[?&]intarea=([^&]*)'];
          for (var i = 0; i < queryParameterItems.length; i++) {
            try {
              qpText = new RegExp(queryParameterItems[i]).exec(window.location.toString());
            } catch (e) {
              qpText = '';
            }
            if (qpText !== '' && qpText !== undefined && qpText !== null) {
              if (awaSource === '') {
                newText = decodeURIComponent(qpText);
                replaceText = newText.split(',')[0].replace(/\|/g, ',');
                splitText = replaceText.split('=')[1];
                awaSource = sourceParameterItems[i] + splitText;
              } else {
                newText = decodeURIComponent(qpText);
                replaceText = newText.split(',')[0].replace(/\|/g, ',');
                splitText = replaceText.split('=')[1];
                awaSource = data.awaSource + ',' + sourceParameterItems[i] + splitText;
              }
            }
            qpText = '';
            newText = '';
            splitText = '';
          }
          data.awaSource = awaSource;
        } catch (e) {}
        return data.awaSource;
      },
      assetsCampaignMsSubtop: function () {
        try {
          var campaignTopicText = new RegExp('[?&]campaign=([^&]*)').exec(window.location.toString());
          if (campaignTopicText !== '' && campaignTopicText !== undefined && campaignTopicText !== null) {
            var myCampaignTopic = decodeURIComponent(campaignTopicText);
            data.msSubtop = myCampaignTopic.split('=')[1].split(',')[0];
          }
          if (data.msSubtop === '' || data.msSubtop === undefined || data.msSubtop === null) {
            data.msSubtop = 'none';
          }
        } catch (e) {}
        return;
      },
      assetsCampaignSelected: function () {
        try {
          data.msTopic = 'none';
          data.msNav1 = 'none';
          $('ul.filter-list.ng-scope li').each(function () {
            if (jQuery(this).hasClass('selected')) {
              data.msTopic = jQuery(this).find('a').attr('ms.cmpgrp');
              data.msNav1 = jQuery(this).find('a').attr('ms.title');
            }
          });
        } catch (e) {}
        return;
      },
      assetsFilterResults: function (filterItem) {
        try {
          setTimeout(function () {
            var filterText = filterItem.find('input.filter-checkbox').attr('title'),
              awaID = filterItem.find('label.filter-checkbox-label').attr('for'),
              awaArea = (filterItem.attr('data-bi-area')) ? filterItem.attr('data-bi-area') : 'filter by-source',
              awaSlot = (filterItem.attr('data-bi-slot')) ? filterItem.attr('data-bi-slot') : jQuery('ul.filter-list li').index(filterItem),
              allFilterText = '';
            jQuery('ul.filter-list input[ariachecked="true"]').each(function () {
              allFilterText = jQuery(this).attr('title') + ',' + allFilterText;
            });
            analytics.globalfunctions.assetsHashMsSupCln();
            analytics.globalfunctions.sendTag(awa.behavior.APPLY, filterText, awaID, 'filter', 'search results|' + allFilterText + 'hash-page|' + data.msSupCln, 'na', '', '', 'na', '', '', awaArea, awaSlot, 'na', 'na', 'na', '');
            analytics.globalfunctions.sendUtag(filterText, 'apply filter', 'click', 'search results|' + allFilterText, '', '', '', '', '', '', '', '', filterText, '', '', '', data.msSupCln);
          }, 250);
        } catch (e) {}
        return;
      },
      assetsFilterTag: function ($this, behaviorUsed) {
        try {
          var awaArea = $this.data('biArea'),
            awaSlot = $this.data('biSlot'),
            awaName = $this.data('biName'),
            awaID = $this.prev().attr('for');
          analytics.globalfunctions.assetsHashMsSupCln();
          if (behaviorUsed < 6) {
            awaType = 'filter';
          } else {
            awaType = 'filter category';
          }
          analytics.globalfunctions.sendTag(behaviorUsed, awaName, awaID, 'filter', 'hash-page|' + data.msSupCln, 'na', '', '', 'na', '', '', awaArea + '-filter', awaSlot, 'na', 'na', 'na', '');
          analytics.globalfunctions.sendUtag(awaName, awaType, 'click', '', '', '', '', '', '', '', '', '', awaName, '', '', data.msSupCln);
        } catch (e) {}
        return;
      },
      assetsHashMsSupCln: function () {
        try {
          var a = decodeURIComponent(window.location.toString().split('#')[1]);
          if (a !== '' && a !== undefined && a !== null) {
            data.msSupCln = a;
          } else {
            data.msSupCln = '';
          }
          if (data.msSupCln === "undefined") {
            data.msSupCln = '';
          }
        } catch (e) {}
        return data.msSupCln;
      },
      assetsHashTarget: function ($this) {
        try {
          var a = decodeURIComponent($this.attr('href').split('#')[1]);
          if (a !== '' && a !== undefined && a !== null) {
            data.hashTarget = a;
          } else {
            data.hashTarget = '';
          }
          if (data.hashTarget === "undefined") {
            data.hashTarget = '';
          }
        } catch (e) {}
        return data.hashTarget;
      },
      assetsLangMsNav2: function () {
        try {
          var langTopicText = new RegExp('[?&]lang=([^&]*)').exec(window.location.toString());
          if (langTopicText !== '' && langTopicText !== undefined && langTopicText !== null) {
            var myLangTopic = decodeURIComponent(langTopicText);
            data.msTitles2 = myLangTopic.split('=')[1].split(',')[0];
          }
          if (data.msTitles2 === '' || data.msTitles2 === undefined || data.msTitles2 === null) {
            data.msTitles2 = 'none';
          }
        } catch (e) {}
        return;
      },
      assetsLangNmarket: function () {
        try {
          var msFilterArray = [],
            msFilterValArray = [];
          $('a.dropdown-toggle.ac-modal-drpdwn-link.selectedTitle').each(function () {
            var msFilter = jQuery(this).attr('ms.cmpgrp'),
              msFilterVal = jQuery(this).attr('ms.cmpnm');
            if (msFilter === undefined || msFilter === null || msFilter === '') {
              msFilter = 'none';
            }
            if (msFilterVal === undefined || msFilterVal === null || msFilterVal === '') {
              msFilterVal = 'none';
            }
            msFilterArray.push(msFilter);
            msFilterValArray.push(msFilterVal);
          });
          switch (msFilterArray.length) {
            case 0:
              data.msTop = 'none';
              data.msSubtop = 'none';
              break;
            case 1:
              if (msFilterArray[0].indexOf('lang') !== -1) {
                data.msTop = msFilterValArray[0];
              } else {
                data.msTop = 'none';
              }
              if (msFilterArray[0].indexOf('market') !== -1) {
                data.msSubtop = msFilterValArray[0];
              } else {
                data.msSubtop = 'none';
              }
              break;
            case 2:
              data.msTop = msFilterValArray[0];
              data.msSubtop = msFilterValArray[1];
              break;
            default:
          }
        } catch (e) {}
        return;
      },
      assetsMarketMsNav1: function () {
        try {
          var marketTopicText = new RegExp('[?&](market=|bystage=)([^&]*)').exec(window.location.toString());
          if (marketTopicText !== '' && marketTopicText !== undefined && marketTopicText !== null) {
            var myMarketTopic = decodeURIComponent(marketTopicText);
            data.msTitles1 = myMarketTopic.split('=')[1].split(',')[0];
          }
          if (data.msTitles1 === '' || data.msTitles1 === undefined || data.msTitles1 === null) {
            data.msTitles1 = 'none';
          }
        } catch (e) {}
        return data.msTitles1;
      },
      assetsProductsMsTop: function () {
        try {
          var productsTopicText = new RegExp('[?&](products=|bycateg=)([^&]*)').exec(window.location.toString());
          if (productsTopicText !== '' && productsTopicText !== undefined && productsTopicText !== null) {
            var myProductsTopic = decodeURIComponent(productsTopicText);
            data.msTop = myProductsTopic.split('=')[1].split(',')[0];
          }
          if (data.msTop === '' || data.msTop === undefined || data.msTop === null) {
            data.msTop = 'none';
          }
        } catch (e) {}
        return data.msTop;
      },
      assetsSearchPos: function () {
        var pageNumber, totalNumberOfResults, resultsPerPage;
        try {
          totalNumberOfResults = (jQuery('p.pagingSummary strong')['1'].innerText.trim()) ? jQuery('p.pagingSummary strong')['1'].innerText.trim() : jQuery('p.mobile-num-results strong')['0'].innerText.trim();
        } catch (error) {
          totalNumberOfResults = 'na';
        }
        try {
          if (totalNumberOfResults === 'na') {
            totalNumberOfResults = jQuery('input#hdnTotalNumberOfResults').val();
          }
          if (totalNumberOfResults === 'na' || totalNumberOfResults === undefined) {
            totalNumberOfResults = '1';
          }
          pageNumber = (jQuery('a.results-pagination-link.ng-binding.active.selected').text().trim()) ? jQuery('a.results-pagination-link.ng-binding.active.selected').text().trim() : jQuery('a.results-pagination-link-x.ng-binding.active.selected').text().trim();
          if (pageNumber === '' || pageNumber === undefined) {
            pageNumber = jQuery('input#hdnpagenumber').val();
          } else {
            pageNumber = '1';
          }
          resultsPerPage = jQuery('input#hdnNumberOfRecordsToDisplay').val();
          if (resultsPerPage === '' || resultsPerPage === undefined) {
            resultsPerPage = '12';
          }
          var awaPage = parseInt(pageNumber),
            awaTotPage = parseInt(totalNumberOfResults),
            awaResultsPerPage = parseInt(resultsPerPage);
          if (isNaN(awaPage)) {
            awaPage = 1;
          }
          util.checkMetaTag('awa-pgidx', awaPage);
          util.checkMetaTag('awa-pgtot', Math.ceil(awaTotPage / awaResultsPerPage));
          var indexPosition = 1 + ((awaPage - 1) * awaResultsPerPage);
          jQuery('div.row.asset-card-row > div').each(function () {
            jQuery(this).find('a').each(function () {
              awaUtil.setAWAAttributes(jQuery(this), {
                'srchlinkpos': indexPosition
              });
            });
            indexPosition++;
          });
          indexPosition = 1 + ((awaPage - 1) * awaResultsPerPage);
          jQuery('div.one-card-x div h4 a').each(function () {
            awaUtil.setAWAAttributes(jQuery(this), {
              'srchlinkpos': indexPosition
            });
            indexPosition++;
          });
          indexPosition = 1 + ((awaPage - 1) * awaResultsPerPage);
          jQuery('div.adp-asset-items a').each(function () {
            awaUtil.setAWAAttributes(jQuery(this), {
              'srchlinkpos': indexPosition
            });
            indexPosition++;
          });
          indexPosition = 0 + ((awaPage - 1) * awaResultsPerPage);
          jQuery('div.search-result-block').each(function () {
            jQuery(this).find('a').each(function () {
              awaUtil.setAWAAttributes(jQuery(this), {
                'srchlinkpos': indexPosition
              });
            });
            indexPosition++;
          });
        } catch (e) {}
        return;
      },
      assetsSetEventBuilderAssets: function (msIndex) {
        if (false) {
          try {
            analytics.globalfunctions.assetsTileTitles();
            analytics.globalfunctions.assetsTypeMsTopic();
            analytics.globalfunctions.assetsMarketMsNav1();
            analytics.globalfunctions.assetsProductsMsTop();
            analytics.globalfunctions.assetsCampaignMsSubtop();
            analytics.globalfunctions.assetsLangMsNav2();
            analytics.globalfunctions.assetsHashMsSupCln();
            analytics.globalfunctions.assetsAddMsIndex();
            analytics.globalfunctions.assetQP();
            analytics.globalfunctions.sendUtag('filter_settings', 'filter', '', data.msSupCln, data.msTopic, data.msTitles1, data.msTitles2, data.msTop, data.msSubtop, '', '', data.msTitles.substring(1), '', '', '', data.msSupCln);
            analytics.globalfunctions.sendTag(awa.behavior.APPLY, data.msTitles.substring(1), data.msSupCln, 'checkbox', data.awaSource + ',hash-page|' + data.msSupCln, 'na', '', '', 'na', '', '', 'filter_settings', msIndex, 'na', 'na', 'na', '');
          } catch (e) {}
          return;
        }
      },
      assetsSetEventBuilderCampaign: function (msIndex) {
        if (false) {
          try {
            analytics.globalfunctions.assetsTileTitles();
            analytics.globalfunctions.assetsLangNmarket();
            analytics.globalfunctions.assetsCampaignSelected();
            analytics.globalfunctions.assetsHashMsSupCln();
            analytics.globalfunctions.assetsAddMsIndex();
            analytics.globalfunctions.assetQP();
            analytics.globalfunctions.sendUtag('filter_settings', 'filter', '', data.msSupCln, data.msTopic, data.msTitles1, '', data.msTop, data.msSubtop, '', '', data.msTitles.substring(1), '', '', '', '', data.msSupCln);
            analytics.globalfunctions.sendTag(awa.behavior.APPLY, data.msTitles.substring(1), data.msSupCln, 'checkbox', data.awaSource + ',hash-page|' + data.msSupCln, 'na', '', '', 'na', '', '', 'filter_settings', msIndex, 'na', 'na', 'na', '');
          } catch (e) {}
          return;
        }
      },
      assetsSetUtagViewMapping: function (filterValue, slot) {
        if (false) {
          try {
            analytics.globalfunctions.assetsHashMsSupCln();
            analytics.globalfunctions.sendUtag(filterValue, 'filter change', '', (data.msSupCln) ? data.msSupCln : '', '', (data.msNav1) ? data.msNav1 : '', '', (data.msTop) ? data.msTop : '', (data.msSubtop) ? data.msSubtop : '', '', '', (data.msTitles) ? data.msTitles : '', '', '', '', data.msSupCln);
            analytics.globalfunctions.sendTag(awa.behavior.APPLY, filterValue, data.msSupCln, 'checkbox', 'hash-page|' + data.msSupCln, 'na', '', '', 'na', '', '', 'filter_settings', slot, 'na', 'na', 'na', '');
          } catch (e) {}
          return;
        }
      },
      assetsTileTitles: function () {
        try {
          var msTitle, msTitleArray = [];
          data.msTitles = '';
          jQuery('a.media').each(function () {
            msTitle = jQuery(this).attr('title');
            msTitleArray.push(msTitle);
          });
          if (!msTitleArray.length) {
            jQuery('h3.hero').each(function () {
              msTitle = jQuery(this).text().trim();
              msTitleArray.push(msTitle);
            });
          }
          if (!msTitleArray.length) {
            jQuery('h4.subhead4').each(function () {
              msTitle = jQuery(this).children('a').attr('title');
              msTitleArray.push(msTitle);
            });
          }
          for (var i = 0; i < msTitleArray.length; i++) {
            data.msTitles = data.msTitles + '|' + msTitleArray[i];
          }
          if (data.msTitles === '') {
            data.msTitles = 'none';
          }
        } catch (e) {}
        return data.msTitles;
      },
      assetsTypeMsTopic: function () {
        try {
          var typeTopicText = new RegExp('[?&](type=|bytype=)([^&]*)').exec(window.location.toString());
          if (typeTopicText !== '' && typeTopicText !== undefined && typeTopicText !== null) {
            var myTypeTopic = decodeURIComponent(typeTopicText);
            data.msTopic = myTypeTopic.split('=')[1].split(',')[0];
          }
          if (data.msTopic === '' || data.msTopic === undefined || data.msTopic === null) {
            data.msTopic = 'none';
          }
        } catch (e) {}
        return data.msTopic;
      },
      carouselTag: function (behaviorValue, carouselName, contentName, contentId, contentType, awaSlot) {
        try {
          analytics.globalfunctions.sendTag(behaviorValue, carouselName + '_' + contentName, contentId, contentType, 'na', 'na', '', '', 'na', '', '', 'body - carousel hero', awaSlot, 'na', 'na', 'na', '');
        } catch (e) {}
        return;
      },
      checkViews: function () {
        try {
          jQuery('div[data-tracking-bladename="8-FWF-A-Specialized-Practice"]').each(function () {
            var $this = jQuery(this),
              activeView = $this.parent('div').is(':visible');
            if (activeView) {
              if (data.FWFASpecializedPractice) {} else {
                data.FWFASpecializedPractice = true;
                analytics.globalfunctions.assetsHashMsSupCln();
                analytics.globalfunctions.sendUtag('personalization', 'hierarchy pattern match', 'view', 'follow me| specialized practice', 'sitecore', 'v1', 'practice areas', 'shown|8-FWF-A-Specialized-Practice', 'FWF', '8-FWF-A-Specialized-Practice', '', 'follow me to specialized practice', '', '', '', data.msSupCln);
                analytics.globalfunctions.sendTag(awa.behavior.APPLY, 'specialized practice', '8-FWF-A-Specialized-Practice', 'view personalization', 'follow me| specialized practice,version|v1,event-type|hierarchy pattern match,system|sitecore' + ',hash-page| ' + data.msSupCln, 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', '');
              }
            }
          });
          jQuery('div[data-tracking-bladename="8-FWF-B-Data-and-AI"]').each(function () {
            var $this = jQuery(this),
              activeView = $this.parent('div').is(':visible');
            if (activeView) {
              if (data.FWFBDataandAI) {} else {
                data.FWFBDataandAI = true;
                analytics.globalfunctions.assetsHashMsSupCln();
                analytics.globalfunctions.sendUtag('personalization', 'hierarchy pattern match', 'view', 'follow me| data and ai', 'sitecore', 'v1', 'practice areas', 'shown|8-FWF-B-Data-and-AI', 'FWF', '8-FWF-B-Data-and-AI', '', 'follow me to data and ai', '', '', '', data.msSupCln);
                analytics.globalfunctions.sendTag(awa.behavior.APPLY, 'data and ai', '8-FWF-B-Data-and-AI', 'view personalization', 'follow me| data and ai,version|v1,event-type|hierarchy pattern match,system|sitecore' + ',hash-page| ' + data.msSupCln, 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', '');
              }
            }
          });
          jQuery('div[data-tracking-bladename="8-FWF-C-Security-Compliance"]').each(function () {
            var $this = jQuery(this),
              activeView = $this.parent('div').is(':visible');
            if (activeView) {
              if (data.FWFCSecurityCompliance) {} else {
                data.FWFCSecurityCompliance = true;
                analytics.globalfunctions.assetsHashMsSupCln();
                analytics.globalfunctions.sendUtag('personalization', 'hierarchy pattern match', 'view', 'follow me| security compliance', 'sitecore', 'v1', 'practice areas', 'shown|8-FWF-C-Security-Compliance', 'FWF', '8-FWF-C-Security-Compliance', '', 'follow me to security compliance', '', '', '', data.msSupCln);
                analytics.globalfunctions.sendTag(awa.behavior.APPLY, 'security compliance', '8-FWF-C-Security-Compliance', 'view personalization', 'follow me| security compliance,version|v1,event-type|hierarchy pattern match,system|sitecore' + ',hash-page| ' + data.msSupCln, 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', '');
              }
            }
          });
          jQuery('div[data-tracking-bladename="8-FWF-D-Application-Innovation"]').each(function () {
            var $this = jQuery(this),
              activeView = $this.parent('div').is(':visible');
            if (activeView) {
              if (data.FWFDApplicationInnovation) {} else {
                data.FWFDApplicationInnovation = true;
                analytics.globalfunctions.assetsHashMsSupCln();
                analytics.globalfunctions.sendUtag('personalization', 'hierarchy pattern match', 'view', 'follow me| application innovation', 'sitecore', 'v1', 'practice areas', 'shown|8-FWF-D-Application-Innovation', 'FWF', '8-FWF-D-Application-Innovation', '', 'follow me to application innovation', '', '', '', data.msSupCln);
                analytics.globalfunctions.sendTag(awa.behavior.APPLY, 'application innovation', '8-FWF-D-Application-Innovation', 'view personalization', 'follow me| application innovation,version|v1,event-type|hierarchy pattern match,system|sitecore' + ',hash-page| ' + data.msSupCln, 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', '');
              }
            }
          });
          jQuery('div[data-tracking-bladename="8-FWF-E-Cloud-Infrastructure-Management"]').each(function () {
            var $this = jQuery(this),
              activeView = $this.parent('div').is(':visible');
            if (activeView) {
              if (data.FWFECloudInfrastructureManagement) {} else {
                data.FWFECloudInfrastructureManagement = true;
                analytics.globalfunctions.assetsHashMsSupCln();
                analytics.globalfunctions.sendUtag('personalization', 'hierarchy pattern match', 'view', 'follow me| cloud infrastructure management', 'sitecore', 'v1', 'practice areas', 'shown|8-FWF-E-Cloud-Infrastructure-Management', 'FWF', '8-FWF-E-Cloud-Infrastructure-Management', '', 'follow me to cloud infrastructure management', '', '', '', data.msSupCln);
                analytics.globalfunctions.sendTag(awa.behavior.APPLY, 'cloud infrastructure management', '8-FWF-E-Cloud-Infrastructure-Management', 'view personalization', 'follow me| cloud infrastructure management,version|v1,event-type|hierarchy pattern match,system|sitecore' + ',hash-page| ' + data.msSupCln, 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', '');
              }
            }
          });
          jQuery('div[data-tracking-bladename="8-FWF-F-Collaboration"]').each(function () {
            var $this = jQuery(this),
              activeView = $this.parent('div').is(':visible');
            if (activeView) {
              if (data.FWFFCollaboration) {} else {
                data.FWFFCollaboration = true;
                analytics.globalfunctions.assetsHashMsSupCln();
                analytics.globalfunctions.sendUtag('personalization', 'hierarchy pattern match', 'view', 'follow me| collaboration', 'sitecore', 'v1', 'practice areas', 'shown|8-FWF-F-Collaboration', 'FWF', '8-FWF-F-Collaboration', '', 'follow me to collaboration', '', '', '', data.msSupCln);
                analytics.globalfunctions.sendTag(awa.behavior.APPLY, 'collaboration', '8-FWF-F-Collaboration', 'view personalization', 'follow me| collaboration,version|v1,event-type|hierarchy pattern match,system|sitecore' + ',hash-page| ' + data.msSupCln, 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', '');
              }
            }
          });
          jQuery('div[data-tracking-bladename="8-FWF-G-Modern-Desktop"]').each(function () {
            var $this = jQuery(this),
              activeView = $this.parent('div').is(':visible');
            if (activeView) {
              if (data.FWFGModernDesktop) {} else {
                data.FWFGModernDesktop = true;
                analytics.globalfunctions.assetsHashMsSupCln();
                analytics.globalfunctions.sendUtag('personalization', 'hierarchy pattern match', 'view', 'follow me| modern desktop', 'sitecore', 'v1', 'practice areas', 'shown|8-FWF-G-Modern-Desktop', 'FWF', '8-FWF-G-Modern-Desktop', '', 'follow me to modern desktop', '', '', '', data.msSupCln);
                analytics.globalfunctions.sendTag(awa.behavior.APPLY, 'modern desktop', '8-FWF-G-Modern-Desktop', 'view personalization', 'follow me| modern desktop,version|v1,event-type|hierarchy pattern match,system|sitecore' + ',hash-page| ' + data.msSupCln, 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', '');
              }
            }
          });
        } catch (e) {}
        return;
      },
      cot5AssetClickCampaign: function ($this, msCmpType) {
        try {
          data.msTitle = $this.attr('title');
          data.msSupCid = $this.attr('ms.cmpnm');
          var msInteractionType = '1';
          var msIndex = $this.attr('ms.index');
          analytics.globalfunctions.assetsLangNmarket();
          analytics.globalfunctions.assetsCampaignSelected();
          analytics.globalfunctions.assetsHashMsSupCln();
          analytics.globalfunctions.assetsAddMsIndex();
          var file_name = $this.attr('href'),
            awaSrchlinkpos = $this.attr('data-bi-srchlinkpos');
          if (file_name !== undefined && file_name !== null) {
            if (file_name.indexOf('?') >= 0) {
              file_name = file_name.split('?')[0];
            }
            if (file_name.indexOf('#') >= 0) {
              file_name = file_name.split('#')[0];
            }
            if (file_name.indexOf('.') >= 0) {
              var doMoreStuff = analytics.globalfunctions.fileCheck(file_name),
                awaFileName = '',
                awaFileN = '',
                awaDlmn = '';
              if (!doMoreStuff) {
                analytics.globalfunctions.sendTag(awa.behavior.NAVIGATIONFORWARD, data.msTitle, $this.data('itemid'), msCmpType, 'na', 'na', '', '', 'na', '', '', 'body-asset cards', msIndex, awaSrchlinkpos, 'na', 'na', '');
              }
            } else {
              analytics.globalfunctions.sendTag(awa.behavior.NAVIGATIONFORWARD, data.msTitle, $this.data('itemid'), msCmpType, 'na', 'na', '', '', 'na', '', '', 'body-asset cards', msIndex, awaSrchlinkpos, 'na', 'na', '');
            }
          }
        } catch (e) {}
        return;
      },
      cot5AssetClickAsset: function ($this, msCmpType) {
        try {
          data.msTitle = $this.attr('title');
          var awaName = $this.data('biName');
          data.msSupCid = $this.attr('ms.cmpnm');
          var msInteractionType = '1';
          var msIndex = $this.attr('ms.index');
          var awaSlot = $this.data('biSlot');
          var awaArea = $this.data('biArea');
          var awaSrchlinkpos = $this.data('biSrchlinkpos');
          analytics.globalfunctions.assetsTypeMsTopic();
          analytics.globalfunctions.assetsMarketMsNav1();
          analytics.globalfunctions.assetsProductsMsTop();
          analytics.globalfunctions.assetsCampaignMsSubtop();
          analytics.globalfunctions.assetsLangMsNav2();
          analytics.globalfunctions.assetsHashMsSupCln();
          var file_name = $this.attr("href");
          if (file_name !== undefined && file_name !== null) {
            if (file_name.indexOf("?") >= 0) {
              file_name = file_name.split("?")[0];
            }
            if (file_name.indexOf("#") >= 0) {
              file_name = file_name.split("#")[0];
            }
            if (file_name.indexOf(".") >= 0) {
              var doMoreStuff = analytics.globalfunctions.fileCheck(file_name);
              if (!doMoreStuff) {
                analytics.globalfunctions.sendTag(awa.behavior.NAVIGATIONFORWARD, awaName, $this.data("itemid"), msCmpType, 'na', 'na', '', '', 'na', '', '', awaArea, awaSlot, awaSrchlinkpos, 'na', 'na', '');
              }
            } else {
              analytics.globalfunctions.sendTag(awa.behavior.NAVIGATIONFORWARD, awaName, $this.data("itemid"), msCmpType, 'na', 'na', '', '', 'na', '', '', awaArea, awaSlot, awaSrchlinkpos, 'na', 'na', '');
            }
          }
        } catch (e) {}
        return;
      },
      errorTag: function (title) {
        var action = {
            behavior: awa.behavior.VIDEOERROR,
            actionType: 'CL'
          },
          content = {
            vidnm: data.videoTitle,
            vidid: data.videoId,
            contentName: data.videoTitle,
            id: data.videoId
          };
        awaUtil.awaPageActionBuilder(action, content);
      },
      fbAngleBracket: function (mytext) {
        window.analytics.data.mytext = mytext.replace(/<|>/g, '*');
      },
      fbCredit: function (mytext) {
        window.analytics.data.mytext = mytext.replace(/(?:4[0-9]{12}(?:[0-9]{3})?\b|5[1-5][0-9]{14}\b|3[47][0-9]{13}\b|3(?:0[0-5]|[68][0-9])[0-9]{11}\b|6(?:011|5[0-9]{2})[0-9]{12}(?:2131|1800|35\d{3})\d{11})\b/g, '*cc number*');
      },
      fbEmail: function (mytext) {
        window.analytics.data.mytext = mytext.replace(/(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+\b/gi, '*email*');
      },
      fbPhone: function (mytext) {
        window.analytics.data.mytext = mytext.replace(/\b([+]?\d{1,2}[(-\s]?|)\d{3}[)-\.\s]?\d{3}[-\.\s]?\d{4}\b/g, '*phone*');
      },
      fbSSN: function (mytext) {
        window.analytics.data.mytext = mytext.replace(/\b(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}\b/g, '*SSN*');
      },
      fbZip: function (mytext) {
        window.analytics.data.mytext = mytext.replace(/[0-9]{4}?[0-9]-[0-9]{4}\b/g, '*zip*');
      },
      fileCheck: function (file_name) {
        var aFileNameParts = file_name.split('.');
        if (aFileNameParts.length > 1) {
          var sExtension = aFileNameParts[aFileNameParts.length - 1].toLowerCase().trim();
          return ($.inArray(sExtension, aValidExtensions) >= 0) ? !0 : !1;
        } else {
          return !1;
        }
      },
      login: function ($this) {
        awaUtil.setAWAAttributes($this, {
          'bhvr': '100',
          'id': 'signin'
        });
      },
      logout: function ($this) {
        awaUtil.setAWAAttributes($this, {
          'bhvr': '101',
          'id': 'signout'
        });
      },
      manualTrackOnly: function () {
        try {
          jQuery('div.social-feedback').each(function () {
            awaUtil.setAWAAttributes(jQuery(this), {
              'mto': ''
            });
          });
          jQuery('a').each(function () {
            var $this = jQuery(this),
              file_name = $this.attr('href');
            if (file_name !== undefined && file_name !== null) {
              if (file_name.indexOf('?') >= 0) {
                file_name = file_name.split('?')[0];
              }
              if (file_name.indexOf('#') >= 0) {
                file_name = file_name.split('#')[0];
              }
              if (file_name.indexOf('.') >= 0) {
                var doMoreStuff = analytics.globalfunctions.fileCheck(file_name);
                if (doMoreStuff) {
                  jQuery($this).attr('data-bi-mto', '');
                }
              }
            }
          });
          jQuery('div[data-tracking-bladename="8-FWF-A-Specialized-Practice"]').each(function () {
            jQuery(this).attr('data-bi-mto', '');
          });
          jQuery('div[data-tracking-bladename="8-FWF-B-Data-and-AI"]').each(function () {
            jQuery(this).attr('data-bi-mto', '');
          });
          jQuery('div[data-tracking-bladename="8-FWF-C-Security-Compliance"]').each(function () {
            jQuery(this).attr('data-bi-mto', '');
          });
          jQuery('div[data-tracking-bladename="8-FWF-D-Application-Innovation"]').each(function () {
            jQuery(this).attr('data-bi-mto', '');
          });
          jQuery('div[data-tracking-bladename="8-FWF-E-Cloud-Infrastructure-Management"]').each(function () {
            jQuery(this).attr('data-bi-mto', '');
          });
          jQuery('div[data-tracking-bladename="8-FWF-F-Collaboration"]').each(function () {
            jQuery(this).attr('data-bi-mto', '');
          });
          jQuery('div[data-tracking-bladename="8-FWF-G-Modern-Desktop"]').each(function () {
            jQuery(this).attr('data-bi-mto', '');
          });
        } catch (e) {}
      },
      msFlag: function () {
        setTimeout(function () {
          window.analytics.data.msFlag = 0;
        }, 2000);
        return;
      },
      playTag: function (videoBehavior, watchTime, percentComplete) {
        var action = {
            behavior: videoBehavior,
            actionType: 'CL'
          },
          content = {
            vidnm: data.videoTitle,
            vidid: data.videoId,
            viddur: data.videoDuration,
            vidwt: watchTime,
            vidpct: percentComplete,
            contentName: data.videoTitle,
            id: data.videoId
          };
        awaUtil.awaPageActionBuilder(action, content);
      },
      refineSearchInput: function () {
        var $this = jQuery(this);
        awaUtil.setAWAAttributes($this, {
          'area': 'body',
          'name': 'refine search box',
          'type': 'input',
          'bhvr': '20',
          'scn': 'refine search box',
          'scnstp': 'open header search',
          'stpnum': '1'
        });
        return;
      },
      searchInput: function () {
        analytics.globalfunctions.sendTag(awa.behavior.STARTPROCESS, 'upper search box', 'search', 'input', 'na', 'upper search box', 'open header search', '1', 'na', '', '', 'header', 'na', 'na', 'na', 'na', '');
        return;
      },
      searchOutput: function (searchQuery, location, type, where) {
        try {
          var actType = 'CL';
          if (type !== 'button') {
            actType = 'KE';
          }
          var action = {
              behavior: awa.behavior.SEARCH,
              actionType: actType
            },
            content = {
              srchtype: 'manual',
              srchq: searchQuery,
              asdisplayed: 'false',
              contentName: location,
              id: 'search',
              area: where,
              type: type
            };
          awaUtil.awaPageActionBuilder(action, content);
        } catch (e) {}
        return;
      },
      sendFeedbackAWA: function (msFeedbackId, msVerbatim) {
        try {
          var msAction = '',
            msSat = 0;
          if (msVerbatim !== undefined) {
            if (msVerbatim === 'skip') {
              msAction = 'skip';
              msSat = 0;
            } else {
              msAction = 'submit';
              msSat = 5;
            }
            var action = {
                behavior: awa.behavior.SURVEYCOMPLETE,
                actionType: 'CL'
              },
              content = {
                fbnm: 'Feedback_Blade.survey',
                fbid: msFeedbackId,
                sat: msSat,
                vtbm: msVerbatim,
                fcat: utag.data.page_title,
                slot: data.awaShareIndex + 3,
                id: 'survey',
                contentName: 'Feedback_Blade.survey'
              };
            awaUtil.awaPageActionBuilder(action, content);
          }
        } catch (e) {}
        return;
      },
      sendRating: function (msRating, msFeedbackId, $this) {
        try {
          var msTitle = '',
            msIndex = data.awaShareIndex;
          if (msRating !== undefined && window.analytics.data.feedbackVote === 0) {
            window.analytics.data.feedbackVote = 1;
            if (msRating) {
              msTitle = 'yes';
              msIndex = data.awaShareIndex + 1;
            } else {
              msTitle = 'no';
              msIndex = data.awaShareIndex + 2;
            }
            var action = {
                behavior: awa.behavior.VOTE,
                actionType: 'CL'
              },
              content = {
                fbnm: 'Feedback_Blade.vote',
                fbid: msFeedbackId,
                rate: msRating,
                fcat: utag.data.page_title,
                slot: msIndex,
                area: 'body-socialbar',
                id: 'survey',
                contentName: 'Feedback_Blade.vote'
              };
            awaUtil.awaPageActionBuilder(action, content);
            action = {
              behavior: awa.behavior.SURVEYINITIATE,
              actionType: 'CL'
            };
            content = {
              fbnm: 'Feedback_Blade.survey',
              fbid: msFeedbackId,
              rate: msRating,
              fcat: utag.data.page_title,
              slot: msIndex,
              area: 'body-socialbar',
              id: 'survey',
              contentName: 'Feedback_Blade.survey'
            };
            awaUtil.awaPageActionBuilder(action, content);
            analytics.globalfunctions.textlink($this);
            analytics.globalfunctions.assetsHashTarget($this);
            analytics.globalfunctions.assetsHashMsSupCln();
            analytics.globalfunctions.sendUtag('rating', 'click', msTitle, msFeedbackId, '', '', '', '', '', '', '', '', data.link_text, '', data.hashTarget, data.msSupCln);
          }
        } catch (e) {}
        return;
      },
      sendSecurityGepTag: function (awaDlmn, awaFileName, awaFileNameType, awaName, awaId, gepsource) {
        analytics.globalfunctions.sendTag(awa.behavior.DOWNLOAD, awaName, 'asset-card-' + awaId, awaFileNameType, gepsource, 'na', '', '', awaDlmn, awaFileName, awaFileNameType, 'na', 'na', 'na', 'na', 'na', '');
        return;
      },
      dedupeArray: function (origArrayStr) {
        var retArray = [];
        var del = '|~~|';
        var retDel = ',';
        if (origArrayStr.includes(del)) {
          var origArray = origArrayStr.split(del);
          var retArrayStr = '';
          $.each(origArray, function (i, el) {
            if ($.inArray(el, retArray) === -1) retArray.push(el);
          });
          retArrayStr = retArray.join(retDel);
        } else {
          retArrayStr = origArrayStr
        }
        return retArrayStr;
      },
      embedEncodedMetadata: function (field, value, thisObj) {
        var encodedValue = window.btoa(unescape(encodeURIComponent(value)));
        var del = ',';
        if (thisObj.attr(field) && !decodeURIComponent(escape(window.atob(thisObj.attr(field)))).includes(value)) {
          thisObj.attr(field, window.btoa(unescape(encodeURIComponent(decodeURIComponent(escape(window.atob(thisObj.attr(field)))) + del + value))));
        } else if (thisObj.attr(field) === undefined) {
          thisObj.attr(field, encodedValue);
        }
      },
      extractEncodedMetadata: function (field, thisObj) {
        var val = '';
        if (thisObj.attr(field)) {
          val = decodeURIComponent(escape(window.atob(thisObj.attr(field))));
        }
        return val;
      },
      getQueryParam: function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
      },
      amountScrolled: function () {
        var winheight = $(window).height()
        var docheight = $(document).height()
        var scrollTop = $(window).scrollTop()
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop / trackLength * 100)
        return pctScrolled;
      },
      appendUniqueData: function (field, val) {
        var retVal = '',
          outputDelimiter = ',';
        if (typeof field == "undefined" || field.length <= 0) {
          retVal = val;
        } else if ((((typeof val != "undefined") && (typeof val.valueOf() == "string")) && (val.length > 0)) && (((typeof field != "undefined") && (typeof field.valueOf() == "string")) && (field.length > 0)) && !field.includes(val)) {
          retVal = val + outputDelimiter + field;
        } else if ((((typeof field != "undefined") && (typeof field.valueOf() == "string")) && (field.length > 0)) && ((typeof val == "undefined") || (val.length <= 0))) {
          retVal = field;
        } else if ((((typeof val != "undefined") && (typeof val.valueOf() == "string")) && (val.length > 0))) {
          retVal = field;
        }
        return retVal;
      },
      maskEmailAddress: function (val) {
        return val.replace(/([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/ig, '<email address>');
      },
      validateString: function (val) {
        if (val && val.match(/[0-9a-zA-Z]/gi)) {
          return true;
        } else {
          return false
        };
      },
      maskProfanity: function (val) {
        return val.replace(/\b4r5e\b|\b5h1t\b|\b5hit\b|\ba55\b|\banal\b|\banus\b|\bar5e\b|\barrse\b|\barse\b|\bass\b|\bass-fucker\b|\basses\b|\bassfucker\b|\bassfukka\b|\basshole\b|\bassholes\b|\basswhole\b|\ba_s_s\b|\bb!tch\b|\bb00bs\b|\bb17ch\b|\bb1tch\b|\bballbag\b|\bballs\b|\bballsack\b|\bbastard\b|\bbeastial\b|\bbeastiality\b|\bbellend\b|\bbestial\b|\bbestiality\b|\bbi+ch\b|\bbiatch\b|\bbitch\b|\bbitcher\b|\bbitchers\b|\bbitches\b|\bbitchin\b|\bbitching\b|\bbloody\b|\bblow job\b|\bblowjob\b|\bblowjobs\b|\bboiolas\b|\bbollock\b|\bbollok\b|\bboner\b|\bboob\b|\bboobs\b|\bbooobs\b|\bboooobs\b|\bbooooobs\b|\bbooooooobs\b|\bbreasts\b|\bbuceta\b|\bbugger\b|\bbum\b|\bbunny fucker\b|\bbutt\b|\bbutthole\b|\bbuttmuch\b|\bbuttplug\b|\bc0ck\b|\bc0cksucker\b|\bcarpet muncher\b|\bcawk\b|\bchink\b|\bcipa\b|\bcl1t\b|\bclit\b|\bclitoris\b|\bclits\b|\bcnut\b|\bcock\b|\bcock-sucker\b|\bcockface\b|\bcockhead\b|\bcockmunch\b|\bcockmuncher\b|\bcocks\b|\bcocksuck\b|\bcocksucked\b|\bcocksucker\b|\bcocksucking\b|\bcocksucks\b|\bcocksuka\b|\bcocksukka\b|\bcok\b|\bcokmuncher\b|\bcoksucka\b|\bcoon\b|\bcox\b|\bcrap\b|\bcum\b|\bcummer\b|\bcumming\b|\bcums\b|\bcumshot\b|\bcunilingus\b|\bcunillingus\b|\bcunnilingus\b|\bcunt\b|\bcuntlick\b|\bcuntlicker\b|\bcuntlicking\b|\bcunts\b|\bcyalis\b|\bcyberfuc\b|\bcyberfuck\b|\bcyberfucked\b|\bcyberfucker\b|\bcyberfuckers\b|\bcyberfucking\b|\bd1ck\b|\bdamn\b|\bdick\b|\bdickhead\b|\bdildo\b|\bdildos\b|\bdink\b|\bdinks\b|\bdirsa\b|\bdlck\b|\bdog-fucker\b|\bdoggin\b|\bdogging\b|\bdonkeyribber\b|\bdoosh\b|\bduche\b|\bdyke\b|\bejaculate\b|\bejaculated\b|\bejaculates\b|\bejaculating\b|\bejaculatings\b|\bejaculation\b|\bejakulate\b|\bf u c k\b|\bf u c k e r\b|\bf4nny\b|\bfag\b|\bfagging\b|\bfaggitt\b|\bfaggot\b|\bfaggs\b|\bfagot\b|\bfagots\b|\bfags\b|\bfanny\b|\bfannyflaps\b|\bfannyfucker\b|\bfanyy\b|\bfatass\b|\bfcuk\b|\bfcuker\b|\bfcuking\b|\bfeck\b|\bfecker\b|\bfelching\b|\bfellate\b|\bfellatio\b|\bfingerfuck\b|\bfingerfucked\b|\bfingerfucker\b|\bfingerfuckers\b|\bfingerfucking\b|\bfingerfucks\b|\bfistfuck\b|\bfistfucked\b|\bfistfucker\b|\bfistfuckers\b|\bfistfucking\b|\bfistfuckings\b|\bfistfucks\b|\bflange\b|\bfook\b|\bfooker\b|\bfuck\b|\bfucka\b|\bfucked\b|\bfucker\b|\bfuckers\b|\bfuckhead\b|\bfuckheads\b|\bfuckin\b|\bfucking\b|\bfuckings\b|\bfuckingshitmotherfucker\b|\bfuckme\b|\bfucks\b|\bfuckwhit\b|\bfuckwit\b|\bfudge packer\b|\bfudgepacker\b|\bfuk\b|\bfuker\b|\bfukker\b|\bfukkin\b|\bfuks\b|\bfukwhit\b|\bfukwit\b|\bfux\b|\bfux0r\b|\bf_u_c_k\b|\bgangbang\b|\bgangbanged\b|\bgangbangs\b|\bgaylord\b|\bgaysex\b|\bgoatse\b|\bGod\b|\bgod-dam\b|\bgod-damned\b|\bgoddamn\b|\bgoddamned\b|\bhardcoresex\b|\bhell\b|\bheshe\b|\bhoar\b|\bhoare\b|\bhoer\b|\bhomo\b|\bhore\b|\bhorniest\b|\bhorny\b|\bhotsex\b|\bjack-off\b|\bjackoff\b|\bjap\b|\bjerk-off\b|\bjism\b|\bjiz\b|\bjizm\b|\bjizz\b|\bkawk\b|\bknob\b|\bknobead\b|\bknobed\b|\bknobend\b|\bknobhead\b|\bknobjocky\b|\bknobjokey\b|\bkock\b|\bkondum\b|\bkondums\b|\bkum\b|\bkummer\b|\bkumming\b|\bkums\b|\bkunilingus\b|\bl3i+ch\b|\bl3itch\b|\blabia\b|\blust\b|\blusting\b|\bm0f0\b|\bm0fo\b|\bm45terbate\b|\bma5terb8\b|\bma5terbate\b|\bmasochist\b|\bmaster-bate\b|\bmasterb8\b|\bmasterbat*\b|\bmasterbat3\b|\bmasterbate\b|\bmasterbation\b|\bmasterbations\b|\bmasturbate\b|\bmo-fo\b|\bmof0\b|\bmofo\b|\bmothafuck\b|\bmothafucka\b|\bmothafuckas\b|\bmothafuckaz\b|\bmothafucked\b|\bmothafucker\b|\bmothafuckers\b|\bmothafuckin\b|\bmothafucking\b|\bmothafuckings\b|\bmothafucks\b|\bmother fucker\b|\bmotherfuck\b|\bmotherfucked\b|\bmotherfucker\b|\bmotherfuckers\b|\bmotherfuckin\b|\bmotherfucking\b|\bmotherfuckings\b|\bmotherfuckka\b|\bmotherfucks\b|\bmuff\b|\bmutha\b|\bmuthafecker\b|\bmuthafuckker\b|\bmuther\b|\bmutherfucker\b|\bn1gga\b|\bn1gger\b|\bnazi\b|\bnigg3r\b|\bnigg4h\b|\bnigga\b|\bniggah\b|\bniggas\b|\bniggaz\b|\bnigger\b|\bniggers\b|\bnob\b|\bnob jokey\b|\bnobhead\b|\bnobjocky\b|\bnobjokey\b|\bnumbnuts\b|\bnutsack\b|\borgasim\b|\borgasims\b|\borgasm\b|\borgasms\b|\bp0rn\b|\bpawn\b|\bpecker\b|\bpenis\b|\bpenisfucker\b|\bphonesex\b|\bphuck\b|\bphuk\b|\bphuked\b|\bphuking\b|\bphukked\b|\bphukking\b|\bphuks\b|\bphuq\b|\bpigfucker\b|\bpimpis\b|\bpiss\b|\bpissed\b|\bpisser\b|\bpissers\b|\bpisses\b|\bpissflaps\b|\bpissin\b|\bpissing\b|\bpissoff\b|\bpoop\b|\bporn\b|\bporno\b|\bpornography\b|\bpornos\b|\bprick\b|\bpricks\b|\bpron\b|\bpube\b|\bpusse\b|\bpussi\b|\bpussies\b|\bpussy\b|\bpussys\b|\brectum\b|\bretard\b|\brimjaw\b|\brimming\b|\bs hit\b|\bs.o.b.\b|\bsadist\b|\bschlong\b|\bscrewing\b|\bscroat\b|\bscrote\b|\bscrotum\b|\bsemen\b|\bsex\b|\bsh!+\b|\bsh!t\b|\bsh1t\b|\bshag\b|\bshagger\b|\bshaggin\b|\bshagging\b|\bshemale\b|\bshi+\b|\bshit\b|\bshitdick\b|\bshite\b|\bshited\b|\bshitey\b|\bshitfuck\b|\bshitfull\b|\bshithead\b|\bshiting\b|\bshitings\b|\bshits\b|\bshitted\b|\bshitter\b|\bshitters\b|\bshitting\b|\bshittings\b|\bshitty\b|\bskank\b|\bslut\b|\bsluts\b|\bsmegma\b|\bsmut\b|\bsnatch\b|\bson-of-a-bitch\b|\bspac\b|\bspunk\b|\bs_h_i_t\b|\bt1tt1e5\b|\bt1tties\b|\bteets\b|\bteez\b|\btestical\b|\btesticle\b|\btit\b|\btitfuck\b|\btits\b|\btitt\b|\btittie5\b|\btittiefucker\b|\btitties\b|\btittyfuck\b|\btittywank\b|\btitwank\b|\btosser\b|\bturd\b|\btw4t\b|\btwat\b|\btwathead\b|\btwatty\b|\btwunt\b|\btwunter\b|\bv14gra\b|\bv1gra\b|\bvagina\b|\bviagra\b|\bvulva\b|\bw00se\b|\bwang\b|\bwank\b|\bwanker\b|\bwanky\b|\bwhoar\b|\bwhore\b|\bwillies\b|\bwilly\b|\bxrated\b|\bxxx\b/ig, '*****');
      },
      maskPhoneNumber: function (val) {
        return val.replace(/(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/ig, '<Phone Number>');
      },
      sendTagEncode: function (awaBehavior, awaName, awaId, awaType, awaSource, awaScn, awaScnstp, awaStpnum, awaDlmn, awaFileName, awaFileNameType, awaArea, awaSlot, awaSrchlinkpos, awaSrchq, awaChtmn, awaChtId, thisObj) {
        var fieldArrayDelimiter = '|-|';
        var adjustedArray = '';
        var awaBehaviorKey = 'data-jsll-beh';
        var awaActionTypeKey = 'data-jsll-at';
        var awaNameKey = 'data-jsll-nm';
        var awaIdKey = 'data-jsll-id';
        var awaTypeKey = 'data-jsll-tp';
        var awaSourceKey = 'data-jsll-sc';
        var awaScnKey = 'data-jsll-scn';
        var awaScnstpKey = 'data-jsll-scnstp';
        var awaStpnumKey = 'data-jsll-stpnum';
        var awaDlmnKey = 'data-jsll-dlnm';
        var awaFileNameKey = 'data-jsll-fn';
        var awaFileNameTypeKey = 'data-jsll-fnt';
        var awaAreaKey = 'data-jsll-ar';
        var awaSlotKey = 'data-jsll-sl';
        var awaSrchlinkposKey = 'data-jsll-srchlpos';
        var awaSrchqKey = 'data-jsll-srchq';
        var awaChtmnKey = 'data-jsll-chtmn';
        var awaChtIdKey = 'data-jsll-chtid';
        if (awaBehavior) {
          globalfunctions.embedEncodedMetadata(awaBehaviorKey, awaBehavior, thisObj);
        }
        if (awaName) {
          globalfunctions.embedEncodedMetadata(awaNameKey, awaName, thisObj);
        }
        if (awaId) {
          globalfunctions.embedEncodedMetadata(awaIdKey, awaId, thisObj);
        }
        if (awaType) {
          globalfunctions.embedEncodedMetadata(awaTypeKey, awaType, thisObj);
        }
        if (awaSource) {
          globalfunctions.embedEncodedMetadata(awaSourceKey, awaSource, thisObj);
        }
        if (awaScn) {
          globalfunctions.embedEncodedMetadata(awaScnKey, awaScn, thisObj);
        }
        if (awaScnstp) {
          globalfunctions.embedEncodedMetadata(awaScnstpKey, awaScnstp, thisObj);
        }
        if (awaStpnum) {
          globalfunctions.embedEncodedMetadata(awaStpnumKey, awaStpnum, thisObj);
        }
        if (awaDlmn) {
          globalfunctions.embedEncodedMetadata(awaDlmnKey, awaDlmn, thisObj);
        }
        if (awaFileName) {
          globalfunctions.embedEncodedMetadata(awaFileNameKey, awaFileName, thisObj);
        }
        if (awaFileNameType) {
          globalfunctions.embedEncodedMetadata(awaFileNameTypeKey, awaFileNameType, thisObj);
        }
        if (awaArea) {
          globalfunctions.embedEncodedMetadata(awaAreaKey, awaArea, thisObj);
        }
        if (awaSlot) {
          globalfunctions.embedEncodedMetadata(awaSlotKey, awaSlot, thisObj);
        }
        if (awaSrchlinkpos) {
          globalfunctions.embedEncodedMetadata(awaSrchlinkposKey, awaSrchlinkpos, thisObj);
        }
        if (awaSrchq) {
          globalfunctions.embedEncodedMetadata(awaSrchqKey, awaSrchq, thisObj);
        }
        if (awaChtmn) {
          globalfunctions.embedEncodedMetadata(awaChtmnKey, awaChtmn, thisObj);
        }
        if (awaChtId) {
          globalfunctions.embedEncodedMetadata(awaChtIdKey, awaChtId, thisObj);
        }
      },
      sendUtagEncode: function (eventName, eventType, eventAction, eventAttr1, eventAttr2, eventAttr3, eventAttr4, eventAttr5, eventAttr6, eventOffer, eventTarget, eventTitle, linkName, linkArea, eventHashtag, viewHashtag, dataset, thisObj) {
        var fieldArrayDelimiter = '|-|',
          eventNameKey = 'data-utag-en',
          eventTypeKey = 'data-utag-et',
          eventActionKey = 'data-utag-eac',
          eventAttr1Key = 'data-utag-ea1',
          eventAttr2Key = 'data-utag-ea2',
          eventAttr3Key = 'data-utag-ea3',
          eventAttr4Key = 'data-utag-ea4',
          eventAttr5Key = 'data-utag-ea5',
          eventAttr6Key = 'data-utag-ea6',
          eventOfferKey = 'data-utag-eo',
          eventTargetKey = 'data-utag-eta',
          eventTitleKey = 'data-utag-eti',
          linkNameKey = 'data-utag-ln',
          linkAreaKey = 'data-utag-la',
          eventHashtagKey = 'data-utag-eh',
          viewHashtagKey = 'data-utag-vh';
        if (eventName) {
          globalfunctions.embedEncodedMetadata(eventNameKey, eventName, thisObj);
        }
        if (eventType) {
          globalfunctions.embedEncodedMetadata(eventTypeKey, eventType, thisObj);
        }
        if (eventAction) {
          globalfunctions.embedEncodedMetadata(eventActionKey, eventAction, thisObj);
        }
        if (eventAttr1) {
          globalfunctions.embedEncodedMetadata(eventAttr1Key, eventAttr1, thisObj);
        }
        if (eventAttr2) {
          globalfunctions.embedEncodedMetadata(eventAttr2Key, eventAttr2, thisObj);
        }
        if (eventAttr3) {
          globalfunctions.embedEncodedMetadata(eventAttr3Key, eventAttr3, thisObj);
        }
        if (eventAttr4) {
          globalfunctions.embedEncodedMetadata(eventAttr4Key, eventAttr4, thisObj);
        }
        if (eventAttr5) {
          globalfunctions.embedEncodedMetadata(eventAttr5Key, eventAttr5, thisObj);
        }
        if (eventAttr6) {
          globalfunctions.embedEncodedMetadata(eventAttr6Key, eventAttr6, thisObj);
        }
        if (eventOffer) {
          globalfunctions.embedEncodedMetadata(eventOfferKey, eventOffer, thisObj);
        }
        if (eventTarget) {
          globalfunctions.embedEncodedMetadata(eventTargetKey, eventTarget, thisObj);
        }
        if (eventTitle) {
          globalfunctions.embedEncodedMetadata(eventTitleKey, eventTitle, thisObj);
        }
        if (linkName) {
          globalfunctions.embedEncodedMetadata(linkNameKey, linkName, thisObj);
        }
        if (linkArea) {
          globalfunctions.embedEncodedMetadata(linkAreaKey, linkArea, thisObj);
        }
        if (eventHashtag) {
          globalfunctions.embedEncodedMetadata(eventHashtagKey, eventHashtag, thisObj);
        }
        if (viewHashtag) {
          globalfunctions.embedEncodedMetadata(viewHashtagKey, viewHashtag, thisObj);
        }
      },
      sendAllJSLL: function (awaFields, thisObj, skipRepeats) {
        var awaBehavior, awaActionType, awaName, awaId, awaType, awaSource, awaScn, awaScnstp, awaStpnum, awaDlmn, awaFileName, awaFileNameType, awaArea, awaSlot, awaSrchlinkpos, awaSrchq, awaChtmn, awaChtId, awaLinkName, awaFeedbackComments, awaLinkHref, awaGoalDescription, awaGoalName, awaGoalTimestamp, awaBladeName, awaFilterValue, awaSurveyVerbatim, awaFeedbackName, overrideFlag;
        var awaBehaviorKey = 'Behavior';
        var awaActionTypeKey = 'ActionType';
        var awaNameKey = 'Name';
        var awaIdKey = 'ID';
        var awaTypeKey = 'Type';
        var awaSourceKey = 'Source';
        var awaScnKey = 'Scn';
        var awaScnstpKey = 'Scnstp';
        var awaStpnumKey = 'Stpnum';
        var awaDlmnKey = 'Dlmn';
        var awaFileNameKey = 'FileName';
        var awaFileNameTypeKey = 'FileNameTypeKey';
        var awaAreaKey = 'Area';
        var awaSlotKey = 'Slot';
        var awaSrchlinkposKey = 'Srchlinkpos';
        var awaSrchqKey = 'Srchq';
        var awaChtmnKey = 'Chtmn';
        var awaChtIdKey = 'ChtId';
        var awaLinkNameKey = 'link_name';
        var awaFeedbackCommentsKey = 'feedback_comments';
        var awaLinkHrefKey = 'link_href';
        var awaGoalDescriptionKey = 'goal_description';
        var awaGoalNameKey = 'goal_name';
        var awaGoalTimestampKey = 'goal_timestamp';
        var awaBladeNameKey = 'blade_name';
        var awaFilterValueKey = 'filter_value';
        var awaSurveyVerbatimKey = 'survey_verbatim';
        var awaFeedbackNameKey = 'feedback_name';
        var overrideKey = 'override';
        var awaBehaviorFieldKey = 'data-jsll-beh';
        var awaActionTypeFieldKey = 'data-jsll-at';
        var awaNameFieldKey = 'data-jsll-nm';
        var awaIdFieldKey = 'data-jsll-id';
        var awaTypeFieldKey = 'data-jsll-tp';
        var awaSourceFieldKey = 'data-jsll-sc';
        var awaScnFieldKey = 'data-jsll-scn';
        var awaScnstpFieldKey = 'data-jsll-scnstp';
        var awaStpnumFieldKey = 'data-jsll-stpnum';
        var awaDlmnFieldKey = 'data-jsll-dlnm';
        var awaFileNameFieldKey = 'data-jsll-fn';
        var awaFileNameTypeFieldKey = 'data-jsll-fnt';
        var awaAreaFieldKey = 'data-jsll-ar';
        var awaSlotFieldKey = 'data-jsll-sl';
        var awaSrchlinkposFieldKey = 'data-jsll-srchlpos';
        var awaSrchqFieldKey = 'data-jsll-srchq';
        var awaChtmnFieldKey = 'data-jsll-chtmn';
        var awaChtIdFieldKey = 'data-jsll-chtid';
        var fieldArrayDelimiter = '|-|';
        var keyPairDelimiter = '|~|';
        var outputDelimiter = ',';
        var skipAttr = 'data-jsll-fired';
        if (awaFields !== '') {
          var awaFieldsArray = awaFields.split(fieldArrayDelimiter);
          for (var i = 0; i < awaFieldsArray.length; i++) {
            var key = awaFieldsArray[i].split(keyPairDelimiter)[0];
            var value = awaFieldsArray[i].split(keyPairDelimiter)[1];
            switch (key) {
              case awaBehaviorKey:
                awaBehavior = value;
                break;
              case awaActionTypeKey:
                awaActionType = value;
                break;
              case awaNameKey:
                awaName = value;
                break;
              case awaLinkNameKey:
                awaLinkName = value;
                break;
              case awaIdKey:
                awaId = value;
                break;
              case awaTypeKey:
                awaType = value;
                break;
              case awaSourceKey:
                awaSource = value;
                break;
              case awaScnKey:
                awaScn = value;
                break;
              case awaScnstpKey:
                awaScnstp = value;
                break;
              case awaStpnumKey:
                awaStpnum = value;
                break;
              case awaDlmnKey:
                awaDlmn = value;
                break;
              case awaFileNameKey:
                awaFileName = value;
                break;
              case awaFileNameTypeKey:
                awaFileNameType = value;
                break;
              case awaAreaKey:
                awaArea = value;
                break;
              case awaSlotKey:
                awaSlot = value;
                break;
              case awaSrchlinkposKey:
                awaSrchlinkpos = value;
                break;
              case awaSrchqKey:
                awaSrchq = value;
                break;
              case awaChtmnKey:
                awaChtmn = value;
                break;
              case awaChtIdKey:
                awaChtId = value;
                break;
              case awaFeedbackCommentsKey:
                awaFeedbackComments = value;
                break;
              case awaLinkHrefKey:
                awaLinkHref = value;
                break;
              case awaGoalDescriptionKey:
                awaGoalDescription = value;
                break;
              case awaGoalNameKey:
                awaGoalName = value;
                break;
              case awaGoalTimestampKey:
                awaGoalTimestamp = value;
                break;
              case awaBladeNameKey:
                awaBladeName = value;
                break;
              case awaFilterValueKey:
                awaFilterValue = value;
                break;
              case awaSurveyVerbatimKey:
                awaSurveyVerbatim = value;
                break;
              case awaFeedbackNameKey:
                awaFeedbackName = value;
                break;
              case overrideKey:
                overrideFlag = value;
                break;
              default:
                console.log(awaFieldsArray[i]);
                break;
            }
          }
        }
        if (thisObj.is('a') || thisObj.is('button') || thisObj.is('input[type!="text"]') || overrideFlag == 'Yes') {} else {
          thisObj = thisObj.find('a');
        }
        if (thisObj.attr('href') && thisObj.attr('href').includes('db-siteopt-rid')) {
          thisObj = thisObj.closest('.recommended-block__list__recommended-item__image-wrapper').find('a.recommended-block__list__recommended-item__title');
          awaId = 'Demandbase Flyout';
        }
        var action = {},
          content = {};
        if (awaActionType) {
          action.actionType = awaActionType;
        }
        action.actionType = analytics.globalfunctions.appendUniqueData(action.actionType, analytics.globalfunctions.extractEncodedMetadata(awaActionTypeFieldKey, thisObj));
        if (action.actionType === '' || action.actionType === 'na') {
          delete action.actionType;
        }
        if (awaName) {
          content.contentName = awaName;
        }
        content.contentName = analytics.globalfunctions.appendUniqueData(content.contentName, analytics.globalfunctions.extractEncodedMetadata(awaNameFieldKey, thisObj));
        if (content.contentName === '' || content.contentName === 'na') {
          delete content.contentName;
        }
        content.blade_name = thisObj.closest('[data-tracking-bladename]').attr('data-tracking-bladename');
        if (content.blade_name === '' || content.blade_name === 'na') {
          delete content.blade_name;
        }
        content.blade_type = thisObj.closest('[data-tracking-bladename]').attr('data-tracking-bladetype');
        if (thisObj.closest('[data-tracking-bladetype="AL-List-View"]').attr('data-tracking-bladetype') != undefined) {
          content.blade_type = 'AL-List-View';
        }
        if (content.blade_type === '' || content.blade_type === 'na') {
          delete content.blade_type;
        }
        if (awaType) {
          content.type = awaType;
        }
        content.type = analytics.globalfunctions.appendUniqueData(content.type, analytics.globalfunctions.extractEncodedMetadata(awaTypeFieldKey, thisObj));
        if (content.blade_type === 'One-Card' || content.blade_type === 'AL-List-View') {
          content.type = analytics.globalfunctions.appendUniqueData(content.type, 'asset gallery click');
        }
        if (content.type === '' || content.type === 'na') {
          delete content.type;
        }
        if (awaBehavior) {
          action.behavior = awaBehavior;
        }
        content.blade_depth = analytics.globalfunctions.appendUniqueData(content.blade_depth, thisObj.closest('[data-tracking-bladename]').attr('cta-blade-depth'));
        if (content.blade_depth === '' || content.blade_depth === 'na') {
          delete content.blade_depth;
        }
        if (awaFeedbackComments) {
          content.feedback_comments = awaFeedbackComments;
        }
        if (content.feedback_comments === '' || content.feedback_comments === 'na') {
          delete content.feedback_comments;
        }
        if (awaLinkHref) {
          action.targetUri = awaLinkHref;
        }
        if (!action.targetUri && thisObj.attr('href')) {
          action.targetUri = analytics.globalfunctions.appendUniqueData(action.targetUri, thisObj.attr('href'));
        }
        if (!action.targetUri && thisObj.attr('onclick')) {
          action.targetUri = analytics.globalfunctions.appendUniqueData(action.targetUri, thisObj.attr('onclick'));
        }
        if (action.targetUri === '' || action.targetUri === 'na') {
          delete action.targetUri;
        }
        if (awaGoalDescription) {
          content.goal_description = awaGoalDescription;
        }
        content.goal_description = analytics.globalfunctions.appendUniqueData(content.goal_description, thisObj.attr('data-goaldescription'));
        if (content.goal_description === '' || content.goal_description === 'na') {
          delete content.goal_description;
        }
        if (awaGoalName) {
          content.goal_name = awaGoalName;
        }
        content.goal_name = analytics.globalfunctions.appendUniqueData(content.goal_name, thisObj.attr('data-goalname'));
        if (content.goal_name === '' || content.goal_name === 'na') {
          delete content.goal_name;
        }
        if (awaGoalTimestamp) {
          content.goal_timestamp = awaGoalTimestamp;
        }
        if (content.goal_name || content.goal_description) {
          content.goal_timestamp = analytics.globalfunctions.appendUniqueData(content.goal_timestamp, Date.now().toString());
          if (content.goal_timestamp === '' || content.goal_timestamp === 'na') {
            delete content.goal_timestamp;
          }
        }
        if (awaSource) {
          content.source = awaSource;
        }
        content.source = analytics.globalfunctions.appendUniqueData(content.source, analytics.globalfunctions.extractEncodedMetadata(awaSourceFieldKey, thisObj));
        if (content.source === '' || content.source === 'na') {
          delete content.source;
        }
        if (thisObj.attr('data-tracking-link-name') && analytics.globalfunctions.validateString(thisObj.attr('data-tracking-link-name'))) {
          content.link_name = thisObj.attr('data-tracking-link-name');
        }
        if (!content.link_name && awaLinkName) {
          content.link_name = awaLinkName;
        }
        if (!content.link_name && analytics.globalfunctions.validateString(thisObj.text())) {
          content.link_name = thisObj.text().trim();
        }
        if (!content.link_name && analytics.globalfunctions.validateString(data.link_text)) {
          content.link_name = data.link_text;
        }
        if ((content.blade_type === 'One-Card' || content.blade_type === 'AL-List-View') && content.link_name) {
          content.link_name = 'Asset Gallery: ' + content.link_name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        }
        if (!content.link_name && thisObj.attr('aria-label') && analytics.globalfunctions.validateString(thisObj.attr('aria-label'))) {
          content.link_name = thisObj.attr('aria-label');
        }
        if (!content.link_name && thisObj.attr('onclick') && analytics.globalfunctions.validateString(thisObj.attr('onclick'))) {
          content.link_name = thisObj.attr('onclick');
        }
        if (!content.link_name && thisObj.attr('title') && analytics.globalfunctions.validateString(thisObj.attr('title'))) {
          content.link_name = thisObj.attr('title');
        }
        if (content.blade_name === 'Bot Panel' && content.link_name) {
          content.link_name = 'Bot: ' + content.link_name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        }
        if (content.link_name === '' || content.link_name === 'na') {
          delete content.link_name;
        }
        if (content.link_name) {
          content.contentName = content.link_name;
        }
        if (thisObj.parents(".modal-body").length != 0) {
          content.in_modal = "true";
        }
        if (thisObj.attr('href')) {
          content.contentSource = 'destUri|' + thisObj.attr('href');
        }
        if (thisObj.attr('id') == 'btnStartChat') {
          content.contentSource = 'destUri|Chat Start Button'
          action.targetUri = 'Chat Start Button'
        }
        if (content.contentSource === '' || content.contentSource === 'na') {
          delete content.contentSource;
        }
        content.page_depth = analytics.globalfunctions.appendUniqueData(content.page_depth, analytics.globalfunctions.amountScrolled());
        content.max_page_depth = analytics.globalfunctions.appendUniqueData(content.max_page_depth, utag.data.max_page_depth);
        if (awaScn) {
          content.scn = awaScn;
        }
        content.scn = analytics.globalfunctions.appendUniqueData(content.scn, analytics.globalfunctions.extractEncodedMetadata(awaScnFieldKey, thisObj));
        if (content.scn === '' || content.scn === 'na') {
          delete content.scn;
        }
        if (awaScnstp) {
          content.scnstp = awaScnstp;
        }
        content.scnstp = analytics.globalfunctions.appendUniqueData(content.scnstp, analytics.globalfunctions.extractEncodedMetadata(awaScnstpFieldKey, thisObj));
        if (content.scnstp === '' || content.scnstp === 'na') {
          delete content.scnstp;
        }
        if (awaStpnum) {
          content.stpnum = awaStpnum;
        }
        content.stpnum = analytics.globalfunctions.appendUniqueData(content.stpnum, analytics.globalfunctions.extractEncodedMetadata(awaStpnumFieldKey, thisObj));
        if (content.stpnum === '' || content.stpnum === 'na') {
          delete content.stpnum;
        }
        if (thisObj.attr('href')) {
          var splitArray = thisObj.attr('href').split('/');
          var lastElement = splitArray[splitArray.length - 1];
          if (lastElement.indexOf('.') !== -1 && lastElement.indexOf('.com') == -1 && lastElement.indexOf('.net') == -1 && lastElement.indexOf('.aspx') == -1 && lastElement.indexOf('mailto') == -1) {
            content.dlnm = analytics.globalfunctions.appendUniqueData(content.dlnm, lastElement);
          }
        }
        if (!content.dlnm && awaDlmn) {
          content.dlnm = awaDlmn;
        }
        if (!content.dlnm) {
          content.dlnm = analytics.globalfunctions.appendUniqueData(content.dlnm, analytics.globalfunctions.extractEncodedMetadata(awaDlmnFieldKey, thisObj));
        }
        if (content.dlnm === '' || content.dlnm === 'na') {
          delete content.dlnm;
        }
        if (awaFileName) {
          content.dlid = awaFileName;
        }
        content.dlid = analytics.globalfunctions.appendUniqueData(content.dlid, analytics.globalfunctions.extractEncodedMetadata(awaFileNameFieldKey, thisObj));
        if (content.dlnm) {
          content.dlid = content.dlnm;
        }
        if (content.dlid === '' || content.dlid === 'na') {
          delete content.dlid;
        }
        if (awaFileNameType) {
          content.dltype = awaFileNameType;
        }
        content.dltype = analytics.globalfunctions.appendUniqueData(content.dltype, analytics.globalfunctions.extractEncodedMetadata(awaFileNameTypeFieldKey, thisObj));
        if (content.dltype === '' || content.dltype === 'na') {
          delete content.dltype;
        }
        if (awaSlot) {
          content.slot = awaSlot;
        }
        content.slot = analytics.globalfunctions.appendUniqueData(content.slot, thisObj.attr('data-bi-slot'));
        if (content.slot === '' || content.slot === 'na') {
          delete content.slot;
        }
        content.slot = analytics.globalfunctions.appendUniqueData(content.slot, analytics.globalfunctions.extractEncodedMetadata(awaSlotFieldKey, thisObj));
        if (content.slot === '' || content.slot === 'na') {
          delete content.slot;
        }
        if (awaSrchlinkpos) {
          content.srchlinkpos = awaSrchlinkpos;
        }
        content.srchlinkpos = analytics.globalfunctions.appendUniqueData(content.srchlinkpos, thisObj.data('biSrchlinkpos'));
        if (content.srchlinkpos === '' || content.srchlinkpos === 'na') {
          delete content.srchlinkpos;
        }
        content.srchlinkpos = analytics.globalfunctions.appendUniqueData(content.srchlinkpos, analytics.globalfunctions.extractEncodedMetadata(awaSrchlinkposFieldKey, thisObj));
        if (content.srchlinkpos === '' || content.srchlinkpos === 'na') {
          delete content.srchlinkpos;
        }
        if (awaSrchq) {
          content.srchq = awaSrchq;
        }
        content.srchq = analytics.globalfunctions.appendUniqueData(content.srchq, analytics.globalfunctions.extractEncodedMetadata(awaSrchqFieldKey, thisObj));
        if (content.srchq === '' || content.srchq === 'na') {
          delete content.srchq;
        }
        if (awaChtmn) {
          content.chtnm = awaChtmn;
        }
        content.chtnm = analytics.globalfunctions.appendUniqueData(content.chtnm, analytics.globalfunctions.extractEncodedMetadata(awaChtmnFieldKey, thisObj));
        if (content.chtnm === '' || content.chtnm === 'na') {
          delete content.chtnm;
        }
        if (awaChtId) {
          content.chtid = awaChtId;
        }
        content.chtid = analytics.globalfunctions.appendUniqueData(content.chtid, analytics.globalfunctions.extractEncodedMetadata(awaChtIdFieldKey, thisObj));
        if (content.chtid === '' || content.chtid === 'na') {
          delete content.chtid;
        }
        if (awaFilterValue) {
          content.filter_value = awaFilterValue;
        }
        if (awaId) {
          content.id = awaId;
        }
        if (content.blade_name) {
          content.id = content.blade_name;
        }
        if (content.id) {
          content.awaId = content.id;
        }
        if (content.awaId === '' || content.awaId === 'na') {
          delete content.awaId;
        }
        if (awaArea) {
          content.area = awaArea;
        }
        content.area = analytics.globalfunctions.appendUniqueData(content.area, thisObj.attr('data-bi-area'));
        if (content.id && content.area !== 'Header Search bar') {
          content.area = analytics.globalfunctions.appendUniqueData(content.area, content.id);
        }
        if (thisObj.attr('data-area') !== undefined) {
          var searchArea;
          var searchTerm = thisObj.parent().siblings("input").val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
          content.srchq = 'Support Internal Search: ' + searchTerm;
          content.link_name = 'Support Internal Search'
          content.area = searchArea = 'Support Search bar';
        }
        if (thisObj.attr('data-tracking-task-internal-id')) {
          content.internal_task_id = thisObj.attr('data-tracking-task-internal-id');
        }
        if (thisObj.attr('data-tracking-task-cta-id')) {
          content.cta_task_id = thisObj.attr('data-tracking-task-cta-id');
        }
        if (content.area === '' || content.area === 'na') {
          delete content.area;
        }
        content.area = analytics.globalfunctions.appendUniqueData(content.area, analytics.globalfunctions.extractEncodedMetadata(awaAreaFieldKey, thisObj));
        if (content.area === '' || content.area === 'na') {
          delete content.area;
        }
        if (awaFeedbackName) {
          content.fbid = content.fbnm = awaFeedbackName;
        }
        if (content.fbid === '' || content.fbid === 'na') {
          delete content.fbid;
          delete content.fbnm;
        }
        if (awaSurveyVerbatim) {
          content.vtbm = awaSurveyVerbatim;
        }
        if (content.vtbm === '' || content.vtbm === 'na') {
          delete content.vtbm;
        }
        if (content.link_name && !content.dlnm && !content.filter_value && !action.behavior) {
          action.behavior = awa.behavior.NAVIGATION;
          action.actionType = 'click';
        } else if (content.link_name && content.dlnm && !action.behavior) {
          action.behavior = awa.behavior.DOWNLOAD;
          action.actionType = 'download';
        } else if (content.filter_value && !action.behavior) {
          action.behavior = awa.behavior.APPLY;
          action.actionType = 'filter';
        }
        if (content.blade_type === 'One-Card' || content.blade_type === 'AL-List-View') {
          content.actionType = 'asset gallery click';
        }
        var idx = function (path, obj) {
          return path.reduce(function (all, item) {
            return all && all[item] ? all[item] : null
          }, obj)
        }
        var dbKeyPair = '|';
        var dbPairDel = ',';
        if (typeof Demandbase != "undefined" && idx(['Segments', 'CompanyProfile'], Demandbase)) {
          var dbFields = 'db_audience' + dbKeyPair + Demandbase.Segments.CompanyProfile.audience + dbPairDel +
            'db_audience_segment' + dbKeyPair + Demandbase.Segments.CompanyProfile.audience_segment + dbPairDel +
            'db_revenue_range' + dbKeyPair + Demandbase.Segments.CompanyProfile.revenue_range + dbPairDel +
            'db_employee_range' + dbKeyPair + Demandbase.Segments.CompanyProfile.employee_range + dbPairDel +
            'db_industry' + dbKeyPair + Demandbase.Segments.CompanyProfile.industry + dbPairDel +
            'demandbase_sid' + dbKeyPair + Demandbase.Segments.CompanyProfile.demandbase_sid + dbPairDel +
            'db_sub_industry' + dbKeyPair + Demandbase.Segments.CompanyProfile.sub_industry;
        }
        var supportArea = $('#ddlcategory option:selected').text(),
          supportCategory = $('#ddlTopic option:selected').text(),
          supportTopic = $('#ddlIssue option:selected').text(),
          supportQuestion = thisObj.attr('data-bi-prtid');
        var supportModality = thisObj.attr('data-tracking-supportoption');
        var supportFields = '';
        if (searchTerm) {
          supportFields = 'area' + dbKeyPair + searchArea + dbPairDel + 'srchq' + dbKeyPair + searchTerm;
        }
        if (supportArea) {
          supportFields = supportFields + dbPairDel + 'support_area' + dbKeyPair + supportArea.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        }
        if (supportCategory) {
          supportFields = supportFields + dbPairDel + 'support_category' + dbKeyPair + supportCategory.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        }
        if (supportTopic) {
          supportFields = supportFields + dbPairDel + 'support_topic' + dbKeyPair + supportTopic.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
          content.scnstp = $('#ddlIssue option:selected').attr('value');
          if (supportModality) {
            content.id = content.awaID = supportModality;
          }
          if (thisObj.parent().parent().prev().text() === "Recommended solutions") {
            content.area = 'Recommended Solutions'
          } else if (thisObj.parent().parent().prev().text() === "Support options") {
            content.area = 'Support Options';
          }
        }
        if (supportQuestion) {
          content.contentName = content.link_name = content.contentName + ': ' + supportQuestion;
          content.area = 'TPQ: ' + supportQuestion;
        }
        if (content.contentSource && supportFields) {
          content.contentSource = content.contentSource + ',' + dbFields + ',' + supportFields;
        } else if (content.contentSource) {
          content.contentSource = content.contentSource + ',' + dbFields;
        }
        if (action.targetUri == 'javascript:void(0);' || action.targetUri == 'javascript:void(0)') {
          if (action.targetUri === null || content.link_name.match(/^ *$/) !== null) {
            action.targetUri = 'JavaScript: No Link Name';
          } else {
            action.targetUri = 'JavaScript: ' + content.link_name;
          }
        }
        if (content.link_name) {
          content.link_name = content.contentName = analytics.globalfunctions.maskEmailAddress(content.link_name).trim()
        }
        if (action.targetUri) {
          action.targetUri = analytics.globalfunctions.maskEmailAddress(action.targetUri)
        }
        if (content.contentSource) {
          content.contentSource = analytics.globalfunctions.maskEmailAddress(content.contentSource)
        }
        if (content.feedback_comments) {
          content.feedback_comments = analytics.globalfunctions.maskEmailAddress(content.feedback_comments)
        }
        if (content.feedback_comments) {
          content.feedback_comments = analytics.globalfunctions.maskProfanity(content.feedback_comments)
        }
        if (content.feedback_comments) {
          content.feedback_comments = analytics.globalfunctions.maskPhoneNumber(content.feedback_comments)
        }
        if (content.vtbm) {
          content.vtbm = analytics.globalfunctions.maskEmailAddress(content.vtbm)
        }
        if (true) {
          if (!action.actionType) {
            action.actionType = 'Not Populated';
          }
          if (!content.contentName && false) {
            content.contentName = 'Not Populated';
          }
          if (!content.awaId && false) {
            content.awaId = 'Not Populated';
          }
          if (!content.blade_name && false) {
            content.blade_name = 'Not Populated';
          }
          if (!content.blade_type && false) {
            content.blade_type = 'Not Populated';
          }
          if (!content.type) {
            content.type = 'Not Populated';
          }
          if (!content.blade_depth && false) {
            content.blade_depth = 'Not Populated';
          }
          if (!content.feedback_comments && false) {
            content.feedback_comments = 'Not Populated';
          }
          if (!action.destUri) {
            action.destUri = 'Not Populated';
          }
          if (!content.goal_description && false) {
            content.goal_description = 'Not Populated';
          }
          if (!content.goal_name && false) {
            content.goal_name = 'Not Populated';
          }
          if (!content.goal_timestamp && false) {
            content.goal_timestamp = 'Not Populated';
          }
          if (!content.source) {
            content.source = 'Not Populated';
          }
          if (!content.link_name && false) {
            content.link_name = 'Not Populated';
          }
          if (!content.page_depth && false) {
            content.page_depth = 'Not Populated';
          }
          if (!content.scn && false) {
            content.scn = 'Not Populated';
          }
          if (!content.scnstp && false) {
            content.scnstp = 'Not Populated';
          }
          if (!content.stpnum && false) {
            content.stpnum = 'Not Populated';
          }
          if (!content.dlnm && false) {
            content.dlnm = 'Not Populated';
          }
          if (!content.dlid && false) {
            content.dlid = 'Not Populated';
          }
          if (!content.dltype && false) {
            content.dltype = 'Not Populated';
          }
          if (!content.area) {
            content.area = 'Not Populated';
          }
          if (!content.slot) {
            content.slot = 'Not Populated';
          }
          if (!content.srchlinkpos && false) {
            content.srchlinkpos = 'Not Populated';
          }
          if (!content.srchq && false) {
            content.srchq = 'Not Populated';
          }
          if (!content.chtnm && false) {
            content.chtnm = 'Not Populated';
          }
          if (!content.chtid && false) {
            content.chtid = 'Not Populated';
          }
          if (!content.filter_value && false) {
            content.filter_value = 'Not Populated';
          }
        }
        if (skipRepeats && thisObj.attr(skipAttr) === 'y') {} else {
          awaUtil.awaPageActionBuilder(action, content);
        }
        return;
      },
      sendTagMap: function (awaBehavior, awaName, awaId, awaType, awaSource, awaScn, awaScnstp, awaStpnum, awaDlmn, awaFileName, awaFileNameType, awaArea, awaSlot, awaSrchlinkpos, awaSrchq, awaChtmn, awaChtId, thisObj, skipRepeats) {
        var fieldArrayDelimiter = '|-|';
        var keyPairDelimiter = '|~|';
        var adjustedArray = '';
        var awaBehaviorKey = 'Behavior';
        var awaActionTypeKey = 'ActionType';
        var awaNameKey = 'Name';
        var awaIdKey = 'ID';
        var awaTypeKey = 'Type';
        var awaSourceKey = 'Source';
        var awaScnKey = 'Scn';
        var awaScnstpKey = 'Scnstp';
        var awaStpnumKey = 'Stpnum';
        var awaDlmnKey = 'Dlmn';
        var awaFileNameKey = 'FileName';
        var awaFileNameTypeKey = 'FileNameTypeKey';
        var awaAreaKey = 'Area';
        var awaSlotKey = 'Slot';
        var awaSrchlinkposKey = 'Srchlinkpos';
        var awaSrchqKey = 'Srchq';
        var awaChtmnKey = 'Chtmn';
        var awaChtIdKey = 'ChtId';
        if (awaBehavior) {
          adjustedArray = adjustedArray + awaBehaviorKey + keyPairDelimiter + awaBehavior;
        }
        if (awaName) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaNameKey + keyPairDelimiter + awaName;
        }
        if (awaId) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaIdKey + keyPairDelimiter + awaId;
        }
        if (awaType) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaTypeKey + keyPairDelimiter + awaType;
        }
        if (awaSource) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaSourceKey + keyPairDelimiter + awaSource;
        }
        if (awaScn) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaScnKey + keyPairDelimiter + awaScn;
        }
        if (awaScnstp) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaScnstpKey + keyPairDelimiter + awaScnstp;
        }
        if (awaStpnum) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaStpnumKey + keyPairDelimiter + awaStpnum;
        }
        if (awaDlmn) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaDlmnKey + keyPairDelimiter + awaDlmn;
        }
        if (awaFileName) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaFileNameKey + keyPairDelimiter + awaFileName;
        }
        if (awaFileNameType) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaFileNameKey + keyPairDelimiter + awaFileNameType;
        }
        if (awaArea) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaAreaKey + keyPairDelimiter + awaArea;
        }
        if (awaSlot) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaSlotKey + keyPairDelimiter + awaSlot;
        }
        if (awaSrchlinkpos) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaSrchlinkposKey + keyPairDelimiter + awaSrchlinkpos;
        }
        if (awaSrchq) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaSrchqKey + keyPairDelimiter + awaSrchq;
        }
        if (awaChtmn) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaChtmnKey + keyPairDelimiter + awaChtmn;
        }
        if (awaChtId) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + awaChtIdKey + keyPairDelimiter + awaChtId;
        }
        analytics.globalfunctions.sendAllJSLL(adjustedArray, thisObj, skipRepeats);
      },
      sendTag: function (awaBehavior, awaName, awaId, awaType, awaSource, awaScn, awaScnstp, awaStpnum, awaDlmn, awaFileName, awaFileNameType, awaArea, awaSlot, awaSrchlinkpos, awaSrchq, awaChtmn, awaChtId) {
        try {
          var action = {
              actionType: 'CL',
            },
            content = {
              contentName: awaName,
              id: awaId,
              type: awaType,
            };
          if (awaBehavior !== 'na') {
            action.behavior = awaBehavior;
          }
          if (awaSource !== 'na') {
            content.source = awaSource;
          }
          if (awaScn !== 'na') {
            content.scnstp = awaScnstp;
            content.stpnum = awaStpnum;
            content.scn = awaScn;
          }
          if (awaDlmn !== 'na') {
            content.dlnm = awaDlmn;
            content.dlid = awaFileName;
            content.dltype = awaFileNameType;
          }
          if (awaArea !== 'na') {
            content.area = awaArea;
          }
          if (awaSlot !== 'na') {
            content.slot = awaSlot;
          }
          if (awaSrchlinkpos !== 'na') {
            content.srchlinkpos = awaSrchlinkpos;
          }
          if (awaSrchq !== 'na') {
            content.srchq = awaSrchq;
          }
          if (awaChtmn !== 'na') {
            content.chtnm = awaChtmn;
            content.chtid = awaChtId;
          }
          awaUtil.awaPageActionBuilder(action, content);
        } catch (e) {}
        return;
      },
      sendAllUtag: function (utagFields, thisObj, dataset, skipRepeats) {
        var tagStartTime = Date.now(),
          utagEventName, utagEventType, utagEventAction, utagEventAttr1, utagEventAttr2, utagEventAttr3, utagEventAttr4, utagEventAttr5, utagEventAttr6, utagEventOffer, utagEventTarget, utagEventTitle, utagLinkName, utagLinkHref, utagBladeName, utagEventArea, utagEventHashtag, utagViewHashtag, utagAdobeVisitorId, utagArticleAuthor, utagArticleId, utagArticleName, utagArticlePublishDate, utagAuthenticated, utagAwaMarket, utagBusinessUnit, utagCampaignTactic, utagClickCategory, utagClickLabel, utagClickType, utagFeedbackComments, utagGoalDescription, utagGoalName, utagGoalTimestamp, utagJsllAppId, utagJsllBaseUrl, utagJsllEnvironment, utagLinkLocation, utagLinkedinConversionId, utagLinkIndex, utagLiveVideoDate, utagLocationCode, utagMsAud, utagMsPlvl, utagMsftAnid, utagMsftMuid, utagPId, utagPageCategory, utagPageDescription, utagPageFriendlyUrl, utagPageId, utagPageLanguage, utagPageName, utagPageNumber, utagPagePath, utagPageSection, utagPageSubcategory, utagPageTemplateId, utagPageTemplateName, utagPageTitle, utagPageType, utagPartnerAuthtype, utagPartnerId, utagPartnerLevel, utagPartnerMpnId, utagPartnerMpnLevel, utagPartnerType, utagSearchKeyword, utagSearchResults, utagSearchTerm, utagSearchType, utagSecurityTabName, utagShareSocialNetwork, utagShareType, utagSiteCountryCode, utagSiteDisplayFormat, utagSiteEnvironment, utagSiteLanguageCode, utagSiteName, utagSitePlatform, utagSiteRegion, utagSlideTitle, utagTwitterEventName, utagTxnId, utagVideoOnPage, utagFilterValue, overrideFlag;
        var eventNameKey = 'data-utag-en',
          eventTypeKey = 'data-utag-et',
          eventActionKey = 'data-utag-eac',
          eventAttr1Key = 'data-utag-ea1',
          eventAttr2Key = 'data-utag-ea2',
          eventAttr3Key = 'data-utag-ea3',
          eventAttr4Key = 'data-utag-ea4',
          eventAttr5Key = 'data-utag-ea5',
          eventAttr6Key = 'data-utag-ea6',
          eventOfferKey = 'data-utag-eo',
          eventTargetKey = 'data-utag-eta',
          eventTitleKey = 'data-utag-eti',
          linkNameKey = 'data-utag-ln',
          linkAreaKey = 'data-utag-la',
          eventHashtagKey = 'data-utag-eh',
          viewHashtagKey = 'data-utag-vh';
        var fieldArrayDelimiter = '|-|';
        var keyPairDelimiter = '|~|';
        var outputDelimiter = ',';
        var skipAttr = 'data-utag-fired';
        if (utagFields !== '') {
          var utagFieldsArray = utagFields.split(fieldArrayDelimiter);
          for (var i = 0; i < utagFieldsArray.length; i++) {
            var key = utagFieldsArray[i].split(keyPairDelimiter)[0];
            var value = utagFieldsArray[i].split(keyPairDelimiter)[1];
            switch (key) {
              case 'event_name':
                utagEventName = value;
                break;
              case 'event_type':
                utagEventType = value;
                break;
              case 'event_action':
                utagEventAction = value;
                break;
              case 'event_attr1':
                utagEventAttr1 = value;
                break;
              case 'event_attr2':
                utagEventAttr2 = value;
                break;
              case 'event_attr3':
                utagEventAttr3 = value;
                break;
              case 'event_attr4':
                utagEventAttr4 = value;
                break;
              case 'event_attr5':
                utagEventAttr5 = value;
                break;
              case 'event_attr6':
                utagEventAttr6 = value;
                break;
              case 'event_offer':
                utagEventOffer = value;
                break;
              case 'event_target':
                utagEventTarget = value;
                break;
              case 'event_title':
                utagEventTitle = value;
                break;
              case 'link_index':
                utagLinkIndex = value;
                break;
              case 'link_name':
                utagLinkName = value;
                break;
              case 'link_href':
                utagLinkHref = value;
                break;
              case 'blade_name':
                utagBladeName = value;
                break;
              case 'event_area':
                utagEventArea = value;
                break;
              case 'event_hashtag':
                utagEventHashtag = value;
                break;
              case 'view_hashtag':
                utagViewHashtag = value;
                break;
              case 'adobe_visitor_id':
                utagAdobeVisitorId = value;
                break;
              case 'article_author':
                utagArticleAuthor = value;
                break;
              case 'article_id':
                utagArticleId = value;
                break;
              case 'article_name':
                utagArticleName = value;
                break;
              case 'article_publish_date':
                utagArticlePublishDate = value;
                break;
              case 'authenticated':
                utagAuthenticated = value;
                break;
              case 'awa_market':
                utagAwaMarket = value;
                break;
              case 'business_unit':
                utagBusinessUnit = value;
                break;
              case 'campaign_tactic':
                utagCampaignTactic = value;
                break;
              case 'click_category':
                utagClickCategory = value;
                break;
              case 'click_label':
                utagClickLabel = value;
                break;
              case 'click_type':
                utagClickType = value;
                break;
              case 'feedback_comments':
                utagFeedbackComments = value;
                break;
              case 'filter_value':
                utagFilterValue = value;
                break;
              case 'goal_description':
                utagGoalDescription = value;
                break;
              case 'goal_name':
                utagGoalName = value;
                break;
              case 'goal_timestamp':
                utagGoalTimestamp = value;
                break;
              case 'jsll_app_id':
                utagJsllAppId = value;
                break;
              case 'jsll_base_url':
                utagJsllBaseUrl = value;
                break;
              case 'jsll_environment':
                utagJsllEnvironment = value;
                break;
              case 'link_location':
                utagLinkLocation = value;
                break;
              case 'linkedIn_conversion_id':
                utagLinkedinConversionId = value;
                break;
              case 'live_video_date':
                utagLiveVideoDate = value;
                break;
              case 'location_code':
                utagLocationCode = value;
                break;
              case 'ms_aud':
                utagMsAud = value;
                break;
              case 'ms_plvl':
                utagMsPlvl = value;
                break;
              case 'msft_anid':
                utagMsftAnid = value;
                break;
              case 'msft_muid':
                utagMsftMuid = value;
                break;
              case 'p_id':
                utagPId = value;
                break;
              case 'page_category':
                utagPageCategory = value;
                break;
              case 'page_description':
                utagPageDescription = value;
                break;
              case 'page_friendly_url':
                utagPageFriendlyUrl = value;
                break;
              case 'page_id':
                utagPageId = value;
                break;
              case 'page_language':
                utagPageLanguage = value;
                break;
              case 'page_name':
                utagPageName = value;
                break;
              case 'page_number':
                utagPageNumber = value;
                break;
              case 'page_path':
                utagPagePath = value;
                break;
              case 'page_section':
                utagPageSection = value;
                break;
              case 'page_subcategory':
                utagPageSubcategory = value;
                break;
              case 'page_template_id':
                utagPageTemplateId = value;
                break;
              case 'page_template_name':
                utagPageTemplateName = value;
                break;
              case 'page_title':
                utagPageTitle = value;
                break;
              case 'page_type':
                utagPageType = value;
                break;
              case 'partner_authtype':
                utagPartnerAuthtype = value;
                break;
              case 'partner_id':
                utagPartnerId = value;
                break;
              case 'partner_level':
                utagPartnerLevel = value;
                break;
              case 'partner_mpn_id':
                utagPartnerMpnId = value;
                break;
              case 'partner_mpn_level':
                utagPartnerMpnLevel = value;
                break;
              case 'partner_type':
                utagPartnerType = value;
                break;
              case 'search_keyword':
                utagSearchKeyword = value;
                break;
              case 'search_results':
                utagSearchResults = value;
                break;
              case 'search_term':
                utagSearchTerm = value;
                break;
              case 'search_type':
                utagSearchType = value;
                break;
              case 'security_tab_name':
                utagSecurityTabName = value;
                break;
              case 'share_social_network':
                utagShareSocialNetwork = value;
                break;
              case 'share_type':
                utagShareType = value;
                break;
              case 'site_country_code':
                utagSiteCountryCode = value;
                break;
              case 'site_display_format':
                utagSiteDisplayFormat = value;
                break;
              case 'site_environment':
                utagSiteEnvironment = value;
                break;
              case 'site_language_code':
                utagSiteLanguageCode = value;
                break;
              case 'site_name':
                utagSiteName = value;
                break;
              case 'site_platform':
                utagSitePlatform = value;
                break;
              case 'site_region':
                utagSiteRegion = value;
                break;
              case 'slide_title':
                utagSlideTitle = value;
                break;
              case 'twitter_event_name':
                utagTwitterEventName = value;
                break;
              case 'txn_id':
                utagTxnId = value;
                break;
              case 'video_on_page':
                utagVideoOnPage = value;
                break;
              case 'override':
                overrideFlag = value;
                break;
              default:
                console.log(utagFieldsArray[i]);
                break;
            }
          }
        }
        if (thisObj.is('a') || thisObj.is('button') || thisObj.is('input[type!="text"]') || overrideFlag == 'Yes') {} else if (thisObj.hasClass('clickable-panel') && thisObj.find('a.hoverable') != undefined) {
          thisObj = thisObj.find('a.hoverable');
        } else if (thisObj.find('a') != undefined) {
          thisObj = thisObj.find('a');
        } else if (thisObj.parent().is('a')) {
          thisObj = thisObj.parent();
        }
        if (thisObj.attr('href') && thisObj.attr('href').includes('db-siteopt-rid')) {
          thisObj = thisObj.closest('.recommended-block__list__recommended-item__image-wrapper').find('a.recommended-block__list__recommended-item__title');
          utagBladeName = 'Demandbase Flyout';
          utagEventName = 'Demandbase Personalization';
        }
        var udo = {};
        udo = jQuery.extend(udo, dataset);
        if (utagEventName) {
          udo.event_name = utagEventName;
        }
        udo.event_name = analytics.globalfunctions.appendUniqueData(udo.event_name, thisObj.attr('ms.title'));
        if (udo.event_name === '' || udo.event_name === 'na') {
          delete udo.event_name;
        }
        udo.event_name = analytics.globalfunctions.appendUniqueData(udo.event_name, analytics.globalfunctions.extractEncodedMetadata(eventNameKey, thisObj));
        if (udo.event_name === '' || udo.event_name === 'na') {
          delete udo.event_name;
        }
        if (utagEventType) {
          udo.event_type = utagEventType;
        }
        udo.event_type = analytics.globalfunctions.appendUniqueData(udo.event_type, thisObj.attr('ms.cmptyp'));
        if (udo.event_type === '' || udo.event_type === 'na') {
          delete udo.event_type;
        }
        udo.event_type = analytics.globalfunctions.appendUniqueData(udo.event_type, analytics.globalfunctions.extractEncodedMetadata(eventTypeKey, thisObj));
        if (udo.event_type === '' || udo.event_type === 'na') {
          delete udo.event_type;
        }
        if (utagEventAction) {
          udo.event_action = utagEventAction;
        }
        udo.event_action = analytics.globalfunctions.appendUniqueData(udo.event_action, thisObj.attr('data-bi-type'));
        if (udo.event_action === '' || udo.event_action === 'na') {
          delete udo.event_action;
        }
        udo.event_action = analytics.globalfunctions.appendUniqueData(udo.event_action, analytics.globalfunctions.extractEncodedMetadata(eventActionKey, thisObj));
        if (udo.event_action === '' || udo.event_action === 'na') {
          delete udo.event_action;
        }
        udo.page_depth = analytics.globalfunctions.appendUniqueData(udo.page_depth, analytics.globalfunctions.amountScrolled());
        udo.max_page_depth = analytics.globalfunctions.appendUniqueData(udo.max_page_depth, utag.data.max_page_depth);
        if (utagEventAttr1) {
          udo.event_attr1 = utagEventAttr1;
        }
        udo.event_attr1 = analytics.globalfunctions.appendUniqueData(udo.event_attr1, analytics.globalfunctions.extractEncodedMetadata(eventAttr1Key, thisObj));
        if (udo.event_attr1 === '' || udo.event_attr1 === 'na') {
          delete udo.event_attr1;
        }
        if (utagEventAttr2) {
          udo.event_attr2 = utagEventAttr2;
        }
        udo.event_attr2 = analytics.globalfunctions.appendUniqueData(udo.event_attr2, analytics.globalfunctions.extractEncodedMetadata(eventAttr2Key, thisObj));
        if (udo.event_attr2 === '' || udo.event_attr2 === 'na') {
          delete udo.event_attr2;
        }
        if (utagEventAttr3) {
          udo.event_attr3 = utagEventAttr3;
        }
        udo.event_attr3 = analytics.globalfunctions.appendUniqueData(udo.event_attr3, analytics.globalfunctions.extractEncodedMetadata(eventAttr3Key, thisObj));
        if (udo.event_attr3 === '' || udo.event_attr3 === 'na') {
          delete udo.event_attr3;
        }
        if (utagEventAttr4) {
          udo.event_attr4 = utagEventAttr4;
        }
        udo.event_attr4 = analytics.globalfunctions.appendUniqueData(udo.event_attr4, analytics.globalfunctions.extractEncodedMetadata(eventAttr4Key, thisObj));
        if (udo.event_attr4 === '' || udo.event_attr4 === 'na') {
          delete udo.event_attr4;
        }
        if (utagEventAttr5) {
          udo.event_attr5 = utagEventAttr5;
        }
        udo.event_attr5 = analytics.globalfunctions.appendUniqueData(udo.event_attr5, analytics.globalfunctions.extractEncodedMetadata(eventAttr5Key, thisObj));
        if (udo.event_attr5 === '' || udo.event_attr5 === 'na') {
          delete udo.event_attr5;
        }
        if (utagEventAttr6) {
          udo.event_attr6 = utagEventAttr6;
        }
        udo.event_attr6 = analytics.globalfunctions.appendUniqueData(udo.event_attr6, analytics.globalfunctions.extractEncodedMetadata(eventAttr6Key, thisObj));
        if (udo.event_attr6 === '' || udo.event_attr6 === 'na') {
          delete udo.event_attr6;
        }
        if (utagEventOffer) {
          udo.event_offer = utagEventOffer;
        }
        udo.event_offer = analytics.globalfunctions.appendUniqueData(udo.event_offer, thisObj.attr('ea_offer'));
        if (udo.event_offer === '' || udo.event_offer === 'na') {
          delete udo.event_offer;
        }
        udo.event_offer = analytics.globalfunctions.appendUniqueData(udo.event_offer, analytics.globalfunctions.extractEncodedMetadata(eventOfferKey, thisObj));
        if (udo.event_offer === '' || udo.event_offer === 'na') {
          delete udo.event_offer;
        }
        if (utagEventTarget) {
          udo.event_target = utagEventTarget;
        }
        udo.event_target = analytics.globalfunctions.appendUniqueData(udo.event_target, analytics.globalfunctions.extractEncodedMetadata(eventTargetKey, thisObj));
        if (udo.event_target === '' || udo.event_target === 'na') {
          delete udo.event_target;
        }
        if (utagEventTitle) {
          udo.event_title = utagEventTitle;
        }
        udo.event_title = analytics.globalfunctions.appendUniqueData(udo.event_title, thisObj.attr('data-tracking-cta-field-name'));
        if (udo.event_title === '' || udo.event_title === 'na') {
          delete udo.event_title;
        }
        udo.event_title = analytics.globalfunctions.appendUniqueData(udo.event_title, analytics.globalfunctions.extractEncodedMetadata(eventTitleKey, thisObj));
        if (udo.event_title === '' || udo.event_title === 'na') {
          delete udo.event_title;
        }
        if (utagFeedbackComments) {
          udo.feedback_comments = utagFeedbackComments;
        }
        if (udo.feedback_comments === '' || udo.feedback_comments === 'na') {
          delete udo.feedback_comments;
        }
        if (utagFilterValue) {
          udo.filter_value = utagFilterValue;
        }
        if (utagBladeName) {
          udo.blade_name = utagBladeName;
        }
        if (thisObj.closest('[data-tracking-bladename]').attr('data-tracking-bladename')) {
          udo.blade_name = thisObj.closest('[data-tracking-bladename]').attr('data-tracking-bladename');
        }
        if (udo.blade_name === '' || udo.blade_name === 'na') {
          delete udo.blade_name;
        }
        udo.blade_type = thisObj.closest('[data-tracking-bladename]').attr('data-tracking-bladetype');
        if (thisObj.closest('[data-tracking-bladetype="AL-List-View"]').attr('data-tracking-bladetype') != undefined) {
          udo.blade_type = 'AL-List-View';
        }
        if (udo.blade_type === '' || udo.blade_type === 'na') {
          delete udo.blade_type;
        }
        if (thisObj.attr('data-tracking-link-name') && analytics.globalfunctions.validateString(thisObj.attr('data-tracking-link-name'))) {
          udo.link_name = thisObj.attr('data-tracking-link-name');
        }
        if (document.location.pathname.indexOf('/solutions/my-solutions/solutiondetails') > -1 && thisObj.attr('data-target') == '#publishcard' && thisObj.attr('data-target') == thisObj.siblings('a').attr('data-target')) {
          udo.link_name = thisObj.siblings('a').attr('data-tracking-link-name')
        }
        if (!udo.link_name && utagLinkName) {
          udo.link_name = utagLinkName;
        }
        if (!udo.link_name && analytics.globalfunctions.validateString(thisObj.text())) {
          udo.link_name = thisObj.text();
        }
        if (!udo.link_name && analytics.globalfunctions.validateString(data.link_text)) {
          udo.link_name = data.link_text;
        }
        if ((udo.blade_type === 'One-Card' || udo.blade_type === 'AL-List-View') && udo.link_name) {
          udo.link_name = 'Asset Gallery: ' + udo.link_name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        }
        if (!udo.link_name && thisObj.attr('aria-label') && analytics.globalfunctions.validateString(thisObj.attr('aria-label'))) {
          udo.link_name = thisObj.attr('aria-label');
        }
        if (!udo.link_name && thisObj.attr('ariaLabel') && analytics.globalfunctions.validateString(thisObj.attr('ariaLabel'))) {
          udo.link_name = thisObj.attr('ariaLabel');
        }
        if (!udo.link_name && thisObj.attr('onclick') && analytics.globalfunctions.validateString(thisObj.attr('onclick'))) {
          udo.link_name = thisObj.attr('onclick');
        }
        if (!udo.link_name && thisObj.attr('title') && analytics.globalfunctions.validateString(thisObj.attr('title'))) {
          udo.link_name = thisObj.attr('title');
        }
        if (udo.blade_name === 'Bot Panel' && udo.link_name) {
          udo.link_name = 'Bot: ' + udo.link_name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        }
        if (thisObj.attr('data-tracking-rule')) {
          udo.personalized_blade_rule_clicked = thisObj.attr('data-tracking-rule');
          udo.personalized_blade_name_clicked = thisObj.attr('data-tracking-bladename');
          udo.personalized_blade_type_clicked = thisObj.attr('data-tracking-bladetype');
        } else if (typeof thisObj.prevObject != "undefined" && thisObj.prevObject.attr('data-tracking-rule')) {
          udo.personalized_blade_rule_clicked = thisObj.prevObject.attr('data-tracking-rule');
          udo.personalized_blade_name_clicked = thisObj.prevObject.attr('data-tracking-bladename');
          udo.personalized_blade_type_clicked = thisObj.prevObject.attr('data-tracking-bladetype');
        } else if (thisObj.closest("div[data-tracking-rule]")) {
          udo.personalized_blade_rule_clicked = thisObj.closest("div[data-tracking-rule]").attr('data-tracking-rule');
          udo.personalized_blade_name_clicked = thisObj.closest("div[data-tracking-rule]").attr('data-tracking-bladename');
          udo.personalized_blade_type_clicked = thisObj.closest("div[data-tracking-rule]").attr('data-tracking-bladetype');
        }
        if (thisObj.attr('data-tracking-task-internal-id')) {
          udo.internal_task_id = thisObj.attr('data-tracking-task-internal-id');
        }
        if (thisObj.attr('data-tracking-task-cta-id')) {
          udo.cta_task_id = thisObj.attr('data-tracking-task-cta-id');
        }
        if (typeof thisObj.attr('href') == 'string' && thisObj.attr('href').includes('mailto') && typeof udo.link_name == 'string' && udo.link_name.includes('@')) {
          udo.link_name = 'Mailto Link';
        }
        if (thisObj.attr('id') == 'btnStartChat') {
          udo.link_name = 'Start Chat'
        }
        if (udo.link_name === '' || udo.link_name === 'na') {
          delete udo.link_name;
        }
        udo.event_title = analytics.globalfunctions.appendUniqueData(udo.event_title, analytics.globalfunctions.extractEncodedMetadata(linkNameKey, thisObj));
        if (udo.event_title === '' || udo.event_title === 'na') {
          delete udo.event_title;
        }
        if (utagLinkHref) {
          udo.link_href = utagLinkHref;
        }
        if (!udo.link_href && thisObj.attr('href')) {
          udo.link_href = analytics.globalfunctions.appendUniqueData(udo.link_href, thisObj.attr('href'));
        }
        if (!udo.link_href && thisObj.attr('onclick')) {
          udo.link_href = analytics.globalfunctions.appendUniqueData(udo.link_href, thisObj.attr('onclick'));
        }
        if (typeof udo.link_href == 'string' && udo.link_href.includes('mailto')) {
          udo.link_href = 'Mailto Link';
        }
        if (udo.link_href === '' || udo.link_href === 'na') {
          delete udo.link_href;
        }
        udo.blade_depth = analytics.globalfunctions.appendUniqueData(udo.blade_depth, thisObj.closest('[data-tracking-bladename]').attr('cta-blade-depth'));
        if (udo.blade_depth === '' || udo.blade_depth === 'na') {
          delete udo.blade_depth;
        }
        if (utagEventArea) {
          udo.event_area = utagEventArea;
        }
        udo.event_area = analytics.globalfunctions.appendUniqueData(udo.event_area, thisObj.attr('data-bi-area'));
        if (udo.event_area === '' || udo.event_area === 'na') {
          delete udo.event_area;
        }
        if (utagLinkIndex) {
          udo.link_index = utagLinkIndex;
        }
        udo.link_index = analytics.globalfunctions.appendUniqueData(udo.link_index, thisObj.attr('link_index'));
        if (udo.link_index === '' || udo.link_index === 'na') {
          delete udo.link_index;
        }
        analytics.globalfunctions.assetsHashTarget(thisObj);
        analytics.globalfunctions.assetsHashMsSupCln();
        if (utagEventHashtag) {
          udo.event_hashtag = utagEventHashtag;
        }
        udo.event_hashtag = analytics.globalfunctions.appendUniqueData(udo.event_hashtag, data.hashTarget);
        if (udo.event_hashtag === '' || udo.event_hashtag === 'na') {
          delete udo.event_hashtag;
        }
        udo.event_hashtag = analytics.globalfunctions.appendUniqueData(udo.event_hashtag, analytics.globalfunctions.extractEncodedMetadata(eventHashtagKey, thisObj));
        if (udo.event_hashtag === '' || udo.event_hashtag === 'na') {
          delete udo.event_hashtag;
        }
        if (utagViewHashtag) {
          udo.view_hashtag = utagViewHashtag;
        }
        udo.view_hashtag = analytics.globalfunctions.appendUniqueData(udo.view_hashtag, data.msSupCln);
        if (udo.view_hashtag === '' || udo.view_hashtag === 'na') {
          delete udo.view_hashtag;
        }
        udo.view_hashtag = analytics.globalfunctions.appendUniqueData(udo.view_hashtag, analytics.globalfunctions.extractEncodedMetadata(viewHashtagKey, thisObj));
        if (udo.view_hashtag === '' || udo.view_hashtag === 'na') {
          delete udo.view_hashtag;
        }
        if (utagAdobeVisitorId) {
          udo.adobe_visitor_id = utagAdobeVisitorId;
        }
        if (utagArticleAuthor) {
          udo.article_author = utagArticleAuthor;
        }
        if (utagArticleId) {
          udo.article_id = utagArticleId;
        }
        if (utagArticleName) {
          udo.article_name = utagArticleName;
        }
        if (utagArticlePublishDate) {
          udo.article_publish_date = utagArticlePublishDate;
        }
        if (utagAuthenticated) {
          udo.authenticated = utagAuthenticated;
        }
        if (utagAwaMarket) {
          udo.awa_market = utagAwaMarket;
        }
        if (utagBusinessUnit) {
          udo.business_unit = utagBusinessUnit;
        }
        if (utagCampaignTactic) {
          udo.campaign_tactic = utagCampaignTactic;
        }
        if (utagClickCategory) {
          udo.click_category = utagClickCategory;
        }
        if (utagClickLabel) {
          udo.click_label = utagClickLabel;
        }
        if (utagClickType) {
          udo.click_type = utagClickType;
        }
        if (utagGoalDescription) {
          udo.goal_description = utagGoalDescription;
        }
        udo.goal_description = analytics.globalfunctions.appendUniqueData(udo.goal_description, thisObj.attr('data-goaldescription'));
        if (udo.goal_description === '' || udo.goal_description === 'na') {
          delete udo.goal_description;
        }
        if (utagGoalName) {
          udo.goal_name = utagGoalName;
        }
        udo.goal_name = analytics.globalfunctions.appendUniqueData(udo.goal_name, thisObj.attr('data-goalname'));
        if (udo.goal_name === '' || udo.goal_name === 'na') {
          delete udo.goal_name;
        }
        if (utagGoalTimestamp) {
          udo.goal_timestamp = utagGoalTimestamp;
        }
        if (udo.goal_name || udo.goal_description) {
          udo.goal_timestamp = analytics.globalfunctions.appendUniqueData(udo.goal_timestamp, Date.now().toString());
          if (udo.goal_timestamp === '' || udo.goal_timestamp === 'na') {
            delete udo.goal_timestamp;
          }
        }
        if (utagJsllAppId) {
          udo.jsll_app_id = utagJsllAppId;
        }
        if (utagJsllBaseUrl) {
          udo.jsll_base_url = utagJsllBaseUrl;
        }
        if (utagJsllEnvironment) {
          udo.jsll_environment = utagJsllEnvironment;
        }
        if (utagLinkLocation) {
          udo.link_location = utagLinkLocation;
        }
        udo.link_location = analytics.globalfunctions.appendUniqueData(udo.link_location, analytics.globalfunctions.extractEncodedMetadata(linkAreaKey, thisObj));
        if (udo.link_location === '' || udo.link_location === 'na') {
          delete udo.link_location;
        }
        if (utagLinkedinConversionId) {
          udo.linkedIn_conversion_id = utagLinkedinConversionId;
        }
        if (utagLiveVideoDate) {
          udo.live_video_date = utagLiveVideoDate;
        }
        if (utagLocationCode) {
          udo.location_code = utagLocationCode;
        }
        if (utagMsAud) {
          udo.ms_aud = utagMsAud;
        }
        if (utagMsPlvl) {
          udo.ms_plvl = utagMsPlvl;
        }
        if (utagMsftAnid) {
          udo.msft_anid = utagMsftAnid;
        }
        if (utagMsftMuid) {
          udo.msft_muid = utagMsftMuid;
        }
        if (utagPId) {
          udo.p_id = utagPId;
        }
        if (utagPageCategory) {
          udo.page_category = utagPageCategory;
        }
        if (utagPageDescription) {
          udo.page_description = utagPageDescription;
        }
        if (utagPageFriendlyUrl) {
          udo.page_friendly_url = utagPageFriendlyUrl;
        }
        if (utagPageId) {
          udo.page_id = utagPageId;
        }
        if (utagPageLanguage) {
          udo.page_language = utagPageLanguage;
        }
        if (utagPageName) {
          udo.page_name = utagPageName;
        }
        if (utagPageNumber) {
          udo.page_number = utagPageNumber;
        }
        if (utagPagePath) {
          udo.page_path = utagPagePath;
        }
        if (utagPageSection) {
          udo.page_section = utagPageSection;
        }
        if (utagPageSubcategory) {
          udo.page_subcategory = utagPageSubcategory;
        }
        if (utagPageTemplateId) {
          udo.page_template_id = utagPageTemplateId;
        }
        if (utagPageTemplateName) {
          udo.page_template_name = utagPageTemplateName;
        }
        if (utagPageTitle) {
          udo.page_title = utagPageTitle;
        }
        if (utagPageType) {
          udo.page_type = utagPageType;
        }
        if (utagPartnerAuthtype) {
          udo.partner_authtype = utagPartnerAuthtype;
        }
        if (utagPartnerId) {
          udo.partner_id = utagPartnerId;
        }
        if (utagPartnerLevel) {
          udo.partner_level = utagPartnerLevel;
        }
        if (utagPartnerMpnId) {
          udo.partner_mpn_id = utagPartnerMpnId;
        }
        if (utagPartnerMpnLevel) {
          udo.partner_mpn_level = utagPartnerMpnLevel;
        }
        if (utagPartnerType) {
          udo.partner_type = utagPartnerType;
        }
        if (utagSearchKeyword) {
          udo.search_keyword = utagSearchKeyword;
        }
        if (utagSearchResults) {
          udo.search_results = utagSearchResults;
        }
        if (utagSearchTerm) {
          udo.search_term = utagSearchTerm;
        }
        if (utagSearchType) {
          udo.search_type = utagSearchType;
        }
        if (utagSecurityTabName) {
          udo.security_tab_name = utagSecurityTabName;
        }
        if (utagShareSocialNetwork) {
          udo.share_social_network = utagShareSocialNetwork;
        }
        if (utagShareType) {
          udo.share_type = utagShareType;
        }
        if (utagSiteCountryCode) {
          udo.site_country_code = utagSiteCountryCode;
        }
        if (utagSiteDisplayFormat) {
          udo.site_display_format = utagSiteDisplayFormat;
        }
        if (utagSiteEnvironment) {
          udo.site_environment = utagSiteEnvironment;
        }
        if (utagSiteLanguageCode) {
          udo.site_language_code = utagSiteLanguageCode;
        }
        if (utagSiteName) {
          udo.site_name = utagSiteName;
        }
        if (utagSitePlatform) {
          udo.site_platform = utagSitePlatform;
        }
        if (utagSiteRegion) {
          udo.site_region = utagSiteRegion;
        }
        if (utagSlideTitle) {
          udo.slide_title = utagSlideTitle;
        }
        if (utagTwitterEventName) {
          udo.twitter_event_name = utagTwitterEventName;
        }
        if (utagTxnId) {
          udo.txn_id = utagTxnId;
        }
        if (utagVideoOnPage) {
          udo.video_on_page = utagVideoOnPage;
        }
        if (udo.link_href == 'javascript:void(0);' || udo.link_href == 'javascript:void(0)') {
          if (udo.link_name === null || udo.link_name.match(/^ *$/) !== null) {
            udo.link_href = 'JavaScript: No Link Name';
          } else {
            udo.link_href = 'JavaScript: ' + udo.link_name;
          }
        }
        if (udo.link_name) {
          udo.link_name = analytics.globalfunctions.maskEmailAddress(udo.link_name).trim()
        }
        if (udo.link_href) {
          udo.link_href = analytics.globalfunctions.maskEmailAddress(udo.link_href)
        }
        if (udo.feedback_comments) {
          udo.feedback_comments = analytics.globalfunctions.maskEmailAddress(udo.feedback_comments)
        }
        if (udo.feedback_comments) {
          udo.feedback_comments = analytics.globalfunctions.maskProfanity(udo.feedback_comments)
        }
        if (udo.feedback_comments) {
          udo.feedback_comments = analytics.globalfunctions.maskPhoneNumber(udo.feedback_comments)
        }
        if (thisObj.attr('data-respondent-id')) {
          udo.comscore_resp_id = thisObj.attr('data-respondent-id')
        }
        var supportQuestion = thisObj.attr('data-bi-prtid');
        var supportModality = thisObj.attr('data-tracking-supportoption');
        if (supportModality) {
          udo.support_modality = supportModality;
        }
        if (supportQuestion) {
          udo.support_question_id = supportQuestion;
        }
        if (thisObj.parent().parent().prev().text() === "Recommended solutions") {
          udo.event_area = 'Recommended Solutions'
        } else if (thisObj.parent().parent().prev().text() === "Support options") {
          udo.event_area = 'Support Options';
        }
        if (thisObj.parents(".modal-body").length != 0) {
          udo.in_modal = "true";
        }
        if (skipRepeats && thisObj.attr(skipAttr) === 'y') {} else {
          udo.tag_process_time = Date.now() - tagStartTime;
          utag.link(udo);
          thisObj.attr(skipAttr, 'y');
        }
        return;
      },
      sendUtagMap: function (eventName, eventType, eventAction, eventAttr1, eventAttr2, eventAttr3, eventAttr4, eventAttr5, eventAttr6, eventOffer, eventTarget, eventTitle, linkName, linkArea, eventHashtag, viewHashtag, dataset, thisObj, skipRepeats) {
        var fieldArrayDelimiter = '|-|';
        var keyPairDelimiter = '|~|';
        var adjustedArray = '';
        if (eventName) {
          adjustedArray = adjustedArray + 'event_name' + keyPairDelimiter + eventName;
        }
        if (eventType) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_type' + keyPairDelimiter + eventType;
        }
        if (eventAction) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_action' + keyPairDelimiter + eventAction;
        }
        if (eventAttr1) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_attr1' + keyPairDelimiter + eventAttr1;
        }
        if (eventAttr2) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_attr2' + keyPairDelimiter + eventAttr2;
        }
        if (eventAttr3) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_attr3' + keyPairDelimiter + eventAttr3;
        }
        if (eventAttr4) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_attr4' + keyPairDelimiter + eventAttr4;
        }
        if (eventAttr5) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_attr5' + keyPairDelimiter + eventAttr5;
        }
        if (eventAttr6) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_attr6' + keyPairDelimiter + eventAttr6;
        }
        if (eventOffer) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_offer' + keyPairDelimiter + eventOffer;
        }
        if (eventTarget) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_target' + keyPairDelimiter + eventTarget;
        }
        if (eventTitle) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_title' + keyPairDelimiter + eventTitle;
        }
        if (linkName) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'link_name' + keyPairDelimiter + linkName;
        }
        if (linkArea) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_area' + keyPairDelimiter + linkArea;
        }
        if (eventHashtag) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'event_hashtag' + keyPairDelimiter + eventHashtag;
        }
        if (viewHashtag) {
          adjustedArray = adjustedArray + fieldArrayDelimiter + 'view_hashtag' + keyPairDelimiter + viewHashtag;
        }
        analytics.globalfunctions.sendAllUtag(adjustedArray, thisObj, dataset, skipRepeats);
      },
      sendUtag: function (eventName, eventType, eventAction, eventAttr1, eventAttr2, eventAttr3, eventAttr4, eventAttr5, eventAttr6, eventOffer, eventTarget, eventTitle, linkName, linkArea, eventHashtag, viewHashtag, dataObject) {
        dataObject = dataObject || {};
        try {
          if (viewHashtag === "undefined") {
            viewHashtag = '';
          }
          if (eventHashtag === "undefined") {
            eventHashtag = '';
          }
          var udo = jQuery.extend(dataObject, {
            'event_name': eventName,
            'event_type': eventType,
            'event_action': eventAction,
            'event_attr1': eventAttr1,
            'event_attr2': eventAttr2,
            'event_attr3': eventAttr3,
            'event_attr4': eventAttr4,
            'event_attr5': eventAttr5,
            'event_attr6': eventAttr6,
            'event_offer': eventOffer,
            'event_target': eventTarget,
            'event_title': eventTitle,
            'link_name': linkName,
            'event_area': (linkArea) ? linkArea : '',
            'event_hashtag': (eventHashtag) ? eventHashtag : '',
            'view_hashtag': (viewHashtag) ? viewHashtag : ''
          });
          utag.link(udo);
        } catch (e) {
          console.log(e);
          console.log('event_name', eventName, 'event_type', eventType, 'event_action', eventAction, 'event_attr1', eventAttr1, 'event_attr2', eventAttr2, 'event_attr3', eventAttr3, 'event_attr4', eventAttr4, 'event_attr5', eventAttr5, 'event_attr6', eventAttr6, 'event_offer', eventOffer, 'event_target', eventTarget, 'event_title', eventTitle, 'link_name', linkName, 'event_area', linkArea, 'event_hashtag', eventHashtag, 'view_hashtag', viewHashtag);
        }
        return;
      },
      appendUtagGEViewNoDupe: function (udo, eventName, eventType, eventAction, eventAttr1, eventAttr2, eventAttr3, eventAttr4, eventAttr5, eventAttr6, eventOffer, eventTarget, eventTitle, linkName, linkArea, eventHashtag, viewHashtag, dataObject) {
        var del = ',';
        try {
          if (viewHashtag === "undefined") {
            viewHashtag = '';
          }
          if (eventHashtag === "undefined") {
            eventHashtag = '';
          }
          udo.event_name = analytics.globalfunctions.appendUniqueData(udo.event_name, eventName);
          udo.event_type = analytics.globalfunctions.appendUniqueData(udo.event_type, eventType);
          udo.event_action = analytics.globalfunctions.appendUniqueData(udo.event_action, eventAction);
          udo.event_attr1 = analytics.globalfunctions.appendUniqueData(udo.event_attr1, eventAttr1);
          udo.event_attr2 = analytics.globalfunctions.appendUniqueData(udo.event_attr2, eventAttr2);
          udo.event_attr3 = analytics.globalfunctions.appendUniqueData(udo.event_attr3, eventAttr3);
          udo.event_attr4 = analytics.globalfunctions.appendUniqueData(udo.event_attr4, eventAttr4);
          udo.event_attr5 = analytics.globalfunctions.appendUniqueData(udo.event_attr5, eventAttr5);
          udo.event_attr6 = analytics.globalfunctions.appendUniqueData(udo.event_attr6, eventAttr6);
          udo.event_offer = analytics.globalfunctions.appendUniqueData(udo.event_offer, eventOffer);
          udo.event_target = analytics.globalfunctions.appendUniqueData(udo.event_target, eventTarget);
          udo.event_title = analytics.globalfunctions.appendUniqueData(udo.event_title, eventTitle);
          udo.link_name = analytics.globalfunctions.appendUniqueData(udo.link_name, linkName);
          udo.event_area = analytics.globalfunctions.appendUniqueData(udo.event_area, (linkArea) ? linkArea : '');
          udo.event_hashtag = analytics.globalfunctions.appendUniqueData(udo.event_hashtag, eventHashtag);
          udo.view_hashtag = analytics.globalfunctions.appendUniqueData(udo.view_hashtag, (viewHashtag) ? viewHashtag : '');
          if (udo.event_name === '' || udo.event_name === 'na') {
            delete udo.event_name;
          }
          if (udo.event_type === '' || udo.event_type === 'na') {
            delete udo.event_type;
          }
          if (udo.event_action === '' || udo.event_action === 'na') {
            delete udo.event_action;
          }
          if (udo.event_attr1 === '' || udo.event_attr1 === 'na') {
            delete udo.event_attr1;
          }
          if (udo.event_attr2 === '' || udo.event_attr2 === 'na') {
            delete udo.event_attr2;
          }
          if (udo.event_attr3 === '' || udo.event_attr3 === 'na') {
            delete udo.event_attr3;
          }
          if (udo.event_attr4 === '' || udo.event_attr4 === 'na') {
            delete udo.event_attr4;
          }
          if (udo.event_attr5 === '' || udo.event_attr5 === 'na') {
            delete udo.event_attr5;
          }
          if (udo.event_attr6 === '' || udo.event_attr6 === 'na') {
            delete udo.event_attr6;
          }
          if (udo.event_offer === '' || udo.event_offer === 'na') {
            delete udo.event_offer;
          }
          if (udo.event_target === '' || udo.event_target === 'na') {
            delete udo.event_target;
          }
          if (udo.event_title === '' || udo.event_title === 'na') {
            delete udo.event_title;
          }
          if (udo.link_name === '' || udo.link_name === 'na') {
            delete udo.link_name;
          }
          if (udo.event_area === '' || udo.event_area === 'na') {
            delete udo.event_area;
          }
          if (udo.event_hashtag === '' || udo.event_hashtag === 'na') {
            delete udo.event_hashtag;
          }
          if (udo.view_hashtag === '' || udo.view_hashtag === 'na') {
            delete udo.view_hashtag;
          }
        } catch (e) {
          console.log(e);
          console.log('event_name', eventName, 'event_type', eventType, 'event_action', eventAction, 'event_attr1', eventAttr1, 'event_attr2', eventAttr2, 'event_attr3', eventAttr3, 'event_attr4', eventAttr4, 'event_attr5', eventAttr5, 'event_attr6', eventAttr6, 'event_offer', eventOffer, 'event_target', eventTarget, 'event_title', eventTitle, 'link_name', linkName, 'event_area', linkArea, 'event_hashtag', eventHashtag, 'view_hashtag', viewHashtag);
        }
        return;
      },
      appendTagGEViewNoDupe: function (action, content, awaBehavior, awaName, awaId, awaType, awaSource, awaScn, awaScnstp, awaStpnum, awaDlmn, awaFileName, awaFileNameType, awaArea, awaSlot, awaSrchlinkpos, awaSrchq, awaChtmn, awaChtId) {
        var del = ',';
        try {
          action.actionType = analytics.globalfunctions.appendUniqueData(action.actionType, 'CL');
          content.contentName = analytics.globalfunctions.appendUniqueData(content.contentName, awaName);
          content.id = analytics.globalfunctions.appendUniqueData(content.id, awaId);
          content.type = analytics.globalfunctions.appendUniqueData(content.type, awaType);
          content.behavior = analytics.globalfunctions.appendUniqueData(content.behavior, awaBehavior);
          content.source = analytics.globalfunctions.appendUniqueData(content.source, awaSource);
          content.scnstp = analytics.globalfunctions.appendUniqueData(content.scnstp, awaScnstp);
          content.stpnum = analytics.globalfunctions.appendUniqueData(content.stpnum, awaStpnum);
          content.scn = analytics.globalfunctions.appendUniqueData(content.scn, awaScn);
          content.dlnm = analytics.globalfunctions.appendUniqueData(content.dlnm, awaDlmn);
          content.dlid = analytics.globalfunctions.appendUniqueData(content.dlid, awaFileName);
          content.dltype = analytics.globalfunctions.appendUniqueData(content.dltype, awaFileNameType);
          content.area = analytics.globalfunctions.appendUniqueData(content.area, awaArea);
          content.srchlinkpos = analytics.globalfunctions.appendUniqueData(content.srchlinkpos, awaSrchlinkpos);
          content.srchq = analytics.globalfunctions.appendUniqueData(content.srchq, awaSrchq);
          content.chtnm = analytics.globalfunctions.appendUniqueData(content.chtnm, awaChtmn);
          content.chtid = analytics.globalfunctions.appendUniqueData(content.chtid, awaChtId);
          if (action.actionType === '' || action.actionType === 'na') {
            delete action.actionType;
          }
          if (content.contentName === '' || content.contentName === 'na') {
            delete content.contentName;
          }
          if (content.id === '' || content.id === 'na') {
            delete content.id;
          }
          if (content.type === '' || content.type === 'na') {
            delete content.type;
          }
          if (content.behavior === '' || content.behavior === 'na') {
            delete content.behavior;
          }
          if (content.source === '' || content.source === 'na') {
            delete content.source;
          }
          if (content.scnstp === '' || content.scnstp === 'na') {
            delete content.scnstp;
          }
          if (content.stpnum === '' || content.stpnum === 'na') {
            delete content.stpnum;
          }
          if (content.scn === '' || content.scn === 'na') {
            delete content.scn;
          }
          if (content.dlnm === '' || content.dlnm === 'na') {
            delete content.dlnm;
          }
          if (content.dlid === '' || content.dlid === 'na') {
            delete content.dlid;
          }
          if (content.dltype === '' || content.dltype === 'na') {
            delete content.dltype;
          }
          if (content.area === '' || content.area === 'na') {
            delete content.area;
          }
          if (content.srchlinkpos === '' || content.srchlinkpos === 'na') {
            delete content.srchlinkpos;
          }
          if (content.srchq === '' || content.srchq === 'na') {
            delete content.srchq;
          }
          if (content.chtnm === '' || content.chtnm === 'na') {
            delete content.chtnm;
          }
          if (content.chtid === '' || content.chtid === 'na') {
            delete content.chtid;
          }
        } catch (e) {
          console.log(e);
        }
        return;
      },
      appendUtagGEView: function (udo, eventName, eventType, eventAction, eventAttr1, eventAttr2, eventAttr3, eventAttr4, eventAttr5, eventAttr6, eventOffer, eventTarget, eventTitle, linkName, linkArea, eventHashtag, viewHashtag, dataObject) {
        var del = ',';
        try {
          if (viewHashtag === "undefined") {
            viewHashtag = '';
          }
          if (eventHashtag === "undefined") {
            eventHashtag = '';
          }
          if (udo.event_name) {
            udo.event_name = udo.event_name + del + eventName;
          } else {
            udo.event_name = eventName;
          }
          if (udo.event_type) {
            udo.event_type = udo.event_type + del + eventType;
          } else {
            udo.event_type = eventType;
          }
          if (udo.event_action) {
            udo.event_action = udo.event_action + del + eventAction;
          } else {
            udo.event_action = eventAction;
          }
          if (udo.event_attr1) {
            udo.event_attr1 = udo.event_attr1 + del + eventAttr1;
          } else {
            udo.event_attr1 = eventAttr1;
          }
          if (udo.event_attr2) {
            udo.event_attr2 = udo.event_attr2 + del + eventAttr2;
          } else {
            udo.event_attr2 = eventAttr2;
          }
          if (udo.event_attr3) {
            udo.event_attr3 = udo.event_attr3 + del + eventAttr3;
          } else {
            udo.event_attr3 = eventAttr3;
          }
          if (udo.event_attr4) {
            udo.event_attr4 = udo.event_attr4 + del + eventAttr4;
          } else {
            udo.event_attr4 = eventAttr4;
          }
          if (udo.event_attr5) {
            udo.event_attr5 = udo.event_attr5 + del + eventAttr5;
          } else {
            udo.event_attr5 = eventAttr5;
          }
          if (udo.event_attr6) {
            udo.event_attr6 = udo.event_attr6 + del + eventAttr6;
          } else {
            udo.event_attr6 = eventAttr6;
          }
          if (udo.event_offer) {
            udo.event_offer = udo.event_offer + del + eventOffer;
          } else {
            udo.event_offer = eventOffer;
          }
          if (udo.event_target) {
            udo.event_target = udo.event_target + del + eventTarget;
          } else {
            udo.event_target = eventTarget;
          }
          if (udo.event_title) {
            udo.event_title = udo.event_title + del + eventTitle;
          } else {
            udo.event_title = eventTitle;
          }
          if (udo.link_name) {
            udo.link_name = udo.link_name + del + linkName;
          } else {
            udo.link_name = linkName;
          }
          if (udo.event_area) {
            udo.event_area = udo.event_area + del + (linkArea) ? linkArea : '';
          } else {
            udo.event_area = (linkArea) ? linkArea : '';
          }
          if (udo.event_hashtag) {
            udo.event_hashtag = udo.event_hashtag + del + (eventHashtag) ? eventHashtag : '';
          } else {
            udo.event_hashtag = (eventHashtag) ? eventHashtag : '';
          }
          if (udo.view_hashtag) {
            udo.view_hashtag = udo.view_hashtag + del + (viewHashtag) ? viewHashtag : '';
          } else {
            udo.view_hashtag = (viewHashtag) ? viewHashtag : '';
          }
        } catch (e) {
          console.log(e);
          console.log('event_name', eventName, 'event_type', eventType, 'event_action', eventAction, 'event_attr1', eventAttr1, 'event_attr2', eventAttr2, 'event_attr3', eventAttr3, 'event_attr4', eventAttr4, 'event_attr5', eventAttr5, 'event_attr6', eventAttr6, 'event_offer', eventOffer, 'event_target', eventTarget, 'event_title', eventTitle, 'link_name', linkName, 'event_area', linkArea, 'event_hashtag', eventHashtag, 'view_hashtag', viewHashtag);
        }
        return;
      },
      appendTagGEView: function (action, content, awaBehavior, awaName, awaId, awaType, awaSource, awaScn, awaScnstp, awaStpnum, awaDlmn, awaFileName, awaFileNameType, awaArea, awaSlot, awaSrchlinkpos, awaSrchq, awaChtmn, awaChtId) {
        var del = ',';
        try {
          if (action.actionType) {
            action.actionType = 'CL' + del + 'CL';
          } else {
            action.actionType = 'CL';
          }
          if (content.contentName) {
            content.contentName = awaName + del + awaName;
          } else {
            content.contentName = awaName;
          }
          if (content.id) {
            content.id = awaId + del + awaId;
          } else {
            content.id = awaId;
          }
          if (content.type) {
            content.type = awaType + del + awaType;
          } else {
            content.type = awaType;
          }
          if (content.behavior) {
            content.behavior = content.behavior + del + awaBehavior;
          } else {
            content.behavior = awaBehavior;
          }
          if (content.source) {
            content.source = content.source + del + awaSource;
          } else {
            content.source = awaSource;
          }
          if (content.scnstp) {
            content.scnstp = content.scnstp + del + awaScnstp;
          } else {
            content.scnstp = awaScnstp;
          }
          if (content.stpnum) {
            content.stpnum = content.stpnum + del + awaStpnum;
          } else {
            content.stpnum = awaStpnum;
          }
          if (content.scn) {
            content.scn = content.scn + del + awaScn;
          } else {
            content.scn = awaScn;
          }
          if (content.dlnm) {
            content.dlnm = content.dlnm + del + awaDlmn;
          } else {
            content.dlnm = awaDlmn;
          }
          if (content.dlid) {
            content.dlid = content.dlid + del + awaFileName;
          } else {
            content.dlid = awaFileName;
          }
          if (content.dltype) {
            content.dltype = content.dltype + del + awaFileNameType;
          } else {
            content.dltype = awaFileNameType;
          }
          if (content.area) {
            content.area = content.area + del + awaArea;
          } else {
            content.area = awaArea;
          }
          if (content.srchlinkpos) {
            content.srchlinkpos = content.srchlinkpos + del + awaSrchlinkpos;
          } else {
            content.srchlinkpos = awaSrchlinkpos;
          }
          if (content.srchq) {
            content.srchq = content.srchq + del + awaSrchq;
          } else {
            content.srchq = awaSrchq;
          }
          if (content.chtnm) {
            content.chtnm = content.chtnm + del + awaChtmn;
          } else {
            content.chtnm = awaChtmn;
          }
          if (content.chtid) {
            content.chtid = content.chtid + del + awaChtId;
          } else {
            content.chtid = awaChtId;
          }
        } catch (e) {
          console.log(e);
        }
        return;
      },
      setUp: function () {
        try {
          setTimeout(function () {
            data.firstPlay = !0;
            var iframe = document.querySelector('iframe.cboxIframe');
            if (iframe) {
              var player = new Vimeo.Player(iframe);
              player.on('play', function (playObject) {
                data.videoPercent = Math.round(playObject.percent * 100);
                var seconds = Math.round(playObject.seconds);
                if (playObject.seconds < 1) {
                  if (data.firstPlay) {
                    analytics.globalfunctions.playTag(awa.behavior.VIDEOSTART, seconds, data.videoPercent);
                    data.firstPlay = !1;
                  } else {
                    analytics.globalfunctions.playTag(awa.behavior.VIDEOREPLAY, seconds, data.videoPercent);
                  }
                } else {
                  if (data.firstPlay) {
                    analytics.globalfunctions.playTag(awa.behavior.VIDEOSTART, seconds, data.videoPercent);
                    data.firstPlay = !1;
                  } else {
                    analytics.globalfunctions.playTag(awa.behavior.VIDEOCONTINUE, seconds, data.videoPercent);
                  }
                }
              });
              player.on('cuepoint', function (cueObject) {
                analytics.globalfunctions.playTag(awa.behavior.VIDEOCHECKPOINT, cueObject.time, cueObject.data.percent);
              });
              player.on('pause', function (pauseObject) {
                data.videoPercent = Math.round(pauseObject.percent * 100);
                if (data.videoPercent < 100) {
                  var seconds = Math.round(pauseObject.seconds);
                  analytics.globalfunctions.playTag(awa.behavior.VIDEOPAUSE, seconds, data.videoPercent);
                }
              });
              player.on('ended', function (endObject) {
                var seconds = Math.round(endObject.seconds);
                analytics.globalfunctions.playTag(awa.behavior.VIDEOCOMPLETE, seconds, 100);
              });
              player.on('seeked', function (seekObject) {
                data.videoPercent = Math.round(seekObject.percent * 100);
                var seconds = Math.round(seekObject.seconds);
                analytics.globalfunctions.playTag(awa.behavior.VIDEOJUMP, seconds, data.videoPercent);
              });
              player.on('volumechange', function (volumeObject) {
                if (volumeObject.volume === 0) {
                  data.volume = volumeObject.volume;
                  if (data.flag === 0) {
                    data.flag = 1;
                    player.getCurrentTime().then(function (seconds) {
                      data.videoPercent = Math.round(seconds / data.videoDuration * 100);
                      seconds = Math.round(seconds);
                      analytics.globalfunctions.playTag(awa.behavior.VIDEOMUTE, seconds, data.videoPercent);
                    }).catch(function (error) {
                      analytics.globalfunctions.errorTag('getting video seconds');
                    });
                  }
                } else {
                  if (data.volume === 0) {
                    data.flag = 0;
                    data.volume = volumeObject.volume;
                    player.getCurrentTime().then(function (seconds) {
                      data.videoPercent = Math.round(seconds / data.videoDuration * 100);
                      seconds = Math.round(seconds);
                      analytics.globalfunctions.playTag(awa.behavior.VIDEOUNMUTE, seconds, data.videoPercent);
                    }).catch(function (error) {
                      analytics.globalfunctions.errorTag('getting video seconds');
                    });
                  }
                }
              });
              player.getVideoTitle().then(function (title) {
                data.videoTitle = title;
              }).catch(function (error) {
                analytics.globalfunctions.errorTag('getting video title');
              });
              player.getVideoId().then(function (id) {
                data.videoId = id;
              }).catch(function (error) {
                analytics.globalfunctions.errorTag('gettting video id');
              });
              player.getDuration().then(function (duration) {
                data.videoDuration = Math.trunc(duration);
                for (var i = 1; i < 11; i++) {
                  var j = Math.trunc(data.videoDuration * (i / 10) - 1);
                  player.addCuePoint(j, {
                    percent: i * 10
                  }).then(function (id) {}).catch(function (error) {
                    switch (error.name) {
                      case 'UnsupportedError':
                        analytics.globalfunctions.errorTag('cue point unsupported error');
                        break;
                      case 'RangeError':
                        analytics.globalfunctions.errorTag('cue point range error');
                        break;
                      default:
                        analytics.globalfunctions.errorTag('cue point error');
                        break;
                    }
                  });
                }
              });
            }
          }, 1000);
        } catch (e) {}
        return;
      },
      tagSocial: function () {
        try {
          jQuery('a.fb').each(function (i, e) {
            data.awaSocialIndex = i;
            var $this = jQuery(this),
              str = $this.attr('title'),
              awaName = (str.indexOf('Follow') > -1) ? str.replace(/Follow us on /i, '').toLowerCase() : str.replace(/Share on /i, '').toLowerCase(),
              msCmptyp = (str.indexOf('Follow') > -1) ? 'social follow' : 'social share',
              awaBehavior = (str.indexOf('Follow') > -1) ? '121' : '120',
              msTitle = $this.attr('aria-label');
            awaUtil.setAWAAttributes($this, {
              'area': 'body-socialbar',
              'type': 'button',
              'bhvr': awaBehavior,
              'socchn': awaName,
            });
          });
        } catch (e) {}
        return;
      },
      textLink: function ($this) {
        try {
          var strLinkText = $this.attr('data-tracking-link-name');
          if (!strLinkText) {
            var reg = /<[^>]*>([a-zA-Z0-9\-\\ /_=+@#$%^&*().,!?:;"']*)/g,
              str = ($this.innerHTML.trim()) ? $this.innerHTML.trim() : '';
            data.link_text = str.replace(reg, '$1');
          } else {
            data.link_text = strLinkText;
          }
        } catch (e) {

        }

        return;
      },
      /**
       * [utcArea description]
       * @param  {[type]} $this [description]
       * @return {[type]}       [description]
       */
      utcArea: function ($this) {

        try {
          var utcName = ($this.parents('div[data-tracking-bladename*="Icon"]').data('trackingBladename')) ? $this.parents('div[data-tracking-bladename*="Icon"]').data('trackingBladename') : 'none-detected',
            utcd = '',
            grid3 = '',
            grid3a = '',
            grid33array = [],
            isProductName = false,
            isFamilyName = false;
          if (utcName === '2-Icon-Blade---4-col') {
            var utcb = window.location.href.split('/'),
              utcc = utcb.length;
            utcName = utcb[utcc - 1] + '-header-section';
          }
          if (utcName === 'none-detected') {
            utcName = ($this.parents('div.universal-footer-desktop').attr('class')) ? 'universal-footer' : 'none-detected';
          }
          if (utcName === 'none-detected') {
            utcName = ($this.parents('div.universal-footer-mobile').attr('class')) ? 'universal-footer' : 'none-detected';
          }
          if (utcName === 'none-detected') {
            utcName = ($this.parents('div.mobile-header').attr('class')) ? 'UTC-header' : 'none-detected';
          }
          if (utcName === 'none-detected') {
            utcName = ($this.parents('div.navbar-header-wrapper').attr('class')) ? 'UTC-header' : 'none-detected';
            if (utcName === 'UTC-header') {
              isProductName = $this.parents('ul.product-names').hasClass('product-names');
              isFamilyName = $this.parents('ul.product-families').hasClass('product-families');
              if (isProductName) {
                utcName = 'UTC-header-MS-Products';
              }
              isProductName = false;
              if (isFamilyName) {
                utcName = 'UTC-header-MS-Product-Families';
              }
              isFamilyName = false;
            }
          }

          if (utcName === 'none-detected') {
            utcName = ($this.parents('div.footer-bottom').attr('class')) ? 'universal-footer-bottom' : 'none-detected';
          }
          if (utcName === 'none-detected') {
            utcd = jQuery($this.parents('div[data-tracking-bladetype="3ColumnGrid"]'));
            utcName = (utcd.data('trackingBladetype')) ? '3ColumnGrid-links' : 'none-detected';
            if (utcName === '3ColumnGrid-links') {
              grid3 = jQuery(utcd).parent();
              grid3a = jQuery(grid3).prev().data('trackingBladename');
              grid3array = grid3a.split('-');
              utcName = grid3array[0] + '-' + utcName;
            }
          }
          if (utcName === 'none-detected') {
            utcName = ($this.parents('div[data-tracking-bladetype="LargeHero"]').data('trackingBladename')) ? $this.parents('div[data-tracking-bladetype="LargeHero"]').data('trackingBladename') : 'none-detected';
          }
          if (utcName === 'none-detected') {
            utcName = ($this.parents('div[data-tracking-bladename*="Featured-Content-Panel"]').data('trackingBladename')) ? $this.parents('div[data-tracking-bladename*="Featured-Content-Panel"]').data('trackingBladename') : 'none-detected';
          }
          data.utcName = utcName;
        } catch (e) {

        }

        return;
      }
    };
  } catch (e) {}
};
if (!utag_condload) {
  try {
    try {
      /* looks like there is a bug that lowercases all the QP and the Data.
      window.utag_cfg_ovrd = {
        lowerqp : true //lowercase query string parameters
      }; 
      This code looks through the Query Parameters in use and takes the key and normalizes it. This only affects itesm that use the UTAG, so normal WEDCS etc still see the original value.
      */
      for (var key in b) {
        if (key.indexOf('qp.') === 0) {
          b[key.toLowerCase()] = b[key];
        }
      }
      /*
      This code sets a value for heatmap.me disabiling the ability for users to press the alt-shift-h keys and get a menu to login and request access to the heatmap. To access heatmap the bookmarklet must be used
      */
      heatmap_ext = {
        altShiftH: false
      };

    } catch (e) {
      utag.DB(e)
    }
  } catch (e) {}
};
if (!utag_condload) {
  try {
    try {
      /* Checking if URL is part of the eventcore.com domain to determine if EU cookie compliance needs to be checked for initial JSLL configuration. If the user has not acknowledge cookie use, based on the existence of the cookie named "nonessentialcookie", then Tealium is 
      not fully loaded on the page (only base utag.js, pre-loader, and DOM Ready extensions are loaded). An event handler is set to look for a 
      mouse down event on the page, excluding the banner displayed prior to cookie acknowledgment by the user.
      */
      if (window.location.hostname.indexOf("eventcore.com") !== -1 || window.location.hostname.indexOf("register.inspire") !== -1) {
        window.analytics = window.analytics || {};
        window.analytics.data = window.analytics.data || {};
        window.analytics.utilities = window.analytics.utilities || {};
        window.analytics.awaUtilities = window.analytics.awaUtilities || {};
        var util = window.analytics.utilities,
          awaUtil = window.analytics.awaUtilities,
          data = window.analytics.data;
        data.EUCookieAck = false;
        if (document.cookie.indexOf("MSCC=") === -1) {
          window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
          window.utag_cfg_ovrd.nocookie = true;
          window.utag_cfg_ovrd.noload = true;

          if (typeof awa !== 'object') {
            (function (a, b, c, d) {
              a = 'https://az725175.vo.msecnd.net/scripts/jsll-4.js';
              b = document;
              c = 'script';
              d = b.createElement(c);
              d.src = a;
              d.type = 'text/java' + c;
              d.async = true;
              a = b.getElementsByTagName(c)[0];
              a.parentNode.insertBefore(d, a);
            })();
          }
        }
        var topicObserver1 = util.propertyWatcher.create(function () {
          var isCookie = (document.cookie.indexOf("MSCC=") === -1) ? false : true;
          return isCookie;
        });
        //react to changes in observers
        topicObserver1.change = function (oldValue, newValue) {
          if (newValue !== '' && newValue !== 'none' && oldValue !== undefined) {
            if (data.EUCookieAck === false) {
              data.EUCookieAck = true;
              utag = void(0);
              utag_cfg_ovrd = void(0);
              (function (a, b, c, d) {
                a = '//tags.tiqcdn.com/utag/msft/mpn/prod/utag.js';
                b = document;
                c = 'script';
                d = b.createElement(c);
                d.src = a;
                d.type = 'text/java' + c;
                d.async = true;
                a = b.getElementsByTagName(c)[0];
                a.parentNode.insertBefore(d, a);
              })();
            }
          }
        };
      }
    } catch (e) {
      utag.DB(e)
    }
  } catch (e) {}
};
if (!utag_condload) {
  try {
    try {
      initAwaWhenEUCookieAckPending = function () {
        if (typeof awa === 'object') {
          if (!awa.isInitialized) {
            var config = {
              coreData: {
                appId: "partner"
              }
            };
            awa.init(config);
          }
        }
      };

      if (window.location.hostname.indexOf("eventcore.com") !== -1 || window.location.hostname.indexOf("register.inspire") !== -1) {
        if (document.cookie.indexOf("MSCC=") === -1) {
          window.analytics.utilities.loadScriptCallback('https://az725175.vo.msecnd.net/scripts/jsll-4.js', initAwaWhenEUCookieAckPending);
        }
      }
    } catch (e) {
      utag.DB(e)
    }
  } catch (e) {}
};
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id: "msft.mpn",
    o: {},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q: [],
      sendq: {
        "pending": 0
      },
      run_ready_q: function () {
        for (var i = 0; i < utag.loader.ready_q.length; i++) {
          utag.DB("READY_Q:" + i);
          try {
            utag.loader.ready_q[i]()
          } catch (e) {
            utag.DB(e)
          };
        }
      },
      lh: function (a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function (a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if (utag.udoname && utag.udoname.indexOf(".") < 0) {
            utag.ut.merge(utag.data, window[utag.udoname], 0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if (utag.cfg.load_rules_at_wait) {
            utag.handler.LR(utag.data);
          }
        } catch (e) {
          utag.DB(e)
        };

        d = 0;
        g = [];
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
          b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4) {
            //LOAD the bundled tag set to wait here
            this.f[b.id] = 0;
            utag.loader.LOAD(b.id)
          } else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
            d++;
          } else {
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id] = 1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

        if (d == 0) {
          utag.loader.END();
        }
      },
      AS: function (a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id] = 0;
        if (a.load == 2) {
          utag.DB("Attach sync:" + a.src);
          a.uid = a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if (typeof a.cb != 'undefined') a.cb();
        } else if (a.load == 1 || a.load == 3) {
          if (b.createElement) {
            c = 'utag_msft.mpn_' + a.id;
            if (!b.getElementById(c)) {
              d = {
                src: a.src,
                id: c,
                uid: a.id,
                loc: a.loc
              }
              if (a.load == 3) {
                d.type = "iframe"
              };
              if (typeof a.cb != 'undefined') d.cb = a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function (a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function (a, b, c, d, f) {
        try {
          if (typeof utag.data['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0
                  }
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                }
              }
            }
          }
        } catch (e) {
          utag.DB(e)
        }
      },
      RDdom: function (o) {
        var d = document || {},
          l = location || {};
        o["dom.referrer"] = eval("document." + "referrer");
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
      },
      RDcp: function (o, b, c, d) {
        b = b || utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
        // temporary alias variables
        o["_t_visitor_id"] = o["cp.utag_main_v_id"];
        o["_t_session_id"] = o["cp.utag_main_ses_id"];
      },
      RDqp: function (o, a, b, c) {
        a = location.search + (location.hash + '').replace("#", "&");
        if (utag.cfg.lowerqp) {
          a = a.toLowerCase()
        };
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if (c.length > 1) {
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function (o, a, b, h) {
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try {
            h = a[b].name || a[b].getAttribute("property") || "";
          } catch (e) {
            h = "";
            utag.DB(e)
          };
          if (utag.cfg.lowermeta) {
            h = h.toLowerCase()
          };
          if (h != "") {
            o["meta." + h] = a[b].content
          }
        }
      },
      RDva: function (o) {
        // Read visitor attributes in local storage
        var readAttr = function (o, l) {
          var a = "",
            b;
          a = localStorage.getItem(l);
          if (!a || a == "{}") return;
          b = utag.ut.flatten({
            va: JSON.parse(a)
          });
          utag.ut.merge(o, b, 1);
        }
        try {
          readAttr(o, "tealium_va");
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
        } catch (e) {
          utag.DB(e)
        }
      },
      RDut: function (o, a) {
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        o["ut.event"] = a || "view";
        try {
          o["ut.account"] = utag.cfg.utid.split("/")[0];
          o["ut.profile"] = utag.cfg.utid.split("/")[1];
          o["ut.env"] = utag.cfg.path.split("/")[6];
        } catch (e) {
          utag.DB(e)
        }
      },
      RD: function (o, a, b, c, d) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        // only update cookie once per page
        if (!utag.loader.rd_flag) {
          a = (new Date()).getTime();
          b = utag.loader.RC();
          c = a + parseInt(utag.cfg.session_timeout);
          d = a;

          if (!b.utag_main) {
            b.utag_main = {};
          } else if (b.utag_main.ses_id && typeof b.utag_main._st != "undefined" && parseInt(b.utag_main._st) < a) {
            delete b.utag_main.ses_id;
          }

          if (!b.utag_main.v_id) {
            b.utag_main.v_id = utag.ut.vi(a);
          }

          if (!b.utag_main.ses_id) {
            b.utag_main.ses_id = d + '';
            b.utag_main._ss = b.utag_main._pn = 1;
            b.utag_main._sn = 1 + parseInt(b.utag_main._sn || 0);
          } else {
            d = b.utag_main.ses_id;
            b.utag_main._ss = 0;
            b.utag_main._pn = 1 + parseInt(b.utag_main._pn);
            b.utag_main._sn = parseInt(b.utag_main._sn);
          }

          if (isNaN(b.utag_main._sn) || b.utag_main._sn < 1) {
            b.utag_main._sn = b.utag_main._pn = 1
          }

          b.utag_main._st = c + '';

          utag.loader.SC("utag_main", {
            "v_id": b.utag_main.v_id,
            "_sn": b.utag_main._sn,
            "_ss": b.utag_main._ss,
            "_pn": b.utag_main._pn + ";exp-session",
            "_st": c,
            "ses_id": d + ";exp-session"
          });
        }

        utag.loader.rd_flag = 1;

        this.RDqp(o);
        this.RDmeta(o);
        this.RDcp(o, b);
        this.RDdom(o);
        this.RDut(o);
        this.RDva(o);
      },
      RC: function (a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck != "undefined") {
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try {
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                } catch (er) {
                  utag.DB(er)
                };
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)) {
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function (a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a == "utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function (a, b, c, d) {
        if (!utag.loader.cfg) {
          return
        }
        if (this.ol == 0) {
          if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
            this.f[a] = 1;
            delete utag.loader.bq[a];
          }
          for (b in utag.loader.GV(utag.loader.bq)) {
            if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
              utag.loader.bk[a] = 1;
              utag.DB("blocked: " + a);
            }
            utag.DB("blocking: " + b);
            return;
          }
          utag.loader.INIT();
          return;
        }
        utag.DB('utag.loader.LOAD:' + a);
        if (this.f[a] == 0) {
          this.f[a] = 1;
          if (utag.cfg.noview != true) {
            if (utag.loader.cfg[a].send) {
              utag.DB("SENDING: " + a);
              try {
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: " + a);
                  while (d = utag.loader.sendq[a].shift()) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view', utag.handler.C(utag.data));
                }
                utag.rpt['s_' + a] = 0;
              } catch (e) {
                utag.DB(e);
                utag.rpt['s_' + a] = 1;
              }
            }
          }
          if (utag.loader.rf == 0) return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
          utag.loader.END();
        }
      },
      EV: function (a, b, c, d) {
        if (b == "ready") {
          if (!utag.data) {
            try {
              utag.cl = {
                '_all_': 1
              };
              utag.loader.initdata();
              utag.loader.RD(utag.data);
            } catch (e) {
              utag.DB(e)
            };
          }
          if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;
            if (utag.loader.ready_q.length <= 1) {
              if (document.addEventListener) {
                RH = function () {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function () {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function (b, c, d, e, v, w) {
        if (this.ended) {
          return
        };
        this.ended = 1;
        utag.DB("loader.END");
        b = utag.data;
        if (utag.handler.base && utag.handler.base != '*') {
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        } else if (utag.handler.base == '*') {
          utag.ut.merge(utag.handler.df, b, 1);
        }
        utag.rpt['r_0'] = "t";
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
        }
        utag.rpt.ts['s'] = new Date();
        v = ".tiqcdn.com";
        w = utag.cfg.path.indexOf(v);
        if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({
          src: utag.cfg.path.substring(0, w) + v + "/ut" + "ag/tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
          id: "tiqapp"
        })
        if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
        utag.handler.INIT();
      }
    },
    DB: function (a, b) {
      if (utag.cfg.utagdb === false) {
        return;
      } else if (typeof utag.cfg.utagdb == "undefined") {
        utag.db_log = [];
        b = document.cookie + '';
        utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
      }
      if (utag.cfg.utagdb === true) {
        var t;
        if (utag.ut.typeOf(a) == "object") {
          t = utag.handler.C(a)
        } else {
          t = a
        }
        utag.db_log.push(t);
        try {
          console.log(t)
        } catch (e) {}
      }
    },
    RP: function (a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function (a, c, d) {
      return this.track({
        event: 'view',
        data: a,
        cfg: {
          cb: c,
          uids: d
        }
      })
    },
    link: function (a, c, d) {
      return this.track({
        event: 'link',
        data: a,
        cfg: {
          cb: c,
          uids: d
        }
      })
    },
    track: function (a, b, c, d) {
      if (typeof a == "string") a = {
        event: a,
        data: b,
        cfg: {
          cb: c
        }
      };
      for (d in utag.loader.GV(utag.o)) {
        try {
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
        } catch (e) {
          utag.DB(e)
        };
      }
      if (a.cfg && a.cfg.cb) try {
        a.cfg.cb()
      } catch (e) {
        utag.DB(e)
      };
      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function (a, b, c) {
        utag.DB('utag.handler.INIT');
        if (utag.initcatch) {
          utag.initcatch = 0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
      },
      test: function () {
        return 1
      },
      LR: function (b) {
        utag.DB("Load Rules");
        for (var d in utag.loader.GV(utag.cond)) {
          utag.cond[d] = false;
        }
        utag.DB(utag.data);
        utag.loader.loadrules();
        utag.DB(utag.cond);
        utag.loader.initcfg();
        utag.loader.OU();
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
        }
      },
      RE: function (a, b, c, d, e, f, g) {
        if (c != "alr" && !this.cfg_extend) {
          return 0;
        }
        utag.DB("RE: " + c);
        if (c == "alr") utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if (typeof this.extend != "undefined") {
          g = 0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              e = 0;
              if (typeof this.cfg_extend != "undefined") {
                f = this.cfg_extend[d];
                if (typeof f.count == "undefined") f.count = 0;
                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                  e = 1
                } else {
                  if (f[c] == 1) {
                    g = 1
                  };
                  f.count++
                }
              }
              if (e != 1) {
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
              utag.ut.error({
                e: er.message,
                s: utag.cfg.path + 'utag.js',
                l: d,
                t: 'ge'
              });
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function (a, b, c, d, e, f) {
        utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
        b = b || {};
        utag.DB(b);
        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }
        utag.cfg.noview = false;
        utag.ut.merge(b, this.df, 0);
        utag.loader.RDqp(b);
        utag.loader.RDcp(b);
        utag.loader.RDdom(b);
        utag.loader.RDmeta(b);
        utag.loader.RDut(b, a);
        utag.loader.RDva(b);

        function sendTag(a, b, d) {
          try {
            if (typeof utag.sender[d] != "undefined") {
              utag.DB("SENDING: " + d);
              utag.sender[d].send(a, utag.handler.C(b));
              utag.rpt['s_' + d] = 0;
            } else if (utag.loader.cfg[d].load != 2 && utag.loader.cfg[d].s2s != 1) {
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({
                "event": a,
                "data": utag.handler.C(b)
              });
              utag.loader.sendq.pending++;
              utag.loader.AS({
                id: d,
                load: 1
              });
            }
          } catch (e) {
            utag.DB(e)
          }
        }
        if (c && c.uids) {
          this.RE(a, b, "alr");
          for (f = 0; f < c.uids.length; f++) {
            d = c.uids[f];
            sendTag(a, b, d);
          }
        } else if (utag.cfg.load_rules_ajax) {
          this.RE(a, b, "blr");
          utag.ut.merge(utag.data, b, 1);
          this.LR(b);
          this.RE(a, b, "alr");
          for (f = 0; f < utag.loader.cfgsort.length; f++) {
            d = utag.loader.cfgsort[f];
            if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
              sendTag(a, b, d);
            }
          }
        } else {
          this.RE(a, b, "alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a, b, "end");
        utag.loader.SC("utag_main", {
          "_st": ((new Date()).getTime() + parseInt(utag.cfg.session_timeout))
        });
      },
      C: function (a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if (a[c] instanceof Array) {
            b[c] = a[c].slice(0)
          } else {
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut: {
      pad: function (a, b, c, d) {
        a = "" + ((a - 0).toString(16));
        d = '';
        if (b > a.length) {
          for (c = 0; c < (b - a.length); c++) {
            d += '0'
          }
        }
        return "" + d + a
      },
      vi: function (t, a, b) {
        if (!utag.v_id) {
          a = this.pad(t, 12);
          b = "" + Math.random();
          a += this.pad(b.substring(2, b.length), 16);
          try {
            a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
            a += this.pad(navigator.userAgent.length, 3);
            a += this.pad(document.URL.length, 4);
            a += this.pad(navigator.appVersion.length, 3);
            a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
          } catch (e) {
            utag.DB(e);
            a += "12345"
          };
          utag.v_id = a;
        }
        return utag.v_id
      },
      hasOwn: function (o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function (o, a) {
        for (a in o) {
          if (utag.ut.hasOwn(o, a)) return false
        }
        return true
      },
      isEmpty: function (o) {
        var t = utag.ut.typeOf(o);
        if (t == "number") {
          return isNaN(o)
        } else if (t == "boolean") {
          return false
        } else if (t == "string") {
          return o.length === 0
        } else return utag.ut.isEmptyObject(o)
      },
      typeOf: function (e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function (o) {
        var a = {};

        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if (utag.ut.isEmptyObject(c)) {} else {
              for (var d in c) {
                r(c[d], p ? p + "." + d : d);
              }
            }
          }
        }
        r(o, "");
        return a;
      },
      merge: function (a, b, c, d) {
        if (c) {
          for (d in utag.loader.GV(b)) {
            a[d] = b[d]
          }
        } else {
          for (d in utag.loader.GV(b)) {
            if (typeof a[d] == "undefined") a[d] = b[d]
          }
        }
      },
      decode: function (a, b) {
        b = "";
        try {
          b = decodeURIComponent(a)
        } catch (e) {
          utag.DB(e)
        };
        if (b == "") {
          b = unescape(a)
        };
        return b
      },
      error: function (a, b, c) {
        if (typeof utag_err != "undefined") {
          utag_err.push(a)
        }
      },
      loader: function (o, a, b, c, l) {
        a = document;
        if (o.type == "iframe") {
          b = a.createElement("iframe");
          o.attrs = o.attrs || {
            "height": "1",
            "width": "1",
            "style": "display:none"
          };
          for (l in utag.loader.GV(o.attrs)) {
            b.setAttribute(l, o.attrs[l])
          }
          b.setAttribute("src", o.src);
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
          b.src = o.src;
          return;
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
          for (l in utag.loader.GV(o.attrs)) {
            b[l] = o.attrs[l]
          }
          b.src = o.src;
        }
        if (o.id) {
          b.id = o.id
        };
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener("load", function () {
              o.cb()
            }, false);
          } else {
            b.onreadystatechange = function () {
              if (this.readyState == 'complete' || this.readyState == 'loaded') {
                this.onreadystatechange = null;
                o.cb()
              }
            };
          }
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to " + l + ": " + o.src);
          if (l == "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b)
          }
        }
      }
    }
  };
  utag.o['msft.mpn'] = utag;
  utag.cfg = {
    template: "ut4.39.",
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/msft/mpn/prod/",
    utid: "msft/mpn/202103071710"
  };
  utag.cfg.v = utag.cfg.template + "202103071710";
  utag.cond = {
    10: 0,
    11: 0,
    12: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    22: 0,
    27: 0,
    37: 0,
    38: 0,
    39: 0,
    42: 0,
    44: 0,
    45: 0,
    46: 0,
    4: 0,
    59: 0,
    5: 0,
    61: 0,
    62: 0,
    66: 0,
    68: 0,
    6: 0,
    70: 0,
    71: 0,
    72: 0,
    73: 0,
    74: 0,
    75: 0
  };
  utag.loader.chkCanRunTime = function (s, e, d, t, o, i) {
    try {
      o = {
        is: [s, e],
        dt: [],
        tm: [],
        hd: 0,
        ms: 0
      };
      for (i = 0; i < 2; i++) {
        d = o.is[i].substring(0, 8);
        t = o.is[i].substring(8);
        o.dt[i] = new Date();
        if (d !== '--------') {
          o.dt[i].setFullYear(d.substring(0, 4));
          o.dt[i].setMonth(parseInt(d.substring(4, 6)) - 1);
          o.dt[i].setDate(d.substring(6, 8));
        }
        if (t !== '----') {
          o.dt[i].setHours(t.substring(0, 2));
          o.dt[i].setMinutes(t.substring(2, 4));
        } else {
          o.dt[i].setHours(o.hd);
          o.dt[i].setMinutes(o.ms);
        }
        o.dt[i].setSeconds(o.ms);
        o.tm[i] = o.dt[i].getTime();
        o.hd = 23;
        o.ms = 59;
      }
      o.n = new Date().getTime();
      return (o.n >= o.tm[0] && o.n <= o.tm[1]);
    } catch (e) {
      return false;
    }
  };
  utag.loader.initdata = function () {
    try {
      utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
      utag.udoname = 'utag_data';
    } catch (e) {
      utag.data = {};
      utag.DB('idf:' + e);
    }
  };
  utag.loader.loadrules = function (_pd, _pc) {
    var d = _pd || utag.data;
    var c = _pc || utag.cond;
    for (var l in utag.loader.GV(c)) {
      switch (l) {
        case '10':
          try {
            c[10] |= (d['_pathname3'].toString().toLowerCase() == 'contact-support'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '11':
          try {
            c[11] |= (d['_pathname2'].toString().toLowerCase() == 'azureskills'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '12':
          try {
            c[12] |= (d['_pathname1'].toString().toLowerCase() == 'en-us'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '14':
          try {
            c[14] |= (d['_pathname2'].toString().toLowerCase().indexOf('support'.toLowerCase()) > -1) || (d['_pathname3'].toString().toLowerCase().indexOf('support'.toLowerCase()) > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '15':
          try {
            c[15] |= (d['_pathname2'].toString().toLowerCase() == 'case-studies'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '16':
          try {
            c[16] |= (d['_pathname3'].toString().toLowerCase() == 'edifixio'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '17':
          try {
            c[17] |= (typeof d['_pathname3'] == 'undefined') || (typeof d['_pathname3'] != 'undefined' && d['_pathname3'] == '')
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '18':
          try {
            c[18] |= (typeof d['_pathname4'] == 'undefined') || (typeof d['_pathname4'] != 'undefined' && d['_pathname4'] == '')
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '19':
          try {
            c[19] |= (d['_pathname2'].toString().toLowerCase() == 'go-to-market'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '20':
          try {
            c[20] |= (d['_pathname2'].toString().toLowerCase() == 'isv-resource-hub'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '22':
          try {
            c[22] |= (d['dom.url'].toString().toLowerCase().indexOf('campaigns'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase() == 'cloud-solution-provider'.toLowerCase() && d['dom.url'].toString().toLowerCase() == 'direct'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'cloud-solution-provider'.toLowerCase() && d['dom.url'].toString().toLowerCase() == 'get-started'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'cloud-solution-provider'.toLowerCase() && d['dom.url'].toString().toLowerCase() == 'whats-required'.toLowerCase()) || (d['dom.url'].toString().toLowerCase().indexOf('technical-resources-for-security'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('marketing-resources-for-security'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('sales-resources-for-security'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase() == 'solutions'.toLowerCase() && d['dom.url'].toString().toLowerCase() == 'security-practice'.toLowerCase()) || (d['dom.url'].toString().toLowerCase().indexOf('marketing/details/gdpr'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('solutions/'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('reach-customers/gtm'.toLowerCase()) > -1) || (d['dom.domain'].toString().toLowerCase().indexOf('partnerbeta'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('isv-resource-hub'.toLowerCase()) > -1) || (typeof d['site_subsection2'] != 'undefined' && d['site_subsection2'].toString().toLowerCase() == 'digital partner experience'.toLowerCase()) || (typeof d['site_subsection1'] != 'undefined' && d['site_subsection1'].toString().toLowerCase() == 'training'.toLowerCase()) || (d['dom.url'].toString().toLowerCase().indexOf('reach-customers/connect-with-customers'.toLowerCase()) > -1) || (typeof d['site_subsection3'] != 'undefined' && d['site_subsection3'].toString().toLowerCase() == 'isv gold eligibility form'.toLowerCase()) || (typeof d['site_subsection1'] != 'undefined' && typeof d['site_subsection2'] != 'undefined' && d['site_subsection1'].toString().toLowerCase() == 'explore'.toLowerCase() && d['site_subsection2'].toString().toLowerCase() == 'education'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '27':
          try {
            c[27] |= (d['dom.url'].toString().toLowerCase().indexOf('campaigns/proactive-security'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('campaigns/security-practice-playbook'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('campaigns/security-practice'.toLowerCase()) > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '37':
          try {
            c[37] |= (d['_pathname2'].toString().toLowerCase().indexOf('smart-partner-marketing'.toLowerCase()) > -1 && d['_pathname3'].toString().toLowerCase().indexOf('assessment'.toLowerCase()) > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '38':
          try {
            c[38] |= (d['dom.url'].toString().toLowerCase().indexOf('security-practice/confirmation'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('campaigns/security-practice'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('solutions/practice-areas/security-compliance'.toLowerCase()) > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '39':
          try {
            c[39] |= (d['dom.domain'].toString().toLowerCase().indexOf('eventcore'.toLowerCase()) > -1) || (d['dom.domain'].toString().toLowerCase().indexOf('register.inspire'.toLowerCase()) > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '4':
          try {
            c[4] |= (d['page_name'].toString().toLowerCase() == 'Top partner questions library'.toLowerCase()) || (d['_pathname2'].toString().toLowerCase().indexOf('support'.toLowerCase()) > -1 && typeof d['_pathname3'] != 'undefined' && d['_pathname3'] == '') || (d['_pathname2'].toString().toLowerCase().indexOf('support'.toLowerCase()) > -1 && typeof d['_pathname3'] == 'undefined')
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '42':
          try {
            c[42] |= (d['va.badges.13698'].toString().toLowerCase() == 'true'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '44':
          try {
            c[44] |= (d['dom.url'].toString().toLowerCase().indexOf('campaigns/ced-nomination-form'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('campaigns/cloud-practice-playbooks'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('reach-customers/gtm'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('campaigns/cloud-solution-provider-campaign'.toLowerCase()) > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '45':
          try {
            c[45] |= (d['dom.url'].toString().toLowerCase().indexOf('solutions/modern-desktop'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('solutions/'.toLowerCase()) > -1) || (d['site_subsection3'].toString().toLowerCase() == 'artificial intelligence'.toLowerCase()) || (d['site_subsection1'].toString().toLowerCase() == 'isv resource hub'.toLowerCase()) || (d['site_subsection1'].toString().toLowerCase() == 'case studies'.toLowerCase() && d['site_subsection2'].toString().toLowerCase() == 'bittitan'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '46':
          try {
            c[46] |= (typeof d['_pathname2'] != 'undefined' && d['_pathname2'] == '' && d['site_section'].toString().toLowerCase().indexOf('home'.toLowerCase()) > -1) || (d['site_section'].toString().toLowerCase().indexOf('testsubsite'.toLowerCase()) > -1 && typeof d['_pathname3'] != 'undefined' && d['_pathname3'] == '') || (d['dom.pathname'].toString().indexOf('explore/commercial') > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '5':
          try {
            c[5] |= (d['page_name'].toString().toLowerCase() == 'Microsoft Partner Network Home'.toLowerCase()) || (d['dom.title'].toString().toLowerCase() == 'Microsoft Partner Network - Home'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '59':
          try {
            c[59] |= (typeof d['site_subsection1'] != 'undefined' && d['site_subsection1'].toString().toLowerCase() == 'cloud solution provider'.toLowerCase() && typeof d['site_subsection2'] == 'undefined') || (typeof d['site_subsection2'] != 'undefined' && d['site_subsection2'].toString().toLowerCase() == 'business applications'.toLowerCase() && typeof d['site_subsection3'] == 'undefined') || (d['dom.url'].toString().indexOf('/solutions/business-applications') > -1) || (d['dom.url'].toString().indexOf('/cloud-solution-provider') > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '6':
          try {
            c[6] |= (d['_pathname2'].toString().toLowerCase() == 'news'.toLowerCase()) || (d['_pathname2'].toString().toLowerCase() == 'news#'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '61':
          try {
            c[61] |= (utag.loader.chkCanRunTime("20190614----", "20200215----")) && ((d['dom.domain'].toString().toLowerCase().indexOf('partner.microsoft.com'.toLowerCase()) > -1 && typeof d['dom.pathname'] != 'undefined' && d['dom.pathname'].toString().toLowerCase().indexOf('/inspire'.toLowerCase()) > -1) || (d['dom.domain'].toString().toLowerCase() == 'blogs.partner.microsoft.com'.toLowerCase() && typeof d['dom.pathname'] != 'undefined' && d['dom.pathname'].toString().toLowerCase().indexOf('/mpn/'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('microsoft-inspire'.toLowerCase()) > -1) || (typeof d['dom.url'] != 'undefined' && d['dom.url'].toString().toLowerCase().indexOf('/what-inspires-microsoft-partners'.toLowerCase()) > -1))
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '62':
          try {
            c[62] |= (typeof d['dom.pathname'] != 'undefined' && d['dom.pathname'].toString().toLowerCase().indexOf('/campaigns/'.toLowerCase()) > -1)
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '66':
          try {
            c[66] |= (typeof d['cp.utag_main__ss'] != 'undefined' && d['cp.utag_main__ss'].toString().toLowerCase() == '1'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '68':
          try {
            c[68] |= (d['site_subsection1'].toString().toLowerCase() == 'Search'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '70':
          try {
            c[70] |= (typeof d['ut.event'] != 'undefined' && d['ut.event'].toString().toLowerCase() == 'view'.toLowerCase() && typeof d['tealium_event'] != 'undefined' && d['tealium_event'].toString().toLowerCase() == 'scene_transition'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '71':
          try {
            c[71] |= (d['site_subsection2'].toString().toLowerCase() == 'my solutions'.toLowerCase() && d['site_subsection3'].toString().toLowerCase() == 'solutiondetails'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '72':
          try {
            c[72] |= (utag.loader.chkCanRunTime("------------", "20210630----")) && ((d['dom.url'].toString().toLowerCase().indexOf('partner.microsoft.com/nl-nl/surface'.toLowerCase()) > -1))
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '73':
          try {
            c[73] |= (typeof d['cp.MSCC'] != 'undefined' && d['cp.MSCC'].toString().indexOf('c1=2') > -1) || (typeof d['cp.MSCC'] != 'undefined' && d['cp.MSCC'].toString().toLowerCase() == 'NR'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '74':
          try {
            c[74] |= (typeof d['cp.MSCC'] != 'undefined' && d['cp.MSCC'].toString().indexOf('c2=2') > -1) || (typeof d['cp.MSCC'] != 'undefined' && d['cp.MSCC'].toString().toLowerCase() == 'NR'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
        case '75':
          try {
            c[75] |= (typeof d['cp.MSCC'] != 'undefined' && d['cp.MSCC'].toString().indexOf('c3=2') > -1) || (typeof d['cp.MSCC'] != 'undefined' && d['cp.MSCC'].toString().toLowerCase() == 'NR'.toLowerCase())
          } catch (e) {
            utag.DB(e)
          };
          break;
      }
    }
  };
  utag.pre = function () {
    utag.loader.initdata();
    try {
      utag.loader.RD(utag.data)
    } catch (e) {
      utag.DB(e)
    };
    utag.loader.loadrules();
  };
  utag.loader.GET = function () {
    utag.cl = {
      '_all_': 1
    };
    utag.pre();
    utag.handler.extend = [function (a, b) {
      try {
        if (1) {
          try {
            b['video_on_page'] = jQuery(document).find('a[href*="vimeo"]').attr('href') ? "1" : "0"
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, c, d) {
      try {
        if (1) {
          c = [b['cp.utag_main_ses_id'], b['cp.utag_main_v_id']];
          b['enrich_session_id'] = c.join('_')
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          b['language_code'] = b['site_country_code'];
          b['business_unit'] = 'Partner Network';
          b['location_code'] = b['site_language_code'];
          b['page_name'] = b['dom.title'];
          try {
            b['site_section'] = b._pathname2 ? b._pathname2 : "Home Page"
          } catch (e) {};
          try {
            b['awa_market'] = b._pathname1 ? b._pathname1 : window.location.pathname.split('/')[1]
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          b['jsll_app_id'] = 'partner';
          b['jsll_base_url'] = '//az725175.vo.msecnd.net/scripts/jsll-4.2.7.js';
          try {
            b['jsll_environment'] = (utag_data["dom.domain"].indexOf("partnerbeta") > -1 || utag_data["dom.domain"].indexOf("ship") > -1) ? "ppe" : "prod"
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['site_environment'] = (utag_data["dom.domain"].indexOf("partnerbeta") > -1 || utag_data["dom.domain"].indexOf("ship") > -1 || utag_data["dom.pathname"].indexOf("sthomastest") > -1 || utag_data["dom.pathname"].indexOf("smoke-test") > -1) ? "PPE" : "prod"
          } catch (e) {};
          b['site_name'] = 'Microsoft Partner Network Portal';
          b['site_platform'] = 'SiteCore';
          b['site_version'] = b['partner_authtype'];
          try {
            b['doc_ref'] = document.referrer
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if ((typeof b['qp.SearchText'] != 'undefined' && typeof b['qp.SearchText'] != 'undefined' && b['qp.SearchText'] != '')) {
          b['search_keyword'] = b['qp.SearchText']
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      var util = window.analytics.utilities;
      if (b.language_code === undefined || b.language_code === '') {
        util.checkMetaTag('awa-market', 'en-us');
        utag.data["language_code"] = "en";
        utag.data["location_code"] = "us";
        utag.data["awa_market"] = "en-us";
      } else {
        util.checkMetaTag('awa-market', b.awa_market);
      }
      util.checkMetaTag('awa-env', b.jsll_environment);
      if (b.authenticated !== undefined && b.authenticated === "yes") {
        util.checkMetaTag('awa-authtype', b.partner_authtype);
        util.checkMetaTag('awa-usersubtype', b.partner_id);
      }
    }, function (a, b) {
      try {
        if (b['dom.domain'].toString().toLowerCase().indexOf('blog'.toLowerCase()) > -1) {
          var util = window.analytics.utilities;
          util.checkMetaTag('awa-ver', 'Partner Blog');
          try {
            util.checkMetaTag('awa-asst', jQuery('link[rel="shortlink"]').attr('href').split('=')[1]);
            util.checkMetaTag('awa-prntid', jQuery('link[rel="shortlink"]').attr('href').split('=')[1]);
          } catch (e) {};
          util.checkMetaTag('awa-aud', 'Partner');
          util.checkMetaTag('awa-stv', new Date(jQuery('meta[property="article:modified_time"]').attr('content')).toJSON());
          util.checkMetaTag('awa-pgtop', jQuery('meta[property="article:section"]').attr('content'));
          util.checkMetaTag('awa-pgauth', jQuery('div.article-author a').text().trim());
          util.checkMetaTag('awa-pgpubl', 'Wordpress');
          util.checkMetaTag('awa-pgtmp', jQuery('meta[name="generator"]').attr('content'));
          try {
            var lang = jQuery('html').attr('lang'),
              msLang = (lang.indexOf('-') > -1) ? lang.split('-')[0] : 'en',
              msLoc = (lang.indexOf('-') > -1) ? lang.split('-')[1] : 'us',
              awaM = (lang.indexOf('-') > -1) ? lang : 'en-us';
            utag.data["language_code"] = msLang;
            utag.data["location_code"] = msLoc;
            utag.data["awa_market"] = awaM;
            util.checkMetaTag('awa-market', awaM);
          } catch (e) {};
        }
      } catch (e) {
        utag.DB(e)
      }
    }, function (a, b, c, d, e, f, g) {
      if (1) {
        d = b['qp.wt.mc_id'];
        if (typeof d == 'undefined') return;
        c = [{
          '_nn_bl': 'blog'
        }, {
          '_oo_bl': 'blog'
        }, {
          '_pd_bl': 'blog'
        }, {
          '_eml_': 'email'
        }, {
          '_nn_em': 'email'
        }, {
          '_oo_em': 'email'
        }, {
          '_pd_em': 'email'
        }, {
          '_pd_lim': 'linkedin inmail'
        }, {
          '_nn_nl': 'newsletter'
        }, {
          '_oo_nl': 'newsletter'
        }, {
          '_pd_nl': 'newsletter'
        }, {
          '_pd_ba': 'paId display - banner ad'
        }, {
          '_pd_bd': 'paId display - bing'
        }, {
          '_pd_gd': 'paId display - google'
        }, {
          'google_display': 'paId display - google'
        }, {
          '_pd_bh': 'paId search - bing'
        }, {
          'bing_search': 'paId search - bing'
        }, {
          '_pd_gs': 'paId search - google'
        }, {
          'google_search': 'paId search - google'
        }, {
          '_pd_li': 'paId social - linkedIn'
        }, {
          '_pd_fb': 'paId social -facebook'
        }, {
          '_pd_yt': 'paId social -youtube'
        }, {
          '_pd_tw': 'paId social-twitter'
        }, {
          '_pd_rt': 'retargeting'
        }, {
          '_oo_fb': 'social - facebook'
        }, {
          '_oo_li': 'social - linkedIn'
        }, {
          '_oo_tw': 'social - twitter'
        }, {
          '_oo_yt': 'social - youtube'
        }, {
          '_pd_ob': 'sponsored content - outbrain'
        }, {
          '_pd_yg': 'sponsored content - yahoo gemini'
        }];
        var m = false;
        for (e = 0; e < c.length; e++) {
          for (f in utag.loader.GV(c[e])) {
            if (d.toString().indexOf(f) > -1) {
              b['campaign_tactic'] = c[e][f];
              m = true
            };
          };
          if (m) break
        };
      }
    }, function (a, b) {
      try {
        if (1) {
          window.analytics = window.analytics || {};
          window.analytics.data = window.analytics.data || {};
          window.analytics.utilities = window.analytics.utilities || {};
          window.analytics.awaUtilities = window.analytics.awaUtilities || {};
          var util = window.analytics.utilities,
            awaUtil = window.analytics.awaUtilities,
            data = window.analytics.data;
          setTimeout(function () {
            awaUtil.linageWalker()
          }, 1500);
        }
      } catch (e) {
        utag.DB(e)
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['site_subsection1'] = utag.data._pathname2.replace(/-|_/g, " ")
          } catch (e) {};
          try {
            b['site_subsection2'] = utag.data._pathname3.replace(/-|_/g, " ")
          } catch (e) {};
          try {
            b['site_subsection3'] = utag.data._pathname4.replace(/-|_/g, " ")
          } catch (e) {};
          try {
            b['site_subsection4'] = utag.data._pathname5.replace(/-|_/g, " ")
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if ((typeof b['site_subsection1'] != 'undefined' && b['site_subsection1'].toString().toLowerCase() == 'support'.toLowerCase() && typeof b['site_subsection2'] == 'undefined')) {
          try {
            b['support_area'] = $('#ddlcategory option:selected').text()
          } catch (e) {};
          try {
            b['support_category'] = $('#ddlTopic option:selected').text()
          } catch (e) {};
          try {
            b['support_topic'] = $('#ddlIssue option:selected').text()
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['msft_anid'] = utag.data["cp.ANON"] ? utag.data["cp.ANON"].split("&")[0].replace("A=", "") : ""
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      if (/\/ja-jp/g.test(document.location.pathname)) {
        _trackingid = 'LFT-10847-1';
        (function () {
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";
          b.async = true;
          b.src = (window.location.protocol === "https:" ? "https://" : "http://") + "track.list-finder.jp/js/ja/track.js";
          s.parentNode.insertBefore(b, s);
        })();
      }
    }, function (a, b) {
      try {
        if (1) {
          if (typeof b['cp.utag_main_as_event_flag'] == 'undefined') {
            utag.loader.SC('utag_main', {
              'as_event_flag': 'true' + ';exp-session'
            });
            b['cp.utag_main_as_event_flag'] = "true";
          } else {
            if (b['cp.utag_main_as_event_flag'] == 'true') {
              utag.loader.SC('utag_main', {
                'as_event_flag': 'false' + ';exp-session'
              });
              b['cp.utag_main_as_event_flag'] = 'false';
            } else {
              utag.loader.SC('utag_main', {
                'as_event_flag': 'true' + ';exp-session'
              });
              b['cp.utag_main_as_event_flag'] = 'true';
            }
          }
        }
      } catch (e) {
        utag.DB(e)
      }
    }, function (a, b) {
      try {
        if ((typeof b['event_name'] != 'undefined' && b['event_name'].toString().toLowerCase() == 'get overview'.toLowerCase()) || (typeof b['event_name'] != 'undefined' && b['event_name'].toString().toLowerCase() == 'get playbook'.toLowerCase())) {
          try {
            b['security_tab_name'] = jQuery('[aria-expanded=true]').text() || "Small to midsize business (SMB)"
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            var badges = [];
            badges = ['30', '31', '32', '5043', '5045', '5049', '5051', '5053', '5164', '5166', '5168', '5170', '5172', '5174', '5176', '5178', '5180', '5182', '5259', '5265', '5295', '5317', '5321', '5323', '5325', '5327', '5329', '5331', '5333', '5335', '5337', '5339', '5341', '5343', '5345', '5347', '5349', '5351', '5353', '5355', '5357', '5359', '5368', '5370', '5380', '5390', '5399', '5411', '5688', '6254', '6633', '6686', '6688', '6749', '6928', '6930', '7907', '7919', '7921', '7925', '8480', '8516', '8518', '9228', '9230', '9358', '9360', '9753', '9962', '9964', '9966', '9968', '10850', '10918', '12172', '12174', '12176', '13540', '13542', '13554', '13556', '13698', '13700', '13851', '18745', '18747', '18749', '18751', '18753', '18755', '19212', '19667', '19669', '19671', '21489', '21943', '21945', '21947', '21949', '21951', '22858', '22860', '23766', '23768', '23770', '23772', '23774', '25146', '25148', '25602', '25604', '25606', '25608', '25610', '27434', '27436', '27892', '27896', '27898', '27900', '27902', '32592', '33046', '38505', '39413', '41253', '47504', '47931', '49635', '50062', '50489', '50491', '50493', '51345', '52198', '58991', '58993', '58995', '58997', '58999', '59001', '59003', '59005', '59007', '59009', '59011', '59720', '69083', '69085', '69087', '69089', '69091', '69093', '69095', '73865', '75462', '75464', '76260', '79444', '83423', '88195', '88197', '88993', '89800', '90596', '92190', '92988', '98604', '98606', '102583', '102585', '102587', '102589', '102591', '102593', '102595', '104187', '104191', '104193', '105785', '105787'];
            badges.forEach(function (elem) {
              if (utag.data['va.badges.' + elem]) {
                b['Badge_' + elem] = 'true';
              }
            });
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e)
      }
    }, function (a, b, c, d, e, f, g) {
      if ((typeof b['_pathname2'] != 'undefined' && b['_pathname2'].toString().toLowerCase() == 'solutions'.toLowerCase() && typeof b['_pathname3'] != 'undefined' && b['_pathname3'].toString().toLowerCase() == 'my-solutions'.toLowerCase() && typeof b['_pathname4'] == 'undefined' && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'view'.toLowerCase())) {
        d = b['dom.referrer'];
        if (typeof d == 'undefined') return;
        c = [{
          '(\\?.*)(cr_cc=|mc_id=)': 'Campaign Traffic'
        }, {
          '(\\/\\/)([^\\/]+)(bing)': 'Organic Search'
        }, {
          '(\\/\\/)([^\\/]+)(google)': 'Organic Search'
        }, {
          '(\\/\\/)([^\\/]+)(yahoo)': 'Organic Search'
        }, {
          '(\\/\\/)([^\\/]+)(yandex)': 'Organic Search'
        }, {
          '(\\/\\/)([^\\/]+)(microsoft)': 'MSFT Property'
        }, {
          '(\\/\\/)([^\\/]+)(linkedin)': 'Social'
        }, {
          '(\\/\\/)([^\\/]+)(facebook)': 'Social'
        }, {
          '(\\/\\/)([^\\/]+)(twitter)': 'Social'
        }, {
          '(\\/\\/)([^\\/]+)(reddit)': 'Social'
        }, {
          '(\\/\\/)([^\\/]+)(wikipedia)': 'Social'
        }, {
          '(\\/\\/)([^\\/]+)(stackoverflow)': 'Social'
        }];
        var m = false;
        for (e = 0; e < c.length; e++) {
          for (f in utag.loader.GV(c[e])) {
            g = new RegExp(f, 'i');
            if (g.test(d)) {
              b['sw_referring_channel'] = c[e][f];
              m = true
            };
          };
          if (m) break
        };
      }
    }, function (a, b) {
      try {
        if ((typeof b['_pathname2'] != 'undefined' && b['_pathname2'].toString().toLowerCase() == 'solutions'.toLowerCase() && typeof b['_pathname3'] != 'undefined' && b['_pathname3'].toString().toLowerCase() == 'my-solutions'.toLowerCase() && typeof b['_pathname4'] == 'undefined' && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'view'.toLowerCase() && typeof b['dom.referrer'] == 'undefined') || (typeof b['_pathname2'] != 'undefined' && b['_pathname2'].toString().toLowerCase() == 'solutions'.toLowerCase() && typeof b['_pathname3'] != 'undefined' && b['_pathname3'].toString().toLowerCase() == 'my-solutions'.toLowerCase() && typeof b['_pathname4'] == 'undefined' && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'view'.toLowerCase() && typeof b['dom.referrer'] != 'undefined' && b['dom.referrer'] == '')) {
          b['sw_referring_channel'] = 'Direct'
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['form_fields_interacted'] = localStorage.getItem('form_fields_interacted')
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['page_load_time'] = utag.data.page_load_time
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['time_on_page'] = Date.now() - tealium_load_start_time
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          $(window).scroll(function () {
            var page_depth = analytics.globalfunctions.amountScrolled();
            if (utag.data.max_page_depth) {
              if (utag.data.max_page_depth < page_depth) {
                utag.data.max_page_depth = page_depth;
              }
            } else {
              utag.data.max_page_depth = analytics.globalfunctions.amountScrolled();
            }
          });
        }
      } catch (e) {
        utag.DB(e)
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['fs_url'] = FS.getCurrentSessionURL()
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          var cookies = document.cookie.split(";")
          for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].indexOf("_mkto_trk") > -1) {
              var marketo_cookie_value = cookies[i].split('=')[1];
            }
          }
          if (marketo_cookie_value) {
            document.cookie = "_mkto_trk=" + marketo_cookie_value + ";domain=.microsoft.com;path=/;expires=" + (new Date(Date.now() + 1000 * 3600 * 24 * 365)).toGMTString();
          }
        }
      } catch (e) {
        utag.DB(e)
      }
    }, function (a, b) {
      try {
        utag.runonce = utag.runonce || {};
        utag.runonce.ext = utag.runonce.ext || {};
        if (typeof utag.runonce.ext[65] == 'undefined') {
          utag.runonce.ext[65] = 1;
          if (1) {
            var awaSet = ['cmptyp', 'scn', 'scnct', 'scnum'];
            var awaNew = ['type', 'scn', 'scnstp', 'stpnum'];
            jQuery('a,input,map,areamap').each(function () {
              var $this = jQuery(this);
              for (var i = awaSet.length - 1; i >= 0; i--) {
                if ($this.attr('data-bi-' + awaNew[i]) === undefined) {
                  var a = $this.attr('ms.' + awaSet[i]);
                  if (a !== undefined) {
                    $this.attr('data-bi-' + awaNew[i], a);
                  }
                }
              }
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      }
    }];
    utag.handler.cfg_extend = [{
      "alr": 0,
      "bwq": 0,
      "blr": 1,
      "id": "63",
      "end": 0
    }, {
      "id": "58",
      "blr": 1,
      "bwq": 0,
      "alr": 0,
      "end": 0
    }, {
      "end": 0,
      "alr": 0,
      "bwq": 0,
      "blr": 1,
      "id": "26"
    }, {
      "bwq": 0,
      "blr": 1,
      "alr": 0,
      "id": "60",
      "end": 0
    }, {
      "end": 0,
      "id": "27",
      "blr": 1,
      "bwq": 0,
      "alr": 0
    }, {
      "end": 0,
      "bwq": 0,
      "blr": 1,
      "alr": 0,
      "id": "44"
    }, {
      "end": 0,
      "id": "7",
      "alr": 0,
      "blr": 1,
      "bwq": 0
    }, {
      "bwq": 0,
      "blr": 1,
      "alr": 0,
      "id": "64",
      "end": 0
    }, {
      "end": 0,
      "alr": 0,
      "bwq": 0,
      "blr": 1,
      "id": "54"
    }, {
      "id": "67",
      "alr": 0,
      "blr": 1,
      "bwq": 0,
      "end": 0
    }, {
      "alr": 0,
      "bwq": 0,
      "blr": 1,
      "id": "131",
      "end": 0
    }, {
      "id": "134",
      "alr": 1,
      "blr": 0,
      "bwq": 0,
      "end": 0
    }, {
      "id": "28",
      "blr": 0,
      "bwq": 0,
      "alr": 1,
      "end": 0
    }, {
      "end": 0,
      "id": "17",
      "alr": 1,
      "bwq": 0,
      "blr": 0
    }, {
      "bwq": 0,
      "blr": 0,
      "alr": 1,
      "id": "72",
      "end": 0
    }, {
      "end": 0,
      "id": "73",
      "bwq": 0,
      "blr": 0,
      "alr": 1
    }, {
      "end": 0,
      "blr": 0,
      "bwq": 0,
      "alr": 1,
      "id": "85"
    }, {
      "end": 0,
      "alr": 1,
      "blr": 0,
      "bwq": 0,
      "id": "169"
    }, {
      "alr": 1,
      "blr": 0,
      "bwq": 0,
      "id": "170",
      "end": 0
    }, {
      "end": 0,
      "id": "172",
      "bwq": 0,
      "blr": 0,
      "alr": 1
    }, {
      "end": 0,
      "blr": 0,
      "bwq": 0,
      "alr": 1,
      "id": "180"
    }, {
      "id": "181",
      "bwq": 0,
      "blr": 0,
      "alr": 1,
      "end": 0
    }, {
      "id": "184",
      "bwq": 0,
      "blr": 0,
      "alr": 1,
      "end": 0
    }, {
      "id": "187",
      "alr": 1,
      "bwq": 0,
      "blr": 0,
      "end": 0
    }, {
      "blr": 0,
      "bwq": 0,
      "alr": 0,
      "id": "193",
      "end": 1
    }, {
      "id": "65",
      "alr": 0,
      "bwq": 0,
      "blr": 0,
      "end": 1
    }];
    utag.loader.initcfg = function () {
      utag.loader.cfg = {
        "41": {
          load: 4,
          send: 1,
          v: 202004140310,
          wait: 0,
          tid: 20010
        },
        "138": {
          load: (utag.cond[75] && utag.cond[66]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 7127
        },
        "112": {
          load: 1,
          send: 1,
          v: 201910142001,
          wait: 1,
          tid: 20010
        },
        "115": {
          load: 1,
          send: 1,
          v: 202007211522,
          wait: 1,
          tid: 20010
        },
        "144": {
          load: 1,
          send: 1,
          v: 202005151726,
          wait: 1,
          tid: 20010
        },
        "108": {
          load: 1,
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "109": {
          load: 1,
          send: 1,
          v: 201901222350,
          wait: 1,
          tid: 20010
        },
        "81": {
          load: utag.cond[46],
          send: 1,
          v: 201910142001,
          wait: 1,
          tid: 20010
        },
        "67": {
          load: utag.cond[38],
          send: 1,
          v: 201908012342,
          wait: 1,
          tid: 20010
        },
        "74": {
          load: utag.cond[39],
          send: 1,
          v: 201805151658,
          wait: 1,
          tid: 20010
        },
        "66": {
          load: utag.cond[5],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "124": {
          load: utag.cond[59],
          send: 1,
          v: 201901301946,
          wait: 1,
          tid: 20010
        },
        "75": {
          load: (utag.cond[5] && utag.cond[42]),
          send: 1,
          v: 201910142001,
          wait: 1,
          tid: 20010
        },
        "65": {
          load: utag.cond[37],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "38": {
          load: utag.cond[14],
          send: 1,
          v: 201910142001,
          wait: 1,
          tid: 20010
        },
        "32": {
          load: utag.cond[10],
          send: 1,
          v: 201910142001,
          wait: 1,
          tid: 20010
        },
        "26": {
          load: utag.cond[4],
          send: 1,
          v: 201910142001,
          wait: 1,
          tid: 20010
        },
        "27": {
          load: utag.cond[6],
          send: 1,
          v: 201910142001,
          wait: 1,
          tid: 20010
        },
        "56": {
          load: utag.cond[44],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "60": {
          load: utag.cond[27],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "35": {
          load: (utag.cond[12] && utag.cond[75] && utag.cond[11] && utag.cond[17]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "40": {
          load: (utag.cond[12] && utag.cond[74] && utag.cond[15] && utag.cond[16] && utag.cond[18]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "42": {
          load: (utag.cond[12] && utag.cond[19] && utag.cond[17]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "43": {
          load: (utag.cond[12] && utag.cond[75] && utag.cond[20]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "140": {
          load: utag.cond[68],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "54": {
          load: (utag.cond[75] && utag.cond[22]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 13060
        },
        "7": {
          load: utag.cond[73],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20067
        },
        "37": {
          load: utag.cond[73],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 8010
        },
        "87": {
          load: (utag.cond[74] || utag.cond[62] || utag.cond[45] || utag.cond[61]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 6026
        },
        "100": {
          load: (utag.cond[74] || utag.cond[62] || utag.cond[45] || utag.cond[61]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 12047
        },
        "88": {
          load: (utag.cond[74] || utag.cond[62] || utag.cond[45] || utag.cond[61]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20103
        },
        "122": {
          load: (utag.cond[74] || utag.cond[62] || utag.cond[45] || utag.cond[61]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 7132
        },
        "99": {
          load: (utag.cond[74] && utag.cond[45]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 4049
        },
        "132": {
          load: (utag.cond[74] && utag.cond[61]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 2063
        },
        "133": {
          load: (utag.cond[74] && utag.cond[62]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 25016
        },
        "142": {
          load: utag.cond[74],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 12047
        },
        "141": {
          load: utag.cond[74],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 6026
        },
        "149": {
          load: (utag.cond[74] && utag.cond[72]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 12047
        },
        "146": {
          load: utag.cond[70],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "134": {
          load: (utag.cond[74] && utag.cond[62]),
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "145": {
          load: 1,
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "143": {
          load: 1,
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "147": {
          load: utag.cond[71],
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20010
        },
        "18": {
          load: 1,
          send: 1,
          v: 202102200023,
          wait: 1,
          tid: 20064
        }
      };
      utag.loader.cfgsort = ["41", "138", "112", "115", "144", "108", "109", "81", "67", "74", "66", "124", "75", "65", "38", "32", "26", "27", "56", "60", "35", "40", "42", "43", "140", "54", "7", "37", "87", "100", "88", "122", "99", "132", "133", "142", "141", "149", "146", "134", "145", "143", "147", "18"];
    }
    utag.loader.initcfg();
  }
  if (typeof utag_cfg_ovrd != 'undefined') {
    for (var i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[i] = utag_cfg_ovrd[i]
  };
  utag.loader.PINIT = function (a, b, c) {
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }
    try {
      this.GET();
      if (utag.handler.RE('view', utag.data, "blr")) {
        utag.handler.LR(utag.data);
      }
    } catch (e) {
      utag.DB(e)
    };
    a = this.cfg;
    c = 0;
    for (b in this.GV(a)) {
      if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
        a[b].block = 1;
        c = 1;
        this.bq[b] = 1;
      }
    }
    if (c == 1) {
      for (b in this.GV(a)) {
        if (a[b].block) {
          a[b].id = b;
          if (a[b].load == 4) a[b].load = 1;
          a[b].cb = function () {
            var d = this.uid;
            utag.loader.cfg[d].cbf = 1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if (c == 0) this.INIT();
  };
  utag.loader.INIT = function (a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");
    utag.rpt.ts['i'] = new Date();
    d = this.cfgsort;
    for (a = 0; a < d.length; a++) {
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if (b.block != 1 && b.s2s != 1) {
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
          this.f[b.id] = 0;
          utag.loader.LOAD(b.id)
        } else if (b.wait == 1 && utag.loader.rf == 0) {
          utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id] = 2;
        } else if (b.load > 0) {
          utag.DB('utag.loader.INIT: loading ' + b.id);
          this.lq.push(b);
          this.AS(b);
        }
      }
    }
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function (a) {
      if (utag.loader.rf == 0) {
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf = 1;
        utag.loader.WQ();
      }
    });
    else if (this.lq.length > 0) utag.loader.rf = 1;
    else if (this.lq.length == 0) utag.loader.END();
    return 1
  };
  utag.loader.EV('', 'ready', function (a) {
    if (utag.loader.efr != 1) {
      utag.loader.efr = 1;
      try {
        try {
          if (1) {
            var tealium_dom_ready_time = Date.now();
            utag.data.page_load_time = tealium_dom_ready_time - tealium_load_start_time;
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if (typeof utag.runonce == 'undefined') utag.runonce = {};
        utag.jdh = function (h, i, j, k) {
          h = utag.jdhc.length;
          if (h == 0) window.clearInterval(utag.jdhi);
          else {
            for (i = 0; i < h; i++) {
              j = utag.jdhc[i];
              k = jQuery(j.i).is(":visible") ? 1 : 0;
              if (k != j.s) {
                if (j.e == (j.s = k)) jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
              }
            }
          }
        };
        utag.jdhi = window.setInterval(utag.jdh, 250);
        utag.jdhc = [];
        if ((utag.data['dom.pathname'].toString().toLowerCase().indexOf('/my-solutions/create-solution'.toLowerCase()) > -1 && typeof utag.data['dom.pathname'] != 'undefined')) {
          if (typeof utag.runonce[164] == 'undefined') {
            utag.runonce[164] = 1;
            jQuery(document.body).on('mouseup', '[title="Create your solution and view it in the portal"]', function (e) {
              setTimeout(function () {
                var errors = $('p.create-error-text').length,
                  fieldArrayDelimiter = '|-|',
                  keyPairDelimiter = '|~|';
                if (errors > 0) {
                  var jsllFields = 'Source' + keyPairDelimiter + 'Submit error: create a solution' + fieldArrayDelimiter +
                    'Behavior' + keyPairDelimiter + awa.behavior.OTHER + fieldArrayDelimiter +
                    'ActionType' + keyPairDelimiter + 'error' + fieldArrayDelimiter +
                    'override' + keyPairDelimiter + 'Yes',
                    utagFields = 'Source' + keyPairDelimiter + 'Submit error: create a solution' + fieldArrayDelimiter +
                    'override' + keyPairDelimiter + 'Yes';
                  analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
                  analytics.globalfunctions.sendAllUtag(utagFields, $(this));
                }
              }, 500);
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if (1) {
            $(document).on('keyup', 'input#search-gallery-search-box', function (event) {
              var fieldArrayDelimiter = '|-|';
              var keyPairDelimiter = '|~|';
              if (event.keyCode == 13) {
                var utagFields = 'event_name' + keyPairDelimiter + 'Asset Gallery Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                  'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                  jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Asset Gallery' + fieldArrayDelimiter +
                  'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                  'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                  'Srchq' + keyPairDelimiter + 'Asset Gallery Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'Area' + keyPairDelimiter + 'Asset Gallery Search Bar' + fieldArrayDelimiter +
                  'link_name' + keyPairDelimiter + 'Initiate Asset Gallery Search' + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes';
                analytics.globalfunctions.sendAllUtag(utagFields, $(this));
                analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
              }
            });
            $(document).on('mousedown', 'span#search-gallery-search-box-button', function () {
              var fieldArrayDelimiter = '|-|';
              var keyPairDelimiter = '|~|';
              var searchBox = $(this).parents().find("input#search-gallery-search-box");
              var utagFields = 'event_name' + keyPairDelimiter + 'Asset Gallery Search: ' + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                'search_keyword' + keyPairDelimiter + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'search_term' + keyPairDelimiter + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Asset Gallery' + fieldArrayDelimiter +
                'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                'Srchq' + keyPairDelimiter + 'Asset Gallery Search: ' + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'Area' + keyPairDelimiter + 'Asset Gallery Search Bar' + fieldArrayDelimiter +
                'link_name' + keyPairDelimiter + 'Initiate Asset Gallery Search' + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes';
              analytics.globalfunctions.sendAllUtag(utagFields, $(this));
              analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
            });
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if (1) {
            $(document).on('keyup', 'input#SearchTextinHeaderV3', function (event) {
              var fieldArrayDelimiter = '|-|';
              var keyPairDelimiter = '|~|';
              if (event.keyCode == 13) {
                var utagFields = 'event_name' + keyPairDelimiter + 'Header Internal Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                  'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                  jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Header' + fieldArrayDelimiter +
                  'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                  'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                  'Srchq' + keyPairDelimiter + 'Header Internal Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'Area' + keyPairDelimiter + 'Header Search bar' + fieldArrayDelimiter +
                  'link_name' + keyPairDelimiter + 'Initiate Header Search' + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes';
                analytics.globalfunctions.sendAllUtag(utagFields, $(this));
                analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
              }
            });
            $(document).on('mousedown', '#search-header-icon-v3>.search-dropdown-glyph', function () {
              var $this = $(this).parents().find("input#SearchTextinHeaderV3");
              var utagFields = 'event_name' + keyPairDelimiter + 'Header Internal Search: ' + $this.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Header' + fieldArrayDelimiter +
                'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                'Srchq' + keyPairDelimiter + 'Header Internal Search: ' + $this.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'Area' + keyPairDelimiter + 'Header Search bar' + fieldArrayDelimiter +
                'link_name' + keyPairDelimiter + 'Initiate Header Search' + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes';
              analytics.globalfunctions.sendAllUtag(utagFields, $this);
              analytics.globalfunctions.sendAllJSLL(jsllFields, $this);
            });
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if ((typeof utag.data['site_subsection1'] != 'undefined' && utag.data['site_subsection1'].toString().toLowerCase() == 'support'.toLowerCase())) {
            var searchFired = 'n';
            $(document).on('keyup', 'input.search-blade-x-search-box', function (event) {
              var fieldArrayDelimiter = '|-|';
              var keyPairDelimiter = '|~|';
              if (event.keyCode == 13 && searchFired == 'n') {
                searchFired = 'y';
                var utagFields = 'event_name' + keyPairDelimiter + 'Support Internal Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                  'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                  jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Support' + fieldArrayDelimiter +
                  'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                  'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                  'Srchq' + keyPairDelimiter + 'Support Internal Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'Area' + keyPairDelimiter + 'Support Search bar' + fieldArrayDelimiter +
                  'link_name' + keyPairDelimiter + 'Initiate Support Search' + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes';
                analytics.globalfunctions.sendAllUtag(utagFields, $(this));
                analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
              }
            });
            $(document).on('mousedown', 'span.search-button-x', function () {
              if (searchFired == 'n') {
                searchFired = 'y';
                var $this = $(this).parent().find('input');
                var utagFields = 'event_name' + keyPairDelimiter + 'Support Internal Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                  'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                  jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Support' + fieldArrayDelimiter +
                  'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                  'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                  'Srchq' + keyPairDelimiter + 'Support Internal Search: ' + $this.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'Area' + keyPairDelimiter + 'Support Search bar' + fieldArrayDelimiter +
                  'link_name' + keyPairDelimiter + 'Initiate Support Search' + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes';
                analytics.globalfunctions.sendAllUtag(utagFields, $this);
                analytics.globalfunctions.sendAllJSLL(jsllFields, $this);
              }
            });
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if (1) {
            $(document).on('keyup', 'input.body-copy[type="search"]', function (event) {
              var fieldArrayDelimiter = '|-|';
              var keyPairDelimiter = '|~|';
              if (event.keyCode == 13) {
                var utagFields = 'event_name' + keyPairDelimiter + 'Body Copy Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, "") + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                  'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, "") + fieldArrayDelimiter +
                  'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, ""),
                  jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Body' + fieldArrayDelimiter +
                  'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                  'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                  'Srchq' + keyPairDelimiter + 'Body Copy Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, "") + fieldArrayDelimiter +
                  'Area' + keyPairDelimiter + 'Body Copy Search bar' + fieldArrayDelimiter +
                  'link_name' + keyPairDelimiter + 'Initiate Body Copy Search' + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes';
                analytics.globalfunctions.sendAllUtag(utagFields, $(this));
                analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
              }
            });
            $(document).on('mousedown', '#search-header-icon-v3>.search-dropdown-glyph', function () {
              var $this = $(this).parents().find('input.body-copy[type="search"]');
              var utagFields = 'event_name' + keyPairDelimiter + 'Body Copy Search: ' + $this.val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, "") + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, "") + fieldArrayDelimiter +
                'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, ""),
                jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Body' + fieldArrayDelimiter +
                'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                'Srchq' + keyPairDelimiter + 'Body Copy Search: ' + $this.val().replace(/[.,\/#!$%\^&\*;:{}=\-_&#x60;~()]/g, "") + fieldArrayDelimiter +
                'Area' + keyPairDelimiter + 'Body Copy Search bar' + fieldArrayDelimiter +
                'link_name' + keyPairDelimiter + 'Initiate Body Copy Search' + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes';
              analytics.globalfunctions.sendAllUtag(utagFields, $this);
              analytics.globalfunctions.sendAllJSLL(jsllFields, $this);
            });
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if ((typeof utag.data['site_subsection1'] != 'undefined' && utag.data['site_subsection1'].toString().toLowerCase() == 'support'.toLowerCase())) {
            $(document).on('change', '#ddlcategory, #ddlTopic, #ddlIssue', function () {
              var menuValue;
              var taxonomy;
              var pageArea;
              if ($(this).is('#ddlcategory')) {
                menuValue = 'Area: ' + $(this).find('option:selected').text().trim();
                pageArea = 'Support Area Menu';
              } else if ($(this).is('#ddlTopic')) {
                menuValue = 'Category: ' + $(this).find('option:selected').text().trim();
                pageArea = 'Support Category Menu';
              } else if ($(this).is('#ddlIssue')) {
                menuValue = 'Topic: ' + $(this).find('option:selected').text().trim();
                pageArea = 'Support Topic Menu';
                taxonomy = $('#ddlIssue option:selected').attr('value');
              }
              var jsllFields = 'Behavior' + keyPairDelimiter + '2' + fieldArrayDelimiter +
                'ActionType' + keyPairDelimiter + 'click' + fieldArrayDelimiter +
                'link_name' + keyPairDelimiter + menuValue + fieldArrayDelimiter +
                'Name' + keyPairDelimiter + menuValue + fieldArrayDelimiter +
                'Area' + keyPairDelimiter + pageArea + fieldArrayDelimiter +
                'ID' + keyPairDelimiter + pageArea + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes';
              if (taxonomy) {
                jsllFields = jsllFields + fieldArrayDelimiter + 'Scnstp' + keyPairDelimiter + taxonomy;
              }
              var utagFields = 'event_name' + keyPairDelimiter + menuValue + fieldArrayDelimiter +
                'event_area' + keyPairDelimiter + pageArea + fieldArrayDelimiter +
                'link_name' + keyPairDelimiter + menuValue + fieldArrayDelimiter +
                'event_offer' + keyPairDelimiter + taxonomy + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes';
              analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
              analytics.globalfunctions.sendAllUtag(utagFields, $(this));
            });
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if (1) {
          if (typeof utag.runonce[3] == 'undefined') {
            utag.runonce[3] = 1;
            jQuery(document.body).on('blur', 'section.main form input.form-control#ConfirmEmail', function (e) {
              utag.link({
                "customer_email": jQuery("section.main form input.form-control#ConfirmEmail").val()
              })
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if (1) {
          if (typeof utag.runonce[4] == 'undefined') {
            utag.runonce[4] = 1;
            jQuery(document.body).on('blur', 'section.main form input.form-control#Registrant_Dossier_FirstName,form input#firstName', function (e) {
              utag.link({
                "customer_first_name": jQuery("section.main form input.form-control#Registrant_Dossier_FirstName,form input#firstName").val()
              })
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if (1) {
          if (typeof utag.runonce[45] == 'undefined') {
            utag.runonce[45] = 1;
            jQuery(document.body).on('mousedown', 'a.fb', function (e) {
              utag.link({
                "event_name": jQuery(this).attr('title'),
                "event_type": 'click',
                "event_action": (jQuery(this).attr('title').indexOf('Follow') > -1) ? 'follow' : 'share',
                "event_offer": (jQuery(this).attr('ms.ea_offer')) ? jQuery(this).attr('ms.ea_offer') : 'none',
                "event_target": jQuery(this).attr('href'),
                "event_title": (jQuery(this).attr('data-tracking-cta-field-name')) ? jQuery(this).attr('data-tracking-cta-field-name') : jQuery(this).attr('href')
              })
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if ((typeof utag.data['page_name'] != 'undefined' && utag.data['page_name'].toString().toLowerCase() == 'smart partner marketing assessment'.toLowerCase())) {
          if (typeof utag.runonce[77] == 'undefined') {
            utag.runonce[77] = 1;
            jQuery(document.body).on('click', 'button.assesment-button', function (e) {
              utag.link({
                "event_type": 'spm_question_button_click',
                "link_name": this.innerHTML
              })
            })
          }
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if ((typeof utag.data['page_name'] != 'undefined' && utag.data['page_name'].toString().toLowerCase() == 'smart partner marketing assessment'.toLowerCase())) {
            jQuery("input.assesment-checkbox").on('change', function () {
              var ischecked = jQuery(this).is(':checked');
              if (ischecked) {
                utag.link({
                  event_type: "spm_question_checkbox_click",
                  link_name: jQuery(this).val()
                })
              }
              if (!ischecked) {
                utag.link({
                  event_type: "spm_question_checkbox_uncheck",
                  link_name: jQuery(this).val()
                })
              }
            });
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if ((typeof utag.data['page_name'] != 'undefined' && utag.data['page_name'].toString().toLowerCase() == 'Security Practice Campaign'.toLowerCase())) {
          if (typeof utag.runonce[82] == 'undefined') {
            utag.runonce[82] = 1;
            jQuery(document.body).on('blur', 'input#email', function (e) {
              utag.link({
                "customer_email": jQuery('input#email').val().trim().toLowerCase()
              })
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if ((typeof utag.data['dom.pathname'] != 'undefined' && /\/training\/learning-portal$/i.test(utag.data['dom.pathname']))) {
          if (typeof utag.runonce[136] == 'undefined') {
            utag.runonce[136] = 1;
            jQuery(document.body).on('mousedown', 'div.icon-blade-item-content-v4', function (e) {
              utag.link({
                "event_hashtag": jQuery(this).children().find("[href*='assets#']").attr("href").split("#")[1]
              }, null, [18])
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if (1) {
            $(document).submit('keydown', 'input[name="toptask-search"]', function (event) {
              var fieldArrayDelimiter = '|-|';
              var keyPairDelimiter = '|~|';
              if (event.keyCode == 13) {
                var utagFields = 'event_name' + keyPairDelimiter + 'Top Tasks Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                  'search_keyword' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'search_term' + keyPairDelimiter + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                  jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Top Tasks' + fieldArrayDelimiter +
                  'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                  'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                  'Srchq' + keyPairDelimiter + 'Top Tasks Search: ' + $(this).val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                  'Area' + keyPairDelimiter + 'Top Tasks Search Bar' + fieldArrayDelimiter +
                  'link_name' + keyPairDelimiter + 'Initiate Top Tasks Search' + fieldArrayDelimiter +
                  'override' + keyPairDelimiter + 'Yes';
                analytics.globalfunctions.sendAllUtag(utagFields, $(this));
                analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
              }
            });
            $(document).on('mousedown', 'span.search-dropdown-glyph[name="TopTasks"]', function () {
              var fieldArrayDelimiter = '|-|';
              var keyPairDelimiter = '|~|';
              var searchBox = $(this).parents().find("input[name='toptask-search']");
              var utagFields = 'event_name' + keyPairDelimiter + 'Top Tasks Search: ' + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes' + fieldArrayDelimiter +
                'search_keyword' + keyPairDelimiter + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'search_term' + keyPairDelimiter + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
                jsllFields = 'Srchlinkpos' + keyPairDelimiter + 'Top Tasks' + fieldArrayDelimiter +
                'Behavior' + keyPairDelimiter + awa.behavior.SEARCH + fieldArrayDelimiter +
                'ActionType' + keyPairDelimiter + 'search' + fieldArrayDelimiter +
                'Srchq' + keyPairDelimiter + 'Top Tasks Search: ' + searchBox.val().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") + fieldArrayDelimiter +
                'Area' + keyPairDelimiter + 'Top Tasks Search Bar' + fieldArrayDelimiter +
                'link_name' + keyPairDelimiter + 'Initiate Top Tasks Search' + fieldArrayDelimiter +
                'override' + keyPairDelimiter + 'Yes';
              analytics.globalfunctions.sendAllUtag(utagFields, $(this));
              analytics.globalfunctions.sendAllJSLL(jsllFields, $(this));
            });
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if (1) {
            var asset_types, program_name, page_type_assembled;
            $('span[data-original-title="Asset Type"]').each(function () {
              if (asset_types) {
                asset_types = asset_types + ',' + $(this).attr("data-content");
              } else {
                asset_types = $(this).attr("data-content");
              }
            });
            $('span[data-original-title="Programs"]').each(function () {
              if (program_name) {
                program_name = program_name + ',' + $(this).attr("data-content");
              } else {
                program_name = $(this).attr("data-content");
              }
            });
            if (asset_types || program_name) {
              page_type_assembled = program_name + ',' + asset_types;
            }
            if (page_type_assembled) {
              utag_data.page_type = page_type_assembled
            }
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        try {
          if (1) {
            $('div.bot-panel').attr('data-tracking-bladename', 'Bot Panel')
          }
        } catch (e) {
          utag.DB(e)
        }
      } catch (e) {
        utag.DB(e)
      };
      try {
        if ((typeof utag.data['dom.pathname'] != 'undefined' && /\/solutions\/my-solutions\/solutiondetails$/i.test(utag.data['dom.pathname']))) {
          if (typeof utag.runonce[189] == 'undefined') {
            utag.runonce[189] = 1;
            jQuery(document.body).on('mousedown', '#modal-window-cancel', function (e) {
              utag.link({
                "tealium_event": 'modal_close',
                "link_name": 'modal_x_btn',
                "active_tab": jQuery(this).parents(".modal-dialog").find("li.active").text()
              })
            });
          }
        }
      } catch (e) {
        utag.DB(e)
      };
    }
  })
  if (utag.cfg.readywait || utag.cfg.waittimer) {
    utag.loader.EV('', 'ready', function (a) {
      if (utag.loader.rf == 0) {
        utag.loader.rf = 1;
        utag.cfg.readywait = 1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function () {
          utag.loader.PINIT()
        }, utag.cfg.waittimer || 1);
      }
    })
  } else {
    utag.loader.PINIT()
  }
}
//tealium universal tag - utag.41 ut4.0.202103071710, Copyright 2021 Tealium.com Inc. All Rights Reserved.
window.analytics = window.analytics || {};
window.analytics.data = window.analytics.data || {};
window.analytics.utilities = window.analytics.utilities || {};
window.analytics.awaUtilities = window.analytics.awaUtilities || {};
var util = window.analytics.utilities,
  awaUtil = window.analytics.awaUtilities,
  data = window.analytics.data,
  awaLoader;
var msAud = util.getMetaTagContent('awa-usersubtype');
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;
    if (utag === undefined) {
      utag = {};
    }
    if (utag.ut === undefined) {
      utag.ut = {};
    }
    if (utag.ut.loader === undefined) {
      u.loader = function (o) {
        var a, b, c, l;
        a = document;
        if (o.type === "iframe") {
          b = a.createElement("iframe");
          b.setAttribute("height", "1");
          b.setAttribute("width", "1");
          b.setAttribute("style", "display:none");
          b.setAttribute("src", o.src);
        } else if (o.type === "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
          b.src = o.src;
          return;
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
          b.src = o.src;
        }
        if (o.id) {
          b.id = o.id;
        }
        if (typeof o.cb === "function") {
          if (b.addEventListener) {
            b.addEventListener("load", function () {
              o.cb();
            }, false);
          } else {
            b.onreadystatechange = function () {
              if (this.readyState === "complete" || this.readyState === "loaded") {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to " + l + ": " + o.src);
          if (l === "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b);
          }
        }
      };
    } else {
      u.loader = utag.ut.loader;
    }
    u.ev = {
      'view': 1
    };
    u.initialized = false;
    u.map = {
      "jsll_app_id": "account_id",
      "jsll_base_url": "base_url",
      "awa_market": "awa_market",
      "page_type": "pageType,page_type"
    };
    u.extend = [];
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        var c, d, e, f, i;
        u.data = {
          "account_id": "JsllTest",
          "base_url": "//az725175.vo.msecnd.net/scripts/jsll-4.js",
          "awa_market": "en-us",
          "page_type": ""
        };
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        var initJsll = function () {
          var config = {
            useBeacon: true,
            syncMuid: true,
            useDefaultContentName: true,
            muidDomain: 'microsoft.com',
            useShortNameForContentBlob: false,
            coreData: {
              appId: u.data.account_id,
              pageType: u.data.page_type
            },
            debounceMs: {
              scroll: 300,
              resize: 2000
            },
            autoCapture: {
              pageView: true,
              onLoad: true,
              onUnload: true,
              click: false,
              scroll: true,
              resize: true,
              addIn: true,
              jsError: false,
              perf: true,
              context: false,
              assets: true,
              lineage: true
            }
          };
          if (msAud > 0) {
            config.isLoggedIn = true;
            config.shareAuthStatus = true;
            config.authMethod = 1;
          }
          awa.init(config);
        };
        var overrideJsll = function () {
          var overrideValues = {
            appId: u.data.account_id,
            market: u.data.awa_market,
            pageType: u.data.page_type,
            isManual: true
          };
          awa.ct.capturePageView(overrideValues);
          var coreData = {
            appId: u.data.account_id,
            market: u.data.awa_market,
            pageType: u.data.page_type
          };
          awa.extendCoreData(coreData);
        };
        setTimeout(function () {
          if (typeof awa === 'object') {
            if (awa.isInitialized) {
              if (typeof awa.getConfig === 'function') {
                var a = awa.getConfig();
                if (a.coreData.appId !== 'partner') {
                  overrideJsll();
                }
              } else {
                overrideJsll();
              }
            } else {
              initJsll();
            }
          } else {
            u.loader_cb = function () {
              u.initialized = true;
              initJsll();
            };
            if (!u.initialized) {
              u.loader({
                "type": "script",
                "src": u.data.base_url,
                "cb": u.loader_cb,
                "loc": "script",
                "id": 'utag_41'
              });
            } else {
              u.loader_cb();
            }
          }
        }, 600);
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("41", "msft.mpn");
} catch (error) {
  utag.DB(error);
}
(function () {
  if (typeof utag != 'undefined' && !utag_condload) {
    utag.initcatch = true;
    for (var i in utag.loader.GV(utag.loader.cfg)) {
      var b = utag.loader.cfg[i];
      if (b.load != 4) {
        utag.initcatch = false;
        break
      };
      if (b.wait == 1) {
        utag.initcatch = false;
        break
      }
    };
    if (utag.initcatch) utag.handler.INIT();
  }
})();