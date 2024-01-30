var menuState = localStorage.getItem('menuState') || 'closed';
  var i = document.getElementById("navMenu");

  
  if (menuState === 'open') {
    i.className += " responsive";
  }

  function myMenuFunction() {
    if (i.className === "nav-menu") {
      i.className += " responsive";
      localStorage.setItem('menuState', 'open');
    } else {
      i.className = "nav-menu";
      localStorage.setItem('menuState', 'closed');
    }
  }

  var a = document.getElementById("loginBtn");
  var b = document.getElementById("registerBtn");
  var x = document.getElementById("login");
  var y = document.getElementById("register");

  function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
  }

  function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
  }