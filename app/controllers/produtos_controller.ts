// import type { HttpContext } from '@adonisjs/core/http'

import Produto from "#models/produto"

export default class ProdutosController {

    async index() {
        return await Produto.all()
    }
    async store(){
        return [1,2,3]
    }

}