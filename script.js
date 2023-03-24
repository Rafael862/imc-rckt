const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')
const alertError = document.querySelector('.alert-error')

modalBtnClose.addEventListener('click', close)

form.onsubmit = (event) => { 
    const weight = inputWeight.value
    const height = inputHeight.value
    const result = IMC(weight, height)
    if (result == 'NaN'){
        error()
    } else {
        modalMessage.innerHTML = `Seu IMC é de ${result}`
        modalWrapper.classList.add('open')
        alertError.classList.remove('open')
    }
}

function close (){
    modalWrapper.classList.remove('open')
}

function IMC(weight, height){
        return (weight / ((height / 100) ** 2)).toFixed(2)
}

function error(){
        alertError.classList.add('open')
}  