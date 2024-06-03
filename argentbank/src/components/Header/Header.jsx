import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin } from '../../utils/selector';
import * as loginAction from '../../features/login.js';
import logo from '../../img/argentBankLogo.png';
import './Header.css';

function Header() {
    const login = useSelector(selectLogin);
    const dispatch = useDispatch();

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {!login ? (
                    <NavLink to="/sign-in" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                ) : (
                    <div>
                        <NavLink to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </NavLink>
                        <NavLink
                            to="/"
                            className="main-nav-item"
                            onClick={() => dispatch(loginAction.set(false))}
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;
