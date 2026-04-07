import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/layouts/dashboard-sidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
    return (
        <SidebarProvider>

            <DashboardSidebar />

            <SidebarInset>
                <Outlet />
            </SidebarInset>

        </SidebarProvider>
    )
}

export default DashboardLayout