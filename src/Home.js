import Quarder from "./components/Quarder";
import About from "./components/About";

function Home () {
    return(
        <>
        

        <div className="bg-cover bg-no-repeat bg-[url('https://xpressguards.com/wp-content/uploads/2020/10/top-rated-security-guards.jpg')]" >
        <nav class="  dark:bg-gray-900 pl-10 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className="text-yellow-300">G</span>uarder</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto md:pr-36" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="bg-black px-2 rounded-md">
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:hover:bg-black md:bg-opacity-80 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li className="md:hover:bg-black md:hover:rounded-sm">
          <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">About</a>
        </li>
        <li className="md:hover:bg-black md:hover:rounded-sm">
          <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li className="md:hover:bg-black md:hover:rounded-sm">
          <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Quarder</a>
        </li>
        <li className="md:hover:bg-black md:hover:rounded-sm">
          <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Quarder/>
</div>
<About/>


<footer class=" dark:bg-gray-900 bg-black md:p-24">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 md:block text-white">
        <div class="md:flex md:gap-7 md:justify-between">
          <div class="mb-6 md:mb-0 ">
              <a href="/" class="flex items-center">
                  <span class="self-center pb-2 md:text-2xl  text-xl font-semibold whitespace-nowrap dark:text-white"><span className="text-yellow-300">G</span>uarder</span>
              </a>
              <p className="text-left pt-2 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="block md:grid md:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="self-center pb-2 text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white text-left"><span className="text-yellow-300">U</span>seful Link</h2>
                <p className="text-left pt-2 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
                  {/* <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul> */}
              </div>
              <div>
              <h2 class="self-center pb-4  text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white text-left"><span className="text-yellow-300">C</span>ontact Us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                  <li class=" flex  pb-2">
                      <svg class="w-5 h-5 pr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                      </svg>

                          <h3 className=" text-left  text-white text-xs" >lorem ipsum dolor sit amat</h3>
                      </li>

                      <li className="flex  pb-2">
                      <svg class="w-5 h-5 pr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                      </svg>

                      <h3 className=" text-left  text-white text-xs">contact@example.com</h3>
                      </li>
                      <li className="flex  pb-2">
                      <svg class="w-5 h-5 pr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                      </svg>

                        <h3 className=" text-left text-white text-xs" >call:+01234567891  </h3>
                      </li>
                  </ul>
              </div>
              <div>
              <h2 class="self-center  pb-4  text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white text-left"><span className="text-yellow-300">N</span>ewsletter</h2>
                  <form className="flex gap-1 md:block ">
                    <input type="text" placeholder="Enter Your Email" className="rounded-sm p-2 md:mb-3 md:float-left"></input>
                    <button type="button" className="bg-yellow-300 text-white text-center rounded-lg p-2 px-5 md:float-left ">Subscribe</button>
                  </form>
                  <div class="flex pt-5 pb-6 sm:justify-center sm:mt-0 float-left ">
              <a href="#" class="text-yellow-300 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              
              <a href="#" class="text-yellow-300 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-yellow-300 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg class="w-5 h-5 text-yellow-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
              </svg>
                  <span class="sr-only">Youtube page</span>
              </a>

              <a href="#" class="text-yellow-300 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg class="w-5 h-5 text-yellow-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24">
               <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
              </svg>

                  <span class="sr-only">Instagram page</span>
              </a>
              
              
          </div>
              </div>
          </div>
      </div>
      <div class="sm:flex sm:items-center sm:justify-between mt-10 text-center">
          <span class="text-sm text-white text-center dark:white md:text-base font-semibold">© 2024 <a href="/" class="hover:underline"></a>. All Rights Reserved. Made by Yafa.
          </span>
      </div>
    </div>
</footer>


        </>
    )
}
export default Home;