const configuracaoBruta = { apiToken: "secret_xyz", timeout: 5000, versao: "2.1", cache: true };

// Remove 'apiToken' e 'timeout'. O restante vai para o objeto 'configFinal'
const { apiToken, timeout, ...configFinal } = configuracaoBruta;

console.log(configFinal); // { versao: '2.1', cache: true }