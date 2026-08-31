const groups = {
  'Navegação': [
    'po-breadcrumb', 'po-context-tabs', 'po-menu', 'po-menu-panel', 
    'po-navbar', 'po-tabs', 'po-tree-view', 'po-stepper'
  ],
  'Ações & Menus': [
    'po-button', 'po-button-group', 'po-context-menu', 'po-dropdown', 
    'po-link', 'po-popup', 'po-popover'
  ],
  'Formulários': [
    'po-field', 'po-input', 'po-password', 'po-number', 'po-decimal', 
    'po-email', 'po-url', 'po-datepicker', 'po-datepicker-range', 
    'po-datetimepicker', 'po-timepicker', 'po-select', 'po-multiselect', 
    'po-combo', 'po-autocomplete', 'po-lookup', 'po-checkbox', 
    'po-checkbox-group', 'po-radio', 'po-radio-group', 'po-switch', 
    'po-textarea', 'po-upload', 'po-rich-text', 'po-search-ai', 'po-clean'
  ],
  'Dados & Visualização': [
    'po-table', 'po-chart', 'po-gauge', 'po-grid', 'po-info', 
    'po-list-view', 'po-listbox', 'po-dynamic-view', 'po-dynamic-form'
  ],
  'Feedback': [
    'po-badge', 'po-disclaimer', 'po-disclaimer-group', 'po-filter-chip', 
    'po-loading', 'po-loading-overlay', 'po-progress', 'po-skeleton', 
    'po-tag', 'po-toaster'
  ],
  'Layout & Containers': [
    'po-accordion', 'po-container', 'po-divider', 'po-header', 
    'po-modal', 'po-overlay', 'po-slide', 'po-toolbar', 'po-widget'
  ],
  'Utilidades': [
    'po-avatar', 'po-calendar', 'po-helper', 'po-icon', 'po-image', 
    'po-label', 'po-logo', 'po-search', 'po-timer'
  ],
  'Templates de Página': [
    'po-page-default', 'po-page-list', 'po-page-detail', 'po-page-edit', 
    'po-page-login', 'po-page-dynamic-table', 'po-page-dynamic-edit', 
    'po-page-dynamic-detail', 'po-page-change-password', 'po-page-blocked-user', 
    'po-modal-password-recovery'
  ]
};

const descriptions = {
  // Navegação
  'po-breadcrumb': 'Trilha de navegação que indica a hierarquia e localização na aplicação.',
  'po-context-tabs': 'Abas contextuais para alternância rápida entre múltiplos registros ou instâncias.',
  'po-menu': 'Barra de navegação lateral com suporte a submenus e ícones.',
  'po-menu-panel': 'Painel de menu compacto para agrupamento de ações secundárias e navegação.',
  'po-navbar': 'Barra de navegação horizontal superior para módulos ou seções principais.',
  'po-tabs': 'Organiza e alterna conteúdos divididos em abas horizontais.',
  'po-tree-view': 'Estrutura hierárquica em árvore expansível para navegação de pastas ou itens.',
  'po-stepper': 'Guia de progresso sequencial para formulários de múltiplas etapas.',

  // Ações
  'po-button': 'Botão de disparo com variantes primária, secundária, terciária e perigo.',
  'po-button-group': 'Agrupamento visual e lógico de botões de ação relacionados.',
  'po-context-menu': 'Menu contextual acionado por clique ou menu suspenso em elementos.',
  'po-dropdown': 'Menu dropdown expansível com lista de opções e comandos executáveis.',
  'po-link': 'Hiperlink estilizado para navegação interna ou externa.',
  'po-popup': 'Janela flutuante ancorada para menus rápidos ou opções contextuais.',
  'po-popover': 'Container flutuante que exibe informações adicionais com seta indicativa.',

  // Formulários
  'po-field': 'Componente base com rótulo, container de entrada e texto de apoio.',
  'po-input': 'Campo de texto de linha única para digitação geral com suporte a limpeza.',
  'po-password': 'Campo para senhas e dados confidenciais com botão de alternar visibilidade.',
  'po-number': 'Campo de entrada numérico com controles de incremento e decremento.',
  'po-decimal': 'Entrada formatada para valores decimais e monetários com máscara brasileira.',
  'po-email': 'Campo validado para endereços de e-mail eletrônico.',
  'po-url': 'Campo validado para endereços web (URLs).',
  'po-datepicker': 'Seletor de data com calendário popup e máscara formatada (DD/MM/AAAA).',
  'po-datepicker-range': 'Seletor de intervalo de datas (período inicial e final).',
  'po-datetimepicker': 'Seletor combinado de data e horário em um único controle.',
  'po-timepicker': 'Seletor de horário com controle de horas e minutos.',
  'po-select': 'Menu de seleção simples entre múltiplas opções predefinidas.',
  'po-multiselect': 'Seleção de múltiplos itens com exibição em tags/chips removíveis.',
  'po-combo': 'Campo seletor com caixa de pesquisa e carregamento sob demanda.',
  'po-autocomplete': 'Sugestão dinâmica de termos conforme a digitação do usuário.',
  'po-lookup': 'Busca avançada com modal de pesquisa e seleção tabular de registros.',
  'po-checkbox': 'Caixa de seleção binária independente.',
  'po-checkbox-group': 'Grupo com múltiplas caixas de seleção independentes.',
  'po-radio': 'Botão de opção de seleção única.',
  'po-radio-group': 'Conjunto de opções mutuamente exclusivas.',
  'po-switch': 'Interruptor de alternância rápida entre ligado e desligado.',
  'po-textarea': 'Área de texto de múltiplas linhas para descrições e observações.',
  'po-upload': 'Área de envio de arquivos com suporte a arrastar e soltar (drag & drop).',
  'po-rich-text': 'Editor de texto rico com barra de formatação (negrito, itálico, listas).',
  'po-search-ai': 'Campo de busca inteligente integrado com IA generativa e prompts.',
  'po-clean': 'Ação integrada em campos de formulário para limpeza imediata do valor digitado.',

  // Dados & Visualização
  'po-table': 'Tabela de dados completa com ordenação, seleção por linha, status e ações.',
  'po-chart': 'Gráficos analíticos objetivos (barras, colunas, pizza e rosca).',
  'po-gauge': 'Medidor circular ou linear para metas e percentuais de desempenho.',
  'po-grid': 'Sistema de grid responsivo de 12 colunas para distribuição de layout.',
  'po-info': 'Apresentação em par de chave-valor (rótulo superior e valor destacado).',
  'po-list-view': 'Lista de cartões ou itens de registros com visualização resumida.',
  'po-listbox': 'Caixa de seleção de itens em lista vertical com destaque selecionado.',
  'po-dynamic-view': 'Renderizador dinâmico de visualização de dados a partir de esquema JSON.',
  'po-dynamic-form': 'Geração automática de formulários completos a partir de metadados JSON.',

  // Feedback
  'po-badge': 'Indicador numérico ou de contagem compacto para notificações e status.',
  'po-disclaimer': 'Etiqueta de filtro aplicado removível com botão de exclusão.',
  'po-disclaimer-group': 'Agrupador de disclaimers e critérios de filtros ativos com ação de limpar.',
  'po-filter-chip': 'Chip de filtragem rápida tipo botão toggle para segmentação de dados.',
  'po-loading': 'Indicador giratório de operação em andamento oficial do PO UI.',
  'po-loading-overlay': 'Bloqueio total ou parcial da tela com indicador de carregamento e mensagem.',
  'po-progress': 'Barra de progresso visual de conclusão de tarefas em percentual.',
  'po-skeleton': 'Esqueleto com animação de brilho para reserva de espaço antes do carregamento.',
  'po-tag': 'Etiqueta semântica colorida para indicação de status (sucesso, aviso, erro, info).',
  'po-toaster': 'Notificação temporária flutuante (toast) com variantes informativas e auto-fechamento.',

  // Layout
  'po-accordion': 'Painel expansível em sanfona para agrupamento de seções de conteúdo.',
  'po-container': 'Container estrutural com bordas e espaçamento padronizado para blocos de UI.',
  'po-divider': 'Linha divisória horizontal ou vertical com opção de texto central.',
  'po-header': 'Cabeçalho contextual de área com título, subtítulo e ações.',
  'po-modal': 'Janela modal sobreposta com bloqueio de foco para decisões e formulários.',
  'po-overlay': 'Camada de sobreposição escura para foco e controle de segundo plano.',
  'po-slide': 'Carrossel de slides com navegação por indicadores para destaques e banners.',
  'po-toolbar': 'Barra superior com logotipo, busca e atalhos de perfil do usuário.',
  'po-widget': 'Cartão de dashboard funcional para KPIs, métricas e resumos rápidos.',

  // Utilidades
  'po-avatar': 'Representação visual de usuário ou entidade com imagem ou iniciais.',
  'po-calendar': 'Calendário interativo mensal para seleção de dias com destaques.',
  'po-helper': 'Texto explicativo ou dica de ajuda contextual para orientação do usuário.',
  'po-icon': 'Biblioteca de ícones SVG vetorizados e responsivos.',
  'po-image': 'Componente de imagem com tratamento de fallback e proporção controlada.',
  'po-label': 'Rótulo textual tipográfico padronizado para elementos e formulários.',
  'po-logo': 'Logotipo institucional da TOTVS e marcas do ecossistema PO UI.',
  'po-search': 'Campo de busca rápido com disparo instantâneo e botão de limpeza.',
  'po-timer': 'Temporizador e cronômetro digital em formato MM:SS com controles de pausar/reset.',

  // Templates
  'po-page-default': 'Template de página padrão com cabeçalho, ações globais e área de conteúdo.',
  'po-page-list': 'Template completo de listagem com barra de busca, filtros avançados e tabela.',
  'po-page-detail': 'Template estruturado para exibição detalhada de um registro com abas e histórico.',
  'po-page-edit': 'Template para criação ou edição de registros com ações de salvar e cancelar.',
  'po-page-login': 'Tela de autenticação completa com plano de fundo, logo e recuperação de senha.',
  'po-page-dynamic-table': 'Template de tabela dinâmica alimentada automaticamente por JSON.',
  'po-page-dynamic-edit': 'Template de formulário de edição gerado automaticamente por JSON.',
  'po-page-dynamic-detail': 'Template de página de detalhes gerada dinamicamente a partir de schema.',
  'po-page-change-password': 'Template para troca obrigatória ou voluntária de senha de acesso.',
  'po-page-blocked-user': 'Template de tela de aviso para usuários temporariamente bloqueados.',
  'po-modal-password-recovery': 'Modal especializado para envio de link de recuperação de senha por e-mail.'
};

const icons = {
  'Navegação': 'route',
  'Ações & Menus': 'mouse-pointer-click',
  'Formulários': 'text-cursor-input',
  'Dados & Visualização': 'chart-no-axes-column',
  'Feedback': 'message-circle-more',
  'Layout & Containers': 'layout-dashboard',
  'Utilidades': 'wrench',
  'Templates de Página': 'layout-template'
};

const components = Object.entries(groups).flatMap(([category, names]) =>
  names.map(name => ({
    name,
    category,
    description: descriptions[name] || 'Componente reutilizável do PO UI Vanilla.'
  }))
);

const state = {
  query: '',
  filter: 'Todos',
  current: null,
  codeLanguage: 'html',
  timerSeconds: 65,
  timerId: null
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const nav = $('#componentNav');
const grid = $('#componentGrid');
const search = $('#globalSearch');

function displayName(name) {
  return name.replace('po-', '').split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  })[char]);
}

function icon(name, label = '') {
  return `<i data-lucide="${name}"${label ? ` aria-label="${label}"` : ' aria-hidden="true"'}></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { 'stroke-width': 1.9 } });
  }
}

function renderNavigation() {
  nav.innerHTML = Object.entries(groups).map(([group, names]) => `
    <div class="nav-group">
      <span class="nav-group-title">${group}</span>
      ${names.map(name => `
        <button class="nav-item" data-component="${name}">
          <span class="nav-icon">${icon(icons[group] || 'circle')}</span>
          ${displayName(name)}
        </button>
      `).join('')}
    </div>
  `).join('');
  $('#componentCount').textContent = components.length;
  $('#heroCount').textContent = components.length;
  refreshIcons();
}

function renderFilters() {
  const values = ['Todos', ...Object.keys(groups)];
  $('#filters').innerHTML = values.map(value => `
    <button class="filter-button ${value === state.filter ? 'active' : ''}" data-filter="${value}">
      ${value}
    </button>
  `).join('');
}

function renderGrid() {
  const query = state.query.trim().toLowerCase();
  const list = components.filter(item =>
    (state.filter === 'Todos' || item.category === state.filter) &&
    (!query || `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query))
  );

  grid.innerHTML = list.map((item, index) => `
    <article class="component-card" data-component="${item.name}" tabindex="0" style="animation-delay:${Math.min(index * 15, 300)}ms">
      <span class="card-icon">${icon(icons[item.category] || 'box')}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <small>${item.category}</small>
    </article>
  `).join('');

  $('#emptyState').hidden = list.length > 0;
  refreshIcons();
}

function showHome(scrollToCatalog = false) {
  state.current = null;
  $('#homeView').hidden = false;
  $('#detailView').hidden = true;
  $$('.nav-item').forEach(item => item.classList.remove('active'));
  history.replaceState({}, '', '#/inicio');
  if (scrollToCatalog) {
    setTimeout(() => $('#catalog').scrollIntoView({ behavior: 'smooth' }), 20);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  refreshIcons();
}

function openComponent(name) {
  const component = components.find(item => item.name === name);
  if (!component) return;

  state.current = component;
  $('#homeView').hidden = true;
  $('#detailView').hidden = false;
  $('#detailCategory').textContent = component.category;
  $('#detailTitle').textContent = component.name;
  $('#detailDescription').textContent = component.description;

  $('#componentPreview').innerHTML = createPreview(name);
  state.codeLanguage = 'html';
  updateCodeView();

  $$('.code-languages button').forEach(button => {
    const active = button.dataset.language === 'html';
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active);
  });

  $$('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.component === name);
  });

  $$('.detail-tabs button').forEach((tab, index) => {
    tab.classList.toggle('active', index === 0);
    tab.setAttribute('aria-selected', index === 0);
  });

  $$('.tab-panel').forEach((panel, index) => {
    panel.classList.toggle('active', index === 0);
  });

  history.replaceState({}, '', `#/componente/${name}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  bindPreviewEvents(name);
  refreshIcons();
}

function field(label, input, helper = '', required = false) {
  return `
    <label class="po-field">
      <span class="${required ? 'required' : ''}">${label}</span>
      ${input}
      ${helper ? `<small>${helper}</small>` : ''}
    </label>
  `;
}

function wrap(content, title = 'Exemplo Interativo') {
  return `<div class="showcase"><h3 class="showcase-title">${title}</h3>${content}</div>`;
}

function calendarHTML() {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  return `
    <div class="po-calendar">
      <div class="calendar-head">
        <button class="icon-button" style="width:28px;height:28px">‹</button>
        <span>Agosto 2026</span>
        <button class="icon-button" style="width:28px;height:28px">›</button>
      </div>
      <div class="calendar-grid">
        ${days.map(d => `<span class="day-name">${d}</span>`).join('')}
        ${Array.from({ length: 35 }, (_, i) => `
          <span class="${i === 29 ? 'today' : ''}">${i < 5 ? '' : i - 4}</span>
        `).join('')}
      </div>
    </div>
  `;
}

function createPreview(name) {
  // Previews customizados para cada componente
  const previews = {
    // 1. AÇÕES & MENUS
    'po-button': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Button Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Button Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          <div class="showcase-row" style="margin-bottom:12px">
            <button class="po-button primary" data-toast="Ação primária disparada!"><i data-lucide="check"></i> Primário (Primary)</button>
            <button class="po-button" data-toast="Ação secundária disparada!">Secundário (Default)</button>
            <button class="po-button ghost" data-toast="Ação terciária disparada!">Terciário (Ghost)</button>
            <button class="po-button danger" data-toast="Ação de exclusão disparada!"><i data-lucide="trash-2"></i> Perigo (Danger)</button>
            <button class="po-button success" data-toast="Registro aprovado com sucesso!"><i data-lucide="shield-check"></i> Sucesso (Success)</button>
            <button class="po-button" disabled><i data-lucide="lock"></i> Desabilitado</button>
          </div>
          <div class="showcase-row">
            <button class="po-button sm primary"><i data-lucide="plus"></i> Pequeno (SM)</button>
            <button class="po-button primary"><i data-lucide="save"></i> Médio (MD)</button>
            <button class="po-button lg primary"><i data-lucide="sparkles"></i> Grande (LG)</button>
            <button class="po-button is-loading primary">Carregando...</button>
            <button class="po-button icon-only primary" title="Download"><i data-lucide="download"></i></button>
          </div>
        </div>

        <!-- Sample 2: PO Button Labs -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">2. PO Button Labs (Laboratório Interativo)</h4>
            <span class="po-tag brand">Interativo</span>
          </div>
          
          <div style="display:grid;place-items:center;padding:28px 20px;background:var(--surface-2);border-radius:6px;border:1px dashed var(--line);margin-bottom:18px">
            <button id="labsButtonTarget" class="po-button primary" data-toast="Botão do laboratório clicado!">
              <i id="labsButtonIcon" data-lucide="check"></i>
              <span id="labsButtonLabel">PO Button Labs</span>
            </button>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;padding-top:10px;border-top:1px solid var(--line)">
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Texto do Botão (Label)</label>
              <input class="po-control" id="labsInputLabel" value="PO Button Labs" placeholder="Digite o texto...">
            </div>

            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Tipo (Kind)</label>
              <div style="display:flex;gap:12px;margin-top:6px">
                <label class="po-radio"><input type="radio" name="labsKind" value="primary" checked> Primário</label>
                <label class="po-radio"><input type="radio" name="labsKind" value="secondary"> Secundário</label>
                <label class="po-radio"><input type="radio" name="labsKind" value="tertiary"> Terciário</label>
              </div>
            </div>

            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Tamanho (Size)</label>
              <div style="display:flex;gap:12px;margin-top:6px">
                <label class="po-radio"><input type="radio" name="labsSize" value="sm"> Small</label>
                <label class="po-radio"><input type="radio" name="labsSize" value="md" checked> Medium</label>
                <label class="po-radio"><input type="radio" name="labsSize" value="lg"> Large</label>
              </div>
            </div>

            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Propriedades / Estados</label>
              <div style="display:flex;gap:12px;margin-top:6px;flex-wrap:wrap">
                <label class="po-checkbox"><input type="checkbox" id="labsPropDanger"> Danger</label>
                <label class="po-checkbox"><input type="checkbox" id="labsPropLoading"> Loading</label>
                <label class="po-checkbox"><input type="checkbox" id="labsPropDisabled"> Disabled</label>
              </div>
            </div>

            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Ícone</label>
              <select class="po-control" id="labsSelectIcon">
                <option value="check">Check (Confirmar)</option>
                <option value="plus">Plus (Adicionar)</option>
                <option value="search">Search (Buscar)</option>
                <option value="trash-2">Trash (Excluir)</option>
                <option value="download">Download (Baixar)</option>
                <option value="send">Send (Enviar)</option>
                <option value="none">Nenhum</option>
              </select>
            </div>
          </div>

          <div style="margin-top:16px;text-align:right">
            <button class="po-button sm ghost" id="labsRestoreBtn"><i data-lucide="rotate-ccw"></i> Restaurar Padrões</button>
          </div>
        </div>

        <!-- Sample 3: PO Button Social Network -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">3. PO Button Social Network</h4>
            <span class="po-tag">Amostra Real</span>
          </div>

          <div class="po-widget" style="max-width:520px;margin:auto">
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
              <span class="po-avatar lg" style="background:#753399;font-size:18px">RS</span>
              <div>
                <b style="font-size:16px;color:var(--ink);display:block">Rodrigo Silva</b>
                <span style="font-size:12px;color:var(--muted)">14 amigos em comum · São Paulo/SP</span>
              </div>
            </div>

            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <button class="po-button sm primary" data-toast="Solicitação de amizade aceita!"><i data-lucide="check-circle"></i> Confirmar</button>
              <button class="po-button sm" data-toast="Solicitação ignorada."><i data-lucide="eye-off"></i> Ignorar</button>
              <button class="po-button sm danger ghost" data-toast="Usuário bloqueado com sucesso."><i data-lucide="ban"></i> Bloquear</button>
            </div>
          </div>
        </div>
      </div>
    `, 'PO Button: Basic, Labs e Social Network'),

    'po-button-group': wrap(`
      <div class="showcase-stack">
        <div>
          <h4 style="margin:0 0 10px;font-size:13px;color:var(--muted)">Seleção de Período</h4>
          <div class="po-button-group">
            <button class="po-button active">Hoje</button>
            <button class="po-button">Últimos 7 dias</button>
            <button class="po-button">Mensal</button>
            <button class="po-button">Anual</button>
          </div>
        </div>

        <div>
          <h4 style="margin:0 0 10px;font-size:13px;color:var(--muted)">Alternador de Visualização</h4>
          <div class="po-button-group">
            <button class="po-button active"><i data-lucide="layout-grid"></i> Grade</button>
            <button class="po-button"><i data-lucide="list"></i> Lista</button>
            <button class="po-button"><i data-lucide="table"></i> Tabela</button>
          </div>
        </div>
      </div>
    `, 'Grupo de Botões (Button Group)'),

    'po-dropdown': wrap(`
      <div class="showcase-stack">
        <div class="dropdown-wrap">
          <button class="po-button primary" data-dropdown>
            <span>Gerenciar Registro</span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="po-dropdown-menu" hidden>
            <div class="po-dropdown-header">Ações Principais</div>
            <button data-toast="Editando registro..."><i data-lucide="pencil"></i> Editar Dados <kbd>Ctrl+E</kbd></button>
            <button data-toast="Duplicando registro..."><i data-lucide="copy"></i> Duplicar <kbd>Ctrl+D</kbd></button>
            <button data-toast="Relatório gerado!"><i data-lucide="file-text"></i> Exportar Relatório PDF</button>
            <div class="po-dropdown-divider"></div>
            <div class="po-dropdown-header">Zona Crítica</div>
            <button class="danger" data-toast="Registro transferido para a lixeira!"><i data-lucide="trash-2"></i> Excluir Definitivamente</button>
          </div>
        </div>
      </div>
    `, 'Menu Dropdown com Atalhos e Divisores'),

    'po-context-menu': wrap(`
      <div class="showcase-stack">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:var(--surface-2);border-radius:var(--radius);border:1px solid var(--line)">
          <div style="display:flex;align-items:center;gap:12px">
            <span class="po-avatar sm">CA</span>
            <div>
              <b style="color:var(--ink)">Contrato de Prestação de Serviços #849</b>
              <div style="font-size:11px;color:var(--muted)">Atualizado há 15 minutos por Marina Almeida</div>
            </div>
          </div>
          <div class="dropdown-wrap">
            <button class="po-button icon-only ghost sm" data-dropdown aria-label="Menu do item"><i data-lucide="more-vertical"></i></button>
            <div class="po-dropdown-menu" hidden style="right:0;left:auto">
              <button data-toast="Abrindo visualizador..."><i data-lucide="eye"></i> Visualizar Detalhes</button>
              <button data-toast="Link de compartilhamento copiado!"><i data-lucide="share-2"></i> Compartilhar Link</button>
              <button data-toast="Download iniciado..."><i data-lucide="download"></i> Baixar Anexo</button>
              <div class="po-dropdown-divider"></div>
              <button class="danger" data-toast="Item revogado!"><i data-lucide="shield-x"></i> Revogar Permissões</button>
            </div>
          </div>
        </div>
      </div>
    `, 'Menu Contextual em Linha de Registro'),

    'po-link': wrap(`
      <div class="showcase-stack">
        <p>Utilize links PO UI para navegar entre páginas ou para referências externas com transição suave:</p>
        <div class="showcase-row">
          <a href="#/componente/po-table" class="po-link"><i data-lucide="arrow-right"></i> Ir para a Tabela de Dados</a>
          <a href="https://po-ui.io/documentation" target="_blank" class="po-link">Documentação Oficial TOTVS <i data-lucide="external-link"></i></a>
        </div>
      </div>
    `, 'Hiperlinks Estilizados (PO Link)'),

    'po-popup': wrap(`
      <div class="dropdown-wrap">
        <button class="po-button" data-dropdown>
          <i data-lucide="layers"></i>
          <span>Exibir Painel Rápido</span>
        </button>
        <div class="po-dropdown-menu" hidden style="min-width:260px;padding:16px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;font-weight:700;color:var(--brand)">
            <i data-lucide="info"></i>
            <span>Painel de Informações</span>
          </div>
          <p style="margin:0 0 12px;font-size:12px;color:var(--muted);line-height:1.5">
            Você tem <b>3 notificações prioritárias</b> pendentes de aprovação na fila fiscal.
          </p>
          <button class="po-button sm primary" style="width:100%" data-toast="Navegando para fila fiscal...">Verificar Pendências</button>
        </div>
      </div>
    `, 'Popup Flutuante Ancorado'),

    'po-popover': wrap(`
      <div class="popover-wrap">
        <button class="po-button ghost" data-popover>
          <i data-lucide="help-circle"></i>
          <span>Como funciona a conciliação?</span>
        </button>
        <div class="po-popover" hidden>
          <div class="po-popover-title">
            <i data-lucide="badge-percent" style="color:var(--brand)"></i>
            <span>Regras de Conciliação</span>
          </div>
          <div class="po-popover-body">
            A conciliação bancária é processada automaticamente às 00:00 de cada dia útil, validando extratos OFX e webhooks.
          </div>
          <div class="po-popover-actions">
            <button class="po-button sm ghost" data-popover-close>Fechar</button>
            <button class="po-button sm primary" data-toast="Abrindo manual de regras...">Ver Manual</button>
          </div>
        </div>
      </div>
    `, 'Popover Contextual Interativo'),

    // 2. FORMULÁRIOS
    'po-field': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Field Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <h4 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--brand)">1. PO Field Basic</h4>
          ${field('Razão Social da Empresa', '<input class="po-control" placeholder="Ex: TOTVS S/A">', 'Informe o nome completo conforme registro na Receita Federal.', true)}
        </div>
      </div>
    `, 'Estrutura Base de Campo (PO Field)'),

    'po-input': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Input Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Input Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          ${field('Nome Completo', `
            <div class="po-input-group">
              <input class="po-control" id="inputBasicDemo" value="Marina Silva Almeida" placeholder="Digite seu nome completo">
              <button class="po-clean-btn" id="cleanInputBasicBtn" title="Limpar">${icon('x')}</button>
            </div>
          `, 'Como gostaria de ser chamado no sistema?')}
        </div>

        <!-- Sample 2: PO Input Labs -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">2. PO Input Labs</h4>
            <span class="po-tag brand">Interativo</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:14px">
            ${field('Campo de Teste', '<input class="po-control" id="labsInputTarget" placeholder="Digite aqui...">', 'Valores sincronizados em tempo real.')}
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Propriedades</label>
              <div style="display:flex;gap:12px;margin-top:8px">
                <label class="po-checkbox"><input type="checkbox" id="labsInputReq"> Obrigatório (*)</label>
                <label class="po-checkbox"><input type="checkbox" id="labsInputDis"> Desabilitado</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    `, 'PO Input: Basic, Limpeza e Labs'),

    'po-password': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Password Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Password Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          ${field('Senha de Acesso', `
            <div class="po-input-group">
              <input class="po-control" type="password" id="passwordDemo" value="Totvs@2026">
              <button class="po-addon-btn" id="togglePassword" aria-label="Alternar visibilidade">${icon('eye')}</button>
            </div>
          `, 'Mínimo de 8 caracteres incluindo letras maiúsculas, minúsculas e símbolos.', true)}
        </div>

        <!-- Sample 2: PO Password Real World (Login Corporativo) -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">2. PO Password Login Corporativo</h4>
            <span class="po-tag success">Caso Real</span>
          </div>
          <div style="max-width:380px;margin:auto;display:grid;gap:12px">
            ${field('E-mail Corporativo', '<input class="po-control" type="email" value="admin@totvs.com.br">')}
            ${field('Senha', `
              <div class="po-input-group">
                <input class="po-control" type="password" id="loginPassInput" value="Portinari#2026">
                <button class="po-addon-btn" id="toggleLoginPass">${icon('eye')}</button>
              </div>
            `)}
            <button class="po-button primary full-width" data-toast="Autenticação efetuada com sucesso!"><i data-lucide="log-in"></i> Entrar no Portal</button>
          </div>
        </div>
      </div>
    `, 'PO Password: Basic e Login Corporativo'),

    'po-number': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <h4 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--brand)">1. PO Number Basic</h4>
          ${field('Quantidade de Licenças', '<input class="po-control" type="number" value="15" min="1" max="500">', 'Número de acessos simultâneos contratados.')}
        </div>
      </div>
    `, 'Campo Numérico (PO Number)'),

    'po-decimal': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <h4 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--brand)">1. PO Decimal / Moeda</h4>
          ${field('Valor Unitário do Contrato (R$)', '<input class="po-control" value="8.450,00" style="text-align:right">', 'Formatação monetária padrão brasileira (BRL).')}
        </div>
      </div>
    `, 'Campo Decimal / Monetário'),

    'po-email': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <h4 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--brand)">1. PO Email</h4>
          ${field('E-mail Corporativo', '<input class="po-control" type="email" placeholder="usuario@totvs.com.br">', 'Enviaremos a confirmação para este e-mail.', true)}
        </div>
      </div>
    `, 'Campo de E-mail'),

    'po-url': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <h4 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--brand)">1. PO URL</h4>
          ${field('Website Oficial', '<input class="po-control" type="url" value="https://po-ui.io">', 'URL completa iniciando com https://')}
        </div>
      </div>
    `, 'Campo de URL'),

    'po-datepicker': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Datepicker Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          ${field('Data de Vencimento', '<input class="po-control" type="date" value="2026-08-30">', 'Formato oficial PO UI')}
        </div>
      </div>
    `, 'Seletor de Data (PO Datepicker)'),

    'po-datepicker-range': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Datepicker Range (Período)</h4>
            <span class="po-tag success">Filtro de Período</span>
          </div>
          <div class="showcase-row" style="gap:14px">
            <div style="flex:1">${field('Data Inicial', '<input class="po-control" type="date" value="2026-08-01">')}</div>
            <div style="flex:1">${field('Data Final', '<input class="po-control" type="date" value="2026-08-31">')}</div>
          </div>
        </div>
      </div>
    `, 'Intervalo de Datas (PO Datepicker Range)'),

    'po-select': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Select Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          ${field('Unidade Federativa (UF)', `
            <select class="po-control">
              <option value="SP">São Paulo (SP)</option>
              <option value="RJ">Rio de Janeiro (RJ)</option>
              <option value="MG">Minas Gerais (MG)</option>
              <option value="CE" selected>Ceará (CE)</option>
              <option value="PR">Paraná (PR)</option>
            </select>
          `, 'Selecione o estado do cliente')}
        </div>
      </div>
    `, 'Menu Seletor (PO Select)'),

    'po-multiselect': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Multiselect com Tags</h4>
            <span class="po-tag brand">Seleção Múltipla</span>
          </div>
          ${field('Módulos Habilitados', `
            <div class="po-multiselect-tags" id="multiselectContainer">
              <span class="po-tag brand">Faturamento <button class="multiselect-remove">×</button></span>
              <span class="po-tag brand">Financeiro <button class="multiselect-remove">×</button></span>
              <span class="po-tag brand">Estoque <button class="multiselect-remove">×</button></span>
              <span class="po-tag brand">RH <button class="multiselect-remove">×</button></span>
            </div>
          `, 'Remova tags clicando no X')}
        </div>
      </div>
    `, 'Seleção Múltipla (PO Multiselect)'),

    'po-switch': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Switch Basic & Labs -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Switch Basic</h4>
            <span class="po-tag">Interruptor</span>
          </div>
          <div style="display:grid;gap:14px">
            <div class="showcase-row">
              <label class="po-switch"><input type="checkbox" id="switchDemo1" checked><i></i></label>
              <span id="switchStatusText1">Notificações em tempo real: <b>Ativadas</b></span>
            </div>
            <div class="showcase-row">
              <label class="po-switch"><input type="checkbox" id="switchDemo2"><i></i></label>
              <span id="switchStatusText2">Sincronização em nuvem: <b>Desativada</b></span>
            </div>
          </div>
        </div>
      </div>
    `, 'Interruptor de Estado (PO Switch)'),

    'po-checkbox': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <h4 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--brand)">1. PO Checkbox</h4>
          <div style="display:grid;gap:10px">
            <label class="po-checkbox"><input type="checkbox" checked> Aceito os termos de uso e privacidade de dados</label>
            <label class="po-checkbox"><input type="checkbox"> Desejo receber notificações fiscais por e-mail</label>
            <label class="po-checkbox"><input type="checkbox" disabled> Acesso restrito a administradores</label>
          </div>
        </div>
      </div>
    `, 'Caixas de Seleção (PO Checkbox)'),

    'po-radio': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <h4 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--brand)">1. PO Radio Group</h4>
          <div class="po-radio-group" style="display:flex;gap:20px">
            <label class="po-radio"><input type="radio" name="planType" checked> Faturamento Mensal</label>
            <label class="po-radio"><input type="radio" name="planType"> Semestral (-10%)</label>
            <label class="po-radio"><input type="radio" name="planType"> Anual (-25%)</label>
          </div>
        </div>
      </div>
    `, 'Botões de Opção (PO Radio)'),

    'po-upload': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Upload Drag & Drop</h4>
            <span class="po-tag success">Envio de Arquivos</span>
          </div>
          <div class="po-upload" id="dropAreaDemo">
            ${icon('cloud-upload')}
            <p>Arraste e solte documentos aqui ou</p>
            <label for="uploadFileDemo">procure no computador</label>
            <input id="uploadFileDemo" type="file" multiple>
            <small id="uploadStatusText">Formatos aceitos: PDF, PNG, JPG, XML (máx. 25MB)</small>
          </div>
        </div>
      </div>
    `, 'Envio de Arquivos (PO Upload)'),

    'po-rich-text': wrap(`
      <div class="rich-toolbar">
        <button data-cmd="bold" title="Negrito"><b>B</b></button>
        <button data-cmd="italic" title="Itálico"><i>I</i></button>
        <button data-cmd="underline" title="Sublinhado"><u>U</u></button>
        <button data-cmd="insertUnorderedList" title="Lista">• Lista</button>
      </div>
      <div class="rich-editor" contenteditable="true">
        Digite e formate o texto diretamente neste editor rich text compatível com PO UI.
      </div>
    `, 'Editor de Texto Formatado (Rich Text)'),

    'po-search-ai': wrap(`
      <div class="showcase-stack">
        <div class="po-input-addon">
          <input placeholder="Pergunte ao assistente de IA ou busque relatórios..." style="border-color:var(--brand)">
          <button class="po-button primary"><i data-lucide="sparkles"></i> Gerar IA</button>
        </div>
        <small style="color:var(--muted)">Exemplos: “Criar resumo do cliente Clínica Aurora”, “Listar vendas de agosto”</small>
      </div>
    `, 'Busca Inteligente com IA (Search AI)'),

    'po-clean': wrap(`
      <div class="showcase-stack">
        ${field('Pesquisar Registros', `
          <div class="po-input-group">
            <input id="cleanDemoInput" value="Termo preenchido para demonstrar limpeza">
            <button class="po-clean-btn" id="cleanDemoBtn" title="Limpar campo">${icon('x')}</button>
          </div>
        `, 'Clique no botão X para limpar instantaneamente')}
      </div>
    `, 'Ação de Limpeza Integrada (Clean)'),

    // 3. DADOS & VISUALIZAÇÃO
    'po-table': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Table Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Table Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          <div style="overflow:auto">
            <table class="po-table">
              <thead>
                <tr>
                  <th style="width:40px"><input type="checkbox" id="selectAllDemo"></th>
                  <th>Código</th>
                  <th>Cliente</th>
                  <th>Cidade</th>
                  <th>Status</th>
                  <th>Valor Total</th>
                  <th style="text-align:right">Ações</th>
                </tr>
              </thead>
              <tbody id="tableDemoBody">
                <tr>
                  <td><input type="checkbox" checked></td>
                  <td><b>PED-0820</b></td>
                  <td>Clínica Aurora Saúde</td>
                  <td>Fortaleza/CE</td>
                  <td><span class="po-tag success">● Faturado</span></td>
                  <td>R$ 14.820,00</td>
                  <td style="text-align:right"><button class="po-button sm ghost" data-toast="Visualizando pedido PED-0820"><i data-lucide="eye"></i> Detalhes</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox"></td>
                  <td><b>PED-0821</b></td>
                  <td>Mercado Central Distribuição</td>
                  <td>Recife/PE</td>
                  <td><span class="po-tag warning">● Pendente</span></td>
                  <td>R$ 6.190,00</td>
                  <td style="text-align:right"><button class="po-button sm ghost" data-toast="Visualizando pedido PED-0821"><i data-lucide="eye"></i> Detalhes</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox"></td>
                  <td><b>PED-0822</b></td>
                  <td>Studio Norte Arquitetura</td>
                  <td>São Paulo/SP</td>
                  <td><span class="po-tag brand">● Novo</span></td>
                  <td>R$ 8.450,00</td>
                  <td style="text-align:right"><button class="po-button sm ghost" data-toast="Visualizando pedido PED-0822"><i data-lucide="eye"></i> Detalhes</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;font-size:12px;color:var(--muted)">
            <span>Mostrando 3 de 42 pedidos fiscais</span>
            <div class="po-button-group">
              <button class="po-button sm ghost">‹ Anterior</button>
              <button class="po-button sm ghost active">1</button>
              <button class="po-button sm ghost">2</button>
              <button class="po-button sm ghost">3</button>
              <button class="po-button sm ghost">Próximo ›</button>
            </div>
          </div>
        </div>
      </div>
    `, 'PO Table: Basic, Seleção e Ações em Linha'),

    'po-chart': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Chart Performance</h4>
            <span class="po-tag">Gráficos</span>
          </div>
          <div class="po-chart" aria-label="Gráfico de barras">
            <i style="height:35%" title="Jan: R$ 35k"></i>
            <i style="height:55%" title="Fev: R$ 55k"></i>
            <i style="height:48%" title="Mar: R$ 48k"></i>
            <i style="height:82%" title="Abr: R$ 82k"></i>
            <i style="height:70%" title="Mai: R$ 70k"></i>
            <i style="height:95%" title="Jun: R$ 95k"></i>
            <i style="height:78%" title="Jul: R$ 78k"></i>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);text-transform:uppercase;margin-top:8px">
            <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span>
          </div>
        </div>
      </div>
    `, 'Gráfico de Desempenho (PO Chart)'),

    'po-gauge': wrap(`
      <div class="showcase-stack" style="text-align:center">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div class="po-gauge" data-value="78%"></div>
          <b style="font-size:16px;color:var(--ink);margin-top:8px;display:block">Meta Comercial Trimestral</b>
          <small style="color:var(--success);font-weight:700">↑ 14.5% acima da média prevista</small>
        </div>
      </div>
    `, 'Medidor Circular (PO Gauge)'),

    'po-grid': wrap(`
      <div class="grid-demo">
        <span>3 colunas</span>
        <span>3 colunas</span>
        <span>6 colunas</span>
        <span>4 colunas</span>
        <span>4 colunas</span>
        <span>4 colunas</span>
        <span>12 colunas (largura total)</span>
      </div>
    `, 'Grid de 12 Colunas Responsivo'),

    'po-info': wrap(`
      <div class="showcase-row" style="justify-content:space-between;gap:20px">
        <div class="po-info"><span>Razão Social</span><b>Clínica Aurora Saúde S/A</b></div>
        <div class="po-info"><span>CNPJ</span><b>12.345.678/0001-90</b></div>
        <div class="po-info"><span>Regime Tributário</span><b>Lucro Presumido</b></div>
        <div class="po-info"><span>Status</span><b style="color:var(--success)">Regular</b></div>
      </div>
    `, 'Exibição de Pares Rótulo-Valor (PO Info)'),

    'po-list-view': wrap(`
      <div class="po-listbox">
        <button class="selected">
          <span class="po-avatar">CA</span>
          <div style="flex:1">
            <b>Clínica Aurora Saúde</b>
            <div style="font-size:11px;color:var(--muted)">Fortaleza/CE · 18 contratos ativos</div>
          </div>
          <span class="po-tag success">Ativo</span>
        </button>
        <button>
          <span class="po-avatar" style="background:#2d82b7">MC</span>
          <div style="flex:1">
            <b>Mercado Central Distribuição</b>
            <div style="font-size:11px;color:var(--muted)">Recife/PE · 6 contratos ativos</div>
          </div>
          <span class="po-tag warning">Pendente</span>
        </button>
      </div>
    `, 'Lista de Registros (PO List View)'),

    'po-listbox': wrap(`
      <div class="po-listbox">
        <button class="selected"><span class="po-avatar sm">MA</span> Marina Almeida (Gerente de Projetos)</button>
        <button><span class="po-avatar sm">CS</span> Caio Silva (Desenvolvedor Sênior)</button>
        <button><span class="po-avatar sm">RO</span> Rafaela Oliveira (Tech Lead)</button>
        <button><span class="po-avatar sm">TL</span> Thiago Lima (Designer UI/UX)</button>
      </div>
    `, 'Caixa de Lista Selecionável (PO Listbox)'),

    'po-dynamic-form': wrap(`
      <div class="showcase-stack">
        ${field('Nome do Produto', '<input class="po-control" value="TOTVS Fluig Platform">')}
        <div class="showcase-row">
          <div style="flex:1">${field('Categoria', '<select class="po-control"><option>Software</option><option>Serviços</option></select>')}</div>
          <div style="flex:1">${field('Preço (R$)', '<input class="po-control" value="8.900,00">')}</div>
        </div>
        <label class="po-checkbox"><input type="checkbox" checked> Disponível para venda online</label>
        <button class="po-button primary" data-toast="Formulário dinâmico validado e salvo!"><i data-lucide="save"></i> Salvar Formulário</button>
      </div>
    `, 'Formulário Gerado por Metadados JSON'),

    'po-dynamic-view': wrap(`
      <div class="po-widget">
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:16px">
          <div class="po-info"><span>Nome do Item</span><b>TOTVS Protheus ERP</b></div>
          <div class="po-info"><span>Versão Atual</span><b>12.1.2410</b></div>
          <div class="po-info"><span>Suporte</span><b style="color:var(--success)">Ativo 24/7</b></div>
          <div class="po-info"><span>Última Atualização</span><b>18/08/2026</b></div>
        </div>
      </div>
    `, 'Visualização Dinâmica de Metadados'),

    // 4. FEEDBACK
    'po-badge': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Badge Basic & Cores Semânticas</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          <div class="showcase-row">
            <span class="po-badge">8 Novas</span>
            <span class="po-badge success"><i data-lucide="check"></i> 14 Aprovados</span>
            <span class="po-badge warning"><i data-lucide="alert-triangle"></i> 3 Pendências</span>
            <span class="po-badge danger"><i data-lucide="alert-octagon"></i> 2 Erros Críticos</span>
          </div>
        </div>
      </div>
    `, 'Badges e Indicadores Numéricos (PO Badge)'),

    'po-tag': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Tag Status & Categorias</h4>
            <span class="po-tag success">Etiquetas</span>
          </div>
          <div class="showcase-row">
            <span class="po-tag success">● Concluído</span>
            <span class="po-tag warning">● Em Andamento</span>
            <span class="po-tag danger">● Bloqueado</span>
            <span class="po-tag info">● Informativo</span>
            <span class="po-tag brand">● TOTVS Portinari</span>
          </div>
        </div>
      </div>
    `, 'Etiquetas de Status (PO Tag)'),

    'po-disclaimer': wrap(`
      <span class="po-disclaimer">
        <span>Filtro: Clientes Ativos</span>
        <button aria-label="Remover filtro">×</button>
      </span>
    `, 'Etiqueta de Critério Aplicado'),

    'po-disclaimer-group': wrap(`
      <div class="showcase-row">
        <span class="po-disclaimer"><span>Estado: Ceará</span><button>×</button></span>
        <span class="po-disclaimer"><span>Status: Ativo</span><button>×</button></span>
        <span class="po-disclaimer"><span>Período: Agosto/2026</span><button>×</button></span>
        <button class="po-button sm ghost" style="color:var(--danger)">Limpar Todos</button>
      </div>
    `, 'Grupo de Filtros Ativos (Disclaimer Group)'),

    'po-filter-chip': wrap(`
      <div class="showcase-row">
        <button class="filter-button active">Todos os Pedidos</button>
        <button class="filter-button">Recentes</button>
        <button class="filter-button">Aprovados</button>
        <button class="filter-button">Pendentes</button>
      </div>
    `, 'Chips de Filtro Rápido'),

    'po-loading': wrap(`
      <div class="showcase-stack" style="text-align:center">
        <div class="po-loading"></div>
        <p style="color:var(--muted);font-size:12px;margin:0">Carregando dados com spinner oficial...</p>
      </div>
    `, 'Indicador de Carregamento (PO Loading)'),

    'po-loading-overlay': wrap(`
      <div class="po-widget" style="position:relative;min-height:160px;display:grid;place-items:center">
        <div style="text-align:center">
          <p style="margin:0 0 12px;color:var(--ink)">Conteúdo protegido em segundo plano.</p>
          <button class="po-button primary" data-overlay><i data-lucide="play"></i> Simular Bloqueio com Overlay</button>
        </div>
      </div>
    `, 'Bloqueio de Tela com Loading Overlay'),

    'po-progress': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Progress Labs (Simulador Interativo)</h4>
            <span class="po-tag brand">Interativo</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:6px">
            <span>Sincronização de Dados com a Nuvem</span>
            <span id="progressText">65%</span>
          </div>
          <div class="po-progress" style="margin-bottom:14px"><i id="progressBar" style="width:65%"></i></div>
          <div class="showcase-row">
            <button class="po-button sm primary" id="advanceProgressBtn">+ Avançar 15%</button>
            <button class="po-button sm ghost" id="resetProgressBtn"><i data-lucide="rotate-ccw"></i> Reiniciar</button>
          </div>
        </div>
      </div>
    `, 'Barra de Progresso (PO Progress)'),

    'po-skeleton': wrap(`
      <div class="showcase-stack">
        <div class="po-skeleton" style="width:40%;height:20px"></div>
        <div class="po-skeleton" style="width:100%"></div>
        <div class="po-skeleton" style="width:85%"></div>
        <div class="po-skeleton" style="width:100%;height:70px"></div>
      </div>
    `, 'Esqueleto de Carregamento (PO Skeleton)'),

    'po-toaster': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Toaster / Notificações Flutuantes</h4>
            <span class="po-tag success">Feedback</span>
          </div>
          <div class="showcase-row">
            <button class="po-button primary" data-toast="Sucesso! Operação fiscal gravada com êxito."><i data-lucide="check-circle"></i> Toast de Sucesso</button>
            <button class="po-button" data-toast="Aviso: Foram encontradas 2 pendências no formulário."><i data-lucide="alert-triangle"></i> Toast de Alerta</button>
            <button class="po-button danger" data-toast="Erro: Falha na conexão com o servidor."><i data-lucide="alert-octagon"></i> Toast de Erro</button>
          </div>
        </div>
      </div>
    `, 'Notificações Flutuantes (PO Toaster)'),

    // 5. LAYOUT & CONTAINERS
    'po-accordion': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Accordion Basic</h4>
            <span class="po-tag">Sanfona</span>
          </div>
          <div class="po-accordion">
            <div class="accordion-item open">
              <button>1. Dados Cadastrais da Empresa <span>${icon('plus')}</span></button>
              <div class="accordion-content">Razão social, nome fantasia, CNPJ e inscrição estadual.</div>
            </div>
            <div class="accordion-item">
              <button>2. Endereço e Localização <span>${icon('plus')}</span></button>
              <div class="accordion-content">Logradouro, número, complemento, bairro, cidade, UF e CEP.</div>
            </div>
            <div class="accordion-item">
              <button>3. Parâmetros Tributários e Fiscais <span>${icon('plus')}</span></button>
              <div class="accordion-content">Regime de tributação, alíquota de ICMS/ISS e certificados digitais.</div>
            </div>
          </div>
        </div>
      </div>
    `, 'Painel Sanfona (PO Accordion)'),

    'po-container': wrap(`
      <div style="padding:22px;border:1px solid var(--line);border-radius:8px;background:var(--surface)">
        <h4 style="margin:0 0 6px;font-size:15px">Container Agrupador de Conteúdo</h4>
        <p style="margin:0;color:var(--muted);font-size:13px">Delimita e organiza áreas específicas da tela com bordas e espaçamentos homogêneos.</p>
      </div>
    `, 'Container Estrutural'),

    'po-divider': wrap(`
      <div>
        <p style="margin:0 0 12px;font-weight:700">Seção Superior: Identificação</p>
        <hr style="border:0;border-top:1px solid var(--line);margin:16px 0">
        <p style="margin:0;color:var(--muted)">Seção Inferior: Parâmetros Financeiros</p>
      </div>
    `, 'Divisor Horizontal'),

    'po-header': wrap(`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px;background:var(--surface-2);border-radius:6px">
        <div>
          <span style="font-size:11px;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase">CLIENTES</span>
          <h3 style="margin:2px 0 0;font:800 20px 'Manrope',sans-serif">Clínica Aurora Saúde</h3>
        </div>
        <button class="po-button primary"><i data-lucide="edit"></i> Editar Cadastro</button>
      </div>
    `, 'Cabeçalho Contextual (Header)'),

    'po-modal': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:28px 20px;background:var(--surface);text-align:center">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand);text-align:left">1. PO Modal Interativo</h4>
            <span class="po-tag brand">Diálogo</span>
          </div>
          <p style="margin:0 0 16px;color:var(--muted)">Abra uma janela modal bloqueadora com backdrop blur e botões de confirmação/cancelamento.</p>
          <button class="po-button primary" data-open-modal><i data-lucide="maximize-2"></i> Abrir Janela Modal</button>
        </div>
      </div>
    `, 'Janela Modal (PO Modal)'),

    'po-overlay': wrap(`
      <div style="padding:20px;border:1px solid var(--line);border-radius:6px;background:var(--surface)">
        <p style="margin:0 0 10px">O componente overlay aplica bloqueio visual com backdrop estilizado.</p>
        <button class="po-button" data-toast="Overlay demonstrado com sucesso">Testar Camada</button>
      </div>
    `, 'Camada Overlay'),

    'po-slide': wrap(`
      <div class="po-slide">
        <div class="po-slide-content">
          <small style="letter-spacing:1.5px;font-weight:700">DESTAQUE DO MÊS</small>
          <h2 style="margin:8px 0;font:800 24px 'Manrope',sans-serif">Design System WF willFran</h2>
          <p style="margin:0;font-size:13px;opacity:0.9">Desenvolvimento ágil com 100% de autonomia e zero dependências.</p>
        </div>
        <div class="slide-dots"><i class="active"></i><i></i><i></i></div>
      </div>
    `, 'Carrossel de Slides (Slide)'),

    'po-toolbar': wrap(`
      <div class="po-toolbar-demo">
        <div class="po-logo-demo" style="font-size:18px">WF <span>willFran</span></div>
        <div class="showcase-row">
          <button class="icon-button" aria-label="Buscar">${icon('search')}</button>
          <button class="icon-button" aria-label="Notificações">${icon('bell')}</button>
          <span class="po-avatar sm">MA</span>
        </div>
      </div>
    `, 'Barra de Ferramentas (Toolbar)'),

    'po-widget': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Widget de Dashboard</h4>
            <span class="po-tag success">Métricas</span>
          </div>
          <div class="po-widget">
            <div class="po-info">
              <span>Receita Líquida Recorrente (MRR)</span>
              <b style="font:800 28px 'Manrope',sans-serif;color:var(--brand);margin:4px 0">R$ 148.920,00</b>
            </div>
            <p style="color:var(--success);font-size:12px;font-weight:700;margin:4px 0 0">↑ +18,4% em relação ao mês anterior</p>
          </div>
        </div>
      </div>
    `, 'Widget de Dashboard (PO Widget)'),

    // 6. NAVEGAÇÃO
    'po-breadcrumb': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Breadcrumb Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Breadcrumb Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          <nav class="po-breadcrumb" id="basicBreadcrumbNav">
            <div class="po-breadcrumb-items">
              <ul class="po-breadcrumb-item-container" id="basicBreadcrumbList">
                <li class="po-breadcrumb-item">
                  <a href="#" class="po-breadcrumb-link" data-step="0">PO Portal</a>
                  <i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i>
                </li>
                <li class="po-breadcrumb-item">
                  <span class="po-breadcrumb-item-activate" data-step="1" aria-current="page">PO Breadcrumb</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- Sample 2: PO Breadcrumb with Favorite -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">2. PO Breadcrumb com Favorito (Favorite Service)</h4>
            <span class="po-tag success">Com Favoritar</span>
          </div>
          <nav class="po-breadcrumb" id="favBreadcrumbNav">
            <div class="po-breadcrumb-items">
              <ul class="po-breadcrumb-item-container" id="favBreadcrumbList">
                <li class="po-breadcrumb-item"><a href="#" class="po-breadcrumb-link" data-fav-step="0">Início</a><i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i></li>
                <li class="po-breadcrumb-item"><a href="#" class="po-breadcrumb-link" data-fav-step="1">Comercial</a><i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i></li>
                <li class="po-breadcrumb-item"><a href="#" class="po-breadcrumb-link" data-fav-step="2">Clientes</a><i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i></li>
                <li class="po-breadcrumb-item"><span class="po-breadcrumb-item-activate" data-fav-step="3" aria-current="page">Clínica Aurora Saúde</span></li>
              </ul>
            </div>
            <button class="po-breadcrumb-favorite" data-favorite-btn title="Adicionar aos Favoritos" aria-label="Favoritar"><i data-lucide="star"></i></button>
          </nav>
        </div>

        <!-- Sample 3: PO Breadcrumb Collapsed (Dropdown para 4+ Níveis) -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">3. PO Breadcrumb Collapsed (Menu Mais)</h4>
            <span class="po-tag warning">4+ Níveis</span>
          </div>
          <nav class="po-breadcrumb">
            <div class="po-breadcrumb-items">
              <ul class="po-breadcrumb-item-container">
                <li class="po-breadcrumb-item">
                  <a href="#/inicio" class="po-breadcrumb-link">TOTVS Protheus</a>
                  <i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i>
                </li>
                <li class="po-breadcrumb-item dropdown-wrap">
                  <button class="po-breadcrumb-icon-more" data-dropdown aria-label="Mais níveis"><i data-lucide="more-horizontal"></i></button>
                  <div class="po-dropdown-menu" hidden style="min-width:180px">
                    <button data-toast="Navegando para Módulo Financeiro..."><i data-lucide="folder"></i> Módulo Financeiro</button>
                    <button data-toast="Navegando para Contas a Pagar..."><i data-lucide="folder"></i> Contas a Pagar</button>
                  </div>
                  <i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i>
                </li>
                <li class="po-breadcrumb-item">
                  <a href="#/inicio" class="po-breadcrumb-link">Faturamento</a>
                  <i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i>
                </li>
                <li class="po-breadcrumb-item">
                  <span class="po-breadcrumb-item-activate" aria-current="page">Nota Fiscal #8294</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- Sample 4: PO Breadcrumb Labs -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">4. PO Breadcrumb Labs (Adicionar Itens Dinamicamente)</h4>
            <span class="po-tag brand">Laboratório</span>
          </div>

          <div style="padding:16px;background:var(--surface-2);border-radius:6px;border:1px solid var(--line);margin-bottom:16px">
            <nav class="po-breadcrumb" id="labsBreadcrumbTarget">
              <div class="po-breadcrumb-items">
                <ul class="po-breadcrumb-item-container" id="labsBreadcrumbList">
                  <li class="po-breadcrumb-item">
                    <a href="#/inicio" class="po-breadcrumb-link">Início</a>
                    <i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i>
                  </li>
                  <li class="po-breadcrumb-item">
                    <span class="po-breadcrumb-item-activate" aria-current="page">Painel Geral</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end">
            <div style="flex:1;min-width:180px">
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Título da Página (Label)</label>
              <input class="po-control" id="labsBreadcrumbLabel" placeholder="Ex: Relatórios Fiscais">
            </div>
            <button class="po-button primary" id="labsAddBreadcrumbBtn"><i data-lucide="plus"></i> Adicionar Nível</button>
            <button class="po-button ghost" id="labsResetBreadcrumbBtn"><i data-lucide="rotate-ccw"></i> Resetar</button>
          </div>
        </div>
      </div>
    `, 'PO Breadcrumb: Basic, Favoritos, Collapsed e Labs'),

    'po-tabs': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Tabs Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Tabs Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          <div class="po-tabs">
            <div class="po-tabs-head">
              <button class="active"><i data-lucide="layout-dashboard"></i> Visão Geral</button>
              <button><i data-lucide="file-text"></i> Contratos</button>
              <button><i data-lucide="dollar-sign"></i> Faturamento</button>
              <button><i data-lucide="paperclip"></i> Anexos (3)</button>
            </div>
            <div class="po-tab-content">
              Visualizando painel de visão geral com métricas e atividades recentes do cliente.
            </div>
          </div>
        </div>
      </div>
    `, 'PO Tabs: Abas Horizontais com Ícones e Badges'),

    'po-context-tabs': wrap(`
      <div class="po-tabs">
        <div class="po-tabs-head">
          <button class="active">Empresa 01 - Matriz SP</button>
          <button>Empresa 02 - Filial CE</button>
          <button>+ Novo Contexto</button>
        </div>
        <div class="po-tab-content">
          Ambiente operacional selecionado: <b>Empresa 01 - Matriz SP</b>.
        </div>
      </div>
    `, 'Abas Contextuais'),

    'po-menu': wrap(`
      <div class="po-menu-demo">
        <button class="active">${icon('home')} Dashboard</button>
        <button>${icon('users')} Clientes</button>
        <button>${icon('shopping-bag')} Pedidos</button>
        <button>${icon('chart-no-axes-column')} Relatórios</button>
        <button>${icon('settings')} Configurações</button>
      </div>
    `, 'Menu de Navegação Lateral'),

    'po-menu-panel': wrap(`
      <div class="po-menu-demo" style="width:100%">
        <button class="active">${icon('plus')} Cadastrar Novo Cliente</button>
        <button>${icon('upload')} Importar Planilha CSV</button>
        <button>${icon('file-text')} Emitir Extrato</button>
      </div>
    `, 'Painel de Menu de Ações'),

    'po-navbar': wrap(`
      <div class="po-tabs-head">
        <button class="active">Início</button>
        <button>Vendas</button>
        <button>Logística</button>
        <button>Financeiro</button>
        <button>RH</button>
      </div>
    `, 'Barra de Navegação Superior'),

    'po-tree-view': wrap(`
      <div class="po-tree">
        <ul>
          <li>
            <button data-tree>−</button> 📁 Raiz do Projeto
            <ul>
              <li>
                <button data-tree>−</button> 📁 src
                <ul>
                  <li>📄 index.html</li>
                  <li>📄 styles.css</li>
                  <li>📄 app.js</li>
                </ul>
              </li>
              <li>
                <button data-tree>+</button> 📁 assets
                <ul class="collapsed">
                  <li>🖼️ logo.svg</li>
                  <li>🖼️ banner.png</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    `, 'Navegação em Árvore (Tree View)'),

    'po-stepper': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Stepper Labs (Interativo) -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Stepper Labs (Passo a Passo Interativo)</h4>
            <span class="po-tag brand">Interativo</span>
          </div>
          <div class="po-stepper" id="stepperDemo" style="margin-bottom:24px">
            <div class="po-step done" data-step="1"><i>${icon('check')}</i> Identificação</div>
            <div class="po-step active" data-step="2"><i>2</i> Endereço</div>
            <div class="po-step" data-step="3"><i>3</i> Pagamento</div>
            <div class="po-step" data-step="4"><i>4</i> Confirmação</div>
          </div>
          <div style="padding:16px;background:var(--surface-2);border-radius:6px;margin-bottom:16px;font-size:13px;color:var(--ink)" id="stepperStepContent">
            Etapa Atual (2/4): <b>Preenchimento do Endereço e Localização de Faturamento</b>.
          </div>
          <div class="showcase-row" style="justify-content:space-between">
            <button class="po-button ghost" id="stepperPrevBtn">‹ Passo Anterior</button>
            <button class="po-button primary" id="stepperNextBtn">Próximo Passo ›</button>
          </div>
        </div>
      </div>
    `, 'Passo a Passo Interativo (PO Stepper)'),

    // 7. UTILIDADES
    'po-avatar': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Avatar Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Avatar Basic & Escalas de Tamanho</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          <p style="margin:0 0 16px;color:var(--muted);font-size:13px">Avatares com fotos reais, iniciais tipográficas e ícone padrão nos 5 tamanhos oficiais (XS, SM, MD, LG, XL):</p>
          
          <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;margin-bottom:18px">
            <div style="text-align:center">
              <div class="po-avatar xs" title="XS - 24px">
                <span>XS</span>
              </div>
              <small style="display:block;margin-top:4px;color:var(--muted);font-size:10px">XS (24px)</small>
            </div>

            <div style="text-align:center">
              <div class="po-avatar sm" title="SM - 34px">
                <img class="po-avatar-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Ana">
                <span class="po-avatar-status"></span>
              </div>
              <small style="display:block;margin-top:4px;color:var(--muted);font-size:10px">SM (34px)</small>
            </div>

            <div style="text-align:center">
              <div class="po-avatar md" title="MD - 48px (Padrão)">
                <img class="po-avatar-image" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" alt="Carlos">
                <span class="po-avatar-status busy"></span>
              </div>
              <small style="display:block;margin-top:4px;color:var(--muted);font-size:10px">MD (48px)</small>
            </div>

            <div style="text-align:center">
              <div class="po-avatar lg" title="LG - 80px" style="background:#2d82b7">
                <span>MA</span>
                <span class="po-avatar-status away"></span>
              </div>
              <small style="display:block;margin-top:4px;color:var(--muted);font-size:10px">LG (80px)</small>
            </div>

            <div style="text-align:center">
              <div class="po-avatar xl" title="XL - 110px">
                <img class="po-avatar-image" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80" alt="Marina">
                <span class="po-avatar-status" style="width:18px;height:18px;bottom:4px;right:4px"></span>
              </div>
              <small style="display:block;margin-top:4px;color:var(--muted);font-size:10px">XL (110px)</small>
            </div>
          </div>
        </div>

        <!-- Sample 2: PO Avatar Labs -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">2. PO Avatar Labs (Simulador Interativo)</h4>
            <span class="po-tag brand">Laboratório</span>
          </div>

          <div style="display:flex;align-items:center;justify-content:center;padding:28px;background:var(--surface-2);border-radius:8px;border:1px solid var(--line);margin-bottom:20px">
            <div class="po-avatar lg po-clickable" id="labsAvatarTarget" title="Clique para interagir">
              <img class="po-avatar-image" id="labsAvatarImg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" alt="Avatar">
              <span class="po-avatar-status" id="labsAvatarStatus"></span>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:14px;margin-bottom:16px">
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Tamanho (Size)</label>
              <select class="po-control" id="labsAvatarSizeSelect">
                <option value="xs">XS (24px)</option>
                <option value="sm">SM (34px)</option>
                <option value="md">MD (48px)</option>
                <option value="lg" selected>LG (80px)</option>
                <option value="xl">XL (110px)</option>
              </select>
            </div>

            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Status do Usuário</label>
              <select class="po-control" id="labsAvatarStatusSelect">
                <option value="online" selected>🟢 Online (Disponível)</option>
                <option value="busy">🔴 Ocupado (Busy)</option>
                <option value="away">🟠 Ausente (Away)</option>
                <option value="offline">⚪ Offline (Desconectado)</option>
                <option value="none">Sem Indicador de Status</option>
              </select>
            </div>

            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Tipo de Conteúdo</label>
              <select class="po-control" id="labsAvatarTypeSelect">
                <option value="image" selected>Foto de Perfil (Image)</option>
                <option value="initials">Iniciais Tipográficas (Ex: MA)</option>
                <option value="icon">Ícone Padrão de Usuário</option>
              </select>
            </div>
          </div>

          <div class="showcase-row">
            <button class="po-button ghost" id="labsAvatarRestoreBtn"><i data-lucide="rotate-ccw"></i> Restaurar Labs</button>
          </div>
        </div>

        <!-- Sample 3: PO Avatar Business Card (Oficial PO UI) -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">3. PO Avatar Business Card (Cartão de Contato Oficial)</h4>
            <span class="po-tag success">Caso Real</span>
          </div>

          <div style="padding:20px;border:1px solid var(--line);border-radius:8px;background:var(--surface-2);display:flex;gap:20px;align-items:center;flex-wrap:wrap">
            <div class="po-avatar lg po-clickable" id="businessCardAvatar" title="Clique para expandir foto" style="cursor:pointer">
              <img class="po-avatar-image" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80" alt="Marina Almeida">
              <span class="po-avatar-status"></span>
            </div>

            <div style="flex:1;min-width:200px">
              <h3 style="margin:0 0 4px;font:800 18px 'Manrope',sans-serif;color:var(--ink)">Marina Almeida</h3>
              <p style="margin:0 0 10px;color:var(--brand);font-weight:700;font-size:12px">Gerente de Produtos e Inovação</p>
              
              <div style="display:grid;gap:4px;font-size:12px;color:var(--muted)">
                <div><b>Telefone:</b> +55 (11) 98765-4321</div>
                <div><b>E-mail:</b> marina.almeida@totvs.com.br</div>
                <div><b>Unidade:</b> TOTVS Matriz São Paulo</div>
              </div>
            </div>
          </div>

          <div class="showcase-row" style="margin-top:14px">
            <button class="po-button primary" data-toast="Iniciando chamada para Marina Almeida (+55 11 98765-4321)..."><i data-lucide="phone"></i> Ligar para Contato</button>
            <button class="po-button ghost" data-toast="Abrindo cliente de e-mail para marina.almeida@totvs.com.br"><i data-lucide="mail"></i> Enviar E-mail</button>
          </div>
        </div>
      </div>
    `, 'PO Avatar: Escalas XS a XL, Simulador Labs e Business Card'),

    'po-calendar': wrap(`
      <div class="showcase-stack">
        <!-- Sample 1: PO Calendar Basic -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Calendar Basic</h4>
            <span class="po-tag">Amostra Básica</span>
          </div>
          <div class="po-calendar" id="calendarBasic">
            <div class="calendar-head">
              <button class="calendar-nav-btn" data-cal-nav="prev">‹</button>
              <span class="calendar-title">Agosto 2026</span>
              <button class="calendar-nav-btn" data-cal-nav="next">›</button>
            </div>
            <div class="calendar-grid">
              <span class="day-name">Dom</span><span class="day-name">Seg</span><span class="day-name">Ter</span><span class="day-name">Qua</span><span class="day-name">Qui</span><span class="day-name">Sex</span><span class="day-name">Sáb</span>
              <button class="calendar-day other-month">26</button>
              <button class="calendar-day other-month">27</button>
              <button class="calendar-day other-month">28</button>
              <button class="calendar-day other-month">29</button>
              <button class="calendar-day other-month">30</button>
              <button class="calendar-day other-month">31</button>
              <button class="calendar-day">1</button>
              <button class="calendar-day">2</button>
              <button class="calendar-day">3</button>
              <button class="calendar-day">4</button>
              <button class="calendar-day">5</button>
              <button class="calendar-day">6</button>
              <button class="calendar-day">7</button>
              <button class="calendar-day">8</button>
              <button class="calendar-day">9</button>
              <button class="calendar-day">10</button>
              <button class="calendar-day">11</button>
              <button class="calendar-day">12</button>
              <button class="calendar-day">13</button>
              <button class="calendar-day">14</button>
              <button class="calendar-day">15</button>
              <button class="calendar-day">16</button>
              <button class="calendar-day">17</button>
              <button class="calendar-day">18</button>
              <button class="calendar-day">19</button>
              <button class="calendar-day">20</button>
              <button class="calendar-day">21</button>
              <button class="calendar-day">22</button>
              <button class="calendar-day">23</button>
              <button class="calendar-day">24</button>
              <button class="calendar-day">25</button>
              <button class="calendar-day">26</button>
              <button class="calendar-day">27</button>
              <button class="calendar-day">28</button>
              <button class="calendar-day">29</button>
              <button class="calendar-day today selected">30</button>
              <button class="calendar-day">31</button>
            </div>
          </div>
        </div>

        <!-- Sample 2: PO Calendar - Range and Presets -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">2. PO Calendar - Range and Presets</h4>
            <span class="po-tag brand">Intervalo & Atalhos</span>
          </div>
          <div class="po-calendar-wrap">
            <div class="po-calendar-presets" id="calendarPresetsGroup">
              <button class="active" data-preset="week">Esta Semana</button>
              <button data-preset="month">Este Mês</button>
              <button data-preset="last7">Últimos 7 dias</button>
              <button data-preset="last30">Últimos 30 dias</button>
              <button data-preset="custom">Personalizado</button>
            </div>

            <div class="po-calendar" id="calendarRange">
              <div class="calendar-head">
                <button class="calendar-nav-btn">‹</button>
                <span class="calendar-title">Agosto 2026</span>
                <button class="calendar-nav-btn">›</button>
              </div>
              <div class="calendar-grid">
                <span class="day-name">Dom</span><span class="day-name">Seg</span><span class="day-name">Ter</span><span class="day-name">Qua</span><span class="day-name">Qui</span><span class="day-name">Sex</span><span class="day-name">Sáb</span>
                <button class="calendar-day other-month">26</button>
                <button class="calendar-day other-month">27</button>
                <button class="calendar-day other-month">28</button>
                <button class="calendar-day other-month">29</button>
                <button class="calendar-day other-month">30</button>
                <button class="calendar-day other-month">31</button>
                <button class="calendar-day">1</button>
                <button class="calendar-day">2</button>
                <button class="calendar-day">3</button>
                <button class="calendar-day">4</button>
                <button class="calendar-day">5</button>
                <button class="calendar-day">6</button>
                <button class="calendar-day">7</button>
                <button class="calendar-day">8</button>
                <button class="calendar-day">9</button>
                <button class="calendar-day range-start">10</button>
                <button class="calendar-day in-range">11</button>
                <button class="calendar-day in-range">12</button>
                <button class="calendar-day in-range">13</button>
                <button class="calendar-day in-range">14</button>
                <button class="calendar-day range-end">15</button>
                <button class="calendar-day">16</button>
                <button class="calendar-day">17</button>
                <button class="calendar-day">18</button>
                <button class="calendar-day">19</button>
                <button class="calendar-day">20</button>
                <button class="calendar-day">21</button>
                <button class="calendar-day">22</button>
                <button class="calendar-day">23</button>
                <button class="calendar-day">24</button>
                <button class="calendar-day">25</button>
                <button class="calendar-day">26</button>
                <button class="calendar-day">27</button>
                <button class="calendar-day">28</button>
                <button class="calendar-day">29</button>
                <button class="calendar-day today">30</button>
                <button class="calendar-day">31</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Sample 3: PO Calendar Labs -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">3. PO Calendar Labs (Simulador Interativo)</h4>
            <span class="po-tag brand">Laboratório</span>
          </div>

          <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start;margin-bottom:20px">
            <div class="po-calendar" id="labsCalendarTarget" style="flex:1;min-width:280px">
              <div class="calendar-head">
                <button class="calendar-nav-btn">‹</button>
                <span class="calendar-title" id="labsCalMonthYear">Agosto 2026</span>
                <button class="calendar-nav-btn">›</button>
              </div>
              <div class="calendar-grid" id="labsCalGrid">
                <span class="day-name">Dom</span><span class="day-name">Seg</span><span class="day-name">Ter</span><span class="day-name">Qua</span><span class="day-name">Qui</span><span class="day-name">Sex</span><span class="day-name">Sáb</span>
                <button class="calendar-day other-month">26</button>
                <button class="calendar-day other-month">27</button>
                <button class="calendar-day other-month">28</button>
                <button class="calendar-day other-month">29</button>
                <button class="calendar-day other-month">30</button>
                <button class="calendar-day other-month">31</button>
                <button class="calendar-day">1</button>
                <button class="calendar-day">2</button>
                <button class="calendar-day">3</button>
                <button class="calendar-day">4</button>
                <button class="calendar-day">5</button>
                <button class="calendar-day">6</button>
                <button class="calendar-day">7</button>
                <button class="calendar-day">8</button>
                <button class="calendar-day">9</button>
                <button class="calendar-day">10</button>
                <button class="calendar-day">11</button>
                <button class="calendar-day">12</button>
                <button class="calendar-day">13</button>
                <button class="calendar-day">14</button>
                <button class="calendar-day">15</button>
                <button class="calendar-day">16</button>
                <button class="calendar-day">17</button>
                <button class="calendar-day">18</button>
                <button class="calendar-day">19</button>
                <button class="calendar-day">20</button>
                <button class="calendar-day">21</button>
                <button class="calendar-day">22</button>
                <button class="calendar-day">23</button>
                <button class="calendar-day">24</button>
                <button class="calendar-day">25</button>
                <button class="calendar-day">26</button>
                <button class="calendar-day">27</button>
                <button class="calendar-day">28</button>
                <button class="calendar-day">29</button>
                <button class="calendar-day today selected">30</button>
                <button class="calendar-day">31</button>
              </div>
            </div>

            <div style="flex:1;min-width:240px;display:grid;gap:12px">
              <div style="padding:14px;background:var(--surface-2);border-radius:6px;border:1px solid var(--line)">
                <span style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:4px">Model (Data Selecionada)</span>
                <code id="labsCalModel" style="font-family:monospace;color:var(--brand);font-weight:700">"2026-08-30"</code>
              </div>
              <div style="padding:14px;background:var(--surface-2);border-radius:6px;border:1px solid var(--line)">
                <span style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:4px">Event Disparado</span>
                <code id="labsCalEvent" style="font-family:monospace;color:var(--success);font-weight:700">p-change: "2026-08-30"</code>
              </div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:14px;margin-bottom:16px">
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Modo (p-mode)</label>
              <select class="po-control" id="labsCalMode">
                <option value="single" selected>Single (Data Única)</option>
                <option value="range">Range (Intervalo)</option>
              </select>
            </div>

            <div>
              <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">Idioma (p-locale)</label>
              <select class="po-control" id="labsCalLocale">
                <option value="pt" selected>Português (pt-BR)</option>
                <option value="en">English (en-US)</option>
                <option value="es">Español (es-ES)</option>
              </select>
            </div>
          </div>

          <div class="showcase-row">
            <button class="po-button ghost" id="labsCalRestoreBtn"><i data-lucide="rotate-ccw"></i> Restaurar Labs</button>
          </div>
        </div>

        <!-- Sample 4: PO Calendar - Ticket Sales -->
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">4. PO Calendar - Ticket Sales (Venda de Ingressos)</h4>
            <span class="po-tag success">Caso Real Oficial</span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;align-items:start">
            <div>
              <h5 style="margin:0 0 10px;font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:0.8px">Tabela de Preços (Prices)</h5>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px">
                <div class="po-info"><span>Fins de semana e feriados</span><b style="color:var(--brand)">R$ 20,00</b></div>
                <div class="po-info"><span>Dias úteis (Segunda a Sexta)</span><b style="color:var(--ink)">R$ 10,00</b></div>
              </div>

              <h5 style="margin:0 0 10px;font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:0.8px">Quantidade (Quantity)</h5>
              <div style="display:grid;gap:12px;margin-bottom:20px">
                ${field('Ingressos Adultos (a partir de 12 anos)', `
                  <select class="po-control" id="ticketAdults">
                    <option value="1" selected>1 ingresso</option>
                    <option value="2">2 ingressos</option>
                    <option value="3">3 ingressos</option>
                    <option value="4">4 ingressos</option>
                  </select>
                `)}
                ${field('Meia-Entrada / Crianças (04 a 11 anos e idosos)', `
                  <select class="po-control" id="ticketKids">
                    <option value="0" selected>Nenhum</option>
                    <option value="1">1 ingresso</option>
                    <option value="2">2 ingressos</option>
                  </select>
                `)}
              </div>

              <div style="padding:14px;background:var(--surface-2);border-radius:6px;border:1px solid var(--line);margin-bottom:16px">
                <span style="font-size:12px;color:var(--muted)">Valor Total Previsto:</span>
                <div style="font:800 24px 'Manrope',sans-serif;color:var(--success)" id="ticketTotalAmount">R$ 20,00</div>
              </div>

              <button class="po-button primary" id="ticketBuyBtn"><i data-lucide="shopping-cart"></i> Comprar Ingressos</button>
            </div>

            <div class="po-calendar" id="ticketCalendar">
              <div class="calendar-head">
                <button class="calendar-nav-btn">‹</button>
                <span class="calendar-title">Agosto 2026</span>
                <button class="calendar-nav-btn">›</button>
              </div>
              <div class="calendar-grid">
                <span class="day-name">Dom</span><span class="day-name">Seg</span><span class="day-name">Ter</span><span class="day-name">Qua</span><span class="day-name">Qui</span><span class="day-name">Sex</span><span class="day-name">Sáb</span>
                <button class="calendar-day other-month">26</button>
                <button class="calendar-day other-month">27</button>
                <button class="calendar-day other-month">28</button>
                <button class="calendar-day other-month">29</button>
                <button class="calendar-day other-month">30</button>
                <button class="calendar-day other-month">31</button>
                <button class="calendar-day">1</button>
                <button class="calendar-day">2</button>
                <button class="calendar-day">3</button>
                <button class="calendar-day">4</button>
                <button class="calendar-day">5</button>
                <button class="calendar-day">6</button>
                <button class="calendar-day">7</button>
                <button class="calendar-day">8</button>
                <button class="calendar-day">9</button>
                <button class="calendar-day">10</button>
                <button class="calendar-day">11</button>
                <button class="calendar-day">12</button>
                <button class="calendar-day">13</button>
                <button class="calendar-day">14</button>
                <button class="calendar-day">15</button>
                <button class="calendar-day">16</button>
                <button class="calendar-day">17</button>
                <button class="calendar-day">18</button>
                <button class="calendar-day">19</button>
                <button class="calendar-day">20</button>
                <button class="calendar-day">21</button>
                <button class="calendar-day">22</button>
                <button class="calendar-day">23</button>
                <button class="calendar-day">24</button>
                <button class="calendar-day">25</button>
                <button class="calendar-day">26</button>
                <button class="calendar-day">27</button>
                <button class="calendar-day">28</button>
                <button class="calendar-day">29</button>
                <button class="calendar-day today selected">30</button>
                <button class="calendar-day">31</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `, 'PO Calendar: Basic, Range and Presets, Labs e Ticket Sales'),

    'po-helper': wrap(`
      <div class="showcase-stack">
        ${field('Código Único SKU', '<input class="po-control" value="TOTVS-SKU-990">', 'O código SKU deve possuir 12 dígitos alfanuméricos.')}
        <div class="po-alert success"><i data-lucide="info"></i> Dica: Você pode gerar códigos SKU em lote via integração API.</div>
      </div>
    `, 'Ajuda e Dicas Contextuais (PO Helper)'),

    'po-icon': wrap(`
      <div class="showcase-stack">
        <div style="border:1px solid var(--line);border-radius:8px;padding:20px;background:var(--surface)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="margin:0;font-size:14px;font-weight:700;color:var(--brand)">1. PO Icon: Galeria de Ícones Vetoriais</h4>
            <span class="po-tag">Ícones</span>
          </div>
          <div class="showcase-row lucide-gallery">
            ${['home', 'search', 'bell', 'settings', 'user', 'calendar', 'check-circle', 'trash-2', 'download', 'upload', 'share-2', 'filter', 'edit', 'eye', 'lock'].map(n => icon(n, n)).join('')}
          </div>
        </div>
      </div>
    `, 'Galeria de Ícones Vetoriais (PO Icon)'),

    'po-image': wrap(`
      <div class="showcase-stack">
        <div style="height:180px;display:grid;place-items:center;background:linear-gradient(135deg,var(--brand-soft),var(--surface-2));border-radius:8px;border:1px solid var(--line)">
          <div style="text-align:center;color:var(--brand)">
            ${icon('image')}
            <b style="display:block;margin-top:6px">Imagem Responsiva com Fallback</b>
            <small style="color:var(--muted)">Renderização otimizada para todas as resoluções</small>
          </div>
        </div>
      </div>
    `, 'Exibição de Imagens (PO Image)'),

    'po-label': wrap(`
      <div class="showcase-row">
        <span class="po-label">Rótulo Padrão</span>
        <span class="po-tag success">Concluído</span>
        <span class="po-tag danger">Cancelado</span>
      </div>
    `, 'Rótulos Tipográficos (PO Label)'),

    'po-logo': wrap(`
      <div class="po-logo-demo">TOTVS <span>PO UI</span></div>
    `, 'Assinatura Visual de Marca (PO Logo)'),

    'po-search': wrap(`
      <div class="showcase-stack">
        <div class="po-input-addon">
          <input class="po-control" id="localSearchDemo" placeholder="Digite para filtrar instantaneamente...">
          <button class="po-button primary"><i data-lucide="search"></i></button>
        </div>
        <small id="localSearchHint" style="color:var(--muted)">Aguardando termo de pesquisa...</small>
      </div>
    `, 'Campo de Busca Rápida (PO Search)'),

    'po-timer': wrap(`
      <div class="showcase-stack" style="text-align:center">
        <div style="border:1px solid var(--line);border-radius:8px;padding:24px;background:var(--surface)">
          <div class="po-timer" id="timerDisplay" style="margin-bottom:14px">01:05</div>
          <div class="showcase-row" style="justify-content:center">
            <button class="po-button primary" id="timerStartBtn"><i data-lucide="play"></i> Iniciar</button>
            <button class="po-button ghost" id="timerResetBtn"><i data-lucide="rotate-ccw"></i> Reiniciar</button>
          </div>
        </div>
      </div>
    `, 'Temporizador / Cronômetro (PO Timer)'),

    // 8. TEMPLATES DE PÁGINA
    'po-page-default': wrap(`
      <div class="po-page-demo">
        <div class="po-toolbar-demo">
          <h3 style="margin:0;font:800 18px 'Manrope',sans-serif">Gestão de Pedidos</h3>
          <div class="showcase-row">
            <button class="po-button ghost">Exportar</button>
            <button class="po-button primary"><i data-lucide="plus"></i> Novo Registro</button>
          </div>
        </div>
        <div class="po-page-body">
          <div class="po-skeleton" style="width:40%;margin-bottom:12px"></div>
          <div class="po-skeleton" style="width:100%"></div>
        </div>
      </div>
    `, 'Template: Página Padrão (Page Default)'),

    'po-page-list': wrap(`
      <div class="po-page-demo">
        <div class="po-toolbar-demo">
          <h3 style="margin:0;font:800 18px 'Manrope',sans-serif">Catálogo de Clientes</h3>
          <button class="po-button primary"><i data-lucide="user-plus"></i> Novo Cliente</button>
        </div>
        <div style="padding:14px 20px;background:var(--surface);border-bottom:1px solid var(--line);display:flex;gap:10px">
          <input class="po-control" placeholder="Buscar por cliente, CNPJ ou cidade..." style="flex:1">
          <button class="po-button ghost"><i data-lucide="filter"></i> Filtros</button>
        </div>
        <div class="po-page-body">
          <table class="po-table">
            <thead><tr><th>Cliente</th><th>Cidade</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Clínica Aurora</td><td>Fortaleza</td><td><span class="po-tag success">Ativo</span></td></tr>
              <tr><td>Mercado Central</td><td>Recife</td><td><span class="po-tag warning">Pendente</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `, 'Template: Listagem de Registros (Page List)'),

    'po-page-detail': wrap(`
      <div class="po-page-demo">
        <div class="po-toolbar-demo">
          <div>
            <small style="color:var(--muted);font-weight:700">DETALHES DO REGISTRO</small>
            <h3 style="margin:2px 0 0;font:800 18px 'Manrope',sans-serif">Clínica Aurora Saúde S/A</h3>
          </div>
          <div class="showcase-row">
            <button class="po-button ghost">Voltar</button>
            <button class="po-button primary">Editar</button>
          </div>
        </div>
        <div class="po-page-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <div class="po-info"><span>CNPJ</span><b>12.345.678/0001-90</b></div>
            <div class="po-info"><span>Cidade</span><b>Fortaleza/CE</b></div>
            <div class="po-info"><span>Responsável</span><b>Marina Almeida</b></div>
            <div class="po-info"><span>Situação</span><b style="color:var(--success)">Regular</b></div>
          </div>
        </div>
      </div>
    `, 'Template: Detalhes de Registro (Page Detail)'),

    'po-page-edit': wrap(`
      <div class="po-page-demo">
        <div class="po-toolbar-demo">
          <h3 style="margin:0;font:800 18px 'Manrope',sans-serif">Editar Cadastro</h3>
          <div class="showcase-row">
            <button class="po-button ghost">Cancelar</button>
            <button class="po-button primary"><i data-lucide="save"></i> Salvar Alterações</button>
          </div>
        </div>
        <div class="po-page-body">
          <div class="showcase-stack">
            ${field('Razão Social', '<input value="Clínica Aurora Saúde S/A">')}
            <div class="showcase-row">
              <div style="flex:1">${field('E-mail', '<input value="contato@aurorasaude.com.br">')}</div>
              <div style="flex:1">${field('Telefone', '<input value="(85) 3456-7890">')}</div>
            </div>
          </div>
        </div>
      </div>
    `, 'Template: Edição de Registro (Page Edit)'),

    'po-page-login': wrap(`
      <div style="max-width:380px;margin:0 auto;padding:28px;background:var(--surface);border:1px solid var(--line);border-radius:10px;box-shadow:var(--shadow)">
        <div class="po-logo-demo" style="text-align:center;margin-bottom:20px;font-size:24px">WF <span>willFran</span></div>
        <div class="showcase-stack">
          ${field('Usuário ou E-mail', '<input placeholder="nome@empresa.com">')}
          ${field('Senha', '<input type="password" placeholder="••••••••">')}
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px">
            <label class="po-checkbox"><input type="checkbox" checked> Lembrar-me</label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button class="po-button primary" style="width:100%;margin-top:6px" data-toast="Login efetuado com sucesso!">Acessar Sistema</button>
        </div>
      </div>
    `, 'Template: Tela de Autenticação (Page Login)'),

    'po-page-dynamic-table': wrap(`
      <div class="po-page-demo">
        <div class="po-toolbar-demo">
          <h3 style="margin:0;font:800 18px 'Manrope',sans-serif">Tabela Dinâmica Automática</h3>
          <button class="po-button primary"><i data-lucide="refresh-cw"></i> Recarregar Schema</button>
        </div>
        <div class="po-page-body">
          <table class="po-table">
            <thead><tr><th>ID</th><th>Título</th><th>Tipo</th><th>Ações</th></tr></thead>
            <tbody>
              <tr><td>001</td><td>Integração ERP Protheus</td><td>API REST</td><td><span class="po-tag success">OK</span></td></tr>
              <tr><td>002</td><td>Sincronização Fiscal</td><td>Job Cron</td><td><span class="po-tag brand">Ativo</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `, 'Template: Tabela Dinâmica Automática'),

    'po-page-dynamic-edit': wrap(`
      <div class="po-page-demo">
        <div class="po-toolbar-demo">
          <h3 style="margin:0;font:800 18px 'Manrope',sans-serif">Formulário Dinâmico Automatizado</h3>
          <button class="po-button primary"><i data-lucide="check"></i> Confirmar</button>
        </div>
        <div class="po-page-body">
          <div class="showcase-stack">
            ${field('Parâmetro de Configuração', '<input value="CONF_TIMEOUT_SEC">')}
            ${field('Valor Definido', '<input value="3600">')}
          </div>
        </div>
      </div>
    `, 'Template: Edição Dinâmica Automatizada'),

    'po-page-dynamic-detail': wrap(`
      <div class="po-page-demo">
        <div class="po-toolbar-demo">
          <h3 style="margin:0;font:800 18px 'Manrope',sans-serif">Visualização de Schema Dinâmico</h3>
        </div>
        <div class="po-page-body">
          <div class="po-info"><span>Identificador</span><b>SCH-9940-DYNAMIC</b></div>
          <div class="po-info" style="margin-top:10px"><span>Regra Aplicada</span><b>Renderização com metadados PO UI</b></div>
        </div>
      </div>
    `, 'Template: Detalhes Dinâmicos'),

    'po-page-change-password': wrap(`
      <div style="max-width:420px;margin:0 auto;padding:24px;background:var(--surface);border:1px solid var(--line);border-radius:8px">
        <h3 style="margin:0 0 16px;font:800 18px 'Manrope',sans-serif">Troca de Senha Obrigatória</h3>
        <div class="showcase-stack">
          ${field('Senha Atual', '<input type="password">')}
          ${field('Nova Senha', '<input type="password">')}
          ${field('Confirmar Nova Senha', '<input type="password">')}
          <button class="po-button primary" style="width:100%" data-toast="Senha atualizada com sucesso!">Salvar Nova Senha</button>
        </div>
      </div>
    `, 'Template: Troca de Senha'),

    'po-page-blocked-user': wrap(`
      <div style="text-align:center;padding:40px 20px">
        <div style="width:56px;height:56px;margin:0 auto 16px;display:grid;place-items:center;background:var(--danger-soft);color:var(--danger);border-radius:50%">
          <i data-lucide="shield-alert" style="width:28px;height:28px"></i>
        </div>
        <h2 style="margin:0 0 8px;font:800 22px 'Manrope',sans-serif">Acesso Temporariamente Suspenso</h2>
        <p style="margin:0 0 20px;color:var(--muted);max-width:420px;margin-inline:auto">Sua conta foi bloqueada por excesso de tentativas incorretas. Entre em contato com o suporte de TI.</p>
        <button class="po-button primary"><i data-lucide="life-buoy"></i> Contatar Suporte</button>
      </div>
    `, 'Template: Usuário Bloqueado'),

    'po-modal-password-recovery': wrap(`
      <div style="max-width:420px;margin:0 auto;padding:24px;background:var(--surface);border:1px solid var(--line);border-radius:8px">
        <h3 style="margin:0 0 8px;font:800 18px 'Manrope',sans-serif">Recuperar Senha</h3>
        <p style="margin:0 0 16px;font-size:13px;color:var(--muted)">Informe seu e-mail cadastrado para receber as instruções.</p>
        <div class="showcase-stack">
          ${field('E-mail Cadastrado', '<input type="email" placeholder="usuario@empresa.com">')}
          <button class="po-button primary" data-toast="Instruções enviadas para seu e-mail!">Enviar Instruções</button>
        </div>
      </div>
    `, 'Template: Modal de Recuperação de Senha')
  };

  return previews[name] || wrap(`
    <div class="po-alert success">
      <i data-lucide="circle-check"></i>
      <div>
        <b>${name}</b> está completamente implementado e pronto para uso em HTML, CSS e JavaScript puro.
      </div>
    </div>
    <p style="color:var(--muted);font-size:13px;margin-top:12px">${descriptions[name] || ''}</p>
  `, displayName(name));
}

function componentHTML(name) {
  const rawPreview = createPreview(name);
  return `<!-- ==========================================
     PO UI Vanilla Component: ${name}
     Design System sem framework
     ========================================== -->
${rawPreview.replace(/ style="animation-delay:[^"]*"/g, '')}

<!-- Carregamento de Ícones Lucide -->
<script src="https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js"><\/script>
<script>
  lucide.createIcons();
<\/script>`;
}

function componentCSS(name) {
  const cssSnippets = {
    // 1. AÇÕES & MENUS
    'po-button': `/* Estilos PO UI: Botão e Variantes */
.po-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 20px;
  color: var(--ink, #24212a);
  background: var(--surface, #ffffff);
  border: 1px solid var(--line-strong, #bcb4c2);
  border-radius: var(--radius, 6px);
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(36, 33, 42, 0.06);
}

.po-button:hover {
  color: var(--brand, #753399);
  background: var(--brand-soft, #f4eaf8);
  border-color: var(--brand, #753399);
  transform: translateY(-1px);
}

.po-button.primary {
  color: #ffffff;
  background: linear-gradient(180deg, #753399 0%, #692c8a 100%);
  border-color: #753399;
  box-shadow: 0 2px 8px rgba(117, 51, 153, 0.35);
}

.po-button.primary:hover {
  background: linear-gradient(180deg, #602580 0%, #562172 100%);
  box-shadow: 0 5px 16px rgba(117, 51, 153, 0.45);
}

.po-button.ghost, .po-button.tertiary {
  color: var(--brand, #753399);
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}

.po-button.ghost:hover {
  background: var(--brand-soft, #f4eaf8);
}

.po-button.danger {
  color: #ffffff;
  background: #c83c4d;
  border-color: #c83c4d;
  box-shadow: 0 2px 8px rgba(200, 60, 77, 0.3);
}

.po-button.danger:hover {
  background: #ab2c3c;
}

.po-button.sm { min-height: 34px; padding: 0 14px; font-size: 12px; }
.po-button.lg { min-height: 50px; padding: 0 28px; font-size: 15px; }
.po-button.full-width { width: 100%; }
.po-button:disabled { opacity: 0.5; cursor: not-allowed; }`,

    'po-button-group': `/* Estilos PO UI: Grupo de Botões */
.po-button-group {
  display: inline-flex;
  background: var(--surface, #ffffff);
  border: 1px solid var(--line-strong, #bcb4c2);
  border-radius: var(--radius, 6px);
  padding: 2px;
  gap: 2px;
  box-shadow: 0 2px 6px rgba(36, 33, 42, 0.06);
}

.po-button-group .po-button {
  margin: 0;
  border: 0;
  min-height: 36px;
  padding: 0 16px;
  color: var(--ink-secondary, #514b57);
  background: transparent;
  border-radius: 4px;
}

.po-button-group .po-button:hover {
  color: var(--brand, #753399);
  background: var(--brand-soft, #f4eaf8);
}

.po-button-group .po-button.active {
  color: var(--brand, #753399);
  background: var(--brand-soft, #f4eaf8);
  font-weight: 700;
  box-shadow: 0 1px 3px rgba(117, 51, 153, 0.15);
}`,

    'po-dropdown': `/* Estilos PO UI: Dropdown e Menu Suspenso */
.dropdown-wrap { position: relative; display: inline-block; }

.po-dropdown-menu {
  position: absolute;
  z-index: 100;
  top: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  padding: 6px;
  background: var(--surface, #ffffff);
  border: 1px solid var(--line, #ddd9e0);
  border-radius: 8px;
  box-shadow: 0 12px 36px rgba(25, 18, 32, 0.14);
  backdrop-filter: blur(12px);
}

.po-dropdown-header {
  padding: 8px 12px 4px;
  color: var(--muted, #6f6a75);
  font: 700 10px sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.po-dropdown-divider { height: 1px; margin: 6px 0; background: var(--line, #ddd9e0); }

.po-dropdown-menu button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  color: var(--ink, #24212a);
  background: none;
  border: 0;
  border-radius: 4px;
  text-align: left;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.po-dropdown-menu button:hover {
  color: var(--brand, #753399);
  background: var(--brand-soft, #f4eaf8);
}

.po-dropdown-menu button.danger { color: var(--danger, #c83c4d); }
.po-dropdown-menu button.danger:hover { background: var(--danger-soft, #fdebed); }`,

    'po-table': `/* Estilos PO UI: Tabela de Dados */
.po-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  background: var(--surface, #ffffff);
}

.po-table th {
  padding: 12px 14px;
  color: var(--muted, #6f6a75);
  background: var(--surface-2, #f7f6f8);
  border-bottom: 1px solid var(--line, #ddd9e0);
  text-align: left;
  font-weight: 700;
}

.po-table td {
  padding: 13px 14px;
  border-bottom: 1px solid var(--line, #ddd9e0);
  color: var(--ink, #24212a);
}

.po-table tbody tr:hover {
  background: var(--brand-soft, #f4eaf8);
}

.po-table input[type="checkbox"] {
  accent-color: var(--brand, #753399);
}`,

    'po-modal': `/* Estilos PO UI: Janela Modal */
.modal-backdrop {
  position: fixed;
  z-index: 999;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(24, 19, 27, 0.65);
  backdrop-filter: blur(4px);
}

.po-modal {
  width: min(100%, 480px);
  padding: 24px;
  background: var(--surface, #ffffff);
  border-radius: 10px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
}

.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.modal-head h2 { margin: 0; font-size: 20px; font-weight: 700; }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 24px; }`
  };

  const specific = cssSnippets[name] || `/* Estilos PO UI para ${name} */
.${name.replace('po-', 'po-')} {
  /* Inclui tokens oficiais de cores e dimensões */
  color: var(--ink, #24212a);
  background: var(--surface, #ffffff);
  border: 1px solid var(--line, #ddd9e0);
  border-radius: var(--radius, 6px);
}`;

  return `/* =========================================================
   PO UI Vanilla CSS: ${name}
   Design System · Sem Framework
   ========================================================= */
:root {
  --brand: #753399;
  --brand-hover: #602580;
  --brand-soft: #f4eaf8;
  --ink: #24212a;
  --muted: #6f6a75;
  --line: #ddd9e0;
  --line-strong: #bcb4c2;
  --surface: #ffffff;
  --surface-2: #f7f6f8;
  --success: #168862;
  --warning: #c86f0a;
  --danger: #c83c4d;
  --radius: 6px;
}

${specific}`;
}

function componentJavascript(name) {
  const interactiveScripts = {
    'po-button': `// PO UI Button: Disparo de Ações
document.querySelectorAll('.po-button[data-toast]').forEach(button => {
  button.addEventListener('click', () => {
    const msg = button.dataset.toast || 'Botão clicado!';
    PO.toast(msg, button.classList.contains('danger') ? 'danger' : 'success');
  });
});`,

    'po-button-group': `// PO UI Button Group: Seleção de Opção Ativa
document.querySelectorAll('.po-button-group button').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    parent.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    console.log('Opção selecionada:', button.textContent.trim());
  });
});`,

    'po-dropdown': `// PO UI Dropdown: Abertura e Fechamento Contextual
document.querySelectorAll('[data-dropdown]').forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const menu = trigger.nextElementSibling;
    if (menu) menu.hidden = !menu.hidden;
  });
});

// Fechar ao clicar fora
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown-wrap')) {
    document.querySelectorAll('.po-dropdown-menu').forEach(menu => menu.hidden = true);
  }
});`,

    'po-modal': `// PO UI Modal: Abertura e Fechamento
const modalBackdrop = document.querySelector('#modalBackdrop');
const openBtn = document.querySelector('[data-open-modal]');

openBtn?.addEventListener('click', () => {
  modalBackdrop.hidden = false;
});

modalBackdrop?.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => modalBackdrop.hidden = true);
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop) modalBackdrop.hidden = true;
});`,

    'po-accordion': `// PO UI Accordion: Expandir e Recolher Seções
document.querySelectorAll('.accordion-item > button').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('open');
  });
});`,

    'po-tabs': `// PO UI Tabs: Alternância de Abas
document.querySelectorAll('.po-tabs-head button').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    parent.querySelectorAll('button').forEach(tab => tab.classList.toggle('active', tab === button));
    const content = parent.closest('.po-tabs')?.querySelector('.po-tab-content');
    if (content) content.textContent = 'Visualizando conteúdo de ' + button.textContent;
  });
});`,

    'po-password': `// PO UI Password: Revelar / Ocultar Senha
const toggleBtn = document.querySelector('#togglePassword');
const passInput = document.querySelector('#passwordDemo');

toggleBtn?.addEventListener('click', () => {
  const isPass = passInput.type === 'password';
  passInput.type = isPass ? 'text' : 'password';
});`,

    'po-table': `// PO UI Table: Seleção de Linhas e Checkbox Geral
const selectAll = document.querySelector('.po-table th input[type="checkbox"]');
selectAll?.addEventListener('change', (e) => {
  document.querySelectorAll('.po-table tbody input[type="checkbox"]').forEach(chk => {
    chk.checked = e.target.checked;
  });
});`
  };

  const code = interactiveScripts[name] || `// PO UI ${name}: Inicialização e Comportamento
console.log('Componente ${name} carregado.');
if (window.lucide) {
  lucide.createIcons();
}`;

  return `// =========================================================
// PO UI Vanilla JavaScript: ${name}
// Controle Interativo sem Framework
// =========================================================
${code}`;
}

function highlightCode(code, lang) {
  let safe = escapeHTML(code);
  if (lang === 'html') {
    safe = safe.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-comm">$1</span>');
    safe = safe.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)/g, '$1<span class="tok-tag">$2</span>');
    safe = safe.replace(/([a-zA-Z0-9\-:]+)=(&quot;.*?&quot;|&#039;.*?&#039;)/g, '<span class="tok-attr">$1</span>=<span class="tok-str">$2</span>');
  } else if (lang === 'css') {
    safe = safe.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comm">$1</span>');
    safe = safe.replace(/(^|[\n\}])([^{]+)({)/g, function(m, p1, p2, p3) {
      return p1 + '<span class="tok-tag">' + p2 + '</span>' + p3;
    });
    safe = safe.replace(/([a-zA-Z\-]+)\s*:\s*([^;]+);/g, '<span class="tok-prop">$1</span>: <span class="tok-val">$2</span>;');
  } else if (lang === 'js') {
    safe = safe.replace(/(\/\/.*$)/gm, '<span class="tok-comm">$1</span>');
    safe = safe.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comm">$1</span>');
    safe = safe.replace(/(&quot;.*?&quot;|&#039;.*?&#039;|`.*?`)/g, '<span class="tok-str">$1</span>');
    const kws = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'new', 'async', 'await', 'import', 'export', 'class', 'extends'];
    kws.forEach(kw => {
      safe = safe.replace(new RegExp('\\b(' + kw + ')\\b', 'g'), '<span class="tok-kw">$1</span>');
    });
    const builtins = ['document', 'window', 'console', 'localStorage', 'sessionStorage', 'Math', 'JSON', 'Array', 'Object', 'lucide', 'PO'];
    builtins.forEach(b => {
      safe = safe.replace(new RegExp('\\b(' + b + ')\\b', 'g'), '<span class="tok-fn" style="color:#79c0ff">$1</span>');
    });
  }
  return safe;
}

function createCode(name, language = state.codeLanguage) {
  if (language === 'css') return componentCSS(name);
  if (language === 'js') return componentJavascript(name);
  return componentHTML(name);
}

function updateCodeView() {
  if (!state.current) return;
  const rawCode = createCode(state.current.name, state.codeLanguage);
  const codeBlock = $('#codeBlock');
  if (codeBlock) {
    codeBlock.innerHTML = highlightCode(rawCode, state.codeLanguage);
    codeBlock.dataset.raw = rawCode;
  }
  
  const ext = state.codeLanguage === 'js' ? 'js' : state.codeLanguage === 'css' ? 'css' : 'html';
  const linesCount = rawCode.split('\n').length;
  const badge = $('#codeFileBadge');
  if (badge) badge.textContent = `${state.current.name}.${ext} · ${linesCount} linhas`;

  const copyBtnText = $('#copyCode span');
  if (copyBtnText) copyBtnText.textContent = `Copiar ${state.codeLanguage === 'js' ? 'JavaScript' : state.codeLanguage.toUpperCase()}`;
}

function downloadFile(filename, content) {
  const mime = filename.endsWith('.html') ? 'text/html' : filename.endsWith('.css') ? 'text/css' : 'text/javascript';
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast(`Download de ${filename} concluído!`);
}

async function copyText(text) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard indisponível');
    await navigator.clipboard.writeText(text);
  } catch (_) {
    const helper = document.createElement('textarea');
    helper.value = text;
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.append(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
  }
}

function toast(message) {
  const item = document.createElement('div');
  item.className = 'toast';
  item.innerHTML = `${icon('circle-check')}<span>${escapeHTML(message)}</span>`;
  $('#toastRegion').append(item);
  refreshIcons();
  setTimeout(() => item.remove(), 3200);
}

function bindPreviewEvents(name) {
  const root = $('#componentPreview');

  // Toasts
  root.querySelectorAll('[data-toast]').forEach(btn => {
    btn.addEventListener('click', () => toast(btn.dataset.toast));
  });

  // Accordion
  root.querySelectorAll('.accordion-item > button').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
  });

  // Tabs
  root.querySelectorAll('.po-tabs-head button').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.querySelectorAll('button').forEach(tab => tab.classList.toggle('active', tab === btn));
      const content = btn.closest('.po-tabs')?.querySelector('.po-tab-content');
      if (content) content.textContent = `Visualizando conteúdo de "${btn.textContent}".`;
    });
  });

  // Dropdowns & Popovers
  root.querySelectorAll('[data-dropdown], [data-popover]').forEach(btn => {
    btn.addEventListener('click', event => {
      event.stopPropagation();
      const content = btn.nextElementSibling;
      if (content) content.hidden = !content.hidden;
    });
  });

  root.querySelectorAll('[data-popover-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const popover = btn.closest('.po-popover');
      if (popover) popover.hidden = true;
    });
  });

  // Button Group selection toggle
  root.querySelectorAll('.po-button-group button').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.querySelectorAll('button').forEach(item => item.classList.remove('active'));
      btn.classList.add('active');
      toast(`Opção selecionada: ${btn.textContent.trim()}`);
    });
  });

  // Breadcrumb Favorite button toggle
  root.querySelectorAll('[data-favorite-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const active = btn.classList.toggle('active');
      btn.title = active ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos';
      toast(active ? '⭐ Página favoritada com sucesso!' : 'Página removida dos favoritos.', active ? 'success' : 'warning');
    });
  });

  // 1. PO Breadcrumb Basic: Navegação Bidirecional com botão >
  const basicList = root.querySelector('#basicBreadcrumbList');
  const basicSteps = ['PO Portal', 'PO Breadcrumb'];
  let currentBasicIndex = 1;

  function renderBasicBreadcrumb(idx) {
    if (!basicList) return;
    currentBasicIndex = idx;
    let html = '';
    
    if (currentBasicIndex === 0) {
      html = `
        <li class="po-breadcrumb-item">
          <span class="po-breadcrumb-item-activate" aria-current="page">PO Portal</span>
          <button class="po-breadcrumb-expand-btn" data-step="1" title="Clique no > para avançar para PO Breadcrumb" aria-label="Avançar para PO Breadcrumb">
            <i data-lucide="chevron-right"></i>
          </button>
        </li>
      `;
    } else {
      html = `
        <li class="po-breadcrumb-item">
          <a href="#" class="po-breadcrumb-link" data-step="0">PO Portal</a>
          <i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i>
        </li>
        <li class="po-breadcrumb-item">
          <span class="po-breadcrumb-item-activate" aria-current="page">PO Breadcrumb</span>
        </li>
      `;
    }

    basicList.innerHTML = html;
    refreshIcons();
  }

  basicList?.addEventListener('click', e => {
    const link = e.target.closest('[data-step]');
    if (!link) return;
    e.preventDefault();
    const idx = parseInt(link.dataset.step);
    renderBasicBreadcrumb(idx);
    toast(`Navegando para: ${basicSteps[idx]}!`, 'success');
  });

  // 2. PO Breadcrumb Favorito: Navegação Livre Bidirecional com botão >
  const favList = root.querySelector('#favBreadcrumbList');
  const favSteps = ['Início', 'Comercial', 'Clientes', 'Clínica Aurora Saúde'];
  let currentFavIndex = 3;

  function renderFavBreadcrumb(idx) {
    if (!favList) return;
    currentFavIndex = idx;
    let html = '';
    favSteps.forEach((step, i) => {
      if (i < currentFavIndex) {
        html += `<li class="po-breadcrumb-item"><a href="#" class="po-breadcrumb-link" data-fav-step="${i}">${step}</a><i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i></li>`;
      } else if (i === currentFavIndex) {
        if (currentFavIndex < favSteps.length - 1) {
          html += `
            <li class="po-breadcrumb-item">
              <span class="po-breadcrumb-item-activate" aria-current="page">${step}</span>
              <button class="po-breadcrumb-expand-btn" data-fav-step="${currentFavIndex + 1}" title="Clique no > para avançar para ${favSteps[currentFavIndex + 1]}" aria-label="Avançar para ${favSteps[currentFavIndex + 1]}">
                <i data-lucide="chevron-right"></i>
              </button>
            </li>
          `;
        } else {
          html += `<li class="po-breadcrumb-item"><span class="po-breadcrumb-item-activate" aria-current="page">${step}</span></li>`;
        }
      }
    });
    favList.innerHTML = html;
    refreshIcons();
  }

  favList?.addEventListener('click', e => {
    const link = e.target.closest('[data-fav-step]');
    if (!link) return;
    e.preventDefault();
    const idx = parseInt(link.dataset.favStep);
    renderFavBreadcrumb(idx);
    toast(`Navegando para: ${favSteps[idx]}!`, 'success');
  });

  // 3. Breadcrumb Collapsed: Cliques nos itens do menu
  root.querySelectorAll('.po-dropdown-menu button[data-toast]').forEach(btn => {
    btn.addEventListener('click', () => {
      const parentMenu = btn.closest('.po-dropdown-menu');
      if (parentMenu) parentMenu.hidden = true;
    });
  });

  // 4. Breadcrumb Labs Interactive com suporte ao botão >
  const addBreadcrumbBtn = root.querySelector('#labsAddBreadcrumbBtn');
  const breadcrumbInput = root.querySelector('#labsBreadcrumbLabel');
  const breadcrumbList = root.querySelector('#labsBreadcrumbList');
  const resetBreadcrumbBtn = root.querySelector('#labsResetBreadcrumbBtn');
  let labsSteps = ['Início', 'Painel Geral'];
  let currentLabsIndex = 1;

  function renderLabsBreadcrumb() {
    if (!breadcrumbList) return;
    let html = '';
    labsSteps.forEach((step, i) => {
      if (i < currentLabsIndex) {
        html += `<li class="po-breadcrumb-item"><a href="#" class="po-breadcrumb-link" data-labs-step="${i}">${step}</a><i class="po-breadcrumb-icon-arrow" data-lucide="chevron-right"></i></li>`;
      } else if (i === currentLabsIndex) {
        if (currentLabsIndex < labsSteps.length - 1) {
          html += `
            <li class="po-breadcrumb-item">
              <span class="po-breadcrumb-item-activate" aria-current="page">${step}</span>
              <button class="po-breadcrumb-expand-btn" data-labs-step="${currentLabsIndex + 1}" title="Clique no > para avançar para ${labsSteps[currentLabsIndex + 1]}" aria-label="Avançar para ${labsSteps[currentLabsIndex + 1]}">
                <i data-lucide="chevron-right"></i>
              </button>
            </li>
          `;
        } else {
          html += `<li class="po-breadcrumb-item"><span class="po-breadcrumb-item-activate" aria-current="page">${step}</span></li>`;
        }
      }
    });
    breadcrumbList.innerHTML = html;
    refreshIcons();
  }

  breadcrumbList?.addEventListener('click', e => {
    const link = e.target.closest('[data-labs-step]');
    if (!link) return;
    e.preventDefault();
    const idx = parseInt(link.dataset.labsStep);
    currentLabsIndex = idx;
    renderLabsBreadcrumb();
    toast(`Navegando para: ${labsSteps[idx]}!`, 'success');
  });

  if (addBreadcrumbBtn && breadcrumbInput) {
    addBreadcrumbBtn.addEventListener('click', () => {
      const label = breadcrumbInput.value.trim();
      if (!label) {
        toast('Digite um título para o breadcrumb!', 'warning');
        breadcrumbInput.focus();
        return;
      }
      labsSteps.splice(currentLabsIndex + 1);
      labsSteps.push(label);
      currentLabsIndex = labsSteps.length - 1;
      renderLabsBreadcrumb();
      breadcrumbInput.value = '';
      breadcrumbInput.focus();
      toast(`Nível "${label}" adicionado ao breadcrumb!`);
    });

    resetBreadcrumbBtn?.addEventListener('click', () => {
      labsSteps = ['Início', 'Painel Geral'];
      currentLabsIndex = 1;
      renderLabsBreadcrumb();
      toast('Breadcrumb restaurado.');
    });
  }

  // Button Labs Interactive
  const labsBtn = root.querySelector('#labsButtonTarget');
  const labsLabel = root.querySelector('#labsButtonLabel');
  const labsIcon = root.querySelector('#labsButtonIcon');
  const labsInput = root.querySelector('#labsInputLabel');
  const labsIconSelect = root.querySelector('#labsSelectIcon');
  const labsPropDanger = root.querySelector('#labsPropDanger');
  const labsPropLoading = root.querySelector('#labsPropLoading');
  const labsPropDisabled = root.querySelector('#labsPropDisabled');
  const labsRestoreBtn = root.querySelector('#labsRestoreBtn');

  function updateLabsButton() {
    if (!labsBtn) return;
    
    // Label
    if (labsLabel && labsInput) {
      labsLabel.textContent = labsInput.value || 'Botão PO UI';
    }

    // Kind
    const kind = root.querySelector('input[name="labsKind"]:checked')?.value || 'primary';
    labsBtn.classList.remove('primary', 'ghost');
    if (kind === 'primary') labsBtn.classList.add('primary');
    if (kind === 'tertiary') labsBtn.classList.add('ghost');

    // Size
    const size = root.querySelector('input[name="labsSize"]:checked')?.value || 'md';
    labsBtn.classList.remove('sm', 'lg');
    if (size === 'sm') labsBtn.classList.add('sm');
    if (size === 'lg') labsBtn.classList.add('lg');

    // Props
    labsBtn.classList.toggle('danger', !!labsPropDanger?.checked);
    labsBtn.classList.toggle('is-loading', !!labsPropLoading?.checked);
    labsBtn.disabled = !!labsPropDisabled?.checked;

    // Icon
    const iconName = labsIconSelect?.value || 'check';
    if (labsIcon) {
      if (iconName === 'none') {
        labsIcon.hidden = true;
      } else {
        labsIcon.hidden = false;
        labsIcon.setAttribute('data-lucide', iconName);
      }
    }
    refreshIcons();
  }

  if (labsBtn) {
    labsInput?.addEventListener('input', updateLabsButton);
    root.querySelectorAll('input[name="labsKind"], input[name="labsSize"]').forEach(r => r.addEventListener('change', updateLabsButton));
    labsPropDanger?.addEventListener('change', updateLabsButton);
    labsPropLoading?.addEventListener('change', updateLabsButton);
    labsPropDisabled?.addEventListener('change', updateLabsButton);
    labsIconSelect?.addEventListener('change', updateLabsButton);

    labsRestoreBtn?.addEventListener('click', () => {
      if (labsInput) labsInput.value = 'PO Button Labs';
      const kindPrimary = root.querySelector('input[name="labsKind"][value="primary"]');
      if (kindPrimary) kindPrimary.checked = true;
      const sizeMd = root.querySelector('input[name="labsSize"][value="md"]');
      if (sizeMd) sizeMd.checked = true;
      if (labsPropDanger) labsPropDanger.checked = false;
      if (labsPropLoading) labsPropLoading.checked = false;
      if (labsPropDisabled) labsPropDisabled.checked = false;
      if (labsIconSelect) labsIconSelect.value = 'check';
      updateLabsButton();
      toast('Configurações de laboratório restauradas!');
    });
  }

  // Password toggle
  root.querySelector('#togglePassword')?.addEventListener('click', () => {
    const pass = root.querySelector('#passwordDemo');
    if (pass) {
      pass.type = pass.type === 'password' ? 'text' : 'password';
      toast(`Senha ${pass.type === 'password' ? 'ocultada' : 'visível'}`);
    }
  });

  // Clean button
  root.querySelector('#cleanDemoBtn')?.addEventListener('click', () => {
    const input = root.querySelector('#cleanDemoInput');
    if (input) {
      input.value = '';
      input.focus();
      toast('Campo limpo!');
    }
  });

  // Tree view
  root.querySelectorAll('[data-tree]').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = btn.parentElement.querySelector('ul');
      if (!list) return;
      list.classList.toggle('collapsed');
      btn.textContent = list.classList.contains('collapsed') ? '+' : '−';
    });
  });

  // Listbox
  root.querySelectorAll('.po-listbox button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.querySelectorAll('button').forEach(item => item.classList.remove('selected'));
      btn.classList.add('selected');
      toast(`Item selecionado: ${btn.textContent.trim().split('\n')[0]}`);
    });
  });

  // Modais
  root.querySelector('[data-open-modal]')?.addEventListener('click', () => {
    $('#modalBackdrop').hidden = false;
  });

  root.querySelector('#openLookupBtn')?.addEventListener('click', () => {
    $('#lookupModalBackdrop').hidden = false;
  });

  // Stepper Interactive
  const stepper = root.querySelector('#stepperDemo');
  const stepperStepContent = root.querySelector('#stepperStepContent');
  let currentStep = 2;
  const stepTitles = [
    'Identificação e Dados Cadastrais',
    'Preenchimento do Endereço e Localização de Faturamento',
    'Condições de Pagamento e Faturamento Fiscal',
    'Revisão Final e Confirmação do Pedido'
  ];

  function updateStepper() {
    if (!stepper) return;
    stepper.querySelectorAll('.po-step').forEach((st, idx) => {
      const stepNum = idx + 1;
      st.classList.remove('done', 'active');
      if (stepNum < currentStep) {
        st.classList.add('done');
        st.querySelector('i').innerHTML = `<i data-lucide="check"></i>`;
      } else if (stepNum === currentStep) {
        st.classList.add('active');
        st.querySelector('i').textContent = `${stepNum}`;
      } else {
        st.querySelector('i').textContent = `${stepNum}`;
      }
    });
    if (stepperStepContent) {
      stepperStepContent.innerHTML = `Etapa Atual (${currentStep}/4): <b>${stepTitles[currentStep - 1]}</b>.`;
    }
    refreshIcons();
  }

  root.querySelector('#stepperNextBtn')?.addEventListener('click', () => {
    if (currentStep < 4) {
      currentStep++;
      updateStepper();
      toast(`Avançando para: ${stepTitles[currentStep - 1]}`);
    } else {
      toast('🎉 Processo concluído com sucesso!', 'success');
    }
  });

  root.querySelector('#stepperPrevBtn')?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepper();
      toast(`Retornando para: ${stepTitles[currentStep - 1]}`);
    }
  });

  // Switch Text Toggle
  root.querySelector('#switchDemo1')?.addEventListener('change', e => {
    const txt = root.querySelector('#switchStatusText1');
    if (txt) txt.innerHTML = `Notificações em tempo real: <b>${e.target.checked ? 'Ativadas' : 'Desativadas'}</b>`;
    toast(`Notificações ${e.target.checked ? 'ativadas' : 'desativadas'}.`);
  });

  root.querySelector('#switchDemo2')?.addEventListener('change', e => {
    const txt = root.querySelector('#switchStatusText2');
    if (txt) txt.innerHTML = `Sincronização em nuvem: <b>${e.target.checked ? 'Ativada' : 'Desativada'}</b>`;
    toast(`Sincronização ${e.target.checked ? 'ativada' : 'desativada'}.`);
  });

  // Input Basic clean
  root.querySelector('#cleanInputBasicBtn')?.addEventListener('click', () => {
    const input = root.querySelector('#inputBasicDemo');
    if (input) {
      input.value = '';
      input.focus();
      toast('Campo de texto limpo.');
    }
  });

  // Multiselect tag remove
  root.querySelectorAll('.multiselect-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.closest('.po-tag');
      if (tag) {
        tag.remove();
        toast('Módulo removido da seleção.');
      }
    });
  });

  // Table Select All
  root.querySelector('#selectAllDemo')?.addEventListener('change', e => {
    root.querySelectorAll('#tableDemoBody input[type="checkbox"]').forEach(chk => {
      chk.checked = e.target.checked;
    });
    toast(e.target.checked ? 'Todos os 3 pedidos selecionados.' : 'Seleção desmarcada.');
  });

  // Login Password Toggle
  root.querySelector('#toggleLoginPass')?.addEventListener('click', () => {
    const pass = root.querySelector('#loginPassInput');
    if (pass) {
      pass.type = pass.type === 'password' ? 'text' : 'password';
    }
  });

  // Progress Bar
  const progressText = root.querySelector('#progressText');
  const progressBar = root.querySelector('#progressBar');
  root.querySelector('#advanceProgressBtn')?.addEventListener('click', () => {
    if (!progressBar) return;
    const cur = parseInt(progressBar.style.width) || 0;
    const next = Math.min(100, cur + 15);
    progressBar.style.width = `${next}%`;
    if (progressText) progressText.textContent = `${next}%`;
    if (next === 100) toast('🎉 Sincronização 100% concluída!', 'success');
  });
  root.querySelector('#resetProgressBtn')?.addEventListener('click', () => {
    if (!progressBar) return;
    progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0%';
    toast('Progresso reiniciado.');
  });

  // Overlay
  root.querySelector('[data-overlay]')?.addEventListener('click', e => {
    const card = e.currentTarget.closest('.po-widget');
    if (!card) return;
    const original = card.innerHTML;
    card.innerHTML = `
      <div style="text-align:center;padding:30px">
        <div class="po-loading"></div>
        <p style="margin-top:10px;font-weight:700">Bloqueio Overlay Ativo...</p>
      </div>
    `;
    setTimeout(() => {
      card.innerHTML = original;
      bindPreviewEvents(name);
      toast('Operação concluída com sucesso!');
    }, 1600);
  });

  // Upload status
  root.querySelector('#uploadFileDemo')?.addEventListener('change', e => {
    const files = e.target.files;
    const label = root.querySelector('#uploadStatusText');
    if (label) label.textContent = `${files.length} arquivo(s) selecionado(s): ${Array.from(files).map(f => f.name).join(', ')}`;
    toast(`${files.length} arquivo(s) prontos para envio.`);
  });

  // Rich text commands
  root.querySelectorAll('[data-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.execCommand(btn.dataset.cmd, false, null);
    });
  });

  // Avatar Labs Interactive
  const labsAvatar = root.querySelector('#labsAvatarTarget');
  const labsAvatarSize = root.querySelector('#labsAvatarSizeSelect');
  const labsAvatarStatusSelect = root.querySelector('#labsAvatarStatusSelect');
  const labsAvatarType = root.querySelector('#labsAvatarTypeSelect');
  const labsAvatarRestore = root.querySelector('#labsAvatarRestoreBtn');

  function updateLabsAvatar() {
    if (!labsAvatar) return;
    
    // Size
    labsAvatar.className = `po-avatar ${labsAvatarSize?.value || 'lg'} po-clickable`;

    // Type
    const type = labsAvatarType?.value || 'image';
    if (type === 'image') {
      labsAvatar.innerHTML = `
        <img class="po-avatar-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" alt="Avatar">
        <span class="po-avatar-status" id="labsAvatarStatus"></span>
      `;
    } else if (type === 'initials') {
      labsAvatar.innerHTML = `
        <span>MA</span>
        <span class="po-avatar-status" id="labsAvatarStatus"></span>
      `;
    } else {
      labsAvatar.innerHTML = `
        <i data-lucide="user"></i>
        <span class="po-avatar-status" id="labsAvatarStatus"></span>
      `;
    }

    // Status
    const newStatus = labsAvatar.querySelector('#labsAvatarStatus');
    if (newStatus) {
      const st = labsAvatarStatusSelect?.value || 'online';
      if (st === 'none') {
        newStatus.hidden = true;
      } else {
        newStatus.hidden = false;
        newStatus.className = `po-avatar-status ${st === 'online' ? '' : st}`;
      }
    }
    refreshIcons();
  }

  labsAvatarSize?.addEventListener('change', () => {
    updateLabsAvatar();
    toast(`Tamanho alterado para: ${labsAvatarSize.value.toUpperCase()}`);
  });

  labsAvatarStatusSelect?.addEventListener('change', () => {
    updateLabsAvatar();
    toast(`Status alterado para: ${labsAvatarStatusSelect.options[labsAvatarStatusSelect.selectedIndex].text}`);
  });

  labsAvatarType?.addEventListener('change', () => {
    updateLabsAvatar();
    toast(`Tipo alterado para: ${labsAvatarType.options[labsAvatarType.selectedIndex].text}`);
  });

  labsAvatar?.addEventListener('click', () => {
    toast('Avatar clicado! Evento (p-click) disparado com sucesso.');
  });

  root.querySelector('#businessCardAvatar')?.addEventListener('click', () => {
    toast('📸 Abrindo imagem de perfil ampliada de Marina Almeida...');
  });

  labsAvatarRestore?.addEventListener('click', () => {
    if (labsAvatarSize) labsAvatarSize.value = 'lg';
    if (labsAvatarStatusSelect) labsAvatarStatusSelect.value = 'online';
    if (labsAvatarType) labsAvatarType.value = 'image';
    updateLabsAvatar();
    toast('Laboratório de Avatar restaurado.');
  });

  // Calendar Basic interactive
  root.querySelectorAll('#calendarBasic .calendar-day:not(.other-month)').forEach(btn => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('#calendarBasic .calendar-day').forEach(d => d.classList.remove('selected'));
      btn.classList.add('selected');
      const day = btn.textContent.trim().padStart(2, '0');
      toast(`Data selecionada: ${day}/08/2026`);
    });
  });

  // Calendar Range and Presets
  const presetsGroup = root.querySelector('#calendarPresetsGroup');
  const calRange = root.querySelector('#calendarRange');
  if (presetsGroup && calRange) {
    presetsGroup.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        presetsGroup.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const p = btn.dataset.preset;
        
        calRange.querySelectorAll('.calendar-day').forEach(d => {
          d.classList.remove('range-start', 'in-range', 'range-end', 'selected');
        });

        const days = calRange.querySelectorAll('.calendar-day:not(.other-month)');
        if (p === 'week') {
          days[9]?.classList.add('range-start');
          for (let i = 10; i <= 13; i++) days[i]?.classList.add('in-range');
          days[14]?.classList.add('range-end');
          toast('Filtro aplicado: Esta Semana (10/08 a 15/08)');
        } else if (p === 'month') {
          days[0]?.classList.add('range-start');
          for (let i = 1; i <= 29; i++) days[i]?.classList.add('in-range');
          days[30]?.classList.add('range-end');
          toast('Filtro aplicado: Este Mês (01/08 a 31/08)');
        } else if (p === 'last7') {
          days[23]?.classList.add('range-start');
          for (let i = 24; i <= 28; i++) days[i]?.classList.add('in-range');
          days[29]?.classList.add('range-end');
          toast('Filtro aplicado: Últimos 7 dias (24/08 a 30/08)');
        } else if (p === 'last30') {
          days[0]?.classList.add('range-start');
          for (let i = 1; i <= 28; i++) days[i]?.classList.add('in-range');
          days[29]?.classList.add('range-end');
          toast('Filtro aplicado: Últimos 30 dias (01/08 a 30/08)');
        } else {
          toast('Selecione uma data inicial e final no calendário.');
        }
      });
    });
  }

  // Calendar Labs
  const labsCalModel = root.querySelector('#labsCalModel');
  const labsCalEvent = root.querySelector('#labsCalEvent');
  const labsCalMode = root.querySelector('#labsCalMode');
  const labsCalLocale = root.querySelector('#labsCalLocale');
  const labsCalMonthYear = root.querySelector('#labsCalMonthYear');
  let labsRangeStart = null;

  root.querySelectorAll('#labsCalGrid .calendar-day:not(.other-month)').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayNum = parseInt(btn.textContent.trim());
      const dayStr = dayNum.toString().padStart(2, '0');
      const isRange = labsCalMode?.value === 'range';

      if (!isRange) {
        root.querySelectorAll('#labsCalGrid .calendar-day').forEach(d => d.classList.remove('selected', 'range-start', 'in-range', 'range-end'));
        btn.classList.add('selected');
        const dt = `2026-08-${dayStr}`;
        if (labsCalModel) labsCalModel.textContent = `"${dt}"`;
        if (labsCalEvent) labsCalEvent.textContent = `p-change: "${dt}"`;
        toast(`Data selecionada: ${dayStr}/08/2026`);
      } else {
        if (!labsRangeStart || labsRangeStart > dayNum) {
          labsRangeStart = dayNum;
          root.querySelectorAll('#labsCalGrid .calendar-day').forEach(d => d.classList.remove('selected', 'range-start', 'in-range', 'range-end'));
          btn.classList.add('range-start');
          if (labsCalModel) labsCalModel.textContent = `{"start": "2026-08-${dayStr}", "end": null}`;
          if (labsCalEvent) labsCalEvent.textContent = `p-change: "2026-08-${dayStr}"`;
          toast(`Início do intervalo: ${dayStr}/08/2026`);
        } else {
          const days = root.querySelectorAll('#labsCalGrid .calendar-day:not(.other-month)');
          days.forEach(d => {
            const cur = parseInt(d.textContent.trim());
            if (cur === labsRangeStart) d.classList.add('range-start');
            else if (cur > labsRangeStart && cur < dayNum) d.classList.add('in-range');
            else if (cur === dayNum) d.classList.add('range-end');
          });
          const startStr = labsRangeStart.toString().padStart(2, '0');
          if (labsCalModel) labsCalModel.textContent = `{"start": "2026-08-${startStr}", "end": "2026-08-${dayStr}"}`;
          if (labsCalEvent) labsCalEvent.textContent = `p-change: "${startStr}/08/2026 a ${dayStr}/08/2026"`;
          toast(`Intervalo selecionado: ${startStr}/08 a ${dayStr}/08/2026`);
          labsRangeStart = null;
        }
      }
    });
  });

  labsCalMode?.addEventListener('change', () => {
    labsRangeStart = null;
    root.querySelectorAll('#labsCalGrid .calendar-day').forEach(d => d.classList.remove('selected', 'range-start', 'in-range', 'range-end'));
    const def = root.querySelectorAll('#labsCalGrid .calendar-day:not(.other-month)')[29];
    if (def) def.classList.add('selected');
    if (labsCalModel) labsCalModel.textContent = `"2026-08-30"`;
    toast(`Modo de seleção alterado para: ${labsCalMode.value.toUpperCase()}`);
  });

  labsCalLocale?.addEventListener('change', () => {
    const loc = labsCalLocale.value;
    const dayNames = root.querySelectorAll('#labsCalGrid .day-name');
    if (loc === 'en') {
      const enDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      dayNames.forEach((el, i) => { if (enDays[i]) el.textContent = enDays[i]; });
      if (labsCalMonthYear) labsCalMonthYear.textContent = 'August 2026';
    } else if (loc === 'es') {
      const esDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      dayNames.forEach((el, i) => { if (esDays[i]) el.textContent = esDays[i]; });
      if (labsCalMonthYear) labsCalMonthYear.textContent = 'Agosto 2026';
    } else {
      const ptDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
      dayNames.forEach((el, i) => { if (ptDays[i]) el.textContent = ptDays[i]; });
      if (labsCalMonthYear) labsCalMonthYear.textContent = 'Agosto 2026';
    }
    toast(`Idioma alterado para: ${labsCalLocale.options[labsCalLocale.selectedIndex].text}`);
  });

  root.querySelector('#labsCalRestoreBtn')?.addEventListener('click', () => {
    if (labsCalMode) labsCalMode.value = 'single';
    if (labsCalLocale) {
      labsCalLocale.value = 'pt';
      labsCalLocale.dispatchEvent(new Event('change'));
    }
    toast('Laboratório de Calendário restaurado.');
  });

  // Ticket Sales Calculation
  const ticketAdults = root.querySelector('#ticketAdults');
  const ticketKids = root.querySelector('#ticketKids');
  const ticketTotal = root.querySelector('#ticketTotalAmount');
  let selectedTicketDay = 30;

  function updateTicketPrice() {
    if (!ticketTotal) return;
    const adults = parseInt(ticketAdults?.value) || 1;
    const kids = parseInt(ticketKids?.value) || 0;
    
    const weekendDays = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    const isWeekend = weekendDays.includes(selectedTicketDay);
    const priceAdult = isWeekend ? 20 : 10;
    const priceKid = isWeekend ? 10 : 5;

    const total = (adults * priceAdult) + (kids * priceKid);
    ticketTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  ticketAdults?.addEventListener('change', updateTicketPrice);
  ticketKids?.addEventListener('change', updateTicketPrice);

  root.querySelectorAll('#ticketCalendar .calendar-day:not(.other-month)').forEach(btn => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('#ticketCalendar .calendar-day').forEach(d => d.classList.remove('selected'));
      btn.classList.add('selected');
      selectedTicketDay = parseInt(btn.textContent.trim());
      updateTicketPrice();
      toast(`Data do evento selecionada: ${selectedTicketDay.toString().padStart(2, '0')}/08/2026`);
    });
  });

  root.querySelector('#ticketBuyBtn')?.addEventListener('click', () => {
    const total = ticketTotal?.textContent || 'R$ 20,00';
    toast(`🎟️ Compra realizada com sucesso no valor de ${total} para o dia ${selectedTicketDay.toString().padStart(2, '0')}/08/2026!`, 'success');
  });

  // Search hint
  root.querySelector('#localSearchDemo')?.addEventListener('input', e => {
    const val = e.target.value;
    const hint = root.querySelector('#localSearchHint');
    if (hint) hint.textContent = val ? `Buscando por “${val}”...` : 'Aguardando termo de pesquisa...';
  });

  // Timer
  const timerStart = root.querySelector('#timerStartBtn');
  const timerReset = root.querySelector('#timerResetBtn');
  if (timerStart) {
    timerStart.addEventListener('click', () => {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
        timerStart.innerHTML = `<i data-lucide="play"></i> Continuar`;
        refreshIcons();
        return;
      }
      timerStart.innerHTML = `<i data-lucide="pause"></i> Pausar`;
      refreshIcons();
      state.timerId = setInterval(() => {
        state.timerSeconds++;
        const disp = root.querySelector('#timerDisplay');
        if (disp) {
          const m = String(Math.floor(state.timerSeconds / 60)).padStart(2, '0');
          const s = String(state.timerSeconds % 60).padStart(2, '0');
          disp.textContent = `${m}:${s}`;
        }
      }, 1000);
    });
  }
  if (timerReset) {
    timerReset.addEventListener('click', () => {
      clearInterval(state.timerId);
      state.timerId = null;
      state.timerSeconds = 0;
      const disp = root.querySelector('#timerDisplay');
      if (disp) disp.textContent = '00:00';
      if (timerStart) {
        timerStart.innerHTML = `<i data-lucide="play"></i> Iniciar`;
        refreshIcons();
      }
    });
  }
}

function bindAppEvents() {
  // Clique global
  document.addEventListener('click', event => {
    // Abrir componente
    const compTarget = event.target.closest('[data-component]');
    if (compTarget) openComponent(compTarget.dataset.component);

    const openTarget = event.target.closest('[data-open]');
    if (openTarget) openComponent(openTarget.dataset.open);

    // Filtros
    const filter = event.target.closest('[data-filter]');
    if (filter) {
      state.filter = filter.dataset.filter;
      renderFilters();
      renderGrid();
    }

    // Fechar dropdowns ao clicar fora
    if (!event.target.closest('.dropdown-wrap') && !event.target.closest('.popover-wrap')) {
      $$('.po-dropdown-menu, .po-popover').forEach(el => el.hidden = true);
    }

    // Selecionar no modal de lookup
    const lookupSel = event.target.closest('[data-select-lookup]');
    if (lookupSel) {
      const val = lookupSel.dataset.selectLookup;
      const input = $('#lookupFieldInput');
      if (input) input.value = val;
      $('#lookupModalBackdrop').hidden = true;
      toast(`Registro selecionado: ${val}`);
    }
  });

  // Teclado
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      search.focus();
    }
    if (event.key === 'Escape') {
      $('#modalBackdrop').hidden = true;
      $('#lookupModalBackdrop').hidden = true;
      $('#sidebar').classList.remove('open');
      $$('.po-dropdown-menu, .po-popover').forEach(el => el.hidden = true);
    }
    if (event.key === 'Enter' && event.target.classList.contains('component-card')) {
      openComponent(event.target.dataset.component);
    }
  });

  // Busca global
  search.addEventListener('input', event => {
    state.query = event.target.value;
    if ($('#homeView').hidden) showHome(true);
    renderGrid();
  });

  $('.brand')?.addEventListener('click', event => {
    event.preventDefault();
    showHome(false);
  });
  $('#showAllButton')?.addEventListener('click', () => showHome(true));
  $('#backButton')?.addEventListener('click', () => showHome(false));

  // Menu mobile
  $('#menuToggle')?.addEventListener('click', event => {
    const open = $('#sidebar').classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', open);
  });

  // Alternador de tema
  $('#themeToggle')?.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = dark ? '' : 'dark';
    localStorage.setItem('po-theme', dark ? 'light' : 'dark');
    $('#themeToggle').innerHTML = icon(dark ? 'moon' : 'sun');
    refreshIcons();
  });

  // Abas de detalhe (Exemplo / Código)
  $$('.detail-tabs button').forEach(button => {
    button.addEventListener('click', () => {
      $$('.detail-tabs button').forEach(tab => {
        const active = tab === button;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active);
      });
      $$('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `${button.dataset.tab}Panel`);
      });
    });
  });

  // Abas de linguagem de código (HTML / CSS / JS)
  $$('.code-languages button').forEach(button => {
    button.addEventListener('click', () => {
      state.codeLanguage = button.dataset.language;
      $$('.code-languages button').forEach(tab => {
        const active = tab === button;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active);
      });
      updateCodeView();
    });
  });

  // Viewport (Desktop / Mobile)
  $$('[data-viewport]').forEach(button => {
    button.addEventListener('click', () => {
      $$('[data-viewport]').forEach(item => item.classList.toggle('active', item === button));
      $('#previewStage').classList.toggle('mobile', button.dataset.viewport === 'mobile');
    });
  });

  // Copiar código
  $('#copyCode')?.addEventListener('click', async event => {
    if (!state.current) return;
    const rawCode = $('#codeBlock')?.dataset.raw || createCode(state.current.name, state.codeLanguage);
    await copyText(rawCode);
    const langLabel = state.codeLanguage === 'js' ? 'JavaScript' : state.codeLanguage.toUpperCase();
    toast(`Código ${langLabel} de ${state.current.name} copiado para a área de transferência!`);
    
    event.currentTarget.innerHTML = `<i data-lucide="check"></i><span>Copiado!</span>`;
    refreshIcons();
    setTimeout(() => {
      event.currentTarget.innerHTML = `<i data-lucide="copy"></i><span>Copiar ${langLabel}</span>`;
      refreshIcons();
    }, 1800);
  });

  // Baixar arquivo de código
  $('#downloadCode')?.addEventListener('click', () => {
    if (!state.current) return;
    const ext = state.codeLanguage === 'js' ? 'js' : state.codeLanguage === 'css' ? 'css' : 'html';
    const filename = `${state.current.name}.${ext}`;
    const rawCode = $('#codeBlock')?.dataset.raw || createCode(state.current.name, state.codeLanguage);
    downloadFile(filename, rawCode);
  });

  // Modais de confirmação e lookup
  $$('[data-close-modal]').forEach(b => b.addEventListener('click', () => $('#modalBackdrop').hidden = true));
  $('[data-confirm-modal]')?.addEventListener('click', () => {
    $('#modalBackdrop').hidden = true;
    toast('Ação confirmada!');
  });
  $$('[data-close-lookup]').forEach(b => b.addEventListener('click', () => $('#lookupModalBackdrop').hidden = true));
}

function init() {
  if (localStorage.getItem('po-theme') === 'dark') {
    document.documentElement.dataset.theme = 'dark';
  }

  renderNavigation();
  renderFilters();
  renderGrid();
  bindAppEvents();

  if (document.documentElement.dataset.theme === 'dark') {
    $('#themeToggle').innerHTML = icon('sun');
  }

  refreshIcons();

  const route = location.hash.match(/#\/componente\/(.+)/);
  if (route) {
    openComponent(route[1]);
  }
}

init();
