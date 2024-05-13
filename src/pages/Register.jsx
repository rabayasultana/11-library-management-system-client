import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from "../firebase/firebase.config";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { AuthContext } from "../components/AuthProvider";

const Register = () => {


  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate()
    const from = "/";

    const handleRegister = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
  
      const name = form.get('name');
      const photo = form.get('photo');
      const email = form.get('email');
      const password = form.get('password');
      const accepted = form.get('terms');
      // console.log(name, photo, email, password, accepted);


      // reset error and success
      setRegisterError('');
      setSuccess('');

      
// password validation
      if(password.length < 6){
        setRegisterError('Password should be at least 6 characters or longer');
        toast('Password should be at least 6 characters ');
        return;
    } 

    else if(!/[A-Z]/.test(password)){
        setRegisterError('Your password should have at least one upper case letter');
        toast('Please give an uppercase letter');
        return;
    }

    else if(!/[a-z]/.test(password)){
        setRegisterError('Your password should have at least one lower case letter.');
        toast('Please give a lowercase letter');
        return;
    }

    else if(!accepted){
        setRegisterError('Please accept our terms and conditions')
        toast('Please accept our terms and conditions');
        return;
    }

  
      // create user
      createUser(email, password)
      .then(result => {
          setSuccess('User Created Successfully');
          toast('User Created Successfully');
        console.log(result)
          const user = {email};
          fetch('https://assignment-10-painting-server.vercel.app/user',{
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
          })
          if(result.user){
           
            setTimeout(() => navigate(from), 1000);
        }

        //   Update display name and photoURL
          const currentUser = auth.currentUser;
          if (currentUser !== null){
            updateProfile(currentUser, {
                displayName: name,
                photoURL: photo
            })
            .then( () => {

            })
            .catch()
          }

      })
      .catch(error => {
          setRegisterError(error.message);
          toast('Something Went wrong Please try again');
      })
    }

    return (
        <div className="">

            <ToastContainer/>
      <Navbar></Navbar>
      <div className="animate__animated animate__fadeInUp">
        <h2 className="text-3xl mt-10 text-center">Please Register</h2>

        {/* hero */}
        <form
          onSubmit={handleRegister}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
            {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
           {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={ showPassword ? "text" :   "password"}  
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <span className="absolute top-12 right-2" onClick={ () => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
          </div>
          {/* terms and conditions */}
          <div className="mb-1">
                <input type="checkbox" name="terms" id="terms" />
                <label className="ml-2" htmlFor="terms">Accept our <span className="text-blue-700"><a href="">terms and conditions</a></span></label>
                </div>
                {/* register button */}
          <div className="form-control mt-6">
            <button className="btn bg-[#043E32] text-white text-xl">Register</button>
          </div>
        </form>

        {
                registerError && <p className="text-red-700 text-center">{registerError}</p>
            }

            {
                success && <p className="text-green-600 text-center">{success}</p>
            }

        <p className="text-center mb-20">
          Already have an account? Please
          <span className="text-blue-800 font-bold">
            <Link to="/login"> Login</Link>
          </span>
        </p>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Register;