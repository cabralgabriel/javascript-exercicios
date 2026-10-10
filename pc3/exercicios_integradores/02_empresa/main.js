import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
import PJ from './pessoas/PJ.mjs';

const pj1 = new PJ();
pj1.setNome("Sabão Solutions");
pj1.setEmail("contato@ssolutions.com");
pj1.setCNPJ("12.345.678/0001-90");
pj1.setRazaoSocial("Sabão Solutions Ltda");

const pj2 = new PJ();
pj2.setNome("Ernesto varejo");
pj2.setEmail("contato@ernesto.com");
pj2.setCNPJ("98765432000110");
pj2.setRazaoSocial("Ernesto Varejo S.A.");

const data = new Date();

const ieClass = new IEclss();
ieClass.setNumero("111.222.333");
ieClass.setEstado("SP");
ieClass.setDataRegistro(data);

const ieFunc = IEfunc();
ieFunc.setNumero("444.555.666");
ieFunc.setEstado("RJ");
ieFunc.setDataRegistro(data);

IEjson.setNumero("777.888.999");
IEjson.setEstado("DF");
IEjson.setDataRegistro(data);

console.log("Teste com objeto invalido:", ieClass.setPJ({ nome: "Inválido" }));
console.log("Teste com PJ valido:", ieClass.setPJ(pj1));

ieFunc.setPJ(pj2);
IEjson.setPJ(pj1);

function mostrarIE(ie) {
    const pj = ie.getPJ();

    console.log("=== Pessoa Jurídica ===");
    console.log("Nome:", pj.getNome());
    console.log("E-mail:", pj.getEmail());
    console.log("CNPJ:", pj.getCNPJ());
    console.log("Razão Social:", pj.getRazaoSocial());

    console.log("\n=== Inscrição Estadual ===");
    console.log("Número:", ie.getNumero());
    console.log("Estado:", ie.getEstado());
    console.log("Data de Registro:", ie.getDataRegistro().toLocaleString('pt-BR'));
    console.log("Pessoa Jurídica:", pj.getRazaoSocial());
}


mostrarIE(ieClass);
mostrarIE(ieFunc);
mostrarIE(IEjson);