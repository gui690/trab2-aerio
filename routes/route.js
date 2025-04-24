import express from 'express'
const router = express.Router();

import multer from 'multer';
var storage = multer.diskStorage({
    filename: function(req, file, cb){
    let nome = Date.now() + "-" + file.originalname
    cb(null, nome)
    },
    destination: function(req, file, cb){
    let path = "./public/arquivos"
    cb(null, path)
    }
    })
    var upload = multer({ storage })
    

import {
    home,
    abreedtcotacao,
    edtcotacao,
    abreaddcotacao,
    deletacotacao,
    addcotacao,
    listarcotacao,
    filtrarcotacao,
    //
    abreedtaeroporto,
    edtaeroporto,
    abreaddaeroporto,
    deletaaeroporto,
    addaeroporto,
    listaraeroporto,
    filtraraeroporto,
    //
    abreedtusuario,
    edtusuario,
    abreaddusuario,
    deletausuario,
    addusuario,
    listarusuario,
    filtrarusuario,
    //
    abreedtcompanhia,
    edtcompanhia,
    abreaddcompanhia,
    deletacompanhia,
    addcompanhia,
    listarcompanhia,
    filtrarcompanhia,
    
} from '../controllers/controller.js'
router.get('/', home)
//cotacao
//create do modelo cotacao (create)
router.get('/admin/cotacao/add', abreaddcotacao);
router.post('/admin/cotacao/add', addcotacao);
//rotas do modelo cotacao (read)
router.get('/admin/cotacao/lst', listarcotacao);
router.post('/admin/cotacao/lst', filtrarcotacao);
//rota do modelo cotacao (delete)
router.get('/admin/cotacao/del/:id', deletacotacao);
//rota do modelo cotacao (editar)
router.get('/admin/cotacao/edt/:id', abreedtcotacao);
router.post('/admin/cotacao/edt/:id', edtcotacao);

//aeroporto

//create do modelo aeroporto (create)
router.get('/admin/aeroporto/add', abreaddaeroporto);
router.post('/admin/aeroporto/add', upload.single('foto'),addaeroporto);
//rotas do modelo aeroporto (read)
router.get('/admin/aeroporto/lst', listaraeroporto);
router.post('/admin/aeroporto/lst', filtraraeroporto);
//rota do modelo aeroporto (delete)
router.get('/admin/aeroporto/del/:id', deletaaeroporto);
//rota do modelo aeroporto (editar)
router.get('/admin/aeroporto/edt/:id', abreedtaeroporto);
router.post('/admin/aeroporto/edt/:id', edtaeroporto);


//usuario

//create do modelo usuario (create)
router.get('/admin/usuario/add', abreaddusuario);
router.post('/admin/usuario/add', addusuario);
//rotas do modelo usuario (read)
router.get('/admin/usuario/lst', listarusuario);
router.post('/admin/usuario/lst', filtrarusuario);
//rota do modelo usuario (delete)
router.get('/admin/usuario/del/:id', deletausuario);
//rota do modelo usuario (editar)
router.get('/admin/usuario/edt/:id', abreedtusuario);
router.post('/admin/usuario/edt/:id', edtusuario);

//companhia

//create do modelo usuario (create)
router.get('/admin/companhia/add', abreaddcompanhia);
router.post('/admin/companhia/add', upload.single('foto'),addcompanhia);
//rotas do modelo companhia (read)
router.get('/admin/companhia/lst', listarcompanhia);
router.post('/admin/companhia/lst', filtrarcompanhia);
//rota do modelo companhia (delete);
router.get('/admin/companhia/del/:id', deletacompanhia);
//rota do modelo companhia (editar)
router.get('/admin/companhia/edt/:id', abreedtcompanhia);
router.post('/admin/companhia/edt/:id', edtcompanhia);


export default router