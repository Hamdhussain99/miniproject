import React from 'react'

export const Login = () => {
  return (
    <div class='flex justify-center items-center h-screen bg-indigo-600'>
      <div class='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h1 class="text-3xl block text-center font-semibold">Login</h1>
        <hr class="mt-3" />
        <div class="mt-3">
        <label For="username" class="block text-base mb-2">Username</label>
        <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
        
        </div>
        <div class="mt-3">
        <label For="password" class="block text-base mb-2">Password</label>
        <input type="password" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
        </div>
        
        <div class="mt-3 flex justify-between items-center">
          <div>
          <input type="checkbox" />
          <label>Remember Me</label>
        </div>
        <div>
        </div>
          <a href="#" class="text-indigo-800 font-semibold">Forget Password?</a>
        </div>
        <div class="mt-5">
          <button type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Login</button>
        </div>
    </div>

    </div>

   

  )
}
export default Login;
