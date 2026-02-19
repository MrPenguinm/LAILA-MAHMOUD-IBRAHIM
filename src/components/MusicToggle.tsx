import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

const STORAGE_KEY = "portfolio-music-enabled";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Lazy-load audio element only when needed
  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio("/audio/hedwigs-theme.mp3");
      audio.loop = true;
      audio.volume = 0.3;
      audio.preload = "none";
      audioRef.current = audio;
      setLoaded(true);
    }
    return audioRef.current;
  }, []);

  const toggle = useCallback(() => {
    const audio = getAudio();
    if (playing) {
      audio.pause();
      setPlaying(false);
      localStorage.setItem(STORAGE_KEY, "false");
    } else {
      audio.play().then(() => {
        setPlaying(true);
        localStorage.setItem(STORAGE_KEY, "true");
      }).catch(() => {
        // Browser blocked autoplay — user needs to interact again
      });
    }
  }, [playing, getAudio]);

  // Restore preference on mount (but don't autoplay with sound)
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm shadow-lg ring-1 ring-border/50 text-muted-foreground hover:text-accent hover:ring-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(45_55%_48%/0.15)] sm:h-12 sm:w-12"
      aria-label={playing ? "Mute background music" : "Play background music"}
      title={playing ? "Mute music" : "Play Hedwig's Theme"}
    >
      {playing ? (
        <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
      )}
    </button>
  );
};

export default MusicToggle;
