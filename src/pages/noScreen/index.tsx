import Screen from "../../components/screen";
import noImg from "../../assets/img06.png"

interface NoScreenProps {
  onBack: () => void;
}

const NoScreen = ({ onBack }: NoScreenProps) => {
  return (
    <Screen
      image={noImg}
      imageProps={{
        width: "13rem",
        height: "16rem",
      }}
      messages={["HOW DARE YOU!!!"]}
      actions={[{ label: "back", onClick: onBack }]}
    />
  );
};

export default NoScreen;
