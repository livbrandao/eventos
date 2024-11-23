# Projeto Convite Digital 📨

Este projeto é uma aplicação completa de gerenciamento de eventos, desenvolvida durante o curso **"Desenvolva uma aplicação de gerenciamento de eventos"**. A solução fullstack integra tecnologias modernas para oferecer uma experiência completa, desde o Frontend até o Backend, Banco de Dados, Mobile e deploy na AWS.

## 🚀 Tecnologias Utilizadas

- **Frontend:** React (ou a tecnologia utilizada no curso)
- **Backend:** Node.js com Express
- **Banco de Dados:** PostgreSQL (ou outra tecnologia abordada)
- **Mobile:** React Native (ou tecnologia correspondente)
- **Deploy:** AWS (utilizando serviços como EC2, S3, RDS, entre outros)

## 📋 Funcionalidades

- **Criação de eventos personalizados**: Configure detalhes como nome, data, local e descrição.
- **Envio de convites digitais**: Permita aos usuários enviar convites para participantes via e-mail ou links compartilháveis.
- **Gerenciamento de confirmações (RSVP)**: Acompanhe quem confirmou presença.
- **Dashboard de administração**: Controle eventos e participantes de forma intuitiva.
- **Interface Mobile**: Experiência otimizada para dispositivos móveis.

## 🛠️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter as ferramentas abaixo instaladas:
- **Node.js** (versão X ou superior)
- **Gerenciador de pacotes**: npm ou yarn
- **Banco de Dados**: PostgreSQL (ou outro configurado no projeto)
- **AWS CLI** (para deploy)

### Passos para rodar o projeto localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/livbrandao/projeto-convite-digital.git
   cd projeto-convite-digital
    ```
2. **Instale as dependências**:
   ```bash
  npm install
  # ou
  yarn install
      ```
3. Configure as variáveis de ambiente: Crie um arquivo .env baseado no modelo .env.example e preencha com suas credenciais.

4. Execute o Backend:
  ```bash
  npm run server
  ```
5. Execute o Frontend:
  ```bash
  npm run start
  ```
6.Banco de Dados: Certifique-se de ter o banco configurado e migrações aplicadas:
   ```bash
   npm run migrate
   ```
7. Mobile (opcional): Siga as instruções no diretório mobile para configurar o ambiente e executar o aplicativo.

8. Deploy na AWS: Utilize os comandos do AWS CLI ou pipeline configurado para publicar a aplicação.

## 📁 Estrutura do Projeto
 ```bash
   projeto-convite-digital/
   ├── backend/        # Código-fonte do servidor (API)
   ├── frontend/       # Código-fonte do Frontend
   ├── mobile/         # Código-fonte do aplicativo Mobile
   ├── database/       # Scripts de migração e configuração do Banco de Dados
   ├── deploy/         # Arquivos relacionados ao deploy na AWS
   └── README.md       # Documentação do projeto
 ```

## 🌟 Sobre o Curso
O curso "Formação Dev" pela Cod3r, foi uma imersão de uma semana com foco em ensinar o desenvolvimento de soluções fullstack. Durante o curso, foram abordadas as melhores práticas de desenvolvimento, integração de serviços e deploy na nuvem.

## 🖊️ Autora
Projeto desenvolvido por Livia Brandao durante o curso.

## 📧 Em caso de dúvidas ou sugestões, fique à vontade para abrir uma issue.

##
Sinta-se à vontade para ajustar conforme a implementação do projeto! 😊
