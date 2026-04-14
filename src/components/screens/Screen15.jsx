import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "What you are right now...\nis already enough.",
  "screenNumber": 15,
  "imageSrc": "/images/screen15.jpeg"
}

export default function Screen15(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
