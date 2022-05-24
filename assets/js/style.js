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
    jd.forEach(function(item, index) {
      if(index > 2) {return true;}
      var pro = '<div class="col-md-4" data-aos="flip-up" data-aos-duration="3000"><div class="pbx" ><a href="'+item.link+'" target="_blank" class="link"><div class="imgbx" style="--image-path:url(../../assets/img/projects/'+item.banner+')"></div><div class="dbx"><h6 class="t">'+item.type+'</h6><h4 class="d">'+item.title+'</h4></div></a></div></div>';
      $('#projectsRow').append(pro);
    });
  });
}

function loadSkills(){
  $.getJSON('./assets/json/skills.json', function(jd) {
    jd.forEach(function(item, index) {
      var skills = '<div class="skill-bx" title="'+item.title+'"><a href="'+item.link+'" class="link" target="_blank"><div class="skill-pro" role="progressbar" aria-valuenow="'+item.skill+'" aria-valuemin="0" aria-valuemax="100" style="--value:'+item.skill+'"><img src="./assets/img/icon/'+item.img+'" class="icon"><div class="stitle">'+item.title+'</div></div></a></div>';
      $('#allSkills').append(skills);
    });
  });
}

function loadSociallLinks(){
  $.getJSON('./assets/json/social-links.json', function(jd) {
    jd.forEach(function(item, index) {
      var social = '<a href="'+item.link+'" class="link" target="_blank" aria-label="'+item.title+'" rel="noreferrer">'+item.icon+'</a>';
      $('#footerAllSocialLinks').append(social);
    });
  });
}