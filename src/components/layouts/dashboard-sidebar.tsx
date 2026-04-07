import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

import { Home, LogOut, PenTool, User, PanelLeft, Feather } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { useNavigate, useLocation } from "react-router-dom"

const DashboardSidebar = () => {
    const { toggleSidebar, state, isMobile } = useSidebar()
    const navigate = useNavigate()
    const location = useLocation()

    const isCollapsed = state === "collapsed"
    const isActive = (path: string) => location.pathname === path

    const mainItems = [
        { title: "Home", icon: Home, path: "/dashboard/home" },
        { title: "Write", icon: PenTool, path: "/dashboard/write" },
        { title: "Profile", icon: User, path: "/dashboard/profile" },
    ]

    // --- MOBILE VIEW (Bottom Dock) ---
    if (isMobile) {
        return (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                <nav className="flex items-center justify-around p-2 bg-[#fdfcfb]/80 backdrop-blur-xl border border-stone-200 shadow-2xl rounded-full">
                    {mainItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`p-4 rounded-full transition-all ${
                                isActive(item.path) ? 'bg-stone-900 text-white scale-110' : 'text-stone-400'
                            }`}
                        >
                            <item.icon className="h-5 w-5" />
                        </button>
                    ))}
                    <button onClick={() => navigate('/logout')} className="p-4 text-stone-400">
                        <LogOut className="h-5 w-5" />
                    </button>
                </nav>
            </div>
        )
    }

    // --- DESKTOP/TABLET VIEW ---
    return (
        <Sidebar
            collapsible="icon"
            className="bg-[#fdfcfb] border-r border-stone-200/60 transition-all duration-500"
        >
            <SidebarContent className="px-1 overflow-x-hidden">
                {/* Brand Header */}
                <div className="flex items-center gap-3 px-3 py-8 mb-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 shadow-sm transition-transform duration-500 hover:rotate-12">
                        <Feather className="h-4 w-4 text-stone-50" />
                    </div>
                    {!isCollapsed && (
                        <span className="font-serif italic text-xl tracking-tight text-stone-800 animate-in fade-in slide-in-from-left-2">
                            Cortex
                        </span>
                    )}
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            {mainItems.map((item) => {
                                const active = isActive(item.path)
                                return (
                                    <SidebarMenuItem key={item.path}>
                                        <SidebarMenuButton
                                            onClick={() => navigate(item.path)}
                                            className={`
                                                relative flex items-center gap-4 px-4 py-6 rounded-full transition-all duration-300
                                                ${active ? 'bg-stone-100 text-stone-900' : 'text-stone-400 hover:text-stone-600 hover:bg-stone-50'}
                                            `}
                                        >
                                            <item.icon className={`h-4 w-4 shrink-0 ${active ? 'scale-110' : ''}`} />
                                            {!isCollapsed && (
                                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap">
                                                    {item.title}
                                                </span>
                                            )}
                                            {active && !isCollapsed && (
                                                <div className="absolute right-4 h-1 w-1 rounded-full bg-stone-900" />
                                            )}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={() => navigate('/logout')}
                            className="flex items-center gap-4 px-4 py-3 rounded-full text-stone-400 hover:text-red-400 hover:bg-red-50/30 transition-all"
                        >
                            <LogOut className="h-4 w-4 shrink-0" />
                            {!isCollapsed && <span className="text-[10px] uppercase tracking-widest font-medium">Logout</span>}
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                {!isCollapsed && (
                    <div className="mt-6 px-4 py-4 border-t border-stone-100">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400 truncate">
                            Ashish Anand
                        </p>
                    </div>
                )}

                {/* Sidebar Toggle (Desktop Only) */}
                <button
                    onClick={toggleSidebar}
                    className="absolute -right-3 top-20 hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 shadow-sm hover:text-stone-900"
                >
                    <PanelLeft className={`h-3 w-3 transition-transform duration-500 ${isCollapsed ? 'rotate-180' : ''}`} />
                </button>
            </SidebarFooter>
        </Sidebar>
    )
}

export default DashboardSidebar
