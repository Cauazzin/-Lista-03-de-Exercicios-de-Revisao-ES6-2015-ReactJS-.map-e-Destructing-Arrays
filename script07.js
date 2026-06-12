const bancoDados = [
  { cod_prod: 101, desc_prod: "Mouse" },
  { cod_prod: 102, desc_prod: "Teclado" }
];

const produtosFormatados = bancoDados.map(({ cod_prod: id, desc_prod: nome }) => ({ id, nome }));

console.log(produtosFormatados); // [ { id: 101, nome: 'Mouse' }, { id: 102, nome: 'Teclado' } ]