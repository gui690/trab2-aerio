import conexao from '../config/conexao.js';


const Cotacao = conexao.Schema({
    origem:{
        type:conexao.Types.Objectld,ref:"Aeroporto",
        required:false
    } ,
    Des:{
        type:conexao.Types.Objectld,ref:"Aeroporto",
        required:false
    } ,
    dataIda:{
        type:Date,
        required:true
    } ,
    dataVolta:{
        type:Date,
        required:true
    } ,
    nome:{
        type:String,
        required:true
    } ,
    contato:{
        type:String,
        required:true
    } ,
    status:{
        type:String,
        required:true
} ,
});
export default conexao.model("Cotacao", Cotacao);