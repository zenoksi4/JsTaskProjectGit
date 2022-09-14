import {appendNotes} from './addNote.js';
import {noteList} from './app.js';
import { ValidateEdit} from './validate.js';

let noteFormEdit = document.querySelector('.note-form-edit');
let cansel = document.querySelector('.cansel-btn');

export function getEditButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.edit-item'));

    noteDeleteButtons.forEach(button => {

        let noteId = button.parentNode.parentNode.firstChild.innerText; 
        let noteTitle = button.parentNode.parentNode.firstChild.nextSibling.innerText;
        let notecategory = button.parentNode.previousSibling.previousSibling.previousSibling.innerText;
        let noteNote = button.parentNode.previousSibling.previousSibling.innerText;
        let notedates = button.parentNode.previousSibling.innerText;

        button.addEventListener('click', () => {
            editValueForm(noteTitle, notecategory, noteNote, notedates, noteId, button);
        }, {once: true});

    })
}  

function editValueForm(noteTitle, notecategory, noteNote, notedates, noteId){

    let title = document.querySelector('.title-input-edit');
    title.value = noteTitle;

    let category = document.querySelector('.category-input-edit');
    category.value = notecategory;

    let note = document.querySelector('.note-input-edit');
    note.value = noteNote;

    let date = document.querySelector('.date-input-edit');
    date.value = ''
    
    noteFormEdit.addEventListener('submit', (e) => {
        submitFormEdit(notedates,noteId);
    
    }, {once: true});
}

export function submitFormEdit(notedates,noteId) {

    let editNoteList = {};

    let title = document.querySelector('.title-input-edit');
    let category = document.querySelector('.category-input-edit');
    let note = document.querySelector('.note-input-edit');
    let date = document.querySelector('.date-input-edit');

    try {
        if(ValidateEdit()){
            throw new Error('fields cannot be empty')
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
    } catch(err) {
        return
    }
    
    editNote(noteId, noteList, editNoteList);
    cansel.click();
}

function editNote(noteId, noteList, editNoteList){
    
    for(let i = 0; i < noteList.length; i++){
        if(i == noteId - 1) {
            noteList.splice(i, 1, editNoteList);
        }
    }
    appendNotes(noteList);
}