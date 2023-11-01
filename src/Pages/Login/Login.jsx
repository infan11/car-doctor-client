
import { Link } from 'react-router-dom';
import image from '../..//assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
    
    const {signIn} = useContext(AuthContext)
     
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const user = {email, password}
        console.log(user)
      
        signIn(email,password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
      
            <div className="hero  min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="w-1/2 mr-12">
     <img src={image} alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
            <p className='text-center'>You Have not Account ? Now <Link className='text-bold text-blue-500'  to={'/Signup'}> Sign Up</Link> </p>
        </div>
      </form>
    </div>
  </div>
</div>
        
    );
};

export default Login;