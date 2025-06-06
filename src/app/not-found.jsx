import * as motion from "motion/react-client";
export default function NotFound() {
  return (
    <section className="flex flex-col  items-center justify-center h-[50dvh] md:h-[80dvh] lg:h-screen overflow-hidden bg-both bgc-left">
      <motion.p
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-main font-americana text-xl md:text-2xl font-medium leading-[128%]"
      >
        Not Found
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-main font-americana text-[80px] sm:text-[100px] lg:text-[150px] 2xl:text-[200px] text-[8vw]-"
      >
        404
      </motion.p>
    </section>
  );
}
