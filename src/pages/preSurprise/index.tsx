import Screen from "../../components/screen";
import preSurpImg from "../../assets/img02.png";

interface PreSurpriseProps {
  onNext: () => void;
}

const PreSurprise = ({ onNext }: PreSurpriseProps) => {
  return (
    <Screen
      image={preSurpImg}
      imageProps={{
        width: "11.5rem",
        height: "13rem",
      }}
      messages={["Hihi", "Click below for surprise!!!"]}
      actions={[{ label: "next", onClick: onNext }]}
    />
  );
};

export default PreSurprise;
