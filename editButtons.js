import {appendNotes} from './addNote.js';
import {noteList} from './app.js';

let noteFormEdit = document.querySelector('.note-form-edit');
let cansel = document.querySelector('.cansel-btn');

export function getEditButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.edit-item'));

    noteDeleteButtons.forEach(button => {

        let noteTitle = button.parentNode.parentNode.firstChild.innerText;
        let notecategory = button.parentNode.parentNode.firstChild.nextSibling.nextSibling.innerText;
        let noteNote = button.parentNode.previousSibling.previousSibling.innerText;
        let notedates = button.parentNode.previousSibling.innerText;
        
        button.addEventListener('click', () => {
            editValueForm(noteTitle, notecategory, noteNote, notedates);
        })
    })
}   

function editValueForm(noteTitle, notecategory, noteNote, notedates){

    let title = document.querySelector('.title-input-edit');
    title.value = noteTitle;

    let category = document.querySelector('.category-input-edit');
    category.value = notecategory;

    let note = document.querySelector('.note-input-edit');
    note.value = noteNote;

    let date = document.querySelector('.date-input-edit');
    date.value = ''
    
    noteFormEdit.addEventListener('submit', (e) => {
        submitFormEdit(e, notedates)

    });


}
function submitFormEdit(e, notedates) {
    e.preventDefault();
    let editNoteList = {};

    let title = document.querySelector('.title-input-edit');
    let category = document.querySelector('.category-input-edit');
    let note = document.querySelector('.note-input-edit');
    let date = document.querySelector('.date-input-edit');


    if(title.value == '' || note.value == ''){
        return alert('Будь ласка введіть щось у поля')
    }else{

        if(notedates.length > 10){
            notedates = notedates.split(',')
        }

        editNoteList.title = title.value;
        editNoteList.category = category.value;
        editNoteList.note = note.value;

        date.value ? 
            Array.isArray(notedates) ? 
                editNoteList.date = [new Date(date.value), notedates[0]] :
                editNoteList.date = [new Date(date.value), notedates]

            : editNoteList.date = notedates;
        notedates = editNoteList.date
    }

    editNote(title.value, noteList, editNoteList);

    cansel.click();

}



function editNote(title, noteList, editNoteList){
    
    for(let i = 0; i < noteList.length; i++){
        if(noteList[i].title == title) {
            noteList.splice(i, 1, editNoteList);
        }
    }
    appendNotes(noteList);
}