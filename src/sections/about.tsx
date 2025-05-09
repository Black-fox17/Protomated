import { Footer } from "../home/footer";
import { Header } from "../home/header";
import { aboutAssets, whySectionImages, techStackLogos } from "../../types/utils";
export function About() {
    const {heropic,rec1,rec2,rec3,rec5,rec6,rec7} = aboutAssets;
    const {whyImage1,whyImage2,whyImage3,whyImage4} = whySectionImages;
    const {flutterLogo,nocoLogo,budiLogo,roboLogo,n8nLogo,webStudioLogo,activeLogo} = techStackLogos
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

                <div className='flex flex-col space-y-4 mt-20'>
                    <div>
                        <h1 className="section-heading">Our Approach</h1>
                    </div>

                    <div className='mt-10 flex flex-wrap gap-20 ml-10'>
                        <div className='w-[323px] h-[282px]'>
                        <div className='w-[128px] h-[128px]'>
                            <img src = {whyImage1} />
                        </div>
                        <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Industry-Leading Expertise</h1>
                        <p className='font-sora font-normal text-[18px] text-[#64647B]'>We bring best practices from various industries to every project, ensuring cutting-edge solutions that drive results.</p>
                        </div>

                        <div className='w-[323px] h-[282px]'>
                        <div className='w-[128px] h-[128px]'>
                            <img src = {whyImage2} />
                        </div>
                        <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Customized Solutions</h1>
                        <p className='font-sora font-normal text-[18px] text-[#64647B]'>We take the time to understand your unique processes, challenges, and goals to develop tailored automation solutions.</p>
                        </div>

                        <div className='w-[323px] h-[282px]'>
                        <div className='w-[128px] h-[128px]'>
                            <img src = {whyImage3} />
                        </div>
                        <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Maximized ROI</h1>
                        <p className='font-sora font-normal text-[18px] text-[#64647B]'>By leveraging your existing tools and recommending cost-effective solutions, we help you achieve maximum return on investment.</p>
                        </div>

                        <div className='w-[323px] h-[282px]'>
                        <div className='w-[128px] h-[128px]'>
                            <img src = {whyImage4} />
                        </div>
                        <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Streamlined Implementation</h1>
                        <p className='font-sora font-normal text-[18px] text-[#64647B]'>Our lean approach ensures quick and efficient implementation, often seeing results in as little as 2–4 weeks.</p>
                        </div>

                        <div className='w-[323px] h-[282px]'>
                        <div className='w-[128px] h-[128px]'>
                            <img src = {whyImage4} />
                        </div>
                        <h1 className='font-sora font-medium text-[24px] leading-[34px] tracking-[-0.5px] text-[#0F173E]'>Scalability and Growth</h1>
                        <p className='font-sora font-normal text-[18px] text-[#64647B]'>Our solutions are designed to scale with your business, enabling you to handle increased workloads without additional headcount.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div>
                        <h1 className="section-heading">Our Technology Partners</h1>
                        <p className="card-text">We pride ourselves on partnering with leading open-source automation platforms, including n8n, FlutterFlow, nocodb, Budibase and Robomotion. As recognized premier partners, we leverage these cutting-edge tools to deliver cost-effective and secure solutions for our clients.</p>
                    </div>
                    <div className="flex justify-center gap-10 mt-7">
                        <div className="brand-logo">
                            <img src = {flutterLogo} />
                        </div>

                        <div className="brand-logo">
                            <img src = {nocoLogo} />
                        </div>

                        <div className="brand-logo">
                            <img src = {budiLogo} />
                        </div>

                        <div className="brand-logo">
                            <img src = {roboLogo} />
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 mt-10">
                        <div className="brand-logo">
                            <img src = {n8nLogo} />
                        </div>

                        <div className="brand-logo">
                            <img src = {webStudioLogo} />
                        </div>

                        <div className="brand-logo">
                            <img src = {activeLogo} />
                        </div>  
                    </div>
                </div>

                <div className = "flex justify-between items-center w-[1100px] mx-auto space-x-7 mt-20">
                    <div className="w-[705px] mt-20">
                        <h1 className="font-bold text-[48px] text-[#0F173E]">Who We Serve</h1>
                        <p className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Protomated caters to forward-thinking business owners and executives who:</p>
                            <ul className="list-disc ml-6 ">
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Seek to drive business growth and increase profitability</li>
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Face challenges with inefficient processes and manual workflows</li>
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Struggle to identify and implement the right automation solutions</li>
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Believe in the power of automation to streamline operations and reduce costs</li>
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Aim to optimize their business processes and focus on high-value activities</li>
                            </ul>    
                    </div>

                    <div className="mt-10">
                        <img src = {rec2} />
                    </div>
                </div>

                <div className = "flex justify-between items-center w-[1100px] mx-auto space-x-7 mt-20">
                    <div className="mt-10">
                        <img src = {rec1} />
                    </div>

                    <div className="w-[705px] mt-20 ">
                        <h1 className="font-bold text-[48px] text-[#0F173E]">Our Impact</h1>
                        <p className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">While we’re a new company, we’re already making waves in the automation space. Here’s what you can expect when working with Protomated:</p>
                            <ul className="list-disc ml-6">
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Average time savings of 30% on routine tasks</li>
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Potential cost reductions of up to 25% through optimized processes</li>
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Improved accuracy and consistency in business operations</li>
                                <li className="font-normal text-[18px] leading-[36px] tracking-[-0.5px]">Enhanced scalability, allowing businesses to grow without proportional increases in overhead</li>
                            </ul>    
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mx-auto w-[962px] mt-20 space-y-3">
                    <h1 className="font-bold text-[48px] text-center">Join the Automation Revolution</h1>
                    <p className="font-normal text-[18px] leading-[36px] tracking-[-0.5px] text-[#333333] text-center">Ready to transform your business operations? Let’s talk about how Protomated can help you achieve your goals through intelligent automation.</p>
                    <div className="w-[314px] h-[60px] flex justify-center items-center rounded-3xl bg-black">
                        <button className="text-white font-medium text-[16px] leading-[100%]">Schedule Free Assessment</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}