/* Google Analytics common functions */

  // code for google analytics based on code supplied by google		
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-34547073-1']);
  //_gaq.push(['_setDomainName', 'lab.gov']);
  _gaq.push(['_trackPageview']);


		
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  	})();
  
  function sendAnalytics(category,action,txt) {
  	_gaq.push(['_trackEvent',category,action,txt])
  }

