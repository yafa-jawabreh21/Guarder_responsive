function ContactUs () {
    return(
        <>
        <div id="section4" className="bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/7714754/pexels-photo-7714754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] py-20">
        <h1 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-widest mb-5">GET IN TOUCH</h1>
        <form className="block mx-36 lg:mx-60 xl:mx-96 my-0">
            <input type="text" placeholder="Full Name" className="p-2 w-full mb-5 bg-white text-gray-600 text-sm rounded-sm"></input>
            <input type="email" placeholder="Email" className="p-2 w-full mb-5 bg-white text-gray-600 text-sm rounded-sm"></input>
            <textarea className="mb-5 w-full p-2 text-sm rounded-sm text-gray-500" placeholder="Message"></textarea>
            <button className="bg-yellow-300 text-white py-3 px-6 font-medium rounded-sm hover:bg-yellow-400">Send</button>
        </form>
        </div>
        </>
    )
}
export default ContactUs;