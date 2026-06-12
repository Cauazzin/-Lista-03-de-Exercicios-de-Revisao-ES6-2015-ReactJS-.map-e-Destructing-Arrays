const estoque = [
  { produto: "Cadeira", preco: 150, quantidade: 4 },
  { produto: "Mesa", preco: 400, quantidade: 1 }
];

const estoqueCalculado = estoque.map(item => ({
  ...item,
  totalItem: item.preco * item.quantidade
}));

console.log(estoqueCalculado);
// [ { produto: 'Cadeira', preco: 150, quantidade: 4, totalItem: 600 }, ... ]