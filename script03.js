const configuracao = { tema: "dark", notificacoes: true, idioma: "pt-BR" };
const filtro = "idioma";

// Extrai a propriedade guardada na variável 'filtro' e salva em 'valorExtraido'
const { [filtro]: valorExtraido } = configuracao;

console.log(valorExtraido); // "pt-BR"