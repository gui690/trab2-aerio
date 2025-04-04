import conexao from '../config/conexao.js';


const Usuario = conexao.Schema({
    nome:{
        type:String,
        required:true
    } ,
    email:{
        type:String,
        required:true
    } ,
    cpf:{
        type:String,
        required:true
    } ,
    telefone:{
        type:Number,
    }
});
export default conexao.model("Usuario", Usuario);