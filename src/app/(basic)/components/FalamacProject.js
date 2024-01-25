import {Button, Col, Row} from 'antd';
import {useBookVisit} from '@/app/contexts/bookVisit';

const FalamacProject = () => {
  const {setBookVisitOpen} = useBookVisit();
  
  return (
    <div className="bg-[url('/images/falamacProjectBg.png')] bg-center bg-cover bg-no-repeat --falamacProjectSection">
      <Row className="bg-[rgba(21,21,21,.85)] py-[40px]" justify="center">
        <Col xs={18} md={12} className="--centerSection py-[25px] text-center">
          <div className="text-white text-captionXl tracking-[4px] uppercase">
            hirad palace
          </div>
          
          <div className="mt-[12px]">
            <Button
              className="!h-[38px] !py-0 !leading-[40px] uppercase !text-black !w-[226px]"
              onClick={() => setBookVisitOpen(true)}
            >
              book to visit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FalamacProject;
