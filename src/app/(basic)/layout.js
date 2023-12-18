import PageTemplate from '@/app/(basic)/PageTemplate';

const BasicLayout = ({children}) => {
  return (
    <PageTemplate>
      {children}
    </PageTemplate>
  );
};

export default BasicLayout;
