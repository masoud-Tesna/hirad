import {Button, Col, Form, Input, Modal, Dropdown, Space} from 'antd';
import {useState} from 'react';
import {handleCreateAntdZodValidator} from '@/utils/helpers';
import {LoginZod} from '@/app/schema/login';
import {useRequest} from '@/utils/useRequest';
import {useAuth} from '@/app/contexts/auth/AuthContext';
import Link from 'next/link';
import {DownOutlined} from '@ant-design/icons';

const LoginSection = () => {
  const {isLoggedIn, userInfo, handleChangeUserData, handleLogout} = useAuth();
  
  const [formRef] = Form.useForm();
  
  const request = useRequest();
  
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  
  const {mutateAsync: loginRequest, isPending: loginIsPending} = request.useMutation({
    url: '/api/v1/auth/login',
    showMessage: {
      success: false
    }
  });
  
  const handleOnFinishLogin = async (formData) => {
    try {
      const loginZod = LoginZod.parse(formData);
      
      const loginResponse = await loginRequest(loginZod);
      
      await handleChangeUserData(loginResponse?.response);
      
      setLoginModalOpen(false);
    } catch (error) {
      console.log('error in handleOnFinishLogin >>>', error);
    }
  };
  
  const adminItem = userInfo?.type === 'admin' ? {key: '1', label: <Link href={'/dashboard'}>داشبورد</Link>} : {};
  
  const items = [
    adminItem,
    {
      key: '2',
      danger: true,
      label: 'خروج',
      onClick: handleLogout
    }
  ];
  
  return (
    <>
      <div
        className="text-white text-captionLg cursor-pointer"
        onClick={() => !isLoggedIn && setLoginModalOpen(true)}
      >
        {isLoggedIn ?
          <Dropdown
            trigger={['click']}
            menu={{
              items
            }}
          >
            <Space className="cursor-pointer">
              {`${userInfo?.firstName} ${userInfo?.lastName}`}
              <DownOutlined />
            </Space>
          </Dropdown> :
          'ورود | Login'
        }
      </div>
      
      <Modal
        open={loginModalOpen}
        footer={null}
        onCancel={() => setLoginModalOpen(false)}
        title="ورود | Login"
        className="--customModal"
        width="50%"
      >
        <Form
          form={formRef}
          onFinish={handleOnFinishLogin}
        >
          <div>
            <Form.Item
              name="credential"
              rules={[handleCreateAntdZodValidator(LoginZod)]}
            >
              <Input
                placeholder="شماره موبایل"
                disabled={loginIsPending}
                rootClassName="d-ltr placeholder:text-end"
              />
            </Form.Item>
          </div>
          
          <div>
            <Form.Item
              name="password"
              rules={[handleCreateAntdZodValidator(LoginZod)]}
            >
              <Input.Password
                placeholder={'کلمه عبور'}
                rootClassName="d-ltr [&>input]:d-ltr [&>input]:placeholder:text-end"
                disabled={loginIsPending}
              />
            </Form.Item>
          </div>
          
          <div className="mt-2">
            <Button
              block
              className="!bg-primary !text-captionXl !text-white !p-0"
              htmlType={'submit'}
              loading={loginIsPending}
            >
              ورود
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default LoginSection;
