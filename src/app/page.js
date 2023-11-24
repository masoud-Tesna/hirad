'use client';

// components
import ProjectsList from '@/app/components/ProjectsListsGrid';
import ProjectsListSlider from '@/app/components/ProjectsListSlider';
import FollowUsSection from '@/app/components/FollowUsSection';
import BusinessPartners from '@/app/components/BusinessPartners';
import FalamacProject from '@/app/components/FalamacProject';
import ChangeBanner from '@/app/components/ChangeBanner';

const Home = () => {
  /*const [formRef] = Form.useForm();
  
  const inputWatch = Form.useWatch('test', formRef) || '';
  
  const [focused, setFocused] = useState(false);
  
  const floating = inputWatch.trim().length !== 0 || focused || undefined;*/
  
  return (
    <>
      {/*<div className="my-[60px] w-[300px] mx-auto">
        <Form
          form={formRef}
          layout="vertical"
          
          onFinish={v => {
            console.log({v});
          }}
        >
          <div className="--floatingLabel" data-floating={floating}>
            <Form.Item
              name="test" label={floating ? 'ایمیل' : 'ایمیل (اجباری)'}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            >
              <Input
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>*/}
      
      <ChangeBanner />
      
      <div className="pb-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
          <ProjectsList />
        </div>
      </div>
      
      <div className="bg-gray-10 py-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
          <ProjectsListSlider />
        </div>
      </div>
      
      <div>
        <FollowUsSection />
      </div>
      
      <div className="py-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
          <BusinessPartners />
        </div>
      </div>
      
      <div>
        <FalamacProject />
      </div>
    </>
  );
};

export default Home;
