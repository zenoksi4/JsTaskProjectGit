import {addNote, appendNotes} from './addNote.js';


let noteForm = document.querySelector('.note-form');
let cansel = document.querySelector('.cansel-btn');

export let noteList = [{title: 'note1', category: 'Task',
    note: 'note text1',
    date: new Date(2022, 8, 1)},

    {title: 'note2', category: 'Random Thought',
    note: 'note text2',
    date: new Date(2022, 8, 2)},

    {title: 'note3', category: 'Idea',
    note: 'note text3',
    date: new Date(2022, 7, 13)},

    {title: 'note4', category: 'Idea',
    note: 'note text4',
    date: new Date(2022, 9, 22)},

    {title: 'note5', category: 'Random Thought',
    note: 'note text5',
    date: new Date(2022, 8, 11)},
    
    {title: 'note6', category: 'Task',
    note: 'note text6',
    date: new Date(2022, 8, 19)},

    {title: 'note7', category: 'Idea',
    note: 'note text7',
    date: new Date(2022, 8, 7)},
];

appendNotes(noteList);

noteForm.addEventListener('submit', (e) => {
    addNote(e, noteList)
});


cansel.click()

