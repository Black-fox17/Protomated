import {socialIcons} from '../../types/utils.ts';
import {Link} from 'react-router-dom'

export function Footer(){
    const {facebookIcon,twitterIcon,linkedinIcon,instagramIcon,logo} = socialIcons;
    return(
        <>
            <footer className='bg-[#F9FAFF] mt-20'>
                <div className='flex justify-between h-[395px] w-[1100px] mx-auto'>
                    <div className='flex flex-col w-[249px] mt-10 gap-3'>
                    <img src={logo} alt="logo" className="w-[174.64px] h-[40px]" />
                    <h1 className='font-sora font-normal text-[16px] text-[#64647B]'>Automated Business Solutions</h1>
                    </div>
                    <div className='w-[241px] flex flex-col mt-10 gap-3'>
                    <h1 className='font-sora font-semibold text-[18px]'>Services</h1>
                    <p className='font-sora font-normal text-[16px] text-[#64647B] leading-[36px]'>Business Process Automation Intelligent Data Processing Productivity & Analytics AI-Powered Solutions</p>
                    </div>
                    <div className='w-[90px] flex flex-col mt-10 gap-3'>
                    <h1 className='font-sora font-semibold text-[18px] '>Company</h1>
                    <p className='font-sora font-normal text-[16px] leading-[36px] text-[#64647B]'>
                        <Link to= '/about'>
                            About Us
                        </Link>
                    </p>
                    <p className='font-sora font-normal text-[16px] leading-[36px] text-[#64647B] mt-[-16px]'>
                        <Link to= '/contact'>
                            Contact
                        </Link>
                    </p>
                    </div>
                    <div className='flex flex-col w-[191px] mt-10 gap-3'>
                    <h1 className='font-sora font-semibold text-[18px]'>Social</h1>
                    <div className='flex justify-between'>
                        <img src = {facebookIcon}/>
                        <img src = {linkedinIcon} />
                        <img src = {twitterIcon} />
                        <img src = {instagramIcon} />
                    </div>
                    </div>
                </div>
                <h1 className='font-sora font-normal text-[18px] text-[#64647B] mt-auto text-center mb-2'>Copyright 2024 - Protomated. All rights reserved.</h1>
            </footer>
        </>
    )
}