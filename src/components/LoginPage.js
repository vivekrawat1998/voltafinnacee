import { useState } from "react";
import { volta } from "../components/firebase/Firebase";
const LoginPage = () => {
const [name, setname] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");

   const handleSubmit = (e) =>{
    e.preventDefault();
    volta.collection("contact").add({
      name:name,
      email:email,
      password:password,
    })
   }

  return (
    <div className=''>
      <form className='w-1/2 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
            type='text'
            id='name'
            value={name}
            onChange ={(e) => setname(e.target.value)}
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
            type='email'
            id='email'
            value={email}
            onChange ={(e) => setemail(e.target.value)}
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
            type='password'
            id='password'
            value={password}
            onChange ={(e) => setpassword(e.target.value)}
            placeholder='Enter your password'
          />
        </div>
        <button
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
