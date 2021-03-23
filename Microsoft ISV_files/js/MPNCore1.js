var MPNCore = MPNCore || {};

MPNCore.isDesignMode = function () {
    return false;
}

MPNCore.getJSON = function (msg) {
    var isJson = true;
    try {
        var json = jQuery.parseJSON(msg);
        return json;
    } catch (err) {
        isJson = false;
    }

    return msg;
}

MPNCore._locale = "";

if (typeof(checkAuthSession) == "undefined") {
    window.checkAuthSession = function () {};
}

MPNCore.getLocale = function () { 
    if (MPNCore._locale.length === 0) {
        if (gmositecore._isPreview === "false") {
            var parser = document.createElement('a');
            var href = window.location.href;
            parser.href = href;
            var host = parser.protocol + "//" + parser.hostname;
            var hostlen = host.length;
            var urlParts = href.substring(hostlen, href.length).split('/');
            MPNCore._locale = urlParts[1];
        } else {
            // if in preview mode get locale from the query string
            MPNCore._locale = MPNCore._queryString["sc_lang"];
        }
    }

    return MPNCore._locale;
}

MPNCore.getChatConfig = function () {

    var url = MPNCore.PartnerBI.getWebApiUrl() + "/member/utility/chatconfig";

    var deferred = jQuery.Deferred();

    jQuery.ajax({
        url: url,
        type: "GET",
        data: { contextItemId: MPNCore.getMsScItemId() },
        contentType: "application/json; charset=utf-8",
        timeout: 60000,
        success: function (response) {
            deferred.resolve(MPNCore.getJSON(response));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            deferred.reject(errorThrown + ", " + jqXHR.responseText);
        }
    });

    return deferred.promise();
}

MPNCore._language = "";
MPNCore.getLanguage = function () {
    var language = "";
    if (MPNCore._language.length == 0) {
        var locale = MPNCore.getLocale();
        var dash = locale.indexOf("-");
        if ((locale.toLowerCase() == "zh-cn") || (dash == -1)) {
            language = locale;
        }
        else {
            language = locale.substr(0, dash);
        }
    }
    else {
        language = MPNCore._language;
    }

    return language;
}

MPNCore.getQueryString = function (key, url) {
    /// <summary>Get the specified query parameter.</summary>
    /// <param name="key" type="String">Parameter name.</param>
    /// <param name="url" type="String">(Optional) URL would be extracted the parameter from, specify null/empty to use the current page url.</param>
    /// <returns type="String">Parameter value</returns>

    var q = url ? url.substring(url.indexOf('?') + 1) : location.search.substring(1);
    var qs = q.split("&");
    for (var i = 0; i < qs.length; i++) {
        var pair = qs[i].split("=");
        if (pair.length == 2) {
            if (pair[0].toLowerCase() == key.toLowerCase()) {
                return decodeURIComponent(pair[1]);
            }
        }
    }

    return null;
};

MPNCore.replaceAll = function (find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
};

MPNCore._localizedDataFiles = {};
MPNCore.getLocalizedDataFile = function (folder) {
    var result = "";

    if (MPNCore._localizedDataFiles[folder]) {
        result = MPNCore._localizedDataFiles[folder];
    }
    else {
        var lang = MPNCore.getLanguage();

        var root = ""; 
        switch (folder.toLowerCase())
        {
            case "mybistrings":
                root = MPNCore.getXmlPaths().myBIStrings;
                break;
            case "supportoptimization":
                root = MPNCore.getXmlPaths().supportOptimization;
                break;
            default:
                // We shouldn't get here but if we do, this is a reasonable guess at the path
                root = "/~/media/mssc/mpn/partner/" + folder;
                break;
        }

        var url = root + "/" + lang + ".ashx";
        jQuery.ajax({
            url: url,
            async: false,
            success: function (response) {
                MPNCore._localizedDataFiles[folder] = result = response;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                url = root + "/en.ashx";
                jQuery.ajax({
                    url: url,
                    async: false,
                    success: function (response) {
                        MPNCore._localizedDataFiles[folder] = result = response;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        var error = errorThrown + ", " + jqXHR.responseText;
                        console.log(error);
                    }
                });
            }
        });
    }

    return result;
};

MPNCore.getMsScItemId = function () {
    return gmositecore.contextItemId;
}

MPNCore._localeMappingsXML = null;
MPNCore.getMappedLocale = function (localeTag) {
    /// <summary>Based on the current MPN locale, get the mapped locale for the application determined by the localeTag, the mappings are defined inside this file /en/Style Library/Portal Branding/data/LocaleMappings.xml.</summary>
    /// <param name="localeTag" type="String">The XML node property name to look for, e.g. getsupport-locale</param>
    /// <returns type="String">The mapped locale for the application determined by the localeTag.</returns>

    if (!MPNCore._localeMappingsXML) {
        $.ajax({
            url: MPNCore.getXmlPaths().localeMappings,
            type: 'GET',
            async: false,
            dataType: 'xml',
            //timeout:10000,           
            error: function (jqXHR, textStatus, errorThrown) {
            },
            success: function (xml) {
                MPNCore._localeMappingsXML = xml;
            }
        });
    }

    if (!MPNCore._localeMappingsXML) {
        return null;
    }
    else {
        var mpnLocale = MPNCore.getLocale();
        var sitecollectionName = mpnLocale.split('-')[0].toLowerCase();
        var webName = mpnLocale.split('-')[1].toLowerCase();
        var webObj = $(MPNCore._localeMappingsXML).find("sitecollection[path='" + sitecollectionName + "']").find("localeweb[path='" + webName + "']");
        if ($(webObj).length == 1) {
            if (typeof ($(webObj).attr(localeTag)) != "undefined") {
                localmappingurl = $(webObj).attr(localeTag);
            }
            else if (typeof ($(webObj).parent().attr(localeTag)) != "undefined") {
                localmappingurl = $(webObj).parent().attr(localeTag);
            }
            else {
                localmappingurl = $(webObj).parent().parent().attr(localeTag);
            }
        }
        else {
            localmappingurl = $(MPNCore._localeMappingsXML).find("sitecollections").attr(localeTag);
        }

        return localmappingurl;
    }
};

MPNCore.getXmlPaths = function () {
    /// <summary>Get paths to various locations where XML files are kept.</summary>
    /// <returns type="String">An object with properties for each important XML path</returns>

    var result = "";
    if (MPNCore.PartnerBI._xmlPaths) {
        result = MPNCore.PartnerBI._xmlPaths;
    }
    else {
        var url = MPNCore.PartnerBI.getWebApiUrl() + "/member/config/xmlpaths";
        jQuery.ajax({
            url: url,
            type: "GET",
            async: false,
            contentType: "application/json; charset=utf-8",
            timeout: 60000,
            success: function (response) {
                MPNCore.PartnerBI._xmlPaths = result = response;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                var error = errorThrown + ", " + jqXHR.responseText;
                console.log(error);
            }
        });
    }

    return result;
};
