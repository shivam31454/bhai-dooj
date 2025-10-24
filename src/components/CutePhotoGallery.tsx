import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChocolateIcon = () => (
  <motion.span
    className="text-[32px] drop-shadow-sm"
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    🍫
  </motion.span>
);

const SparkleIcon = () => (
  <motion.span
    className="text-[30px]"
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    ✨
  </motion.span>
);

type Props = {
  title?: string;
  photos: string[];
  captions?: string[];
  onBack?: () => void;
  onNext?: () => void;
};

export default function CutePhotoGallery({
  title = "Precious Memories",
  photos,
  captions,
  onBack,
  onNext,
}: Props) {
  const [index, setIndex] = useState(0);
  const nextPhoto = () => setIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-transparent p-4 sm:p-6 overflow-hidden">
      {/* --- PHOTO CARD --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-[680px] rounded-2xl border-[2px] border-[#f6dce1] bg-white/85 shadow-xl flex flex-col overflow-hidden backdrop-blur-sm"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* Header */}
        <div className="px-8 sm:px-10 pt-6 text-[#2c2c2c] text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(1.8rem,6vw,3.2rem)] leading-none text-[#F47E9C] font-semibold"
          >
            {title}
          </motion.h1>
          <div className="mt-3 border-t-2 border-b-2 border-[#F7B5CF]/40 w-[70%] mx-auto"></div>
          <div
            className="flex justify-between mt-3 text-xs sm:text-sm text-[#555]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span>
              <span className="font-bold">FROM:</span> Bhai 💫
            </span>
            <span>
              <span className="font-bold">TO:</span> My Lovely Sister 💖
            </span>
          </div>
        </div>

        {/* --- Gallery Frame --- */}
        <div className="mx-6 sm:mx-8 my-4 border-[2px] border-[#F47E9C]/30 rounded-xl bg-[#FFF9FA] flex-1 relative overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden bg-[#FFF9FA]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={photos[index]}
                alt={`Photo ${index + 1}`}
                initial={{ opacity: 0, scale: 1.05, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain rounded-xl shadow-lg ring-1 ring-[#F7B5CF]/30"
                style={{
                  margin: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectPosition: 'center'
                }}
              />
            </AnimatePresence>
          </div>

          {/* Caption */}
          <div className="absolute -bottom-2 left-0 right-0 flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              {captions && captions[index] && (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-[clamp(1.1rem,2.2vw,1.5rem)] text-[#F47E9C] font-semibold italic py-2 px-4 rounded-full bg-white/90 shadow-md backdrop-blur-sm border border-[#F7B5CF]/30 text-center"
                  style={{ 
                    fontFamily: "'Dancing Script', cursive",
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  {captions[index]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={prevPhoto}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#fff5f8]/70 border border-[#F47E9C]/40 rounded-full w-9 h-9 flex items-center justify-center text-lg text-[#F47E9C] hover:bg-[#F47E9C] hover:text-white transition-all duration-300 shadow-sm backdrop-blur-md"
          >
            ‹
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#fff5f8]/70 border border-[#F47E9C]/40 rounded-full w-9 h-9 flex items-center justify-center text-lg text-[#F47E9C] hover:bg-[#F47E9C] hover:text-white transition-all duration-300 shadow-sm backdrop-blur-md"
          >
            ›
          </button>
        </div>

        {/* --- Footer --- */}
        <div className="px-8 sm:px-10 pb-6 pt-3 border-t-[1.5px] border-[#F7B5CF]/30 text-[#2c2c2c]">
          <div className="flex justify-between items-end">
            <div
              className="text-xs sm:text-sm"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <div>
                <span className="font-bold">DATE:</span> Bhai Dooj
              </div>
              <div>
                <span className="font-bold">VALID FOR:</span> Forever 💫
              </div>
            </div>
            <div className="text-right">
              <span
                className="block text-base sm:text-lg text-[#F47E9C]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                With love, your brother 💖
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Back / Next Buttons --- */}
      {onBack && (
        <motion.button
          onClick={onBack}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 text-gray-700 bg-[#E0ECFA] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#C6DBF3] transition-all z-20"
          style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
        >
          ← Back
        </motion.button>
      )}
      {onNext && (
        <motion.button
          onClick={onNext}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 text-gray-700 bg-[#FDE2E4] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#F7B5CF] transition-all z-20"
          style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
        >
          Next →
        </motion.button>
      )}
    </div>
  );
}
