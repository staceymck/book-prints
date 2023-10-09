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

const container = document.getElementById("container");

// For/Of loop is an ES6 feature, not supported in IE; p[reserves the index order
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