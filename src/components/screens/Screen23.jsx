import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: " If it’s US… how can the timing be wrong?",
  screenNumber: 23,
};

export default function Screen23(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
