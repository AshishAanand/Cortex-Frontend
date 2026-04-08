import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

const HeroSection = () => {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const paraRef = useRef(null)
    const buttonsRef = useRef(null)
    const paperRef = useRef(null)

    // Destructure isLoading to prevent UI flickering during auth check
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.from(titleRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.8,
                ease: "power4.out"
            })
                .from(paraRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power3.out"
                }, "-=1.2")
                .from(buttonsRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "-=1")

            gsap.to(".ambient-glow", {
                opacity: 0.5,
                scale: 1.1,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })

            const handleMove = (e: MouseEvent) => {
                const { clientX, clientY } = e
                const xPos = (clientX / window.innerWidth - 0.5) * 30
                const yPos = (clientY / window.innerHeight - 0.5) * 30

                gsap.to(paperRef.current, {
                    x: xPos,
                    y: yPos,
                    duration: 2,
                    ease: "power2.out"
                })
            }

            window.addEventListener("mousemove", handleMove)
            return () => window.removeEventListener("mousemove", handleMove)
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#fdfcfb]"
        >
            <div ref={paperRef} className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none bg-[url('https://transparenttextures.com')]" />

            <div className="ambient-glow absolute top-[10%] left-[15%] h-[40vw] w-[40vw] rounded-full bg-orange-100/40 blur-[120px] -z-10" />
            <div className="ambient-glow absolute bottom-[10%] right-[15%] h-[35vw] w-[35vw] rounded-full bg-stone-200/50 blur-[100px] -z-10" />

            <div className="relative z-10 w-full max-w-5xl px-6 py-24 my-auto mx-auto flex flex-col items-center text-center">

                <div className="mb-8 flex justify-center animate-in fade-in duration-1000">
                    <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
                        <span className="h-[1px] w-8 bg-stone-200" />
                        Est. MMXXVI
                        <span className="h-[1px] w-8 bg-stone-200" />
                    </span>
                </div>

                <h1
                    ref={titleRef}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-stone-800 leading-[1.1] tracking-tight max-w-4xl"
                >
                    Where deep thinking <br />
                    <span className="not-italic font-normal text-stone-900">meets its legacy.</span>
                </h1>

                <p
                    ref={paraRef}
                    className="mt-8 text-stone-500 font-light text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl leading-relaxed italic"
                >
                    "Cortex is a sanctuary for builders and thinkers. A quiet space designed for the intentional writer."
                </p>

                <div
                    ref={buttonsRef}
                    className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
                >
                    {/* Primary Action: If logged in, go to Write. If not, go to Signup */}
                    {isAuthenticated ? (
                        <Link to="/dashboard/write" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-stone-900 text-stone-50 px-10 py-7 rounded-full text-xs uppercase tracking-widest hover:bg-stone-800 hover:-translate-y-1 transition-all duration-500 shadow-2xl shadow-stone-300">
                                Begin Your Entry
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })}
                            className="w-full sm:w-auto bg-stone-900 text-stone-50 px-10 py-7 rounded-full text-xs uppercase tracking-widest hover:bg-stone-800 hover:-translate-y-1 transition-all duration-500 shadow-2xl shadow-stone-300"
                        >
                            Get Started
                        </Button>
                    )}

                    {/* Secondary Action: Archive Access */}
                    {!isLoading && (
                        isAuthenticated ? (
                            <Link to="/dashboard" className="w-full sm:w-auto">
                                <Button variant="ghost" className="w-full sm:w-auto text-stone-400 hover:text-stone-900 tracking-[0.2em] text-[10px] uppercase font-bold transition-colors">
                                    View The Archive
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                onClick={() => loginWithRedirect()}
                                variant="ghost"
                                className="w-full sm:w-auto text-stone-400 hover:text-stone-900 tracking-[0.2em] text-[10px] uppercase font-bold transition-colors"
                            >
                                Sign In To Archive
                            </Button>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
