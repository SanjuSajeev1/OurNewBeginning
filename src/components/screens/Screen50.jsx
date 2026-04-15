import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "playful",
  text: "Deal? 😏",
  screenNumber: 50,
  imageSrc: "/images/Deal.jpeg",
};

export default function Screen50(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
