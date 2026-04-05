import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-lg animate-in fade-in duration-500">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                    <div className="h-8 w-8 rounded-lg bg-accent" />
                    <span className="text-foreground">Cortex</span>
                </Link>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="text-sm">
                        Sign In
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Sign Up
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar