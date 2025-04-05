var quotesList = [
  {
    quoteDescription:
      "The greater the difficulty, the more glory in surmounting it.",
    authorName: " — Epicurus —",
  },

  {
    quoteDescription:
      "Do not despair when adversity strikes you, for with hardship comes strength.",
    authorName: " — Ali ibn Abi Talib —",
  },

  {
    quoteDescription:
      "If you feel sadness, know that Allah will make a way out for you.",
    authorName: " ― Abu Bakr Al-Siddiq —",
  },

  {
    quoteDescription:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    authorName: " ― Aristotle —",
  },

  {
    quoteDescription:
      "There is no despair with life, and there is no life with despair.",
    authorName: " ― Umar ibn al-Khattab —",
  },

  {
    quoteDescription: "He who does not dare, does not win.",
    authorName: " ― Aristotle  —",
  },

  {
    quoteDescription:
      "Courage is not the absence of fear, but the will to face it.",
    authorName: " ― Socrates —",
  },

  {
    quoteDescription:
      "Be kind. Every person you meet is fighting a difficult battle.",
    authorName: " ― Plato —",
  },

  {
    quoteDescription: "The first and the best victory is to conquer self.",
    authorName: " ― Plato —",
  },

  {
    quoteDescription: "Change is the only constant, embrace it with courage.",
    authorName: " ― Heraclitus —",
  },

  {
    quoteDescription: "The greater the challenge, the greater the opportunity.",
    authorName: " ― Epicurus —",
  },

  {
    quoteDescription:
      "You will never cross the ocean until you have the courage to lose sight of the shore.",
    authorName: " ― Seneca  —",
  },

  {
    quoteDescription:
      "A ship is safe in harbor, but that is not what ships are for.",
    authorName: " ― Seneca —",
  },
];

var curentQuoteAppear = -1;

function getQuotes() {
  var quoteNumber = Math.trunc(Math.random(quotesList) * quotesList.length);

  while (curentQuoteAppear === quoteNumber) {
    quoteNumber = Math.trunc(Math.random(quotesList) * quotesList.length);
  }

  curentQuoteAppear = quoteNumber;

  document.getElementById("quotes").innerHTML = `<p id="quotes">
                  ${quotesList[quoteNumber].quoteDescription}
                </p>`;

  document.getElementById("author").innerHTML =
    quotesList[quoteNumber].authorName;
  document.getElementById("hide").innerHTML = "";
}
