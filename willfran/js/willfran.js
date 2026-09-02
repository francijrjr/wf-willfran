(function (global) {
  'use strict';

  const willfran = {
    toast: function (message, type = 'success', duration = 3200) {
      let region = document.querySelector('#poToastRegion');
      if (!region) {
        region = document.createElement('div');
        region.id = 'poToastRegion';
        region.className = 'toast-region';
        document.body.appendChild(region);
      }

      const item = document.createElement('div');
      item.className = 'toast ' + type;
      item.innerHTML = '<i data-lucide="' + (type === 'danger' ? 'alert-octagon' : type === 'warning' ? 'alert-triangle' : 'check-circle') + '"></i>';
      const text = document.createElement('span');
      text.textContent = message;
      item.appendChild(text);
      region.appendChild(item);

      if (global.lucide) global.lucide.createIcons();
      setTimeout(() => item.remove(), duration);
    },

    openModal: function (modalSelector) {
      const modal = document.querySelector(modalSelector);
      if (modal) modal.hidden = false;
    },

    closeModal: function (modalSelector) {
      const modal = document.querySelector(modalSelector);
      if (modal) modal.hidden = true;
    },

    init: function () {
      document.querySelectorAll('[data-toast]').forEach(button => {
        button.addEventListener('click', () => {
          willfran.toast(button.dataset.toast || 'Ação concluída.');
        });
      });

      document.querySelectorAll('.accordion-item > button').forEach(button => {
        button.addEventListener('click', () => {
          button.parentElement.classList.toggle('open');
        });
      });

      document.querySelectorAll('.po-tabs-head button').forEach(button => {
        button.addEventListener('click', () => {
          const parent = button.parentElement;
          parent.querySelectorAll('button').forEach(tab => tab.classList.toggle('active', tab === button));
        });
      });

      document.querySelectorAll('[data-dropdown], [data-popover]').forEach(trigger => {
        trigger.addEventListener('click', event => {
          event.stopPropagation();
          const target = trigger.nextElementSibling;
          if (target) target.hidden = !target.hidden;
        });
      });

      document.addEventListener('click', event => {
        if (!event.target.closest('.dropdown-wrap') && !event.target.closest('.popover-wrap')) {
          document.querySelectorAll('.po-dropdown-menu, .po-popover').forEach(element => {
            element.hidden = true;
          });
        }
      });

      document.querySelectorAll('[data-toggle-password]').forEach(button => {
        button.addEventListener('click', () => {
          const input = button.parentElement.querySelector('input');
          if (input) input.type = input.type === 'password' ? 'text' : 'password';
        });
      });

      const passwordButton = document.querySelector('#passDemoToggleBtn');
      const passwordInput = document.querySelector('#passDemoInput');
      passwordButton?.addEventListener('click', () => {
        if (passwordInput) passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      });

      document.querySelectorAll('.po-button-group button').forEach(button => {
        button.addEventListener('click', () => {
          const group = button.closest('.po-button-group');
          group?.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
        });
      });

      document.querySelectorAll('[data-menu-item]').forEach(button => {
        button.addEventListener('click', () => {
          const menu = button.closest('.po-menu-demo');
          menu?.querySelectorAll('[data-menu-item]').forEach(item => {
            item.classList.toggle('active', item === button);
            if (item === button) item.setAttribute('aria-current', 'page');
            else item.removeAttribute('aria-current');
          });
          const feedback = menu?.querySelector('.po-menu-feedback');
          if (feedback) feedback.textContent = 'Selecionado: ' + button.dataset.menuLabel;
        });
      });

      document.querySelectorAll('[data-open-modal]').forEach(button => {
        button.addEventListener('click', () => willfran.openModal('#modalBackdrop'));
      });

      document.querySelector('#openLookupBtn')?.addEventListener('click', () => {
        willfran.openModal('#lookupModalBackdrop');
      });

      const selectAll = document.querySelector('#selectAllDemo');
      selectAll?.addEventListener('change', event => {
        document.querySelectorAll('#tableDemoBody input[type="checkbox"]').forEach(checkbox => {
          checkbox.checked = event.target.checked;
        });
      });

      document.querySelectorAll('.po-listbox button').forEach(button => {
        button.addEventListener('click', () => {
          button.parentElement?.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
        });
      });

      document.querySelectorAll('[data-tree]').forEach(button => {
        button.addEventListener('click', () => {
          const branch = button.closest('.po-tree-branch');
          const list = branch?.querySelector(':scope > ul');
          if (!list) return;
          const expanded = button.getAttribute('aria-expanded') !== 'true';
          list.classList.toggle('collapsed', !expanded);
          button.setAttribute('aria-expanded', String(expanded));
          branch.setAttribute('aria-expanded', String(expanded));
          button.querySelector('[data-lucide]')?.setAttribute('data-lucide', expanded ? 'chevron-down' : 'chevron-right');
          if (global.lucide) global.lucide.createIcons();
        });
      });

      document.querySelectorAll('[data-tree-file]').forEach(button => {
        button.addEventListener('click', () => {
          document.querySelectorAll('[data-tree-file]').forEach(item => item.classList.toggle('active', item === button));
          const feedback = button.closest('.po-tree')?.querySelector('.po-tree-feedback');
          if (feedback) feedback.textContent = 'Selecionado: ' + button.textContent.trim();
        });
      });

      document.querySelectorAll('[data-close-modal], [data-close-lookup]').forEach(button => {
        button.addEventListener('click', () => {
          const backdrop = button.closest('.modal-backdrop');
          if (backdrop) backdrop.hidden = true;
        });
      });

      if (global.lucide) global.lucide.createIcons();
    }
  };

  global.willfran = willfran;

  document.addEventListener('DOMContentLoaded', () => {
    willfran.init();
  });
})(window);
