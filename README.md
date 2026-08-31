# PO Vanilla — Design System Oficial TOTVS PO UI em HTML, CSS e JavaScript Puro

Releitura completa de **100% dos componentes e templates oficiais do [PO UI](https://po-ui.io/documentation)** usando **HTML5 semântico, CSS3 moderno (com variáveis e tokens fiéis ao PO UI) e JavaScript puro (Vanilla)**, sem qualquer dependência de Angular.

## 🚀 Como Executar

Abra `index.html` diretamente no navegador. Não há instalação ou etapa de build.

Para servir localmente com um servidor simples:

```bash
# Python
python -m http.server 8080

# Ou Node.js npx
npx serve .
```

Acesse `http://localhost:8080` no seu navegador.

## 📁 Estrutura do Projeto

- `index.html`: Catálogo interativo com navegação, busca em tempo real (`Ctrl + K`), alternância de temas (claro/escuro) e visualização de código.
- `styles.css`: Folha de estilos completa com tokens oficiais, cores TOTVS (`#753399`), temas, grid e responsividade.
- `app.js`: Catálogo com **89 componentes e templates**, gerador de snippets para **HTML**, **CSS** e **JavaScript** e comportamentos dinâmicos.
- `po-vanilla/`: Pacote standalone pronto para ser importado diretamente em qualquer projeto web:
  - `po-vanilla/css/po-vanilla.css`
  - `po-vanilla/js/po-vanilla.js`
  - `po-vanilla/index.html`

## 🧩 Categorias e Componentes Cobertos (+80 Componentes)

1. **Navegação**: `po-breadcrumb`, `po-context-tabs`, `po-menu`, `po-menu-panel`, `po-navbar`, `po-tabs`, `po-tree-view`, `po-stepper`.
2. **Ações & Menus**: `po-button`, `po-button-group`, `po-context-menu`, `po-dropdown`, `po-link`, `po-popup`, `po-popover`.
3. **Formulários**: `po-field`, `po-input`, `po-password`, `po-number`, `po-decimal`, `po-email`, `po-url`, `po-datepicker`, `po-datepicker-range`, `po-datetimepicker`, `po-timepicker`, `po-select`, `po-multiselect`, `po-combo`, `po-autocomplete`, `po-lookup`, `po-checkbox`, `po-checkbox-group`, `po-radio`, `po-radio-group`, `po-switch`, `po-textarea`, `po-upload`, `po-rich-text`, `po-search-ai`, `po-clean`.
4. **Dados & Visualização**: `po-table`, `po-chart`, `po-gauge`, `po-grid`, `po-info`, `po-list-view`, `po-listbox`, `po-dynamic-view`, `po-dynamic-form`.
5. **Feedback**: `po-badge`, `po-disclaimer`, `po-disclaimer-group`, `po-filter-chip`, `po-loading`, `po-loading-overlay`, `po-progress`, `po-skeleton`, `po-tag`, `po-toaster`.
6. **Layout & Containers**: `po-accordion`, `po-container`, `po-divider`, `po-header`, `po-modal`, `po-overlay`, `po-slide`, `po-toolbar`, `po-widget`.
7. **Utilidades**: `po-avatar`, `po-calendar`, `po-helper`, `po-icon`, `po-image`, `po-label`, `po-logo`, `po-search`, `po-timer`.
8. **Templates de Página**: `po-page-default`, `po-page-list`, `po-page-detail`, `po-page-edit`, `po-page-login`, `po-page-dynamic-table`, `po-page-dynamic-edit`, `po-page-dynamic-detail`, `po-page-change-password`, `po-page-blocked-user`, `po-modal-password-recovery`.
