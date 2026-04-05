'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const paraRef = useRef(null)
    const buttonsRef = useRef(null)
    const blob1Ref = useRef(null)
    const blob2Ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 🔥 Timeline (Cinematic Entry)
            const tl = gsap.timeline()

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
            })
                .from(paraRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6")
                .from(buttonsRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.6")

            // 🌊 Floating blobs animation
            gsap.to(blob1Ref.current, {
                x: 100,
                y: 80,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })

            gsap.to(blob2Ref.current, {
                x: -120,
                y: -60,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })

            // 🧲 Magnetic Buttons
            const buttons = buttonsRef.current.querySelectorAll("button")

            buttons.forEach(btn => {
                btn.addEventListener("mousemove", (e) => {
                    const rect = btn.getBoundingClientRect()
                    const x = e.clientX - rect.left - rect.width / 2
                    const y = e.clientY - rect.top - rect.height / 2

                    gsap.to(btn, {
                        x: x * 0.2,
                        y: y * 0.2,
                        scale: 1.08,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })

                btn.addEventListener("mouseleave", () => {
                    gsap.to(btn, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "elastic.out(1, 0.4)"
                    })
                })
            })

            // 🖱️ Parallax effect
            const move = (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 40
                const y = (e.clientY / window.innerHeight - 0.5) * 40

                gsap.to(blob1Ref.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: "power2.out"
                })

                gsap.to(blob2Ref.current, {
                    x: -x,
                    y: -y,
                    duration: 1,
                    ease: "power2.out"
                })
            }

            window.addEventListener("mousemove", move)

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden pt-20"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

                {/* Animated blobs */}
                <div ref={blob1Ref} className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
                <div ref={blob2Ref} className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
            </div>

            {/* Content */}
            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center">

                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
                >
                    Where Deep Thinking
                    <br />
                    Becomes Powerful Writing
                </h1>

                <p
                    ref={paraRef}
                    className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                >
                    Cortex is a modern platform for thinkers, builders, and creators to share ideas that matter
                </p>

                <div
                    ref={buttonsRef}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <Button className="bg-accent text-accent-foreground px-8 py-6 rounded-full">
                        Start Writing
                    </Button>
                    <Button variant="outline" className="px-8 py-6 rounded-full">
                        Explore Blogs
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection