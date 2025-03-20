import express from 'express'
const router = express.Router()

import {
    home,
    abreedtviagem,
    edtviagem,
    abreaddviagem,
    deletaviagem,
    addviagem,
    listarviagem,
    filtrarviagem,
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
    
    
} from '../controllers/controller.js'
router.get('/', home)
//viagem
//create do modelo viagem (create)
router.get('/admin/viagem/add', abreaddviagem)
router.post('/admin/viagem/add', addviagem)
//rotas do modelo viagem (read)
router.get('/admin/viagem/lst', listarviagem)
router.post('/admin/viagem/lst', filtrarviagem)
//rota do modelo viagem (delete)
router.get('/admin/viagem/del/:id', deletaviagem)
//rota do modelo viagem (editar)
router.get('/admin/viagem/edt/:id', abreedtviagem)
router.post('/admin/viagem/edt/:id', edtviagem)

//aeroporto

//create do modelo aeroporto (create)
router.get('/admin/aeroporto/add', abreaddaeroporto)
router.post('/admin/aeroporto/add', addaeroporto)
//rotas do modelo aeroporto (read)
router.get('/admin/aeroporto/lst', listaraeroporto)
router.post('/admin/aeroporto/lst', filtraraeroporto)
//rota do modelo aeroporto (delete)
router.get('/admin/aeroporto/del/:id', deletaaeroporto)
//rota do modelo aeroporto (editar)
router.get('/admin/aeroporto/edt/:id', abreedtaeroporto)
router.post('/admin/aeroporto/edt/:id', edtaeroporto)


//usuario

//create do modelo usuario (create)
router.get('/admin/usuario/add', abreaddusuario)
router.post('/admin/usuario/add', addusuario)
//rotas do modelo usuario (read)
router.get('/admin/usuario/lst', listarusuario)
router.post('/admin/usuario/lst', filtrarusuario)
//rota do modelo usuario (delete)
router.get('/admin/usuario/del/:id', deletausuario)
//rota do modelo usuario (editar)
router.get('/admin/usuario/edt/:id', abreedtusuario)
router.post('/admin/usuario/edt/:id', edtusuario)


export default router