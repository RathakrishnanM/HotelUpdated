// import React, { useState } from "react"
// import HeadTitle from "../../common/HeadTitle/HeadTitle"
// import "./Design.css"

// const Register = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [cpassword, setCpassword] = useState("")

//   const [recValue, setRecValue] = useState([])
//   const submitForm = (e) => {
//     e.preventDefault()
//     const newValue = { name: name, email: email, password: password, cpassword: cpassword }

//     setRecValue([...recValue, newValue])
//     console.log(newValue)

//     setName("")
//     setEmail("")
//     setPassword("")
//     setCpassword("")
//   }
//   return (
//     <>
//       <HeadTitle />
//       <section className='forms top'>
//         <div className='container'>
//           <div className='sign-box'>
//             <p>Don't have an account? Create your account, it takes less than a minute.</p>
//             <form action='' onSubmit={submitForm}>
//               <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
//               <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
//               <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
//               <input type='password' name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='Confirm Password' required />

//               <button type='submit' className='primary-btn'>
//                 Create an Account
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <section className='show-data'>
//         {recValue.map((cureentValue) => {
//           return (
//             <>
//               <div className='sign-box'>
//                 <h1>Account Created Successfully</h1>
//                 <h3>
//                   Name : <p>{cureentValue.name}</p>
//                 </h3>
//                 <h3>
//                   Email : <p>{cureentValue.email}</p>
//                 </h3>
//                 {/* <h3>
//                   Password : <p>{cureentValue.password}</p>
//                 </h3>
//                 <h3>
//                   Confirm Password : <p>{cureentValue.cpassword}</p>
//                 </h3> */}
//               </div>
//             </>
//           )
//         })}
//       </section>
//     </>
//   )
// }

// export default Register


// import React, { useState } from "react";
// import axios from "axios";
// import HeadTitle from "../../common/HeadTitle/HeadTitle";
// import "./Design.css";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCpassword] = useState("");

//   const submitForm = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5001/api/auth/register", {
//         username: name,
//         email: email,
//         password: password,
//       });

//       // Assuming your backend sends back the newly created user details
//       const newUser = response.data;

//       console.log("Account Created Successfully:", newUser);

//       // Handle any additional logic, such as redirecting to a login page
//     } catch (error) {
//       console.error("Registration failed:", error);
//       // Handle registration error, e.g., display an error message
//     }

//     setName("");
//     setEmail("");
//     setPassword("");
//     setCpassword("");
//   };

//   return (
//     <>
//       <HeadTitle />
//       <section className="forms top">
//         <div className="container">
//           <div className="sign-box">
//             <p>Don't have an account? Create your account, it takes less than a minute.</p>
//             <form onSubmit={submitForm}>
//               <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//               <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//               <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//               <input
//                 type="password"
//                 name="cpassword"
//                 value={cpassword}
//                 onChange={(e) => setCpassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 required
//               />

//               <button type="submit" className="primary-btn">
//                 Create an Account
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Register;


// import React, { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import HeadTitle from "../../common/HeadTitle/HeadTitle";
// import "./Design.css";
// import "./PopupStyles.css";
// import { ToastContainer, toast } from "react-toastify";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCpassword] = useState("");
//   const [error, setError] = useState("");


//   const history = useHistory();

//   const submitForm = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5001/api/auth/register", {
//         username: name,
//         email: email,
//         password: password,
//       });

//       const newUser = response.data;
//       console.log("Account Created Successfully:", newUser);

//       // Redirect to the home page after successful registration
//       history.push("/");

//     } catch (error) {
//       console.error("Registration failed:", error.response.data.error);
//       // setError(error.response.data.error);
//       if (error.response.data.error.includes("already exists")) {
//         toast.error("User with this email already exists!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//       }
//     }
//     }

//     setName("");
//     setEmail("");
//     setPassword("");
//     setCpassword("");
//   };

//   return (
//     <>
//       <HeadTitle />
//       <section className="forms top">
//         <div className="container">
//           <div className="sign-box">
//             <p>Don't have an account? Create your account, it takes less than a minute.</p>
//             <form onSubmit={submitForm}>
//               <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//               <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//               <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//               <input
//                 type="password"
//                 name="cpassword"
//                 value={cpassword}
//                 onChange={(e) => setCpassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 required
//               />

//               <button type="submit" className="primary-btn">
//                 Create an Account
//               </button>
//             </form>

//             {error && <div className="error-message">{error}</div>}
//           </div>
//         </div>
//       </section>
     
//     </>
//   );
// };

// export default Register;


import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import "./Design.css";
// import "./PopupStyles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  // Remove the unused 'error' state variable

  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/auth/register", {
        username: name,
        email: email,
        password: password,
      });

      const newUser = response.data;
      console.log("Account Created Successfully:", newUser);

      // Redirect to the home page after successful registration
      history.push("/");

    } catch (error) {
      console.error("Registration failed:", error.response.data.error);
      // Remove the 'setError' line since 'error' is not used

      if (error.response.data.error.includes("already exists")) {
        toast.error("User with this email already exists!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }

    // Move the reset state here
    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };

  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form onSubmit={submitForm}>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
              <input
                type="password"
                name="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />

              <button type="submit" className="primary-btn">
                Create an Account
              </button>
            </form>

            {/* Remove the 'error' check here since it's not used */}
          </div>
        </div>
      </section>

      {/* Include the ToastContainer here */}
      <ToastContainer />
    </>
  );
};

export default Register;
