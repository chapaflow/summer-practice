import logo from '../../assets/logo.png'
import './Header.css'

const Header = function() {
    return (
        <header className="Header">
            <div className='headerContent'>
                <img src={logo} className='headerLogo'></img>
            </div>
        </header>
    );
}

export default Header;