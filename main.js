window.onscroll =()=> {scrollFunction()}

 scrollFunction=()=> {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topH1").style.fontSize = "10px"
  } else {
    document.getElementById("topH1").style.fontSize = "20px"
  }
}
