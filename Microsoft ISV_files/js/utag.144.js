//tealium universal tag - utag.144 ut4.0.202005151726, Copyright 2020 Tealium.com Inc. All Rights Reserved.
$(document).on('mousedown','div[data-target="#assetPreviewModal"]',function(){var fieldArrayDelimiter='|-|';var keyPairDelimiter='|~|';var $this=jQuery(this),assetName=window.location.href.substring(window.location.href.lastIndexOf('/')+1),eventName=' Preview: '+assetName;console.log(eventName);analytics.globalfunctions.sendAllUtag('event_name'+keyPairDelimiter+eventName+fieldArrayDelimiter+'event_type'+keyPairDelimiter+'asset preview'+fieldArrayDelimiter+'override'+keyPairDelimiter+'Yes',$this);analytics.globalfunctions.sendAllJSLL('ActionType'+keyPairDelimiter+'download'+fieldArrayDelimiter+'Dlmn'+keyPairDelimiter+assetName+fieldArrayDelimiter+'FileName'+keyPairDelimiter+assetName+fieldArrayDelimiter+'Name'+keyPairDelimiter+eventName+fieldArrayDelimiter+'override'+keyPairDelimiter+'Yes',$this);});try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("144","msft.mpn");}catch(error){utag.DB(error);}
