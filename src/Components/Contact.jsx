import { ContachCard } from "./Cards/ContachCard";
function Contact(props){
    return(
        <div className="flex flex-col gap-4  w-full   bg-[#0B1220] text-white">
            <div className= "border-2  mt-2 border-black rounded-sm max-w-full px-2 ml-3 py-2 ">
            <h1>GET IN TOUCH</h1>
            <h2 className="font-bold">Let's Connect</h2>
            <h3>Have a project idea or want to connect? Feel free to reach out.</h3>
            <div className="flex flex-col">
              
               <ContachCard title="Email" href="mailto:reach.shubham02@gmail.com" description="Lets connect!" />
                {/* <h2>Let's Talk</h2> */}
            </div>
            <div className="flex flex-col">
                <ContachCard title="GitHub" href="https://github.com/codeby-shubham" description="My projects on GitHub" />
            </div>
             <div className="flex flex-col">
                <ContachCard title="LinkedIn" href="https://www.linkedin.com/in/shubham-ojha-9080163b1" description="Connect on LinkedIn" />
               
            </div>
            </div>
        </div>
    );
}
export default Contact;