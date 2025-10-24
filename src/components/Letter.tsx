import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import StampSvg from "../svg/StampSVG";
import LetterPNG from "../images/letter.png";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

export default function Letter({ onBack, onNext }: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `Didi, words can't do justice to the ocean of love you've given me. When Ammi fell ill, you and Aunty stepped up, treating me like a true son and brother. Those tiffins from Aunty weren't just food—they were love, a reminder I wasn't alone. Rakshabandhan felt so special with you tying the rakhi, and this Ganesh Chaturthi, your Dadi, Chacha, and Chachi made me feel like their own grandson. It wasn't just visiting your house—it was coming home.

You're not just my sister—you're my guide, my everything. We tease, we laugh, from you poking my peth to me not cutting my dadhi because you love your new timepass of scratching it! 😂 And that khujana-stopping moment—pure us! I'll never forget when we went for a movie and while returning, I held your hand and asked, "Didi...just like that will you hold my hand forever because I am not going to leave your finger?" And you said, "No, I will never leave your hand." That moment is my treasure, Didi—you're my safe space, my biggest happiness.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8 },
    }),
  };

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center overflow-auto bg-transparent text-center">
      {/* --- CENTERED CONTENT --- */}
      <div className="flex-grow flex items-center justify-center w-full relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-2xl bg-white/85 rounded-2xl shadow-xl border border-[#f1dede] px-6 py-10 sm:px-10 flex flex-col items-center text-center backdrop-blur-sm"
        >
          {/* Decorative photo */}
          <motion.div
            initial={{ rotate: 6, opacity: 0 }}
            animate={{ rotate: 6, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-[-30px] right-[-25px] w-[100px] sm:w-[120px] rotate-3 overflow-hidden"
          >
            <img
              src={LetterPNG}
              alt="Envelope"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -10, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-[-25px] left-[-25px]"
          >
            <StampSvg />
          </motion.div>

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mb-5"
          >
            <h1
              className="tracking-[0.2em] text-gray-700 uppercase font-semibold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
              }}
            >
              A LETTER
            </h1>
            <h2
              className="text-[#F47E9C] uppercase font-black leading-none mt-[2px]"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              }}
            >
              From Your Bhai ✦
            </h2>
          </motion.div>

          {/* Letter content with typing effect */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="max-w-md"
          >
            <h3
              className="text-[#F47E9C] italic font-semibold mb-2"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              }}
            >
              Dear Sis 💖
            </h3>

            <p
              className="text-gray-800 text-[clamp(12px,1.2vw,14px)] leading-relaxed whitespace-pre-wrap min-h-[120px] mb-3 max-h-[60vh] overflow-y-auto pr-2"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="inline-block w-[8px] bg-[#F47E9C] rounded-sm ml-[2px] align-bottom"
              />
            </p>

            <h4
              className="text-[#1f1f1f] italic font-semibold mt-1"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
              }}
            >
              — With love, your brother 💌
            </h4>
          </motion.div>
        </motion.div>
      </div>

      {/* --- BUTTONS --- */}
      <div className="flex justify-between items-center w-full max-w-xl px-6 mb-6 z-20">
        {onBack && (
          <motion.button
            onClick={onBack}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 bg-[#E0ECFA] px-6 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:bg-[#C6DBF3] transition-all"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ← Back
          </motion.button>
        )}

        {onNext && (
          <motion.button
            onClick={onNext}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 bg-[#FDE2E4] px-6 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:bg-[#F7B5CF] transition-all"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Next →
          </motion.button>
        )}
      </div>
    </div>
  );
}
