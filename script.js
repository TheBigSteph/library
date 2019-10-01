let myLibrary = JSON.parse(localStorage.getItem('library')) || [{title: '100 Años de Soledad', author: 'Gabriel García Márquez', numberOfPages: 471, alreadyRead: 'Read'}, 
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

  resetForm('form-book');
  $('#bookModal').modal('hide')
  render();
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index,1);
  resetDivbyId('library');
  render();
}
function editBookFromLibrary(index) {
  let data = myLibrary[index];
  data.alreadyRead == 'Unread' ? data.alreadyRead = 'Read' : data.alreadyRead = 'Unread';
  render();
}

function resetForm(nameId) {
  document.getElementById(nameId).reset();
}

function resetDivbyId(nameId) {
  let id = document.getElementById(nameId);
  id.innerHTML = '';
}



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
  div.innerHTML = `
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h3 class="card-title text-primary"> ${book.title}</h3>
        <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author}</h6>
        <p class="card-text">Pages: ${book.numberOfPages}</p>
        <p class="card-text">${book.alreadyRead}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" onclick="editBookFromLibrary(${index});" class="btn btn-sm btn-primary">Edit book</button>
            <button type="button" onclick="removeBookFromLibrary(${index});" class="btn btn-sm btn-danger">Delete book</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}



function addDiv(id= ""){
  let createDiv = document.createElement('div');
  createDiv.className = "col-md-4";
  createDiv.id = id;
  return createDiv;
}


render();