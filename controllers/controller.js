import Companhia from "../models/companhia.js";
import Aeroporto from "../models/aeroporto.js";
import Usuario from "../models/usuario.js";
import Cotacao from "../models/cotacao.js";
import companhia from "../models/companhia.js";
export async function home(req, res) {
  res.render("admin/index");
}
//time
export async function abreaddcompanhia(req, res) {
  res.render("admin/companhia/add");
}
export async function addcompanhia(req, res) {
  await Companhia.create({
    nome: req.body.nome,
    pais_o: req.body.pais_o,
    foto: req.body.foto,
  });
  res.redirect("/admin/companhia/add");
}
export async function listarcompanhia(req, res) {
  const resultado = await Companhia.find({}).catch(function (err) {
    console.log(err);
  });
  res.render("admin/companhia/lst", { Companhias: resultado });
}
export async function deletacompanhia(req, res) {
  await Companhia.findByIdAndDelete(req.params.id)

  res.redirect("/admin/companhia/lst");
}
export async function abreedtcompanhia(req, res) {
  const resultado = await Companhia.findById(req.params.id)

  res.render("admin/companhia/edt", {Companhia:resultado});
}
export async function edtcompanhia(req, res) {
  await Companhia.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/admin/companhia/lst");
}
export async function filtrarcompanhia(req, res) {
  const resposta = await Companhia.find({nome:new RegExp(req.body.pesquisar,"i")})

  res.render("admin/companhia/lst", {Companhia:resultado});
}

//cotação

export async function abreaddcotacao(req, res) {
  const resultado = await Cotacao.find({}).catch(function(err){console.log(err)});
  res.render("admin/cotacao/add",{Cotacao:resultado});
}
export async function addcotacao(req, res) {
  await Cotacao.create({
    origem: req.body.origem,
    des: req.body.des,
    dataIda: req.body.dataIda,
    dataVolta: req.body.dataVolta,
    nome: req.body.nome,
    contato: req.body.contato,
    status: req.body.status,
  });
  res.redirect("/admin/cotacao/add");
}
export async function listarcotacao(req, res) {
  const resultado = await Cotacao.find({}).catch(function (err) {
    console.log(err);
  });
  res.render("admin/cotacao/lst", { Cotacaos: resultado });
}
export async function deletacotacao(req, res) {
  await Cotacao.findByIdAndDelete(req.params.id)
  res.redirect("/admin/cotacao/lst");
}
export async function abreedtcotacao(req, res) {
  const resultado = await Cotacao.findById(req.params.id)
  res.render("admin/cotacao/edt", {Cotacao: resultado});
}
export async function edtcotacao(req, res) {
  await Cotacao.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/admin/cotacao/lst");
}
export async function filtrarcotacao(req, res) {
  const resposta = await Cotacao.find({nome:new RegExp(req.body.pesquisar,"i")})
  res.render("admin/cotacao/lst", {Cotacao: resposta});
}


//aeroporto

export async function abreaddaeroporto(req, res) {
  const resultado = await Aeroporto.find({}).catch(function(err){console.log(err)});
  res.render("admin/aeroporto/add",{Aeroporto: resultado});
}
export async function addaeroporto(req, res) {
  await Aeroporto.create({
    nome: req.body.nome,
    localizacao: req.body.localizacao,
    dataIda: req.body.dataIda,
  });
  res.redirect("/admin/aeroporto/add");
}
export async function listaraeroporto(req, res) {
  const resultado = await Aeroporto.find({}).catch(function (err) {
    console.log(err);
  });
  res.render("admin/aeroporto/lst", { Aeroportos: resultado });
}
export async function deletaaeroporto(req, res) {
  await Aeroporto.findByIdAndDelete(req.params.id)
  res.redirect("/admin/aeroporto/lst");
}
export async function abreedtaeroporto(req, res) {
  const resultado = await Aeroporto.findById(req.params.id)
  res.render("admin/aeroporto/edt", {Aeroporto:resultado});
}
export async function edtaeroporto(req, res) {
  await Aeroporto.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/admin/aeroporto/lst");
}
export async function filtraraeroporto(req, res) {
  const resposta = await Aeroporto.find({nome:new RegExp(req.body.pesquisar,"i")})
  res.render("admin/aeroporto/lst", {Aeroporto: resposta});
}

//usuario

export async function abreaddusuario(req, res) {
  const resultado = await Usuario.find({}).catch(function(err){console.log(err)});
  res.render("admin/usuario/add", {Usuario: resultado});
}
export async function addusuario(req, res) {
  await Usuario.create({
    nome: req.body.nome,
    email: req.body.email,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
  });
  res.redirect("/admin/usuario/add");
}
export async function listarusuario(req, res) {
  const resultado = await Usuario.find({}).catch(function (err) {
    console.log(err);
  });
  res.render("admin/usuario/lst", { Usuarios: resultado });
}
export async function deletausuario(req, res) {
  await Usuario.findByIdAndDelete(req.params.id)
  res.redirect("/admin/usuario/lst");
}
export async function abreedtusuario(req, res) {
  const resultado = await Usuario.findById(req.params.id)
  res.render("admin/usuario/edt", {Usuario:resultado});
}
export async function edtusuario(req, res) {
  await Usuario.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/admin/usuario/lst");
}
export async function filtrarusuario(req, res) {
  const resposta = await Usuario.find({nome:new RegExp(req.body.pesquisar,"i")})
  res.render("admin/usuario/lst", {Usuario:resposta});
}
