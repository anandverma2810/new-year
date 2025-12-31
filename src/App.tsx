import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Box, Fade } from "@mui/material";
import song from "./assets/audio/song.mp3";
import "./App.css";

const Main = lazy(() => import("./pages/main"));
const PreSurprise = lazy(() => import("./pages/preSurprise"));
const NoScreen = lazy(() => import("./pages/noScreen"));
const Wish = lazy(() => import("./pages/wish"));
const Letter = lazy(() => import("./pages/letter"));
const Collage = lazy(() => import("./pages/collage"));
const Surprise = lazy(() => import("./pages/surprise"));

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
      {/* <audio ref={songRef} src={song} preload="auto" loop />

      <Fade key={screen} in timeout={600}>
        <Box>
          <ScreenComponent
            onNext={() => goTo(actions.next as Screen)}
            onBack={() => goTo(actions.back as Screen)}
          />
        </Box>
      </Fade> */}

      <>
        <audio ref={songRef} src={song} preload="auto" loop />

        <Suspense fallback={null}>
          <Fade key={screen} in timeout={600}>
            <Box>
              <ScreenComponent
                onNext={() => goTo(actions.next as Screen)}
                onBack={() => goTo(actions.back as Screen)}
              />
            </Box>
          </Fade>
        </Suspense>
      </>
    </>
  );
}

export default App;
