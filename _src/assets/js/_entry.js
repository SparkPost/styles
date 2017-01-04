import $ from 'jquery';

let dropdown = {
  init() {
    this._cacheDOM();
    this._bindEvents();
  },

  _cacheDOM() {
    this.$trigger = $('.js-dropdown-demo');
    this.$dropdowns = $('.dropdown');
  },

  _bindEvents() {
    $(window).on('click', function() {
      dropdown.hideDropdowns();
    });

    this.$trigger.on('click', function() {
      event.stopPropagation();
      dropdown.toggleDropdown(this);
    });
  },

  toggleDropdown(el) {
    $(el).siblings('.dropdown').toggleClass('is-open');
  },

  hideDropdowns() {
    this.$dropdowns.removeClass('is-open');
  }
};

dropdown.init();
