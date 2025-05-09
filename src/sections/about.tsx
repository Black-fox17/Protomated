import { Footer } from "../home/footer";
import { Header } from "../home/header";
import { aboutAssets } from "../../types/utils";
export function About() {
    const {heropic,rec1,rec2,rec3,rec4,rec5,rec6,rec7} = aboutAssets;
    return(
        <>
            <div className="section-style">
                <Header/>
                <div className="flex justify-between items-center mt-30 mx-5">
                    <div className="w-[870px] h-[228px] mt-[-200px]">
                        <h1 className="font-DMSans font-bold text-[42px] leading-[76px] tracking-[-0.5px] text-[#0F173E]">About Protomated: Empowering Businesses Through Intelligent Automation</h1>
                        <div className="flex justify-between border-[1px] rounded-sm border-[#E3E3E3] w-[605px] h-[67px] mt-5">
                            <input 
                                type="text" 
                                className="placeholder:text-gray-400 placeholder:text-lg pl-4 hover:border-none focus:border-none w-[375px]"
                                placeholder="Enter Email Address..."
                            />
                            <button className='bg-black text-white w-[232px] rounded-[6px] '>Get Free Guide</button>
                        </div>
                    </div>
                    <div className="w-[700px]">
                        <img src = {heropic} />
                    </div>
                </div>

                <div className="w-[1194px]  mt-20">
                    <h1 className="card-title">Our Mission</h1>
                    <p className="card-text">At Protomated, we’re on a mission to revolutionize how businesses operate. We design and build custom business process automation solutions that streamline workflows, boost efficiency, and drive growth. Our focus is simple: help you maximize your existing tools or implement cost-effective solutions that allow you to focus on what truly matters – growing your business.</p>
                </div>

                <div className="w-[1220px] flex justify-between items-center space-x-5 mt-20">
                    <div className="w-[208px] h-[346px] ">
                      <img src = {rec3} />
                    </div>
                    <div className="h-[278px] mt-15 w-[319px]">
                        <img src = {rec6} />
                    </div>
                    <div className="mt-25 h-[226px] w-[401px]">
                        <img src = {rec7} /> 
                    </div>
                    <div>
                         <img src = {rec5} />
                    </div>
                </div>

                <div className="w-[1050px] mt-20">
                    <h1 className="card-title mb-3 ">Who We Are</h1>
                    <p className="card-text">Protomated is a lean, agile team of automation specialists led by founder Dele Tosh, who brings over 15 years of experience in automation and software development. Our team of process analysts and solution engineers are united by a passion for transforming business operations through intelligent automation.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}