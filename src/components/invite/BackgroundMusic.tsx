import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  autoPlayTrigger?: boolean;
}

export function BackgroundMusic({ autoPlayTrigger }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/bgm.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Play when autoPlayTrigger becomes true (e.g. envelope opened)
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.warn("Autoplay blocked until user interaction:", err);
        });
    }
  }, [autoPlayTrigger, isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
    setHasInteracted(true);
  };

  return (
    <div className="fixed right-4 top-4 z-50">
      <motion.button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute celebratory music" : "Play celebratory music"}
        title={isPlaying ? "Mute music" : "Play music"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className="group relative flex size-11 items-center justify-center rounded-full border border-gold/40 bg-paper/85 text-ink shadow-[0_8px_20px_-8px_rgba(60,45,25,0.4)] backdrop-blur-md transition-colors hover:border-gold hover:bg-paper"
      >
        {/* Animated pulsating outer ring when playing */}
        {isPlaying && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-gold/60"
            animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Rotating vinyl / musical effect */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-center text-sepia group-hover:text-gold"
        >
          {isPlaying ? (
            <Volume2 className="size-5 text-gold" />
          ) : (
            <VolumeX className="size-5 text-sepia/70" />
          )}
        </motion.div>

        {/* Small floating musical note when playing */}
        {isPlaying && (
          <motion.span
            aria-hidden="true"
            className="absolute -top-1 -right-1 text-gold"
            animate={{ y: [-2, -8, -2], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Music className="size-3" />
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
