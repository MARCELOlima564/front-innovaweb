# Itinerários Formativos do SENAI Valinhos - Projeto Innova Web
![Demonstração do Projeto](./public/gifinnovaweb.gif)

## Descrição do Projeto

O projeto **Itinerários Formativos do SENAI Valinhos** foi desenvolvido para melhorar a visibilidade e acessibilidade das informações sobre os cursos oferecidos pelo SENAI Valinhos. O objetivo principal é resolver problemas identificados no site atual, como informações desatualizadas e dificuldade de navegação, proporcionando uma experiência mais eficiente para usuários e administradores do sistema.



## Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **Next.js**: Framework baseado em React para renderização de páginas
- **CSS Modules**: Estilo modular e escopo para componentes React

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor
- **PostgreSQL**: Banco de dados relacional
- **bcrypt**: Biblioteca para criptografia de senhas

## Requisitos de Instalação

### Pré-requisitos
- Node.js instalado
- Gerenciador de pacotes (npm, yarn ou pnpm)

## Configuração do Projeto

### Passos para Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/itinerarios-senai.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd itinerarios-senai
    ```

3. Instale as dependências:

    ```bash
    npm install  # ou yarn install  # ou pnpm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev  # ou yarn dev  # ou pnpm dev
    ```

5. Acesse o projeto no navegador:

    Abra [http://localhost:3000](http://localhost:3000) para visualizar o site.

## Funcionalidades Principais

- **Visualização de Cursos**: Exibição clara e acessível dos cursos do SENAI Valinhos.
- **Sistema CRUD de Cursos**: Gerenciamento completo de cursos para administradores.
- **Segurança**: Criptografia de senhas e controle de acesso administrativo.

## 1. Informações Gerais

### Linguagem Utilizada:
- **JavaScript**

### Frameworks e Bibliotecas Principais:

#### Frontend:
- **React**: Biblioteca para construção de interfaces de usuário.
- **Next.js**: Framework baseado em React para renderização de páginas do lado do cliente e servidor.
- **CSS Modules**: Estilo modular e escopado para componentes React.

#### Backend:
- **Node.js**: Ambiente de execução JavaScript.
- **PostgreSQL**: Banco de dados relacional.
- **bcrypt**: Biblioteca para encriptação de senhas.

## Segurança e Tratamento de Erros

- **Criptografia de senhas** usando `bcrypt`.
- **Prevenção de SQL Injection** com instruções preparadas.
- **Tratamento de erros** com blocos `try/catch`.
- **Retorno de mensagens de erro claras** e códigos HTTP seguros.

## Contribuição

Para contribuir com o projeto, por favor:

1. Faça um fork do repositório.
2. Crie sua branch de feature.
3. Commit suas mudanças.
4. Push para a branch.
5. Abra um Pull Request.

