/* Links to send you to proper sites*/

function ebayClick(){
  location = "https://www.ebay.com";
}

function flightClick(){
  location = "https://www.flightclub.com";
}

function roundClick(){
  location = "https://www.roundtwostore.com";
}

function kithClick(){
  location = "https://www.kith.com";
}

function JJClick(){
  location = "https://www.jimmyjazz.com";
}

function flClick(){
  location = "https://www.footlocker.com";
}

function trophyClick(){
  location = "https://www.trophyroomstore.com";
}

function stockClick(){
  location = "https://www.stockx.com";
}

function eastClick(){
  location = "https://www.eastbay.com";
}

function signup(){
  location = "/Users/trippytrey/Documents/HTML/322Proj/signup.html";
}

/* gets username and password and sends user back to index screen */
function register() {
    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;
    alert("Thank you for creating account.");
    location = "index.html";
}
