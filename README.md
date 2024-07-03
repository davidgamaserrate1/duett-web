

# Sistema de Login Web 

### Funcionalidades

1. **Cadastro de Usuário:**
   - Permite cadastrar um usuário utilizando nome, e-mail, senha, CPF, e perfil (Usuário ou Administrador) sem a necessidade de estar logado no sistema.
   
2. **Login:**
   - Permite que o usuário criado faça login no sistema e acesse a tela de HOME, contendo uma mensagem de “Hola Mundo”.
   
3. **Validação:**
   - Validações para não permitir a criação de usuários com dados duplicados ou inválidos.
   
4. **Troca de Senha:**
   - Tela para realizar a troca da própria senha, solicitando a confirmação da senha atual e da nova senha.
   
5. **Administração de Usuários:**
   - Usuários com perfil de Administrador podem acessar uma lista contendo todos os usuários cadastrados no sistema, com a opção de exclusão dos usuários cadastrados na plataforma.

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Context API:** Para gerenciamento de estado da autenticação.
- **Yup:** Biblioteca de validação de formulários.
- **Axios:** Cliente HTTP para realizar requisições à API.
- **Formik:** Biblioteca para gerenciamento de formulários.
- **React Router DOM:** Para roteamento de páginas.

## Estrutura do Projeto

```
src/
├── assets/
│   └── forgotPassword.jpg
│   └── login.jpg
│   └── signUp.jpg
├── components/
│   ├── AdminProfile
│   ├── AdminProtectedLayout 
│   ├── AlertFeedback 
│   ├── Button 
│   ├── Header 
│   ├── Input 
│   ├── LayoutForm 
│   ├── Modal 
│   ├── Navigate 
│   ├── NotFound 
│   ├── ProtectedLayout 
│   ├── RedirectText 
│   ├── Select 
│   ├── TableUsers 
│   ├── Title 
│   ├── UserProfile
├── context/
│   └── AuthProvider
│   └── Hooks
├── interfaces/
│   ├── ChangePassword.ts
│   ├── ErrorResponse.ts
│   ├── User.ts
│   └── authProvider.ts
├── pages/
│   ├── ChangePassword 
│   ├── Home 
│   ├── Login 
│   ├── SignUp 
│   ├── UsersList
├── routes/
│   ├── index
├── services/
│   └── api.config.ts 
│   └── auth.service.ts 
│   └── users.service.ts
├── styles/
│   └── global.css
│   └── reset.css
├── App.tsx
├── index.tsx
└── ...
```
### Requisitos Mínimos

#### Ambiente de Desenvolvimento

- **Node.js**: É necessário ter o Node.js instalado. Recomenda-se a versão 16 ou superior, pois as dependências do projeto são compatíveis com esta versão.
- **npm**: O npm vem junto com a instalação do Node.js. Certifique-se de ter a versão mais recente do npm.

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/davidgamaserrate1/duett-web.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd duett-web
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   npm start
   ```

5. Acesse o projeto no navegador:

   ```
   http://localhost:3000
   ```

## Funcionalidades Detalhadas

### Cadastro de Usuário

- Página de cadastro com formulário para nome, e-mail, senha, CPF e perfil.
- Utilização do Yup para validação dos dados.

### Login

- Página de login com formulário para e-mail e senha.
- Exibição de mensagens de erro em caso de credenciais incorretas.

### Troca de Senha

- Página para troca de senha com formulário para senha atual, nova senha e confirmação da nova senha.
- Validação para garantir que a nova senha não seja igual à antiga.

### Administração de Usuários

- Página acessível para administradores com lista de usuários cadastrados.
- Funcionalidade para excluir usuários.



### Design

- O design deste projeto foi elaborado utilizando o Figma. [Link para o design no Figma](https://www.figma.com/design/vSWy46MVfb9VAcp0TEPT0U/Duett?node-id=16-228&t=eBjgSlWaRPJaae84-1).

