import {IconType} from "react-icons";

interface AnimatedIconsSliderProps {
  icons: IconType[]
}
const AnimatedIconsSlider: React.FC<AnimatedIconsSliderProps> = ({ icons}) => {

  return (
    <div className="animation mt-10">
      <div className="animation-slide">
        { icons.map((Icon, index) => <Icon key={index} size="80" className="text-violet-500"  />) }
      </div>
      <div className="animation-slide">
        { icons.map((Icon, index) => <Icon key={index} size="80" className="text-violet-500"  />) }
      </div>

    </div>
  )
}

export default AnimatedIconsSlider