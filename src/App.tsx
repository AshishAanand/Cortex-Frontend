import LandingPage from "@/pages/LandingPage"
import { Route, Routes } from "react-router-dom"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import HomePage from "@/pages/HomePage"
import WritePage from "@/pages/WritePage"
import ProfilePage from "@/pages/ProfilePage"

const App = () => {
    return (
        <Routes>

            {/* Landing */}
            <Route path="/" element={<LandingPage />} />

            {/* Dashboard Layout */}
            <Route path="/dashboard" element={<DashboardLayout />}>

                {/* Nested Routes */}
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="write" element={<WritePage />} />
                <Route path="profile" element={<ProfilePage />} />

            </Route>

        </Routes>
    )
}

export default App