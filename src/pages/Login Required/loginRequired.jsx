import './loginRequired.css';
import login_required from '../../assets/login-required.png';
const LoginRequired = () => {
    return(
        <div class="login-required">
            <img src={login_required} className='login-required-logo'></img>
            <h1 className="login-message">Sorry, Please Login First Page!</h1>
        </div>
    )
};

export default LoginRequired;