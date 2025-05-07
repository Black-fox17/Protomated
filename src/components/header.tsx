import {generalAssets} from '../../types/utils.ts';
export function Header(){
    const {logo,frame,...otherAssets} = generalAssets;
    return(
        <>
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
        </>
    )
}