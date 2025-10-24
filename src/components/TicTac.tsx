import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Cell = "heart" | "x" | null;

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

export default function TicTac({ onBack, onNext }: Props) {
  const [cells, setCells] = useState<Cell[]>([
    "heart",
    "x",
    "x",
    "x",
    null,
    "x",
    "x",
    "x",
    "heart",
  ]);
  const [finished, setFinished] = useState(false);

  const handleClick = (i: number) => {
    if (cells[i] || finished) return;
    const newCells = [...cells];
    newCells[i] = "heart";
    setCells(newCells);

    if (newCells.filter((c) => c === "heart").length === 3) {
      setFinished(true);
    }
  };

  useEffect(() => {
    if (finished && onNext) {
      const timer = setTimeout(() => onNext(), 2500);
      return () => clearTimeout(timer);
    }
  }, [finished, onNext]);

  return (
  <div className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center overflow-auto bg-transparent text-center">


      {/* --- HEADER --- */}
      <motion.h1
        className="text-[clamp(1.8rem,5vw,3.5rem)] text-[#F47E9C] font-semibold text-center mt-6 sm:mt-10 mb-4 z-10 drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Fill in the blanks to get a chocolate 🍫
      </motion.h1>

      {/* --- GAME BOARD --- */}
      <motion.div
        className="bg-white/80 w-full max-w-[700px] flex flex-col items-center justify-center py-6 sm:py-8 rounded-2xl shadow-lg border border-[#f3dbdf]/80 relative backdrop-blur-[3px] z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-6">
          {cells.map((cell, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleClick(i)}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-[#F47E9C] flex items-center justify-center text-[clamp(1.8rem,4vw,3rem)] cursor-pointer select-none bg-white rounded-xl shadow-sm hover:bg-[#FFF0F5] transition-all"
            >
              {cell === "heart" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-[#F47E9C]"
                >
                  🍫
                </motion.div>
              )}
              {cell === "x" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#F47E9C]/70"
                >
                  ✖
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- SUCCESS MESSAGE (Sibling tone) --- */}
        {finished && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Glowing heart pulse */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="absolute w-40 h-40 rounded-full bg-[#F7B5CF] blur-3xl opacity-40"
            ></motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative text-[clamp(1.8rem,6vw,3.5rem)] text-[#F47E9C] font-semibold text-center px-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              You succesfully unlocked a chocolate treat, yay 🍫
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* --- BUTTONS --- */}
      <div className="flex justify-between items-center w-full max-w-[700px] mt-6 mb-5 px-4 z-10">
        {onBack && (
          <motion.button
            onClick={onBack}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 bg-[#E0ECFA] px-6 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:bg-[#C6DBF3] transition-all"
            style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
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
            style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
          >
            Next →
          </motion.button>
        )}
      </div>
    </div>
  );
}
