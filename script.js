const books = [
  {title: "Atomic Habits", author: "James Clear"},
  {title: "The Legend of Sleepy Hollow", author: "Washington Irving"},
  {title: "Congo", author: "Michael Crichton"},
  {title: "Jurassic Park", author: "Michael Crichton"},
  {title: "The Body Keeps the Score", author: "Bessel A. van der Kolk"},
  {title: "Man's Search for Meaning", author: "Victor E. Frankl"},
  {title: "The Girl on the Train", author: "Paula Hawkins"},
  {title: "Into Thin Air", author: "John Krakauer"},
  {title: "The Twenty-Ninth Day", author: "Alex Messenger"},
  {title: "The Lean Product Playbook", author: "Dan Olsen"},
  {title: "Hooked: How to Build Habit-Forming Products", author: "Nir Eyal"},
  {title: "The Phoenix Project", author: "Gene Kim, Keven Behr, George Spafford"}
];

const container = document.getElementById("book-container");

// For/Of loop is an ES6 feature, not supported in IE; preserves the index order
// Using const to declare 'book' because I'm not changing book in the loop block
for (const book of books) {
  const div = document.createElement("div");
  div.classList.add("book");
  
  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = book.title;
  
  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = book.author;

  div.appendChild(title);
  div.appendChild(author);
  container.appendChild(div);
}

function changeColors() {
  const colors = ["#ffaa00", "#009999", "#ff8533", "#ffb3b3", "#ffdd99", "#5c5c8a", "#70dbdb"]
  const books = document.querySelectorAll(".book")

  books.forEach(function (book) {
    const randColor = colors[Math.floor(Math.random() * colors.length)]
    book.style.backgroundColor = randColor
  })
}

// Randomly assign colors to the book cards
document.addEventListener("DOMContentLoaded", changeColors)

// Let users update colors via button click
const colorButton = document.getElementById("color-button")
colorButton.addEventListener("click", changeColors)

// Let users open print dialogue via button click
const printButton = document.getElementById("print-button")
printButton.addEventListener("click", function() {
  window.print();
})