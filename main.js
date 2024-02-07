var cursor = document.querySelector("#cursor");
var cursor_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursor_blur.style.left = dets.x - 250 + "px";
  cursor_blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px", // Remove the comma here
  scrollTrigger: {
    trigger: "#nav",
    scroll: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main", // Specify the trigger element
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});
