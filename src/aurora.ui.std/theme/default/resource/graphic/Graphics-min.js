(function(){var D=function(L,N,M){return Array.prototype.slice.call(L,N||0,M||L.length)};Function.prototype.methodize=function(N){var M=this,L=Number(N||0);return function(){return M.apply(this,new Array(L).concat(D(arguments)))}};var d=document,e=0,a="http://www.w3.org/2000/svg",v="urn:schemas-microsoft-com:vml",t="http://www.w3.org/1999/xlink",o="none",m=!Ext.isIE9&&!!d.createElementNS&&!!d.createElementNS(a,"svg").createSVGRect,F="<v:fill color='{fillColor}' opacity='{fillOpacity}' angle='{angle}' colors='{colors}' type='{type}'></v:fill>",k="<v:stroke startarrow='{startArrow}' endarrow='{endArrow}' color='{strokeColor}' joinstyle='miter' weight='{strokeWidth}px' opacity='{strokeOpacity}'></v:stroke>",i="<v:shadow on='t' opacity='0.5' offset='0px,3px'></v:shadow>",h=/\w|[\s\d-+.,e]*/g,f=/[\d-+.e]+/g,G=Math.cos,w=Math.sin,C=Math.PI,b=parseInt,H=C/180,B,I,q=function(L){return(L=L.trim()).toLowerCase().replace(/^./,L.charAt(0).toUpperCase())},g=function(L,N){var M=d.createElementNS(a,L);if(!Ext.isEmpty(N)){M.id=N}return Ext.get(M)},A=function(L,N){var M=d.createElement(L);if(!Ext.isEmpty(N)){M.id=N}return Ext.get(M)},u=function(L){if(m){L=L.dom||L;return L.namespaceURI==a}return false},c=function(L){if(!m){L=L.dom||L;return !!L.tagUrn&&L.tagUrn==v}return false},r=function(P,O){var M,N,L=[];if(!Ext.isObject(P)){M={};M[P]=O;P=M}for(N in P){O=P[N];L.push(N);L.push(":");L.push(O);L.push(";")}return L.join("")},K=function(T){var O=[],W,N=false,R,Q,U;function V(Y){if(!Y){O=[0,0,0,1]}else{if(Y=="transparent"){O=[0,0,0,0]}else{if(Y==o){O=o}else{if(/gradient/i.test(Y)){N=true;var Z=/^gradient\((.*)\)$/.exec(Y)[1],X=/^([^stop]*),[^,]*stop/.exec(Z)[1];R=/^[^,]*/.exec(X)[0];Q=X.match(/[-\d%]+/g);U=function(ab){var aa=[];Ext.each(ab,function(ae){var ac=/\(([^\)]*\))\)$/.exec(ae)[1],ad=/^([^,]*),(.*)$/.exec(ac);aa.push([ad[1],ad[2]])});return aa}(Z.match(/stop\([^\)]*\)\)/mg))}else{W=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(Y);if(W){O=[b(W[1]),b(W[2]),b(W[3]),parseFloat(W[4],10)]}else{W=/^#([a-fA-F0-9]{1,2})([a-fA-F0-9]{1,2})([a-fA-F0-9]{1,2})$/.exec(Y);if(W){O=[b(P(W[1]),16),b(P(W[2]),16),b(P(W[3]),16),1]}}}}}}}function P(X){return X.length==1?X+X:X}function M(Y){var X=1;if(N){if(Y==="gradient"){X={isGradient:N,type:R,linear:Q,stops:U}}else{X=""}}else{if(Y==="a"){if(!isNaN(O[3])){X=O[3]}}else{if(O&&!isNaN(O[0])){if(Y==="rgb"){X="rgb("+O[0]+","+O[1]+","+O[2]+")"}else{X="rgba("+O.join(",")+")"}}else{if(O==o){X=O}else{X=T}}}}return X}function S(Y){if(O!=o&&isNumber(Y)&&Y!==0){var X;for(X=0;X<3;X++){O[X]+=b(Y*255);if(O[X]<0){O[X]=0}if(O[X]>255){O[X]=255}}}return this}function L(X){if(T=="transparent"||O==o||Ext.isEmpty(X)){return this}O[3]=X;return this}V(T);return{get:M,brighten:S,setOpacity:L}},j=function(O,M){var L=new Ext.Template('<span style="font-size:{fontSize}">{text}</span>').append(document.body,{fontSize:M,text:O},true),N=L.getWidth();L.remove();return N},E=function(){var L={};return function(M,W){if(L[M]){return L[M]}W=W||10000;var T=M.match(h),V=[0,0],U=[0,0],X=[],R=function(aa,ab){var Y=Ext.isArray(aa)?aa:aa.match(f);for(var Z=0;Z<Y.length;Z++){if(!ab||Z/2%3==2){U[0]+=O(Y[Z]);U[1]+=O(Y[++Z]);X=X.concat(U)}else{X=X.concat([U[0]+O(Y[Z]),U[1]+O(Y[++Z])])}}},Q=function(an,al){var ae=an.match(f);while(ae.length&&ae.length%7==0){var aa=O(ae.shift()),Z=O(ae.shift()),ad=Number(ae.shift()),ab=Number(ae.shift()),ai=Number(ae.shift()),ah=O(ae.shift()),ag=O(ae.shift()),ac,ak,Y,af;if(al){ah+=U[0];ag+=U[1]}var am=Math.abs(ah-U[0]),aj=Math.abs(ag-U[1]);aa=am;Z=aj;X.push(ai?"wa":"at");if((ai^ab)^ah<U[0]){if(ag<U[1]){ac=U[0];ak=U[1]-Z}else{ac=U[0]-aa;ak=U[1]}}else{if(ag<U[1]){ac=U[0]-aa;ak=U[1]-(Z<<1)}else{ac=U[0]-(aa<<1);ak=U[1]-Z}}Y=ac+(aa<<1);af=ak+(Z<<1);X.push(ac,ak,Y,af,U[0],U[1],ah,ag);U=[ah,ag]}},P=function(Z){var Y=Z.match(f).slice(-2);return[O(Y[0]),O(Y[1])]},O=function(Y){return Number(Number(Y*W).toFixed(0))},N=function(aa){for(var Z=0,Y=aa.match(f);Z<Y.length;Z++){X.push(O(Y[Z]))}};for(var S=0;S<T.length;S++){switch(T[S]){case"M":V=P(T[S+1]);case"C":case"L":U=P(T[S+1]);X.push(T[S]);N(T[++S]);break;case"m":X.push("M");R(T[++S]);V=[].concat(U);break;case"c":X.push("C");R(T[++S],true);break;case"l":X.push("L");R(T[++S]);break;case"h":X.push("L");R(T[++S]+" 0");break;case"v":X.push("L");R("0 "+T[++S]);break;case"H":X.push("L");U[0]=O(T[++S]);X.push(U[0],U[1]);break;case"V":X.push("L");U[1]=O(T[++S]);X.push(U[0],U[1]);break;case"A":Q(T[++S]);break;case"a":Q(T[++S],true);break;case"Z":case"z":X.push("X");U=[].concat(V);break}}X.push("E");L[M]=X.join(" ");return L[M]}}(),n=function(L){var M=Ext.util.JSON.decode("{"+(L.get("config")||"").replace(/^{|}$/g,"")+"}");for(var O in M){var N=String(O).toLowerCase();if(N!==O){M[N]=M[O];delete M[O]}}return M},s=m?function(){var P,L=Ext.toArray(arguments);if(L.length&&Ext.isObject(L[0])){var O=L.shift();P=O.dom||O}else{P=(this.el||this.wrap).dom}var M=P.getAttribute("transform");if(!M){M="translate(0,0) scale(1,1) rotate(0,0 0)"}var N=M.split("rotate");P.setAttribute("transform",(N[0].replace(/\(([-.\d]+)\)/g,"($1,$1)")+"rotate"+N[1].replace(/\(([-.\d]+)\)/,"($1,0 0)")).replace(/[-.\d]+/g,function(Q){var R=L.shift();return Ext.isEmpty(R)?Q:R}))}:function(){var ae,M=Ext.toArray(arguments),N={};if(M.length&&Ext.isObject(M[0])){var L=M.shift();ae=Ext.get(L)}else{ae=this.el||this.wrap}if(!Ext.isEmpty(M[0])){ae.setStyle("left",M[0]+"px")}if(!Ext.isEmpty(M[1])){ae.setStyle("top",M[1]+"px")}if(!Ext.isEmpty(M[2])&&!Ext.isEmpty(M[3])){ae.dom.coordsize.value=100/M[2]+","+100/M[3]}if(!Ext.isEmpty(M[4])){var Q=ae.getXY(),U=b(ae.getStyle("left")||0),T=b(ae.getStyle("top")||0),ac=ae.getWidth(),aa=ae.getHeight(),ad=M[4],ah=ad*H,ag=G(ah),S=w(ah),R=G(-ah),Y=w(-ah),P=G(-ah-C/2),W=w(-ah-C/2),X=ae.dx||U,V=ae.dy||T,ab=Math.sqrt(X*X+V*V),af=Math.atan(-V/X)-ah,U=U-X+ab*G(af),T=T-V-ab*w(af),O,Z;if(Y>=0){if(R>=0){O=U;Z=T-ac*Y}else{O=U+aa*P;Z=T-ac*Y}}else{if(R>=0){O=U+aa*P;Z=T}else{O=U+ac*R;Z=T-aa*W}}if(ae.dom.tagName=="SPAN"){ae.setStyle({filter:!Ext.isEmpty(ad)?["progid:DXImageTransform.Microsoft.Matrix(M11=",ag,", M12=",-S,", M13=100",", M21=",S,", M22=",ag,", sizingMethod='auto expand')"].join(""):o,left:O+"px",top:Z+"px"})}else{ae.setStyle({rotation:ad})}}},J=function(){var M=1,L;return function(N){N=Ext.get(N);if(L!=N){L=N;if(u(L)){L.parent().appendChild(L)}else{L.setStyle("z-index",M++)}}}}();$A.Graphics=Ext.extend($A.Component,{constructor:function(L){this.root=L.root;this.top=L.top||this;this.cmps=[];$A.Graphics.superclass.constructor.call(this,L);return this},initComponent:function(L){$A.Graphics.superclass.initComponent.call(this,L);if(!this.wrap){this["init"+(m?"SVG":"VML")+"Wrap"]()}this["init"+(m?"SVG":"VML")+"Element"]()},initEvents:function(){$A.Graphics.superclass.initEvents.call(this);this.addEvents("click","drop","move","drawn")},processListener:function(L){$A.Graphics.superclass.processListener.call(this,L);this.wrap[L]("click",this.onClick,this,{preventDefault:true});this.wrap[L]("mouseover",this.onMouseOver,this,{preventDefault:true});this.wrap[L]("mouseout",this.onMouseOut,this,{preventDefault:true});this.wrap[L]("mousedown",this.onMouseDown,this)},processDataSetLiestener:function(L){ds=this.dataset;if(ds){ds[L]("load",this.onLoad,this);ds[L]("update",this.onUpdate,this);ds[L]("add",this.onAdd,this);ds[L]("remove",this.onRemove,this);ds[L]("indexchange",this.onIndexChange,this)}},initSVGElement:function(){var L=g("svg");L.setStyle({height:"100%",width:"100%"});this.root=g("g");this.wrap.appendChild(L);L.appendChild(this.root)},initVMLElement:function(){if(!d.namespaces.hcv){d.namespaces.add("v",v);d.createStyleSheet().cssText="v\\:shadow,v\\:roundrect,v\\:oval,v\\:image,v\\:polyline,v\\:line,v\\:group,v\\:fill,v\\:path,v\\:shape,v\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}this.root=A("v:group");this.root.setStyle({position:"absolute",width:100+"px",height:100+"px"});this.root.set({coordsize:"100,100"});this.wrap.appendChild(this.root)},initProxy:function(){if(m){var M=this.wrap.dom.cloneNode(true);M.id=this.id+"_proxy";this.proxy=Ext.get(M)}else{var M=this.wrap.dom.cloneNode(false);M.id=this.id+"_proxy";this.proxy=Ext.get(M);var L=this.wrap.dom.innerHTML.replace(/^<\?xml[^\/]*\/>/i,"").replace(/id\=([\S]*)/img,"id=$1_proxy");new Ext.Template(L).append(M,{},true)}this.proxy.setStyle({"background-color":"transparent",border:o,position:"absolute","z-index":"99999"});Ext.getBody().insertFirst(this.proxy)},onMouseDown:function(P,M){this.fire("mousedown",P,M);if(this.candrawline){this.startLine(P,M)}else{if(this.dataset){var N=this.getGElement(M);if(N&&N.record){this.dataset.locate(this.dataset.getAll().indexOf(N.record)+1)}}else{this.focus(M)}if(this.dropto||this.moveable){var O=this.wrap.getXY();if(u(this.wrap)){var L=this.top.wrap.getXY();O[0]=this.x+L[0];O[1]=this.y+L[1]}this.relativeX=O[0]-P.getPageX();this.relativeY=O[1]-P.getPageY();B=$A.getViewportWidth();I=$A.getViewportHeight();if(this.dropto){if(!this.dropEl){this.dropEl=$(this.dropto)}if(!this.proxy){this.initProxy()}this.proxy.moveTo(O[0],O[1])}else{this.proxy=this.wrap}if(this.moveable){J(this.proxy)}Ext.get(d).on("mousemove",this.onMouseMove,this);Ext.get(d).on("mouseup",this.onMouseUp,this)}}},onMouseMove:function(Q){Q.stopEvent();var N=Q.getPageX()+this.relativeX,M=Q.getPageY()+this.relativeY,R=this.width||this.rx*2,P=this.height||this.ry*2,L=d[Ext.isStrict&&!Ext.isWebKit?"documentElement":"body"].scrollLeft,T=d[Ext.isStrict&&!Ext.isWebKit?"documentElement":"body"].scrollTop,S=L+B,O=T+I;if(N<0){N=0}else{if((N+R)>=S){N=Math.max(S-R,0)}}if(M<0){M=0}else{if((M+P)>=O){M=Math.max(O-P,0)}}if(this.moveable){this.fireEvent("move",this,this.dataset,null,N,M)}this.proxy.moveTo(N,M)},onMouseUp:function(P){Ext.get(d).un("mousemove",this.onMouseMove,this);Ext.get(d).un("mouseup",this.onMouseUp,this);if(this.dropto){var M=this.dropEl.wrap,T=M.getXY(),N=T[0],S=T[1],L=N+M.getWidth(),R=S+M.getHeight(),Q=P.getPageX(),O=P.getPageY();if(Q>=T[0]&&O>=T[1]&&Q<=L&&O<=R){this.dropEl.fireEvent("drop",this.proxy,this.top.dataset,Q+this.relativeX-N+(m?4:0),O+this.relativeY-S+(m?4:0))}this.proxy.moveTo(-1000,-1000)}},onMouseOver:function(M,L){this.fire("mouseover",M,L)},onMouseOut:function(M,L){this.fire("mouseout",M,L)},onClick:function(M,L){this.fire("click",M,L)},getGElement:function(N){var M=N.id.match(/(.*)_(\d+)(_.*)*$/),P,O,L;if(M){P=M[2];if(P){O=this.top.dataset;if(O){L=O.findById(P)}if(M[1]){N=$(M[1]+"_"+P)}return{el:N,record:L}}}},fire:function(L,O,M){if(!M){return}var N=this.getGElement(M);if(N){this.fireEvent(L,O,N.el,this.dataset,N.record);return N.el}this.fireEvent(L,O,M)},create:function(O){var N=O.get("type"),M=n(O);M.id=this.id+"_"+O.id;if(this.renderer){var P=$A.getRenderer(this.renderer);if(P==null){alert("未找到"+this.renderer+"方法!");return}var L=P.call(window,O,N,M);if(!Ext.isEmpty(L)){if(!Ext.isObject(L)){L="{"+String(L).replace(/^{|}$/g,"").toLowerCase()+"}"}else{L=Ext.util.JSON.encode(L).toLowerCase()}Ext.apply(M,Ext.util.JSON.decode(L))}}this.createGElement(M.type||N,M)},resizeSVG:function(){if(m){var L=this.top.wrap;var R=L.getXY();var N=d[Ext.isStrict&&!Ext.isWebKit?"documentElement":"body"].scrollLeft;var T=d[Ext.isStrict&&!Ext.isWebKit?"documentElement":"body"].scrollTop;var Q=this.root.dom;var P=Q.ownerSVGElement;var O=Q.getBoundingClientRect();var M=O.left-R[0]+O.width+N;var S=O.top-R[1]+O.height+T;Ext.fly(P).set({width:M,height:S})}},moveTo:function(L,N){if(u(this.wrap)){s(this.wrap,L,N)}else{var M=this.top.wrap.getXY();this.wrap.moveTo(M[0]+L,M[1]+N)}},syncFocusMask:function(L){if(!L.moveable){return this.focusMask}var M=L.strokewidth/2+3;return this.focusMask.setStyle({left:L.x-M+"px",top:L.y-M+"px"}).setWidth(L.width+M*2).setHeight(L.height+M*2)},focus:function(L){L=this.fire("focus",null,L);if(L){if(this.focusItem){this.blur()}if(this.editable){if(L.editable){L.showEditors()}if(L.moveable){if(!this.focusMask){this.focusMask=new Ext.Template('<div style="-moz-user-select:none;-webkit-user-select:none;cursor:pointer;background:none;position:absolute;border:1px dashed #000;z-index:999;"></div>').insertFirst(this.wrap.dom,{},true)}this.syncFocusMask(L).show().on("mousedown",L.onMouseDown,L)}}this.focusItem=L}else{this.fireEvent("focus")}},blur:function(){var L=this.focusItem;if(L){if(L.editable){L.hideEditors()}if(L.moveable){if(this.focusMask){this.focusMask.hide().un("mousedown",L.onMouseDown,L)}}this.fire("blur",null,L);this.focusItem=null}},startLine:function(O,M){var N=this.getGElement(M);if(N){var L=this.wrap.getXY();this.startEl=N;this.drawLinePoints=[O.getPageX()-L[0],O.getPageY()-L[1]];Ext.get(d).on("mousemove",this.drawLine,this);Ext.get(d).on("mouseup",this.endLine,this)}},drawLine:function(P){var R=this.wrap.getXY();var N=this.drawLinePoints[0],U=this.drawLinePoints[1],M=P.getPageX()-R[0],T=P.getPageY()-R[1],Y=M-N,X=T-U,Q=10;if(Y==0){T+=X>0?-Q:Q}else{if(X==0){M+=Y>0?-Q:Q}else{var S=Math.sqrt(Y*Y+X*X);M=(S-Q)/S*Y+N;T=(S-Q)/S*X+U}}var W=N+","+U+" "+Math.round(M)+","+Math.round(T);if(!this.newline){var L=this.startEl.record,V=L.get(this.tableidfield)||L.get("table_id");this.newline=this.dataset.create({type:"line",config:'strokewidth:1,strokecolor:"#aaaaaa",strokeopacity:"1",titlecolor:"black",titlesize:14,titlex:0,titley:0,endarrow:"classic",points:"'+W+'",editable:true'+(Ext.isEmpty(V)?"":(",from:"+V))})}else{var O=n(this.newline);O.points=W;this.newline.set("config",Ext.util.JSON.encode(O))}},endLine:function(P,M){Ext.get(d).un("mousemove",this.drawLine,this);Ext.get(d).un("mouseup",this.endLine,this);if(this.newline){var N=this.getGElement(M);if(!N||N.el==this.startEl.el||N.record==this.newline){this.dataset.remove(this.newline)}else{var O=N.record,Q=O.get(this.tableidfield)||O.get("table_id"),L=n(this.newline);L.to=Q;this.newline.set("config",Ext.util.JSON.encode(L));this.focus($(this.id+"_"+this.newline.id));this.fireEvent("drawn")}}delete this.drawLinePoints;delete this.newline;delete this.startEl},bind:function(M,L){this.dataset=$(M);this.tableidfield=L||"table_id";this.processDataSetLiestener("on");this.onLoad()},onLoad:function(){this.clear();var Q=this.dataset,R=[],M=Q.getAll();M.sort(function(U,T){var S=U.get("type"),V=T.get("type");if(S==="line"){return 1}else{if(V==="line"){return -1}else{return 0}}});for(var N=0,L=M.length;N<L;N++){var P=M[N],O=P.get("type");if(!O){P.data.type="rect";P.isNew=true}this.create(P)}},onAdd:function(N,L,M){this.create(L)},onRemove:function(O,L,M){var N=$(this.id+"_"+L.id);if(this.focusItem==N){this.focusItem=null}N.destroy()},onIndexChange:function(M,L){this.focus($(this.id+"_"+L.id))},onUpdate:function(W,N,ac,X,S){var L=$(this.id+"_"+N.id),aa=n(N),O=N.get("type");aa.type=O,x=L.x,y=L.y;if(z[q(O)].processConfig&&z[q(O)].processConfig(aa)==false){N.set(ac,S);return}for(var ab in L.initConfig){if(ab!="dataset"&&ab!="top"&&ab!="root"&&ab!="id"){if(!ab in aa){delete L[ab]}}}Ext.apply(L,aa);L.initConfig=aa;L.processListener("un");L.el.remove();if(L.text){L.text.remove()}L["init"+(m?"SVG":"VML")+"Element"]=z[O=="image"?"Image":"Path"].prototype["init"+(m?"SVG":"VML")+"Element"];if(!m){L.vmlTpl=z[O=="image"?"Image":"Path"].prototype.vmlTpl}L.initComponent(aa);if(Ext.isWebKit){L.wrap.dom.setAttribute("transform",L.wrap.dom.getAttribute("transform"))}L.syncLineEditors(L.x-x,L.y-y);if(L==this.focusItem&&this.focusMask){this.syncFocusMask(L)}L.processListener("on");if(L.editors&&L.points){var Z=0,V=L.editors;var T=V[V.length-1],M=!!T.bindEl;if(M){var Y=T.bindEl.lineEditors;Y.splice(Y.indexOf(T),1);delete T.bindEl}for(p=L.points,l=p.length;Z<l;Z++){var Q=V[Z];if(Q){var R=Q.width/2,P=Q.height/2,U=Q.strokewidth;Q.x=p[Z][0]-R;Q.y=p[Z][1]-P;if(m&&U%2==1&&L.shadow){R-=0.5;P-=0.5}Q.moveTo(p[Z][0]-R,p[Z][1]-P)}else{L.createEditor(p[Z][0],p[Z][1])}}while(V.length>Z){var Q=V.pop();Q.un("move",L.editorMove,L);Q.destroy()}L.bindEditor(L.to)}},createGElement:function(M,L){var N=new z[q(M)](Ext.apply(L||{},{type:M,root:(L&&Ext.get(L.root))||this.root,top:this.top}));this.top.cmps.push(N);return N},createElement:function(L){var M=m?g(L):A(L);this.root.appendChild(M);return M},clear:function(){while(this.cmps.length){this.cmps.pop().destroy();this.focusItem=null}},destroy:function(){this.wrap.remove();if(this.proxy&&this.proxy!=this.wrap){this.proxy.remove()}$A.Graphics.superclass.destroy.call(this);this.processDataSetLiestener("un")},translate:s.methodize(),scale:s.methodize(2),rotate:s.methodize(4),setTopCmp:J,hasSVG:m});var z={Path:Ext.extend($A.Graphics,{zoom:10000,constructor:function(L){this.lineEditors=[];return z.Path.superclass.constructor.call(this,L)},initComponent:function(L){L.fillcolor=K(L.fillcolor).setOpacity(L.fillopacity);L.fillopacity=L.fillcolor.get("a");L.strokecolor=K(L.strokecolor).setOpacity(L.strokeopacity);L.strokeopacity=L.strokecolor.get("a");z.Path.superclass.initComponent.call(this,L);if(this.title){this["init"+(m?"SVG":"VML")+"Title"]()}this["init"+(m?"SVG":"VML")+"Info"]();if(m&&this.shadow){this.initSVGShadow()}var M=this.top.wrap.getXY()},initSVGWrap:function(){this.wrap=g("g",this.id);this.root.appendChild(this.wrap)},initVMLWrap:function(){this.wrap=A("v:group",this.id);this.root.appendChild(this.wrap)},initSVGElement:function(){var R=this.createGradient(this.fillcolor.get("gradient")),Q=this.fillcolor.get(),O=this.strokecolor.get();if(this.x||this.y){if(this.strokewidth&&this.strokewidth%2==1&&!this.shadow){s(this.wrap,this.x+0.5,this.y+0.5)}else{s(this.wrap,this.x,this.y)}}this.el=g("path",this.id+"_el");this.el.dom.style.cssText=r({fill:Q,"fill-opacity":this.fillopacity,stroke:O,"stroke-width":this.strokewidth,"stroke-opacity":this.strokewidth?this.strokeopacity:0,cursor:this.cursor||"pointer"})+this.style;var P={d:this.d,fill:R};if(this.strokewidth){if(!this.el.dom.style.stroke){O=this.el.dom.style.stroke="rgba(0,0,0,0)"}if(this.startarrow||this.endarrow){var N=this.d.match(f),M=N.length;var S="-"+O+"-"+this.strokeopacity*100;if(Ext.isIE9){S+="-"+this.strokewidth}if(this.startarrow){P["marker-start"]="url(#start-arrow-"+this.startarrow+S+")";var L=this.convertArrow(Number(N[0]),y1=Number(N[1]),x2=Number(N[2]),y2=Number(N[3]));N[0]=L.x;N[1]=L.y;P.d=P.d.replace(/[\d-+.]+\s+[\d-+.]+/,L.x+" "+L.y)}if(this.endarrow){P["marker-end"]="url(#end-arrow-"+this.endarrow+S+")";var L=this.convertArrow(Number(N[M-2]),y1=Number(N[M-1]),x2=Number(N[M-4]),y2=Number(N[M-3]));P.d=P.d.replace(/([\d-+.]+\s+[\d-+.]+)[^\d]*$/,L.x+" "+L.y)}new z.Arrow({color:O,width:this.strokewidth,opacity:this.strokeopacity,endarrow:this.endarrow,startarrow:this.startarrow,root:this.root})}}this.el.set(P);this.wrap.insertFirst(this.el)},initVMLElement:function(){var Q=this.createGradient(this.fillcolor.get("gradient")),M=this.fillcolor.get("rgb"),L=this.strokecolor.get("rgb");var P=true,O=true,N=true;if(Ext.isEmpty(this.strokewidth)){this.strokewidth=1}if(L==o||this.strokeopacity==0||this.strokewidth==0){P=false}if(M==o){O=false}this.wrap.setStyle({position:"absolute",width:100+"px",height:100+"px",left:(this.x||0)+"px",top:(this.y||0)+"px"});this.wrap.set({coordsize:"100,100"});this.el=new Ext.Template(this.getVmlTpl(P,O,this.shadow)).insertFirst(this.wrap.dom,Ext.apply({id:this.id+"_el",style:this.style,path:this.path||E(this.d,this.zoom),zoom:this.zoom,fillColor:M,fillOpacity:this.fillopacity,strokeColor:L,strokeWidth:this.strokewidth,strokeOpacity:this.strokeopacity,endArrow:this.endarrow,startArrow:this.startarrow,cursor:this.cursor||"pointer"},Q),true);this.wrap.set({title:this.info||""})},createGradient:m?function(N){if(!N.isGradient){return o}var Q="graphics-gradient"+e++,L=this.root.child("defs");if(!L){L=g("defs");this.root.insertFirst(L)}var P=g(N.type+"Gradient",Q),M=N.linear,O=N.stops;P.set({x1:M[0],y1:M[1],x2:M[2],y2:M[3],gradientUnits:"userSpaceOnUse"});L.appendChild(P);Ext.each(O,function(T){var R=K(T[1]),S=g("stop");S.set({offset:T[0],"stop-color":R.get("rgb"),"stop-opacity":R.get("a")});P.appendChild(S)});return"url("+location.href+"#"+Q+")"}:function(O){if(!O.isGradient){return{}}var Q=O.type=="linear"?"gradient":"",N=O.linear,R=O.stops,P=this.top.width,L=this.top.height,S,M="";Ext.each(N,function(V,T,U){if(/\%/.test(V)){V=b(V)/100;U[T]=(T%2==0?P:L)*V}});S=Math.atan((N[2]-N[0])/(N[3]-N[1]))/H+180;Ext.each(R,function(U){var T=K(U[1]);M+=U[0]+" "+T.get("rgb")+";"});return{type:Q,angle:S,colors:M,fillOpacity:1}},initSVGShadow:function(){var N="graphics-filter-shadow";if(!Ext.get(N)){var P=this.root.child("defs");if(!P){P=g("defs");this.root.insertFirst(P)}var L=g("filter",N);L.set({x:-0.25,y:-0.25,width:1.5,height:1.5,"color-interpolation-filters":"sRGB"});P.appendChild(L);var R=g("feGaussianBlur");R.set({result:"blur",stdDeviation:1,"in":"SourceAlpha"});var M=g("feColorMatrix");M.set({values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.6 0 ",type:"matrix",result:"bluralpha"});var T=g("feOffset");T.set({result:"offsetBlur",dx:0,dy:3,"in":"bluralpha"});var S=g("feMerge");L.appendChild(R);L.appendChild(M);L.appendChild(T);L.appendChild(S);var Q=g("feMergeNode");Q.set({"in":"offsetBlur"});var O=g("feMergeNode");O.set({"in":"SourceGraphic"});S.appendChild(Q);S.appendChild(O)}this.el.setStyle({filter:"url(#"+N+")"})},initSVGTitle:function(){this.text=z.Text.prototype.initSVGElement.call({text:this.title,id:this.id+"_title",size:this.titlesize||14,dx:this.titlex||0,dy:this.titley||0,color:this.titlecolor,fontfamily:this.titlefontfamily,rotation:this.titlerotation,wrap:this.wrap,style:"cursor:pointer;-webkit-user-select:none"})},initVMLTitle:function(){var L=this.titlex||0,P=this.titley||0,O=this.titlesize||14,M=this.wrap;if(this.type=="line"||this.type=="path"){L+=this.x;P+=this.y;M=this.top.wrap}else{var N=this.strokewidth;L+=N/2;P+=N/2}this.text=z.Text.prototype.initVMLElement.call({text:this.title,id:this.id+"_title",size:O,dx:L,dy:P,color:this.titlecolor,fontfamily:this.titlefontfamily,rotation:this.titlerotation,wrap:M,positionwrap:this,vmlTpl:z.Text.prototype.vmlTpl})},initSVGInfo:function(){if(this.info){if(!this.infoEl){this.infoEl=g("title");this.wrap.appendChild(this.infoEl)}this.infoEl.dom.textContent=this.info}else{if(this.infoEl){this.infoEl.remove();this.infoEl=null}}},initVMLInfo:function(){this.wrap.set({title:this.info||""})},convertArrow:function(O,Q,N,P){var M=O-N,L=Q-P,S=this.strokewidth*3/2;if(M==0){Q+=L>0?-S:S}else{if(L==0){O+=M>0?-S:S}else{var R=Math.sqrt(M*M+L*L);O=(R-S)/R*M+N;Q=(R-S)/R*L+P}}return{x:O,y:Q}},createEditors:function(){if(this.editable){this.editors=[];var N=this.points;for(var M=0;M<N.length;M++){var L=N[M][0],O=N[M][1];this.createEditor(L,O)}this.bindEditor(this.from,true);this.bindEditor(this.to)}},bindEditor:function(R,L){if(!Ext.isEmpty(R)){var Q=this.editors,P=this.top.dataset;var O=P.find(this.top.tableidfield,R);if(O){var N=$(this.top.id+"_"+O.id);if(N){var M=Q[L?0:Q.length-1];M.bindEl=N;N.lineEditors.add(M)}}}},syncLineEditors:function(O,M){for(var P=0,L=this.lineEditors.length;P<L;P++){var N=this.lineEditors[P];N.x+=O;N.y+=M;N.moveTo(N.x,N.y);N.fireEvent("move")}},createEditor:function(L,O){var N=this.editors,M=N.length;N[M]=new z.Oval({id:this.id+"_editor"+M,x:L-5,y:O-5,height:10,width:10,strokewidth:1,strokecolor:"rgba(0,0,0,1)",fillcolor:"transparent",root:this.root,top:this.top,moveable:true});N[M].on("move",this.editorMove,this)},editorMove:function(L,M,Q,T,S){var Q=this.getRecord();var N=n(Q),U="";for(var P=0,O=this.editors.length;P<O;P++){var R=this.editors[P];U+=(R.x+5)+","+(R.y+5)+" "}N.points=U;Q.set("config",Ext.util.JSON.encode(N))},showEditors:function(){if(this.editors){for(var M=0,L=this.editors.length;M<L;M++){J(this.editors[M].wrap);this.editors[M].wrap.show()}}},hideEditors:function(){if(this.editors){for(var M=0,L=this.editors.length;M<L;M++){this.editors[M].wrap.hide()}}},clearEditors:function(){if(this.editors){while(this.editors.length){var L=this.editors.pop(),M=L.bindEl;if(M&&M.lineEditors){M.lineEditors.remove(L)}L.un("move",this.editorMove,this);L.destroy()}}this.editors=null},onMouseDown:function(O,M){if(this.top.editable&&!this.top.candrawline){if(this.dropto||this.moveable){var N=this.wrap.getXY();if(u(this.wrap)){var L=this.top.wrap.getXY();N[0]=this.x+L[0];N[1]=this.y+L[1]}this.relativeX=N[0]-O.getPageX();this.relativeY=N[1]-O.getPageY();if(this.dropto){if(!this.dropEl){this.dropEl=$(this.dropto)}if(!this.proxy){this.initProxy()}this.proxy.moveTo(N[0],N[1])}else{this.proxy=this.wrap}if(this.moveable){J(this.proxy)}Ext.get(d).on("mousemove",this.onMouseMove,this);Ext.get(d).on("mouseup",this.onMouseUp,this)}else{if(this.editable){J(this.wrap)}}}},onMouseMove:function(T){T.stopEvent();var Y=this.width||this.rx*2,R=this.height||this.ry*2,L=this.top.wrap,Z=L.getWidth(),S=L.getHeight(),aa=this.strokewidth||0,U=L.getXY(),P=T.getPageX()+this.relativeX-U[0],O=T.getPageY()+this.relativeY-U[1],W=0;if(aa&&c(this.wrap)){W=-aa/2}if(P<=W){P=W}else{if(P+this.width-W>Z-2){P=Z-2-this.width+W}}if(O<=W){O=W}else{if(O+this.height-W>S-2){O=S-2-this.height+W}}var X=this.x,V=this.y;this.x=Math.round(P-W);this.y=Math.round(O-W);if(this.moveable){var N=this.top.dataset,Q=N.getCurrentRecord(),M=n(Q),aa=M.strokewidth/2;M.x=this.x;M.y=this.y;this.top.syncFocusMask(M);Q.data.config=Ext.util.JSON.encode(M).replace(/^{|}$/g,"");Q.dirty=true;this.fireEvent("move",this,N,Q,M.x-W,M.y-W);this.top.fireEvent("move",this,N,Q,M.x-W,M.y-W)}if(u(this.wrap)){if(aa%2==1&&!this.shadow){P+=0.5;O+=0.5}s(this.proxy,P,O)}else{P+=U[0];O+=U[1];this.proxy.moveTo(P,O)}this.syncLineEditors(this.x-X,this.y-V)},getRecord:function(){var L=this.id.match(/(.*)_(\d+)(_.*)*$/),M;if(L){M=L[2];if(this.top.dataset){return this.top.dataset.findById(M)}}},destroy:function(){this.clearEditors();if(this.focusMask){this.focusMask.un("mousedown",this.onMouseDown,this);this.focusMask.remove()}this.text&&this.text.remove&&this.text.remove();z.Path.superclass.destroy.call(this)},getVmlTpl:function(M,N,O){var L=["<v:shape id='{id}' filled='"+N+"' stroked='"+M+"' coordsize='{zoom},{zoom}' style='position:absolute;left:0;top:0;width:1px;height:1px;cursor:{cursor};{style}' path='{path}'>"];if(N){L.push(F)}if(M){L.push(k)}if(O){L.push(i)}L.push("</v:shape>");return L}}),Group:Ext.extend($A.Graphics,{initSVGWrap:function(){this.wrap=g("g",this.id);this.root.appendChild(this.wrap)},initVMLWrap:function(){this.wrap=A("v:group",this.id);this.wrap.setStyle({position:"absolute",width:100+"px",height:100+"px"});this.wrap.set({coordsize:"100,100"});this.root.appendChild(this.wrap)},initSVGElement:function(){},initVMLElement:function(){}}),Line:function(M){if(z.Line.processConfig(M)==false){return}var L=new z.Path(M);L.createEditors();L.hideEditors();return L},Oval:function(L){z.Oval.processConfig(L);return new z.Path(L)},Arc:function(L){z.Arc.processConfig(L);return new z.Path(L)},Rect:function(L){z.Rect.processConfig(L);return new z.Path(L)},Diamond:function(L){z.Diamond.processConfig(L);return new z.Path(L)},Arrow:function(P){if(!P.startarrow&&!P.endarrow){return}var R=P.root.child("defs");if(!R){R=g("defs");P.root.insertFirst(R)}var Q=P.color||"rgba(0,0,0,1)",T=P.opacity||1,N=P.width||2,M="-"+Q+"-"+T*100,U="0 0 100 100";if(Ext.isIE9){M+="-"+N;var O=N/2*Math.sqrt(5);U=-O+" "+(-O)+" "+(100+2*O)+" "+(100+2*O)}if(P.startarrow){var L="start-arrow-"+P.startarrow+M,S=Ext.get(L);if(!S){S=g("marker",L);S.set({viewBox:U,refX:50,refY:50,orient:"auto"});R.appendChild(S);new z.Path({fillcolor:Q,fillopacity:T,d:"M 100 0 L 0 50 L 100 100 L 66.66 50 z",root:S})}}if(P.endarrow){var L="end-arrow-"+P.endarrow+M,S=Ext.get(L);if(!S){S=g("marker",L);S.set({viewBox:U,refX:50,refY:50,orient:"auto"});R.appendChild(S);new z.Path({fillcolor:Q,fillopacity:T,d:"M 0 0 L 100 50 L 0 100 L 33.33 50 z",root:S})}}}};Ext.apply(z,{Image:Ext.extend(z.Path,{initSVGElement:function(){if(this.x||this.y){s(this.wrap,this.x,this.y)}this.el=g("image",this.id+"_el");this.el.dom.style.cssText=r({stroke:this.strokecolor,"stroke-width":this.strokewidth,"stroke-opacity":this.strokeopacity,"-moz-user-select":o})+this.style;this.el.dom.setAttributeNS(t,"xlink:href",this.image);this.el.set({x:0,y:0,width:this.width,height:this.height});this.wrap.appendChild(this.el)},initVMLElement:function(){this.wrap.setStyle({position:"absolute",width:100+"px",height:100+"px",left:this.x+"px",top:this.y+"px"});this.wrap.set({coordsize:"100,100"});this.el=new Ext.Template(this.vmlTpl).append(this.wrap.dom,{id:this.id+"_el",src:this.image,style:this.style,width:this.width,height:this.height,strokeColor:this.strokecolor||o,strokeWidth:this.strokecolor?this.strokewidth:0,strokeOpacity:this.strokecolor?(this.strokeopacity||1):0},true)},vmlTpl:["<v:image id='{id}' src='{src}' style='position:absolute;left:0;top:0;width:{width}px;height:{height}px;{style}'>",k,"</v:image>"]}),Text:Ext.extend(z.Path,{initSVGWrap:function(){this.wrap=g("g",this.id);this.root.appendChild(this.wrap)},initVMLWrap:function(){this.wrap=A("v:group",this.id);this.root.appendChild(this.wrap)},initSVGElement:function(){var L=this.size||14;this.el=g("text",this.id+"_el");this.el.dom.style.cssText=r({fill:this.color,"font-size":L+"px","font-family":this.fontfamily,"line-height":L+"px",cursor:"text"})+this.style;this.el.set({dx:this.dx+1,dy:this.dy+L-2});this.el.dom.textContent=this.text;this.wrap.appendChild(this.el);if(!Ext.isEmpty(this.rotation)){s(this.el,null,null,null,null,this.rotation)}return this.el},initVMLElement:function(){var M=this.size||14;this.el=new Ext.Template(this.vmlTpl).append(this.wrap.dom,{id:this.id+"_el",style:r({"line-height":M+"px","font-size":M+"px","font-family":this.fontfamily})+this.style,left:this.dx,top:this.dy,color:this.color||"black"},true);this.el.update(this.text);if(!Ext.isEmpty(this.rotation)){var L,N;if(this.positionwrap){L=this.positionwrap.x;N=this.positionwrap.y;this.el.dx=this.positionwrap.titlex;this.el.dy=this.positionwrap.titley}s(this.el,null,null,null,null,this.rotation,L,N)}return this.el},vmlTpl:"<span id='{id}' unselectable='on'  onselectstart='return false;' style='position:absolute;left:{left}px;top:{top}px;color:{color};cursor:pointer;white-space:nowrap;{style}'></span>"})});z.Line.processConfig=function(O){var N=O.points.match(f),Q=[];if(!N){return false}for(var P=0,M=N.length;P<M;P+=2){Q.push([N[P],N[P+1]])}if(Q.length<2){return false}var L=Q[0][0],R=Q[0][1];N=["M",0,0,"L"];for(var P=1,M=Q.length;P<M;P++){N.push(Q[P][0]-L,Q[P][1]-R)}O.d=N.join(" ");if(O.strokewidth==1){O.strokewidth=2}O.fillcolor=o;O.points=Q;O.x=Number(L);O.y=Number(R)};z.Rect.processConfig=function(P){var Q=Number(P.height)||200,S=Number(P.width)||200,M=Math.min(Number(P.rx)||0,S/2),L=Math.min(Number(P.ry)||0,Q/2),T=M>0&&L>0,O=M!=S/2,N=L!=Q/2,R=["M",0,T?L:0];if(T){R.push("A",M,L,0,0,1,M,0)}if(O){R.push("H",S-(T?M:0))}if(T){R.push("A",M,L,0,0,1,S,L)}if(N){R.push("V",Q-(T?L:0))}if(T){R.push("A",M,L,0,0,1,S-M,Q)}if(O){R.push("H",T?M:0)}if(T){R.push("A",M,L,0,0,1,0,Q-L)}if(N){R.push("Z")}P.d=R.join(" ")};z.Oval.processConfig=function(L){L.height=L.height||L.ry*2;L.width=L.width||L.rx*2;L.ry=L.height/2;L.rx=L.width/2;z.Rect.processConfig(L)};z.Arc.processConfig=m?function(X){var V=X.x,U=X.y,N=X.start%(2*C),S=X.r,O=X.end%(2*C)-0.000001,T=X.innerR||0,Q=X.open,R=G(N),L=w(N),M=G(O),W=w(O),P=(O>N?O:O+2*C)-N<C?0:1;X.d=["M",S*R,-S*L,"A",S,S,0,P,0,S*M,-S*W,Q?"M":"L",T*M,-T*W,"A",T,T,0,P,1,T*R,-T*L,Q?"":"Z"].join(" ")}:function(Z){var X=Z.zoom||10000,V=Z.x*X,U=Z.y*X,N=Z.start,O=Z.end,R=Z.r*X,Q=G(N),L=w(N),M=G(O),W=w(O),T=(Z.innerR||0)*X,Y=0.08/R,P=(T&&0.1/T)||0,S;if(O-N===0){return["x"]}S=["at",b(-R),b(-R),b(R),b(R),b(R*Q),b(-R*L),b(R*M),b(-R*W)];if(T){S.push("wa",b(-T),b(-T),b(T),b(T),b(T*M),b(-T*W),b(T*Q),b(-T*L))}S.push("x","e");Z.path=S.join(" ")};z.Diamond.processConfig=function(M){var N=Number(M.height)||100,L=Number(M.width)||200,O=["M",0,N/2,"L",L/2,0,L,N/2,L/2,N,"Z"];M.d=O.join(" ")}})();