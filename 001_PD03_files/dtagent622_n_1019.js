(function(){if(window.dT_)return;var f=!0,h=null,m=!1;function n(){try{return window.performance.timing.navigationStart+Math.floor(window.performance.now())}catch(a){return(new Date).getTime()}}var aa=n(),p=window,s=p.setTimeout,ba=p.XMLHttpRequest,ca=p.ActiveXObject,t=p.parent,u={version:"1019"},u={version:[6,2,2,"1019"]};u.version[3]=parseInt(u.version[3]);p.dT_||(document.dT_=window.dT_,p.dT_=u);
function da(){if("string"!==typeof document.title){var a=document.getElementsByTagName("title")[0];return a.innerText||a.textContent}return document.title}function v(a,b){var c=-1;b&&(c=a.indexOf(b));return c}function ea(){return ba?new ba:ca?new ca("MSXML2.XMLHTTP.3.0"):window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("MSXML2.XMLHTTP.3.0")}function w(a,b){return parseInt(a,b||10)}
function fa(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++)if(c=v(e[b],"\x3d"),d=e[b].substring(0,c),c=e[b].substring(c+1),d=d.replace(/^\s+|\s+$/g,""),d===a)return"DTSA"===a.toUpperCase()?decodeURIComponent(c):c;return""}function ga(a){document.cookie=a+'\x3d"";path\x3d/'+(x.domain?";domain\x3d"+x.domain:"")+"; expires\x3dThu, 01-Jan-70 00:00:01 GMT;"}
function ha(a,b){b||0==b?(b="DTSA"===a.toUpperCase()?ia(b):b,document.cookie=a+"\x3d"+b+";path\x3d/"+(x.domain?";domain\x3d"+x.domain:"")):ga(a)}function y(a,b){for(var c=1;c<arguments.length;c++)a.push(arguments[c])}u.dC=ga;u.io=v;u.sC=ha;u.gC=fa;u.gx=ea;u.st=function(a,b){return s(a,b)};u.nw=n;u.pn=w;var z=[],A=navigator.userAgent;
try{var ja=/Firefox[\/\s](\d+\.\d+)/,ka=/(iPod|iPhone|iPad)/,la=/AppleWebKit/;if(0<=v(A,"MSIE"))z.ie=w(A.substr(A.lastIndexOf("MSIE")+5,3));else if(0<=v(A,"Trident"))0<=v(A,"rv:")?z.ie=w(A.substr(A.lastIndexOf("rv:")+3,2)):0<=v(A,"rv ")&&(z.ie=w(A.substr(A.lastIndexOf("rv ")+3,2)));else if(0<=v(A,"Android"))z.ab=parseFloat(A.substr(v(A,"Android")+8,1));else if(A.match(ka)&&A.match(la)){var ma=/Version\/([0-9]*\.[0-9]*)/;A.match(ma)||(ma=/OS ([0-9]*_[0-9]*)/);z.msf=parseFloat(A.match(ma)[1])}else if(("Safari"===
navigator.appName||-1<v(A,"Safari"))&&-1===v(A,"Chrom"))z.sf=w(A.substr(A.lastIndexOf("Version/")+8,1));else if(p.opera)z.op=w(p.opera.version().split(".")[0]);else if(0<=v(A,"OPR/"))z.op=w(A.match(/OPR\/([0-9]*\.[0-9]*)/)[1]);else if(ja.test(A)){var na=w(A.match(ja)[1]);z.ff=-1===na?0:na}else{var oa=v(A,"Chrom");-1<oa&&(z.ch=w(A.substring(oa+7,oa+9)))}}catch(pa){}u.gBI=function(){return z};u.hyb=function(){return 0===v(document.location.href,"file")};
var x={reportUrl:"dynaTraceMonitor",n:"",csu:"dtagent",domainOverride:m},qa=document.getElementsByTagName("script"),sa=ra(qa);
if(0<sa)for(var ta,ua=sa-1;0<=ua;ua--)if(ta=qa[ua],ta.attributes){var va=ta.attributes.getNamedItem("data-dtconfig");if(va){var wa=ta.src,xa=va.value;if(wa){var ya=/([a-zA-Z]*)[0-9]{0,3}_[a-zA-Z_0-9]*_[0-9]+/g.exec(wa);if(ya&&ya.length){var za=ya[0];x.csu=ya[1];x.featureHash=za.split("_")[1];x.dtVersion=u.version[0]+""+u.version[1]}}if(xa)for(var Aa=xa.split("|"),Ba=0;Ba<Aa.length;Ba++){var Ca=v(Aa[Ba],"\x3d");-1===Ca?x[Aa[Ba]]="1":x[Aa[Ba].substring(0,Ca)]=Aa[Ba].substring(Ca+1,Aa[Ba].length)}break}}
u.gAN=function(){return x.csu};u.smbi=function(a){var b=p.dT_;if(b.ism(a)&&-1===v(b.iMod(),a))return b.iMod(a),f;b.ism(a)&&p.console&&p.console.log("WARNING: "+('Module "'+a+'" already enabled!'));return m};u.isc=function(a){var b;if("object"==typeof a){b=[6,2,0,0];for(var c=0;c<b.length;c++){if(a[c]<b[c])return m;if(a[c]>b[c])break}return f}return a&&383<=a};u.cfg=function(a){return x[a]};u.ism=function(a){return!a||1!==a.length||"undefined"===typeof x.featureHash?m:-1!==v(x.featureHash,a)};
u.iMod=function(a){a&&(x.n+=a);return x.n};var Da="\t\n\r";function Ea(a){return a?String.trim?a.trim():a.replace(/^\s+|\s+$/g,""):h}function Fa(a,b){if(a.indexOf)return a.indexOf(b);for(var c=a.length;c--;)if(a[c]===b)return c;return-1}var B=[];function C(a,b,c){a.addEventListener?a.addEventListener(b,c,f):a.attachEvent&&a.attachEvent("on"+b,c);for(var d=m,e=B.length;0<=--e;){var g=B[e];if(g.object===a&&g.event===b&&g.m===c){d=f;break}}d||y(B,{object:a,event:b,m:c})}
function Ga(a,b,c){for(var d=B.length;0<=--d;){var e=B[d];if(e.object===a&&e.event===b&&e.m===c){B.splice(d,1);break}}a.removeEventListener?a.removeEventListener(b,c,f):a.detachEvent&&a.detachEvent("on"+b,c)}function Ha(a){try{var b=a.tagUrn;return b&&-1!==v(b,"schemas-microsoft-com:vml")}catch(c){return f}}function Ia(a){var b=0;if(a)for(var c=a.length,d=0;d<c;d++)b=31*b+a.charCodeAt(d),b&=b;return b}function Ja(a,b){try{p.sessionStorage[a]=b}catch(c){ha(a,b)}}
function Ka(a){try{if(p.sessionStorage)return p.sessionStorage[a]}catch(b){}return fa(a)}var La={"!":"%21","~":"%7E","*":"%2A","(":"%28",")":"%29","'":"%27",$:"%24",";":"%3B",",":"%2C"},Oa={"^":"^^","|":"^p",",":"^c",";":"^s"};function ia(a){a=encodeURIComponent(a);var b=[];if(a)for(var c=0;c<a.length;c++){var d=a.charAt(c),e=La[d];e?y(b,e):y(b,d)}return b.join("")}function D(a){var b=[];if(a)for(var c=0;c<a.length;c++){var d=a.charAt(c),e=Oa[d];e?y(b,e):y(b,d)}return b.join("")}
function Pa(a){return a.replace(/[`\\"'<>]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function ra(a){var b=a.length;if("number"===typeof b)a=b;else{for(var b=0,c=2048;a[c-1];)b=c,c+=c;for(var d=7;1<c-b;)d=(c+b)/2,a[d-1]?b=d:c=d;a=a[d]?c:b}return a}function Qa(a){if(a){for(var b=[],c=0;c<a.length;c++){var d=a.charAt(c),e=x.spc;e||(e="");e+=Da;-1===v(e,d)&&y(b,d)}a=b.join("")}return a}function Ra(){var a=document.location.href,b=v(a,"#");0<=b&&(a=a.substr(0,b));return a}
function Sa(a,b){a=Math.floor(a);(b||Ta)&&a&&ha("dtLatC",a)}function Ua(){return p.performance&&p.performance.timing&&(!z.ff||9<z.ff)?p.performance:h}var Va={};function Wa(a,b,c,d){if(Object.defineProperty&&(!z.ie||8<z.ie)){Va[b]=a[b];var e=function(c){Va[b]=c;d&&d.apply(a,[c]);return Va[b]};try{Object.defineProperty(a,b,{get:function(){return c?c.apply(a,h):Va[b]},set:e,configurable:f})}catch(g){}}}
function Xa(a,b){if(a[b]&&Object.defineProperty&&(!z.ie||8<z.ie)){var c=a[b];try{delete a[b],Va[b]=h,a[b]=c}catch(d){Object.defineProperty(a,b,{get:function(){return Va[b]},configurable:f})}}}function Ya(a){var b=document.createElement("a");b.href=a;return b.cloneNode(f).href}
function Za(a){try{var b=window;if(!b.location)return a;var c=b.location,d=c.origin;if(!d){if(!c.protocol||!c.host)return a;d=c.protocol+"//"+c.host}var e=Ya(a);return e.substr(0,d.length+1).toLowerCase()===(d+"/").toLowerCase()?e.substr(d.length):e}catch(g){return a}}u.tau=Ya;u.icr=function(a){return(0==v(a,"http")||0==v(a,"//"))&&v(location.href,location.host)!=v(a,location.host)};u.aIOf=Fa;u.ael=C;u.rel=Ga;u.lv=Ka;u.sv=Ja;u.gh=function(a){return!a||-1===a.indexOf("://")?h:a.split("/")[2].split(":")[0].toLowerCase()};
u.cvs=function(a,b,c,d){if(x.ffi)return f;for(var e=m,g=e,k=e,l=0;l<a.length&&(!e||!g);l++)a[l]=a[l].split("."),e=a[l][0]==b,g=a[l][1]==c,!k&&e&&(k=f);a=e&&g||k;if(!e||!g)k?$a(d+" version ("+b+"."+c+") official not supported. Instrumentation active nonetheless, because major version is supported."):$a(d+" not instrumented because version ("+b+"."+c+") not supported.");return a};u.esc=ia;u.aesc=D;u.rsc=Qa;u.tpesc=function(a){a=a.replace(/_/g,"_5F").replace(/%/g,"_25");return D(a)};u.ulc=Sa;u.gP=Ua;
u.apl=Wa;u.rpl=Xa;u.dbg=function(a){ha("dtUseDebugAgent",a)};u.dbc=function(a){ha("dt_dbg_console",a)};u.gEL=ra;var ab=6E8,bb="dtPC",cb="dtCookie",F=n()%ab+"_"+w(1E3*Math.random());u.c=F;function db(){var a=fa(bb),b=[];if(a&&"-"!==a)for(var a=a.split("p"),c=0;c<a.length;c++){var d=a[c].split("h");if(2===d.length&&d[0]&&d[1]){var e=d[0],g=w(e.split("_")[0]),k=n()%ab;k<g&&(k+=ab);g+9E5>k&&y(b,{c:e,b:d[1]})}}return b}function eb(a){return/^[0-9A-Za-z_\$\+\/\.\-\*%\|]*$/.test(a)}
function fb(){var a=fa(cb);return a&&eb(a)?a:""}function gb(){var a=db();if(0<a.length){for(var b=[],c=0;c<a.length;c++)a[c].c!==F&&y(b,a[c]);hb(b)}}function hb(a){var b="";if(a){for(var b=[],c=0;c<a.length;c++)0<c&&0<b.length&&y(b,"p"),y(b,a[c].c),y(b,"h"),y(b,a[c].b);b=b.join("")}b||(b="-");ha(bb,b)}u.gFId=function(){return F};u.gDtc=function(){var a=fb();if(a){var b=a.indexOf("|");-1!==b&&(a=a.substring(0,b))}return a};
u.gPAH=function(a){a=F+"h"+u.esc(a);var b=fa(bb);return b&&0<=v(b,a)&&!u.hyb()?h:a};u.g=h;u.o=h;u.F=0;var ib=h,jb,kb,lb={};function mb(){var a=t.dT_.version,b=u.version;if("string"===typeof a)return a===b;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return m;return f}try{t&&(t!==self&&t.dT_&&mb())&&(kb=t.dT_,ib=t.dT_.tdto())}catch(nb){}ib?(u.g=ib.g,u.o=ib.o,jb=kb.c,kb.F++):(u.g=F,u.o=da());
function ob(){var a=u;try{for(var b=t;b&&b!==self;){if(b.dT_)return b.dT_.tdto();b=b!==b.parent?b.parent:m}}catch(c){}return a}u.tp=function(){return!ib};u.tdto=ob;u.aFU=function(a){a=D(a);lb[a]||(lb[a]="1")};u.iRO=function(a){return"1"===lb[a]};
function pb(a,b,c,d){function e(a){var c=n()-d;qb(b)||Sa(c/2);for(var c=a&&a.split("|"),e=1;e<c.length;e++){var q=c[e].split("\x3d");if("dtCookie"==q[0])q=decodeURIComponent(q[1]),eb(q)&&ha("dtCookie",q);else if("name"==q[0])try{p.localStorage&&p.localStorage.setItem(x.csu+"_"+x.app+"_Store",a)}catch(r){}else"enabled"==q[0]&&"false"==q[1]&&(Ja("dtDisabled",f),u.disabled=f)}}"onreadystatechange"in a||(a.onload=function(){e(a.responseText)});a.onreadystatechange=function(){a&&4==a.readyState&&(200==
a.status?e(a.responseText):rb&&z.sf&&sb.push({path:b,data:c}),a=h)}}function tb(a,b,c,d,e){for(var g=3,k=0;0<g;)try{var l,q=x.cors,r;if(q){var E=ea();"withCredentials"in E||(E=window.XDomainRequest?new XDomainRequest:h);r=E}else r=ea();l=r;if(!l)break;k=n();a&&a(l,b,d,k);"onreadystatechange"in l?l.open("POST",b,c):l.open("POST",b);"setRequestHeader"in l&&(l.setRequestHeader("Content-Type","text/plain;charset\x3dUTF-8"),e&&!q&&l.setRequestHeader("x-dtreferer",e));l.send(d);g=0}catch(H){g--}}
function ub(a,b){try{x.markSendBeacon&&(a+=(0<=v(a,"?")?"\x26":"?")+"VIASENDBEACON\x3d1"),navigator.sendBeacon(a,b||"")}catch(c){}}var vb=navigator&&"sendBeacon"in navigator;function wb(a){return vb&&!x.app&&!x.cors&&!x.dsndb&&!x.spl&&!a}var I=h,xb=[],yb=m,zb,Bb=f,Cb=m,Db,Eb,sb=[];function Fb(){var a=this;a.f=[];a.a=function(b,c){y(a.f,[b,c])}}function Gb(a,b,c){a=Hb(a,b,m);I&&Ib(m,c,a)}
function Hb(a,b,c){var d="",e=h;if(a){e="";Jb=0;var g=m;b="";for(var k in J)if(J.hasOwnProperty(k))if(d=J[k],Kb(d))g||(g=f,$a("Maximum open actions exceeded configured amount of "+(x.moa||30)+", dropping action "+d));else{var e=e?e+",":e,l=Lb(J[k],m,m,f);l&&!b&&(b=d.j());e+=l}}else if(e="",k=K.length,b&&(J=[]),b="",0<k){for(d=0;d<k;d++)if((l=Lb(K[d],f,c,m))&&0<l.length)b||(b=K[d].j()),"_load_"==K[d].type&&(Ta=f,L&&(e=L.B?"d|"+L.b+"|"+L.name+"|"+L.type+"|"+L.info+"|"+L.c+"|"+L.start+"|"+L.location+
"|"+L.title:"s|"+L.b+"|"+L.name+"|"+L.type+"|"+L.info+"|"+L.c+"|"+L.start,L=h)),0<e.length&&(e+=","),e+=l;K=[];for(g in J)J.hasOwnProperty(g)&&y(K,J[g])}e={actions:e,referer:b};d=e.actions;e=e.referer;I=h;if(0<d.length){I=new Fb;I.a("a",ia(d));I.a("v",x.dtVersion);I.a("fId",F);a&&I.a("PV",1);u.g!==F&&I.a("pId",u.g);jb&&I.a("pFId",jb);I.a("rId",x.rid);I.a("rpId",x.rpid);if(!a){u.las()&&I.a("title",ia(Qa(da()).substring(0,100)));a:{k=(g=Ua())?g.timing:m;if(g&&k&&(g=k.domComplete,k=k.domContentLoaded,
g||k)){k=g?g:k;break a}k=zb}k&&I.a("domR",k)}Mb(c)&&I.a("unload","xhr");Nb(a);Bb=m}else Bb===m&&(I||(I=new Fb),c=I.f.length,Nb(a),I.f.length>c?(I.a("fId",F),I.a("v",x.dtVersion)):I=h);return e}function Nb(a){for(var b=0;b<xb.length;b++)xb[b](I,a)}function Ob(){for(var a=[],b=0;b<I.f.length;b++)0<b&&y("$"),y(a,"$",I.f[b][0],"\x3d",I.f[b][1]);return a.join("")}function Pb(){var a=Ob(),b=z.ie?1500:7E3;x.msl&&(b=Math.min(b,w(x.msl)));return 0===a.length%b?w(a.length/b):w(a.length/b)+1}
function Qb(a,b,c){var d=document.createElement("img");d.onerror=function(){Sa((n()-b)/2)};d.setAttribute("src",c+"?"+a)}
function Ib(a,b,c){var d;if(!u.disabled){var e=location.href;c==e&&(c="");var g=n();I.a("time",g);u.hyb()&&I.a("url",encodeURIComponent(e));d=z;var k,l,q=a&&wb(!!c);if(q)k=f,b=m;else{var r=x.fsc;k=x.fso;var E=d.op&&15<=d.op&&!k;l=Pb();k=!a||a&&!(d.sf||d.op&&!E||d.ff&&(1<l||x.sffs||17<d.ff)||d.ie&&(9>d.ie||x.sies)||d.msf||d.ab||d.ch&&(22<d.ch||r));b&&(k=m);(b=(1==l||E)&&a&&(d.ie&&9>d.ie||d.ch&&!r||E))&&x.cors&&(b=k=m)}a=k;d=b;b=x.cors;k=Ob();r=h;if((x.spl||d)&&!b){l=z.ie?1500:7E3;x.msl&&(l=Math.min(l,
w(x.msl)));var E=Pb(),H,Ma=n(),G=0;if(1<E){if(100>E)for(var r=[],Na=0;Na<E;Na++){var Ab="sid\x3d"+Ma+"\x26p"+(Na+1)+"_"+E+"\x3d";x.app&&(Ab="app\x3d"+x.app+"\x26"+Ab);G+l<=k.length?(H=k.slice(G,G+l),"%"==H.charAt(H.length-1)&&k.length>=G+l+1&&(H+=k.charAt(G+l),H+=k.charAt(G+l+1),G+=2),"%"==H.charAt(H.length-2)&&k.length>=G+l+2&&(H+=k.charAt(G+l),G+=1)):H=k.slice(G);y(r,Ab+H);G+=l}}else r=[k]}else r=[k];k=r;if(k!==h)if(r=x.reportUrl?x.reportUrl:"dynaTraceMonitor",d&&!c)for(c=0;c<k.length;c++)Qb(k[c],
g,r);else if(g=r,d=k[0],r=m,b?(g+="?dtCookie\x3d"+(encodeURIComponent(fb())||"null"),g+=";dtLatC\x3d"+encodeURIComponent(fa("dtLatC")),g+=";referer\x3d"+encodeURIComponent(c||e),r=f):q&&c&&(g+="?referer\x3d"+encodeURIComponent(c),r=f),x.spl&&!b)for(e=0;e<k.length;e++)b=g,d=h,r||(b+="?"),b+=k[e],q&&!c?ub(b,d):tb(pb,b,a,d,c);else x.app&&(g+=(r?";":"?")+"app\x3d"+x.app),q&&!c?ub(g,d):tb(pb,g,a,d,c)}}
function Rb(a){if(yb){var b=m;a?n()+a<Eb&&(b=f):b=f;b&&(clearTimeout(Db),yb=m)}yb||(Eb=n()+(a||0),a?(Db=s(Sb,a||0),yb=f):Sb())}function Sb(){yb=m;Gb(m,m,m)}u.id=function(){return!!u.disabled};u.ss=function(a,b,c){Gb(b,c,a)};u.asl=function(a){y(xb,a)};u.sMPS=function(a){Rb(a)};var M=h,Tb=h,K=[],J=[],Jb=0,Ub=0,N=[],O=[],P,Ta=m,Vb=z.msf?500:0,Wb=1;u.L=Xb;var Yb=[];function Q(){for(var a=0;a<Yb.length;a++)Yb[a]()}function Xb(){return J}
function Zb(a,b,c,d,e,g,k,l,q){var r={b:Wb++,start:c,stop:d,type:a,name:b,info:k,i:e,next:[],e:h,q:h,s:h,t:h,p:h,K:h,r:g?w(2147483647*Math.random())+1:0,parent:h,H:location.href,z:l,A:q,j:function(){return r.parent?r.parent.j():r.H},add:function(a){a&&a.name&&y(r.next,a)}};r.v=s(function(){r&&(r.J=f,!r.stop&&!$b(r)&&R(r.b))},1E3*w(x.oat||180));return r}function $b(a){for(var b=m,c=0;c<a.next.length;c++)if(!a.next[c].stop||$b(a.next[c])){b=f;break}return b}
function ac(){var a=m,b=[],c;for(c in J)if(J.hasOwnProperty(c)){var d=J[c];0<d.q&&(n()>d.e&&(d.e+=6E4,y(b,d)),a=f)}0<b.length&&Gb(f,f,m);for(c=0;c<b.length;c++)b[c].q--;a&&s(ac,1E3)}function bc(a,b){if(a)for(var c=h,d=0;d<a.length;d++){c=a[d];if(c.b==b)return c;if(c.next&&(c=bc(c.next,b),c!==h))return c}return h}function cc(a){var b=h;K&&(b=bc(K,a));return b}
function dc(a,b,c,d,e,g,k,l){c||(c=n());a=Zb(b,a,c,h,h,e,g,k,l);"boolean"==typeof d&&d&&(d=M);if(d){if(b=h,b="number"==typeof d?cc(d):"object"==typeof d?d:M){b.add(a);a.parent=b;ec(a);for(var q in J)J.hasOwnProperty(q)&&(J[q]&&J[q].e>a.start+1E4)&&(J[q].e=a.start+1E4)}}else ec(a),fc(a),y(J,a),M=a,y(K,a),a.e=a.start+1E4,a.q=100,s(ac,5E3);return a}
function ec(a){if(M!=a)if(M&&(Tb=M),M=a){a=a.b;for(var b=db(),c=m,d=0;d<b.length;d++)b[d].c===F&&(b[d].b=ia(a),c=f);c||y(b,{c:F,b:ia(a)});hb(b)}else gb()}
function R(a,b,c){b||(b=n());var d=[];if(K)for(var e=0;e<K.length;e++){var g=gc(K[e],a,b,c);"string"!==typeof g&&(d[e]=g)}a=m;c=[];for(b=0;b<K.length;b++)d[b]?a=d[b]:($b(K[b])||y(c,K[b].b),S=h);d=[];for(b in J)J.hasOwnProperty(b)&&(e=J[b],0<=Fa(c,e.b)?y(d,b):P&&(g=kb.gca(),e.t=t&&g[g.length-1]==P?"S":"A",P=h));for(b=0;b<d.length;b++)c=d[b],e=J,e.splice(c,c-(c||NaN)+1||e.length);d=a;Rb();ec(d)}
function gc(a,b,c,d){var e,g,k=a.b==b;if(k){a.stop=c;d&&(a.start=d);a.i=ra(document.getElementsByTagName("*"));a.v&&window.clearTimeout&&window.clearTimeout(a.v);var l=a.parent;if(l&&!l.stop&&l.J){var q=m;for(g=0;g<l.next.length;g++)if(!l.next[g].stop&&l.next[g].b!=b){q=f;break}q||s(function(){l.stop||R(l.b,c)},0)}}else a.stop||(e=a);q=m;if(a.next&&a.next.length)for(g=1;g<=a.next.length;g++){var r=gc(a.next[a.next.length-g],b,c,d),E="string"===typeof r,q=q||E||r&&r.D===b;E||(e=r||e);if((q||k)&&e)break}if(k||
q)"object"===typeof e?e.D=b:e="found";return e}function Lb(a,b,c,d){if(a.p){var e=[],g=["0"];g[1]=a.s;g[2]=a.p;g[3]=a.t;e[0]=g.join("|");e[1]=hc(a,1,b,c,d).result;return!e[1]?h:e.join(",")}return hc(a,1,b,c,d).result||h}
function hc(a,b,c,d,e){a.i||(a.i=ra(document.getElementsByTagName("*")));var g=[];if(a.next&&0<a.next.length){for(var k=0;k<a.next.length;k++){var l=a.next[k],l=hc(l,b+1,c,d,e),q=l.result;if(q)g.push(q);else if(!l.C)return{}}if(c)for(k=0;k<a.next.length;k++)if(l=a.next[k],l.stop)a.stop&&l.stop>a.stop&&(a.stop=l.stop);else{a.stop=m;break}}if(!d&&!e&&(!a.stop||0==a.stop))return{};c=[];c[0]=b.toString();c[1]=a.b;c[2]=D(a.K||a.name);c[3]=D(a.type);c[4]=a.info?D(a.info):"-";c[5]=a.start;c[6]=a.stop||0;
c[7]=a.i;c[8]="-";c[9]="-";c[10]="-";c[11]="-";e=8;1==b&&a.h&&(c[8]=a.h,e=9);a.r&&(c[9]=a.r,e=10);if(a.z&&(!z.ie||7<z.ie))c[10]=D(a.z),e=11;a.A&&(c[11]="1",e=12);c.splice(e,c.length-e);b=m;a.stop||d||a.next&&a.next.length||!Kb(a)?(g.unshift(c.join("|")),Jb++):Kb(a)&&(b=f);a={C:b};1<g.length?a.result=g.join(","):g[0]&&(a.result=g[0]);return a}function Kb(a){var b=["_warning_","_error_","_log_","_rv_","_rs_"];return Jb+1>(w(x.moa)||30)&&-1==Fa(b,a.type)}
function Mb(a){if(0<Ub||a&&0<N.length)if(a=N.length,0<a)return N[a-1];return h}function ic(a,b,c,d,e){var g=h;b||(b=3);var k=jc(),l="";k&&(k.info=a||"-",l=k.info);var q=Mb(m);!q&&(k&&k.b)&&(q=k.b);d=d?Za(d):h;q?g=kc(q):k?3<=b&&(g=lc(k.getName(),k.type,k.start,h,c,l,d,e),k.b=g):M?1<=b&&(g=kc(M.b,a,"xhr",n(),c,l,d,e)):x.cux&&(g=lc("Unlinked XHR","xhr",n(),h,c,l,d,e));return g}function lc(a,b,c,d,e,g,k,l){a=dc(a,b,c,d,e,g,k,l);a.l=1;O[a.b]=a;return a.b}
function kc(a,b,c,d,e,g,k,l){a=O[a];var q=-1;a?(a.l++,q=a.b):M&&(q=lc(b,c,d,M.b,e,g,k,l));return q}function qb(a){try{if(a&&mc&&mc.getEntriesByName){var b=Ya(a);0==v(b,"/")?b=location.protocol+"//"+location.host+b:0!=v(b,"http")&&(b=location.href.substr(0,location.href.lastIndexOf("/")+1)+b);var c=mc.getEntriesByName(b);if(c.length){var d=c[c.length-1];Sa((d.requestStart-d.startTime)/2);return f}}}catch(e){}return m}
function nc(){var a=0,b;for(b in O)if(b&&O.hasOwnProperty(b))try{a+=O[b].l}catch(c){}return a}function fc(a){P=h;if(kb){var b=kb.gca();if(P=b[b.length-1])a.s=P.b,a.p=P.name,P.h?P.h++:P.h=1}}function T(a,b,c){var d=n();a=Qa(a);b=Zb(b,a,d,d,-1);(c=oc(b,c))&&Rb();return c}function oc(a,b){var c;if(c="undefined"==typeof b?M:cc(b))return c.add(a),m;fc(a);y(K,a);return f}function $a(a,b){T(a,"_warning_",b)}function pc(){return M?M.name:h}
function qc(a){var b=a==pc();if(!Tb)return!b;a=a===Tb.name&&3E3>=n()-Tb.start;return!b&&!a}u.ea=function(a,b,c,d,e,g,k){if(4>arguments.length||"undefined"==typeof d)d=f;return dc(a,b,c,d,h,e,g,k).b};u.la=function(a,b,c){Q();R(a,b,c)};u.aa=oc;u.cra=Zb;u.lx=function(a,b,c,d){c?s(function(){qb(b)},0):qb(b);d=d||n();s(function(){var b=d,c=0;if(c=O[a])c.l--,c=c.l,0>=c&&(R(a,b),O[a]=h,delete O[a])},Vb);return 1>=nc()?(Q(),f):m};u.ex=ic;u.ec=function(a){a&&(y(N,a),Ub++)};
u.lc=function(a){a&&(Ub--,s(function(){for(var b=-1,c=N.length-1;-1==b&&0<=c;)N[c]==a&&(b=c),c--; -1!=b&&(b==N.length-1?N.pop():N.splice(b,1))},0))};u.irs=Rb;u.eV=function(){T("visit end","_endVisit_")};u.pe=function(a,b){if(rc<=(u.cfg("mepp")||10))rc++,T(a,"_error_",b)};u.pw=$a;u.pl=function(a,b){T(a,"_log_",b)};u.rv=function(a,b){var c=n(),c=Zb("_rv_",a+"\x3d"+b,c,c,0);oc(c);Rb()};u.rs=function(a,b,c){var d=n();a=Zb("_rs_",a+"\x3d"+b,d,d,0);oc(a,c);Rb()};u.pcn=T;
u.ewa=function(a){a=ic(a,3,f);return!a?h:cc(a)};u.gWRI=function(a){return a.r};u.gAID=function(a){return a.b};u.ca=function(){return M};u.can=pc;u.isci=qc;u.noa=function(){return!M||0<M.stop};u.ti=Q;u.las=function(){return Ta};u.gca=Xb;u.gAR=function(a){isNaN(a)||(a=O[a]);return a?a.j():h};u.gAA=function(a){return O[a]};var sc,tc=m,uc=x.mepp,vc;isNaN(uc)||(vc=w(uc));!uc&&0!=vc&&(vc=10);var rc=0;
function wc(a){try{if(p.event.errorUrl||a.filename)rc++,rc<=vc&&(11>z.ie?T(p.event.type+":"+p.event.errorUrl+"["+p.event.errorLine+"] Code: "+p.event.errorCode+": "+p.event.errorMessage,"_error_"):T(a.type+":"+a.filename+"["+a.lineno+":"+a.colno+"] "+a.message,"_error_"))}catch(b){}}
function xc(a,b,c){var d=m;if(!tc){tc=f;try{sc&&(sc!=xc&&"function"==typeof sc)&&(d=sc(a,b,c));var e=h;if(e="object"==typeof a?a.srcElement?a.srcElement.outerHTML&&200>a.srcElement.outerHTML.length?Pa(document.URL.split("#")[0])+"[-]: Error at '"+a.srcElement.outerHTML+"'":Pa(document.URL.split("#")[0])+"[-]: Error at tag: '"+a.srcElement.tagName+"'":"unknown error":"undefined"==typeof b||"undefined"==b?a:Pa(b)+"["+c+"]: "+a){var g=jc();g&&(e+=", user action: "+g.getName());rc++;rc<=vc&&!d&&T(e,"_error_")}}catch(k){}tc=
m}return d}z.ie?C(p,"error",wc):p.onerror!=xc&&(p.onerror&&(sc=p.onerror),p.onerror=xc);try{z.ie||Wa(window,"onerror",function(){return xc},function(a){sc=a})}catch(yc){}C(p,"unload",function(){Xa(window,"onerror");p.onerror=h});u.gne=function(){return rc};u.iet=function(){rc++};
var zc="BUTTON",Ac="INPUT",Bc="HIDDEN",Cc="SUBMIT",Dc="RESET",Ec="IMAGE",Fc="IMG",Gc="A",Hc="FORM",Ic="#DOCUMENT",Jc="HTML",Kc="BODY",Lc="HEAD",Mc="SELECT",Nc="unknown",Oc="TEXTAREA",Qc=Pc(p.location.href),Rc=h,Sc=0,Tc=1,Uc=2,Vc=3,Wc=4,Xc=0;function Yc(a){if(a)for(var b=document.getElementsByTagName("LABEL"),c=ra(b),d=0;d<c;d++)if(b[d].htmlFor==a)return a=b[d],U(a.innerText,a.textContent);return h}
function U(a){for(var b=0;b<arguments.length;b++){var c=arguments[b];if(c&&"string"==typeof c&&Ea(c))return Ea(c)}return h}function Zc(a){if(a){if(0===v(a,"data:"))return h;a=a.split("/");if(0<a.length)return a[a.length-1].split(".")[0]}return h}function Pc(a){if(a){var b=a.split("/");if(0<b.length&&(b=Ea(b[b.length-1]),b!==h))return b}return a}
function $c(a,b){var c=b.nodeName?b.nodeName.toUpperCase():Nc,d=b.type&&"string"===typeof b.type?b.type.toUpperCase():h,e=h;switch(a){case Sc:c==Ac&&d!=Bc&&(c=d&&(d==zc||d==Cc||d==Dc||d==Ec)?b.value:h,e=Yc(b.id),e=d&&(d==zc||d==Cc||d==Dc)?U(c,e):U(e,c));e||(e=U(b.textContent,b.innerText));break;case Tc:if(c==Ac&&d!=Bc||c==zc)e=U(b.name,b.title,d&&d==Ec?b.alt:h);break;case Uc:c==Ac&&d==Ec?e=Zc(b.src):c==Gc?e=U(b.title,Pc(b.href)):c==Fc?e=U(b.name,b.title,b.alt,Zc(b.src)):c==Hc&&(e=U(b.name,b.id,b.action));
e||(e=U(b.title,b.data,b.wholeText,b.id));break;case Vc:e="object"==typeof b.className?b.baseVal||b.animVal:b.className;break;case Wc:c==Ac&&d!=Bc?e=Ac+": "+d:c==Gc?e="LINK":Rc||(Rc=e=c)}return e}function ad(a){if(!a)return h;try{if(z.ie&&Ha(a))return"VML Node";var b=a.nodeName?a.nodeName.toUpperCase():Nc;if(b==Jc||b==Kc||b==Lc||b==Ic)return Rc;for(b=0;4>=b;b++){var c=$c(b,a);if(c&&c!==Rc)return c}return ad(a.parentNode)}catch(d){}return h}
function bd(a,b){if(!b)return h;var c=ra(b);if(0>=c||20<Xc)return h;for(var d=0;d<c;d++){var e=b[d];if(z.ie&&Ha(e))return"VML Node";var g=h;Xc++;if(g=bd(a,e.childNodes))return g;Xc--;if(g=$c(a,e))return g}return h}
function cd(a){Rc=h;try{if(z.ie&&Ha(a))return"VML Node";if("string"==typeof a)return a;if(a.attributes){var b=a.attributes["data-dtName"];if(b&&b.value)return b.value}var c=a.nodeName?a.nodeName.toUpperCase():Nc;if(c==Jc||c==Kc||c==Lc||c==Ic)return"Page: "+Qc;if(c==Mc){var d;if(a){var e=a.nodeName?a.nodeName.toUpperCase():h;if(e!=Mc)d=h;else{var g=Yc(a.id),k=U(g,a.name,e),l=h;if(!a.multiple){var q=a.options&&-1<a.selectedIndex?a.options[a.selectedIndex]:h;q&&(l=U(q.label,q.innerText,q.textContent))}d=
l?"["+k+"] to value ["+l+"]":k}}else d=h;return d}if(c==Oc){var r;if(a){var E=a.nodeName?a.nodeName.toUpperCase():h;if(E!=Oc)r=h;else{var H=Yc(a.id);r=U(H,a.name,E)||a.nodeName}}else r=h;return r}var Ma=Ea(U(a.innerText,a.textContent));if(Ma)return Ma;Xc=0;if(a.childNodes&&0<ra(a.childNodes)){a:{d=[a];k=bd;for(q=0;4>=q;q++){var G=k(q,d);if(G){l=G;break a}}l=h}return l}}catch(Na){}return ad(a)}var V,dd=h,ed=0,fd=f,W=u.tdto();
function gd(a,b,c,d){if(u!=W)return W.bi(a,b,c,d);try{d||(d=30);var e={id:ed++,d:a,name:h,type:b,info:c?c:"-",start:n(),u:m,w:n()+d,getName:function(){if(!e.name){var a="";(a=x.uam?"dTMasked_"+e.d.nodeName:Qa(cd(e.d)))||(a="-");var b=x.sl||100;a.length>b&&(a=a.substring(0,b-3)+"...");e.name=a}return e.name},G:function(){return e.u},I:function(){var a=e;do a.u=f,a=a.next;while(a)}};fd&&(e.next=V,e.next&&(e.next.k=e),V=e);return e}finally{e&&(a=e.w-n(),0>=a?hd(e):s(function(){hd(e)},a))}}
function jc(){if(u!=W)return W.gci();try{if(V){for(var a=V,b=V.next;b;){var c;if(c=b.d!=a.d)a:{try{for(var d=b.d.parentNode;d;){if(d==a.d){c=f;break a}d=d.parentNode}}catch(e){}c=m}c&&(a=b);b=b.next}return a}return h}catch(g){return h}}function id(){return u!=W?W.ci():jc()?V.getName():h}function jd(){return u!=W?W.gpi():dd}function kd(){return u!=W?W.pi():jd()?dd.getName():h}function ld(){return u!=W?W.piv():jd()?dd.w:h}function md(){for(var a=V;a;)a.d=h,a=a.next;V=h}
function hd(a){if(u!=W)return W.ei(a);if(V){for(var b=V;b.next&&b!==a;)b=b.next;b===a&&(id()&&(dd=V),b.d=h,b.k?b.k.next=b.next:V=b.next,b.next&&(b.next.k=b.k))}}
function X(a,b,c){var d=m,e=x.doNotDetect?x.doNotDetect.split(","):h;if(c&&e)for(var g=0;g<e.length;g++)e[g]==c&&(d=f);d||(b||(b=a),C(document,a,function(a){var c=h;a.target?c=a.target:a.srcElement&&(c=a.srcElement);var d=b;if(("KD"==d||"KU"==d)&&"password"!==c.type)if(a=a.keyCode?a.keyCode:a.charCode)if(x.uam){var e=String.fromCharCode(a);"a"<=e&&"z">=e||("A"<=e&&"Z">=e||"0"<=e&&"9">=e)||(d+=a)}else d+=a;gd(c,d,h,30)}))}X("click","C","clk");X("mousedown","D","mdw");X("mouseup","U","mup");
X("dblclick","CC","dcl");X("keydown","KD","kyd");X("keyup","KU","kyu");X("scroll","S","scr");X("touchstart","TS","tcs");X("touchend","TE","tce");if(x.ade){var nd=x.ade.split(",");if(nd&&0<nd.length)for(var od=0;od<nd.length;od++)X(nd[od])}u.bi=gd;u.ei=hd;u.gci=jc;u.ci=id;u.cit=function(){return u!=W?W.cit():jc()?V.type:h};u.cih=function(){return u!=W?W.cih():jc()?V.d:h};u.gpi=jd;u.pi=kd;u.pit=function(){return u!=W?W.pit():jd()?dd.type:h};u.piv=ld;u.aad=function(a){(fd=a)||md()};
var pd=m,qd=m,rd=m,L=h,S=h,sd=Ka("dtSa");Ja("dtSa","-");if(sd&&"-"!=sd){var Y=sd.split("|");if(9==Y.length){var td={B:"true"==Y[0],type:Y[1],b:Y[2],name:Y[3],info:Y[4],start:Y[5],c:Y[6],location:Y[7],title:Y[8]},ud=m;u!=u.tdto()&&(ud=u.tdto().iRO(td.location));if(!document.referrer||td.location==D(document.referrer)||td.location==D(document.location)||ud)S=L=td}}var vd=h,wd=m,xd=[],yd=[],rb=m,zd=m,Ad=1;u.tdto().aFU(document.location.href);
if(!x.rid){var Bd=x.ridPath,Cd=Bd?Bd:p.location.pathname,Dd=p.location.search;Dd&&(Dd.length&&"?"===Dd.charAt(0))&&(Dd=Dd.substring(1));var Ed=Dd,Fd=1,Fd=31*Fd+Ia(Cd),Fd=31*Fd+Ia(Ed),Fd=Fd&Fd;x.rid="RID_"+Fd}var Z=h,Gd,mc=Ua();mc&&(Z=mc.timing)&&Sa((Z.requestStart-Z.navigationStart)/2,f);function Hd(){var a=aa;if(Z){if(5E3<Math.abs(Z.responseStart-aa))return aa;var b=Z.redirectStart,c=Z.navigationStart,d=Z.fetchStart,e=c+6E4;c&&(b?a=e>b?c:b:d&&(a=e>d?c:d))}return Math.floor(a)}
function Id(){Ad--;if(0==Ad&&vd)for(var a=0;a<xd.length;a++)try{xd[a]()}catch(b){}if(0>=Ad){var a=Z?Z.loadEventEnd:0,c;c=Z?Z.loadEventStart:0;c=c<Hd()?0:c;if(vd){if(a&&c&&a>c){var d=n()-a;if(5E3<(0>d?-1*d:d))a+=d;R(vd.b,a,c)}else R(vd.b);vd=m}Gd||Jd()}a=ob();a!=u&&a.sole()}function Jd(a){if(Kd){var b=0;mc&&!a&&(b=Z?Z.loadEventEnd:0);b?R(Kd.b,b):R(Kd.b);Kd=h;Q()}}function Ld(){Kd&&!vd&&(vd=dc("_onload_","_load_",h,Kd))}u.sls=function(){};u.sole=Id;u.iolm=function(){Ad++};u.solb=Ld;
u.slem=function(){Gd=f};u.lst=Hd;function Md(){if(!qd||0<Ad)qd=f,Q(),Id()}function Nd(){Q();if(!pd){var a=ob();a!=u&&a.iolm();Ld();pd=f;s(Md,0)}}function Od(){Q();pd||("complete"==document.readyState?rd?Gb(m,f,m):(rd=f,s(Od,3E3)):s(Od,3E3))}
function Pd(a,b,c,d){var e=Mb(f);c=c||n();!e&&a&&b&&c?Ja("dtSa","true|"+D(b)+"|-1|"+D(a)+"|"+D(d||"-")+"|"+c+"|"+F+"|"+D(Ra())+"|"+D(Qa(da()).substring(0,100))):e&&S?(Ja("dtSa","false|"+S.type+"|"+S.b+"|"+S.name+"|"+S.info||"-|"+c+"|"+S.c+"|"+D(Ra())+"|"+D(Qa(da()).substring(0,100))),S=h):M&&"_load_"!=M.name&&Ja("dtSa","false|"+D(M.type)+"|"+M.b+"|"+D(M.name)+"|"+D(M.info||"-")+"|"+c+"|"+F+"|"+D(Ra())+"|"+D(Qa(da()).substring(0,100)))}function Qd(){Rd()}
function Rd(a){var b=n();if(!rb){rb=!a;for(a=0;a<yd.length;a++)yd[a](rb);a=Hb(m,f,f);var c=jc();if(!c){var d=jd();d&&(qc(kd())&&3E3>=n()-ld())&&(c=d)}c&&c.G()===m?(c.I(),Pd(c.getName(),c.type,c.start,c.info)):Pd(h,h,b,h);if(z.sf&&p.frames)for(b=0;b<p.frames.length;b++)try{p.frames[b].dT_&&p.frames[b].dT_.obc()}catch(e){}I&&Ib(f,m,a)}}C(p,"beforeunload",Qd);
C(p,"unload",function(){Rd();var a;if(0<sb.length){a=wb(m);for(var b=0;b<sb.length;b++)try{var c=sb[b];a?ub(c.path,c.data):tb(h,c.path,m,c.data)}catch(d){}}if(!zd)try{md();a=B;for(var e=a.length;0<=--e;){var g=a[e];Ga(g.object,g.event,g.m)}B=[];mc=Z=ca=ba=h;zd=f}catch(k){}wd||(wd=f,gb())});C(p,"pagehide",function(){Rd(f);wd||(wd=f,gb())});C(document,"readystatechange",function(){"loaded"==document.readyState&&Q();"complete"==document.readyState&&Nd()});s(Od,3E3);C(p,"load",Nd);
(function(){Cb||(Cb=document.createElement("doc:rdy"));if(Cb.doScroll){var a=function(){try{Cb.doScroll("left"),Cb=h,zb=n(),Q()}catch(b){s(a,0)}};a()}else document.addEventListener("DOMContentLoaded",function(){zb=n();Q()},m)})();var Kd=dc("_load_","_load_",Hd(),h);Q();u.all=function(a){y(xd,a)};u.ail=function(a){y(Yb,a)};u.apll=function(a){y(yd,a)};u.sle=function(){Jd(1)};u.obc=Qd;u.ile=function(){return 0>=Ad};var $=window.dT_,Sd=[],Td=m;function Ud(a){Td?a($.bwsW,$.bwsH):y(Sd,a)}
$.all(function(){var a=document,b=a.documentElement,c=0,d=0,e=a.body;if("number"===typeof self.innerWidth)c=self.innerWidth,d=self.innerHeight;else if(a&&(b.clientWidth||b.clientHeight))c=b.clientWidth,d=b.clientHeight;else if(e&&(e.clientWidth||e.clientHeight))c=e.clientWidth,d=e.clientHeight;if(0>c||0>d){var g;$.gBI().ie?g=140:g=10;c=Math.max(c,g);d=Math.max(d,10)}a=c;$.bwsW=a;$.bwsH=d;Td=f;for(b=0;b<Sd.length;b++)Sd[b](a,d)});$.abwsl||($.abwsl=Ud);var Vd=m;
$.asl(function(a,b){if(!b&&!Vd&&$.las()){Vd=f;var c=$.tdto(),d=function(a){return 0>a||2147483647<=a||isNaN(a)?0:a};c?(a.a("w",d(c.bwsW)),a.a("h",d(c.bwsH))):(a.a("w",d($.bwsW)),a.a("h",d($.bwsH)))}});
$.asl(function(){var a=fb();if("undefined"!=typeof window.sessionStorage)try{var b="";try{b=window.sessionStorage.dtCookie||""}catch(c){}eb(b)||(b="");if(b&&"null"!=b&&a!=b){var d,e=b;if(e){var g=v(e,"|");-1!=g&&(e=e.substring(0,g))}d=e;var k;if("undefined"!=typeof a&&a!=h&&""!=a&&(b=a)&&d)var l=v(b,"|"),b=-1!=l?d+b.substring(l):d;a=k=b}if(a!=h&&a){$.dC("dtCookie");$.sC("dtCookie",a);try{window.sessionStorage.setItem("dtCookie",a)}catch(q){}}}catch(r){}});
})();(function() {
var b=window.dT_,f=window.performance,k={c:"redirectStart",d:"redirectEnd",e:"fetchStart",f:"domainLookupStart",g:"domainLookupEnd",h:"connectStart",i:"connectEnd",j:"secureConnectionStart",k:"requestStart",l:"responseStart",m:"responseEnd",n:"domLoading",o:"domInteractive",p:"domContentLoadedEventStart",q:"domContentLoadedEventEnd",r:"domComplete",s:"loadEventStart",t:"loadEventEnd"},l=!1;
b.smbi("n")&&b.asl(function(d,m){if(!m&&!l&&b.las())if(l=!0,"undefined"!=typeof f)if(b.gBI().ff&&9>=b.gBI().ff)d.a("nt","0");else{var a;a=f.timing||{};var c=f.navigation||{},e=a.navigationStart;if(0<e){var c=["a",c.type,"b",e],g;for(g in k){var h=a[k[g]];h&&h>=e&&(c.push(g),c.push(h-e))}a=c.join("")}else a=null;a?d.a("nt",a):d.a("nt","0")}else d.a("nt","0")});
})();