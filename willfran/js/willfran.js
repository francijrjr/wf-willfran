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
      item.innerHTML = '<i data-lucide="' + (type === 'danger' ? 'alert-octagon' : type === 'warning' ? 'alert-triangle' : 'check-circle') + '"></i><span>' + message + '</span>';
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

      document.querySelectorAll('[data-close-modal]').forEach(button => {
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
