import Screen from "../../components/screen";
import polaroid from "../../assets/polaroid.png";
import surpriseImg from "../../assets/img05.png";

interface SurpriseProps {
  onNext: () => void;
}

const Surprise = ({}: SurpriseProps) => {
  return (
    <Screen
      image={polaroid}
      overlayImage={surpriseImg}
      imageProps={{
        width: "21rem",
      }}
    />
  );
};

export default Surprise;
