import PageDetails from '@/app/dashboard/components/PageDetails';
import ReservationsTable from './components/ReservationsTable';

const ReservationsPage = () => {
    return (
        <>
            <PageDetails>
                گزارش رزرو بازدید
            </PageDetails>

            <div className="px-[3%]">
                <ReservationsTable />
            </div>
        </>
    );
};

export default ReservationsPage;
