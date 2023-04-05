class tarefas {
    static configureTarefas(app) {
        app.get('/tarefas', (req, res) =>
            res.send('Rota ativada com GET e recurso Tarefas: Valores de Tarefas devem ser retornados')
        );
    }
}

export default tarefas;
