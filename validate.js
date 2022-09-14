
let regex = /[a-zA-Zа-яА-ЯёЁ\d.,;:&()*%#\s-]/;
let validateMessege = document.querySelector('.validate');
let titleInput = document.querySelector('.title-input');
let noteInput = document.querySelector('.note-input');

let validateMessegeEdit = document.querySelector('.validate-edit');
let titleInputEdit = document.querySelector('.title-input-edit')
let noteInputEdit = document.querySelector('.note-input-edit');


export function ValidateSubmit(){

    if (!(regex.test(titleInput.value) && regex.test(noteInput.value))){

        validateMessege.innerHTML = 'Not Valid fields';
        validateMessege.classList.add('is-invalid')
        return true;
    } else{
        validateMessege.classList.remove('is-invalid')
        validateMessege.innerHTML = '';
        return false;

    }
}   

export function ValidateEdit(){

    if (!(regex.test(titleInputEdit.value) && regex.test(noteInputEdit.value))){

        validateMessegeEdit.innerHTML = 'Not Valid fields';
        validateMessegeEdit.classList.add('is-invalid')
        return true;
    } else{
        validateMessegeEdit.classList.remove('is-invalid')
        validateMessegeEdit.innerHTML = '';
        return false;

    }
}   