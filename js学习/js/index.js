;(function (window,$) {
    function Index(element, options) {
        this.element = $(element);
        this.options = $.extend({}, Index.default, options || {});
        this.timer = null;
        this.init();
    }
    Index.default={};
    Index.prototype={
      constructor:Index,
      init:function () {
          alert("元素正在初始化");
      }
    };
    window.Index=Index;
})(window,jQuery);