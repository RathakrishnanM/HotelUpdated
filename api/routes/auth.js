


const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists!' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist!' });
    }

    const validated = await bcrypt.compare(req.body.password, user.password);

    if (!validated) {
      return res.status(400).json({ error: 'Wrong credentials!' });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useHistory } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { css } from "@emotion/react";
// import { BarLoader } from "react-spinners";
// import HeadTitle from "../../common/HeadTitle/HeadTitle";
// import "react-toastify/dist/ReactToastify.css";
// import "./Design.css";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// const Login = () => {
//   const history = useHistory();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [recValue, setRecValue] = useState(null);
//   const [loginError, setLoginError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const submitForm = async (e) => {
//     e.preventDefault();
//     const data = { username, password };

//     try {
//       // Set loading state to true
//       setIsLoading(true);

//       const response = await axios.post("/api/auth/login", data);

//       // If login is successful, update the state with the received data
//       setRecValue(response.data);

//       // Show success toast
//       toast.success("Login Successful");

//       // Wait for 2 seconds (2000 milliseconds)
//       setTimeout(() => {
//         // Reset loading state to false
//         setIsLoading(false);

//         // Redirect to the home page
//         history.push("/");
//       }, 2000);
//     } catch (error) {
//       // Handle login error

//       // Reset loading state to false in case of an error
//       setIsLoading(false);

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
//           closeButtonStyle: {
//             color: "#ff0000", // Set close button color to red
//           }, // Remove the close button
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
//                   <span>forgot my password?</span>
//                 </div>
//               </div>

//               <button type="submit" className="primary-btn">
//                 {isLoading ? (
//                   <BarLoader color={"#ffffff"} css={override} size={150} />
//                 ) : (
//                   "Sign In"
//                 )}
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


