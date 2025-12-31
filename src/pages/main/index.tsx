import Screen from "../../components/screen";
import mainImg from "../../assets/img01.png";

interface MainProps {
  onNext: () => void;
  onBack: () => void;
}

const Main = ({ onNext, onBack }: MainProps) => {
  return (
    <Screen
      image={mainImg}
      imageProps={{
        width: "15rem",
        height: "12rem",
      }}
      messages={["Hey, I have made something for you", "Will you see it?"]}
      actions={[
        { label: "yes", onClick: onNext },
        { label: "no", onClick: onBack },
      ]}
    />
  );
};

export default Main;
