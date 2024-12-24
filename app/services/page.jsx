"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Focado no desenvolvimento de aplicações móveis utilizando React e Next.js, garantindo desempenho otimizado, layouts responsivos e experiências de usuário intuitivas.",
  },
  {
    num: "02",
    title: "Mobile Development",
    description: "Desenvolvimento para iOS e Android utilizando Flutter e React Native, duas tecnologias poderosas para criar aplicativos móveis robustos, eficientes e de alto desempenho."
  },
  {
    num: "03",
    title: "Desktop Development",
    description: "Desenvolvimento de aplicativos para Windows e macOS utilizando Flutter, garantindo ótimo desempenho e uma experiência nativa de alta qualidade."
  },
  {
    num: "04",
    title: "UI/UX",
    description: "Criação de protótipos, experiências de usuário intuitivas, design de layouts modernos, estilizados e alinhados às melhores práticas de usabilidade e acessibilidade."
  }
];
const Services = () => {
  return (
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={'service.href'} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-customColor transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            <h2 className="text-[42px] font-bold leading-none text-customColor group-hover:text-white transition-all duration-500">{service.title}</h2>
            <p className="text-white/80">{service.description}</p>
            <div className="border-b border-customColor w-full"></div>
          </div>
        })}
      </motion.div>
    </div>
  </section>
  );
}

export default Services
