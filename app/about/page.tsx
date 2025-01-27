import Image from "next/image";
import scroll from "../components/img/scroll2.png"
import warrior from "../components/img/warrio2.png"
import camel from "../components/img/camel2.png"
import sand from "../components/img/sand2.png"

import Letter from ".//Letter"


const About = () => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full min-h-screen py-6 bg-[#E8F9FF]">
      {/* Camel Image */}
      <div className="flex justify-center items-center">
        <Image
          src={camel}
          alt="Camel"
          className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover"
        />
      </div>

      {/* Letter Component */}
      <div className="flex justify-center items-center">
        <div className="w-64 h-auto sm:w-72 sm:h-auto lg:w-96 lg:h-auto">
          <Letter />
        </div>
      </div>

      {/* Warrior Image */}
      <div className="flex justify-center items-center">
        <Image
          src={warrior}
          alt="Warrior"
          className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover"
        />
      </div>
    </div>
 
//   <div className="grid grid-cols-12 gap-4 w-full min-h-screen py-2 bg-[#E8F9FF] ">
//   {/* Warrior Image */}
//   <div className="col-span-4 center ">
//     <Image
//       src={camel}
//       alt="Warrior"
//       className="w-72 h-72 sm:w-96 sm:h-96 object-cover
//       "
//     />
//   </div>

//   {/* Letter Image with Overlay */}
//   <div className="col-span-4 w-96 h-screen center">
//     <Letter/>
//   </div>
//   <div className="col-span-4 center ">
//     <Image
//       src={warrior}
//       alt="Warrior"
//       className="w-96
//       h-96 
//       object-cover
//       "
//     />
//   </div>
// </div>
  );
};

export default About;
