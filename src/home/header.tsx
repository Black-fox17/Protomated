import {generalAssets} from '../../types/utils.ts';
import { Link } from 'react-router-dom';
export function Header(){
    const {logo,frame} = generalAssets;
    return(
        <>
         <div className="fixed left-10 right-10 top-0 flex justify-between items-center  p-4">
          <img src={logo} alt="logo" className="w-[174.64px] h-[40px]" />
          <nav className="left-[420px] flex justify-center absolute top-[26px] backdrop-blur-md w-[510px] h-[48px]">
            <ul className="flex gap-10 items-center h-full">
              <li className="header-list">
                <Link
                to = '/'>
                Home
                </Link>
                </li>
              <li className="header-list">
                <Link 
                to = '/about'
                >About Us</Link>
              </li>
              <li className="header-list">Services</li>
              <li className="header-list">Case Studies</li>
            </ul>
          </nav>
          <img src={frame} alt="frame" className="w-[70.27px] h-[28px] " />
        </div>
        </>
    )
}