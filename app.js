import {addNote, appendNotes} from './addNote.js';


let modal = document.querySelector('.modal');
let noteForm = document.querySelector('.note-form');
let noteFormEdit = document.querySelector('.note-form-edit');
let cansel = document.querySelector('.cansel-btn');



export let noteList = [{title: 'note1', category: 'Task',
    note: 'note text1',
    date: new Date(2022, 8, 1)},

    {title: 'note2', category: 'Random Thought',
    note: 'note text2',
    date: new Date(2022, 8, 2)},

    {title: 'note3', category: 'Idea',
    note: 'note text3',
    date: new Date(2022, 8, 3)},

    {title: 'note4', category: 'Idea',
    note: 'note text3',
    date: new Date(2022, 8, 3)}
];


appendNotes(noteList);

noteForm.addEventListener('submit', (e) => {
    addNote(e, noteList)
});

cansel.click()

