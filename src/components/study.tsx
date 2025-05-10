import { Footer } from "../home/footer";
import { Header } from "../home/header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LongImages } from "../../types/utils";
interface LocationState {
    name: string;
    image: string;
}

const StudyInner = () =>{
    const { state } = useLocation();
    const { name, image } = state as LocationState;
    const {longimage1,longimage2,longimage3} = LongImages
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
                    <p className=" ml-2 uppercase font-semibold text-[14px]">
                        <Link
                        to = '/case-study'
                        >
                            Case StudIES
                        </Link>
                    </p>
                    <span className="ml-1 text-[14px] font-semibold">{'>'}</span>
                    <p className=" ml-2 uppercase font-semibold text-[14px]">{name}</p>
                    <span className="ml-1 text-[14px] font-semibold">{'>'}</span>
                </div>

                <div className="mt-10 flex space-x-5">
                    <div className="w-[600px]">
                        <h1 className="font-DMSans font-bold text-[42px] leading-[76px] tracking-[-0.5px] text-[#0F173E]">Consulting Firm Reduces Data Processing Time by 90% with Protomated’s Automation</h1>
                        <p className="card-text ">How a consulting firm utilized Protomated’s data automation solution to expedite data processing turnaround.</p>
                    </div>
                    <div className="w-[400px] h-[400px]">
                        <img src = {image} />
                    </div>
                </div>
                 
                <div className="mt-20 flex flex-col">
                    <div>
                        <h1 className="font-bold text-[48px] text-[#0F173E]">The Challenge</h1>
                        <p className="case-text">An operations consulting firm serving manufacturing clients, faced significant challenges in analyzing large datasets from client ERP systems. The firm’s consultants struggled with:</p>
                            <ul className="list-disc ml-6 ">
                                <li className="case-text">Manually extracting and consolidating data from various sources </li>
                                <li className="case-text">Cleaning and transforming data into a usable format for analysis </li>
                                <li className="case-text">Spending hours on data preparation instead of high-value analysis </li>
                                <li className="case-text">Difficulty scaling data analysis processes as client engagements grew </li>
                            </ul>    
                        <p className="case-text">These issues led to longer project timelines, reduced efficiency, and limited ability to provide timely, data-driven insights to clients. OpsAdvise  recognized the need to automate their data analysis process to improve productivity and client outcomes.</p>
                    </div>

                    <div className="mt-10">
                        <img src = {longimage1} />
                    </div>
                       
                    <div>
                        <h1 className="font-bold text-[48px] text-[#0F173E] mt-10">Our Solution</h1>
                        <p className="case-text">Protomated partnered with the firm to design and implement a customized data automation solution. Our end-to-end pipeline included:</p>
                            <ul className="list-disc ml-6 ">
                                <li className="case-text">Automated extraction of data from client ERP systems and other sources</li>
                                <li className="case-text">Intelligent data transformation and cleansing algorithms</li>
                                <li className="case-text">Loading of structured data into a centralized analytics platform</li>
                                <li className="case-text">Integration with leading data visualization and BI tools </li>
                                <li className="case-text"> Secure, cloud-based infrastructure for scalability and reliability </li>
                            </ul>    
                        <p className="case-text">Our team worked closely with the firm’s consultants to understand their data requirements and design a solution that seamlessly integrated with their existing tools and processes.</p>
                    </div>

                    <div className="mt-10">
                        <img src = {longimage2} />
                    </div>

                      
                    <div>
                        <h1 className="font-bold text-[48px] text-[#0F173E] mt-10">The Results</h1>
                        <p className="case-text">By implementing Protomated’s data automation solution, the firm achieved game-changing results: </p>
                            <ul className="list-disc ml-6 ">
                                <li className="case-text">90% reduction in time spent on data processing and preparation </li>
                                <li className="case-text">75% faster delivery of data-driven insights and recommendations to clients </li>
                                <li className="case-text">50% increase in consultant productivity and billable hours</li>
                                <li className="case-text">100% data accuracy and consistency across engagements </li>
                            </ul>    
                        <p className="case-text">The automated pipeline empowered the firm to:</p>
                        <ul className="list-disc ml-6 ">
                                <li className="case-text">Focus their expertise on high-value analysis and problem-solving </li>
                                <li className="case-text">Identify improvement opportunities faster and more effectively </li>
                                <li className="case-text">Scale their data analysis capabilities as client demands grew </li>
                                <li className="case-text">Enhance their reputation as a data-driven, results-oriented firm</li>
                            </ul>    
                    </div>

                    <div className="mt-10">
                        <img src = {longimage3} />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default StudyInner;