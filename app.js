import express from 'express';
import tarefas from './src/controllers/usuariocontroller.js'; 
import usuario from './src/controllers/tarefacontroller.js'; 

const port = 3000;
const app = express();

app.get('/', (req, res) =>
res.send('Rota ativada com GET e recurso Página principal: Valores de Página principal devem ser retornados')
);
 
usuario.configureUsuarios(app);
tarefas.configureTarefas(app);

app.listen(`${port}`, () =>
console.log(`Servidor iniciado na porta ${port}`)
);

export default app;