const e=document.querySelector(".form"),o=e.querySelector('[name="delay"]'),t=e.querySelector('[name="step"]'),n=e.querySelector('[name="amount"]');function l(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(e){e.preventDefault(),function(e,o,t){for(let n=0;n<t;n++)l(n+1,e+o*n).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}(parseInt(o.value),parseInt(t.value),parseInt(n.value))}));
//# sourceMappingURL=03-promises.590cadab.js.map