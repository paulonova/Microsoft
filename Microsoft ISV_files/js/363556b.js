function bugFix363556b() {
	jQuery(window).load(function() {
		var mc = document.getElementsByClassName('manageCookies')[0];
		if (WcpConsent.siteConsent.isConsentRequired) {
			mc.onclick = function() {
				WcpConsent.siteConsent.manageConsent();
				return false;
			}
		}
		else {
			mc.parentElement.style.display = 'none';
		}
	})
}
bugFix363556b();