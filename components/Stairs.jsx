import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    y: "100%", 
    scale: 0.1, 
    opacity: 1, 
  },
  animate: {
    y: "0%", 
    scale: 0.3, 
    opacity: 0, 
  },
  exit: {
    y: "100%", 
    scale: 0, 
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
              duration: 0.6, 
              ease: "easeInOut", 
              delay: reverseIndex(index) * 0.05, 
            }}
            className="h-full w-full bg-green-500 relative rounded-md shadow-lg"
          />
        );
      })}
    </>
  );
};

export default Stairs;
