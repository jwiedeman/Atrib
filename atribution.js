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


// we will need to poll the page to see whats all loaded & active 
urchinjs
analytics.js
ga.JS
gtag.js
fbq
mads



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

try{ // Grab Urchinjs, Gaq, Ua, Ga, and gtag.js ID's
document.querySelectorAll("[src*='google'][src*='?id']").forEach(function(el){
  log('Google case 1 - ',el.src.split('=')[el.src.split('=').length-1])
  _ids.push({'google_id' : el.src.split('=')[el.src.split('=').length-1]})
  }) // will grab google scripts being loaded in by html
}
catch(e){null}

try{
  ga.getAll().forEach(function(el){{
    log('Google case 2 - ',el.model.data.ea[":trackingId"])
    _ids.push({'google_id' : el.model.data.ea[":trackingId"]})
    }}) // will grab google scripts being loaded in by other means
}
catch(e){null}

try{
  document.querySelectorAll("[src*='facebook'][src*='config']").forEach(function(el){
    log('Facebook - ',el.src.split('config/')[1].split('?')[0])
    _ids.push({'pixel_id' : el.src.split('config/')[1].split('?')[0] })
  })
}
catch(e){null}

try{
  document.querySelectorAll("img[src*='bing']").forEach(function(el){
    log('Bing - ', el.src.split('?ti=')[1].split('&Ver')[0])
    _ids.push({'microsoftads_id' : el.src.split('?ti=')[1].split('&Ver')[0]})
  })// Microsoft ads, have to be a bit wierd to get the ID. Current plan is to query all pageviews sent to mads, and extract the TI ID from there, to establish where to send to ,and account for named trackers   
}
catch(e){null}


_ids.filter((elem, index, self) => self.findIndex(
    (t) => {return (t.x === elem.x && t.y === elem.y)}) === index) // clean out potential duplicates
var ids =  Array.from(new Set(_ids.map(e => JSON.stringify(e)))).map(ae => JSON.parse(ae)); 

log(ids)




// Have to do a bunch of fancy shit, grab EVERYTHING, inner and outer string it, and join it all back together into a massive string because web devs are fucking insane and leave hella HMTL outside of the closing html tag(why magento 2, WHY), so its nicely on the view source, but not accessible by normal selectors like hmtl
// CMS DETECTION
var _pageScripts = [].map.call( document.scripts , function(node){
  return node.textContent || node.innerText || "";
}).join("");
_pageScripts += document.documentElement // Take all the scripts in the document, and add it to the text of the entire dom
// Build a string soup of the dom to run regex against. Regex has a 98% preformance advantage over js string search so this will be fast for everyone except I.E nerds, to extend, just collect data, then append it to the existing string, who cares about duplicates

let cmsDetectiveCases = {
'bigcommerce' :(_pageScripts.match(/bigcommerce/gi) || []).length,
'wordpress' :(_pageScripts.match(/wordpress/gi) || []).length,
'shopify' :(_pageScripts.match(/shopify/gi) || []).length,
'magento' : (_pageScripts.match(/magento/gi) || []).length, // M2 https://www.oshamanual.com/
'wix' : (_pageScripts.match(/wix/gi) || []).length, // https://www.animalmusicweb.com/
'drupal' : (_pageScripts.match(/drupal/gi) || []).length, // https://www.drupal.org/
'joomla' : (_pageScripts.match(/joomla/gi) || []).length, // https://www.lejourlepluscourt.be
'prestashop' : (_pageScripts.match(/prestashop/gi) || []).length, // https://www.maniac-auto.com/fr/
'3dcart' : (_pageScripts.match(/3dcart/gi) || []).length, // https://www.unicusdecor.com/
'squarespace' : (_pageScripts.match(/squarespace/gi) || []).length, // https://www.curibio.com/
}

console.log(Object.keys(cmsDetectiveCases).reduce(function(a, b){ return cmsDetectiveCases[a] > cmsDetectiveCases[b] ? a : b }),cmsDetectiveCases // returm the CMS with the highest mentions
)







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




// monkey patch to log post messages
const pm = window.postMessage;
window.postMessage = (msg, domain) => {
    console.log(msg);
    pm(msg, domain);
}
(function() {
  var proxied = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function() {
      console.log( arguments );
      //Here is where you can add any code to process the request. 
      //If you want to pass the Ajax request object, pass the 'pointer' below
      var pointer = this
      var intervalId = window.setInterval(function(){
              if(pointer.readyState != 4){
                      return;
              }
              console.log( pointer.responseText );
              //Here is where you can add any code to process the response.
              //If you want to pass the Ajax request object, pass the 'pointer' below
              clearInterval(intervalId);

      }, 1);//I found a delay of 1 to be sufficient, modify it as you need.
      return proxied.apply(this, [].slice.call(arguments));
  };


})();


// Base codes

/* 


<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXX-X']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');
</script>