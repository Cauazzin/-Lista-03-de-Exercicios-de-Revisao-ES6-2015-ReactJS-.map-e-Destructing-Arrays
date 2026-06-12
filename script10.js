class Usuario {
  constructor(id, nome, permissao) {
    this.id = id;
    this.nome = nome;
    this.permissao = permissao;
  }
}

class Relatorio {
  gerar(usuarios) {
    // Desestrutura id, nome e renomeia permissao para role
    return usuarios.map(({ id, nome, permissao: role }) => `Log [${id}]: ${nome} logou como ${role}.`);
  }
}

// Execução:
const user1 = new Usuario(55, "Roberto", "Admin");
const user2 = new Usuario(89, "Clara", "Suporte");

const sistemaRelatorio = new Relatorio();
console.log(sistemaRelatorio.gerar([user1, user2]));
// [ 'Log [55]: Roberto logou como Admin.', 'Log [89]: Clara logou como Suporte.' ]