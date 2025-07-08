import {Outlet, Link} from "react-router-dom";
import '../css/Nav.css';

const Nav = () => {
    return(
        <>
<nav className="navbar  bg-light"> {/* navbar-expand-sm  브라우저 너비가 576px이하일때만 햄버거버튼 보이기*/}
<div className="container-fluid">

    <a className="navbar-brand" href="/">리액트레퍼런스</a>

    {/*햄버거 메뉴 */}
    <button className="navbar-toggler" 
            data-bs-toggle="collapse" 
            data-bs-target="#target">
        <span className="navbar-toggler-icon"></span>
    </button>

<div className="collapse navbar-collapse" id="target">
    <ul className="navbar-nav me-auto">{/*margin end-auto 오른쪽 여백을 자동으로 조절 */}
        <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            React Bootstrap
            </a>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link to="/acc" className="nav-link">Accordion</Link>
                    </li>
                </ul>
        </li>
    </ul>
</div>
</div>
</nav>

        </>
    );

}
export default  Nav;