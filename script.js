const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

gsap.to("#hero img",{
  width:"100vw",
  scrollTrigger:{
    trigger:"#hero img",
    scroller:"body",
    start:"top 70%",
    end:"top -50%",
    scrub:2,
  }
})