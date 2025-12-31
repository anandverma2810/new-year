import { useEffect, useRef, useState, type ReactNode } from "react";
import "./App.css";
import Main from "./pages/main";
import PreSurprise from "./pages/preSurprise";
import { Box, Fade } from "@mui/material";
import NoScreen from "./pages/noScreen";
import Wish from "./pages/wish";
import Surprise from "./pages/surprise";
import Collage from "./pages/collage";
import Letter from "./pages/letter";
import song from "./assets/audio/song.mp3";

function App() {
  const screens = {
    MAIN: {
      component: Main,
      actions: { next: "PRE_SURPRISE", back: "NO_SCREEN" },
    },
    PRE_SURPRISE: {
      component: PreSurprise,
      actions: { next: "WISH", back: "" },
    },
    NO_SCREEN: {
      component: NoScreen,
      actions: { next: "", back: "MAIN" },
    },
    WISH: {
      component: Wish,
      actions: { next: "LETTER", back: "" },
    },
    COLLAGE: {
      component: Collage,
      actions: { next: "SURPRISE", back: "" },
    },
    LETTER: {
      component: Letter,
      actions: { next: "COLLAGE", back: "" },
    },
    SURPRISE: {
      component: Surprise,
      actions: { next: "MAIN", back: "" },
    },
  };

  type Screen = keyof typeof screens;
  const [screen, setScreen] = useState<Screen>("MAIN");
  const songRef = useRef<HTMLAudioElement | null>(null);

  const goTo = (target?: Screen) => {
    if (target) setScreen(target);
  };

  const { component: ScreenComponent, actions } = screens[screen];

  useEffect(() => {
    if (songRef.current) {
      songRef.current.volume = 0.3;
      songRef.current.play().catch(() => {
        console.log("Autoplay blocked, needs user interaction");
      });
    }
  }, []);

  return (
    <>
      <audio ref={songRef} src={song} preload="auto" loop />

      <Fade key={screen} in timeout={600}>
        <Box>
          <ScreenComponent
            onNext={() => goTo(actions.next as Screen)}
            onBack={() => goTo(actions.back as Screen)}
          />
        </Box>
      </Fade>
    </>
  );
}

export default App;
