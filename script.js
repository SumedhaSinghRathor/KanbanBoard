// HEADER ANIMATION
var headertl = gsap.timeline()

headertl.from("#web_logo", {
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 0.5
})

headertl.from("#links a", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    stagger: -0.1
})

// NAME ANIMATION
var footertl = gsap.timeline()

footertl.from("#name span", {
    y: 50,
    opacity: 0,
    duration: 0.2,
    stagger: 0.3
})

footertl.from("#jobs .job", {
    y: 50,
    opacity: 0,
    duration: 0.2,
    stagger: 0.3
})

// NAME SCROLL ANIMATION
window.addEventListener("wheel", function(dets) {
    if (dets.deltaY >= 0) {
        gsap.to(".marquee", {
            transform: 'translate(-200%)',
            duration: 8,
            repeat: -1,
            ease: "none"
        })
    } else {
        gsap.to(".marquee", {
            transform: 'translate(0%)',
            duration: 8,
            repeat: -1,
            ease: "none"
        })
    }
})

// HIGHLIGHT ANIMATION
gsap.to(".highlight", {
    backgroundColor: "#0088B8",
    color: "#0E0C0C",
    ease: "expo.out",
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        markers: true,
    }
})