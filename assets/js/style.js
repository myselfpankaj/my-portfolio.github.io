$(function() {
  $('.lazy-load').lazy({
    effect: 'fadeIn',
    onError: function(element) {
      console.log('error loading ' + element.data('src'));
    }
  });
});