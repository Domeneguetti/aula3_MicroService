const repository = require('../repositories/produto-repository')

exports.get = async (req, res, next) => {
    const data = await repository.get();
    return res.status(200).send(data)
}

exports.post = async(req, res) => {
    await repository.create(req.body)
    return res.status(201).send({message: 'Produto criado com sucesso!'})
}

exports.put = async (req, res) => {
    const id = req.params.id
    await repository.update(id, req.body)
    return res.status(204).send({message: 'Produto atualizado com sucesso!'})
}