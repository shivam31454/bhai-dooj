import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Music1 from "../music/music1.mp3";
import Music2 from "../music/music2.mp3";
import Music3 from "../music/music3.mp3";
import Cover1 from "../images/ashiyan.jpg";
import Cover2 from "../images/phulo ka taro ka.jpg";
import Cover3 from "../images/par har pal.jpg";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

type Song = {
  id: number;
  title: string;
  file: string;
  cover: string;
};

const playlist: Song[] = [
  { id: 1, title: "Ashiyan", file: Music1, cover: Cover1 },
  { id: 2, title: "Phoolo Ka Taaron Ka", file: Music2, cover: Cover2 },
  { id: 3, title: "Pal Pal Har Pal", file: Music3, cover: Cover3 },
];

export default function PlaylistPage({ onBack, onNext }: Props) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      setIsLoading(true);
      setError(null);
      audioRef.current.pause();
      audioRef.current.load();
      setCurrentTime(0);

      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsLoading(false))
            .catch(() => {
              setIsPlaying(false);
              setIsLoading(false);
              setError("Playback failed");
            });
        }
      } else {
        setIsLoading(false);
      }
    }
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnd = () => nextSong();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnd);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnd);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
            setError("Tap again to retry.");
          });
      }
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
  <div className="relative w-full h-[100dvh] flex flex-col justify-center items-center bg-transparent overflow-hidden p-4">
      {/* --- CENTER CARD --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-[620px] max-h-[82dvh] bg-[#FFF9FB] rounded-2xl shadow-xl border border-[#f3dbe1] px-5 py-6 sm:px-8 sm:py-8 flex flex-col items-center text-center overflow-hidden backdrop-blur-sm"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[clamp(1.3rem,4vw,2.3rem)] text-[#F47E9C] font-bold mb-4"
        >
          A Few Songs For You 💕
        </motion.h1>

        {/* Album Cover */}
        <div className="relative flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSongIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg ring-1 ring-[#F7B5CF]/30 flex items-center justify-center bg-[#FFF9FB]"
            >
              <motion.div
                className="absolute inset-0 bg-[#F7B5CF] blur-3xl opacity-40"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-full h-full object-cover rounded-2xl bg-[#FFF9FB]"
                style={{ objectPosition: "center" }}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Song Info */}
        <div className="bg-white border border-[#f3dbe1] rounded-xl shadow-inner px-4 py-3 mb-4 w-full max-w-[280px]">
          <p
            className="text-[#F47E9C] uppercase text-xs tracking-widest mb-1"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {isLoading ? "Loading..." : isPlaying ? "Now Playing ♪" : "Paused"}
          </p>
          <h2 className="text-sm sm:text-base font-semibold text-[#2c2c2c]">
            {currentSong.title}
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-[280px] mb-4">
          <div
            className="flex justify-between text-[#2c2c2c] text-[11px] mb-1"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 rounded-full cursor-pointer appearance-none focus:outline-none"
            style={{
              background: `linear-gradient(to right, #F47E9C 0%, #F47E9C ${
                duration > 0 ? (currentTime / duration) * 100 : 0
              }%, #f6e8eb ${duration > 0 ? (currentTime / duration) * 100 : 0}%, #f6e8eb 100%)`,
            }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={prevSong}
            disabled={isLoading}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#F47E9C] text-[#F47E9C] text-base shadow-sm hover:bg-[#F47E9C] hover:text-white transition-all"
          >
            ⏮
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            disabled={isLoading}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#F47E9C] to-[#F7B5CF] text-white text-xl shadow-md hover:shadow-lg transition-all"
          >
            {isLoading ? "⟳" : isPlaying ? "⏸" : "▶"}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={nextSong}
            disabled={isLoading}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#F47E9C] text-[#F47E9C] text-base shadow-sm hover:bg-[#F47E9C] hover:text-white transition-all"
          >
            ⏭
          </motion.button>
        </div>

        <audio ref={audioRef} preload="metadata">
          <source src={currentSong.file} type="audio/mpeg" />
        </audio>
      </motion.div>

      {/* Navigation Buttons */}
      {onBack && (
        <motion.button
          onClick={onBack}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-3 left-3 text-gray-700 bg-[#E0ECFA] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#C6DBF3] transition-all z-20"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          ← Back
        </motion.button>
      )}

      {onNext && (
        <motion.button
          onClick={onNext}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-3 right-3 text-gray-700 bg-[#FDE2E4] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#F7B5CF] transition-all z-20"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Next →
        </motion.button>
      )}

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #F47E9C;
          border: 2px solid white;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #F47E9C;
          border: 2px solid white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
