
function Contact(){
    return(
        <div className="flex flex-col gap-2  w-full   bg-[#D5E3D3] text-[#18251F]">
            <div className= "border-2  mt-2 border-black rounded-sm w-[50%] px-2 ml-3 py-2 ">
            <h1>GET IN TOUCH</h1>
            <h2 className="font-bold">Let's Connect</h2>
            <h3>Have a project idea or want to connect? Feel free to reach out.</h3>
            <div className="flex flex-col">
                <a href="reach.shubham02@gmail.com" className="font-bold">Email</a>
                <h2>Let's Talk</h2>
            </div>
            <div className="flex flex-col">
                <a href="https://github.com/codeby-shubham"className="font-bold">GitHub</a> 
                <h2>My projects and code.</h2>
            </div>
             <div className="flex flex-col">
                <a href="https://www.linkedin.com/in/shubham-ojha-9080163b1" className="font-bold">LinkedIn</a>
                <h2>Connect professionally.</h2>
            </div>
            </div>
        </div>
    );
}
export default Contact;