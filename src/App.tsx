import { useState } from 'react'
import './App.css'
import logo from '/logo.png'
import frame from '/Frame 5.png'
import office from '/S6_Data Analytics 1.png'
// Remove invalid import since techstack module doesn't exist
import logo1 from '/techstack/flutter.png'
import logo2 from '/techstack/noco.png'
import logo3 from '/techstack/budi.png'
import logo4 from '/techstack/robo.png'
import logo5 from '/techstack/n8n.png'
import logo6 from '/techstack/webStudio.png'

function App() {
  return (
    <div className="justify-center items-center w-[1200px] mx-auto ">
      <div className="flex justify-between items-center  p-4">
        <img src={logo} alt="logo" className="w-[174.64px] h-[40px]" />
        <nav className="left-[501px] absolute top-[26px]">
          <ul className="flex gap-10 items-center h-full">
            <li className="font-sora text-[16px] leading-[100%] font-normal tracking-[0%] opacity-50">Home</li>
            <li className="font-sora text-[16px] leading-[100%] font-normal tracking-[0%] opacity-50">About Us</li>
            <li className="font-sora text-[16px] leading-[100%] font-normal tracking-[0%] opacity-50">Services</li>
            <li className="font-sora text-[16px] leading-[100%] font-normal tracking-[0%] opacity-50">Case Studies</li>
          </ul>
        </nav>
        <img src={frame} alt="frame" className="w-[70.27px] h-[28px] " />
      </div>

      <div className="flex justify-between items-center mt-10 mx-5">
        <div className="w-[620px] h-[228px] mt-[-200px]">
          <h1 className="font-DMSans font-bold text-[56px] leading-[76px] tracking-[-0.5px] text-[#0F173E]">Streamline Your  Business with Custom Automated Solutions</h1>
          <div className="flex gap-2 w-[470px] h-[80px]">
            <p className="font-sora font-normal text-[18px] tracking-[-0.5px] text-[#64647B] ">Helping solopreneurs and small businesses save time and boost efficiency</p>
          </div>
          <div className="flex justify-between border-[1px] rounded-sm border-[#E3E3E3] w-[605px] h-[67px]">
            <input 
              type="text" 
              className="placeholder:text-gray-400 placeholder:text-lg pl-4 hover:border-none focus:border-none"
              placeholder="I Want to Automate....."
            />
            <button className='bg-black text-white w-[232px] rounded-[6px] '>Book Free Assessment</button>
          </div>
        </div>
        <div className='w-[782.03px] h-[480px]'>
          <img src = {office} />
        </div>
      </div> 

      <div className="w-full h-[32px] overflow-hidden">
        <div className="flex gap-35 animate-scroll">
          <img src={logo1} alt="tech logo" className="w-[144px] h-[32px] " />
          <img src={logo2} alt="tech logo" className="w-[144px] h-[32px] " />
          <img src={logo3} alt="tech logo" className="w-[144px] h-[32px] " />
          <img src={logo4} alt="tech logo" className="w-[144px] h-[32px] " />
          <img src={logo5} alt="tech logo" className="w-[144px] h-[32px] " />
          <img src={logo6} alt="tech logo" className="w-[144px] h-[32px] " />
        </div>
      </div>

      <div>
        <div className='w-[977px] h-[]'>
          <h1>Overview of Services</h1>
        </div>
        
      </div>

  </div>
  )
}

export default App
