import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "You don’t have to be perfect.",
  "screenNumber": 11,
  "imageSrc": "/images/screen11.jpeg"
}

export default function Screen11(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
