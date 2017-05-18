getTimeZone = ()=>{
  const https = require("https");
   const apiKey = "AIzaSyDBPrUdTyng9omWTkiNKyh155Oe84w9FR0";


  let request = https.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + apiKey,

              function(response) {
                  var body =" ";
                  response.on('data', function(output) {
                      body += output;
                  });
                  response.on('end', function() {
                      var display = JSON.parse(body);
                      // console.log(display.timeZoneId);
                      console.log(display.address);
                  });
              });

};
getTimeZone();
