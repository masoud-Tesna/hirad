import {Layout} from 'antd';
import Header from '@/templates/components/Header';
import Footer from '@/templates/components/Footer';
import Content from '@/templates/components/Content';

const BasicLayout = ({children}) => {
  return (
    <Layout className="min-h-full !bg-white">
      <Header />
      
      <Content>
        {children}
      </Content>
      
      <Footer />
    </Layout>
  );
};

export default BasicLayout;
