import $ from 'jquery';

let popover = {
  init() {
    this._cacheDOM();
    this._bindEvents();
  },

  _cacheDOM() {
    this.$trigger = $('.popover__group');
    this.$popovers = $('.popover');
  },

  _bindEvents() {
    $(window).on('click', function() {
      popover.hideAll();
    });

    this.$trigger.on('click', function(event) {
      event.stopPropagation();
      event.preventDefault();
      if (!$(this).hasClass('popover__hoverTrigger')) {
          popover.togglePopover(this);
      }
    });
  },

  togglePopover(el) {
    $(el).find('.popover').toggleClass('is-open');
  },

  hideAll() {
    this.$popovers.removeClass('is-open');
  }
};

popover.init();
