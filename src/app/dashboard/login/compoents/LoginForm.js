'use client';

import {Button, Col, Form, Input, Row} from 'antd';
import {handleCreateAntdZodValidator} from "@/utils/helpers";
import {LoginZod} from "@/app/schema/login";
import {useRequest} from "@/utils/useRequest";
import {useAuth} from "@/app/contexts/auth/AuthContext";
import {useState} from "react";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const [formRef] = Form.useForm();
    const router = useRouter();
    const request = useRequest();
    const {handleChangeUserData, isLoggedIn} = useAuth();

    const [isLoading, setIsLoading] = useState(false);

    const {mutateAsync: loginRequest, isPending: loginIsPending} = request.useMutation({
        url: '/api/v1/auth/login',
        showMessage: {
            success: false
        }
    });

    const handleOnFinishLogin = async (formData) => {
        try {
            setIsLoading(true);

            const loginZod = LoginZod.parse(formData);

            const loginResponse = await loginRequest(loginZod);

            await handleChangeUserData(loginResponse?.response);

            // router.push('/dashboard/users');
        } catch (error) {
            console.log('error in handleOnFinishLogin >>>>', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoggedIn) {
        return router.push('/dashboard/users');
    }

    return (
        <Form form={formRef} onFinish={handleOnFinishLogin} className="h-full">
            <Row justify={'center'} align={'middle'} className="h-full">
                <Col xs={24} md={12} lg={10} xl={8} xxl={6}>
                    <Form.Item
                        name={'credential'}
                        rules={[handleCreateAntdZodValidator(LoginZod)]}
                    >
                        <Input
                            placeholder={'شماره موبایل'}
                            readOnly={loginIsPending || isLoading}
                            rootClassName="d-ltr placeholder:text-end"
                        />
                    </Form.Item>

                    <Form.Item
                        name={'password'}
                        rules={[handleCreateAntdZodValidator(LoginZod)]}
                    >
                        <Input.Password
                            placeholder={'رمز عبور'}
                            readOnly={loginIsPending || isLoading}
                            rootClassName="d-ltr [&>input]:d-ltr [&>input]:placeholder:text-end"
                        />
                    </Form.Item>

                    <Button block type={'primary'} htmlType={'submit'} loading={loginIsPending || isLoading}>
                        ورود
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default LoginForm;
