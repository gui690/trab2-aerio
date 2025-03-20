
export async function home(req,res){
    res.render('admin/index')
}
//viagem
export async function abreaddviagem(req, res) {
    res.render('admin/viagem/add')
}
export async function addviagem(req, res) {
    res.redirect('/admin/viagem/add')
}
export async function listarviagem(req, res) {
    res.render('admin/viagem/lst', '');
}
export async function deletaviagem(req, res) {
   res.redirect('/admin/viagem/lst')
}
export async function abreedtviagem(req, res){
   
    res.render('admin/viagem/edt','')
}
export async function edtviagem(req, res){
    res.redirect('/admin/viagem/lst')
}
export async function filtrarviagem(req, res) {
    res.render('admin/viagem/lst', '');
}

//aeroporto

export async function abreaddaeroporto(req, res) {
    res.render('admin/aeroporto/add')
}
export async function addaeroporto(req, res) {
    res.redirect('/admin/aeroporto/add')
}
export async function listaraeroporto(req, res) {
    res.render('admin/aeroporto/lst', '');
}
export async function deletaaeroporto(req, res) {
   res.redirect('/admin/aeroporto/lst')
}
export async function abreedtaeroporto(req, res){
   
    res.render('admin/aeroporto/edt','')
}
export async function edtaeroporto(req, res){
    res.redirect('/admin/aeroporto/lst')
}
export async function filtraraeroporto(req, res) {
    res.render('admin/aeroporto/lst', '');
}


//usuario

export async function abreaddusuario(req, res) {
    res.render('admin/usuario/add')
}
export async function addusuario(req, res) {
    res.redirect('/admin/usuario/add')
}
export async function listarusuario(req, res) {
    res.render('admin/usuario/lst', '');
}
export async function deletausuario(req, res) {
   res.redirect('/admin/usuario/lst')
}
export async function abreedtusuario(req, res){
   
    res.render('admin/usuario/edt','')
}
export async function edtusuario(req, res){
    res.redirect('/admin/usuario/lst')
}
export async function filtrarusuario(req, res) {
    res.render('admin/usuario/lst', '');
}
