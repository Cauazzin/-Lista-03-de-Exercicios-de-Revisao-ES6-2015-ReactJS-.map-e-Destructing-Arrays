const ids = [1, 2, 3];
const nomes = ["Ana", "Bruno", "Carlos"];

const usuariosAgrupados = ids.map((id, index) => ({ id, nome: nomes[index] }));

console.log(usuariosAgrupados);
// [ { id: 1, nome: 'Ana' }, { id: 2, nome: 'Bruno' }, { id: 3, nome: 'Carlos' } ]