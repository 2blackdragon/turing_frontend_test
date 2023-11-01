import logo from './../../img/logo.svg'
import man from './../../img/man_v_1.png'
import "./header.css"

function Header (){
    return (
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logo} alt='logo' />
                        <span>Вкусно - и точка</span>
                    </div>
                    <div className="header_login">
                        <a href='#!' className='login_btn'>
                            <img src={man} alt='man'></img>
                            <span>Войти</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;