
// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useHistory } from "react-router-dom";
// import HeadTitle from "../../common/HeadTitle/HeadTitle";
// import "./Design.css";

// const Login = () => {
//   const history = useHistory();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [recValue, setRecValue] = useState([]);

//   const submitForm = async (e) => {
//     e.preventDefault();
//     const data = { email, password };

//     try {
//       const response = await axios.post("/api/auth/login", data);
//       // Handle successful login, e.g., redirect to home page
//       history.push("/components/pages/Home");
//     } catch (error) {
//       // Handle login error
//       console.error("Login failed:", error);
//     }

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <>
//       <HeadTitle />
//       <section className='forms top'>
//         <div className='container'>
//           <div className='sign-box'>
//             <p>Provide your email address and password to access your account</p>
//             <form action='' onSubmit={submitForm}>
//               <input
//                 type='text'
//                 name='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder='Email'
//               />
//               <input
//                 type='password'
//                 name='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder='Password'
//               />

//               <div className='flex_space'>
//                 <div className='flex'>
//                   <input type='checkbox' />
//                   <label>Remember Me</label>
//                 </div>
//                 <div className='flex'>
//                   <span> forgot my password?</span>
//                 </div>
//               </div>

//               <button type='submit' className='primary-btn'>
//                 Sign In
//               </button>
//               <p>
//                 Don't have an account? <Link to='/register'>Signup!</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>

//       <section className='show-data'>
//         {recValue.map((currentValue, index) => (
//           <div key={index} className='sign-box'>
//             <h1>Signed-In Successfully</h1>
//             <h3>
//               Email : <p>{currentValue.email}</p>
//             </h3>
//             <h3>
//               Password : <p>{currentValue.password}</p>
//             </h3>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useHistory } from "react-router-dom";
// import HeadTitle from "../../common/HeadTitle/HeadTitle";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Design.css";

// const Login = () => {
//   const history = useHistory();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [recValue, setRecValue] = useState(null);
//   const [loginError, setLoginError] = useState("");
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const submitForm = async (e) => {
//     e.preventDefault();
//     const data = { username, password };

//     try {
//       const response = await axios.post("/api/auth/login", data);

//       // If login is successful, update the state with the received data
//       setRecValue(response.data);

//       // Redirect to the home page
//       history.push("/");

//       // Show success toast
//       toast.success("Login Successful");
//     } catch (error) {
//       // Handle login error
//       if (error.response && error.response.status === 400) {
//         setLoginError(error.response.data.error);

//         // Show error toast
//         toast.error("Wrong credentials", {
//           style: {
//             borderRadius: "10px",
//             background: "#ffffff", // Set background color to white
//             color: "#ff0000", // Set text color to red
//             width: "400px",
//           },
//           progressStyle: {
//             background: "#ff0000", // Set progress bar color to red
//           },
//           iconTheme: {
//             primary: "#ff0000", // Set warning symbol color to red
//           },
//           closeButton: true, // Display the close button
//   closeButtonStyle: {
//     color: "#ff0000", // Set close button color to red
//   }, // Remove the close button
//         });
//       } else {
//         console.error("Login failed:", error);
//       }
//     }

//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <>
//       <HeadTitle />
//       <section className="forms top">
//         <div className="container">
//           <div className="sign-box">
//             <p>Provide your username and password to access your account</p>
//             <form action="" onSubmit={submitForm}>
//               <input
//                 type="text"
//                 name="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//               />

//               <div className="flex_space">
//                 <div className="flex">
//                   <input type="checkbox" />
//                   <label>Remember Me</label>
//                 </div>
//                 <div className="flex">
//                   <span> forgot my password?</span>
//                 </div>
//               </div>

//               <button type="submit" className="primary-btn">
//                 Sign In
//               </button>
//               {loginError && <p className="error-message">{loginError}</p>}
//               {recValue && (
//                 <div className="sign-box">
//                   <h1>Login Successful</h1>
//                   <h3>
//                     Username: <p>{recValue.username}</p>
//                   </h3>
//                   {/* Other user details if needed */}
//                 </div>
//               )}
//               {/* Include ToastContainer for displaying toasts */}
//               <ToastContainer />
//               <p>
//                 Don't have an account? <Link to="/register">Signup!</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import "./Design.css";

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [recValue, setRecValue] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    const data = { username, password };

    try {
      // Set loading state to true
      setIsLoading(true);

      const response = await axios.post("/api/auth/login", data);

      // If login is successful, update the state with the received data
      setRecValue(response.data);

      // Wait for 2 seconds (2000 milliseconds)
      setTimeout(() => {
        // Reset loading state to false
        setIsLoading(false);

        // Redirect to the home page
        history.push("/");
      }, 2000);
    } catch (error) {
      // Handle login error

      // Reset loading state to false in case of an error
      setIsLoading(false);

      if (error.response && error.response.status === 400) {
        setLoginError(error.response.data.error);
      } else {
        console.error("Login failed:", error);
      }
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>Provide your username and password to access your account</p>

            {/* Add the loading container here */}
            {isLoading && (
              <div className="loading-container">
                <ThreeDots color="#ffffff" height={80} width={80} />
              </div>
            )}

            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
                <div className="flex">
                  <span>forgot my password?</span>
                </div>
              </div>

              <button type="submit" className="primary-btn">
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
              {loginError && <p className="error-message">{loginError}</p>}
              {recValue && (
                <div className="sign-box">
                  <h1>Login Successful</h1>
                  <h3>
                    Username: <p>{recValue.username}</p>
                  </h3>
                  {/* Other user details if needed */}
                </div>
              )}
              {/* No ToastContainer for displaying toasts */}
              <p>
                Don't have an account? <Link to="/register">Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
