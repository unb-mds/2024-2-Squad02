# Arquitetura e Tecnologias

O **Urbanize** é constituído de cinco componentes principais:

- **Frontend:** Responsável pela interface de usuário, onde os usuários interagem com o sistema. Ele exibe os dados de maneira clara e acessível, permitindo que os usuários façam pesquisas e visualizem gráficos e análises.

- **Backend/API:** Gerencia a lógica de negócios e atua como intermediário entre o frontend e o banco de dados. Ele processa as solicitações dos usuários, executa as regras de negócio e retorna os dados apropriados para o frontend.

- **Scraper:** Responsável por coletar dados diretamente, raspando as informações relevantes de suas plataformas. Esses dados brutos são a base para as análises e visualizações realizadas pelo sistema.

- **ETL (Extract, Transform, Load):** Depois que os dados são raspados pelo Scraper, o processo de ETL entra em ação. Ele organiza, transforma e carrega os dados nas tabelas do banco de dados, garantindo que eles estejam estruturados de forma eficiente e prontos para serem utilizados pelo backend e visualizados no frontend.

- **Banco de Dados:** Armazena e organiza os dados necessários para o funcionamento do Urbanize. É o repositório central onde todos os dados coletados, processados e organizados são mantidos para acesso e consulta.

**Arquitetura do Urbanize**


Para fornecer uma visão clara de como esses componentes interagem e se integram no sistema, o diagrama abaixo ilustra a arquitetura geral do Urbanize. Nele, é possível visualizar o fluxo de dados e a relação entre cada um dos componentes descritos acima, desde a coleta de dados no SODF até a apresentação dos resultados para o usuário final.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLI0DWAY=/?moveToViewport=-69,-202,1222,563&embedId=271195419009" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

---

**Descrição dos componentes**

A seguir, apresentamos uma visão detalhada de cada componente do **Urbanize**. As escolhas tecnológicas feitas para cada parte do sistema refletem o compromisso da equipe de desenvolvimento em utilizar soluções modernas e eficientes, assegurando robustez e facilidade de manutenção.


## Frontend

O **frontend** é interface visual do Urbanize, composto por três páginas principais, organiza em gráficos os dados coletados.

**Tecnologias utilizadas:**

- **Next.js:** Framework React para renderização no lado do servidor (SSR) e geração de sites estáticos, proporcionando uma performance melhorada e SEO otimizado.
- **Tailwind CSS:** Framework de utilitários CSS que permite um design responsivo e customizável.
- **TypeScript:** Linguagem que adiciona tipagem estática ao JavaScript, aumentando segurança e previsibilidade do código.
- **Axios:** Biblioteca para requisições HTTP, estabelecendo a comunicação com a API.
- **Vitest:** Ferramenta de testes unitários JavaScript, permitindo a execução rápida e eficiente dos testes.
- **Testing Library:** Conjunto de utilitários que possibilita renderizar os componentes em ambiente de teste.
- **ESLint:** Ferramenta de linting que identifica e corrige problemas de estilo e padrões no código, garantindo a qualidade e consistência.
- **Sonner:** Biblioteca para exibição de notificações na interface, tornando mensagens de erro e alertas amigáveis.
- **ApexCharts:** Biblioteca para criação de gráficos interativos e visualizações de dados, proporcionando uma apresentação rica e personalizável das informações.

---

## Backend/API

O **backend/API** é responsável pela busca, regras de negócio e tratamento dos dados. Para maior robustez e facilidade de manutenção, a API foi estruturada seguindo os princípios da **Clean Architecture**, dividida em três camadas principais:


- **Infrastructure:** Esta camada contém os elementos de infraestrutura necessários para a execução do sistema, incluindo a configuração do servidor, a conexão com o banco de dados, e a implementação dos serviços externos. Ela lida com as operações mais próximas ao sistema operacional e ao ambiente de execução.

- **Adapters:** Os adaptadores são responsáveis por fazer a ponte entre o mundo externo e o núcleo da aplicação. Eles transformam as entradas e saídas, adaptando-as para serem compreendidas pela camada de aplicação. Incluem controllers que recebem as requisições HTTP e repositórios que abstraem o acesso ao banco de dados.

- **Application:** Esta camada contém a lógica de negócio central do sistema. Ela orquestra as operações, aplica as regras de negócio e interage com as outras camadas através de interfaces definidas. O foco é garantir que as regras de negócio sejam cumpridas de maneira consistente e independente da tecnologia usada nas outras camadas. No Urbanize, inclui os services.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLI7Bos4=/?moveToViewport=-586,-180,1222,563&embedId=128042769159" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

**Tecnologias utilizadas:**

- **Express:** Framework para construção de APIs e servidores web em Node.js, facilitando a criação e gerenciamento de rotas.
- **Vitest:** Ferramenta de testes unitários JavaScript, permitindo a execução rápida e eficiente dos testes.
- **TypeScript:** Linguagem que adiciona tipagem estática ao JavaScript, aumentando segurança e previsibilidade do código.
- **Nodemon:** Ferramenta que reinicia automaticamente o servidor Node.js quando mudanças são detectadas, agilizando o desenvolvimento.
- **ESLint:** Ferramenta de linting que identifica e corrige problemas de estilo e padrões no código, garantindo a qualidade e consistência.
- **Swagger:** Ferramenta para documentação interativa de APIs, permitindo a exploração e testes das rotas da API.
- **Supabase:** Plataforma de backend como serviço usada para conectar ao banco de dados PostgreSQL.

---

## Scraper

O **scraper** é responsável por extrair dados diretamente da plataforma do SODF, realizando a raspagem de informações relevantes. Esses dados brutos, coletados de forma automatizada, servem como base para as análises e visualizações do sistema. O scraper navega pelos sites, interage com os elementos das páginas e extrai os dados necessários para o Urbanize.

**Tecnologias Utilizadas:**

- **Selenium:** Biblioteca para automação de navegadores web, permitindo que o scraper interaja com páginas da web de forma programática, clicando em botões, preenchendo formulários, e navegando entre páginas.
- **re (Regex):** Módulo de expressões regulares em Python, usado para encontrar e manipular padrões específicos de texto dentro dos dados raspados.

A fonte dos dados extraídos pelo scraper: [SODF_data](http://dados.df.gov.br/pt_BR/organization/sinesp-secretaria-de-estado-de-infraestrutura-e-servicos-publicos-do-distrito-federal)

---

## ETL

O **ETL** (Extract, Transform, Load) é o processo responsável por transformar os dados brutos coletados pelo scraper em um formato estruturado e organizado para armazenamento no banco de dados. Este processo garante que os dados estejam limpos, consistentes e prontos para serem usados nas análises do Urbanize.

**Tecnologias Utilizadas:**

- **Pandas:** Biblioteca Python para manipulação e análise de dados, utilizada no ETL para realizar a limpeza, transformação e organização dos dados extraídos, preparando-os para o carregamento no banco de dados.
- **SQLAlchemy:** Biblioteca de mapeamento objeto-relacional (ORM) para Python, utilizada para interagir com o banco de dados durante a etapa de carregamento dos dados processados, facilitando as operações de inserção e atualização no banco.


---

## Banco de Dados

O **banco de dados** armazena de forma dinâmica e inteligente todos os dados necessários para abastecer o **Urbanize**. Ele é o repositório central onde os dados coletados e processados são mantidos, garantindo que estejam acessíveis e organizados para consultas e análises.


Veja sua modelagem:

A fazer!!

**Tecnologias Utilizadas:**

- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional de código aberto, usado para armazenar e gerenciar os dados de forma eficiente e segura. Ele oferece suporte a operações complexas e é altamente escalável, adequado para o volume e a complexidade dos dados no Urbanize.
- **Supabase:** Plataforma de backend como serviço, que fornece uma interface simplificada para o PostgreSQL, facilitando o acesso, gerenciamento e integração com o banco de dados através de APIs e outras ferramentas de desenvolvimento.


---


