$(function() {
  $('.lazy-load').lazy({
    effect: 'fadeIn',
    onError: function(element) {
      console.log('error loading ' + element.data('src'));
    }
  });
});

function loadProjects() {
  
  $.getJSON('./assets/json/projects.json', function(jd) {
    var pro = "";
    jd.forEach(function(item, index) {
      pro += '<div class="col-lg-4" data-aos="flip-up" data-aos-duration="3000"><div class="pbx" ><a href="'+item.link+'" target="_blank" class="link"><div class="imgbx" style="--image-path:url(../../assets/img/projects/'+item.banner+')"></div><div class="dbx"><h6 class="t">'+item.type+'</h6><h4 class="d">'+item.title+'</h4></div></a></div></div>';
    });
    $('#projectsRow').append(pro);
  });

}