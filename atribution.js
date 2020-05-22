ga.getAll()[0].get('name');

var currency = jQuery('SELECTOR').text();
var number = Number(currency.replace(/[^0-9.-]+/g, "")); console.log(number)


element.addEventListener('click', function handler() {
    // this will only execute once
    console.log('Only once!');
    this.removeEventListener('click', handler);
  });

  // Email click
  document.querySelector('[href*=tel]').addEventListener('click',function(){
    ga('gtm1.send', 'event', 'contact', 'submit', 'form')
    })

    // Email click
  document.querySelector('[href*=tel]').addEventListener('click',function(){
    ga('gtm1.send', 'event', 'contact', 'submit', 'form')
    })
  // time on page
  let _time =0 
  let _step = 5000
  window.setInterval(function(){
      time += step
      console.log(time)
    /// call your function here
  }, step);

  setTimeout(function(){ alert("Hello"); }, 5000); //5s
  setTimeout(function(){ alert("Hello"); }, 15000); //15s
  setTimeout(function(){ alert("Hello"); }, 30000); //30s
  setTimeout(function(){ alert("Hello"); }, 60000); //1m
  setTimeout(function(){ alert("Hello"); }, 300000); //5m

  // scroll depth 

  // Establish depth % levels
  /*
    25%
    50%
    75%
    100%
  */
  const updateScrollPercentage = function() { 
    const heightOfWindow = window.innerHeight,
        contentScrolled = window.pageYOffset,
        bodyHeight = document.body.offsetHeight,
        percentage = document.querySelector("[data-scrollPercentage] .percentage")
        percentageVal = document.querySelector("#percentage-value")

    if(bodyHeight - contentScrolled <= heightOfWindow) {
            const total = bodyHeight - heightOfWindow,
            got = contentScrolled,
            percent = parseInt((got/total) * 100)
            console.log(percent)
            console.log(percent)
    }
    else {
        const total = bodyHeight - heightOfWindow,
            got = contentScrolled,
            percent = parseInt((got/total) * 100)
            console.log(percent)
    }
}

window.addEventListener('scroll', updateScrollPercentage)



// event bus

ingest page location element data 

fbq
bing

urchinjs
analytics.js
ga.JS
gtag.js