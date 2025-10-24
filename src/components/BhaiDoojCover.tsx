import { motion, Variants } from "framer-motion";
import coverImg from "../images/intro.gif";

type Props = {
  name?: string;
  onNext?: () => void;
};

export default function BhaiDoojCover({ name = "SIS", onNext }: Props) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    // `visible` is a function so it can read the `custom` prop passed to motion components
    // keep the signature flexible (custom: any) to satisfy types and remove the string `ease`
    // which is not assignable to the typed `Easing` in some framer-motion typings.
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8 },
    }),
  };

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center overflow-auto bg-[#FFF9F5] text-center">

      {/* --- HEADER --- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="flex flex-col items-center mt-6 sm:mt-10 z-10"
      >
        <h1
          className="tracking-[0.25em] text-gray-700 uppercase font-medium"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
          }}
        >
          For my lovely
        </h1>
        <h2
          className="text-[#F47E9C] uppercase font-black leading-none mt-1 drop-shadow-sm"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            letterSpacing: "0.05em",
          }}
        >
          S I S T E R ✦
        </h2>
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 space-y-2 sm:space-y-3 z-10">
        {/* Title Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="relative leading-none"
        >
          <h1
            className="text-[#F47E9C] italic font-semibold drop-shadow-sm"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
              lineHeight: "1",
            }}
          >
            Happy
          </h1>

          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 bg-[#FDE2E4] px-3 py-[2px] rounded-md rotate-[-6deg] shadow-sm border border-[#F7B5CF]/60">
            <span
              className="text-[clamp(11px,1.8vw,14px)] tracking-wide"
              style={{
                fontFamily: "Montserrat, system-ui, sans-serif",
                color: "#2b2b2b",
              }}
            >
              Bhai Dooj
            </span>
          </div>
        </motion.div>

        {/* Greeting Text */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="text-[#1f1f1f] uppercase font-extrabold"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "clamp(2rem, 7vw, 4rem)",
            lineHeight: "1",
          }}
        >
          Dear {name}
        </motion.h2>

        {/* Message */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="text-[clamp(11px,1.4vw,14px)] text-gray-700 leading-relaxed text-center max-w-[500px]"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
          }}
        >
          {/* You’ve always been my biggest supporter, my secret keeper, and my
          forever partner-in-crime 💫  
          On this{" "}
          <span className="text-[#F47E9C] font-semibold">Bhai Dooj</span>, I
          just want you to know how lucky I am to have you as my sister. */}

          From Strangers to Forever Home

Didi, though we come from different mothers, your boundless love has made us family in the truest sense, weaving a bond so strong it feels like we’ve been siblings forever. You’re not just my sister—you’re my guiding star, my confidante, my source of endless joy. Your care, your laughter, your fearless spirit light up my world, making every moment special. From welcoming me into your family with open arms to making me feel like I belong, you’ve given me a home in your heart. You’re a boon to me Didi, a rare gem whose love and strength make me the luckiest brother alive. I cherish you beyond words and will love you forever. 🥹
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="text-[#F47E9C] text-[clamp(16px,2vw,22px)]"
        >
          ✦ ✦ ✦
        </motion.div>

        {/* Illustration */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="w-[55%] sm:w-[32%] max-w-[200px] mt-1"
        >
          <img
            src={coverImg}
            alt="Brother and sister illustration"
            className="w-full h-auto object-contain rounded-xl shadow-lg border border-[#FDE2E4]/60"
          />
        </motion.div>
      </div>

      {/* --- NEXT BUTTON --- */}
      {onNext && (
        <motion.button
          onClick={onNext}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-5 sm:mb-7 text-gray-700 bg-[#FDE2E4] px-8 py-2.5 rounded-full text-sm sm:text-base shadow-md hover:bg-[#F7B5CF] hover:shadow-lg transition-all duration-300 z-10"
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
          }}
        >
          Next →
        </motion.button>
      )}
    </div>
  );
}
