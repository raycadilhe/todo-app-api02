class usuario {
    static configureUsuarios(app) {
        app.get('/pessoas', (req, res) =>
            res.send('Rota ativada com GET e recurso Pessoas: Valores de Pessoas devem ser retornados')
        );

    }
}

export default usuario;