jQuery(window).load(function () {
  var n = document.getElementsByClassName("manageCookies")[0];
  WcpConsent.siteConsent.isConsentRequired ? n.onclick = function () {
    return WcpConsent.siteConsent.manageConsent(), !1
  } : n != null && (n.parentElement.style.display = "none")
})