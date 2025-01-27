"use client";
import Image from "next/image";
import sand from "../img/sand2.png";
import camel from "../img/camel2.png";
import scroll from "../img/scroll2.png";
import dagger from "../img/dagger.png";
import sheild from "../img/sheild.png";
import home from "../img/home.png";
import mssg from "../img/mssg.png";
import warrior from "../img/warrio2.png";
import Link from "next/link";

const Hero = () => {
  return (
   
    // <section className="relative w-full h-screen bg-[#F8EDE3] text-black ">
    //   {/* Background Image or Video */}

    //   <div className=" inset-0 flex justify-center items-center py-7 ">
    //     <div
    //       className="relative 
    // flex justify-center 
    // items-center w-96 h-96
    // bg-sky-200 rounded-full shadow-xl
    // border-width: 5px;
    // border-black
    // border-2
    // border-style: solid;
    // my-10 

    // "
    //       style={{
    //         backgroundImage: `url(${sand.src})`,
    //         backgroundSize: "cover",
    //       }}
    //     >
    //       <div className="w-48 h-48 rounded-full">
    //         <Image
    //           src={warrior}
    //           width={500}
    //           height={500}
    //           alt="Sword"
    //           placeholder="blur"
    //           quality={100}
    //         />
    //       </div>
    //     </div>
    //   </div>


    //   {/* Content Container */}
    //   <div className="absoulte z-10 flex items-center justify-center  text-center py-1">
    //     <div className="max-w-3xl mx-auto space-y-6">
    //       <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
    //         Hi, I'm Saif
    //       </h1>
    //       <p className="text-lg sm:text-2xl mb-8">
    //         A passionate web developer creating modern and user-friendly
    //         applications.
    //       </p>

    //       {/* Button Links */}
    //       <div className="flex justify-center gap-6">
    //         <Link href="/services" className="px-6 py-3 bg-transparent border-2 border-black text-black rounded-lg hover:bg-black
    //          hover:text-white transition duration-300">
    //           View services</Link>
    //         <Link href="/contact" className="px-6 py-3 bg-transparent border-2 border-black
    //          text-black rounded-lg hover:bg-black hover:text-white transition duration-300">
    //           Contact Me</Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    //responsive no grid


  //   <section className="relative w-full h-screen bg-[#F8EDE3] text-black flex flex-col justify-between ">
  //   {/* Background and Centered Image */}
  //   <div className="flex justify-center items-center hero ">
  //     <div
  //       className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-65 lg:h-65 bg-sky-200 rounded-full shadow-xl border-2 border-black"
  //       style={{
  //         backgroundImage: `url(${sand.src})`,
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //       }}
  //     >
  //       <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden absolute inset-0 m-auto">
  //         <Image
  //           src={warrior}
  //           width={500}
  //           height={500}
  //           alt="Warrior"
  //           placeholder="blur"
  //           quality={100}
  //           className="object-cover w-full h-full"
  //         />
  //       </div>
  //     </div>
  //   </div>

  //   {/* Text Content */}
  //   <div className="w-full px-4 py-6 sm:py-10 absolute bottom-0">
  //     <div className="max-w-3xl mx-auto text-center space-y-6">
  //       <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
  //         Hi, I'm Saif
  //       </h1>
  //       <p className="text-base sm:text-lg lg:text-2xl mb-6">
  //         A passionate web developer creating modern and user-friendly
  //         applications.
  //       </p>

  //       {/* Buttons */}
  //       <div className="flex flex-wrap justify-center gap-4">
  //         <Link
  //           href="/services"
  //           className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-transparent border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
  //         >
  //           View Services
  //         </Link>
  //         <Link
  //           href="/contact"
  //           className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-transparent border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
  //         >
  //           Contact Me
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </section>


  // with grid 

  <section className="relative w-full h-screen bg-[#F8EDE3] text-black grid grid-rows-12">
  {/* Background and Centered Image */}
  <div className="row-span-8 flex justify-center items-center">
    <div
      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-60 lg:h-60 bg-sky-200 rounded-full shadow-xl border-2 border-black"
      style={{
        backgroundImage: `url(${sand.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden absolute inset-0 m-auto">
        <Image
          src={warrior}
          width={500}
          height={500}
          alt="Warrior"
          placeholder="blur"
          quality={100}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>

  {/* Text Content */}
  <div className="row-span-4 flex items-center justify-center px-4">
    <div className="max-w-3xl text-center space-y-6">
      <h1 className="text-2xl sm:text-5xl lg:text-3xl font-bold leading-tight">
        Hi, I'm Saif
      </h1>
      <p className="text-base sm:text-lg lg:text-2xl mb-6">
        A passionate web developer creating modern and user-friendly
        applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 lg:my-2">
        <Link
          href="/services"
          className="button px-5 py-2 lg:px-2 lg:py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-transparent border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
        >
          View Services
        </Link>
        <Link
          href="/contact"
          className="button px-5 py-2 lg:px-2 lg:py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-transparent border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </div>
</section>

  );
};
export default Hero;
