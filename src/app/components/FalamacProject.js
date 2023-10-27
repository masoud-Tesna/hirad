import {Button, Col, Row} from 'antd';

export default () => {
  return (
    <div className="bg-[url('/images/falamacProjectBg.png')] bg-center bg-cover bg-no-repeat --falamacProjectSection">
      <Row className="bg-[rgba(21,21,21,.85)] py-[40px]" justify="center">
        <Col span={12} className="--centerSection py-[25px] text-center">
          <div className="text-white text-captionXl tracking-[4px] uppercase">
            falamac project
          </div>
          
          <div className="mt-[12px]">
            <Button className="!h-[38px] !pb-[5px] !px-[4rem]">
              book to visit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
