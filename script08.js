const clientes = [
  { nome: "Marcos", telefone: "98888-1111" },
  { nome: "Sandra" } // Sem telefone cadastrado
];

const clientesVerificados = clientes.map(({ nome, telefone = "Não informado" }) => ({
  nome,
  telefone
}));

console.log(clientesVerificados);
// [ { nome: 'Marcos', telefone: '98888-1111' }, { nome: 'Sandra', telefone: 'Não informado' } ]