/** @format */

"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function LoadingScreen() {
  const progress = useMotionValue(0);
  const rounded = useTransform(progress, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 1.5,
      ease: "easeInOut",
    });

    return controls.stop;
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-[#001614] text-white flex flex-col justify-end px-6 md:px-24 py-8 pb-[60px] md:pb-[116px]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}> 
        
        {/* Top section */}
        <div className="flex justify-between items-end font-bold mb-6 md:mb-[28px]">
          <div className="text-5xl md:text-7xl">goox</div>
          <motion.div className="text-[72px] md:text-[150px] leading-none">{rounded}</motion.div>
        </div>

        {/* Bottom progress bar */}
        <div className="w-full mt-4">
          <motion.div
            className="h-[6px] bg-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
