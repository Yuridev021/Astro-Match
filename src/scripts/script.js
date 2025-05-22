// Máscara para o campo CPF
document.getElementById('cpf').addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length <= 3) {
    e.target.value = value;
  } else if (value.length <= 6) {
    e.target.value = value.replace(/(\d{3})(\d{1,})/, '$1.$2');
  } else if (value.length <= 9) {
    e.target.value = value.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
  } else {
    e.target.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
  }
});

// Função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }
  return true;
}

// Função para validar o formulário
function validarFormulario(event) {
  event.preventDefault(); // <- evita envio do formulário

  const cpfInput = document.getElementById('cpf');
  const cpf = cpfInput.value.replace(/\D/g, '');
  const cpfError = document.getElementById('cpfError');

  if (!validarCPF(cpf)) {
    cpfError.textContent = 'CPF inválido.';
    cpfInput.focus();
    return false;
  }

  cpfError.textContent = '';
  window.location.href = 'login.html'; // Redireciona imediatamente
  return false;
}

  document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length <= 2) {
      e.target.value = `(${value}`;
    } else if (value.length <= 6) {
      e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length <= 10) {
      e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else {
      e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
  });
  
  document.getElementById('temaBtn').addEventListener('click', function () {
    document.body.classList.toggle('tema-claro');
    this.textContent = document.body.classList.contains('tema-claro') ? '🌙' : '☀️';
  });
  
  
  document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // impede envio automático
  
    if (validarFormulario()) {
      // Aqui você poderia usar fetch para enviar via AJAX, mas se for direto:
      this.submit(); // envia normalmente para o backend
  
      // redireciona depois de um pequeno delay (opcional)
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000); // ou só faz o redirecionamento no backend
    }
  });
  
  document.getElementById('cadastroForm').addEventListener('submit', validarFormulario);

