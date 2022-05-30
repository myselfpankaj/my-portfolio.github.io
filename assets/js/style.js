var techArr={php:{title:"PHP",image:"php.svg",link:"https://en.wikipedia.org/wiki/PHP"},ci:{title:"Codeigniter",image:"codeigniter.svg",link:"https://en.wikipedia.org/wiki/CodeIgniter"},laravel:{title:"Laravel",image:"laravel.svg",link:"https://en.wikipedia.org/wiki/Laravel"},html:{title:"HTML",image:"html.svg",link:"https://en.wikipedia.org/wiki/HTML"},css:{title:"CSS",image:"css.svg",link:"https://en.wikipedia.org/wiki/CSS"},js:{title:"JavaScript",image:"javascript.svg",link:"https://en.wikipedia.org/wiki/JavaScript"},jquery:{title:"JQuery",image:"jquery.svg",link:"https://en.wikipedia.org/wiki/JQuery"},mysql:{title:"MySql",image:"mysql.svg",link:"https://en.wikipedia.org/wiki/MySQL"},bootstrap:{title:"Bootstrap",image:"bootstrap.svg",link:"https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"},python:{title:"Python",image:"python.svg",link:"https://en.wikipedia.org/wiki/Python_(programming_language)"},java:{title:"JAVA",image:"java.svg",link:"https://en.wikipedia.org/wiki/Java_(programming_language)"},github:{title:"GitHub",image:"github.svg",link:"https://en.wikipedia.org/wiki/GitHub"},git:{title:"Git",image:"git.svg",link:"https://en.wikipedia.org/wiki/Git"},photoshop:{title:"Photoshop",image:"photoshop.svg",link:"https://en.wikipedia.org/wiki/Adobe_Photoshop"},postman:{title:"Postman",image:"postman.svg",link:"https://en.wikipedia.org/wiki/Postman_(software)"}};function getRand(i,a){return Math.floor(Math.random()*a)+i}function loadProjects(){$.getJSON("./assets/json/projects.json",(function(i){i.forEach((function(i,a){if(a>3)return!0;var s='<div class="clbx col-6 col-lg-3" data-aos="flip-up" data-aos-delay="'+400*a+'"><div class="main-project-thumb-bx"><a target="_blank" class="link"  data-bs-toggle="modal" data-bs-target="#Project'+a+'Modal"><div class="imgbx" style="--image-path:url(../../assets/img/projects/'+i.full_banner+')"></div><div class="dbx"><h6 class="t">'+i.type+'</h6><h6 class="d">'+i.title+"</h6></div></a></div></div>";$("#projectsRow").append(s),s='<div class="modal fade main-project-modal" id="Project'+a+'Modal" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body"><button type="button" class="btn cls-btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><div class="row"><div class="col-sm-6 col-lg-5 col-xl-4"><div class="thumb-bx"><img src="./assets/img/projects/'+i.banner+'" alt="Image" class="lazy-load img"></div></div><div class="col-sm-6 col-lg-7 col-xl-8"><div class="details-bx"><h5 class="t">'+i.title+'</h5><h6 class="s">Project Type : '+i.type+'</h6><h6 class="s">Project Duration : 3 Months</h6><h6 class="s">Team Members : '+i.team_size+'</h6><h6 class="s">Role : '+i.role+'</h6><h6 class="s"><a href="'+i.link+'" target="_blank" class="link">'+i.link+' <i class="fa-solid fa-arrow-up-right-from-square"></i></a></h6></div></div><div class="col-12"><div class="about-bx"><h5 class="t">About Project</h5><p class="d">'+i.desc+'</p></div></div><div class="col-12"><div class="skills-used"><h5 class="t">Technologies and Skills Used</h5><div class="skills-bx">',i.technology.forEach((function(i,a){s+='<a href="'+techArr[i].link+'" target="_blank" class="link hvr-float-shadow"><img src="./assets/img/icon/'+techArr[i].image+'" alt="'+techArr[i].title+' Icon" class="lazy-load img"><h6 class="sk-t">'+techArr[i].title+"</h6></a>"})),s+='</div></div></div><div class="col-12"><div class="gallery"><h5 class="t">Screenshots</h5><div class="all-images">',i.screenshots.forEach((function(a,t){s+='<a href="./assets/img/screenshots/'+a+'" class="link span-'+getRand(1,3)+" c-"+getRand(1,5)+'" data-lightbox="'+i.title+' Screenshots" data-title="'+i.title+" Screenshots "+(t+1)+'" style="background-image: url(./assets/img/screenshots/'+a+')"></a>'})),s+="</div></div></div></div></div></div></div></div>",$("#projectsRow").append(s)}))}))}function loadSkills(){$.getJSON("./assets/json/skills.json",(function(i){i.forEach((function(i,a){var s='<div class="skill-bx" data-aos="fade-up" title="'+i.title+'"><a href="'+i.link+'" class="link hvr-float-shadow" target="_blank"><div class="skill-pro" role="progressbar" aria-valuenow="'+i.skill+'" aria-valuemin="0" aria-valuemax="100" style="--value:'+i.skill+'"><img src="./assets/img/icon/'+i.img+'" class="lazy-load icon"><div class="stitle">'+i.title+"</div></div></a></div>";$("#allSkills").append(s)}))}))}function loadSocialLinks(){$.getJSON("./assets/json/social-links.json",(function(i){i.forEach((function(i,a){var s='<a href="'+i.link+'" class="link" target="_blank" aria-label="'+i.title+'" rel="noreferrer">'+i.icon+"</a>";$("#footerAllSocialLinks").append(s)}))}))}function loadServices(){$.getJSON("./assets/json/services.json",(function(i){i.forEach((function(i,a){var s='<div class="swiper-slide"><div data-aos="fade-left" data-aos-delay="'+400*a+'" class="sbx" style="--color-code:'+i.color+'"><div class="img-bx"><img src="./assets/img/icon/'+i.icon+'" alt="'+i.title+' Icon" class="lazy-load img"></div><h5 class="t">'+i.title+'</h5><p class="d">'+i.desc+"</p></div></div>";$("#allServicesBox").append(s)}))}))}

$(function() {
  $('.lazy-load').lazy({
    effect: 'fadeIn',
    onError: function(element) {
      console.log('error loading ' + element.data('src'));
    }
  });
});


$(document).ready((function () {

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $(".header .mainMenuToggler").click((function () {
    $(".header .nav-cntr").toggleClass("show");
  }));

  var offset = 250;
	var duration = 500;
	$(window).scroll(function(){
		if($(this).scrollTop() > offset){
			$("#goToTopBtn").fadeIn(duration);
		}else{
			$("#goToTopBtn").fadeOut(duration);
		}
	});
	$("#goToTopBtn").click(function(event) {
    event.preventDefault();
    jQuery('html').animate({scrollTop: 0}, duration);
    return false;
  });

}));


var lastScrollTop = 0;
const nav = document.querySelector(".header");
const NavTop = nav.offsetTop;
$(window).on('scroll', function() {
  st = $(this).scrollTop();
  if(st < lastScrollTop && st > NavTop ) {
    $('.header').addClass('ftop');
  } else {
    $('.header').removeClass('ftop');
  }
  lastScrollTop = st;
});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() { that.tick(); }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};