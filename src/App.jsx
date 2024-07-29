import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <main className=' w-full h-screen flex justify-center items-center bg-slate100'>
        
        {/* This is the container section */}
        <section className='w-[70%] flex '>
            {/* Call the Inputs section */}
            <section className='w-[50%] bg-white py-8 px-6'>
              {/* Container title and text */}
              <div className='flex justify-between items-center'>
                <h1 className='text-xl text-slate-700 font-bold'>Mortgage Calculator</h1>
                <p className='text-md underline text-slate-500'>Clear All</p>
              </div>
              {/* Call the forms */}
              <div className='w-full flex py-8'> 
                <form action="" className='w-full'>
                  <div className='w-full flex flex-col gap-2'>
                      <label className=' text-slate-500 text-sm' htmlFor="amount">Mortgage Amount</label>
                      <div className='flex relative'>
                        <p className='text-slate-500 flex justify-center px-2 items-center bg-slate-100 absolute top-1 left-1 bottom-1'>£</p>
                        <input name='amount' type="text" className='border border-slate-500 rounded-sm py-1 w-full px-2' />
                      </div>
                  </div>
                </form>
              </div>  
            </section>
            {/* Call the changed section */}
        </section>

      </main>
    </>
  )
}

export default App
