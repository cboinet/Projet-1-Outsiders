
function bioBloc1() {
    let bioBloc1 = document.querySelectorAll(".bioBloc1Outsider");
  
    for (let i = 0; i < bioBloc1.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = bioBloc1[i].getBoundingClientRect().top;
        let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        bioBloc1[i].classList.add("active");
      } else {
        bioBloc1[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", bioBloc1 );


  function bioBloc2() {
    let bioBloc2 = document.querySelectorAll(".bioBloc2Outsider");
  
    for (let i = 0; i < bioBloc2.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = bioBloc2[i].getBoundingClientRect().top;
        let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        bioBloc2[i].classList.add("active");
      } else {
        bioBloc2[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", bioBloc2);

///////////////titre
  function titrePage() {
    let titrePage = document.querySelectorAll(".titrePage");
  
    for (let i = 0; i < titrePage.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = titrePage[i].getBoundingClientRect().top;
        let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        titrePage[i].classList.add("active");
      } else {
        titrePage[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", titrePage);

  


  function changePage() {
    let changePage = document.querySelectorAll(".backgroundPage");
  
    for (let i = 0; i < changePage.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = changePage[i].getBoundingClientRect().top;
        let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        changePage[i].classList.add("active");
      } else {
        changePage[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", changePage);