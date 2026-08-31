<div align="center">

# 💎 WF willFran (wilFran Edition)
### Design System Corporativo PO UI / Portinari em HTML, CSS e JavaScript Puro

<p align="center">
  <b>Releitura completa de 89 componentes e templates corporativos oficiais do PO UI sem qualquer dependência de Angular, Node.js ou etapas de build.</b>
</p>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Zero Dependencies](https://img.shields.io/badge/Zero%20Dependencies-100%25-success?style=for-the-badge)](https://github.com/francijrjr/wf-willfran)
[![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Nativo-753399?style=for-the-badge)](https://github.com/francijrjr/wf-willfran)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

</div>

## 🌟 Por que WF willFran?

Desenvolvido para equipes e desenvolvedores que precisam da robustez e elegância visual do **Design System Portinari (PO UI / TOTVS)**, mas que **não querem a sobrecarga, lentidão ou complexidade** de frameworks como Angular, React ou Node.js.

- 🚀 **Zero Build & Zero Config**: Abra diretamente no navegador com duplo clique ou sirva em qualquer servidor HTTP.
- 🔌 **Universal & Agnóstico**: Compatível com qualquer backend ou tecnologia (**PHP, Python/Django/Flask, Java/Spring, ASP.NET/C#, Ruby on Rails, Protheus ADVPL/TLPP, TOTVS Fluig ou HTML estático**).
- 🎨 **Fidelidade Portinari**: Cores oficiais (Eggplant `#753399`), tipografia (*Manrope* / *DM Sans*), espaçamentos, sombras e micro-interações fiéis.
- 🌗 **Dark Mode Inteligente**: Alternância de tema claro/escuro nativa com suporte a detecção de preferência de sistema e persistência em `localStorage`.
- 📋 **Copy & Paste Instantâneo**: Visualize o código fonte formatado em **HTML**, **CSS** ou **JavaScript** e copie com 1 clique.
- 🧪 **Laboratórios Interativos (Labs)**: Teste propriedades, filtros, estados dinâmicos e validações em tempo real antes de aplicar no seu projeto.

---

## 🚀 Como Executar

### Opção 1: Direto no Navegador (Mais Rápido)
Basta clonar o repositório e abrir o arquivo `index.html` em qualquer navegador moderno.

### Opção 2: Servidor Local Simples

```bash
# Clone o repositório
git clone https://github.com/francijrjr/wf-willfran.git
cd wf-willfran

# Com Python 3
python -m http.server 8080

# Ou com Node.js npx
npx serve .

# Ou com PHP
php -S localhost:8080
```

Abra seu navegador em: **`http://localhost:8080`**

---

## 📦 Como Usar em Seus Projetos

Você pode utilizar o pacote pré-empacotado localizado na pasta `po-vanilla/`:

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Sistema Corporativo</title>
  
  <!-- 1. Fonte Oficial (Google Fonts) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
  
  <!-- 2. Ícones Lucide -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <!-- 3. Estilos WF willFran -->
  <link rel="stylesheet" href="po-vanilla/css/po-vanilla.css">
</head>
<body>

  <!-- Exemplo: Botão Portinari -->
  <button class="po-button primary">
    <i data-lucide="check"></i> Confirmar Operação
  </button>

  <!-- Exemplo: Tag Semântica -->
  <span class="po-tag success">Homologado</span>

  <!-- 4. Script Inicializador -->
  <script src="po-vanilla/js/po-vanilla.js"></script>
  <script>
    lucide.createIcons();
  </script>
</body>
</html>
```

---

## 🧩 Catálogo de Componentes (89 Componentes e Templates)

<details open>
<summary><b>1. Navegação (8 Componentes)</b></summary>

- `po-breadcrumb`: Trilha de navegação com botão de expansão interativo e favoritos.
- `po-context-tabs`: Abas contextuais para agrupamento em lote.
- `po-menu`: Menu lateral hierárquico expansível com badges e atalhos.
- `po-menu-panel`: Painel flutuante de menu para densidade visual.
- `po-navbar`: Barra de navegação superior com pesquisa integrada e ações rápidas.
- `po-tabs`: Abas de navegação horizontal com alternância de conteúdo.
- `po-tree-view`: Árvore hierárquica de pastas e registros com expansão multinível.
- `po-stepper`: Assistente passo a passo (wizard) com estados concluído/ativo/pendente.
</details>

<details open>
<summary><b>2. Ações & Menus (7 Componentes)</b></summary>

- `po-button`: Botões com variantes Primária, Secundária, Terciária (Ghost), Perigo e Sucesso.
- `po-button-group`: Grupo de botões segmentados com seleção única ou múltipla.
- `po-context-menu`: Menu acionado por clique direito ou botão de 3 pontos.
- `po-dropdown`: Menu suspenso com divisores, atalhos e ícones.
- `po-link`: Hiperlinks estilizados com sublinhado animado e suporte a target externo.
- `po-popup`: Caixa flutuante para ações rápidas ancoradas.
- `po-popover`: Cartão flutuante informativo com título, descrição e ações.
</details>

<details open>
<summary><b>3. Formulários & Controles (26 Componentes)</b></summary>

- `po-input`: Campo de texto padrão com ícone, limpeza automática e ajuda.
- `po-password`: Campo de senha com alternador de visibilidade (olho).
- `po-number`: Entrada numérica com controle de limites min/max.
- `po-decimal`: Formatação de valores decimais e precisão configurável.
- `po-email`: Validação de padrão de endereço de e-mail corporativo.
- `po-url`: Campo formatado para URLs com teste de link.
- `po-datepicker`: Seletor de data calendário com máscaras em português.
- `po-datepicker-range`: Intervalo de datas com seleção de início e fim.
- `po-datetimepicker`: Combinação de data e hora em controle único.
- `po-timepicker`: Seletor de horário com formato HH:mm:ss.
- `po-select`: Dropdown seletor clássico com opções estilizadas.
- `po-multiselect`: Seleção múltipla com adição e remoção de tags visuais.
- `po-combo`: Caixa combinada com busca interna instantânea.
- `po-autocomplete`: Sugestões automáticas durante a digitação.
- `po-lookup`: Modal de busca avançada com tabela de seleção de registros.
- `po-checkbox`: Caixa de seleção única com suporte a alinhamento responsivo.
- `po-checkbox-group`: Grupos de seleção múltipla com layout vertical/horizontal.
- `po-radio`: Opção de seleção exclusiva (rádio).
- `po-radio-group`: Grupo de botões de rádio vinculados.
- `po-switch`: Interruptor deslizante on/off com feedback textual.
- `po-textarea`: Área de texto redimensionável com contagem de caracteres.
- `po-upload`: Área de upload de arquivos com suporte a arrastar e soltar (drag & drop).
- `po-rich-text`: Editor de texto rico com barra de formatação (negrito, itálico, listas, links).
- `po-search-ai`: Campo de busca semântica integrado com assistente de IA.
- `po-clean`: Botão de limpeza de formulários com um clique.
- `po-field`: Wrapper estruturado com rótulo, input, dica e mensagem de erro.
</details>

<details open>
<summary><b>4. Dados & Visualização (9 Componentes)</b></summary>

- `po-table`: Tabela de dados completa com ordenação, seleção de linhas e badges.
- `po-chart`: Gráficos de barras, linhas e pizza em SVG responsivo e dinâmico.
- `po-gauge`: Indicador velocímetro semicircular com agulha animada e zonas de cor.
- `po-grid`: Sistema de grid responsivo de 12 colunas para layouts fluidos.
- `po-info`: Exibição de par chave-valor com rótulo cinza e valor destacado.
- `po-list-view`: Listagem de cartões ricos para itens heterogêneos.
- `po-listbox`: Caixa de rolagem com itens selecionáveis.
- `po-dynamic-view`: Renderizador de visualização de registro orientado a JSON Schema.
- `po-dynamic-form`: Formulário autogerado a partir de metadados em JSON.
</details>

<details open>
<summary><b>5. Feedback & Notificações (10 Componentes)</b></summary>

- `po-badge`: Emblemas numéricos de notificação sobre ícones ou avatares.
- `po-tag`: Etiquetas coloridas de status (*Sucesso*, *Aviso*, *Perigo*, *Neutro*).
- `po-disclaimer`: Tags de filtro ativas com botão de exclusão `(X)`.
- `po-disclaimer-group`: Agrupamento de filtros com botão para limpar todos.
- `po-filter-chip`: Chips selecionáveis para filtragem rápida.
- `po-loading`: Spinner de carregamento animado com controle de tamanho.
- `po-loading-overlay`: Bloqueio total de tela ou container com indicador de espera.
- `po-progress`: Barra de progresso com porcentagem e animação de preenchimento.
- `po-skeleton`: Carregamento esqueleto com efeito shimmer para carregamento assíncrono.
- `po-toaster`: Sistema de notificações flutuantes (Toasts) com auto-dismiss.
</details>

<details open>
<summary><b>6. Layout & Containers (9 Componentes)</b></summary>

- `po-accordion`: Painéis retráteis tipo sanfona com animação suave.
- `po-container`: Caixa de conteúdo com bordas, sombras e fundo de superfície.
- `po-divider`: Linha divisória horizontal ou vertical com rótulo opcional.
- `po-header`: Cabeçalho de página com título, subtítulo e ações principais.
- `po-modal`: Janela modal com cabeçalho, corpo, rodapé e foco acessível.
- `po-overlay`: Camada de fundo escurecida para foco em diálogos.
- `po-slide`: Painel deslizante lateral (drawer) para formulários rápidos.
- `po-toolbar`: Barra de ferramentas superior com botões de ação e busca.
- `po-widget`: Cartão de métrica (KPI) com título, valor grande e rodapé explicativo.
</details>

<details open>
<summary><b>7. Utilidades (9 Componentes)</b></summary>

- `po-avatar`: Avatares de usuário (imagens ou iniciais) em 5 tamanhos (XS a XL) com indicador de status.
- `po-calendar`: Calendário mensal completo com navegação entre meses e seleção de datas.
- `po-helper`: Ícone de ajuda com tooltip explicativo ao passar o mouse.
- `po-icon`: Wrapper padronizado para ícones Lucide SVG.
- `po-image`: Exibição de imagens responsivas com fallback de erro.
- `po-label`: Rótulos tipográficos consistentes para campos.
- `po-logo`: Componente padronizado para logomarcas corporativas.
- `po-search`: Barra de pesquisa destacada com atalho de teclado global (`Ctrl + K`).
- `po-timer`: Cronômetro e contador de tempo com controles de iniciar, pausar e zerar.
</details>

<details open>
<summary><b>8. Templates de Página Completos (11 Templates)</b></summary>

- `po-page-default`: Página padrão corporativa com breadcrumbs, barra de KPIs, filtros ativos com disclaimers e tabela de pedidos.
- `po-page-list`: Catálogo de clientes com busca em tempo real, seleção em lote, barra de ações e paginação funcional.
- `po-page-detail`: Ficha cadastral 360° com navegação por 4 abas (*Cadastrais*, *Histórico de Pedidos*, *Anexos*, *Auditoria*), KPIs e labs dinâmicos.
- `po-page-edit`: Formulário de edição organizado em seções lógicas com validação estrita de campos obrigatórios (`*`).
- `po-page-login`: Tela de autenticação com layout em card Portinari, alternador de visibilidade de senha, seletor de ambiente, simulação de loading e suporte a SSO (TOTVS ID / Microsoft 365).
- `po-page-dynamic-table`: Tabela com colunas e dados gerados dinamicamente via JSON Schema com alternador de código fonte.
- `po-page-dynamic-edit`: Formulário gerado por schema de configuração com validação de parâmetros.
- `po-page-dynamic-detail`: Ficha de detalhes gerada por schema com alternador JSON vs UI e alternador dinâmico de modelos (*ERP Protheus*, *Cliente*, *NF-e*).
- `po-page-change-password`: Tela de alteração de senha com medidor de força em tempo real (Fraca / Média / Forte) e checklist de requisitos.
- `po-page-blocked-user`: Tela de bloqueio de segurança com contagem regressiva ativa (`14:59 min`) e solicitação de desbloqueio.
- `po-modal-password-recovery`: Modal de recuperação de senha por e-mail com transição para estado de confirmação enviado.
</details>

---

## 🎨 Tokens de Design & Customização (CSS Variables)

Você pode personalizar completamente a identidade visual do projeto alterando as variáveis no `:root`:

```css
:root {
  /* Cor Primária da Marca */
  --brand: #753399;           /* Roxo Oficial Portinari */
  --brand-hover: #602580;     /* Estado Hover */
  --brand-soft: #f4eaf8;      /* Fundo Suave / Destaque */
  
  /* Cores Semânticas */
  --success: #168862;         /* Verde Sucesso */
  --warning: #c86f0a;         /* Laranja Alerta */
  --danger: #c83c4d;          /* Vermelho Erro */
  --info: #1769aa;            /* Azul Informativo */
  
  /* Tipografia */
  --font-family: 'DM Sans', 'Manrope', -apple-system, sans-serif;
  
  /* Bordas e Sombras */
  --radius: 6px;
  --radius-lg: 10px;
  --shadow: 0 10px 30px rgba(39, 27, 48, 0.10);
}
```

---

## 📁 Estrutura de Diretórios

```text
├── index.html                  # Catálogo interativo de componentes com busca e preview
├── styles.css                  # Folha de estilos unificada com tokens e temas (Claro/Escuro)
├── app.js                      # Motor do catálogo, 89 templates e interatividades
├── README.md                   # Documentação oficial completa
├── assets/                     # Recursos gráficos e temas complementares
│   ├── images/
│   └── po-ui/
└── po-vanilla/                 # Pacote distribuível para integração direta em sistemas
    ├── index.html              # Demonstração do pacote standalone
    ├── css/
    │   └── po-vanilla.css      # CSS consolidado e otimizado
    └── js/
        └── po-vanilla.js       # Comportamentos JS auxiliares (modais, toasts, etc.)
```

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Siga os passos:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/novo-componente`)
3. Faça o commit das suas alterações (`git commit -m 'feat: adiciona componente X'`)
4. Faça o push para a branch (`git push origin feature/novo-componente`)
5. Abra um **Pull Request**

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo `LICENSE` para obter mais detalhes.

---

<div align="center">
  <sub>Desenvolvido com dedicação para a comunidade de desenvolvedores corporativos.</sub><br>
  <b>WF willFran — wilFran Edition</b>
</div>
