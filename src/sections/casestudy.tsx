import { Footer } from "../home/footer";
import { Header } from "../home/header";
import { Link } from "react-router-dom";
import {casestudy} from "../../types/utils"

export function CaseStudy() {
    const {briefcase,image1,image2,image3,image4,image5} = casestudy;
    return (
        <>
        <div className="section-style">
            <Header/>
            <div className="ml-15">
                <div className="flex items-center mt-20">
                    <p className="uppercase font-semibold text-[14px]">
                        <Link to = '/'>Home</Link>
                    </p>
                    <span className="ml-1 text-[14px] font-semibold">{'>'}</span>
                    <p className=" ml-2 uppercase font-semibold text-[14px]">Case StudIES</p>
                    <span className="ml-1 text-[14px] font-semibold">{'>'}</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="w-[600px] space-y-3">
                        <h1 className="font-DMSans font-bold text-[42px] leading-[76px] tracking-[-0.5px] text-[#0F173E]">Case Studies</h1>
                        <p className="card-text">Our case studies provide a glimpse into how we have successfully partnered with clients to revolutionize their operations through automation. </p>
                        <button className='bg-black text-white w-[150px] h-[50px] rounded-[6px] '>Contact Us</button>
                    </div>
                    <div className="w-[500px] h-[400px]">
                        <img src = {briefcase} />
                    </div>
                </div>

                <div className="flex gap-2">
                    <p className="bg-[#FFE6C1] w-[70px] h-[43px] flex justify-center items-center rounded-md card-text">All</p>
                    <p className="bg-[#F7F7F7] w-[149px] h-[43px] flex justify-center items-center rounded-md card-text">Automation</p>
                    <p className="bg-[#F7F7F7] w-[149px] h-[43px] flex justify-center items-center rounded-md card-text">Accuracy</p>
                    <p className="bg-[#F7F7F7] w-[149px] h-[43px] flex justify-center items-center rounded-md card-text">Efficiency</p>
                </div>

                <div className="mt-20 flex flex-wrap space-x-5 space-y-10">
                  <div className='w-[360px] h-[609px] bg-white rounded-lg item flex flex-col items-center space-x-3'>
                    <div className='mt-6 space-y-5'>
                        <div className="w-[330px] h-[295px]">
                            <img src = {image1} />
                        </div>
                        <div className='w-[118px] h-[20px] bg-[#DEFFDE] rounded-md ml-2 mt-5'>
                        <h1 className='text-center text-[#115B25] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Automation</h1>
                        </div>
                        <div className='w-[326px] ml-2'>
                        <h1 className='font-sora card-title'>Law Firm Efficiency Boost</h1>
                        <p className="font-sora text-[14px] font-normal text-[#64647B] leading-[28px]">Overwhelmed by document management and billing processes Automated document categorization and time-tracking integration</p>
                        </div>
                        <div className='flex justify-between'>
                        <div className='ml-2 w-[129px] h-[57px] space-y-3 '>
                            <h1 className='font-sora card-progress-label'>Progress</h1>
                            <div className='bg-[#DEFFDE] w-[129px] rounded-md'>
                            <div className='bg-[#115B25] w-[104px] h-[25px] rounded-md'>
                                <p className='text-white ml-3  font-sora font-normal text-[14px]'>75%</p>
                            </div>
                            </div>
                        </div>

                        <div className='mr-5 mt-8'>
                            <p className='text-[16px] font-sora font-normal text-[#115B25]'>Read More...</p>
                        </div>
                        </div>
                    </div>
                  </div>

                  <div className='w-[360px] h-[609px] bg-white rounded-lg item flex flex-col items-center space-x-3'>
                    <div className='mt-6 space-y-5'>
                        <div className="w-[330px] h-[295px]">
                            <img src = {image2} />
                        </div>
                        <div className='w-[118px] h-[20px] bg-[#DEFFDE] rounded-md ml-2 mt-5'>
                        <h1 className='text-center text-[#115B25] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Automation</h1>
                        </div>
                        <div className='w-[326px] ml-2'>
                        <h1 className='font-sora card-title'>Law Firm Efficiency Boost</h1>
                        <p className="font-sora text-[14px] font-normal text-[#64647B] leading-[28px]">Overwhelmed by document management and billing processes Automated document categorization and time-tracking integration</p>
                        </div>
                        <div className='flex justify-between'>
                        <div className='ml-2 w-[129px] h-[57px] space-y-3 '>
                            <h1 className='font-sora card-progress-label'>Progress</h1>
                            <div className='bg-[#DEFFDE] w-[129px] rounded-md'>
                            <div className='bg-[#115B25] w-[104px] h-[25px] rounded-md'>
                                <p className='text-white ml-3  font-sora font-normal text-[14px]'>75%</p>
                            </div>
                            </div>
                        </div>

                        <div className='mr-5 mt-8'>
                            <p className='text-[16px] font-sora font-normal text-[#115B25]'>Read More...</p>
                        </div>
                        </div>
                    </div>
                  </div>

                  <div className='w-[360px] h-[609px] bg-white rounded-lg item flex flex-col items-center space-x-3'>
                    <div className='mt-6 space-y-5'>
                        <div className="w-[330px] h-[295px]">
                            <img src = {image3} />
                        </div>
                        <div className='w-[118px] h-[20px] bg-[#DEFFDE] rounded-md ml-2 mt-5'>
                        <h1 className='text-center text-[#115B25] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Automation</h1>
                        </div>
                        <div className='w-[326px] ml-2'>
                        <h1 className='font-sora card-title'>Law Firm Efficiency Boost</h1>
                        <p className="font-sora text-[14px] font-normal text-[#64647B] leading-[28px]">Overwhelmed by document management and billing processes Automated document categorization and time-tracking integration</p>
                        </div>
                        <div className='flex justify-between'>
                        <div className='ml-2 w-[129px] h-[57px] space-y-3 '>
                            <h1 className='font-sora card-progress-label'>Progress</h1>
                            <div className='bg-[#DEFFDE] w-[129px] rounded-md'>
                            <div className='bg-[#115B25] w-[104px] h-[25px] rounded-md'>
                                <p className='text-white ml-3  font-sora font-normal text-[14px]'>75%</p>
                            </div>
                            </div>
                        </div>

                        <div className='mr-5 mt-8'>
                            <p className='text-[16px] font-sora font-normal text-[#115B25]'>Read More...</p>
                        </div>
                        </div>
                    </div>
                  </div>

                  <div className='w-[360px] h-[609px] bg-white rounded-lg item flex flex-col items-center space-x-3'>
                    <div className='mt-6 space-y-5'>
                        <div className="w-[330px] h-[295px]">
                            <img src = {image4} />
                        </div>
                        <div className='w-[118px] h-[20px] bg-[#DEFFDE] rounded-md ml-2 mt-5'>
                        <h1 className='text-center text-[#115B25] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Automation</h1>
                        </div>
                        <div className='w-[326px] ml-2'>
                        <h1 className='font-sora card-title'>Law Firm Efficiency Boost</h1>
                        <p className="font-sora text-[14px] font-normal text-[#64647B] leading-[28px]">Overwhelmed by document management and billing processes Automated document categorization and time-tracking integration</p>
                        </div>
                        <div className='flex justify-between'>
                        <div className='ml-2 w-[129px] h-[57px] space-y-3 '>
                            <h1 className='font-sora card-progress-label'>Progress</h1>
                            <div className='bg-[#DEFFDE] w-[129px] rounded-md'>
                            <div className='bg-[#115B25] w-[104px] h-[25px] rounded-md'>
                                <p className='text-white ml-3  font-sora font-normal text-[14px]'>75%</p>
                            </div>
                            </div>
                        </div>

                        <div className='mr-5 mt-8'>
                            <p className='text-[16px] font-sora font-normal text-[#115B25]'>Read More...</p>
                        </div>
                        </div>
                    </div>
                  </div>

                  <div className='w-[360px] h-[609px] bg-white rounded-lg item flex flex-col items-center space-x-3'>
                    <div className='mt-6 space-y-5'>
                        <div className="w-[330px] h-[295px]">
                            <img src = {image5} />
                        </div>
                        <div className='w-[118px] h-[20px] bg-[#DEFFDE] rounded-md ml-2 mt-5'>
                        <h1 className='text-center text-[#115B25] font-sora font-medium text-[16px] leading-[100%] tracking-[0%]'>Automation</h1>
                        </div>
                        <div className='w-[326px] ml-2'>
                        <h1 className='font-sora card-title'>Law Firm Efficiency Boost</h1>
                        <p className="font-sora text-[14px] font-normal text-[#64647B] leading-[28px]">Overwhelmed by document management and billing processes Automated document categorization and time-tracking integration</p>
                        </div>
                        <div className='flex justify-between'>
                        <div className='ml-2 w-[129px] h-[57px] space-y-3 '>
                            <h1 className='font-sora card-progress-label'>Progress</h1>
                            <div className='bg-[#DEFFDE] w-[129px] rounded-md'>
                            <div className='bg-[#115B25] w-[104px] h-[25px] rounded-md'>
                                <p className='text-white ml-3  font-sora font-normal text-[14px]'>75%</p>
                            </div>
                            </div>
                        </div>

                        <div className='mr-5 mt-8'>
                            <p className='text-[16px] font-sora font-normal text-[#115B25]'>Read More...</p>
                        </div>
                        </div>
                    </div>
                  </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}