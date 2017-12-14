;(function (window, $) {
    function Carousel(element, options) {
        this.element = $(element);
        this.options = $.extend({}, Carousel.default, options || {});
        this.timer = null;
        this.init();
    }

    Carousel.default = {};

    Carousel.prototype = {
        constructor: Carousel,
        init: function() {
            var self = this;
            self._elementBox = self.element.children().eq(0);
            self._children = self._elementBox.children();
            self._points = self.element.children().eq(1);
            self._len = self._children.length;
            self._childWidth = self._children.outerWidth(true);

            self._elementBox.width(self.element.width() * self._len);
            self._children.width(self.element.width());
            self._play();

            self.element.hover(function() {
                clearInterval(self.timer);
            }, function() {
                self._play();
            });
        },
        _play: function() {
            var self = this;
            clearInterval(self.timer);
            self.timer = setInterval(function() {
                self._change();
            }, 1500);
        },
        _change: function() {
            var self = this;
            self._elementBox.animate({left: -self._childWidth + "px"}, 400, function() {
                self._elementBox.children().eq(0).appendTo(self._elementBox);
                self._elementBox.css("left", 0);
                self._points.children().removeClass("active").eq(self._children.index(self._elementBox.children().eq(0))).addClass("active");
            });
        }
    };
    window.Carousel = Carousel;
})(window, jQuery);