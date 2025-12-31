import Screen from "../../components/screen";
import wishImg from "../../assets/img03.png";

interface WishProps {
  onNext: () => void;
}

const Wish = ({ onNext }: WishProps) => {
  return (
    <Screen
      image={wishImg}
      imageProps={{
        width: "12rem",
        height: "13rem",
        isImageClick: true,
      }}
      messages={["Happy new year my kuchupuchuuu", "Click on the flowers.."]}
      actions={[{ label: "next", onClick: onNext }]}
    />
  );
};

export default Wish;
