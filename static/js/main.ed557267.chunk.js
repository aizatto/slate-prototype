(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,n,o){},192:function(e,n,o){"use strict";o.r(n);var t=o(2),a=o.n(t),r=o(69),c=o.n(r),l=(o(79),o(73)),i=o(80).default,u=o(191).Editor,s=o(3).Value,d=(o(186).default,[i({highlight:!0,block:"code",line:"code-line",classNames:{block:"code",line:"code-line"}})]),h=s.fromJSON({document:{nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",text:"A line of text in a paragraph."}]}]},annotations:{},decorations:{}});function f(e,n,o){if(!e.ctrlKey)return o();switch(e.key){case"y":e.preventDefault(),console.log("here"),n.insertCode({code:"<h1>Heading 1</h1>",language:"html"});break;default:return o()}}var g=function(){var e=Object(t.useState)(h),n=Object(l.a)(e,2),o=n[0],r=n[1];return console.log(o),console.log(o.toJSON()),a.a.createElement(u,{plugins:d,value:o,onChange:function(e){var n=e.value;return r(n)},onKeyDown:f})},m=(o(190),function(){return a.a.createElement("div",{className:"App container"},a.a.createElement(g,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,n,o){e.exports=o(192)},79:function(e,n,o){}},[[74,1,2]]]);
//# sourceMappingURL=main.ed557267.chunk.js.map