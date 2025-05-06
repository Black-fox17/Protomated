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
import image1 from '/data/image1.png'
import image2 from '/data/image2.png'
import image3 from '/data/image3.png'
import image4 from '/data/image4.png'

import image_1 from '/why/image1.png'
import image_2 from '/why/image2.png'
import image_3 from '/why/image3.png'
import image_4 from '/why/image4.png'

import feature1 from '/topic/image1.png'

import ellipse1 from '/topic/group/Ellipse 24.png'
import ellipse2 from '/topic/group/Ellipse 25.png'
import ellipse3 from '/topic/group/Ellipse 26.png'

import how1 from '/how/card.png'
import how2 from '/how/card2.png'
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
              className="placeholder:text-gray-400 placeholder:text-lg pl-4 hover:border-none focus:border-none w-[375px]"
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

      <div className='flex flex-col space-y-4'>
        <div className='w-full h-[65px] flex flex-col items-center text-center mt-20 '>
          <h1 className="font-DMSans font-bold text-[48px] leading-[65px] tracking-[-0.5px] text-center text-[#0F173E]">Overview of Services</h1>
          <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] opacity-70 text[#64647B]'>Discover automation opportunities unique to your business, receive a custom roadmap for implementation.</p>
        </div>

        <div className='mt-20 flex flex-wrap gap-20 ml-[1px] justify-center'>
          <div className='flex shadow-md inset-shadow-[#FAFAFA] rounded-lg  bg-white w-[520px] h-[292px] '>
            <div className='w-[300px] h-[387px] space-y-4 ml-5 mt-8'>
              <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Industry-Leading Expertise</h1>
              <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B]'>Streamline your operations and boost productivity.</p>
              <button className="w-[160px] h-[46px] gap-[10px] rounded-[8px] pt-[10px] pr-[32px] pb-[14px] pl-[32px] bg-black text-white">Learn More...</button>
            </div>
            <div>
              <img src = {image1}/>
            </div>
          </div>

          <div className='flex shadow-md inset-shadow-[#FAFAFA] rounded-lg  bg-white w-[520px] h-[292px] '>
            <div className='w-[300px] h-[387px] space-y-4 ml-5 mt-8'>
              <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Intelligent Data Processing</h1>
              <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B]'>Transform raw data into actionable insights.</p>
              <button className="w-[160px] h-[46px] gap-[10px] rounded-[8px] pt-[10px] pr-[32px] pb-[14px] pl-[32px] bg-black text-white">Learn More...</button>
            </div>
            <div>
              <img src = {image2}/>
            </div>
          </div>

          <div className='flex shadow-md inset-shadow-[#FAFAFA] rounded-lg  bg-white w-[520px] h-[292px] '>
            <div className='w-[300px] h-[387px] space-y-4 ml-5 mt-8'>
              <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Productivity & Analytics</h1>
              <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B]'>Optimize performance and make data-driven decisions.ccc</p>
              <button className="w-[160px] h-[46px] gap-[10px] rounded-[8px] pt-[10px] pr-[32px] pb-[14px] pl-[32px] bg-black text-white">Learn More...</button>
            </div>
            <div>
              <img src = {image3}/>
            </div>
          </div>

          <div className='flex shadow-md inset-shadow-[#FAFAFA] rounded-lg  bg-white w-[520px] h-[292px] '>
            <div className='w-[300px] h-[387px] space-y-4 ml-5 mt-8'>
              <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>AI-Powered Solutions</h1>
              <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B]'>Leverage cutting-edge technology for smarter business.</p>
              <button className="w-[160px] h-[46px] gap-[10px] rounded-[8px] pt-[10px] pr-[32px] pb-[14px] pl-[32px] bg-black text-white">Learn More... </button>
            </div>
            <div>
              <img src = {image4}/>
            </div>
          </div>
        </div>
        
      </div>

      <div className='flex flex-col space-y-4 mt-20'>
        <div>
          <h1 className="font-sora font-medium text-[24px] leading-[100%] tracking-[0%] uppercase text-center text-[#666666] ">Why Choose Protomated?</h1>
        </div>

        <div className='mt-10 flex flex-wrap gap-20 ml-10'>
          <div className='w-[323px] h-[282px]'>
            <div className='w-[128px] h-[128px]'>
              <img src = {image_1} />
            </div>
            <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Industry-Leading Expertise</h1>
            <p className='font-sora font-normal text-[18px] text-[#64647B]'>We bring best practices from various industries to your doorstep</p>
          </div>

          <div className='w-[323px] h-[282px]'>
            <div className='w-[128px] h-[128px]'>
              <img src = {image_2} />
            </div>
            <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Customized Solutions</h1>
            <p className='font-sora font-normal text-[18px] text-[#64647B]'>Tailored automation that fits your unique business needs</p>
          </div>

          <div className='w-[323px] h-[282px]'>
            <div className='w-[128px] h-[128px]'>
              <img src = {image_3} />
            </div>
            <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Maximized ROI</h1>
            <p className='font-sora font-normal text-[18px] text-[#64647B]'>Cost-effective solutions that deliver rapid returns</p>
          </div>

          <div className='w-[323px] h-[282px]'>
            <div className='w-[128px] h-[128px]'>
              <img src = {image_3} />
            </div>
            <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Maximized ROI</h1>
            <p className='font-sora font-normal text-[18px] text-[#64647B]'>Cost-effective solutions that deliver rapid returns</p>
          </div>

          <div className='w-[323px] h-[282px]'>
            <div className='w-[128px] h-[128px]'>
              <img src = {image_4} />
            </div>
            <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Quick Implementation</h1>
            <p className='font-sora font-normal text-[18px] text-[#64647B]'>We bring best practices from various industries to your doorstepCost-effective solutions that deliver rapid returns</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col space-y-4 mt-20 w-[1100px] mx-auto'>
        
        <div className='flex ml-5 justify-center gap-10 shadow-md inset-shadow-[#FAFAFA] rounded-lg w-[1100px] h-[289px]'>
          <div className='w-[608px] h-[195px] '>
            <h1 className='font-DMSans font-bold text-[48px] text-[#0F173E] '>Over 50,000 people have gotten that automated solution.</h1>
          </div>
          <div className='flex ml-[-30px] space-x-[-10px]'>
            <img src = {ellipse1} className='w-[48px] h-[48px]'/>
            <img src = {ellipse2} className='w-[48px] h-[48px]' />
            <img src = {ellipse3} className='w-[48px] h-[48px]'/>
          </div>
          <img src = {feature1} />
        </div>

        <div className='flex mt-10 space-x-8 '>
          <div className='w-[386px] h-[392px] flex flex-col  shadow-md rounded-lg item'>
            <div className='mt-6 space-y-4'>
              <div className='w-[118px] h-[20px] bg-[#DEFFDE] rounded-md ml-2'>
                <h1 className='text-center text-[#115B25] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Automation</h1>
              </div>
              <div className='w-[326px] h-[182px] ml-2'>
                <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Law Firm Efficiency Boost</h1>
                <p className="font-sora font-normal text-[18px] leading-[36px] tracking-[-0.5px] text-[#64647B]">Overwhelmed by document management and billing processes Automated document categorization and time-tracking integration.</p>
              </div>
              <div className='flex justify-between mt-7'>
                <div className='ml-2 w-[129px] h-[57px] my-10 space-y-3 '>
                  <h1 className='font-sora font-normal text-[14px] text-[#666666]'>Progress</h1>
                  <div className='bg-[#DEFFDE] w-[129px] rounded-md'>
                    <div className='bg-[#115B25] w-[104px] h-[25px] rounded-md'>
                      <p className='text-white ml-3  font-sora font-normal text-[14px]'>75%</p>
                    </div>
                  </div>
                </div>

                <div className='mt-20 mr-5'>
                  <p className='text-[16px] font-sora font-normal text-[#115B25]'>Read More...</p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[386px] h-[392px] flex flex-col  shadow-md rounded-lg item'>
            <div className='mt-6 space-y-4'>
              <div className='w-[118px] h-[20px] bg-[#DEECFF] rounded-md ml-2'>
                <h1 className='text-center text-[#112E5B] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Accuracy</h1>
              </div>
              <div className='w-[326px] h-[182px] ml-2'>
                <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Streamlined Accounting...</h1>
                <p className="font-sora font-normal text-[18px] leading-[36px] tracking-[-0.5px] text-[#64647B]">Manual data entry causing errors and delays Intelligent OCR for receipt processing and automated bookkeeping.</p>
              </div>
              <div className='flex justify-between mt-7'>
                <div className='ml-2 w-[129px] h-[57px] my-10 space-y-3'>
                  <h1 className='font-sora font-normal text-[14px] text-[#666666]'>Speed</h1>
                  <div className='bg-[#DEECFF] w-[129px] rounded-md'>
                    <div className='bg-[#112E5B] w-[67px] h-[25px] rounded-md'>
                      <p className='text-white ml-3  font-sora font-normal text-[14px]'>45%</p>
                    </div>
                  </div>
                </div>

                <div className='mt-20 mr-5'>
                  <p className='text-[16px] font-sora font-normal text-[#112E5B]'>Read More...</p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[386px] h-[392px] flex flex-col  shadow-md rounded-lg item'>
            <div className='mt-6 space-y-4'>
              <div className='w-[118px] h-[20px] bg-[#FFF5E5] rounded-md ml-2'>
                <h1 className='text-center text-[#E3941C] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Efficiency</h1>
              </div>
              <div className='w-[326px] h-[182px] ml-2'>
                <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>HR Consultancy Transfor...</h1>
                <p className="font-sora font-normal text-[18px] leading-[36px] tracking-[-0.5px] text-[#64647B]">Time-consuming applicant tracking and onboarding Automated applicant screening and digital onboarding workflow.</p>
              </div>
              <div className='flex justify-between mt-7'>
                <div className='ml-2 w-[140px] h-[57px] my-10 space-y-3'>
                  <h1 className='font-sora font-normal text-[14px] text-[#666666]'>Time Lapse Reduction</h1>
                  <div className='bg-[#FFF5E5] w-[129px] rounded-md'>
                    <div className='bg-[#E3941C] w-[69px] h-[25px] rounded-md'>
                      <p className='text-[#000000] ml-3  font-sora font-normal text-[14px]'>50%</p>
                    </div>
                  </div>
                </div>

                <div className='mt-20 mr-5'>
                  <p className='text-[16px] font-sora font-normal text-[#E3941C]'>Read More...</p>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>

      <div className='flex flex-col mt-20 w-[1050px] mx-auto'>
            <div>
              <h1 className='font-DMSans font-bold text-[48px] text-[#0F173E] text-center'>How it works</h1>
            </div>

            <div>
              <div className='flex justify-between mt-10'>
                <div className='w-[377.4302062988281px] h-[197.1650390625px]'>
                  <img src = {how1} />
                </div>
                <div className='mt-20 relative'>
                  <p className="font-inter p-3 font-medium text-[20px] leading-[100%] tracking-[-1%] capitalize text-center rounded-4xl bg-[#F8F8F8] text-black">01</p>
                  <div className="absolute left-1/2 w-[2px] h-[210px] bg-[#3E4047] transform -translate-x-1/2"></div>
                </div>
                <div className='w-[450px] h-[215px] space-y-3'>
                  <h1 className="font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]">Custom Roadmap</h1>
                  <p className="font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B]">We design a tailored automation plan that aligns with your business goals. This personalized roadmap identifies key areas for improvement and integrates the most effective automation strategies to streamline your operations.</p>
                </div>
              </div>

              <div className='flex justify-between mt-10'>
                  <div className='w-[377.4302062988281px] h-[197.1650390625px] space-y-3'>
                    <h1 className="font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]">Swift Implementation</h1>
                    <p className="font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B]">We set up and integrate automation solutions, ensuring a seamless transition with minimal disruption to your operations. Our expert team handles the technical details, allowing you to quickly benefit from enhanced productivity and streamlined workflows.</p>
                  </div>
                  <div className='mt-20 relative'>
                    <p className="font-inter p-3 font-medium text-[20px] leading-[100%] tracking-[-1%] capitalize text-center rounded-4xl bg-[#F8F8F8] text-black">02</p>
                    <div className="absolute left-1/2 w-[2px] h-[250px] bg-[#3E4047] transform -translate-x-1/2"></div>
                  </div>
                <div className='w-[450px] h-[215px] '>
                  <img src = {how1} />
                </div>
              </div>

              <div className='flex justify-between mt-20'>
                <div className='w-[377.4302062988281px] h-[197.1650390625px]'>
                  <img src = {how2} />
                </div>
                <div className='mt-20 '>
                  <p className="font-inter p-3 font-medium text-[20px] leading-[100%] tracking-[-1%] capitalize text-center rounded-4xl bg-[#F8F8F8] text-black">03</p>
                </div>
                <div className='w-[450px] h-[215px] space-y-3'>
                  <h1 className="font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]">Ongoing Support</h1>
                  <p className="font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B]">We provide continuous assistance to ensure your automation solutions run smoothly and efficiently. This ongoing support guarantees that your operations remain optimized and adaptable to changing business needs, allowing you to focus on growth."</p>
                </div>
              </div>
            </div>
      </div>

      <div className='mt-10'>
        <div>
          <h1 className='font-DMSans font-bold text-[48px] text-[#0F173E] text-center'>Latest Blog Posts</h1>
        </div>
        <div className='flex mt-10 w-[1100px] mx-auto space-x-4'>
          <div className='flex flex-col w-[403px] h-[290px] shadow-2xl space-y-6 rounded-2xl'>
            <div className='ml-4  mt-2'>
              <div className='mt-2 w-[355px]'>
                <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>First Blog Post</h1>
                <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B] mt-4'>Overwhelmed by document management and billing processes document categorization and time-tracking integration...</p>
              </div>
              <div className='flex justify-between mt-20'>
                <div>
                  <h1 className='font-sora font-medium text-[10px] leading-[100%] text-[#0F173E]'>October 19, 2019</h1>
                </div>
                <p className='font-sora font-normal text-[16px] leading-[100%] text-[#0F173E] mr-2'>Read More ...</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[403px] h-[290px] shadow-2xl space-y-6 rounded-2xl'>
            <div className='ml-4  mt-2'>
              <div className='mt-2 w-[355px]'>
                <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Law Firm Efficiency Boost</h1>
                <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B] mt-4'>Overwhelmed by document management and billing processes document categorization and time-tracking integration...</p>
              </div>
              <div className='flex justify-between mt-20'>
                <div>
                  <h1 className='font-sora font-medium text-[10px] leading-[100%] text-[#0F173E]'>October 19, 2019</h1>
                </div>
                <p className='font-sora font-normal text-[16px] leading-[100%] text-[#0F173E] mr-2'>Read More ...</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[403px] h-[290px] shadow-2xl space-y-6 rounded-2xl'>
            <div className='ml-4  mt-2'>
              <div className='mt-2 w-[355px]'>
                <h1 className='font-sora font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Law Firm Efficiency Boost</h1>
                <p className='font-sora font-normal text-[18px] leading-[2] tracking-[-0.5px] text-[#64647B] mt-4'>Overwhelmed by document management and billing processes document categorization and time-tracking integration...</p>
              </div>
              <div className='flex justify-between mt-20'>
                <div>
                  <h1 className='font-sora font-medium text-[10px] leading-[100%] text-[#0F173E]'>October 19, 2019</h1>
                </div>
                <p className='font-sora font-normal text-[16px] leading-[100%] text-[#0F173E] mr-2'>Read More ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default App
