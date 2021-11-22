# Api Node com Typescript e GraphQL 
## Banco de Dados (MongoDB)
Para executar o banco de dados com o docker: 
```bash
docker run --name mongo_graphql -p 27017:27017 -d -t mongo
```

## Rotas 
 - Post: `/users`;
 - Get: `/posts/users/:id`;
 - Para acessar o Graphql somente abrir no Browser na rota `http://localhost:4003/graphql`

