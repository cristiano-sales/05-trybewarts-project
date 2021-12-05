const login = document.getElementById('input-email-cabecalho');
const senha = document.getElementById('input-senha');
const button = document.getElementById('btn1');
const agreement = document.getElementById 

function checkLogin() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function listeners() {
  button.addEventListener('click', checkLogin);
}
window.onload = function init() {
  listeners();
};
