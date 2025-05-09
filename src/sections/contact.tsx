import { Header } from "../home/header";

export function Contact() {
    return(
        <div className="section-style ">
            <Header />
            <div className="w-[1200px] mx-auto mt-20 flex justify-between">
                <div className="w-[600px]">
                    <div className="space-y-3">
                        <h1 className="font-bold text-[48px] text-[#0F173E] mt-7">Contact Us</h1>
                        <p className="card-text">Email, call or complete the form to learn how Protomated can better help you with our services.</p>
                        <p className="card-text underline">ask@protomated.com</p>
                        <p className="card-text">+1 (321) 654 0987</p>
                        <div className="w-[245px] h-[54px] flex justify-center items-center rounded-md   bg-black">
                             <button className="text-white font-medium text-[16px] leading-[100%]">Speak with Live Agent</button>
                        </div>
                    </div>

                    <div className="flex justify-between mt-10  ">
                        <div className="space-y-2">
                            <h1 className="card-title">Customer Support</h1>
                            <p className="card-text">Our support team is available around the clock to address any queries or inquiries you may have.</p>
                        </div>
                        <div className="space-y-2">
                            <h1 className="card-title">Feedback and Suggestions</h1>
                            <p className="card-text">We value your feedback and your input is crucial in shaping the future of Protomated.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col px-5 bg-white w-[500px] rounded-4xl">
                  <div>
                    <h1 className="font-bold text-[48px] text-[#0F173E]">Get in Touch</h1>
                    <p className="card-text">You can reach us anytime</p>
                  </div>

                  <div className="flex flex-col mt-4 space-y-5">
                    <input type = "text" placeholder="Full Name"  className="border-[0.5px] w-[450px] h-[48px] rounded-md border-[#D0D0D0] placeholder:pl-4 placeholder:text-[#999999] placeholder:text-[18px] placeholder:font-normal" />
                    <input type = "text" placeholder="Email Address" className="border-[0.5px] w-[450px] h-[48px] rounded-md border-[#D0D0D0] placeholder:pl-4 placeholder:text-[#999999] placeholder:text-[18px] placeholder:font-normal"/>
                    <input type = "text" placeholder="Phone Number" className="border-[0.5px] w-[450px] h-[48px] rounded-md border-[#D0D0D0] placeholder:pl-4 placeholder:text-[#999999] placeholder:text-[18px] placeholder:font-normal" />
                    <textarea
                        placeholder="How we can Help?"
                        className="border-[0.5px] rounded-md border-[#D0D0D0] placeholder:text-[#999999] placeholder:text-[18px] placeholder:font-normal p-4 h-[100px] resize-none"
                        />

                  </div>

                  <div className="w-[400px] mx-auto h-[54px] flex justify-center items-center rounded-md mt-3 bg-black">
                        <button className="text-white font-medium text-[16px] leading-[100%]">Submit</button>
                    </div>
                    <div className="w-[320px] mx-auto">
                        <p className="card-progress-label text-center">By contacting us you agree to our <b>Terms of service</b> and <strong>Privacy Policy</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}