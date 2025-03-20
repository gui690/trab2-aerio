import express from 'express'
const app = express();

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//liberar acesso a pasta public
import { fileURLToPath} from 'url';
import {dirname} from 'path';
import routes from "./routes/route.js"

//converter o caminho do arquivo atual

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use (express.static(__dirname + '/public'));

app.use(routes)

app.listen(3000)