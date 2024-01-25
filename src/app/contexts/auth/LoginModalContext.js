// Context Create:
import {createContext, useContext, useState} from 'react';
import {Modal} from 'antd';
import LoginForm from './components/LoginForm';

const loginModalContext = createContext(false);

const LoginModalProvider = ({children}) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  
  return (
    <loginModalContext.Provider value={{loginModalOpen, setLoginModalOpen}}>
      {children}
      
      <Modal
        open={loginModalOpen}
        footer={null}
        onCancel={() => setLoginModalOpen(false)}
        title="ورود | Login"
        className="--customModal !w-full md:!w-[45%]"
      >
        <LoginForm setLoginModalOpen={setLoginModalOpen} />
      </Modal>
    </loginModalContext.Provider>
  );
};

export const useLoginModal = () => {
  const getLoginModalContext = useContext(loginModalContext);
  
  const loginModalOpen = getLoginModalContext?.loginModalOpen; // get current loginModalOpen
  const setLoginModalOpen = getLoginModalContext?.setLoginModalOpen; // dispatch setLoginModalOpen
  
  const handleOpenLoginModal = () => setLoginModalOpen(true);
  const handleCloseLoginModal = () => setLoginModalOpen(false);
  
  return {loginModalOpen, handleOpenLoginModal, handleCloseLoginModal};
};

export default LoginModalProvider;
