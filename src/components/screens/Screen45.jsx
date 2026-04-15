import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "playful",
  text: "I know you did.",
  screenNumber: 45,
  imageSrc: "/images/did.jpeg",
};

export default function Screen45(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
