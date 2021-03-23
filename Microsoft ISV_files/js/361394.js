var MsSc = MsSc || {}; MsSc.Ultra = MsSc.Ultra || {}; MsSc.Ultra.FlexHero = MsSc.Ultra.FlexHero || {};
var jq2143 = jq2143 || jQuery;

jq2143(window).load(function () {
    MsSc.Ultra.FlexHero.Init2();
});

MsSc.Ultra.FlexHero.Init2 = function () {
    jq2143(".ultra .flex-hero").each(function () {
        if (jq2143(this).data("flexhero2") !== "initialized") {
            jq2143(this).data("flexhero2", "initialized");

            var hasPrimaryCta = jq2143(this).find(".ultra-cta-panel .primary-cta a").length === 1;
            var hasNoSecondaryCta = jq2143(this).find(".ultra-cta-panel .secondary-cta a").length === 0;
            if (hasPrimaryCta && hasNoSecondaryCta) {
                var link = jq2143(this).find(".ultra-cta-panel .primary-cta a").first().clone().empty().removeClass("cta-x").removeClass("cta-x-primary").removeClass("button");
                if (link.length === 1) {
					jq2143(this).find(".ultra-header").find("h1,h2,h3,h4,h5,h6").find("a.video-connect").colorbox({ iframe: true, innerWidth: "80%", innerHeight: "80%" });
					jq2143(this).find(".image-panel a.video-connect").colorbox({ iframe: true, innerWidth: "80%", innerHeight: "80%" });
                }
            }
        }
    });
}
