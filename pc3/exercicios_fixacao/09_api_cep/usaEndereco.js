import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();

    try {
        await end.setCep("72015565");

        console.log("✅ Endereço carregado com sucesso:");
        console.log("CEP:", end.getCep());
        console.log("Logradouro:", end.getLogradouro());
        console.log("Complemento:", end.getComplemento());
        console.log("Bairro:", end.getBairro());
        console.log("Localidade:", end.getLocalidade());
        console.log("UF:", end.getUf());
        console.log("Estado:", end.getEstado());
        console.log("Regiao:", end.getRegiao());
        console.log("DDD:", end.getDDD());

        console.log("Endereço completo: ", end.mostrarEnderecoCompleto());

    } catch (erro) {
        console.error("❌ Erro ao definir CEP:", erro.message);
    }
}

usaEndereco();