import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "confident",
  text: "You don’t have to rush.",
  screenNumber: 12,
  imageSrc: "/images/screen12.png",
};

export default function Screen12(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
