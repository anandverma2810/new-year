import Screen from "../../components/screen";
import collage from "../../assets/collage.jpg";
import collageImg from "../../assets/img04.png";

interface CollageProps {
  onNext: () => void;
}

const Collage = ({ onNext }: CollageProps) => {
  return (
    <Screen
      image={collage}
      overlayImage={collageImg}
      imageProps={{
        width: "20rem",
      }}
      messages={["2025 summary!!"]}
      actions={[{ label: "next", onClick: onNext }]}
    />
  );
};

export default Collage;
