(function() {
      var quotes = [
        {
          text: "The best way to predict the future is to create it."
        },
        {
          text: "text2"
        }
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
        '<p>' + quote.text + '</p>' +
        '<img src="' + quote.img + '">';
    })();