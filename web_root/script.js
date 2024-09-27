var $cont = document.querySelector('.cont');
var $elbg = document.querySelector('.el__bg');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var init_el = false;
var el_url_active = getUrlVars()["el"]; // base page load format (wether intro anamation or back anamation)

// determins what the el section is and if a resume anamation is needed
if (el_url_active >= 0 && el_url_active <= 5) {
    init_el = true;
    window.history.replaceState(null, null, window.location.pathname);
    $cont.classList.add('notransition');
    $cont.classList.remove('s--inactive');
    $cont.classList.add('s--el-active');
    $elsArr[el_url_active].classList.add('s--active');
    // just waits so the previous state is acheved then resumes, a very janky way of doing this
    setTimeout(function() {
        $cont.classList.remove('notransition');
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    }, 1);
}

// grabs url vars
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

window.addEventListener('load', function () {
  if ( init_el == false ) {
  $cont.classList.remove('s--inactive');
  init_el = true;
  }
})

// if its allready been waiting 1.5 sec the page will show el regardless if images loaded
setTimeout(function() {
  if ( init_el == false ) {
  $cont.classList.remove('s--inactive');
  init_el = true;
  }
}, 1500);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
    window.location.href = this.dataset.link;
  });
});

//restores click view if traveled back and browser cahces
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
      if ( $cont.classList.contains('s--el-active') == true ) {
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    }
  }
});
