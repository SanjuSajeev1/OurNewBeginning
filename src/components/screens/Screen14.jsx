import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "Your pace is okay.",
  "screenNumber": 14,
  "imageSrc": "/images/screen14.jpeg"
}

export default function Screen14(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
