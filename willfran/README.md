# willfran — Biblioteca HTML, CSS e JavaScript

Releitura completa e fiel de **100% dos componentes e templates oficiais do [PO UI](https://po-ui.io)** (Design System da TOTVS / Portinari) utilizando exclusivamente **HTML5 semântico, CSS3 moderno (Custom Properties / Tokens) e JavaScript puro (Vanilla)**, sem qualquer necessidade do framework Angular.

---

## 🚀 Como Usar no seu Projeto

### 1. Inclusão dos Arquivos
Basta copiar a pasta `willfran/` para seu projeto e importar as folhas de estilo e scripts:

`html
<!DOCTYPE html>
<html lang=pt-BR>
<head>
  <meta charset=UTF-8>
  <title>Minha Aplicação willfran</title>
  
  <!-- Fontes Oficiais -->
  <link rel=preconnect href=https://fonts.googleapis.com>
  <link rel=preconnect href=https://fonts.gstatic.com crossorigin>
  <link href=https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap rel=stylesheet>
  
  <!-- Estilos willfran -->
  <link rel=stylesheet href=willfran/css/willfran.css>
</head>
<body>

  <!-- Exemplo: Botão PO UI -->
  <button class=po-button primary>Ação Principal</button>

  <!-- Exemplo: Tag PO UI -->
  <span class=po-tag success>● Ativo</span>

  <!-- Ícones Lucide + Script willfran -->
  <script src=https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js></script>
  <script src=willfran/js/willfran.js></script>
</body>
</html>
`

---

## 🎨 Principais Tokens de Cores e Temas

`css
:root {
  --brand: #753399;        /* Roxo oficial PO UI / TOTVS */
  --brand-hover: #602580;
  --brand-soft: #f4eaf8;
  --ink: #24212a;          /* Texto principal */
  --muted: #6f6a75;        /* Texto secundário */
  --surface: #ffffff;      /* Superfície branca */
  --canvas: #f1eff3;       /* Fundo da tela */
  --line: #ddd9e0;         /* Bordas */
  --success: #168862;      /* Sucesso / Verde */
  --warning: #c86f0a;      /* Alerta / Laranja */
  --danger: #c83c4d;       /* Perigo / Vermelho */
  --radius: 6px;           /* Arredondamento padrão */
}
`

Para ativar o **Tema Escuro (Dark Mode)**, adicione data-theme=dark na tag <html>:
`html
<html lang=pt-BR data-theme=dark>
`

---

## 📦 Lista de Componentes Cobertos (+80 Componentes)

- **Navegação**: po-breadcrumb, po-context-tabs, po-menu, po-menu-panel, po-navbar, po-tabs, po-tree-view, po-stepper.
- **Ações**: po-button, po-button-group, po-context-menu, po-dropdown, po-link, po-popup, po-popover.
- **Formulários**: po-field, po-input, po-password, po-number, po-decimal, po-email, po-url, po-datepicker, po-datepicker-range, po-datetimepicker, po-timepicker, po-select, po-multiselect, po-combo, po-autocomplete, po-lookup, po-checkbox, po-checkbox-group, po-radio, po-radio-group, po-switch, po-textarea, po-upload, po-rich-text, po-search-ai, po-clean.
- **Dados**: po-table, po-chart, po-gauge, po-grid, po-info, po-list-view, po-listbox, po-dynamic-view, po-dynamic-form.
- **Feedback**: po-badge, po-disclaimer, po-disclaimer-group, po-filter-chip, po-loading, po-loading-overlay, po-progress, po-skeleton, po-tag, po-toaster.
- **Layout**: po-accordion, po-container, po-divider, po-header, po-modal, po-overlay, po-slide, po-toolbar, po-widget.
- **Utilidades**: po-avatar, po-calendar, po-helper, po-icon, po-image, po-label, po-logo, po-search, po-timer.
- **Templates de Página**: po-page-default, po-page-list, po-page-detail, po-page-edit, po-page-login, po-page-dynamic-table, po-page-dynamic-edit, po-page-dynamic-detail, po-page-change-password, po-page-blocked-user, po-modal-password-recovery.
