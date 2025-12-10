"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function ExpandHoverButton({
  title,
  icon,
  defaultHover = false,
}) {
  const [isHovered, setIsHovered] = React.useState(defaultHover);

  return (
    <motion.div
      initial={{ width: defaultHover ? 180 : 37, height: 37 }}
      whileHover={{ width: 180 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(defaultHover ? true : false)}
      transition={{ duration: 0.3 }}
      className="bg-primary flex items-center py-1 hover:bg-primaryDark justify-center overflow-hidden relative"
      style={{ borderRadius: 32 }}
    >
      <motion.div
        className="absolute"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.8 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-white text-2xl">{icon}</span>
      </motion.div>

      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
      >
        <span className="text-white text-sm mr-2">{icon}</span>
        <span className="text-white text-sm font-bold whitespace-nowrap">
          {title}
        </span>
      </motion.div>
    </motion.div>
  );
}
