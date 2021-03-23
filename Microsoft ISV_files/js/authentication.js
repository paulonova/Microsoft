var AuthenticationContext = function () {
  "use strict";
  return AuthenticationContext = function (n) {
    if (this.REQUEST_TYPE = {
        LOGIN: "LOGIN",
        RENEW_TOKEN: "RENEW_TOKEN",
        UNKNOWN: "UNKNOWN"
      }, this.RESPONSE_TYPE = {
        ID_TOKEN_TOKEN: "id_token token",
        TOKEN: "token"
      }, this.CONSTANTS = {
        ACCESS_TOKEN: "access_token",
        EXPIRES_IN: "expires_in",
        ID_TOKEN: "id_token",
        ERROR_DESCRIPTION: "error_description",
        SESSION_STATE: "session_state",
        ERROR: "error",
        STORAGE: {
          TOKEN_KEYS: "adal.token.keys",
          ACCESS_TOKEN_KEY: "adal.access.token.key",
          EXPIRATION_KEY: "adal.expiration.key",
          STATE_LOGIN: "adal.state.login",
          STATE_RENEW: "adal.state.renew",
          NONCE_IDTOKEN: "adal.nonce.idtoken",
          SESSION_STATE: "adal.session.state",
          USERNAME: "adal.username",
          IDTOKEN: "adal.idtoken",
          ERROR: "adal.error",
          ERROR_DESCRIPTION: "adal.error.description",
          LOGIN_REQUEST: "adal.login.request",
          LOGIN_ERROR: "adal.login.error",
          RENEW_STATUS: "adal.token.renew.status",
          ANGULAR_LOGIN_REQUEST: "adal.angular.login.request"
        },
        RESOURCE_DELIMETER: "|",
        CACHE_DELIMETER: "||",
        LOADFRAME_TIMEOUT: 6e3,
        TOKEN_RENEW_STATUS_CANCELED: "Canceled",
        TOKEN_RENEW_STATUS_COMPLETED: "Completed",
        TOKEN_RENEW_STATUS_IN_PROGRESS: "In Progress",
        LOGGING_LEVEL: {
          ERROR: 0,
          WARN: 1,
          INFO: 2,
          VERBOSE: 3
        },
        LEVEL_STRING_MAP: {
          0: "ERROR:",
          1: "WARNING:",
          2: "INFO:",
          3: "VERBOSE:"
        },
        POPUP_WIDTH: 483,
        POPUP_HEIGHT: 600
      }, AuthenticationContext.prototype._singletonInstance) return AuthenticationContext.prototype._singletonInstance;
    if (AuthenticationContext.prototype._singletonInstance = this, this.instance = "https://login.microsoftonline.com/", this.config = {}, this.callback = null, this.popUp = !1, this.isAngular = !1, this._user = null, this._activeRenewals = {}, this._loginInProgress = !1, this._acquireTokenInProgress = !1, this._renewStates = [], this._callBackMappedToRenewStates = {}, this._callBacksMappedToRenewStates = {}, this._openedWindows = [], this._requestType = this.REQUEST_TYPE.LOGIN, window._adalInstance = this, n.displayCall && typeof n.displayCall != "function") throw new Error("displayCall is not a function");
    if (!n.clientId) throw new Error("clientId is required");
    this.config = this._cloneConfig(n);
    this.config.navigateToLoginRequestUrl === undefined && (this.config.navigateToLoginRequestUrl = !0);
    this.config.popUp && (this.popUp = !0);
    this.config.callback && typeof this.config.callback == "function" && (this.callback = this.config.callback);
    this.config.instance && (this.instance = this.config.instance);
    this.config.loginResource || (this.config.loginResource = this.config.clientId);
    this.config.redirectUri || (this.config.redirectUri = window.location.href.split("?")[0].split("#")[0]);
    this.config.postLogoutRedirectUri || (this.config.postLogoutRedirectUri = window.location.href.split("?")[0].split("#")[0]);
    this.config.anonymousEndpoints || (this.config.anonymousEndpoints = []);
    this.config.isAngular && (this.isAngular = this.config.isAngular);
    this.config.loadFrameTimeout && (this.CONSTANTS.LOADFRAME_TIMEOUT = this.config.loadFrameTimeout)
  }, typeof window != "undefined" && (window.Logging = {
    piiLoggingEnabled: !1,
    level: 0,
    log: function () {}
  }), AuthenticationContext.prototype.login = function () {
    var n, t, i;
    if (this._loginInProgress) {
      this.info("Login in progress");
      return
    }
    this._loginInProgress = !0;
    n = this._guid();
    this.config.state = n;
    this._idTokenNonce = this._guid();
    t = this._getItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST);
    t && t !== "" ? this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST, "") : t = window.location.href;
    this.verbose("Expected state: " + n + " startPage:" + t);
    this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, t);
    this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, "");
    this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, n, !0);
    this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce, !0);
    this._saveItem(this.CONSTANTS.STORAGE.ERROR, "");
    this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, "");
    i = this._getNavigateUrl("id_token", null) + "&nonce=" + encodeURIComponent(this._idTokenNonce);
    this.config.displayCall ? this.config.displayCall(i) : this.popUp ? (this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, ""), this._renewStates.push(n), this.registerCallback(n, this.config.clientId, this.callback), this._loginPopup(i)) : this.promptUser(i)
  }, AuthenticationContext.prototype._openPopup = function (n, t, i, r) {
    try {
      var f = window.screenLeft ? window.screenLeft : window.screenX,
        e = window.screenTop ? window.screenTop : window.screenY,
        o = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        s = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        h = o / 2 - i / 2 + f,
        c = s / 2 - r / 2 + e,
        u = window.open(n, t, "width=" + i + ", height=" + r + ", top=" + c + ", left=" + h);
      return u.focus && u.focus(), u
    } catch (l) {
      return this.warn("Error opening popup, " + l.message), this._loginInProgress = !1, this._acquireTokenInProgress = !1, null
    }
  }, AuthenticationContext.prototype._handlePopupError = function (n, t, i, r, u) {
    this.warn(r);
    this._saveItem(this.CONSTANTS.STORAGE.ERROR, i);
    this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, r);
    this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, u);
    t && this._activeRenewals[t] && (this._activeRenewals[t] = null);
    this._loginInProgress = !1;
    this._acquireTokenInProgress = !1;
    n && n(r, null, i)
  }, AuthenticationContext.prototype._loginPopup = function (n, t, i) {
    var u = this._openPopup(n, "login", this.CONSTANTS.POPUP_WIDTH, this.CONSTANTS.POPUP_HEIGHT),
      o = i || this.callback,
      s, f, h, r, e;
    if (u == null) {
      s = "Error opening popup";
      f = "Popup Window is null. This can happen if you are using IE";
      this._handlePopupError(o, t, s, f, f);
      return
    }
    this._openedWindows.push(u);
    h = this.config.redirectUri.indexOf("#") != -1 ? this.config.redirectUri.split("#")[0] : this.config.redirectUri;
    r = this;
    e = window.setInterval(function () {
      var f, n, i;
      if (!u || u.closed || u.closed === undefined) {
        f = "Popup Window closed";
        n = "Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";
        r.isAngular && r._broadcast("adal:popUpClosed", n + r.CONSTANTS.RESOURCE_DELIMETER + f);
        r._handlePopupError(o, t, f, n, n);
        window.clearInterval(e);
        return
      }
      try {
        if (i = u.location, encodeURI(i.href).indexOf(encodeURI(h)) != -1) {
          r.isAngular ? r._broadcast("adal:popUpHashChanged", i.hash) : r.handleWindowCallback(i.hash);
          window.clearInterval(e);
          r._loginInProgress = !1;
          r._acquireTokenInProgress = !1;
          r.info("Closing popup window");
          r._openedWindows = [];
          u.close();
          return
        }
      } catch (s) {}
    }, 1)
  }, AuthenticationContext.prototype._broadcast = function (n, t) {
    (function () {
      function n(n, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: undefined
        };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(n, t.bubbles, t.cancelable, t.detail), i
      }
      if (typeof window.CustomEvent == "function") return !1;
      n.prototype = window.Event.prototype;
      window.CustomEvent = n
    })();
    var i = new CustomEvent(n, {
      detail: t
    });
    window.dispatchEvent(i)
  }, AuthenticationContext.prototype.loginInProgress = function () {
    return this._loginInProgress
  }, AuthenticationContext.prototype._hasResource = function (n) {
    var t = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);
    return t && !this._isEmpty(t) && t.indexOf(n + this.CONSTANTS.RESOURCE_DELIMETER) > -1
  }, AuthenticationContext.prototype.getCachedToken = function (n) {
    if (!this._hasResource(n)) return null;
    var i = this._getItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + n),
      t = this._getItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + n),
      r = this.config.expireOffsetSeconds || 300;
    return t && t > this._now() + r ? i : (this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + n, ""), this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + n, 0), null)
  }, AuthenticationContext.prototype.getCachedUser = function () {
    if (this._user) return this._user;
    var n = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);
    return this._user = this._createUser(n), this._user
  }, AuthenticationContext.prototype.registerCallback = function (n, t, i) {
    this._activeRenewals[t] = n;
    this._callBacksMappedToRenewStates[n] || (this._callBacksMappedToRenewStates[n] = []);
    var r = this;
    this._callBacksMappedToRenewStates[n].push(i);
    this._callBackMappedToRenewStates[n] || (this._callBackMappedToRenewStates[n] = function (i, u, f, e) {
      r._activeRenewals[t] = null;
      for (var o = 0; o < r._callBacksMappedToRenewStates[n].length; ++o) try {
        r._callBacksMappedToRenewStates[n][o](i, u, f, e)
      } catch (f) {
        r.warn(f)
      }
      r._callBacksMappedToRenewStates[n] = null;
      r._callBackMappedToRenewStates[n] = null
    })
  }, AuthenticationContext.prototype._renewToken = function (n, t, i) {
    var f, u, r;
    this.info("renewToken is called for resource:" + n);
    f = this._addAdalFrame("adalRenewFrame" + n);
    u = this._guid() + "|" + n;
    this.config.state = u;
    this._renewStates.push(u);
    this.verbose("Renew token Expected state: " + u);
    i = i || "token";
    r = this._urlRemoveQueryStringParameter(this._getNavigateUrl(i, n), "prompt");
    i === this.RESPONSE_TYPE.ID_TOKEN_TOKEN && (this._idTokenNonce = this._guid(), this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce, !0), r += "&nonce=" + encodeURIComponent(this._idTokenNonce));
    r = r + "&prompt=none";
    r = this._addHintParameters(r);
    this.registerCallback(u, n, t);
    this.verbosePii("Navigate to:" + r);
    f.src = "about:blank";
    this._loadFrameTimeout(r, "adalRenewFrame" + n, n)
  }, AuthenticationContext.prototype._renewIdToken = function (n, t) {
    var u, r;
    this.info("renewIdToken is called");
    u = this._addAdalFrame("adalIdTokenFrame");
    r = this._guid() + "|" + this.config.clientId;
    this._idTokenNonce = this._guid();
    this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce, !0);
    this.config.state = r;
    this._renewStates.push(r);
    this.verbose("Renew Idtoken Expected state: " + r);
    var f = t === null || typeof t == "undefined" ? null : this.config.clientId,
      t = t || "id_token",
      i = this._urlRemoveQueryStringParameter(this._getNavigateUrl(t, f), "prompt");
    i = i + "&prompt=none";
    i = this._addHintParameters(i);
    i += "&nonce=" + encodeURIComponent(this._idTokenNonce);
    this.registerCallback(r, this.config.clientId, n);
    this.verbosePii("Navigate to:" + i);
    u.src = "about:blank";
    this._loadFrameTimeout(i, "adalIdTokenFrame", this.config.clientId)
  }, AuthenticationContext.prototype._urlContainsQueryStringParameter = function (n, t) {
    var i = new RegExp("[\\?&]" + n + "=");
    return i.test(t)
  }, AuthenticationContext.prototype._urlRemoveQueryStringParameter = function (n, t) {
    var i = new RegExp("(\\&" + t + "=)[^&]+");
    return n = n.replace(i, ""), i = new RegExp("(" + t + "=)[^&]+&"), n = n.replace(i, ""), i = new RegExp("(" + t + "=)[^&]+"), n.replace(i, "")
  }, AuthenticationContext.prototype._loadFrameTimeout = function (n, t, i) {
    this.verbose("Set loading state to pending for: " + i);
    this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS + i, this.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS);
    this._loadFrame(n, t);
    var r = this;
    setTimeout(function () {
      if (r._getItem(r.CONSTANTS.STORAGE.RENEW_STATUS + i) === r.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS) {
        r.verbose("Loading frame has timed out after: " + r.CONSTANTS.LOADFRAME_TIMEOUT / 1e3 + " seconds for resource " + i);
        var n = r._activeRenewals[i];
        n && r._callBackMappedToRenewStates[n] && r._callBackMappedToRenewStates[n]("Token renewal operation failed due to timeout", null, "Token Renewal Failed");
        r._saveItem(r.CONSTANTS.STORAGE.RENEW_STATUS + i, r.CONSTANTS.TOKEN_RENEW_STATUS_CANCELED)
      }
    }, r.CONSTANTS.LOADFRAME_TIMEOUT)
  }, AuthenticationContext.prototype._loadFrame = function (n, t) {
    var i = this,
      r;
    i.info("LoadFrame: " + t);
    r = t;
    setTimeout(function () {
      var t = i._addAdalFrame(r);
      (t.src === "" || t.src === "about:blank") && (t.src = n, i._loadFrame(n, r))
    }, 500)
  }, AuthenticationContext.prototype.acquireToken = function (n, t) {
    if (this._isEmpty(n)) {
      this.warn("resource is required");
      t("resource is required", null, "resource is required");
      return
    }
    var i = this.getCachedToken(n);
    if (i) {
      this.info("Token is already in cache for resource:" + n);
      t(null, i, null);
      return
    }
    if (!this._user && !(this.config.extraQueryParameter && this.config.extraQueryParameter.indexOf("login_hint") !== -1)) {
      this.warn("User login is required");
      t("User login is required", null, "login required");
      return
    }
    this._activeRenewals[n] ? this.registerCallback(this._activeRenewals[n], n, t) : (this._requestType = this.REQUEST_TYPE.RENEW_TOKEN, n === this.config.clientId ? this._user ? (this.verbose("renewing idtoken"), this._renewIdToken(t)) : (this.verbose("renewing idtoken and access_token"), this._renewIdToken(t, this.RESPONSE_TYPE.ID_TOKEN_TOKEN)) : this._user ? (this.verbose("renewing access_token"), this._renewToken(n, t)) : (this.verbose("renewing idtoken and access_token"), this._renewToken(n, t, this.RESPONSE_TYPE.ID_TOKEN_TOKEN)))
  }, AuthenticationContext.prototype.acquireTokenPopup = function (n, t, i, r) {
    var f, u;
    if (this._isEmpty(n)) {
      this.warn("resource is required");
      r("resource is required", null, "resource is required");
      return
    }
    if (!this._user) {
      this.warn("User login is required");
      r("User login is required", null, "login required");
      return
    }
    if (this._acquireTokenInProgress) {
      this.warn("Acquire token interactive is already in progress");
      r("Acquire token interactive is already in progress", null, "Acquire token interactive is already in progress");
      return
    }
    if (f = this._guid() + "|" + n, this.config.state = f, this._renewStates.push(f), this._requestType = this.REQUEST_TYPE.RENEW_TOKEN, this.verbose("Renew token Expected state: " + f), u = this._urlRemoveQueryStringParameter(this._getNavigateUrl("token", n), "prompt"), u = u + "&prompt=select_account", t && (u += t), i && u.indexOf("&claims") === -1) u += "&claims=" + encodeURIComponent(i);
    else if (i && u.indexOf("&claims") !== -1) throw new Error("Claims cannot be passed as an extraQueryParameter");
    u = this._addHintParameters(u);
    this._acquireTokenInProgress = !0;
    this.info("acquireToken interactive is called for the resource " + n);
    this.registerCallback(f, n, r);
    this._loginPopup(u, n, r)
  }, AuthenticationContext.prototype.acquireTokenRedirect = function (n, t, i) {
    var u, f, r;
    if (this._isEmpty(n)) {
      this.warn("resource is required");
      u("resource is required", null, "resource is required");
      return
    }
    if (u = this.callback, !this._user) {
      this.warn("User login is required");
      u("User login is required", null, "login required");
      return
    }
    if (this._acquireTokenInProgress) {
      this.warn("Acquire token interactive is already in progress");
      u("Acquire token interactive is already in progress", null, "Acquire token interactive is already in progress");
      return
    }
    if (f = this._guid() + "|" + n, this.config.state = f, this.verbose("Renew token Expected state: " + f), r = this._urlRemoveQueryStringParameter(this._getNavigateUrl("token", n), "prompt"), r = r + "&prompt=select_account", t && (r += t), i && r.indexOf("&claims") === -1) r += "&claims=" + encodeURIComponent(i);
    else if (i && r.indexOf("&claims") !== -1) throw new Error("Claims cannot be passed as an extraQueryParameter");
    r = this._addHintParameters(r);
    this._acquireTokenInProgress = !0;
    this.info("acquireToken interactive is called for the resource " + n);
    this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, window.location.href);
    this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, f, !0);
    this.promptUser(r)
  }, AuthenticationContext.prototype.promptUser = function (n) {
    n ? (this.infoPii("Navigate to:" + n), window.location.replace(n)) : this.info("Navigate url is empty")
  }, AuthenticationContext.prototype.clearCache = function () {
    var n, t;
    if (this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, ""), this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST, ""), this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, ""), this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, ""), this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, ""), this._renewStates = [], this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, ""), this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, ""), this._saveItem(this.CONSTANTS.STORAGE.ERROR, ""), this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, ""), this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, ""), this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, ""), n = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS), !this._isEmpty(n))
      for (n = n.split(this.CONSTANTS.RESOURCE_DELIMETER), t = 0; t < n.length && n[t] !== ""; t++) this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + n[t], ""), this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + n[t], 0);
    this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, "")
  }, AuthenticationContext.prototype.clearCacheForResource = function (n) {
    this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, "");
    this._saveItem(this.CONSTANTS.STORAGE.ERROR, "");
    this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, "");
    this._hasResource(n) && (this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + n, ""), this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + n, 0))
  }, AuthenticationContext.prototype.logOut = function () {
    var n, t, i;
    this.clearCache();
    this._user = null;
    this.config.logOutUri ? n = this.config.logOutUri : (t = "common", i = "", this.config.tenant && (t = this.config.tenant), this.config.postLogoutRedirectUri && (i = "post_logout_redirect_uri=" + encodeURIComponent(this.config.postLogoutRedirectUri)), n = this.instance + t + "/oauth2/logout?" + i);
    this.infoPii("Logout navigate to: " + n);
    this.promptUser(n)
  }, AuthenticationContext.prototype._isEmpty = function (n) {
    return typeof n == "undefined" || !n || 0 === n.length
  }, AuthenticationContext.prototype.getUser = function (n) {
    if (typeof n != "function") throw new Error("callback is not a function");
    if (this._user) {
      n(null, this._user);
      return
    }
    var t = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);
    this._isEmpty(t) ? (this.warn("User information is not available"), n("User information is not available", null)) : (this.info("User exists in cache: "), this._user = this._createUser(t), n(null, this._user))
  }, AuthenticationContext.prototype._addHintParameters = function (n) {
    if (this._user && this._user.profile)
      if (this._user.profile.sid && n.indexOf("&prompt=none") !== -1) this._urlContainsQueryStringParameter("sid", n) || (n += "&sid=" + encodeURIComponent(this._user.profile.sid));
      else if (this._user.profile.upn && (this._urlContainsQueryStringParameter("login_hint", n) || (n += "&login_hint=" + encodeURIComponent(this._user.profile.upn)), !this._urlContainsQueryStringParameter("domain_hint", n) && this._user.profile.upn.indexOf("@") > -1)) {
      var t = this._user.profile.upn.split("@");
      n += "&domain_hint=" + encodeURIComponent(t[t.length - 1])
    }
    return n
  }, AuthenticationContext.prototype._createUser = function (n) {
    var i = null,
      t = this._extractIdToken(n);
    return t && t.hasOwnProperty("aud") && (t.aud.toLowerCase() === this.config.clientId.toLowerCase() ? (i = {
      userName: "",
      profile: t
    }, t.hasOwnProperty("upn") ? i.userName = t.upn : t.hasOwnProperty("email") && (i.userName = t.email)) : this.warn("IdToken has invalid aud field")), i
  }, AuthenticationContext.prototype._getHash = function (n) {
    return n.indexOf("#/") > -1 ? n = n.substring(n.indexOf("#/") + 2) : n.indexOf("#") > -1 && (n = n.substring(1)), n
  }, AuthenticationContext.prototype.isCallback = function (n) {
    n = this._getHash(n);
    var t = this._deserialize(n);
    return t.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) || t.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) || t.hasOwnProperty(this.CONSTANTS.ID_TOKEN)
  }, AuthenticationContext.prototype.getLoginError = function () {
    return this._getItem(this.CONSTANTS.STORAGE.LOGIN_ERROR)
  }, AuthenticationContext.prototype.getRequestInfo = function (n) {
    var i, t, u, f, r;
    if (n = this._getHash(n), i = this._deserialize(n), t = {
        valid: !1,
        parameters: {},
        stateMatch: !1,
        stateResponse: "",
        requestType: this.REQUEST_TYPE.UNKNOWN
      }, i && (t.parameters = i, i.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) || i.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) || i.hasOwnProperty(this.CONSTANTS.ID_TOKEN))) {
      if (t.valid = !0, u = "", i.hasOwnProperty("state")) this.verbose("State: " + i.state), u = i.state;
      else return this.warn("No state returned"), t;
      if (t.stateResponse = u, this._matchState(t)) return t;
      if (!t.stateMatch && window.parent)
        for (t.requestType = this._requestType, f = this._renewStates, r = 0; r < f.length; r++)
          if (f[r] === t.stateResponse) {
            t.stateMatch = !0;
            break
          }
    }
    return t
  }, AuthenticationContext.prototype._matchNonce = function (n) {
    var t = this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN),
      i;
    if (t)
      for (t = t.split(this.CONSTANTS.CACHE_DELIMETER), i = 0; i < t.length; i++)
        if (t[i] === n.profile.nonce) return !0;
    return !1
  }, AuthenticationContext.prototype._matchState = function (n) {
    var r = this._getItem(this.CONSTANTS.STORAGE.STATE_LOGIN),
      i, t;
    if (r)
      for (r = r.split(this.CONSTANTS.CACHE_DELIMETER), t = 0; t < r.length; t++)
        if (r[t] === n.stateResponse) return n.requestType = this.REQUEST_TYPE.LOGIN, n.stateMatch = !0, !0;
    if (i = this._getItem(this.CONSTANTS.STORAGE.STATE_RENEW), i)
      for (i = i.split(this.CONSTANTS.CACHE_DELIMETER), t = 0; t < i.length; t++)
        if (i[t] === n.stateResponse) return n.requestType = this.REQUEST_TYPE.RENEW_TOKEN, n.stateMatch = !0, !0;
    return !1
  }, AuthenticationContext.prototype._getResourceFromState = function (n) {
    if (n) {
      var t = n.indexOf("|");
      if (t > -1 && t + 1 < n.length) return n.substring(t + 1)
    }
    return ""
  }, AuthenticationContext.prototype.saveTokenFromHash = function (n) {
    var t, i;
    this.info("State status:" + n.stateMatch + "; Request type:" + n.requestType);
    this._saveItem(this.CONSTANTS.STORAGE.ERROR, "");
    this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, "");
    t = this._getResourceFromState(n.stateResponse);
    n.parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) ? (this.infoPii("Error :" + n.parameters.error + "; Error description:" + n.parameters[this.CONSTANTS.ERROR_DESCRIPTION]), this._saveItem(this.CONSTANTS.STORAGE.ERROR, n.parameters.error), this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, n.parameters[this.CONSTANTS.ERROR_DESCRIPTION]), n.requestType === this.REQUEST_TYPE.LOGIN && (this._loginInProgress = !1, this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, n.parameters.error_description))) : n.stateMatch ? (this.info("State is right"), n.parameters.hasOwnProperty(this.CONSTANTS.SESSION_STATE) && this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, n.parameters[this.CONSTANTS.SESSION_STATE]), n.parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) && (this.info("Fragment has access token"), this._hasResource(t) || (i = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || "", this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, i + t + this.CONSTANTS.RESOURCE_DELIMETER)), this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + t, n.parameters[this.CONSTANTS.ACCESS_TOKEN]), this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + t, this._expiresIn(n.parameters[this.CONSTANTS.EXPIRES_IN]))), n.parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN) && (this.info("Fragment has id token"), this._loginInProgress = !1, this._user = this._createUser(n.parameters[this.CONSTANTS.ID_TOKEN]), this._user && this._user.profile ? this._matchNonce(this._user) ? (this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, n.parameters[this.CONSTANTS.ID_TOKEN]), t = this.config.loginResource ? this.config.loginResource : this.config.clientId, this._hasResource(t) || (i = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || "", this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, i + t + this.CONSTANTS.RESOURCE_DELIMETER)), this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + t, n.parameters[this.CONSTANTS.ID_TOKEN]), this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + t, this._user.profile.exp)) : (this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, "Nonce received: " + this._user.profile.nonce + " is not same as requested: " + this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN)), this._user = null) : (n.parameters.error = "invalid id_token", n.parameters.error_description = "Invalid id_token. id_token: " + n.parameters[this.CONSTANTS.ID_TOKEN], this._saveItem(this.CONSTANTS.STORAGE.ERROR, "invalid id_token"), this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, "Invalid id_token. id_token: " + n.parameters[this.CONSTANTS.ID_TOKEN])))) : (n.parameters.error = "Invalid_state", n.parameters.error_description = "Invalid_state. state: " + n.stateResponse, this._saveItem(this.CONSTANTS.STORAGE.ERROR, "Invalid_state"), this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, "Invalid_state. state: " + n.stateResponse));
    this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS + t, this.CONSTANTS.TOKEN_RENEW_STATUS_COMPLETED)
  }, AuthenticationContext.prototype.getResourceForEndpoint = function (n) {
    var t, i;
    if (this.config && this.config.anonymousEndpoints)
      for (t = 0; t < this.config.anonymousEndpoints.length; t++)
        if (n.indexOf(this.config.anonymousEndpoints[t]) > -1) return null;
    if (this.config && this.config.endpoints)
      for (i in this.config.endpoints)
        if (n.indexOf(i) > -1) return this.config.endpoints[i];
    if (n.indexOf("http://") > -1 || n.indexOf("https://") > -1) {
      if (this._getHostFromUri(n) === this._getHostFromUri(this.config.redirectUri)) return this.config.loginResource
    } else return this.config.loginResource;
    return null
  }, AuthenticationContext.prototype._getHostFromUri = function (n) {
    var t = String(n).replace(/^(https?:)\/\//, "");
    return t.split("/")[0]
  }, AuthenticationContext.prototype.handleWindowCallback = function (n) {
    var t, r, i, f, e, u, o, s;
    if (n == null && (n = window.location.hash), this.isCallback(n)) {
      t = null;
      r = !1;
      this._openedWindows.length > 0 && this._openedWindows[this._openedWindows.length - 1].opener && this._openedWindows[this._openedWindows.length - 1].opener._adalInstance ? (t = this._openedWindows[this._openedWindows.length - 1].opener._adalInstance, r = !0) : window.parent && window.parent._adalInstance && (t = window.parent._adalInstance);
      i = t.getRequestInfo(n);
      u = null;
      e = r || window.parent !== window ? t._callBackMappedToRenewStates[i.stateResponse] : t.callback;
      t.info("Returned from redirect url");
      t.saveTokenFromHash(i);
      i.requestType === this.REQUEST_TYPE.RENEW_TOKEN && window.parent ? (window.parent !== window ? t.verbose("Window is in iframe, acquiring token silently") : t.verbose("acquiring token interactive in progress"), f = i.parameters[t.CONSTANTS.ACCESS_TOKEN] || i.parameters[t.CONSTANTS.ID_TOKEN], u = t.CONSTANTS.ACCESS_TOKEN) : i.requestType === this.REQUEST_TYPE.LOGIN && (f = i.parameters[t.CONSTANTS.ID_TOKEN], u = t.CONSTANTS.ID_TOKEN);
      o = i.parameters[t.CONSTANTS.ERROR_DESCRIPTION];
      s = i.parameters[t.CONSTANTS.ERROR];
      try {
        e && e(o, f, s, u)
      } catch (h) {
        t.error("Error occurred in user defined callback function: " + h)
      }
      window.parent !== window || r || (t.config.navigateToLoginRequestUrl ? window.location.href = t._getItem(t.CONSTANTS.STORAGE.LOGIN_REQUEST) : window.location.hash = "")
    }
  }, AuthenticationContext.prototype._getNavigateUrl = function (n, t) {
    var r = "common",
      i;
    return this.config.tenant && (r = this.config.tenant), i = this.instance + r + "/oauth2/authorize" + this._serialize(n, this.config, t) + this._addLibMetadata(), this.info("Navigate url:" + i), i
  }, AuthenticationContext.prototype._extractIdToken = function (n) {
    var i = this._decodeJwt(n),
      r, t;
    if (!i) return null;
    try {
      return (r = i.JWSPayload, t = this._base64DecodeStringUrlSafe(r), !t) ? (this.info("The returned id_token could not be base64 url safe decoded."), null) : JSON.parse(t)
    } catch (u) {
      this.error("The returned id_token could not be decoded", u)
    }
    return null
  }, AuthenticationContext.prototype._base64DecodeStringUrlSafe = function (n) {
    return n = n.replace(/-/g, "+").replace(/_/g, "/"), window.atob ? decodeURIComponent(escape(window.atob(n))) : decodeURIComponent(escape(this._decode(n)))
  }, AuthenticationContext.prototype._decode = function (n) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      u, o, s, c, l, t, r, h, a, f, i;
    if (n = String(n).replace(/=+$/, ""), u = n.length, u % 4 == 1) throw new Error("The token to be decoded is not correctly encoded.");
    for (f = "", i = 0; i < u; i += 4) {
      if (o = e.indexOf(n.charAt(i)), s = e.indexOf(n.charAt(i + 1)), c = e.indexOf(n.charAt(i + 2)), l = e.indexOf(n.charAt(i + 3)), i + 2 === u - 1) {
        t = o << 18 | s << 12 | c << 6;
        r = t >> 16 & 255;
        h = t >> 8 & 255;
        f += String.fromCharCode(r, h);
        break
      } else if (i + 1 === u - 1) {
        t = o << 18 | s << 12;
        r = t >> 16 & 255;
        f += String.fromCharCode(r);
        break
      }
      t = o << 18 | s << 12 | c << 6 | l;
      r = t >> 16 & 255;
      h = t >> 8 & 255;
      a = t & 255;
      f += String.fromCharCode(r, h, a)
    }
    return f
  }, AuthenticationContext.prototype._decodeJwt = function (n) {
    var i, t;
    return this._isEmpty(n) ? null : (i = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, t = i.exec(n), !t || t.length < 4) ? (this.warn("The returned id_token is not parseable."), null) : {
      header: t[1],
      JWSPayload: t[2],
      JWSSig: t[3]
    }
  }, AuthenticationContext.prototype._convertUrlSafeToRegularBase64EncodedString = function (n) {
    return n.replace("-", "+").replace("_", "/")
  }, AuthenticationContext.prototype._serialize = function (n, t, i) {
    var r = [],
      u;
    return t !== null && (r.push("?response_type=" + n), r.push("client_id=" + encodeURIComponent(t.clientId)), i && r.push("resource=" + encodeURIComponent(i)), r.push("redirect_uri=" + encodeURIComponent(t.redirectUri)), r.push("state=" + encodeURIComponent(t.state)), t.hasOwnProperty("slice") && r.push("slice=" + encodeURIComponent(t.slice)), t.hasOwnProperty("extraQueryParameter") && r.push(t.extraQueryParameter), u = t.correlationId ? t.correlationId : this._guid(), r.push("client-request-id=" + encodeURIComponent(u))), r.join("&")
  }, AuthenticationContext.prototype._deserialize = function (n) {
    for (var f = /\+/g, i = /([^&=]+)=([^&]*)/g, r = function (n) {
        return decodeURIComponent(n.replace(f, " "))
      }, u = {}, t = i.exec(n); t;) u[r(t[1])] = r(t[2]), t = i.exec(n);
    return u
  }, AuthenticationContext.prototype._decimalToHex = function (n) {
    for (var t = n.toString(16); t.length < 2;) t = "0" + t;
    return t
  }, AuthenticationContext.prototype._guid = function () {
    var f = window.crypto || window.msCrypto,
      n, t;
    if (f && f.getRandomValues) return n = new Uint8Array(16), f.getRandomValues(n), n[6] |= 64, n[6] &= 79, n[8] |= 128, n[8] &= 191, this._decimalToHex(n[0]) + this._decimalToHex(n[1]) + this._decimalToHex(n[2]) + this._decimalToHex(n[3]) + "-" + this._decimalToHex(n[4]) + this._decimalToHex(n[5]) + "-" + this._decimalToHex(n[6]) + this._decimalToHex(n[7]) + "-" + this._decimalToHex(n[8]) + this._decimalToHex(n[9]) + "-" + this._decimalToHex(n[10]) + this._decimalToHex(n[11]) + this._decimalToHex(n[12]) + this._decimalToHex(n[13]) + this._decimalToHex(n[14]) + this._decimalToHex(n[15]);
    var i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
      e = "0123456789abcdef",
      r = 0,
      u = "";
    for (t = 0; t < 36; t++) i[t] !== "-" && i[t] !== "4" && (r = Math.random() * 16 | 0), i[t] === "x" ? u += e[r] : i[t] === "y" ? (r &= 3, r |= 8, u += e[r]) : u += i[t];
    return u
  }, AuthenticationContext.prototype._expiresIn = function (n) {
    return n || (n = 3599), this._now() + parseInt(n, 10)
  }, AuthenticationContext.prototype._now = function () {
    return Math.round((new Date).getTime() / 1e3)
  }, AuthenticationContext.prototype._addAdalFrame = function (n) {
    var i, t;
    if (typeof n != "undefined") return this.info("Add adal frame to document:" + n), i = document.getElementById(n), i || (document.createElement && document.documentElement && (window.opera || window.navigator.userAgent.indexOf("MSIE 5.0") === -1) ? (t = document.createElement("iframe"), t.setAttribute("id", n), t.setAttribute("aria-hidden", "true"), t.style.visibility = "hidden", t.style.position = "absolute", t.style.width = t.style.height = t.borderWidth = "0px", i = document.getElementsByTagName("body")[0].appendChild(t)) : document.body && document.body.insertAdjacentHTML && document.body.insertAdjacentHTML("beforeEnd", '<iframe name="' + n + '" id="' + n + '" style="display:none"><\/iframe>'), window.frames && window.frames[n] && (i = window.frames[n])), i
  }, AuthenticationContext.prototype._saveItem = function (n, t, i) {
    if (this.config && this.config.cacheLocation && this.config.cacheLocation === "localStorage") {
      if (!this._supportsLocalStorage()) return this.info("Local storage is not supported"), !1;
      if (i) {
        var r = this._getItem(n) || "";
        localStorage.setItem(n, r + t + this.CONSTANTS.CACHE_DELIMETER)
      } else localStorage.setItem(n, t);
      return !0
    }
    return this._supportsSessionStorage() ? (sessionStorage.setItem(n, t), !0) : (this.info("Session storage is not supported"), !1)
  }, AuthenticationContext.prototype._getItem = function (n) {
    return this.config && this.config.cacheLocation && this.config.cacheLocation === "localStorage" ? this._supportsLocalStorage() ? localStorage.getItem(n) : (this.info("Local storage is not supported"), null) : this._supportsSessionStorage() ? sessionStorage.getItem(n) : (this.info("Session storage is not supported"), null)
  }, AuthenticationContext.prototype._supportsLocalStorage = function () {
    try {
      return window.localStorage ? (window.localStorage.setItem("storageTest", "A"), window.localStorage.getItem("storageTest") != "A") ? !1 : (window.localStorage.removeItem("storageTest"), window.localStorage.getItem("storageTest")) ? !1 : !0 : !1
    } catch (n) {
      return !1
    }
  }, AuthenticationContext.prototype._supportsSessionStorage = function () {
    try {
      return window.sessionStorage ? (window.sessionStorage.setItem("storageTest", "A"), window.sessionStorage.getItem("storageTest") != "A") ? !1 : (window.sessionStorage.removeItem("storageTest"), window.sessionStorage.getItem("storageTest")) ? !1 : !0 : !1
    } catch (n) {
      return !1
    }
  }, AuthenticationContext.prototype._cloneConfig = function (n) {
    var i, t;
    if (null === n || "object" != typeof n) return n;
    i = {};
    for (t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
    return i
  }, AuthenticationContext.prototype._addLibMetadata = function () {
    return "&x-client-SKU=Js&x-client-Ver=" + this._libVersion()
  }, AuthenticationContext.prototype.log = function (n, t, i, r) {
    if (n <= Logging.level) {
      if (!Logging.piiLoggingEnabled && r) return;
      var f = (new Date).toUTCString(),
        u = "";
      u = this.config.correlationId ? f + ":" + this.config.correlationId + "-" + this._libVersion() + "-" + this.CONSTANTS.LEVEL_STRING_MAP[n] + " " + t : f + ":" + this._libVersion() + "-" + this.CONSTANTS.LEVEL_STRING_MAP[n] + " " + t;
      i && (u += "\nstack:\n" + i.stack);
      Logging.log(u)
    }
  }, AuthenticationContext.prototype.error = function (n, t) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR, n, t)
  }, AuthenticationContext.prototype.warn = function (n) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.WARN, n, null)
  }, AuthenticationContext.prototype.info = function (n) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.INFO, n, null)
  }, AuthenticationContext.prototype.verbose = function (n) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE, n, null)
  }, AuthenticationContext.prototype.errorPii = function (n, t) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR, n, t, !0)
  }, AuthenticationContext.prototype.warnPii = function (n) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.WARN, n, null, !0)
  }, AuthenticationContext.prototype.infoPii = function (n) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.INFO, n, null, !0)
  }, AuthenticationContext.prototype.verbosePii = function (n) {
    this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE, n, null, !0)
  }, AuthenticationContext.prototype._libVersion = function () {
    return "1.0.17"
  }, typeof module != "undefined" && module.exports && (module.exports = AuthenticationContext, module.exports.inject = function (n) {
    return new AuthenticationContext(n)
  }), AuthenticationContext
}();
window.jQuery && $(function () {
  $("a[href~='/_logout']").click(function () {
    AuthenticationContext.prototype._singletonInstance.clearCache()
  })
})