// Books are stored here.
let myLibrary = [];

// Just a book object constructor.
function Book(author, title, numOfPages, read){
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = Boolean(read);
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

const button = document.getElementById('addButt');
const form = document.getElementById('addBookForm');

button.addEventListener('click', function() {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});