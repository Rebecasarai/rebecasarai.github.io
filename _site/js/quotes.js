(function() {
      var quotes = [
        {
          text: "The best way to predict the future is to create it.",
          autor: "Peter Drucker"
        },
        {
          text: "second",
          autor: "me"
        }
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quoteDisplay").innerHTML =
        '<h1 class="quotess">' + quote.text + '</h1>'+
        '<h3 class="author">' + quote.autor + '</h3>';
    })();