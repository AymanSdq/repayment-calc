import { useState } from 'react'
import './App.css'
import ResultBefore from './assets/ResultBefore';

function App() {


  // Calling all the inputs in the form
  const [formData, setformData] = useState({
    amount : "",
    term : "",
    rate : "",
  });


  // Which radio button to choose
  const [checkTheRadio , setCheckTheRadio ] = useState("");

  // Calling the formRadio
  const [formRadio, setFormRadio ] = useState("");

  const handleRadio = (e) => {
    
    const callValue = e.target.value;

    setFormRadio(callValue);

    console.log(formRadio)

  }


  const resetForm = () => {
    setformData({
      amount : "",
      term : "",
      rate : "",
    })
  }

  
  const handleChangeData = (e) => {
    
    const {name, value} = e.target;
    setformData((prev) => ({
      ...prev,
      [name] : value
    }))

  }
  

  return (
    <>
      <main className=' w-full h-screen flex justify-center items-center bg-slate100'>
        
        {/* This is the container section */}
        <section className='w-[70%] flex bg-white rounded-xl'>
            {/* Call the Inputs section */}
            <section className='w-[50%] bg-white py-8 px-6 rounded-l-2xl'>
              
              {/* Container title and text */}
              <div className='flex justify-between items-center'>
                <h1 className='text-xl text-slate700 font-bold'>Mortgage Calculator</h1>
                <button onClick={resetForm} className='text-md underline text-slate500'>Clear All</button>
              </div>

              {/* Call the forms */}
              <div className='w-full flex py-8'> 
                <form action="" className='w-full flex flex-col gap-6'>

                  <div className='w-full flex flex-col gap-2'>
                      <label className=' text-slate500 font-bold text-sm' htmlFor="amount">Mortrage Amount</label>
                      <div className='flex relative'>
                        <p className='text-slate500 font-bold flex justify-center px-3 border border-slate500 border-r-0 items-center rounded-l-sm bg-slate100 absolute top-0 left-0 bottom-0'>£</p>
                        <input name='amount' value={formData.amount} onChange={handleChangeData} type="text" className=' outline-none border border-slate500 rounded-sm py-2 w-full px-12' />
                      </div>
                  </div>

                  <div className='w-full flex gap-6'>

                      <div className='w-1/2 flex flex-col gap-2'>
                        <label className=' text-slate500 text-sm font-bold' htmlFor="amount">Mortgage Term</label>
                        <div className='flex relative'>
                          <p className='text-slate500 font-bold flex justify-center px-3 border border-slate500 border-l-0 items-center rounded-r-sm bg-slate100 absolute top-0 right-0 bottom-0'>years</p>
                          <input name='term' value={formData.term} onChange={handleChangeData} type="text" className='outline-none border border-slate500 rounded-sm py-2 w-full px-4' />
                        </div>
                      </div>

                      <div className='w-1/2 flex flex-col gap-2'>
                        <label className=' text-slate500 text-sm font-bold' htmlFor="amount">Interest Rate</label>
                        <div className='flex relative'>
                          <p className='text-slate500 font-bold flex justify-center px-3 border border-slate500 border-l-0 items-center rounded-r-sm bg-slate100 absolute top-0 right-0 bottom-0'>%</p>
                          <input name='rate' value={formData.rate} onChange={handleChangeData} type="text" className='outline-none border border-slate500 rounded-sm py-2 w-full px-4' />
                        </div>
                      </div>
                  </div>

                  
                  {/* Repayment interest only */}
                  <div className='w-full flex flex-col gap-2  '>
                    <label className='text-slate500 font-bold text-sm' htmlFor="typemontage">Mortgage Type</label>

                    <div onClick={() => {setCheckTheRadio("typemontage")}} className='flex w-full border-slate500 border rounded-sm py-2 px-4 gap-2 text-slate900 font-bold text-sm '>
                      <input type="radio" name='typemontage' value="repayment" checked={checkTheRadio == "typemontage"} />
                      <label htmlFor="typemontage">Repayment</label>
                    </div>

                    <div onClick={() => {setCheckTheRadio("interesst")}} className='flex w-full border-slate500 border rounded-sm py-2 px-4 gap-2 text-slate900 font-bold text-sm'>
                      <input onClick={handleRadio} type="radio" name='typemontage' value="interesst" checked={checkTheRadio == "interesst"} />
                      <label htmlFor="typemontage">Interest Only</label>
                    </div>

                  </div>

                  <button className='bg-limeColor flex justify-center items-center gap-3 w-[60%] font-bold rounded-full py-2 text-sm'> <img src="/icon-calculator.svg" alt="" /> Calculate Repayments</button>
                </form>
              </div>  

              

            </section>
            {/* Call the changed section */}
            <section className='w-1/2'>
              <ResultBefore />
            </section>
        </section>

      </main>
    </>
  )
}

export default App
