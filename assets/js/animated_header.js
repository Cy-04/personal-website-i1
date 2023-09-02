const t1 = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})

	gsap.set( 'g', {
		autoAlpha: 1
	})

	gsap.set('#FirstName',{
		//opacity: 0
	})
	
	gsap.set('#LastName',{
		//opacity: 0
	})

	gsap.set('#Line-Firstname .st2' ,{
		attr: {
			x1: 436.63
		}
	})
	
	gsap.set('#Line-Lastname .st1' ,{
		attr: {
			x2: 251.95
		}
	})
	
	gsap.set('#Circle-Firstname',{
		xPercent: -485,
		yPercent: 35,
		opacity: 0
	})

	gsap.set('#Circle-Lastname',{
		xPercent: 505,
		yPercent: -50,
		opacity: 0
	})
	gsap.set('.subtitle',{
        opacity: 0
    })
	gsap.to('svg',{
		scale: 1.2,
		duration: 4
	})
		t1
			.to('#Circle-Firstname, #Circle-Lastname',{
				xPercent: 0,
				opacity: 1,
				ease: 'inOut(1, .1)'
			})
			.to('#Circle-Firstname, #Circle-Lastname',{
				yPercent: 0,
				ease: 'inOut(1, .1)'
			})
			.to('#Line-Firstname .st2' ,{
				attr: {
					x1: 301.12
				},
				ease: 'inOut(1, .1)'
			})
			.from('#FirstName .st0', {
				yPercent: -200,
				stagger: .1,
				skewY: 60,
				skewX: 30,
				scaleY: .9,
				opacity: 0		
			})
			.to('#Line-Lastname .st1' ,{
				attr: {
					x2: 345.61
				},
				ease: 'inOut(1, .1)'
			}, '-=1.0')
			.from('#LastName .st0', {
			yPercent: 215,
			stagger: .03,
			scaleY: .5,
			skewY: 60,
			skewX: 30,
			opacity: 0		
		    })
            .to('.subtitle',{
                opacity: 0.8,
                ease: 'inOut(1, .1)'
            })