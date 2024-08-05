# Video Management API

Uma API para gerenciamento de vídeos, categorias e usuários, construída com Node.js, MongoDB e TypeScript.

## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Modelos de Dados](#modelos-de-dados)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Esta API permite a criação, leitura, atualização e exclusão de vídeos, categorias e usuários. Inclui autenticação baseada em JWT e criptografia de senhas.

## Instalação

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Navegue até o Diretório do Projeto:**

   ```bash
   cd seu-repositorio
   ```

3. **Instale as Dependências:**

   ```bash
   npm install
   ```

4. **Crie um Arquivo de Configuração `.env`:**

   Copie o arquivo `.env.example` para `.env` e preencha com suas configurações:

   ```bash
   cp .env.example .env
   ```

   **.env**

   ```env
   MONGO_URI='sua-uri-do-mongodb'
   SECRET_KEY='sua-chave-secreta'
   ```

5. **Compile o Código TypeScript:**

   ```bash
   npm run build
   ```

6. **Inicie o Servidor:**

   ```bash
   npm start
   ```

## Configuração

- **MONGO_URI:** A URL de conexão para o MongoDB.
- **SECRET_KEY:** Chave secreta para assinatura de tokens JWT.

## Uso

A API está disponível em `http://localhost:3000`.

### Endpoints

#### Usuários

- **POST** `/api/users`: Cria um novo usuário.
- **GET** `/api/users/:id`: Obtém os detalhes de um usuário.
- **PUT** `/api/users/:id`: Atualiza um usuário.
- **DELETE** `/api/users/:id`: Remove um usuário.

#### Categorias

- **POST** `/api/categories`: Cria uma nova categoria.
- **GET** `/api/categories/:id`: Obtém os detalhes de uma categoria.
- **PUT** `/api/categories/:id`: Atualiza uma categoria.
- **DELETE** `/api/categories/:id`: Remove uma categoria.

#### Vídeos

- **POST** `/api/videos`: Cria um novo vídeo.
- **GET** `/api/videos/:id`: Obtém os detalhes de um vídeo.
- **PUT** `/api/videos/:id`: Atualiza um vídeo.
- **DELETE** `/api/videos/:id`: Remove um vídeo.

## Modelos de Dados

### User

```typescript
{
  name: string;
  email: string;
  admin: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
```

### Category

```typescript
{
  name: string;
  videos: mongoose.Schema.Types.ObjectId[];
}

```

### Video

```typescript
{
  title: string;
  description: string;
  category: mongoose.Schema.Types.ObjectId[];
  thumbnail: string;
  videoUrl: string;
  user: mongoose.Schema.Types.ObjectId;
}


```

## Contribuição
Contribuições são bem-vindas! Por favor, siga as diretrizes de contribuição descritas no arquivo CONTRIBUTING.md.

## Licença
Este projeto está licenciado sob a MIT License.





