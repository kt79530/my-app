import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import '../css/Portfolio.scss';

const Portfolio = () =>{
    
    return(
    <>
        <Container>
            <Row className="works-wrapper">
                <Col lg={12} md={12} sm={12}>
                    <div className="title">
                                <p className="text">Works</p>
                                <p className="line-up" data-aos='zoom-in'></p>
                                <p className="line-down" data-aos='zoom-in'></p>
                    </div>
                </Col>
                

                <Col lg={12} md={12} sm={12} >
                    <h1><strong>ReDesign & Coding (NAMOO ACTORS)</strong></h1>
                    <h4>Home, Introduction, History 컴포넌트 코딩 작업을 수행하였습니다.</h4>
                    <pre><h6><strong># Vue / Vuetify   #Scss   #HTML</strong></h6> </pre>
                </Col>

                <Col lg={12} md={12} sm={12} >
                    <div className="video">
                        <video 
                            src="/image/work-video.mp4" 
                            autoPlay
                            muted
                            loop
                            width="120%"
                            //</div>height="100%"
                            >
                        </video>
                        <Button
                            className="button" 
                            onClick={() => window.open("https://monggea.github.io/namooActors", "_blank")}>
                        Go to the Site
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default Portfolio;