import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: "Maybe it doesn’t feel like the right time… but it feels right with you.",
  screenNumber: 21,
  imageSrc: "/images/screen21.jpg",
};

export default function Screen21(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
