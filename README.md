# Next.js SaaS + RBAC

Este repositório tem como foco principal o estudo das novas funcionalidades introduzidas pelo **Next.js 15**, bem como a implementação de um sistema SaaS (Software as a Service) multi-tenant com controle de acesso baseado em funções (RBAC - Role-Based Access Control). Trata-se de um projeto voltado para aprendizado e exploração de boas práticas no desenvolvimento de aplicações web modernas.

## Aviso Importante

Esta aplicação foi desenvolvida exclusivamente para fins de estudo e experimentação. Algumas funcionalidades, como o envio de e-mails e integrações com serviços externos, **não estão ativas**. Por isso, este repositório **não deve ser considerado um produto pronto para o mercado**.

## Funcionalidades Implementadas

### Autenticação

- Criação de conta com e-mail, nome e senha.
- Autenticação utilizando senha.
- Suporte a login social (GitHub).
- Recuperação de senha via token (a implementação do envio de e-mail está desativada).

### Organizações

- Criação de organizações.
- Listagem de organizações vinculadas a um usuário.
- Edição de informações de uma organização.
- Transferência de propriedade de organização.
- Encerramento de organizações.

### Projetos

- Criação e vinculação de projetos às organizações.
- Listagem de projetos vinculados a uma organização.
- Edição e exclusão de projetos.
- Detalhamento de projetos específicos.

### Convites

- Envio de convites para membros (simulação).
- Aceitação e rejeição de convites.
- Listagem de convites pendentes.
- Revogação de convites.

## Tecnologias Utilizadas

### Backend

- **Node.js** com **Fastify**.
- **Prisma ORM** para gerenciamento de banco de dados.
- Banco de dados: **PostgreSQL**.
- **JWT** para autenticação e sessões seguras.
- **Zod** para validação de esquemas de dados.

### Frontend

- **Next.js 15**.
- **React** com suporte a novos recursos, como Actions e React Server Components (RSC).
- **Tailwind CSS** para estilização.

### Infraestrutura

- Monorepo gerenciado com **pnpm**.
- **Docker** e **docker-compose** para ambiente de desenvolvimento.

## Configuração e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nextjs15-saas-study.git
   cd nextjs15-saas-study
   ```

2. Instale as dependências:
  
   ```bash
   pnpm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`.

4. Execute as migrações do banco de dados:
  
   ```bash
   pnpm --filter api run db:migrate
   ```

5. Inicie o ambiente de desenvolvimento:
  
   ```bash
   pnpm dev
   ```

6. Acesse o frontend em [http://localhost:3000](http://localhost:3000) e a documentação da API em [http://localhost:4000/docs](http://localhost:4000/docs).

## Pontos de Estudo

Este projeto explora conceitos importantes:

- Multi-tenancy em aplicações SaaS.
- Controle de acesso granular com RBAC.
- Novas features do **Next.js 15**, incluindo melhorias no Server Actions.
- Estruturação de monorepos para projetos complexos.

## Limitações

- O envio de e-mails está desativado.
- Este repositório não inclui testes automatizados abrangentes (exercício sugerido).
- Algumas funções de billing simulam valores e cobranças.

## Contribuições

Como o projeto tem fins de estudo, contribuições para melhorias e correções são bem-vindas. Envie um Pull Request ou abra uma Issue para discutirmos!

## Desenvolvedor

[![Ricardo Granvilla](./assets/author.png)](https://github.com/rgranvilla)

[Ricardo Granvilla 🚀](https://github.com/rgranvilla)

[![Twitter Badge](https://img.shields.io/badge/-@rgranvilla-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/rgranvilla)](https://twitter.com/rgranvilla)
[![Linkedin Badge](https://img.shields.io/badge/-Ricardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rgranvilla/)](https://www.linkedin.com/in/rgranvilla/)
[![Gmail Badge](https://img.shields.io/badge/-rgranvilla@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rgranvilla@gmail.com)](mailto:rgranvilla@gmail.com)
