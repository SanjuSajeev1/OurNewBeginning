import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "I’m not here to change you.",
  "screenNumber": 16,
  "imageSrc": "/images/screen16.jpg"
}

export default function Screen16(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
