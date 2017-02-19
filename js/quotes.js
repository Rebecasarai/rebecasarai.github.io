(function() {
      var quotes = [
        {
          text: "The best way to predict the future is to create it.",
          autor: "Peter Drucker"
        },
        {
          text: "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.",
          autor: "Mark Zuckerberg"
        },
         {
          text: "Always deliver more than expected.",
          autor: "Larry Page"
        },
        {
          text: "The best time to plant a tree was 20 years ago. The second best time is now..",
          autor: "Chinese proverb"
        },
         {
          text: "You miss 100 percent of the shots you don't take.",
          autor: "Wayne Gretzky"
        },
         {
          text: "A leader is one who knows the way, goes the way and shows the way.",
          autor: "John C. Maxwell"
        },
         {
          text: "What is not started will never get finished.",
          autor: "Goethe"
        },
         {
          text: "When you cease to dream, you cease to live.",
          autor: "Malcolm Forbes"
        },
        {
          text: "Logic will get you from A to B. Imagination will take you everywhere.",
          autor: "Albert Einstein"
        },
        
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quoteDisplay").innerHTML =
        '<h1 class="quotess">“' + quote.text + '"</h1>'+
        '<h3 class="author">' + quote.autor + '</h3>';
    })();