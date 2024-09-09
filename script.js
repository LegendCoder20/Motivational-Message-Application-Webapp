console.log("Hello");

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.querySelector("button");

const fetchQuotes = async (e) => {
  const url = "https://api.quotable.io/quotes/random";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.length);
    if (data.length === 0 || data.length > 1) {
      alert("Some Error Occured");
    }
    quote.innerHTML = data[0].content;
    author.innerHTML = "-" + data[0].author;
  } catch (err) {
    console.log(err);
  }
};
btn.onclick = fetchQuotes;
