var lastId,topMenu=$("#top-menu"),topMenuHeight=topMenu.outerHeight()-81,menuItems=topMenu.find("a"),scrollItems=menuItems.map(function(){var t=$($(this).attr("href"));return t.length?t:void 0});menuItems.click(function(t){var e=$(this).attr("href"),n="#"===e?0:$(e).offset().top-topMenuHeight+1;$("html, body").stop().animate({scrollTop:n},700),t.preventDefault()}),$(window).scroll(function(){var t=$(this).scrollTop()+topMenuHeight,e=scrollItems.map(function(){return $(this).offset().top<t?this:void 0});e=e[e.length-1];var n=e&&e.length?e[0].id:"";lastId!==n&&(lastId=n,menuItems.parent().removeClass("active").end().filter("[href=#"+n+"]").parent().addClass("active"))});