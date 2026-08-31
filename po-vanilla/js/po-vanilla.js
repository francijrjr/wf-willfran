/**
 * PO UI Vanilla JS Library
 * Suporte interativo oficial para componentes PO UI em Vanilla JavaScript
 */
(function (global) {
  'use strict';

  const PO = {
    // Exibe notificação flutuante toast
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

 // Controle de modal
 openModal: function (modalSelector) {
 const modal = document.querySelector(modalSelector);
 if (modal) modal.hidden = false;
 },

 closeModal: function (modalSelector) {
 const modal = document.querySelector(modalSelector);
 if (modal) modal.hidden = true;
 },

 // Inicializa listeners automáticos em componentes com atributos data-*
 init: function () {
 // Accordion
 document.querySelectorAll('.accordion-item > button').forEach(button => {
 button.addEventListener('click', () => {
 button.parentElement.classList.toggle('open');
 });
 });

 // Tabs
 document.querySelectorAll('.po-tabs-head button').forEach(button => {
 button.addEventListener('click', () => {
 const parent = button.parentElement;
 parent.querySelectorAll('button').forEach(tab => tab.classList.toggle('active', tab === button));
 });
 });

 // Dropdown & Popovers
 document.querySelectorAll('[data-dropdown], [data-popover]').forEach(trigger => {
 trigger.addEventListener('click', (e) => {
 e.stopPropagation();
 const target = trigger.nextElementSibling;
 if (target) target.hidden = !target.hidden;
 });
 });

 document.addEventListener('click', (e) => {
 if (!e.target.closest('.dropdown-wrap') && !e.target.closest('.popover-wrap')) {
 document.querySelectorAll('.po-dropdown-menu, .po-popover').forEach(el => el.hidden = true);
 }
 });

 // Password toggle
 document.querySelectorAll('[data-toggle-password]').forEach(btn => {
 btn.addEventListener('click', () => {
 const input = btn.parentElement.querySelector('input');
 if (input) {
 input.type = input.type === 'password' ? 'text' : 'password';
 }
 });
 });

 // Modais
 document.querySelectorAll('[data-close-modal]').forEach(btn => {
 btn.addEventListener('click', () => {
 const backdrop = btn.closest('.modal-backdrop');
 if (backdrop) backdrop.hidden = true;
 });
 });

 // Lucide icons
 if (global.lucide) {
 global.lucide.createIcons();
 }
 }
 };

 global.PO = PO;

 document.addEventListener('DOMContentLoaded', () => {
 PO.init();
 });
})(window);
