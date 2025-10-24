import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BhaiDoojCover from "./components/BhaiDoojCover";
import TicTac from "./components/TicTac";
import Letter from "./components/Letter";
import CutePhotoGallery from "./components/CutePhotoGallery";
import PlaylistPage from "./components/PlaylistPage";
import ThankYouPage from "./components/ThankYouPage";

// Import your photos
import photo1 from "./images/pic1.jpg";
import photo2 from "./images/pic2.jpg";
import photo3 from "./images/pic3.jpg";
import photo4 from "./images/pic4.jpg";
import photo5 from "./images/pic5.jpg";
import photo6 from "./images/pic6.jpg";

function App() {
  const [page, setPage] = useState(0);

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
  const myCaptions = [
    "Best Sister Ever 💖",
    "My Partner in Crime 😄",
    "Childhood Memories ✨",
    "Festival Fun Together 🪔",
    "Sisters are Forever 💝",
    "Love You Sister 🤗"
  ];

  const pageVariants = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center overflow-hidden"
      style={{
        backgroundColor: "#FFF9F5", // 🌸 Keep a single pastel background color
        transition: "background-color 0.4s ease",
      }}
    >
      <AnimatePresence mode="wait">
        {page === 0 && (
          <motion.div
            key="cover"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <BhaiDoojCover onNext={() => setPage(1)} />
          </motion.div>
        )}

        {page === 1 && (
          <motion.div
            key="tictac"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <TicTac onBack={() => setPage(0)} onNext={() => setPage(2)} />
          </motion.div>
        )}

        {page === 2 && (
          <motion.div
            key="letter"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Letter onBack={() => setPage(1)} onNext={() => setPage(3)} />
          </motion.div>
        )}

        {page === 3 && (
          <motion.div
            key="gallery"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <CutePhotoGallery
              title="Our Precious Memories 📸"
              photos={photos}
              captions={myCaptions}
              onBack={() => setPage(2)}
              onNext={() => setPage(4)}
            />
          </motion.div>
        )}

        {page === 4 && (
          <motion.div
            key="playlist"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <PlaylistPage onBack={() => setPage(3)} onNext={() => setPage(5)} />
          </motion.div>
        )}

        {page === 5 && (
          <motion.div
            key="thankyou"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <ThankYouPage onBack={() => setPage(4)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
