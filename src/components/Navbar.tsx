import { Feather } from 'lucide-react'
import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full  bg-[#fdfcfb]/70 backdrop-blur-md px-6 py-6 transition-all duration-500 hover:bg-[#fdfcfb]">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/* 🖋️ Serif Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 transition-transform group-hover:rotate-12 duration-500">
                        <Feather className="h-5 w-5 text-stone-50" />
                    </div>
                    <span className="font-serif italic text-2xl tracking-tighter text-stone-800">Cortex</span>
                </Link>

                <div className="flex items-center gap-8">
                    <Link to="/signin" className="hidden sm:block text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-stone-900 transition-colors">
                        Sign In
                    </Link>
                    <Link to="/signup">
                        <Button size="sm" className="rounded-full bg-stone-900/5 hover:bg-stone-900 hover:text-white border border-stone-200 text-stone-800 px-6 py-5 text-[10px] uppercase tracking-widest transition-all">
                            Join the Circle
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar