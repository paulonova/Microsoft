//tealium universal tag - utag.108 ut4.0.202102100128, Copyright 2021 Tealium.com Inc. All Rights Reserved.
setTimeout(function(){window.analytics=window.analytics||{};window.analytics.data=window.analytics.data||{};window.analytics.utilities=window.analytics.utilities||{};window.analytics.awaUtilities=window.analytics.awaUtilities||{};window.analytics.globalfunctions=window.analytics.globalfunctions||{};var util=window.analytics.utilities,awaUtil=window.analytics.awaUtilities,data=window.analytics.data,globalfunctions=window.analytics.globalfunctions;var blade_occur=0;var link_index=0;var blade_name='';var page_id=gmositecore._contextItemId;var boolScrapeBlade;var thisBlade;$('[data-tracking-bladename]').each(function(){thisBlade=$(this);boolScrapeBlade=($(this).find('[data-tracking-bladename]').length==0&&$(this).find('a').length!==0)||$(this).attr('data-tracking-bladename').includes('Personalization');link_index=1;if(boolScrapeBlade){thisBlade.find('a').each(function(){$(this).attr('link_index',link_index);link_index+=1;});blade_name=$(this).attr('data-tracking-bladename');$('[data-tracking-bladename="'+blade_name+'"]').each(function(){if(boolScrapeBlade){blade_occur=blade_occur+1;}});$(this).attr('blade_occur',blade_occur);blade_occur=0;}});var blade_count=1;var blade_names='';$('[data-tracking-bladename]').each(function(){boolScrapeBlade=($(this).find('[data-tracking-bladename]').length==0&&$(this).find('a').length!==0)||$(this).attr('data-tracking-bladename').includes('Personalization');if(boolScrapeBlade){$(this).attr('cta-blade-depth',blade_count);blade_count=blade_count+1;var pass_blade_name='';if($(this).attr('data-tracking-bladetype')==='One-Card'){pass_blade_name='Asset Gallery: '+$(this).find('a').attr('title').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");}else{pass_blade_name=$(this).attr('data-tracking-bladename');}
var blade_name_and_count=pass_blade_name+':'+$(this).attr('blade_occur');blade_names=analytics.globalfunctions.appendUniqueData(blade_names,blade_name_and_count);}});var action={},content={};action.actionType='impression';action.behavior=awa.behavior.IMPRESSION;content.contentName='Page ID: '+page_id+','+blade_names;var idx=function(path,obj){return path.reduce(function(all,item){return all&&all[item]?all[item]:null;},obj);};if(typeof Demandbase!="undefined"&&idx(['Segments','CompanyProfile'],Demandbase)){if(Demandbase.Segments.CompanyProfile.audience){content.awaId=content.id=content.contentid=Demandbase.Segments.CompanyProfile.audience}};awaUtil.awaPageActionBuilder(action,content);var udo={};udo.event_type='impression';udo.event_name='Page ID: '+page_id+','+blade_names;udo.personalized_blade_name=[];udo.personalized_blade_type=[];udo.personalized_blade_rule=[];jQuery("[data-tracking-rule]").each(function(){udo.personalized_blade_name.push(jQuery(this).attr("data-tracking-bladename"))
udo.personalized_blade_type.push(jQuery(this).attr("data-tracking-bladetype"));udo.personalized_blade_rule.push(jQuery(this).attr("data-tracking-rule"))})
utag.track("impression",udo);},1200);try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("108","msft.mpn");}catch(error){utag.DB(error);}
