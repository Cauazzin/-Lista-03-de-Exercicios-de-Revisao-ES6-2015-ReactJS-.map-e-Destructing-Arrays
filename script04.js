const alunos = [
  { nome: "Julia", notas: [10, 8, 9] },
  { nome: "Pedro", notas: [7, 6, 8] }
];

const boletim = alunos.map(({ nome, notas }) => ({
  nome,
  media: notas.reduce((acc, nota) => acc + nota, 0) / notas.length
}));

console.log(boletim);
// [ { nome: 'Julia', media: 9 }, { nome: 'Pedro', media: 7 } ]