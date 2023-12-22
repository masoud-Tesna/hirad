'use client'

import DashboardPageIsLoading from "@/app/dashboard/components/DashboardPageIsLoading";
import {useAuth} from "@/app/contexts/auth/AuthContext";
import {useRouter} from "next/navigation";

const Dashboard = () => {
    const {isLoggedIn, userInfo} = useAuth();
    const router = useRouter();

    if (isLoggedIn && userInfo?.type === 'admin') {
        return router.push('/dashboard/users');
    }

    return <DashboardPageIsLoading/>;
};

export default Dashboard;
