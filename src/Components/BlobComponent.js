import React from 'react';
import "./Blob.css"
import { motion } from 'framer-motion';
export default function BlobComponent() {
  let mode = "normal"
  const variants = {
    "normal" : {
      borderRadius: [
        "42% 58% 70% 30% / 45% 45% 55% 55%",
        "70% 30% 46% 54% / 30% 29% 71% 70%",
        "100% 60% 60% 100% / 100% 100% 60% 60%"
      ],
      transition:{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }
    },
    "pop" : {
      top:"0%",
      left:"0%",
      bottom:"0%",
      right:"0%",
      borderRadius: "0% 0% 0% 0%",
      transition:{
        duration: 1,
        ease: "linear"
      }
    }
  }
  return (
    <motion.div
    className="blob2"
    initial={{
      borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%"
    }}
    animate={
      {
        borderRadius: [
          "42% 58% 70% 30% / 45% 45% 55% 55%",
          "70% 30% 46% 54% / 30% 29% 71% 70%",
          "100% 60% 60% 100% / 100% 100% 60% 60%",
          "42% 58% 70% 30% / 45% 45% 55% 55%",
        ],
        transition:{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }
      }
    }
  />
  );
}