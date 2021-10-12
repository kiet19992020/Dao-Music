//header-start
const timeline2 = gsap.timeline({
    defaults: {
        duration: 4
    }
})
timeline2
    .from('.top', {
        y: '-100%',
        ease: 'bounce'
    }) //ben tren xuong

const timeline = gsap.timeline({
    defaults: {
        duration: 2
    }
})
timeline
    .fromTo('.button', {
        opacity: 0,
        scale: 0,
        rotation: 720
    }, {
        opacity: 1.,
        scale: 1,
        rotation: 0
    })
    .from('.navbar-brand,.nav-item,.show', {
        opacity: 0,
        stagger: .2
    }) //hien thi load
    // .from('.left', { y: '-120%'},'<.5')
    .from('.left', {
        y: '-100vh',
        ease: 'power2.in'
    }, 1)
    .from('.right', {
        x: '120vw',
        ease: 'power2.in'
    }, 1)
    .to('.footer', {
        y: 0,
        ease: 'elastic'
    })



// scroll
gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".mod-info",
        // markers:true, //note bat dau ket thuc
        start: "top 65%", //vi tri bat dau thuc hien
        end: "top 85%",  //vi tri ket thuc
        scrub: 3, //Quay lai (3 time)
        toggleClass: "active",
    },
});

tl.from(".info-content", {
    
    top: -700,
    ease: "power2",
    duration: 0.5,

})
tl.from(".info-slide", {
    top:700,
    ease: "power2",
    duration: 0.5,
})
const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".content",
        // scrub: 3, //Quay lai (3 time)
        // markers:true, //note bat dau ket thuc
        start: "top 55%", //vi tri bat dau thuc hien
        end: "bottom 55",  //vi tri ket thuc
        toggleClass: "active",
    },
});
t3.from(".card-items", {
    top: -150,
    ease: "power2",
    duration: 0.5,
})

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".mod-slider",
        // markers:true, //note bat dau ket thuc
        start: "top 55%", //vi tri bat dau thuc hien
        end: "top 70%",  //vi tri ket thuc
        scrub: 2, //Quay lai (3 time)
    },
});
tl2.from('.title-slider', {
    top: 200,
    ease: "power1.in",
    duration: 5,
})
tl2.from('.slider', {
    top: 700,
    ease: "power1.out",
    duration: 5,
})
gsap.utils.toArray('.mod-services,.mod-product-quality ').forEach(section => {
    const elems = section.querySelectorAll('.pd-quality-title,.items-quality,.icon-service,.service-title');
    gsap.set(elems, {
        top: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
    });

    ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 30%',
        onEnter: () => gsap.to(elems, {
            top: 0,
            opacity: 1,
            stagger: 0.2,
        }),
        onLeave: () => gsap.to(elems, {
            top: -50,
            opacity: 0,
            stagger: 0.2,
        }),
        onEnterBack: () => gsap.to(elems, {
            top: 0,
            opacity: 1,
            stagger: -0.2,
        }),
        onLeaveBack: () => gsap.to(elems, {
            top: 50,
            opacity: 0,
            stagger: -0.2,
        }),
    });
})