//tealium universal tag - utag.109 ut4.0.201901222350, Copyright 2019 Tealium.com Inc. All Rights Reserved.
var strAnswer='';var fieldArrayDelimiter='|-|';var keyPairDelimiter='|~|';$('a.yes-btn').on('mousedown',function(){strAnswer='Yes';});$('a.no-btn').on('mousedown',function(){strAnswer='No';});$('input.social-btn.submitBtn').on('mousedown',function(){var comments=$('.feedback-block > textarea.comments').val()+$('.feedback-block > textarea.comments-mobile').val();var strFields='event_name'+keyPairDelimiter+'Feedback Submit: '+strAnswer+fieldArrayDelimiter+'feedback_comments'+keyPairDelimiter+comments+fieldArrayDelimiter+'link_name'+keyPairDelimiter+'Submit';analytics.globalfunctions.sendAllUtag(strFields,$(this));var jsllBeh=awa.behavior.SURVEYCOMPLETE;var jsllFields='ActionType'+keyPairDelimiter+'click'+fieldArrayDelimiter+'Behavior'+keyPairDelimiter+jsllBeh+
fieldArrayDelimiter+'ID'+keyPairDelimiter+'_SocialBladeConfig'+fieldArrayDelimiter+
'feedback_name'+keyPairDelimiter+'Feedback Submit: '+strAnswer+fieldArrayDelimiter+'survey_verbatim'+keyPairDelimiter+comments+fieldArrayDelimiter+'link_name'+keyPairDelimiter+'Submit';analytics.globalfunctions.sendAllJSLL(jsllFields,$(this));});try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("109","msft.mpn");}catch(error){utag.DB(error);}