"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
                <div className="absolute inset-0 rounded-b-full  border-transparent flex items-end justify-center overflow-hidden  rounded-t-full bg-gradient-to-b from-slate-950 to-sky-900 
                shadow-2xl ">
                    
                    <Image
                        src="/assets/marlon.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-cover opacity-85 shadow-2xl"
                    />
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Photo