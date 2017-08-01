var slider = {
  init: function (dependencies) {
    this.jQuery = dependencies.jQuery;
    this.slider = dependencies.slider;
  },

  setup: function () {
    var config = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false
    };

    this.slider.slick(config);
  }
}

var contentToggler = {
  init: function (dependencies) {
    this.jQuery = dependencies.jQuery;
    this.buttons = dependencies.buttons;
  },

  setup: function () {
    this.buttons.on('click', this._slideToggleContent);
  },

  _slideToggleContent: function () {
    var content = jQuery(this).parent('p').next();
    content.slideToggle();
  },
};

var navbarToggler = {
  init: function (dependencies) {
    this.jQuery = dependencies.jQuery;
    this.menuToggler = dependencies.menuToggler;
    this.navbar = dependencies.navbar;
  },

  //To Do: I should refactor this...someday
  setup: function () {
    var that = this;

    this.menuToggler.on('click', function () {
      that._toggleNavbar();
    });
  },

  _toggleNavbar: function () {
    this.navbar.slideToggle();
  }
}

function onReady() {
  navbarToggler.init({
    jQuery: $,
    menuToggler: $('.menu-toggler'),
    navbar: $('nav').first(),
  });
  navbarToggler.setup();

  slider.init({
    jQuery: $,
    slider: $('.slider'),
  });
  slider.setup();

  contentToggler.init({
    jQuery: $,
    buttons: $('.round-btn')
  });
  contentToggler.setup();
}

$(document).ready(onReady);
