(this["webpackJsonphappy-birthday"]=this["webpackJsonphappy-birthday"]||[]).push([[0],[,,,,,,function(t,e,i){t.exports=i.p+"static/media/AvenirNextLTPro-Demi.de28f71e.otf"},,function(t,e,i){t.exports=i(16)},,,,,function(t,e,i){},function(t,e,i){},,function(t,e,i){"use strict";i.r(e);var o=i(0),n=i.n(o),a=i(3),r=i.n(a),s=(i(13),i(14),i(7)),c=i(4),h=i(5),u=i(1),l=i.n(u),f=function(){function t(e,i,o){Object(c.a)(this,t),this.sketch=o,this.position=this.sketch.createVector(this.sketch.random(this.sketch.width),this.sketch.random(this.sketch.height)),this.target=this.sketch.createVector(e,i),this.velocity=l.a.Vector.random2D(),this.acceleration=l.a.Vector.random2D(),this.zeroVector=this.sketch.createVector(0,0),this.radius=8,this.maxSpeed=12,this.maxForce=4,this.maxMagnitude=50}return Object(h.a)(t,[{key:"update",value:function(){this.position.add(this.velocity),this.velocity.add(this.acceleration),this.acceleration.mult(0)}},{key:"show",value:function(){this.sketch.stroke(255),this.sketch.fill(0),this.sketch.ellipse(this.position.x,this.position.y,this.radius,this.radius)}},{key:"applyAllForces",value:function(){this.applyMouseFleeForce(),this.applyArriveForce()}},{key:"applyMouseFleeForce",value:function(){var t=this.sketch.pmouseX,e=this.sketch.pmouseY,i=this.sketch.mouseX,o=this.sketch.mouseY;if(t!==i||e!==o){var n=this.sketch.createVector(i,o),a=this.flee(n);this.applyForce(a)}}},{key:"applyArriveForce",value:function(){var t=this.arrive(this.target);this.applyForce(t)}},{key:"applyForce",value:function(t){this.acceleration.add(t)}},{key:"flee",value:function(t){var e=l.a.Vector.sub(t,this.position);if(e.mag()<this.maxMagnitude){e.setMag(this.maxSpeed),e.mult(-1);var i=l.a.Vector.sub(e,this.velocity);return i.limit(this.maxForce),i.mult(7)}return this.zeroVector}},{key:"arrive",value:function(t){var e=l.a.Vector.sub(t,this.position),i=e.mag(),o=this.maxSpeed;i<this.maxMagnitude&&(o=this.sketch.map(i,0,100,0,this.maxSpeed)),e.setMag(o);var n=l.a.Vector.sub(e,this.velocity);return n.limit(this.maxForce),n}}]),t}(),d=i(6),p=i.n(d),v=function(t,e){return function(i){var o,n,a,r,c=[];i.preload=function(){o=i.loadFont(p.a)};i.setup=function(){var h=t.offsetWidth,u=t.offsetHeight;i.createCanvas(h,u),function(t,h){n=[];var u=e.split(" "),l=Object(s.a)(u,3),d=l[0],p=l[1],v=l[2];t>h?(a=o.textToPoints("".concat(d," ").concat(p),.04*t,.33*h,.12*t),r=o.textToPoints(v,.05*t,.83*h,.3*t)):(a=o.textToPoints(d,.01*t,.3*h,.3*t),r=o.textToPoints(p,.01*t,.5*h,.25*t),c=o.textToPoints(v,.01*t,.7*h,.32*t)),a.forEach((function(t){n.push(new f(t.x,t.y,i))})),r.forEach((function(t){n.push(new f(t.x,t.y,i))})),c.forEach((function(t){n.push(new f(t.x,t.y,i))}))}(h,u),i.frameRate(30)},i.draw=function(){i.clear(),n.forEach((function(t){t.update(),t.applyAllForces(),t.show()}))}}},m=function(){var t=n.a.useRef(null);return n.a.useEffect((function(){var e=t.current;new l.a(v(e,"Happy Birthday Buni"),e)})),n.a.createElement("div",{className:"main"},n.a.createElement("div",{ref:t}))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var i=t.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");y?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(i){var o=i.headers.get("content-type");404===i.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):k(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(e,t)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.343fb137.chunk.js.map