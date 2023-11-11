const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");
const body = document.body;
const logoColor = document.getElementById("logo");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");
const myLibrary = [];
let timeout;
const scrollToTopButton = document.getElementById("scrollToTop");
window.onscroll = function () {
  scrollFunction();
};
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.classList.remove("hidden");
  } else {
    scrollToTopButton.classList.add("hidden");
  }
};
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* const addBookBtn = document.getElementById("submmit-new-book"); */

lightMode.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(236, 232, 232)";
  const navHeader = document.getElementById("nav");
  navHeader.style.backgroundColor = "";
  logoColor.style.color = "";
  const paraToggle = (document.getElementById("para-toggle").style.color = "");
  const h1Toggle = (document.getElementById("h1-toggle").style.color = "");
});

darkMode.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(20, 19, 19)";
  const navHeader = document.getElementById("nav");
  navHeader.style.backgroundColor = "rgb(20, 19, 19)";
  logoColor.style.color = "rgb(236, 232, 232)";
  const paraToggle = (document.getElementById("para-toggle").style.color =
    "rgb(236, 232, 232)");
  const h1Toggle = (document.getElementById("h1-toggle").style.color =
    "rgb(236, 232, 232)");
});

const openBookdetails = () => {
  const modal = document.querySelector(".modal");
  modal.classList.add("right-0");
};

const closeBookdetails = () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("right-0");
};

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add a new book to the library
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

// Display books in the Library
function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.style.backgroundColor = "rgb(20, 83, 45)";
    bookCard.style.height = "19rem";
    bookCard.innerHTML = ` 
    <div class="space-y-5 mt-2 ">
    <h2 class="text-zinc-400 font-medium underline text-center">${
      book.title
    }</h2>
            <p class="text-center">Author: ${book.author}</p>
            <p class="text-center">Pages: ${book.pages}</p>
            <p class="text-center">Read: ${book.read ? "Yes" : "No"}</p>
            <div class="grid place-content-center space-y-3">
            <button class="remove-book py-2 px-4 font-semibold bg-purple-600 rounded-sm text-black hover:bg-purple-950 hover:text-white transition-all delay-300" data-index="${index}">Remove</button>
            <button class="toggle-read py-2 px-4  font-semibold bg-purple-600 rounded-sm text-black hover:bg-purple-950  hover:text-white transition-all delay-300" data-index="${index}">Toggle Read Status</button>
            </div>
            </div>`;

    bookList.appendChild(bookCard);
  });
  addEventListeners();
}

function addEventListeners() {
  // Event Listener for delete button on each card
  let removeButtons = document.querySelectorAll(".remove-book");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      myLibrary.splice(index, 1);
      displayBooks();
    });
  });

  const toggleReadButtons = document.querySelectorAll(".toggle-read");
  toggleReadButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      myLibrary[index].read = !myLibrary[index].read;
      displayBooks();
    });
  });
}

document
  .getElementById("book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = parseInt(document.getElementById("book-pages").value);
    const readStatus = document.getElementById("read").checked;
    const errorElement = document.getElementById("error");
    if (!title || !author || !pages) {
      errorElement.style.opacity = "1";

      setTimeout(() => {
        errorElement.style.opacity = "0";
      }, 2000);
    } else {
      errorElement.style.opacity = "0";
      const newBook = new Book(title, author, pages, readStatus);
      addBookToLibrary(newBook);

      // Reset form value
      document.getElementById("book-title").value = "";
      document.getElementById("book-author").value = "";
      document.getElementById("book-pages").value = "";
      document.getElementById("read").checked = false;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        closeBookdetails();
      }, 1000);
    }
  });

// Display initial libraryS

openModal.addEventListener("click", openBookdetails);
closeModal.addEventListener("click", closeBookdetails);
