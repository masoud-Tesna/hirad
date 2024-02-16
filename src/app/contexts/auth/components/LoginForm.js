import {Button, Form, Input} from 'antd';
import {handleCreateAntdZodValidator} from '@/utils/helpers';
import {LoginZod} from '@/app/schema/login';
import {useRequest} from '@/utils/useRequest';
import {useAuth} from '@/app/contexts/auth/AuthContext';
import {useRouter} from 'next/navigation';

const LoginForm = ({setLoginModalOpen}) => {
  const {handleChangeUserData} = useAuth();
  const [formRef] = Form.useForm();
  const router = useRouter();
  
  const request = useRequest();
  
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
      
      if (loginResponse.response?.userInfo?.type === 'admin') {
        router.push('/dashboard/users');
      }
    } catch (error) {
      console.log('error in handleOnFinishLogin >>>', error);
    }
  };
  
  return (
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
  );
};

export default LoginForm;
