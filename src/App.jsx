import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-[#EAE8E3] flex justify-between items-center pointer-events-none">
            <div className="font-sans font-bold tracking-tighter text-2xl uppercase pointer-events-auto">Emmanuel Rugamba</div>
            <div className="hidden md:flex gap-12 font-sans text-xs uppercase tracking-[0.3em] font-semibold pointer-events-auto">
                <a href="#journey" className="hover:text-[#FF4500] transition-colors">Journey</a>
                <a href="#manifesto" className="hover:text-[#FF4500] transition-colors">Manifesto</a>
            </div>
            <button className="pointer-events-auto bg-[#EAE8E3] text-[#050505] px-6 py-3 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-[#FF4500] hover:text-[#EAE8E3] transition-colors">
                Inquire
            </button>
        </nav>
    );
}

function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-word', {
                yPercent: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: 'power4.out',
            });
            gsap.to('.hero-img', {
                scale: 1.1,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-between pt-32 pb-12 px-6 border-b border-white/10">
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
                <img
                    src="https://images.unsplash.com/photo-1557174949-3b1f5b2e8fac?q=80&w=2800&auto=format&fit=crop"
                    alt="Athletic focus"
                    className="w-full h-full object-cover hero-img"
                />
                <div className="absolute inset-0 bg-[#050505]/60 block"></div>
            </div>

            <div className="relative z-10 w-full flex flex-col h-full justify-end">
                <div className="flex flex-col mb-12">
                    <div className="overflow-hidden">
                        <h1 className="hero-word text-[12vw] leading-[0.8] font-sans font-bold text-[#EAE8E3] uppercase tracking-tighter mix-blend-difference">
                            Potential
                        </h1>
                    </div>
                    <div className="overflow-hidden flex items-center gap-6">
                        <div className="hero-word flex-1 h-[2px] bg-[#FF4500] mt-4 shadow-[0_0_15px_#FF4500]"></div>
                        <h1 className="hero-word text-[12vw] leading-[0.8] font-drama italic text-[#EAE8E3] ml-auto">
                            Excellence.
                        </h1>
                    </div>
                </div>

                <div className="overflow-hidden max-w-2xl">
                    <p className="hero-word text-lg md:text-2xl text-[#EAE8E3]/80 font-serif leading-relaxed">
                        Keynote Speaker. First Rwandan in the NFL. CFL All-Star. Entrepreneur. Bridging the raw grit of the gridiron with the uncompromising vision of the boardroom.
                    </p>
                </div>
            </div>
        </section>
    );
}

function TheJourney() {
    const containerRef = useRef(null);
    const panelsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const panels = panelsRef.current;
            const totalWidth = panels.length * 100;

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (panels.length - 1),
                        duration: { min: 0.2, max: 0.5 },
                        delay: 0.1,
                        ease: "power1.inOut"
                    },
                    end: () => "+=" + containerRef.current.offsetWidth * 2
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="journey" ref={containerRef} className="h-screen w-full bg-[#EAE8E3] text-[#050505] overflow-hidden flex flex-nowrap">

            {/* Panel 1 */}
            <div ref={el => panelsRef.current[0] = el} className="w-screen h-full flex-shrink-0 flex items-center justify-center p-8 md:p-24 relative border-r border-[#050505]/10">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop" className="w-full h-full object-cover opacity-10 grayscale mix-blend-multiply" alt="texture" />
                </div>
                <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 relative z-10 items-end">
                    <h2 className="text-[10vw] md:text-[8vw] font-drama italic leading-[0.9] md:w-1/2">
                        Resilience.
                    </h2>
                    <div className="md:w-1/2 pl-0 md:pl-12 md:border-l-2 border-[#FF4500]">
                        <p className="text-2xl md:text-5xl font-sans font-bold tracking-tight uppercase leading-[1.1]">
                            From Refugee Camp to Professional Football.
                        </p>
                    </div>
                </div>
            </div>

            {/* Panel 2 */}
            <div ref={el => panelsRef.current[1] = el} className="w-screen h-full flex-shrink-0 flex items-center justify-center p-8 md:p-24 bg-[#050505] text-[#EAE8E3] relative">
                <div className="absolute top-12 left-12 text-[#FF4500] font-mono text-xs uppercase tracking-widest border border-[#FF4500] px-4 py-2 opacity-50">
                    The 1% Principle
                </div>
                <div className="max-w-6xl w-full">
                    <h2 className="text-4xl md:text-7xl font-sans font-bold uppercase tracking-tighter leading-none mb-12">
                        The difference between <br /><span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #EAE8E3' }}>ordinary</span> and <span className="text-[#FF4500] italic font-drama normal-case">extraordinary</span> is rarely talent.
                    </h2>
                    <p className="text-xl md:text-3xl max-w-3xl font-serif text-[#EAE8E3]/70">
                        Small, consistent gains compound into elite performance. We do not chase overnight miracles. We execute the critical 1% every single day.
                    </p>
                </div>
            </div>

            {/* Panel 3 */}
            <div ref={el => panelsRef.current[2] = el} className="w-screen h-full flex-shrink-0 flex items-center justify-center p-8 md:p-24 bg-[#EAE8E3] relative border-l border-[#050505]/10 overflow-hidden">
                <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-sans font-black text-[#050505]/5 whitespace-nowrap pointer-events-none">
                    PRESSURE
                </h2>
                <div className="relative z-10 max-w-5xl text-center">
                    <h2 className="text-5xl md:text-8xl font-drama italic text-[#050505] mb-8 leading-tight">
                        Pressure reveals character.
                    </h2>
                    <div className="h-px w-32 bg-[#FF4500] mx-auto mb-8"></div>
                    <p className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-tight text-[#050505]/80">
                        Obstacles are not barricades.<br /> They are the architecture of opportunity.
                    </p>
                </div>
            </div>

        </section>
    );
}

function Manifesto() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.manifesto-text', {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                opacity: 0,
                y: 50
            }, {
                clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 50%',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="manifesto" ref={containerRef} className="py-40 bg-[#050505] text-[#EAE8E3] px-6 md:px-24 flex flex-col justify-center min-h-[80vh]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="manifesto-text text-3xl md:text-6xl font-sans tracking-tight mb-16 opacity-0">
                    Most leaders focus on managing <span className="text-[#FF4500]">circumstances.</span>
                </div>
                <div className="manifesto-text text-5xl md:text-[7vw] font-drama italic leading-[0.9] opacity-0 text-right w-full">
                    We demand <span className="underline decoration-[#FF4500] underline-offset-8">uncommon resilience.</span>
                </div>
            </div>
        </section>
    );
}

function TheWork() {
    // Editorial grid replacing the rigid 1-2-3 protocol cards
    return (
        <section className="bg-[#EAE8E3] py-32 px-6 md:px-12 text-[#050505] relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] mb-24 border-b border-[#050505] pb-4">The Methodology</h2>

                {/* Editorial Block A */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-40">
                    <div className="md:col-span-5 md:col-start-1">
                        <h3 className="text-5xl md:text-6xl font-sans font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                            The Mindset <br /><span className="text-[#FF4500]">Shift.</span>
                        </h3>
                        <p className="text-xl md:text-2xl font-serif text-[#050505]/70 leading-relaxed border-l-4 border-[#FF4500] pl-6">
                            Transforming adversity into absolute advantage. Developing the mental armor required to operate at the elite level, drawing direct parallels from the gridiron to the executive suite.
                        </p>
                    </div>
                    <div className="md:col-span-6 md:col-start-7">
                        <div className="aspect-[4/5] bg-[#050505] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="https://images.unsplash.com/photo-1566579090262-51cde5ebe92e?q=80&w=2800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Focus" />
                        </div>
                    </div>
                </div>

                {/* Editorial Block B */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-40">
                    <div className="md:col-span-6 md:col-start-1 order-2 md:order-1">
                        <div className="aspect-[16/9] bg-[#050505] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="https://images.unsplash.com/photo-1537882111161-c3379a777c8b?q=80&w=2800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Training" />
                        </div>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
                        <h3 className="text-5xl md:text-6xl font-drama italic leading-[0.9] mb-8 text-[#FF4500]">
                            Relentless Execution.
                        </h3>
                        <p className="text-xl md:text-2xl font-serif text-[#050505]/70 leading-relaxed">
                            The 1% principle in action. Building systems that guarantee forward progress when motivation inevitably fades. Systems over sentiment.
                        </p>
                    </div>
                </div>

                {/* Editorial Block C */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-8 md:col-start-3 text-center">
                        <h3 className="text-6xl md:text-8xl font-sans font-black uppercase tracking-tighter leading-none mb-12">
                            Enduring <br />Impact.
                        </h3>
                        <p className="text-2xl max-w-3xl mx-auto font-serif text-[#050505]/70 leading-relaxed">
                            Leadership that transcends the individual. Creating strategic ripples of excellence that elevate the entire organization, leaving a legacy of uncompromising standards.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

function Action() {
    return (
        <section className="bg-[#FF4500] py-32 px-6 flex flex-col items-center justify-center text-[#050505] text-center border-t border-[#050505]/10">
            <h2 className="text-4xl md:text-[6vw] font-drama italic mb-12 leading-none max-w-5xl mx-auto">
                Bring the resilient mindset of an elite athlete into your corporate culture.
            </h2>
            <button className="bg-[#050505] text-[#EAE8E3] px-16 py-6 font-sans font-bold text-xl uppercase tracking-[0.2em] hover:bg-[#EAE8E3] hover:text-[#050505] transition-colors border-2 border-transparent hover:border-[#050505]">
                Book Emmanuel Rugamba
            </button>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-[#050505] text-[#EAE8E3] py-12 px-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-white/10 pt-12">
                <div className="font-sans font-bold tracking-tighter text-2xl uppercase mb-6 md:mb-0">Emmanuel Rugamba</div>
                <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-[#EAE8E3]/50">
                    <a href="#" className="hover:text-[#FF4500] transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-[#FF4500] transition-colors">Instagram</a>
                    <span>© {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div className="min-h-screen bg-[#050505] font-sans selection:bg-[#FF4500] selection:text-[#050505]">
            <Navbar />
            <Hero />
            <TheJourney />
            <Manifesto />
            <TheWork />
            <Action />
            <Footer />
        </div>
    );
}

export default App;
