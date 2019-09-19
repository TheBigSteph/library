let myLibrary = [{title: '100 Años de Soledad', author: 'Gabriel García Márquez', numberOfPages: 471, alreadyRead: true}, 
{title: 'El Túnel', author: 'Ernesto Sábato', numberOfPages: 471, alreadyRead: true},
{title: 'El Coronel no tiene quien le escriba', author: 'Ernesto Sábato', numberOfPages: 471, alreadyRead: true}];

const BookAdd = document.getElementById('add-book')

function Book( title, author, numberOfPages, alreadyRead=false) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.alreadyRead = alreadyRead;
  }

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const createBook = new Book(title, author, pages);
  myLibrary.push(createBook);
  render();
}

function render(){
  
   let node = document.getElementById('library');
   myLibrary.forEach(book => {
    node.appendChild(addDiv(book.title));
    let newDiv = document.getElementById(book.title);
    AddInfo(newDiv,book)
   });
 
}

function AddInfo(div, book){
  div.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Title Book: ${book.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author}</h6>
    <p class="card-text">Pages: ${book.numberOfPages}</p>
    <p class="card-text">Read: ${book.alreadyRead}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
  
}

function addDiv(id= ""){
  let createDiv = document.createElement('div');
  createDiv.className = "col-sm-3";
  createDiv.id = id;
  return createDiv;
}



render();