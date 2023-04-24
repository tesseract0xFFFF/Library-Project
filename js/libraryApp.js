// Books are stored here.
let myLibrary = [];

// The book object constructor.
function Book(title, author, numOfPages, read){
    this.title = title;
    this.author = author; 
    this.numOfPages = numOfPages;
    this.read = read;
}

// displays the book.
function displayBook(book){

  const bookCollectionDisplay = document.querySelector('.bookCollection');
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  
  
  const titleDiv = document.createElement('div');
  titleDiv.textContent = `Title: ${book.title}`;

  const authorDiv = document.createElement('div');
  authorDiv.textContent = `Author name: ${book.author}`;

  const numOfPagesDiv = document.createElement('div');
  numOfPagesDiv.textContent = `Number of pages: ${book.numOfPages}`;

  const readDiv = document.createElement('div');
  readDiv.textContent = `Read: ${book.read}`;

  bookCollectionDisplay.appendChild(bookDiv);
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(numOfPagesDiv);
  bookDiv.appendChild(readDiv);
}

// Every book object will inherit a 'has been read' function.
Book.prototype.hasBeenread = function(){
    if(this.read){
        this.read = false;
    }
    else{
        this.read = true;
    }
}

// displaying the form when 'add' is clicked.
const button = document.getElementById('addButt');
const form = document.getElementById('addBookForm');

button.addEventListener('click', function() {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

// Handling form submission.
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // getting form input.
    const bookNameInput = document.getElementById('bookNameInput');
    const authorInput = document.getElementById('authorInput');
    const pagesInput = document.getElementById('pagesInput');
    const completionInput = document.getElementById('completionInput');

    // minimal input validation.
    if (bookNameInput.value === '' || authorInput.value === '' || pagesInput.value === '') {
        alert('Please fill in all required fields.');
        return;
      } 
      
    if(pagesInput.value < 0){
      alert('Values smaller than zero are not allowed');
      return;
    }
  

    // Create a new book object using the input values
    const newBook = new Book(bookNameInput.value, authorInput.value, pagesInput.value, completionInput.value);
  
    // Push the new book object into the library array
    myLibrary.push(newBook);
    
    // will display the book object.
      displayBook(newBook);
    
    //Clears form inputs.
    bookNameInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    completionInput.value = 'Not read';
})