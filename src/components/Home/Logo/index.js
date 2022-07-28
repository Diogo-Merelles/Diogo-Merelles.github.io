
import './index.scss';
import LogoHome from "../../../images/logo-s.png";

const Logo = () => {
    return(
        <div className="logo-home">
            <img className="solid-logo" src={LogoHome} alt="logo-img" />
        </div>
    )
}

export default Logo;
