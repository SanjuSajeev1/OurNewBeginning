import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "emotional",
  "text": "You care...\nin ways people don’t notice.",
  "screenNumber": 9,
  "imageSrc": "/images/screen9.jpeg"
}

export default function Screen9(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
