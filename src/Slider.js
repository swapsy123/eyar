import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default () => (
  <>
    <Slider min={1} max={100}  defaultValue={30}  />
  </>
);