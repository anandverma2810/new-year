import Screen from "../../components/screen";
import letr from "../../assets/letter.png";
import letterImg from "../../assets/img07.png";

interface LetterProps {
  onNext: () => void;
}

const Letter = ({ onNext }: LetterProps) => {
  return (
    <Screen
      image={letr}
      overlayImage={letterImg}
      imageProps={{
        width: "21rem",
      }}
      //   messages={["2025 summary!!"]}
      actions={[{ label: "next", onClick: onNext }]}
    />
  );
};

export default Letter;
