//tealium universal tag - utag.100 ut4.0.201806291724, Copyright 2018 Tealium.com Inc. All Rights Reserved.
var _linkedin=_linkedin||{};var _linkedin_data_partner_id=_linkedin_data_partner_id||"";try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:100");utag.DB(b);var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://snap.licdn.com/li.lms-analytics/insight.min.js","partner_id":"87839","linkedin":{"custom_channel_id":"","custom_group_id":"","custom_user_id":"","zoom_info_id":"","title":"","domain":"","company":"","gender":"","location":"","education":"","email_sha256":"","email_sha512":"","raw_data":"","raw_data_overwrite":"","encrypted_data":"","partner_data":"","sic_codes":"","employee_range":"","default_keywords":"","async_target":"","use_iframe":"","use_callback":"","test_url":""
}};utag.DB("send:100:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}}
utag.DB("send:100:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(!u.data.partner_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
_linkedin_data_partner_id=u.data.partner_id;u.data.linkedin.partner_id=u.data.partner_id;u.data.linkedin.order_id=u.data.order_id;u.data.linkedin.conv_value=u.data.order_total;u.data.linkedin.conv_currency=u.data.order_currency;_linkedin=u.clearEmptyKeys(u.data.linkedin);u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_100","attrs":{}});utag.DB("send:100:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("100","msft.mpn"));}catch(error){utag.DB(error);}
