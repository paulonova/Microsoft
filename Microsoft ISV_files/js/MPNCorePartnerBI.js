var MPNCore = MPNCore || {};
MPNCore.PartnerBI = MPNCore.PartnerBI || {};

MPNCore.PartnerBI._apiVersion = "v1";
MPNCore.PartnerBI._ekToken = '';
MPNCore.PartnerBI._backEdgeURL = '';
MPNCore.PartnerBI._myBiStrings = null;

MPNCore.PartnerBI.getWebApiUrl = function () {
    var parser = document.createElement('a');
    parser.href = window.location.href;

    return parser.protocol + "//" + parser.host + "/api/" + MPNCore.PartnerBI._apiVersion;
};

MPNCore.PartnerBI.isAuthenticated = function () {

    var url = MPNCore.PartnerBI.getWebApiUrl() + "/member/utility/isauth";

    var deferred = jQuery.Deferred();

    jQuery.ajax({
        url: url,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        timeout: 60000,
        success: function () {
            deferred.resolve();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            deferred.reject(jqXHR);
        }
    });

    return deferred.promise();
}

MPNCore.PartnerBI.requireAuth = function() {

    var url = MPNCore.PartnerBI.getWebApiUrl() + "/member/utility/isauth";

    jQuery.ajax({
        url: url,
        type: "GET",
        async: false,
        contentType: "application/json; charset=utf-8",
        timeout: 60000,
        success: function (result) {
        
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 401)
                window.location.href = "/_login";
        }
    });
}

MPNCore.PartnerBI.getPartnerClaims = function () {
    /// <summary>Get Ek token for the current signed in partner.</summary>
    /// <returns type="String">Ek token</returns>

    var deferred = jQuery.Deferred();

    var claimsUrl = MPNCore.PartnerBI.getWebApiUrl() + "/member/partner/claims";
    jQuery.ajax({
        url: claimsUrl,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        timeout: 60000,
        success: function (result) {
            deferred.resolve(MPNCore.getJSON(result));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);

            deferred.reject(errorThrown + ", " + jqXHR.responseText);
        }
    });

    return deferred.promise();
};

MPNCore.PartnerBI.getEkToken = function () {
    /// <summary>Get Ek token for the current signed in partner.</summary>
    /// <returns type="String">Ek token</returns>

    var deferred = jQuery.Deferred();

    var result;
    if (MPNCore.PartnerBI._ekToken) {
        result = MPNCore.PartnerBI._ekToken;
        deferred.resolve(result);
    }
    else {
        var ekUrl = MPNCore.PartnerBI.getWebApiUrl() + "/member/pfbi/token";
        performance.mark("pbi_token_acs");
        jQuery.ajax({
            url: ekUrl,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            timeout: 60000,
            success: function (ek) {
                performance.mark("pbi_token_acf");
                result = MPNCore.getJSON(ek);
                MPNCore.PartnerBI._ekToken = result.Token;

                deferred.resolve(result.Token);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                performance.mark("pbi_token_acf");
                console.log(errorThrown);

                deferred.reject(errorThrown + ", " + jqXHR.responseText);
            }
        });
    }

    return deferred.promise();
};

MPNCore.PartnerBI.getBackEdgeURL = function () {
    /// <summary>Get Back edge service URL.</summary>
    /// <returns type="String">Back edge service URL</returns>

    var deferred = jQuery.Deferred();

    var result;
    if (MPNCore.PartnerBI._backEdgeURL) {
        result = MPNCore.PartnerBI._backEdgeURL;
        deferred.resolve(result);
    }
    else if (window.location.href.indexOf("localhost") > -1) {
        MPNCore.PartnerBI._backEdgeURL = result = 'https://pfbimpntest.microsoft.com';
        deferred.resolve(result);
    }
    else {
        var configURL = MPNCore.PartnerBI.getWebApiUrl() + "/member/pfbi/getpfbiurl";
        performance.mark("pbi_xml_scs");
        jQuery.ajax(
            {
                url: configURL,
                cache: false,
                success: function (contents) {
                    performance.mark("pbi_xml_scf");
                    MPNCore.PartnerBI._backEdgeURL = result = contents;

                    deferred.resolve(result);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    performance.mark("pbi_xml_scf");
                    console.log(errorThrown);

                    deferred.reject(errorThrown + ", " + jqXHR.responseText);
                }
            }
        );
    }

    return deferred.promise();
};

MPNCore.PartnerBI.getSummary = function () {
    /// <summary>Get Summary of PartnerBI data.</summary>
    /// <returns type="String">PartnerBI Summary data object.</returns>

    var deferred = jQuery.Deferred();

    MPNCore.PartnerBI.getBackEdgeURL().done(function (url) {
        MPNCore.PartnerBI.getEkToken().done(function (ek) {
            performance.mark("pbi_data_acs");
            // Begin JSON Loader
            jQuery.ajax({
                url: url + "/MPNService.svc/json/GetSummaryAsJSON?callback=?",
                data: { "Ek": ek },
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                crossDomain: true,
                processData: true,
                timeout: 60000,
                success: function (summary) {
                    performance.mark("pbi_data_acf");
                    performance.mark("pbi_data_fads");

                    deferred.resolve(MPNCore.getJSON(summary));
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    performance.mark("pbi_data_acf");

                    deferred.reject(errorThrown + ", " + jqXHR.responseText);
                }
            });
        }).fail(function (errormsg) {
            deferred.reject('Failed to get ek: ' + errormsg);
        });
    }).fail(
        function (errormsg) {
            deferred.reject('Failed to get PFBI web service URL prefix: ' + errormsg);
        }
    );

    return deferred.promise();
};
