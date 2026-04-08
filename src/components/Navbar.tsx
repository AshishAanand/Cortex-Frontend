import { Feather, LogOut, User } from 'lucide-react'
import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'
import { useAuth0 } from "@auth0/auth0-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#fdfcfb]/70 backdrop-blur-md px-6 py-6 transition-all duration-500 hover:bg-[#fdfcfb]">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/* 🖋️ Serif Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 transition-transform group-hover:rotate-12 duration-500">
                        <Feather className="h-5 w-5 text-stone-50" />
                    </div>
                    <span className="font-serif italic text-2xl tracking-tighter text-stone-800">Cortex</span>
                </Link>

                <div className="flex items-center gap-8">
                    {!isLoading && (
                        <>
                            {isAuthenticated ? (
                                /* 👤 User Profile Dropdown */
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="outline-none">
                                        <div className="flex items-center gap-3 group cursor-pointer">
                                            <div className="text-right hidden sm:block">
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-800">{user?.name}</p>
                                                <p className="text-[9px] text-stone-400 uppercase tracking-tighter">Contributor</p>
                                            </div>
                                            <img
                                                src={user?.picture}
                                                alt="profile"
                                                className="h-9 w-9 rounded-full border border-stone-200 grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48 mt-2 rounded-xl border-stone-100 bg-[#fdfcfb] shadow-xl ring-1 ring-black/5">
                                        <DropdownMenuLabel className="font-serif italic text-stone-800">My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-[11px] uppercase tracking-widest text-stone-500 focus:text-stone-900 cursor-pointer">
                                            <Link to="/dashboard" className="flex items-center gap-2 w-full">
                                                <User className="h-3 w-3" /> Dashboard
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                            className="text-[11px] uppercase tracking-widest text-red-400 focus:text-red-500 focus:bg-red-50/50 cursor-pointer"
                                        >
                                            <LogOut className="h-3 w-3" /> Log Out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                /* 🔐 Guest Links */
                                <>
                                    <button
                                        onClick={() => loginWithRedirect()}
                                        className="hidden sm:block text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-stone-900 transition-colors"
                                    >
                                        Sign In
                                    </button>
                                    <Button
                                        onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })}
                                        size="sm"
                                        className="rounded-full bg-stone-900/5 hover:bg-stone-900 hover:text-white border border-stone-200 text-stone-800 px-6 py-5 text-[10px] uppercase tracking-widest transition-all"
                                    >
                                        Join the Circle
                                    </Button>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
