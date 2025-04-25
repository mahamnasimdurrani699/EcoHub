// import React from 'react'

// const Register = ({openLogin}) => {
//   return (
//     <div>
//     <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//     <form>
//     <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input
//                 type="text"
//                 className="w-full px-3 py-2 border"
//                 placeholder="Enter Name"
//             />
//         </div>
//         <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//                 type="email"
//                 className="w-full px-3 py-2 border"
//                 placeholder="Enter Email"
//             />
//         </div>
//         <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//                 type="password"
//                 className="w-full px-3 py-2 border"
//                 placeholder="Enter Password"
//             />
//         </div>
//         <div className="mb-4 flex items-center justify-between">
//             <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2 text-gray-700">Remember me</span>
//             </label>
//             <a href="#" className="text-red-500">Forgot password?</a>
//         </div>
//         <div className="mb-4">
//         <button
//             type="submit"
//             className="w-full  bg-red-500 hover:bg-red-800 text-white py-2 rounded"
        
//         >
//             Login
//         </button>
//         </div>
//     </form>
//     <div className=' text-center'>
//     <span className='text-gray-700'>Already have an account ?</span>
//     <button className='text-red-800' onClick={openLogin}>Login</button>
// </div>
// </div>
// );
// }

// export default Register

// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Register = ({openLogin}) => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
  

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     axios.post("http://localhost:3001/register",{name,email,password})
//     .then(result => {console.log(result)
//      openLogin();
//     })
//     .catch(err => console.log(err))
//   }
//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-ternary shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//       <div className="mb-4">
//             <label htmlFor="" className="block text-gray-700 font-medium">Name</label>
//             <input type="text" className="w-full px-3 py-2 border rounded-md " onChange={(e) => setName(e.target.value)}/>
//         </div>
//         <div className="mb-4">
//             <label htmlFor="" className="block text-gray-700 font-medium">Email</label>
//             <input type="email" className="w-full px-3 py-2 border rounded-md " onChange={(e)=> setEmail(e.target.value)}/>
//         </div>
//         <div className="mb-4">
//             <label htmlFor="" className="block text-gray-700 font-medium">Password</label>
//             <input type="password" className="w-full px-3 py-2 border rounded-md " onChange={(e) => setPassword(e.target.value)}/>
//         </div>
//         <div>
//             <button className="w-full bg-fourth text-white font-medium py-2 rounded-md">Sign Up</button>
//         </div>
//       </form>
//       <div className="mt-4 text-center">
//         <span className="text-gray-700">Already have an account?</span>
//         <button className="ml-2 text-blue-600 hover:underline" onClick={openLogin}>Login</button>
//       </div>
//     </div>
//   )
// }

// export default Register

import axios from 'axios';
import React, { useState } from 'react';

const Register = ({ openLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        openLogin(); // Redirect to login page after successful registration
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-blue-500">Forgot password?</a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-gradient-to-r text-white py-2 rounded">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already have an account? </span>
        <button className="text-blue-800" onClick={openLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;

