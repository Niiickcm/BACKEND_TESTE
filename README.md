# BACKEND_TESTE

Este é um projeto backend desenvolvido utilizando Node.js, Express e TypeScript.

## Como Rodar o Projeto

1. **Clone o projeto:**

```bash
git clone https://github.com/Niiickcm/BACKEND_TESTE.git
```
Navegue até a pasta do projeto:

```bash
cd BACKEND_TESTE
```
Instale as dependências utilizando Yarn ou npm:
Com Yarn:
```bash
yarn install
```
Com npm
```bash
npm install
```
Após a instalação das dependências, inicie o projeto:
Com Yarn:
```bash
yarn dev
```
Com npm:
```bash
npm run dev
```
O projeto estará rodando. Verifique a porta no console; geralmente é 3000 ou 3001.

Rotas Disponíveis
Listar as tarefas:

Rota: /tasks
Método: GET

Criar uma tarefa:

Rota: /tasks
Método: POST
Corpo: JSON
```bash 
{"title":"nova tarefa","completed":false}
```

Deletar uma tarefa:

Rota: /tasks/:id
Método: DELETE
Parâmetro: id da tarefa

Alterar uma tarefa:

Rota: /tasks/:id
Método: UPDATE
Parâmetro: id da tarefa
Corpo: JSON 
```bash
{"completed":true}
```

Hospedagem e Atualizações Automáticas
A aplicação está hospedada na AWS utilizando o Elastic Beanstalk. O controle de atualizações automáticas é feito através do CodeBuild, que executa atualizações sempre que um commit é feito na branch main do repositório.
