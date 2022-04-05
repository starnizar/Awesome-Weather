import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.489 5.838 5.239 16.627l8.489 1.65 4.487 7.487 4.274-19.926Z"
      fill="#fff"
      fillOpacity={0.4}
    />
  </Svg>
);

export default SvgComponent;
