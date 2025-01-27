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
    // <section className="relative w-full h-screen bg-[#F8EDE3] flex items-center justify-center py-20 ">

    //   <div className="absolute inset-0 flex justify-center items-center  ">

    //     <div
    //       className="relative
    //     flex justify-center
    //     items-center w-96 h-96
    //     bg-sky-200 rounded-full shadow-xl
    //     border-width: 5px;
    //     border-black
    //     border-2
    //     border-style: solid;

    //     "
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

    //       <div className="absolute inset-0 flex justify-center items-center ">
    //         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-20 ">
    //           <button className="w-24 h-24   rounded-full">
    //             <Link href="/">
    //               <Image
    //                 src={scroll}
    //                 width={96}
    //                 height={96}
    //                 alt="Sword"
    //                 placeholder="blur"
    //                 quality={100}
    //               />
    //             </Link>
    //           </button>
    //         </div>

    //         <div className="absolute right-0 bottom-1/3 transform translate-x-10 translate-y-25">
    //           <button className="w-14 h-14  rounded-full">
    //             contact
    //             <Link href="/">
    //               <Image
    //                 src={mssg}
    //                 width={96}
    //                 height={96}
    //                 alt="Sword"
    //                 placeholder="blur"
    //                 quality={100}
    //               />
    //             </Link>
    //           </button>
    //         </div>

    //         <div className="absolute left-0 top-1/3 transform -translate-x-20 -translate-y-25">
    //           <button className="w-14 h-14 0 rounded-full">
    //             <h2>contact me</h2>
    //             <Link href="/">
    //               <Image
    //                 src={mssg}
    //                 alt="Sword"
    //                 placeholder="blur"
    //                 quality={100}
    //               />
    //             </Link>
    //           </button>
    //         </div>

    //         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
    //           <button className="w-14 h-14  rounded-full">
    //             <Link href="/">
    //               <Image
    //                 src={home}
    //                 width={96}

    //                 alt="Sword"
    //                 placeholder="blur"
    //                 quality={100}
    //               />
    //             </Link>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>



    <section className="relative w-full h-screen bg-[#F8EDE3] text-black ">
      {/* Background Image or Video */}

      <div className=" inset-0 flex justify-center items-center py-7 ">
        <div
          className="relative 
    flex justify-center 
    items-center w-96 h-96
    bg-sky-200 rounded-full shadow-xl
    border-width: 5px;
    border-black
    border-2
    border-style: solid;
    my-10 

    "
          style={{
            backgroundImage: `url(${sand.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-48 h-48 rounded-full">
            <Image
              src={warrior}
              width={500}
              height={500}
              alt="Sword"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </div>


      {/* Content Container */}
      <div className="absoulte z-10 flex items-center justify-center  text-center py-1">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Hi, I'm Saif
          </h1>
          <p className="text-lg sm:text-2xl mb-8">
            A passionate web developer creating modern and user-friendly
            applications.
          </p>

          {/* Button Links */}
          <div className="flex justify-center gap-6">
            <Link href="/services" className="px-6 py-3 bg-transparent border-2 border-black text-black rounded-lg hover:bg-black
             hover:text-white transition duration-300">
              View services</Link>
            <Link href="/contact" className="px-6 py-3 bg-transparent border-2 border-black
             text-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              Contact Me</Link>
          </div>
        </div>
      </div>
    </section>



   
  );
};
export default Hero;
