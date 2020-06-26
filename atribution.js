// action - page - element hash
/*
goal, to be able to work on any site. Use only EMCA5 and below js to ensure maximum attribution and compatibility with microsofts mistake of a browser

*/

ga.getAll()[0].get('name'); // cycles through all of the GA id's loaded and gets the first ones name (id)


document.querySelectorAll('a').forEach(function(element , index){
  element.addEventListener('click',function(el){
    console.log(el.type,  el.srcElement.innerText  + ' - ElementID '+index, window.location.pathname   )
    })
})





// Add an event listener to every email href
var _email = document.querySelectorAll("[href*='mailto']")
_email.forEach(
  function(_emailElement) {
    _emailElement.addEventListener("click", function() {
      console.log('asd')
   },false);
  }
);


// Loop through all elements with an href, add an event listener
document.querySelectorAll('a[href]').forEach(function(element){
  element.addEventListener('click',function(el){
    console.log('## ', window.location.pathname, el.srcElement.innerText)
    })
})


// Currency filter, need to text this and make sure commas, and wierd formats are not going to K/O it 
var currency = jQuery('SELECTOR').text();
var number = Number(currency.replace(/[^0-9.-]+/g, "")); 
console.log(number)


// this will only execute once
element.addEventListener('click', function handler() {
    
    console.log('Only once!');
    this.removeEventListener('click', handler);
  });


// mailto click
var _mailto = document.querySelectorAll("[href*='mailto']")
_mailto.forEach(
  function(_mailElement) {
    _mailElement.addEventListener("click", function() {
      console.log('asd')
    },false);
  }
);


// adds an event listener to every tel / phone link 
var _tel = document.querySelectorAll("[href*='tel']")
_tel.forEach(
  function(_telElement) {
    _telElement.addEventListener("click", function() {
      console.log('asd')
   },false);
  }
);


// time on page - 5 sec increments
let _time =0 
let _step = 5000
window.setInterval(function(){
    _time += _step
    console.log(_time)
   //// call your function here
}, _step);


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


//  Events brainstorming
Links leaving the site
all buttons 
all tel links 
all email links
add to cart

search event
page timing 
page scroll depth 
wheredidIcomefrom - this can be an easy way to get ET done by seeing where the referring page was. 


