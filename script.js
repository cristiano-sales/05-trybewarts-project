const login = document.getElementById('input-email-cabecalho');
const senha = document.getElementById('input-senha');
const button = document.getElementById('btn1');
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
submitButton.disabled = true;

function checkLogin() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
function checkedBox() {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
function listeners() {
  button.addEventListener('click', checkLogin);
  agreement.addEventListener('click', checkedBox);
}
window.onload = function init() {
  listeners();
};
