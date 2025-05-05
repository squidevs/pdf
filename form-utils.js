// form-utils.js

// Utilidade para formatar data por extenso
export function formatarDataExtenso(data = new Date()) {
    return `${data.getDate().toString().padStart(2, '0')} de ${data.toLocaleString('pt-BR', { month: 'long' })} de ${data.getFullYear()}`;
  }
  
  // Função para calcular valor total a partir de quantidade e unitário
  export function calcularTotal(quantidade, valorUnitario) {
    const q = parseFloat(quantidade) || 0;
    const v = parseFloat(valorUnitario) || 0;
    return (q * v).toFixed(2);
  }
  
  // Leitor de imagens como base64
  export function lerImagensComoBase64(input) {
    return new Promise((resolve) => {
      const files = input?.files;
      if (!files || files.length === 0) return resolve([]);
      let lidas = 0;
      const resultados = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
          resultados[i] = e.target.result;
          lidas++;
          if (lidas === files.length) resolve(resultados);
        };
        reader.readAsDataURL(files[i]);
      }
    });
  }
  
  // Função para detectar tipo de formulário atual (orcamento ou os)
  export function detectarTipoFormulario(form) {
    if (form.querySelector('[name="descricao"]')) return 'Orçamento';
    if (form.querySelector('[name="dataEntrega"]')) return 'Ordem de Serviço';
    return 'Desconhecido';
  }
  