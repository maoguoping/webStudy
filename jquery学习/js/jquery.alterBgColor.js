;(function ($) {
    $.fn.extend({
        "alterBgColor":function (options) {
              return this.each(function () {
                  options=$.extend({
                      odd:"odd",
                      even:"even",
                      selected:"selected"
                  },options);
                  $("tbody>tr:odd",this).addClass(options.odd);
                  $("tbody>tr:even",this).addClass(options.even);
                  $("tbody>tr",this).click(function () {
                      var hasSelected=$(this).hasClass(options.selected);
                      $(this)[hasSelected?"removeClass":"addClass"](options.selected).find(':checkbox').attr('checked',!hasSelected);
                  });
                  $('tbody>tr:has(:checked)',this).addClass(options.selected);
                  return this;    //返回对象本身，使得方法可链
              })
        }
    });
})(jQuery);