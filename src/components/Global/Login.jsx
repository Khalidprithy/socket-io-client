const Login = () => {
   return (
      <div className='h-screen w-screen flex items-center bg-gradient-to-r from-gray-500 via-green-700 to-gray-500'>
         <div className='w-[500px] mx-auto shadow-xl p-5 rounded-lg bg-gray-200'>
            <p className='border border-green-500 rounded-full w-fit p-1'></p>
            <h4 className='text-2xl mb-4 text-center font-bold text-gray-700'>
               Login
            </h4>
            <form>
               <div className='form-control w-full relative'>
                  <input
                     type='number'
                     name='phone'
                     id='phone'
                     placeholder='Phone number'
                     className='input input-bordered w-full pl-14 text-[18px] mb-4'
                     minLength='8'
                     maxLength='16'
                     required
                  />
                  <div className='text-2xl absolute top-2 left-2 cursor-pointer'>
                     <h4 className='text-[18px] text-gray-500'>+880</h4>
                  </div>
               </div>

               <div className='form-control w-full relative'>
                  <input
                     name='password'
                     id='password'
                     placeholder='Password'
                     className='input input-bordered w-full mb-4'
                     required
                  />
               </div>
               <button type='submit' className='btn btn-outline w-full'>
                  Login
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
