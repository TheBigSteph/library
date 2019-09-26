let myLibrary = [{title: '100 Años de Soledad', author: 'Gabriel García Márquez', numberOfPages: 471, alreadyRead: 'Read'}, 
{title: 'El Túnel', author: 'Ernesto Sábato', numberOfPages: 471, alreadyRead: "Unread"},
{title: 'El Coronel no tiene quien le escriba', author: 'Ernesto Sábato', numberOfPages: 471, alreadyRead: "Read"}];

const BookAdd = document.getElementById('add-book');

function Book( title, author, numberOfPages, alreadyRead="Unread") {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.alreadyRead = alreadyRead;
  }

 

function setLocalStorage() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}


function addBookToLibrary() {
  resetDivbyId('library');
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;
  const createBook = new Book(title, author, pages, read);
  myLibrary.push(createBook);
// CODE Stephane
  // const title = $('#title').val();
  // const author = $('#author').val();
  // const pages = $('#pages').val();
  // const bk = new Book(title, author, pages, alreadyRead=false);
  // myLibrary.push(bk);
  // console.log(myLibrary);
  resetForm('form-book');
  render();
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index,1);
  resetDivbyId('library');
  render();
}
function editBookFromLibrary(index) {
  // myLibrary[index].alreadyRead == 'Unread' ? myLibrary[index].alreadyRead = 'Read': myLibrary[index].alreadyRead = 'Unread';
  let data = myLibrary[index];
  data.alreadyRead == 'Unread' ? data.alreadyRead = 'Read' : data.alreadyRead = 'Unread';
  // resetDivbyId('library');
  render();
}

function resetForm(nameId) {
  document.getElementById(nameId).reset();
}

function resetDivbyId(nameId) {
  let id = document.getElementById(nameId);
  id.innerHTML = '';
}

// function resetForm() {
//   document.getElementById('form-input').reset();
// }

function render(){
  setLocalStorage();
   let node = document.getElementById('library');
   let dataBookStorage = JSON.parse(localStorage.getItem('library'));
   console.log(dataBookStorage);
   dataBookStorage.forEach((book, index) => {
    node.appendChild(addDiv(book.title));
    let newDiv = document.getElementById(book.title);
    AddInfo(newDiv,book, index);
   });
 
}

function AddInfo(div, book, index){
  div.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Title Book: ${book.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author}</h6>
    <p class="card-text">Pages: ${book.numberOfPages}</p>
    <p class="card-text">${book.alreadyRead} <span><a href="#" class="card-link" onclick="editBookFromLibrary(${index});">Edit</a></span></p>
    <a href="#" class="card-link" onclick="removeBookFromLibrary(${index});">Delete Book</a>
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