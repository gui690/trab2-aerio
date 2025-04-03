import conexao from '../config/conexao.js';


const Companhia = conexao.Schema({
    nome:{
        type:String,
        required:true
    } ,
    pais_o:{
        type:String,
        required:true
    },
    foto:{
        type:String, 
        
    }
});
export default conexao.model("Companhia", Companhia)