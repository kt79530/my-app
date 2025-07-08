import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import '../css/Main.scss';
import '../css/CircleToText.scss';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../css/Fonts.scss';
import CircleText from "./CircleText";


export default function CircleToText() {

    const controls = useAnimation();
    const [showText, setShowText] = useState(false);

    
    useEffect(() => {
      Aos.init({ duration: 1000, offset: 100 });
    },[]);
  
    useEffect(() => {
      const sequence = async () => {
        // 원형 등장
        await controls.start({
          scale:1,
          width: 200,
          height: 200,
          borderRadius:'50%',
          backgroundColor:'#2F4DE0',
          transition: { duration: 1 },
        });
        //원이 텍스트로 변화
        await controls.start({
          width: 800,
          height: 1,
          borderRadius:'1px',
          backgroundColor:'none',
          transition: { duration: 2 },
        });
        //애니메이션 종료후 text 전환
        setShowText(true);
        
      };
      sequence();
    }, []);

  return (
    <>
      <Container >
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className='circle-text-container' >
              <motion.div className='animated-box'
                          animate={controls}>
                {showText && (
                  <motion.span
                    className="animated-text"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}>
                      <p className="name">Let's KT</p>
                      <p>Portfoilo</p>
                    </motion.span>
                )}
              </motion.div>  
                      
            </div>
          </Col>
          <Col>
                <div className="mouse-wrapper d-flex justify-content-center align-items-center" >
                    <img src="/image/mouse.png" className="mouse-img"/>
                </div>
          </Col>
        </Row>
      </Container>
    <CircleText/>
    <div className="section sec-about" >
    <About />
    </div>

    <div className="section sec-port" >
    <Portfolio/>
    </div>

    <div className="section sec-con">
    <Contact/>
    </div>
    </>
  );
  
}