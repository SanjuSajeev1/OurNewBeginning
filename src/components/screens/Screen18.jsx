import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "I just... choose you.",
  "screenNumber": 18,
  "imageSrc": "/images/screen18.jpeg"
}

export default function Screen18(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
