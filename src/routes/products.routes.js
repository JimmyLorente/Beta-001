import { Router } from "express"
const router = Router()
import * as productsCtrl from "../controllers/products.controller" //El *sirve para importar todos los controladores

router.post('/', productsCtrl.createProduct) //crear productos

router.get('/', productsCtrl.getProduct) // obtener productos

router.get('/:productById', productsCtrl.getProductById) //obtener el id del producto

router.put('/:productById', productsCtrl.updateProductById) //actualizar producto

router.delete('/:productById', productsCtrl.deleteProductById) //eliminar productos 

export default router;