!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".form"),a=i.querySelector('[name="delay"]'),l=i.querySelector('[name="step"]'),u=i.querySelector('[name="amount"]');function c(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n=parseInt(a.value),t=parseInt(l.value),o=parseInt(u.value);n<0||t<0||o<=0?r.Notify.warning("Please enter a positive value!"):function(e,n,t){for(var o=0;o<t;o++)c(o+1,e+n*o).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}(n,t,o)}))}();
//# sourceMappingURL=03-promises.26957d60.js.map