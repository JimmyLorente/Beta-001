import express  from 'express'
import morgan from 'morgan';
import pkg from '../package.json'

const app = express()

import productsRoutes from './routes/products.routes'


app.set('pkg', pkg) //Guardar variables en expres 

app.use(morgan('dev')); //  con Morgan se ven las peticiones que se haga al servidor 

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })  
})
//La respuesta a la peticion get

app.use('/products', productsRoutes) //sirve para mostrar en el navegador 
export default app;