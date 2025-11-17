// client.js

// Importação mais robusta para Node.js com ES Modules.
// Tenta importar o módulo inteiro.
import * as PrismaModule from '@prisma/client';

// Resolve a classe PrismaClient. 
// Acessa a exportação nomeada 'PrismaClient' do módulo importado.
// Se isso falhar, acessa o 'default', garantindo compatibilidade.
const PrismaClient = PrismaModule.PrismaClient || PrismaModule.default;

// Cria o cliente Prisma com opção de exibir no terminal
// todas as consultas enviadas ao banco de dados
const prisma = new PrismaClient({
  log: [{
    emit: 'event',
    level: 'query'
  }]
})

// Exibe no terminal todas as instruções de consulta
// enviadas ao servidor MongoDB
prisma.$on('query', event => {
  console.log('-'.repeat(80))
  console.log(event.query)
  if(event.params) console.log('PARAMS:', event.params)
})

export default prisma