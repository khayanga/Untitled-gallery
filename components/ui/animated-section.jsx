'use client';
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  };