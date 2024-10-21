function About () {
    return(
        <>
        <div className="h-fit block sm:flex sm:gap-5  p-14">
            <img className="sm:h-1/2 sm:w-1/2" src="https://absoluteisi.com/wp-content/uploads/2021/03/A5D0B9A5-8EB5-4046-9391-52B49432E1DB.jpeg" ></img>
            <div className="bg-white p-10 sm:h-1/2 sm:w-1/2 ">
                <h1 className="font-extrabold text-xl tracking-widest pt-2 pb-4 text-left">WHO ARE WE?</h1>
                <p className="text-left text-xs sm:text-xs md:text-base md:font-normal font-medium pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quisquam laboriosam adipisci cupiditate, eos ipsa placeat. Eius cupiditate aliquam minus omnis? Voluptas hic libero unde placeat facilis possimus quis animi.
                </p>
                <button className="bg-yellow-300 text-white py-1 px-3 font-medium rounded-sm float-left">Get Qquote</button>
            </div>
        </div>
        </>
    )
}
export default About;