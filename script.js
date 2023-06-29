function generateScript() {
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const phone = document.getElementById('phone').value;
    const plan = document.getElementById('plan').value;
    const router = document.getElementById('router').value;
    const issue = document.getElementById('issue').value.trim();
    const description = document.getElementById('description').value;
    const specificTime = document.getElementById('specificTime').value;
    const procedures = document.getElementById('procedures').value;
  
    const problemTitle = document.getElementById('problem-title');
    const scriptContent = document.getElementById('script-content');
    const scriptOutput = document.getElementById('script-output');
  
    if (name && cpf && phone && plan && router && issue && description && procedures) {
      problemTitle.textContent = issue;
      scriptContent.value = `Nome do Assinante: ${name}
      CPF: ${cpf}
      Telefone: ${phone}
      Plano Atual: ${plan}
      Roteador (2 ou 4 antenas): ${router}
  
      Problema: ${issue}
      Descrição do Problema: ${description}
      Ocorre em algum horário específico? ${specificTime ? specificTime : 'Não'}
      Procedimentos Realizados: ${procedures}`;
  
      scriptOutput.style.display = 'block';
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
  
  function copyToClipboard() {
    const scriptContent = document.getElementById('script-content');
    scriptContent.select();
    scriptContent.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    alert('Script copiado para a área de transferência!');
  }
  
  function resetForm() {
    document.getElementById('script-form').reset();
  }

  function formatarCPF() {
    let input = document.getElementById("cpf");
    let cpf = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cpf.length === 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // Aplica formatação
    }

    input.value = cpf;
}

function formatarTelefone() {
  let input = document.getElementById("phone");
  let telefone = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (telefone.length === 11) {
      telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Aplica formatação
  }

  input.value = telefone;
}

  var voltarButton = document.getElementById("voltarButton");
  voltarButton.addEventListener("click", function() {
    window.location.href = "home.html";
  });