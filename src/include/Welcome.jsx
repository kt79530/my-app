import {Outlet, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import '../css/Welcome.css';
//import HoverImage from "../js/Hover";


const Welcome = () => {
    const [ isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();        
    
    const handleClick = () => {
        setIsClicked(!isClicked);
        navigate('/main');
    };

    return(
    <div className="wrapper">
        <Container >
            <Row>
                <Col lg={12} className="d-flex justify-content-center align-items-center">
                
                    <div className="center-box">
                        <img className="star"
                             src="/image/star2.png" alt="별 이미지" 
                             onClick={handleClick }/>
                    </div>
                </Col>
            </Row>
        </Container>

        

    <Outlet/>{/*선언하지 않으면 제대로 작동하지 않습니다 */}
    
    </div>
   );
}

export default Welcome;

{/* navVisible 상태에 따라 조건부 렌더링 */}
/*<Col md={12} className="nav d-flex justify-content-center align-items-center">
                    
                    {navVisible && (
                        <nav className={`nav-menu ${navVisible ? "visible" : ""}`}>
                        <ul className="d-flex align-items-center">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        </nav>
                    )}*/