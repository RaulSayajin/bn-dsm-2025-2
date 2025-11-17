import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'


dotenv.config()

// Importação de todas as rotas
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import categoriasRouter from './routes/categorias.js'
import clientesRouter from './routes/clientes.js'
import fornecedoresRouter from './routes/fornecedores.js'
import pedidosRouter from './routes/pedidos.js'
import produtosRouter from './routes/produtos.js'
import itensRouter from './routes/itens.js' 

const app = express()

// Configuração dos middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/******************** ROTAS ********************/
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/categorias', categoriasRouter)
app.use('/clientes', clientesRouter)
app.use('/fornecedores', fornecedoresRouter)
app.use('/pedidos', pedidosRouter)
app.use('/produtos', produtosRouter)
app.use('/itens', itensRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

export default app