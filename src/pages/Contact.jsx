import { Container, Row, Col } from "react-bootstrap";
import '../css/Contact.scss';

const Contact = () =>{
    return(
    <>
        <Container >
            <Row className=" d-flex justify-content-center align-items-center">
                <Col lg={12} md={12} sm={12} 
                     className="">
                      <div className="title1" data-aos='fade-left'>
                            <p className="text">Contact Me</p>
                            <p className="line-up" data-aos='zoom-in'></p>
                            <p className="line-down" data-aos='zoom-in'></p>
                        </div>
                </Col>
                    <Col lg={12} md={12} sm={12} 
                     className="d-flex justify-content-center align-items-center " >    
                    <div className="infor-wrap" data-aos='fade-up'>
                        <div className="infor-mail">
                            <img src="/image/mail-icon.png"/>
                            <strong> kiteaman@naver.com</strong>
                        </div>
                        <div className="infor-phone">
                            <img src="/image/phone-icon.png"/>
                            <strong>  010. 1234. 5678</strong>
                        </div>
                        <div className="infor-web">
                            <img src="/image/web-icon.png"/>
                            <strong> github.com/sag/sfgw</strong>
                        </div>
                    </div>{/*infor-wrap*/}
                </Col>            
            </Row>
        </Container>
    </>
    );
}

export default Contact;