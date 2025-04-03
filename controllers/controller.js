import Companhia from "../models/companhia.js";
import Aeroporto from "../models/aeroporto.js";
import Usuario from "../models/usuario.js";
import Cotacao from "../models/cotacao.js";
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
  res.redirect("/admin/companhia/lst");
}
export async function abreedtcompanhia(req, res) {
  res.render("admin/companhia/edt", "");
}
export async function edtcompanhia(req, res) {
  res.redirect("/admin/companhia/lst");
}
export async function filtrarcompanhia(req, res) {
  res.render("admin/companhia/lst", "");
}

//cotação

export async function abreaddcotacao(req, res) {
  res.render("admin/cotacao/add");
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
  res.redirect("/admin/cotacao/lst");
}
export async function abreedtcotacao(req, res) {
  res.render("admin/cotacao/edt", "");
}
export async function edtcotacao(req, res) {
  res.redirect("/admin/cotacao/lst");
}
export async function filtrarcotacao(req, res) {
  res.render("admin/cotacao/lst", "");
}

//aeroporto

export async function abreaddaeroporto(req, res) {
  res.render("admin/aeroporto/add");
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
  res.redirect("/admin/aeroporto/lst");
}
export async function abreedtaeroporto(req, res) {
  res.render("admin/aeroporto/edt", "");
}
export async function edtaeroporto(req, res) {
  res.redirect("/admin/aeroporto/lst");
}
export async function filtraraeroporto(req, res) {
  res.render("admin/aeroporto/lst", "");
}

//usuario

export async function abreaddusuario(req, res) {
  res.render("admin/usuario/add");
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
  res.redirect("/admin/usuario/lst");
}
export async function abreedtusuario(req, res) {
  res.render("admin/usuario/edt", "");
}
export async function edtusuario(req, res) {
  res.redirect("/admin/usuario/lst");
}
export async function filtrarusuario(req, res) {
  res.render("admin/usuario/lst", "");
}
