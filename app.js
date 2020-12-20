const tl = gsap.timeline( { 
    defaults: { ease: 'power1.out' } 
  } );
//Do you have a problem?
  if (!sessionStorage.getItem('hasVisited')) {
    tl.to('.landing-page', { y: '0%', duration: 0 });
    tl.to('.the-fade', { y: '0%', duration: 0, delay: 3 });
    tl.fromTo('.hello', {opacity: 0, }, {opacity: 1, duration: 3, delay: 1}, {opacity: 0, duration: 3});
    tl.fromTo('.nice-to-see-you', {opacity: 0, }, {opacity: 1, duration: 3, delay: 3 }, {opacity: 0, duration: 3, delay: 3 });
    tl.fromTo('.landing-page', {opacity: 1, }, {opacity: 0, duration: 3});
    tl.fromTo('.the-fade', {opacity: 0, }, {opacity: 1, duration: 3}, '-=1');
    tl.fromTo('.follow-up-question', {opacity: 0, }, {opacity: 1, duration: 2 }, '-=2');
    tl.fromTo('.real-question', {opacity: 0, }, {opacity: 1, duration: 2 },'-=2');
    tl.fromTo('.text', {opacity: 0, }, {opacity: 1, duration: 3}, '-=2');
    tl.to('.landing-page', { y: '100%', duration: 0 });

    sessionStorage.setItem('hasVisited', true);
  } else {
    tl.to('.the-fade', { y: '0%', duration: 0 });
    tl.fromTo('.hello text', {opacity: 0, }, {opacity: 0, duration: 0 });
    tl.fromTo('.nice-to-see-you text', {opacity: 0, }, {opacity: 0, duration: 0 });
    tl.fromTo('.landing-page', {opacity: 0, }, {opacity: 0, duration: 0 });
    tl.fromTo('.the-fade', {opacity: 0, }, {opacity: 1, duration: 2 });
    tl.fromTo('.follow-up-question', {opacity: 0, }, {opacity: 1, duration: 2 },'-=2');
    tl.fromTo('.real-question', {opacity: 0, }, {opacity: 1, duration: 2 },'-=2');
    tl.fromTo('.text', {opacity: 0, }, {opacity: 1, duration: 2 }, '-=1');

    }

//Can you do something about it?



//Then why worry?