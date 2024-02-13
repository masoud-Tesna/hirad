import PageDetails from '@/app/dashboard/components/PageDetails';
import CooperationTable from './components/CooperationTable';

const CooperationPage = () => {
  return (
    <>
      <PageDetails>
        گزارش درخواست های همکاری
      </PageDetails>
      
      <div className="px-[3%]">
        <CooperationTable />
      </div>
    </>
  );
};

export default CooperationPage;
