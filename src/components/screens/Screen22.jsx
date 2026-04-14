import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: "The timing isn’t wrong… it’s just us overthinking something right.",
  screenNumber: 22,
  imageSrc: "/images/screen22.jpg",
};

export default function Screen22(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
