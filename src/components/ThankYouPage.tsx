import React from "react";
import { motion } from "framer-motion";

type Props = {
  onBack?: () => void;
};

export default function ThankYouPage({ onBack }: Props) {
  return (
  <div className="relative w-full h-[100dvh] flex items-center justify-center bg-transparent overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F7B5CF] opacity-30"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              y: [-150, -400, -600],
              x: `calc(${Math.random() * 100}vw - 40px)`,
              opacity: [0.3, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ fontSize: `${Math.random() * 16 + 14}px` }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[700px] max-h-[88dvh] bg-[#FFF9FB] rounded-2xl shadow-xl border border-[#f3dbe1] px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between items-center text-center backdrop-blur-sm overflow-hidden"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* Header Tag */}
        <div className="text-xs sm:text-sm text-[#444] uppercase tracking-wider mb-3 font-medium">
          ✦ from your bhai, with love ✦
        </div>

        {/* Title */}
        <div className="flex-1 flex flex-col items-center justify-center px-2">
          <motion.h1
            className="text-[#F47E9C] text-[clamp(2.2rem,8vw,4.5rem)] italic font-semibold leading-none mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Thank You
          </motion.h1>

          <motion.h2
            className="text-[#2c2c2c] text-[clamp(1.3rem,4vw,2.2rem)] font-extrabold uppercase tracking-tight mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            for always being there💖
          </motion.h2>

          <motion.div
            className="max-w-[520px] overflow-y-auto px-4 max-h-[48vh]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="space-y-4">
              <p className="text-[#4b4b4b] text-[clamp(0.85rem,1.4vw,1rem)] leading-relaxed text-left">
                By God's grace, we celebrated Bhai Dooj, making our dreams come true. I'm sorry, Didi, I had little money and borrowed from you; I wanted to gift everyone this Diwali, but I promise, next time your bhai will deliver—dekhna!
              </p>
              <p className="text-[#4b4b4b] text-[clamp(0.85rem,1.4vw,1rem)] leading-relaxed text-left">
                Things might seem messy now, but I believe in destiny—sab theek ho jayega. Your love teaches me to live fearlessly and cherish every moment, and you and your family make me feel so valued, so at home.
              </p>
              <p className="text-[#4b4b4b] text-[clamp(0.85rem,1.4vw,1rem)] leading-relaxed text-left">
                Now, as life pulls us apart, my heart aches not knowing when we'll meet again. But Didi, a bhai and behen's souls are forever bound, no distance can break us. Your love has shaped me, given me a home in your heart, and made me the luckiest brother alive.
              </p>
              <p className="text-[#4b4b4b] text-[clamp(0.85rem,1.4vw,1rem)] leading-relaxed text-left font-medium">
                This isn't goodbye, My Didu ❤—it's a promise that your love and our bond will live in me always. Tu bs mera naam hi yaad rhegi na didi toh bhi mai bht happy rhuga "Amaan", and apne aane wali generation ko batana tuhara Mamu hai and mai bhi office me chair or table rakhuga hi, and pls wo handkerchief dedena kyuki uska frame lgauga na apke office me.
              </p>
              <p className="text-[#4b4b4b] text-[clamp(0.85rem,1.4vw,1rem)] leading-relaxed text-left italic font-semibold">
                I love you forever and always. 🥹
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer line */}
        <div className="text-center text-xs sm:text-sm mt-4 text-[#2c2c2c]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            made with 💗, chocolates & sparkles — always your bhai ✨
          </motion.p>
        </div>
      </motion.div>

      {/* Back button */}
      {onBack && (
        <motion.button
          onClick={onBack}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-3 left-3 text-gray-700 bg-[#E0ECFA] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#C6DBF3] transition-all"
          style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
        >
          ← Back
        </motion.button>
      )}
    </div>
  );
}
