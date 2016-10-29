jQuery(document).ready(function(t){function o(t){var o=document.createElement("div"),e=new RegExp("(khtml|moz|ms|webkit|)"+t,"i");for(s in o.style)if(s.match(e))return!0;return!1}function e(){window.getComputedStyle||(window.getComputedStyle=function(t,o){return this.el=t,this.getPropertyValue=function(o){var e=/(\-([a-z]){1})/g;return"float"==o&&(o="styleFloat"),e.test(o)&&(o=o.replace(e,function(){return arguments[2].toUpperCase()})),t.currentStyle[o]?t.currentStyle[o]:null},this});var o=window.getComputedStyle(document.body,":after").getPropertyValue("content");return null===o&&t("html").hasClass("ie8")&&(o=window.get_breakpoint_ie8(t(window).width()),t(window).trigger("resize")),o?(o=o.replace(/['"]/g,""),O!=o&&(I=O,O=o),o):void 0}function i(){return e(),I}function a(t,o){if(D.push(t),!A){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];return i.parentNode.insertBefore(e,i),window.onYouTubeIframeAPIReady=function(){H=!0,n(o)},void(A=!0)}H&&n(o)}function n(t){for(var o=0;o<D.length;o++)if("loop"===t){new YT.Player(D[o],{events:{onReady:u}})}else if("loopAndMute"===t){new YT.Player(D[o],{events:{onReady:function(t){u(t),r(t)}}})}else{new YT.Player(D[o],{events:{onReady:r}})}D=[]}function r(t){return t.target.mute()}function u(t){var o,e;return setInterval(function(){o=t.target.getCurrentTime(),e=t.target.getDuration(),o>e-.5&&(t.target.seekTo(0),t.target.playVideo())},200)}function p(t){E||(window.addEventListener?window.addEventListener("message",d,!1):window.attachEvent("onmessage",d,!1),E=!0)}function d(o){if(o.origin.match(/vimeo\./)){var e=JSON.parse(o.data);if("ready"==e.event){var i=t("#"+e.player_id),a=i.attr("src").split("?"),e={method:"setVolume",value:0};i[0].contentWindow.postMessage(e,a)}}}function l(){var o=t(window).width();if(!S||F!==o){S=!0,F=o;var i=e();i=i?i:"desktop",t("[data-bg-type-"+i+"]").each(function(){var o=t(this).attr("data-bg-type-"+i),e=t(this).find("> .upfront-output-bg-"+i);if(t(this).find("> .upfront-output-bg-overlay").not(e).each(function(){t(this).is(".upfront-output-bg-video")&&t(this).children().not("script.video-embed-code").remove(),t(this).attr("data-bg-parallax")&&t(this).data("uparallax")&&t(this).uparallax("destroy")}),e.attr("data-bg-parallax")&&setTimeout(function(){var o=e.closest(".upfront-output-region-container");if(o.length){var a=o.next(".upfront-output-region-container"),n=a.find(".upfront-region-container-bg"),r=o.prev(".upfront-output-region-container"),s=r.find(".upfront-region-container-bg"),u=n.css("background-color"),p=n.attr("data-bg-type-"+i),d=s.css("background-color"),l=s.attr("data-bg-type-"+i),h=function(t){if(!t)return!1;if("transparent"==t)return!0;var o=t.match(/(rgba|hsla)\(.*?,.*?,.*?,.*?([\d.]+).*?\)/);return o&&o[2]&&parseFloat(o[2])<1?!0:!1},c=r.length>0&&"color"==l&&d&&h(d)?0:!1,f=a.length>0&&"color"==p&&u&&h(u)?0:!1;r.length>0&&r.hasClass("upfront-region-container-clip")&&(c=0),a.length>0&&a.hasClass("upfront-region-container-clip")&&(f=0),e.uparallax({element:e.attr("data-bg-parallax")}),!1===c&&r.length>0&&r.height()<100&&(c=r.height()),!1===f&&a.length>0&&a.height()<100&&(f=a.height()),!1!==c&&e.uparallax("setOption","overflowTop",c),!1!==f&&e.uparallax("setOption","overflowBottom",f),t(document).on("upfront-responsive-nav-open upfront-responsive-nav-close",function(){e.data("uparallax")&&e.uparallax("refresh")})}},0),"image"==o||"featured"==o){var n=t(this).attr("data-bg-overlay-"+i),r=n?e.children(".upfront-bg-image"):t(this),s=r.attr("data-src"),u=r.attr("data-src-"+i),d=r.attr("data-bg-image-ratio-"+i);n&&t(this).css("background-image","none"),u?r.attr("data-src",u):r.removeAttr("data-src"),d?r.attr("data-bg-image-ratio",d):r.removeAttr("data-bg-image-ratio").css("background-position","").css("background-size",""),u&&s!=u&&r.hasClass("upfront-image-lazy")?r.removeClass("upfront-image-lazy-loaded"):r.css("background-image",'url("'+u+'")')}else"color"==o?t(this).css("background-image","none"):(t(this).css("background-image","none"),e.each(function(){if(t(this).is(".upfront-output-bg-video")&&1==t(this).children().length){var o=t(t(this).children("script.video-embed-code").html()),e=o.attr("id");if(t(this).append(o),1==t(this).attr("data-bg-video-mute")){var i=o.attr("src");i.match(/youtube\.com/i)?1==t(this).attr("data-bg-video-loop")?a(e,"loopAndMute"):a(e,"mute"):i.match(/vimeo\./i)&&p(e)}else if(1==t(this).attr("data-bg-video-loop")){var i=o.attr("src");i.match(/youtube\.com/i)&&a(e,"loop")}}}))})}}function h(){c(),t(".upfront-output-region-container").each(function(){var o=t(this).find(".upfront-output-region").filter(".upfront-region-center, .upfront-region-side-left, .upfront-region-side-right"),e=(t(this).hasClass("upfront-region-container-full"),height=0);o.length>1&&(o.each(function(){var o=parseInt(t(this).css("min-height"),10),i=t(this).outerHeight();o&&(e=o>e?o:e),height=i>height?i:height}),o.css({minHeight:height,height:"",maxHeight:""}))})}function c(){t(".upfront-output-region-container.upfront-region-container-full").each(function(){var o=t(this).find(".upfront-region-center"),e=t(this).find(".upfront-region-side-top, .upfront-region-side-bottom"),i=t("body").offset(),a=t(window).height()-i.top,n=t(this).find(".upfront-output-bg-overlay");n.length&&n.css("height",a),e.each(function(){a-=t(this).outerHeight()}),o.css({minHeight:a});var r=t(this).attr("data-behavior"),s=parseInt(t(this).attr("data-original-height"),10);if("keep-ratio"==r&&s>0){var u=o.find("> .upfront-region-wrapper > .upfront-output-wrapper"),p=o.offset(),d=[],l=-1,h=0,c=0,f=0,g=0,m=0;u.each(function(){var o=t(this).find("> .upfront-output-module, > .upfront-output-module-group");if(0!=o.length){var e={$el:t(this),top_space:0,bottom_space:0,fill:0,modules:[]};o.each(function(o){var i=t(this).hasClass("upfront-output-module-group")?t(this):t(this).find("> .upfront-output-object");i.css({paddingTop:"",paddingBottom:"",minHeight:""});var a=parseFloat(i.css("padding-top")),n=parseFloat(i.css("padding-bottom")),r=parseFloat(t(this).css("height")),s=parseFloat(i.css("min-height"));0==o&&(e.top_space=a),e.bottom_space=n,e.fill+=r,e.modules.push({$el:i,top:a,bottom:n,height:r-a-n,min_height:s!==s?0:s})}),e.fill-=e.top_space+e.bottom_space;var i=t(this).offset(),a=parseFloat(t(this).css("margin-left")),n=parseFloat(t(this).css("height"));Math.abs(i.left-a-p.left)<5?(l++,d[l]={wrappers:[e],height:n,top_space:e.top_space,bottom_space:e.bottom_space}):(d[l].top_space=e.top_space<d[l].top_space?e.top_space:d[l].top_space,n>=d[l].height&&(d[l].height=n,d[l].bottom_space=e.bottom_space<d[l].bottom_space?e.bottom_space:d[l].bottom_space),d[l].wrappers.push(e))}}),t.each(d,function(t,o){h+=o.height,c+=o.height-o.top_space-o.bottom_space,m+=o.top_space+o.bottom_space}),f=s>h?s-h:0,m+=f,g=a>c?a-c:0;t.each(d,function(o,e){var i=Math.round(e.top_space/m*g),a=Math.round(e.bottom_space/m*g);t.each(e.wrappers,function(o,n){t.each(n.modules,function(t,o){var r=o.top-e.top_space+i,s=o.bottom-e.bottom_space+a,u=o.min_height;0==t&&(o.$el.css("padding-top",r+"px"),u-=o.top-r),t==n.modules.length-1&&(o.$el.css("padding-bottom",s+"px"),u-=o.bottom-s),u=u>0?u:0,o.$el.css("min-height",u+"px")})})})}})}function f(){var o=t("body").offset();t("[data-bg-image-ratio]").each(function(){var e=t(this).is(".upfront-output-layout"),i=(t(this).is(".upfront-region-container-bg")||t(this).is(".upfront-output-region"))&&t(this).closest(".upfront-region-container-full").length>0,a=e?t(window).width():t(this).outerWidth(),n=e?t(window).height():i?t(window).height()-o.top:t(this).outerHeight(),r=parseFloat(t(this).attr("data-bg-image-ratio"));Math.round(n/a*100)/100>r?(t(this).data("bg-position-y",0),t(this).data("bg-position-x","50%"),t(this).css({"background-position":"50% 0","background-size":Math.round(n/r)+"px "+n+"px"})):(t(this).data("bg-position-y",Math.round((n-a*r)/2)),t(this).data("bg-position-x","0"),t(this).css({"background-position":"0 "+Math.round((n-a*r)/2)+"px","background-size":a+"px "+Math.round(a*r)+"px"}))}),t("[data-bg-video-ratio]").each(function(){var e=t(this).parent().is(".upfront-output-layout"),i=t(this).parent().is(".upfront-output-region, .upfront-region-container-bg")&&t(this).closest(".upfront-region-container-full").length>0,a=e?t(window).width():t(this).outerWidth(),n=e?t(window).height():i?t(window).height()-o.top:t(this).outerHeight(),r=parseFloat(t(this).attr("data-bg-video-ratio")),s=t(this).attr("data-bg-video-style")||"crop",u=t(this).children("iframe");if(t(this).css("overflow","hidden"),u.css({position:"absolute"}),"crop"==s)if(Math.round(n/a*100)/100>r){var p=Math.round(n/r);u.css({width:p,height:n,top:0,left:Math.round((a-p)/2)})}else{var d=Math.round(a*r);u.css({width:a,height:d,top:Math.round((n-d)/2),left:0})}else if("full"==s)u.css({top:0,left:0,width:a,height:n});else if("inside"==s)if(Math.round(n/a*100)/100<r){var p=Math.round(n/r);u.css({width:p,height:n,top:0,left:Math.round((a-p)/2)})}else{var d=Math.round(a*r);u.css({width:a,height:d,top:Math.round((n-d)/2),left:0})}}),t(".upfront-output-object .upfront-featured-image-smaller").each(function(){var o=t(this),i=o.parent(),a=o.data("featured-image"),n=o.data("featured-align"),r=(o.data("featured-valign"),o.data("featured-dotalign")),s=o.data("featured-mode"),u=(o.height(),o.width(),e());"tablet"!==u&&"mobile"!==u||"small"!==s&&"vertical"!==s||r!==!0?"tablet"!==u&&"mobile"!==u||"small"!==s?"tablet"!==u&&"mobile"!==u||"small"===s?(o.css({top:a.offsetTop,left:a.offsetLeft,position:"relative",display:"block",marginTop:0,width:"initial"}),i.css({width:a.offsetWidth,height:a.offsetHeight})):(i.css({width:"100%",height:"auto"}),o.css({width:"100%",height:"auto",left:0})):(i.css({textAlign:"center",maxWidth:"100%",width:"100%"}),o.css({position:"static",display:"inline-block"})):(i.css({textAlign:n,maxWidth:"100%"}),o.css({position:"static",display:"inline-block"}))}),t(".upfront-output-object .uf-post .thumbnail, .uf-post-data .upostdata-part.thumbnail").each(function(){var o,i,a=t(this).hasClass("upostdata-part"),n=t(this).closest(".upfront-output-object"),r=a?parseInt(n.css("min-height"),10):t(this).height(),s=t(this).width(),u=parseInt(n.css("padding-top"),10),p=parseInt(n.css("padding-bottom"),10),d=t(this).find("img"),l=t(this),h=d.height(),c=(d.width(),e()),f=new Image;if(a){if("tablet"===c||"mobile"===c?(l.css({width:"100%",height:"auto"}),d.css({width:"100%",height:"auto"}),r=h,n.css("min-height",r),n.closest(".upfront-output-object-group").css("min-height",r)):(n.css("min-height",""),n.closest(".upfront-output-object-group").css("min-height","")),!d.hasClass("upfront-featured-image-fit-wrapper"))return;r-=u+p,t(this).css("height",r)}"1"==t(this).attr("data-resize")?(f.src=d.attr("src"),o=f.height,i=f.width,r/s>o/i?d.css({height:"100%",width:"auto",marginLeft:(s-Math.round(r/o*i))/2,marginTop:""}):d.css({height:"auto",width:"100%",marginLeft:"",marginTop:(r-Math.round(s/i*o))/2})):(o=d.height(),r!=o&&d.css("margin-top",(r-o)/2))})}function g(){var o=(e(),"undefined"!=typeof L.body_off?L.body_off:t("body").offset()),i=t(window).scrollTop(),a=t(window).height(),n=i+a,r="undefined"!=typeof L.$sticky_regions?L.$sticky_regions:t('.upfront-output-region-container[data-sticky="1"], .upfront-output-region-sub-container[data-sticky="1"]'),s="undefined"!=typeof L.$floating_regions?L.$floating_regions:t('.upfront-output-region-container.upfront-region-container-full, .upfront-output-region-container.upfront-region-container-full .upfront-output-region-sub-container:not(.upfront-output-region-container-sticky), .upfront-output-region.upfront-region-side-fixed[data-restrict-to-container="1"]');L.body_off=o,L.$sticky_regions=r,L.$floating_regions=s,o.top>0&&(i+=o.top,a-=o.top),i=i<o.top?o.top:i,r.each(function(){var e=t(this).hasClass("upfront-output-region-sub-container"),a=e&&t(this).nextAll(".upfront-grid-layout").length>0,n=t(this).offset(),r=t(this).data("sticky-top"),s={};"number"!=typeof r&&i>n.top?(s.position="fixed",s.top="fixed"!=t("#wpadminbar").css("position")?0:o.top,s.left=0,s.right=0,s.bottom="auto",t(this).addClass("upfront-output-region-container-sticky"),t(this).data("sticky-top",n.top),e?t(this).closest(".upfront-region-container-bg").css(a?"padding-top":"padding-bottom",t(this).height()):t(this).next(".upfront-output-region-container").css("padding-top",t(this).height())):"number"==typeof r&&r>=i&&(s.position="",s.top="",s.left="",s.right="",s.bottom="",t(this).removeClass("upfront-output-region-container-sticky"),t(this).removeData("sticky-top"),e?t(this).closest(".upfront-region-container-bg").css(a?"padding-top":"padding-bottom",""):t(this).next(".upfront-output-region-container").css("padding-top","")),t(this).css(s)}),s.each(function(){var e=t(this).is(".upfront-region-side-fixed"),r=t(this).is(".upfront-region-container-full"),s=t(this).is(".upfront-output-region-sub-container"),u=t(this).closest(".upfront-output-region-container"),p=u.outerHeight(),d=u.offset(),l=d.top+p,h=t(this).height(),c=e?parseInt(t(this).attr("data-top"),10):0,f=e?"undefined"!=typeof t(this).attr("data-top"):t(this).nextAll(".upfront-grid-layout").length>0,g=e?parseInt(t(this).attr("data-bottom"),10):0,m=(e?"undefined"!=typeof t(this).attr("data-bottom"):t(this).prevAll(".upfront-grid-layout").length>0,{});if(r){var v=t(this).find(".upfront-region-container-bg"),b="none"!=v.css("background-image"),w=t(this).find(".upfront-output-bg-overlay:visible"),y=w.length>0,_=0,k=0,x=v.css("background-position");if(b)if("undefined"==typeof v.data("bg-position-y")&&v.data("bg-position-y",x.match(/\d+(%|px|)$/)[0]),"undefined"==typeof v.data("bg-position-x")&&v.data("bg-position-x",x.match(/^\d+(%|px|)/)[0]),_=v.data("bg-position-y"),k=v.data("bg-position-x"),"string"==typeof _&&_.match(/%$/)){var C=new Image;C.src=v.css("background-image").replace(/^url\(\s*['"]?\s*/,"").replace(/\s*['"]?\s*\)$/,""),_=parseInt(_,10)/100*(h-C.height)}else _=parseInt(_,10)}i>=d.top&&l>=n?((e||s)&&(m.position="fixed",f?m.top=c+o.top:m.bottom=g),s&&(m.left=0,m.right=0,f?u.find("> .upfront-region-container-bg").css("padding-top",h):u.find("> .upfront-region-container-bg").css("padding-bottom",h)),r&&(b?v.css("background-position",k+" "+(_+i-o.top)+"px"):y&&w.css("top",i-o.top))):e?(m.position="absolute",f?p>a&&i>=d.top+p-a?m.top=p-a+c:m.top=c:p>a&&n<=d.top+a?m.bottom=p-a+g:m.bottom=g):s?(m.position="relative",f&&(m.top=p-a+c),m.bottom="",m.left="",m.right="",u.find("> .upfront-region-container-bg").css({paddingTop:"",paddingBottom:""})):r&&(b?v.css("background-position",k+" "+(_+(p-a))+"px"):y&&w.css("top",p-a)),t(this).css(m)})}function m(){clearTimeout(V),V=setTimeout(function(){var o=t(window).scrollTop(),e=t(window).height();t(window).width();t(".upfront-image-lazy").each(function(){if(!t(this).hasClass("upfront-image-lazy-loading")){var i,a,n,r=this,s=t(this).offset(),u=t(this).height(),p=t(this).width();if((Y&&s.top+u>=o&&s.top<o+e||!Y)&&p>0&&u>0&&(i=t(this).attr("data-sources"),i?i=JSON.parse(i):a=t(this).attr("data-src"),"undefined"!=typeof i&&i.length||a)){if("undefined"!=typeof i&&i.length){for(var d=0;d<i.length;d++)(i[d][1]<=p||n>=0&&i[n][1]<p&&i[d][1]>p)&&(n=d);if(t(this).data("loaded")==n)return;a=i[n][0],t(this).data("loaded",n)}else if(a&&t(this).hasClass("upfront-image-lazy-loaded"))return;t(this).removeClass("upfront-image-lazy-loaded").addClass("upfront-image-lazy-loading"),t("<img>").attr("src",a).on("load",function(){t(r).hasClass("upfront-image-lazy-bg")?t(r).css("background-image",'url("'+t(this).attr("src")+'")'):t(r).attr("src",t(this).attr("src")),t(r).removeClass("upfront-image-lazy-loading").addClass("upfront-image-lazy-loaded")})}}})},100)}function v(){function o(o){var e=new t.Deferred;return o.$el.removeClass("upfront-image-lazy-loaded").addClass("upfront-image-lazy-loading"),t("<img />").attr("src",o.url).on("load",function(){o.$el.is(".upfront-image-lazy-bg")?o.$el.css("background-image",'url("'+o.url+'")'):o.$el.attr("src",o.url),o.$el.removeClass("upfront-image-lazy-loading").addClass("upfront-image-lazy-loaded"),e.resolve()}).on("error abort",function(){e.reject()}),e.promise()}function e(t,o){n.push({url:t,$el:o})}function i(){var e=new t.Deferred;return t.each(n,function(t,e){a.push(o(e))}),t.when.apply(t,a).always(function(){e.resolve()}),e.promise()}var a=[],n=[];return{add:e,start:i}}function b(t){function o(){t.reverse(),e()}function e(){var o=t.pop();return o?void o.start().done(e):!1}return{start:o}}function w(){var o=1500,i=t(".upfront-image-lazy"),a=new v,n=new v,r=new v,s=t(window).scrollTop(),u=t(window).height(),p=(t(window).width(),e());if(p=p&&"none"!==p?p:"desktop",!i.length)return!1;i.each(function(){var e=t(this),i=e.offset(),d=e.attr("data-sources"),l=e.attr("data-src"),h=e.attr("data-src-"+p),c=e.height(),f=e.width();if(e.attr("src",""),e.is(".upfront-image-lazy-loaded"))return!0;if(!d&&!l&&!h)return!0;if(0>=c&&0>=f)return!0;if(d){var f=e.width(),g=0;d=JSON.parse(d);for(var m=0;m<d.length;m++)(d[m][1]<=f||g>=0&&d[g][1]<f&&d[m][1]>f)&&(g=m);if(t(this).data("loaded")==g)return!0;l=d[g][0],t(this).data("loaded",g)}else h&&(l=h);i.top+c>=s&&i.top<s+u?a.add(l,e):i.top+c+o>=s&&i.top<s+u+o?n.add(l,e):r.add(l,e)}),t(window).off("scroll",m);new b([a,n,r]).start()}function y(){var o=e();t("[data-theme-styles]").each(function(){var e=t(this).attr("data-theme-styles"),i=[];e=e.replace('"default":','"defaults":'),e&&(e=JSON.parse(e)),t.each(e,function(t,o){i.push(o)}),t(this).removeClass(i.join(" ")),!o&&e.defaults?t(this).addClass(e.defaults):o&&(e[o]||e.defaults)&&t(this).addClass(e[o]?e[o]:e.defaults)})}function k(){var o=e();return t("#page").hasClass("upfront-layout-view")?x():(I&&t("#page").removeClass(I+"-breakpoint"),void(o&&"none"!==o&&"desktop"!==o?(t("html").addClass("uf-responsive"),t("#page").removeClass("desktop-breakpoint default-breakpoint").addClass("responsive-breakpoint "+o+"-breakpoint")):(t("#page").removeClass("responsive-breakpoint").addClass("default-breakpoint desktop-breakpoint"),x())))}function x(){t("html").removeClass("uf-responsive")}function C(){var o=e();o&&t("#page").removeClass(o+"-breakpoint")}function z(){var o=e()||"desktop",a=i()||"desktop";o!==a&&t(document).trigger("upfront-breakpoint-change",o)}function T(o,i){i=i||e()||"desktop",i&&(t("[data-preset_map]").each(function(){var o,e,a=t(this),n=a.attr("data-preset_map"),r=n?JSON.parse(n):{};"mobile"==i?r[i]=r[i]||r.tablet||r.desktop:"tablet"==i?r[i]=r[i]||r.desktop:r[i]=r[i],t.each(r,function(t,n){a.hasClass(n)&&(o=n,a.removeClass(n)),t!==i||e||(e=n)}),e&&(a.addClass(e),a.find("."+o).each(function(){t(this).removeClass(o),t(this).addClass(e)}))}),t(document).trigger("upfront-responsive_presets-changed",i))}function M(){t(window).off("resize.uf_layout"),t(window).off("scroll.uf_layout"),t(window).off("load.uf_layout"),t(".upfront-output-layout .upfront-parallax").uparallax("destroy")}var $=function(t,o,e){var i,a,n,r=null,s=0;e||(e={});var u=function(){s=e.leading===!1?0:(new Date).getTime(),r=null,n=t.apply(i,a),r||(i=a=null)};return function(){var p=(new Date).getTime();s||e.leading!==!1||(s=p);var d=o-(p-s);return i=this,a=arguments,0>=d||d>o?(clearTimeout(r),r=null,s=p,n=t.apply(i,a),r||(i=a=null)):r||e.trailing===!1||(r=setTimeout(u,d)),n}},I="",O="";window.upfront_get_breakpoint=e,window.upfront_get_previous_breakpoint=i;var A=!1,H=!1,D=[],E=!1,F=t(window).width(),S=!1;l();var j=$(l,300);t(window).on("resize.uf_layout",j);var N=$(c,100),U=$(h,100);o("flex")?(t("html").addClass("flexbox-support"),c(),t(window).on("load.uf_layout",c),t(window).on("resize.uf_layout",N)):(h(),t(window).on("load.uf_layout",h),t(window).on("resize.uf_layout",U)),f();var B=$(f,500);t(window).on("resize.uf_layout",B),t(window).on("load.uf_layout",B);var L={};g(),t(window).on("load.uf_layout",g);var P=$(g,100);t(window).on("scroll.uf_layout",g),t(window).on("resize.uf_layout",P);var W=t('<div class="upfront-lightbox-bg"></div>'),J=t('<div class="upfront-ui close_lightbox"></div>'),R=t('<div class="upfront-icon upfront-icon-popup-close"></div>');t("[data-group-link]").css({cursor:"pointer"}),t(document).on("click","[data-group-link]",function(){var o=t(this).data("groupLink"),e=t(this).data("groupTarget")||"_self";if(-1===o.indexOf("#"))return void window.open(o,e);if(null!==o.match(/^#.*/)){var i=t('.upfront-output-region-container[data-sticky="1"], .upfront-output-region-sub-container[data-sticky="1"]').first(),a=i.height()?i.height():0;return void t("html,body").animate({scrollTop:t(o).offset().top-a},"slow")}var n=o.split("#");if(n[0]===location.origin+location.pathname){var i=t('.upfront-output-region-container[data-sticky="1"], .upfront-output-region-sub-container[data-sticky="1"]').first(),a=i.height()?i.height():0;return void t("html,body").animate({scrollTop:t("#"+n[1]).offset().top-a},"slow")}return"_blank"===t(this).attr("target")?void window.open(o):void(window.location=o)}),t(document).on("click","a",function(o){function e(){J.html("").remove(),W.remove(),h.hide()}if(!(t(o.target).closest("div.redactor_box")>0))if(t("div#sidebar-ui").length>0&&"block"==t("div#sidebar-ui").css("display")){if(t(o.target).hasClass("upfront_cta"))return void o.preventDefault();var i=t(o.target).attr("href");if(i&&i.indexOf&&i.indexOf("#ltb-")>-1){o.preventDefault();var a=Upfront.Application.layout.get("regions"),n=i.split("#");if(region=a?a.get_by_name(n[1]):!1,region){_.each(a.models,function(t){"lightbox"==t.attributes.sub&&Upfront.data.region_views[t.cid].hide()});var r=Upfront.data.region_views[region.cid];r.show()}}}else{var i=t(this).attr("href");if(i&&-1!==i.indexOf("#")){if("burger"==t(this).closest("div.upfront-navigation").data("style")&&t(this).parent("li.menu-item.menu-item-has-children").length>0){var s=t(this).parent("li.menu-item.menu-item-has-children");s.children("ul.sub-menu").closest("li.menu-item").hasClass("burger_sub_display")?s.children("ul.sub-menu").closest("li.menu-item").removeClass("burger_sub_display"):s.children("ul.sub-menu").closest("li.menu-item").addClass("burger_sub_display");var u=s.closest("ul.menu"),p=u.closest("div.upfront-output-unewnavigation").children("div");if("pushes"==p.data("burger_over")&&"top"==p.data("burger_alignment")){t("div#page").css("margin-top",u.height());var d=t("div#wpadminbar").outerHeight();u.offset({top:d,left:t("div").offset().left})}}o.preventDefault();var l=i.split("#");if(""!==l[1].trim()){if(0==l[1].trim().indexOf("ltb-")){var h=t("div.upfront-region-"+l[1].trim());return W.css("background-color",h.data("overlay")).insertBefore(h),("yes"==h.data("closeicon")||"yes"==h.data("addclosetext"))&&(h.prepend(J),"yes"==h.data("addclosetext")&&(J.append(t("<h3>"+h.data("closetext")+"</h3>")),"yes"==h.data("closeicon")&&J.children("h3").css("margin-right","40px")),"yes"==h.data("closeicon")&&J.append(R),J.bind("click",function(){e()})),"yes"==h.data("clickout")&&W.bind("click",function(){e()}),h.css("width",t("div.upfront-grid-layout").first().width()*h.data("col")/24),h.show().css({"margin-left":-parseInt(h.width()/2),"margin-top":-parseInt(h.height()/2)}),t(document).trigger("upfront-lightbox-open",h),void o.preventDefault()}var c=t('.upfront-output-region-container[data-sticky="1"], .upfront-output-region-sub-container[data-sticky="1"]').first(),f=c.height()?c.height():0;if(null!==i.match(/^#.*/))return void t("html,body").animate({scrollTop:t(i).offset().top-f},"slow");var g=i.split("#");return g[0]===location.origin+location.pathname?void t("html,body").animate({scrollTop:t("#"+g[1]).offset().top-f},"slow"):"_blank"===t(this).attr("target")?void window.open(i):void(window.location=i)}}}});var V,Y=window._upfront_image_lazy_scroll,Q=$(m,100);t(window).on("resize",Q),Y?(t(window).on("scroll",Q),m()):t(w),y();var q=$(y,100);t(window).on("resize.uf_layout",q),k();var G=$(k,100);t(window).on("resize.uf_layout",G);var K=$(z,20,{trailing:!1});t(window).on("resize.uf_layout",K);var X=$(T,200,{trailing:!1});t(document).on("upfront-breakpoint-change",X),z(),t(document).on("upfront-load",function(){Upfront.Events.once("application:mode:before_switch",M),Upfront.Events.once("application:mode:before_switch",C),Upfront.Events.once("layout:render",x)});var Z=t(".upfront-output-wrapper .upfront-inserted_image-basic-wrapper").find(".upfront-inline-panel-item");Z.length>0&&Z.remove()});