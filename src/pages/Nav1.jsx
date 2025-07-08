import {Outlet, Link } from "react-router-dom";

const Nav1 = () => {
    return(
        <>
        <nav className="navbar  bg-light"> {/* navbar-expand-sm  브라우저 너비가 576px이하일때만 햄버거버튼 보이기*/}
            <div className="container-fluid">
 
            {/*햄버거 메뉴 */}
            <button className="navbar-toggler" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#target">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="target">
                    <ul className="navbar-nav me-auto">{/*margin end-auto 오른쪽 여백을 자동으로 조절 */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
          
        <Outlet />
         </>
    );
}        
export default Nav1; 