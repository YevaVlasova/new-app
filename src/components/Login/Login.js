import CloseIcon from "../icons/CloseIcon";
import EyeIcon from "../icons/EyeIcon";
import GoogleIcon from "../icons/GoogleIcon";
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import Input from '../UI/Input/Input';
import './Login.scss';

function Login() {
  return (
    <div className='login'>
        <div className="login__title">NFT Access</div>
        <div className="login__desc">Please fill your detail to access your account.</div>
        <form action="get" className="form">
          <Input title="Email" placeholder="debra.holt@example.com" type="email" icon={<CloseIcon />} />
          <Input title="Password" placeholder="••••••••" type="password" icon={<EyeIcon />} />
          <div className="form__row">
            <Checkbox title="Remember me"/>
            <a className="form__a" href="/">Forgot Password?</a> 
          </div>
        </form> 
          <Button addClass="_primary" title="Sign in" type="submit"/>
          <Button linkTo="/" addClass="_secondary" title="Sign in with Google" icon={<GoogleIcon />}/>
       
        <div className="login__sign-up">
          Don’t have an account? 
          <a className="login__a" href='/'> Sign up</a>
        </div>
    </div>
  );
}

export default Login;
