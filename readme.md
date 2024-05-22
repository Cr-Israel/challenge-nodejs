
# API sem framework

O objetivo dessa aplicação foi colocar os conhecimentos em prática e ter a vivência de implementar um API do zero sem nenhum framework ou biblioteca.

Esse projeto foi um desafio proposto ao fim de um módulo do Ignite Node.js da Rocketseat.
## Stack utilizada

**Back-end:** Node.js


## Funcionalidades

- Criação de task;
- Consulta de todas os tasks cadastrados;
- Consulta baseada em filtro;
- Atualização de task;
- Removeção de task;
- Inserção de dados CSV no Banco de Dados.
## Documentação da API

#### Criação de Task

```http
  POST /task
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
|  | `string` | **Obrigatório**. Cria uma task no banco de dados. |

#### Leitura de todas as Tasks no Banco de Dados

```http
  GET /task
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|       | `string` | **Obrigatório**. Retorna todas as tasks cadastradas no banco. |

#### Leitura de Tasks que se aplicam ao filtro

```http
  GET /task?search=
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|   `Query Param`   | `string` | **Obrigatório**. Retorna todas as tasks que sem aplicam a filtragem aplicada. |

#### Atualização de Task

```http
  PUT /task/:id
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|   `ID`   | `string` | **Obrigatório**. Atualiza os dados de uma determinada Task pelo ID. |

#### Atualização de estado da Task

```http
  PATCH /task/:id/complete
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|   `ID`   | `string` | **Obrigatório**. Rota quando acessada, muda o estado da Task para concluída. |

#### Remoção de Task

```http
  DELETE /task/:id
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|   `ID`   | `string` | **Obrigatório**. Remove um determinada Task pelo seu ID. |

## Aprendizados

Fazer uma API do zero pode não ser muito interessante para alguns ou trabalhoso para outros.

Para mim, agregou muito nos meus conhecimentos. Eu sempre quis saber como as coisas funcionam por baixo dos panos, o que acontece.

Apredi a usar RegEx para identificar uma Route Param, que no caso é o ID, para fazer uma atualização ou remoção.

Aprendi a criar um Middleware que faz a leitura do corpo da Requisição, Body.

E, aprendi a criar uma outra RegEx que identifica uma Query Param e realiza a filtragem.

Além de ler dados em um arquivo CSV com Stream do Node e inserindo esses dados no Banco de Dados.
## Instalação

Instale a aplicação com npm ou yarn

```bash
  git clone git@github.com:Cr-Israel/challenge-nodejs.git
  npm/yarn install
  npm run dev || yarn dev
```
    
## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Autores

- [@Cr-Israel](https://www.github.com/Cr-Israel)


## Feedback

Feedbacks são sempre bem-vindos.
Se você tiver algum feedback, por favor me deixe saber: carlosisrael08@hotmail.com

