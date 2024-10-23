function Quards() {
    return (
        <>
            <div>
                <h1 className="text-black pt-10 text-lg sm:text-lg md:text-xl font-bold tracking-widest mb-5">OUR GUARDS</h1>
                <p className="text-center px-20 py-0 mb-11">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi animi laborum facilis, qui sint, vero odit libero consequatur iusto quo perferendis rerum eos aliquid porro, at cupiditate. Quibusdam, sapiente quisquam!
                </p>
                <div className="md:flex  justify-center md:justify-start md:gap-1 md:mx-5">
                    {/* Each guard's card */}
                    <div className="relative my-4 mx-2 h-64 w-full md:w-1/3  bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/7714682/pexels-photo-7714682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                        <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 text-white h-1/4 md:h-2/5 flex flex-col justify-center items-center">
                            <h2 className="text-white text-xl font-bold tracking-wide">Nathan Mcpherson</h2>
                            <h5 className="text-sm font-bold tracking-wide">Supervisor</h5>
                        </div>
                    </div>
                    <div className="relative my-4 mx-2 h-64 w-full md:w-1/3 bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/7714709/pexels-photo-7714709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                        <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 text-white h-1/4 md:h-2/5 flex flex-col justify-center items-center">
                            <h2 className="text-white text-xl font-bold tracking-wide">Denny Bulter</h2>
                            <h5 className="text-sm font-bold tracking-wide">Supervisor</h5>
                        </div>
                    </div>
                    <div className="relative my-4 mx-2 h-64 w-full md:w-1/3 bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/7714739/pexels-photo-7714739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                        <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 text-white h-1/4 md:h-2/5 flex flex-col justify-center items-center">
                            <h2 className="text-white text-xl font-bold tracking-wide">Keit Mcpherson</h2>
                            <h5 className="text-sm font-bold tracking-wide">Supervisor</h5>
                        </div>
                    </div>
                    
                </div>
                <button className="bg-yellow-300 text-white py-1 px-10 mt-4 mb-10 font-medium rounded-sm hover:bg-yellow-400">View All</button>
            </div>
        </>
    );
}

export default Quards;