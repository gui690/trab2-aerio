import conexao from '../config/conexao.js';


const Cotacao = conexao.Schema({
    origem: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Aeroporto'
      },
      des: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Aeroporto'
      },
    dataIda:{
        type:Date,
        required:true
    } ,
    dataVolta:{
        type:Date,
        required:true
    } ,
    cliente:{
        type: conexao.Schema.Types.ObjectId,
        ref: 'Usuario'
    } ,
    contato:{
       type: conexao.Schema.Types.ObjectId,
        ref: 'Usuario'
    } ,
    status:{
        type:String,
        required:true
} ,
});
export default conexao.model("Cotacao", Cotacao);