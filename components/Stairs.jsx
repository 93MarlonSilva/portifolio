import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    y: "100%", 
    scale: 0.4, 
    opacity: 1, 
    rotate: 0,
  },
  animate: {
    y: "0%", 
    scale: 0.32, 
    opacity: 0, 
    rotate: 180,

  },
  
  exit: {
    y: "100%", 
    scale: 1, 
    rotate: 20,
    opacity: 0, 
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1; 
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.8, 
              ease: "easeInOut", 
              delay: reverseIndex(index) * 0.001, 
            }}
            className="h-full w-full bg-accent relative rounded-md shadow-lg"
          />
        );
      })}
    </>
  );
};

export default Stairs;
