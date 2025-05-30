import * as motion from "motion/react-client";
export default function NotFound() {
  return (
    <section className="flex flex-col  items-center justify-center h-screen overflow-hidden bg-both bgc-left">
      <motion.p
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-main font-americana text-2xl font-medium leading-[128%]"
      >
        Not Found
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-main font-americana text-[200px]- text-[8vw]"
      >
        404
      </motion.p>
    </section>
  );
}
