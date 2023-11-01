
import { Link } from 'react-router-dom';
import image from '../..//assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const SignUp = () => {
  
    const {createUser } = useContext(AuthContext)
 const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name =  form.name.value;
        const email =form.email.value;
        const password = form.password.value
       const user = {name, email, password}
        console.log(user)
    
       
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log = ('create user' , user)
            if(user){
              Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
            }
           
            form.reset()
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
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
              <div className=" name form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered " required />
              </div>
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
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <div>
                <p className='text-center'>You Have an Account ? Now  < Link className='text-bold text-blue-600 ' to={'/login'}>Login</Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;