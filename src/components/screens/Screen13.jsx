import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "You don’t have to match me.",
  "screenNumber": 13,
  "imageSrc": "/images/screen13.jpeg"
}

export default function Screen13(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
