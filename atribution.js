// action - page - element hash
/*
goal, to be able to work on any site. Use only EMCA5 and below js to ensure maximum attribution and compatibility with microsofts mistake of a browser

*/
// todo detect platform


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
      ga('send', 'event', 'email', 'link', 'click')
    },false);
  }
);


// adds an event listener to every tel / phone link 
var _tel = document.querySelectorAll("[href*='tel']")
_tel.forEach(
  function(_telElement) {
    _telElement.addEventListener("click", function() {
      ga('send', 'event', 'tel', 'link', 'click')
   },false);
  }
);


var _url = document.querySelectorAll("[href*='https://web.whatsapp.com/']")
_url.forEach(
  function(_urlelement) {
    _urlelement.addEventListener("click", function(link) {
      ga('send', 'event', 'tel', 'link', link.target.href)
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

// Element Whitelist 
// this is an attempt to curate specific element events that most people would use 
contact , book , send , post , create , sign , newsletter 



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
all links

// chat tracking
hubspot


// Fixes
convert phone numbers to proper tel link
convert email elements to propel mailto link

// Detection
Detect Google analytics
Detect Google ads
Detect Microsoft ads
Detect facebook pixel
Detect Marchex
Detect Google call tracking
Detect Callrail
recaptcha
jQuery
tawk.to
// Shogun form jQuery(".shogun-form-box-submit")


search event
page timing 
page scroll depth 
wheredidIcomefrom - this can be an easy way to get ET done by seeing where the referring page was. 



try {
  fbq == undefined
  jQuery("script:contains('fbq')")
} catch (e) {
  console.log(e)
}

try {
  uetq == undefined
  jQuery("script:contains('uetq')")
} catch (e) {
  console.log(e)
}

try {
  ga == undefined
} catch (e) {
  console.log(e)
}

try {
  _gaq == undefined
} catch (e) {
  console.log(e)
}

try {
  gtag == undefined
} catch (e) {
  console.log(e)
}

try {
  gtag == undefined
} catch (e) {
  console.log(e)
}

try {
  gtag == undefined
} catch (e) {
  console.log(e)
}






// Tracking ID Detection
var _ids = [] // _underscore denotes not cleaned
var log = console.log

// Grab Urchinjs, Gaq, Ua, Ga, and gtag.js ID's
document.querySelectorAll("[src*='google'][src*='?id']").forEach(function(el){
_ids.push({'google_id' : el.src.split('=')[el.src.split('=').length-1]})
}) // will grab google scripts being loaded in by html

ga.getAll().forEach(function(id){{
_ids.push({'google_id' : id.model.data.ia[":trackingId"]})
}}) // will grab google scripts being loaded in by other means


document.querySelectorAll("[src*='facebook'][src*='config']").forEach(function(el){
  _ids.push({'pixel_id' : el.src.split('config/')[1].split('?')[0] })
})


document.querySelectorAll("img[src*='bing']").forEach(function(el){
  _ids.push({'microsoftads_id' : el.src.split('?ti=')[1].split('&Ver')[0]})
})// Microsoft ads, have to be a bit wierd to get the ID. Current plan is to query all pageviews sent to mads, and extract the TI ID from there, to establish where to send to ,and account for named trackers 


_ids.filter((elem, index, self) => self.findIndex(
    (t) => {return (t.x === elem.x && t.y === elem.y)}) === index) // clean out potential duplicates
var ids =  Array.from(new Set(_ids.map(e => JSON.stringify(e)))).map(ae => JSON.parse(ae)); 


console.log(ids)




// Have to do a bunch of fancy shit, grab EVERYTHING, inner and outer string it, and join it all back together into a massive string because web devs are fucking insane and leave hella HMTL outside of the closing body tag, so its nicely on the view source, but not accessible by normal selectors like hmtl
// CMS DETECTION
var _pageScripts = [].map.call( document.scripts, function(node){
    return node.textContent || node.innerText || "";
}).join("");


console.log(typeof _pageScripts,_pageScripts)

// let shopify = (psuedodom.match(/bigcommerce/gi) || []).length;
let cmsDetectiveCases = {
  bigcommerce:(psuedodom.match(/bigcommerce/gi) || []).length,
  wordpress:
}
let bigcommerce = (psuedodom.match(/bigcommerce/gi) || []).length;
let wordpress = (psuedodom.match(/wordpress/gi) || []).length;
let shopify = (psuedodom.match(/shopify/gi) || []).length;
let magento = (psuedodom.match(/magento/gi) || []).length; // magento 1 vs 2? 
let wix = (psuedodom.match(/wix/gi) || []).length;


console.log(bigcommerce)





// wordpress https://www.logicalposition.com/google-analytics-code-generator
document.querySelector('html').innerHTML.includes('wordpress')

// shopify https://lp-code-sandbox.myshopify.com/
// just look for the trekkie object


// Bigcommerce https://stromliving.com/



// Plain js jQuery Onload
(function(funcName, baseObj) {
  // The public function name defaults to window.docReady
  // but you can pass in your own object and own function name and those will be used
  // if you want to put them in a different namespace
  funcName = funcName || "docReady";
  baseObj = baseObj || window;
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;

  // call this when the document is ready
  // this function protects itself against being called more than once
  function ready() { // http://jsfiddle.net/jfriend00/YfD3C/
      if (!readyFired) {
          // this must be set to true before we start calling callbacks
          readyFired = true;
          for (var i = 0; i < readyList.length; i++) {
              // if a callback here happens to add new ready handlers,
              // the docReady() function will see that it already fired
              // and will schedule the callback to run right after
              // this event loop finishes so all handlers will still execute
              // in order and no new ones will be added to the readyList
              // while we are processing the list
              readyList[i].fn.call(window, readyList[i].ctx);
          }
          // allow any closures held by these functions to free
          readyList = [];
      }
  }

  function readyStateChange() {
      if ( document.readyState === "complete" ) {
          ready();
      }
  }

  // This is the one public interface
  // docReady(fn, context);
  // the context argument is optional - if present, it will be passed
  // as an argument to the callback
  baseObj[funcName] = function(callback, context) {
      if (typeof callback !== "function") {
          throw new TypeError("callback for docReady(fn) must be a function");
      }
      // if ready has already fired, then just schedule the callback
      // to fire asynchronously, but right away
      if (readyFired) {
          setTimeout(function() {callback(context);}, 1);
          return;
      } else {
          // add the function and context to the list
          readyList.push({fn: callback, ctx: context});
      }
      // if document already ready to go, schedule the ready function to run
      if (document.readyState === "complete") {
          setTimeout(ready, 1);
      } else if (!readyEventHandlersInstalled) {
          // otherwise if we don't have event handlers installed, install them
          if (document.addEventListener) {
              // first choice is DOMContentLoaded event
              document.addEventListener("DOMContentLoaded", ready, false);
              // backup is window load event
              window.addEventListener("load", ready, false);
          } else {
              // must be IE
              document.attachEvent("onreadystatechange", readyStateChange);
              window.attachEvent("onload", ready);
          }
          readyEventHandlersInstalled = true;
      }
  }
})("docReady", window);