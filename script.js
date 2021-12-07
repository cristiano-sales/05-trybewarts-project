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
$(function() {
  function limitaCaracteres(textarea, counter, limit) {
      $('.'+counter).text(limit+' restantes');
      let left;
      $('.'+textarea).on('keyup', function(e){
          let qtdCaracteres = $(this).val().length;
          left = limit-qtdCaracteres;
          if(left <= 0) {
              left = 0;
              let textoAtual = $(this).val();
              let novoTexto = '';
              for(let i = 0; i < limit; i += 1) {
                  novoTexto += textoAtual[i];
              }
              $(this).val(novoTexto);
          }
          $('.'+counter).text(left+' restantes');
      })
  }
limitaCaracteres('text1', 'count1', 500);
});
function listeners() {
  button.addEventListener('click', checkLogin);
  agreement.addEventListener('click', checkedBox);
}
window.onload = function init() {
  listeners();
};
