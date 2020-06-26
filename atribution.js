// action - page - 


ga.getAll()[0].get('name');
// outbound events

const _email = document.querySelectorAll("[href*='mailto']")
function fire() {
   console.log('asd')
}
_email.forEach(
  function(_emailElement) {
    _emailElement.addEventListener("click", fire,false);
  }
);




var currency = jQuery('SELECTOR').text();
var number = Number(currency.replace(/[^0-9.-]+/g, "")); console.log(number)


// this will only execute once
element.addEventListener('click', function handler() {
    
    console.log('Only once!');
    this.removeEventListener('click', handler);
  });


// mailto click
  const _mailto = document.querySelectorAll("[href*='mailto']")
  function fire() {
     console.log('asd')
  }
  _mailto.forEach(
    function(_mailElement) {
      _mailElement.addEventListener("click", fire,false);
    }
  );



// tel click
const _tel = document.querySelectorAll("[href*='tel']")
function fire() {
   console.log('asd')
}
_tel.forEach(
  function(_telElement) {
    _telElement.addEventListener("click", fire,false);
  }
);


// time on page
  let _time =0 
  let _step = 5000
  window.setInterval(function(){
      time += step
      console.log(time)
    /// call your function here
  }, step);


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



// event bus? 

// intake an event, and send out to Google analytics && mads. 

// Whitelist for facebook events? 
contact , book , send 



ingest page location element data 

fbq

microsoft ads

// we will need to poll the page to see whats all loaded & active 
urchinjs
analytics.js
ga.JS
gtag.js

hash the utm data 



function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}
let _a = contains('a',"Brochure")
for (i = 0; i < _a.length; i++) {
  _a[i].addEventListener("click", function(){
  ga('gtm1.send', 'event', 'button', 'click', 'brochure')
})
}