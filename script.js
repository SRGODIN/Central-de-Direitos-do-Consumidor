// Função para mostrar mensagem introdutória quando não há resultados
function mostrarIntroOuResultados(resultados) {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = "";
  
  if (resultados.length === 0) {
    const intro = document.createElement("div");
    intro.className = "intro-message";
    intro.innerHTML = `
      <i class="fas fa-search"></i>
      <p>Nenhum resultado encontrado. Tente outra pergunta ou termo.</p>
    `;
    conteudo.appendChild(intro);
    return;
  }
  
  resultados.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.pergunta}</h3><p>${p.resposta}</p>`;
    conteudo.appendChild(div);
  });
}

// Evento de busca com debounce para melhor performance
let timeoutId;
document.getElementById("busca").addEventListener("input", function() {
  clearTimeout(timeoutId);
  
  const termo = this.value.toLowerCase().trim();
  
  // Se o campo estiver vazio, mostrar mensagem introdutória
  if (termo === "") {
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = `
      <div class="intro-message">
        <i class="fas fa-info-circle"></i>
        <p>Digite uma dúvida acima para encontrar informações sobre seus direitos como consumidor.</p>
      </div>
    `;
    return;
  }
  
  // Debounce para evitar muitas buscas durante digitação rápida
  timeoutId = setTimeout(() => {
    const resultados = perguntasRespostas.filter(p =>
      p.pergunta.toLowerCase().includes(termo) || 
      p.resposta.toLowerCase().includes(termo)
    );
    
    mostrarIntroOuResultados(resultados);
  }, 300);
});

// Função para gerar modelo de reclamação
function gerarModelo() { 
  const tipo = document.getElementById("tipoReclamacao").value; 
  const modelo = modelosReclamacao[tipo]; 
  const modeloGerado = document.getElementById("modeloGerado");
  
  if (modelo) {
    modeloGerado.innerText = modelo;
    
    // Destacar campos que precisam ser preenchidos
    const textoComDestaque = modeloGerado.innerText.replace(
      /__([^_]+)__/g, 
      '<span style="background-color: #fffacd; padding: 0 3px; border-radius: 3px;">__$1__</span>'
    );
    
    // Verificar se o modelo é de reembolso para adicionar o aviso
    if (tipo === "reembolso") {
      const linhas = modeloGerado.innerText.split('\n');
      const ultimaLinha = "ATENÇÃO: Este modelo é aplicável apenas para compras realizadas dentro dos últimos 7 dias corridos, conforme previsto no Código de Defesa do Consumidor.";
      
      modeloGerado.innerHTML = textoComDestaque + `
        <div style="color: red; font-weight: bold; margin-top: 15px; padding: 10px; border: 1px solid red; border-radius: 5px; background-color: rgba(255,0,0,0.05);">
          ${ultimaLinha}
        </div>
      `;
    } else {
      modeloGerado.innerHTML = textoComDestaque;
    }
    
    // Rolar até o modelo gerado
    modeloGerado.scrollIntoView({ behavior: 'smooth' });
  } else {
    modeloGerado.innerText = "Modelo não encontrado.";
  }
}

// Inicializar a página com a mensagem introdutória
document.addEventListener("DOMContentLoaded", function() {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = `
    <div class="intro-message">
      <i class="fas fa-info-circle"></i>
      <p>Digite uma dúvida acima para encontrar informações sobre seus direitos como consumidor.</p>
    </div>
  `;
});
  