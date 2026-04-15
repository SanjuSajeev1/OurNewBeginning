import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "playful",
  text: "You owe me one smile",
  screenNumber: 47,
  videoSrc: "/images/smile.mp4",
  videoAutoPlay: true,
};

export default function Screen47(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
