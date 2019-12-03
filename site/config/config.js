module.exports = { 
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  // a conexão com o banco de dados
  production: {
    username: 'root', // usuário do azure
    password: 'bandtec', // senha do usuário do banco
    database: 'cadastro',
    host: 'localhost',
    dialect: 'mysql',
  
      }
    }

    
