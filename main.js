let btn = $(".button");

let display = $("#display");

let name = $("#author");

display.hide();

name.hide();

btn.click(function() {

  // body...

  let display = $("#display");

  let name = $("#author");

  let p = $(".name")

  var quotes = [

    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],

    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],

    ["Argue with idiots, and you become an idiot.", "Paul Graham"],

    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],

    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]

  ];

  var rndm = Math.floor(Math.random() * 4);

  display.text(quotes[rndm][0]);

  p.text(quotes[rndm][1])

  display.css({"height": "auto"});

  

  display.slideToggle(1000)

  name.slideToggle(1000)

})
