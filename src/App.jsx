import { useState } from 'react'
import './App.css'
import ResultBefore from './assets/ResultBefore';

function App() {

  const [formData, setformData] = useState({
    amout : "",
    term : "",
    rate : ""
  });


  const handleChangeData = (e) => {
    
    const {name, value} = e.target;
    setformData((prev) => ({
      ...prev,
      [name] : value
    }))

  }
  

  return (
    <>
      <main className=' w-full h-screen flex justify-center items-center bg-colorslate100'>
        
        {/* This is the container section */}
        <section className='w-[70%] flex '>
            {/* Call the Inputs section */}
            <section className='w-[50%] bg-white py-8 px-6 rounded-l-2xl'>
              
              {/* Container title and text */}
              <div className='flex justify-between items-center'>
                <h1 className='text-xl text-colorslate-700 font-bold'>Mortgage Calculator</h1>
                <p className='text-md underline text-slate-500'>Clear All</p>
              </div>

              {/* Call the forms */}
              <div className='w-full flex py-8'> 
                <form action="" className='w-full flex flex-col gap-6'>

                  <div className='w-full flex flex-col gap-2'>
                      <label className=' text-slate-500 font-bold text-sm' htmlFor="amount">Mortrage Amount</label>
                      <div className='flex relative'>
                        <p className='text-slate-500 font-bold flex justify-center px-3 border border-slate-500 border-r-0 items-center rounded-l-sm bg-slate-100 absolute top-0 left-0 bottom-0'>£</p>
                        <input name='amount' value={formData.amout} onChange={handleChangeData} type="text" className=' outline-none border border-slate-500 rounded-sm py-2 w-full px-12' />
                      </div>
                  </div>

                  <div className='w-full flex gap-6'>

                      <div className='w-1/2 flex flex-col gap-2'>
                        <label className=' text-slate-500 text-sm font-bold' htmlFor="amount">Mortgage Term</label>
                        <div className='flex relative'>
                          <p className='text-slate-500 font-bold flex justify-center px-3 border border-slate-500 border-l-0 items-center rounded-r-sm bg-slate-100 absolute top-0 right-0 bottom-0'>years</p>
                          <input name='term' value={formData.term} onChange={handleChangeData} type="text" className='outline-none border border-slate-500 rounded-sm py-2 w-full px-4' />
                        </div>
                      </div>

                      <div className='w-1/2 flex flex-col gap-2'>
                        <label className=' text-slate-500 text-sm font-bold' htmlFor="amount">Interest Rate</label>
                        <div className='flex relative'>
                          <p className='text-slate-500 font-bold flex justify-center px-3 border border-slate-500 border-l-0 items-center rounded-r-sm bg-slate-100 absolute top-0 right-0 bottom-0'>%</p>
                          <input name='rate' value={formData.rate} onChange={handleChangeData} type="text" className='outline-none border border-slate-500 rounded-sm py-2 w-full px-4' />
                        </div>
                      </div>
                  </div>

                  
                  {/* Repayment interest only */}
                  <div className='w-full flex flex-col gap-2  '>
                    <label className='text-slate-500 font-bold text-sm' htmlFor="typemontage">Mortgage Type</label>

                    <div className='flex w-full border-slate-500 border rounded-sm py-2 px-4 gap-2 text-slate900 font-bold text-sm'>
                      <input type="radio" name='typemontage' className='' />
                      <label htmlFor="typemontage">Repayment</label>
                    </div>
                    <div className='flex w-full border-slate-500 border rounded-sm py-2 px-4 gap-2 text-slate900 font-bold text-sm'>
                      <input type="radio" name='typemontage' className='' />
                      <label htmlFor="typemontage">Interest Only</label>
                    </div>

                  </div>

                  <button className='bg-limeColor flex justify-center items-center gap-3 w-[60%] font-bold rounded-full py-2 text-sm'> <img src="/icon-calculator.svg" alt="" /> Calculate Repayments</button>
                </form>
              </div>  

              

            </section>
            {/* Call the changed section */}
            <section className='w-[50%] bg-slate-900'>
              <ResultBefore />
            </section>
        </section>

      </main>
    </>
  )
}

export default App
