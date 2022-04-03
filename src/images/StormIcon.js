import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={200}
    height={228}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.29 79.039C27.899 81.848 13 98.585 13 118.812 13 141.007 30.94 159 53.068 159h82.58C162.904 159 185 136.838 185 109.5S162.904 60 135.648 60a49.35 49.35 0 0 0-11.302 1.304C116.874 49.691 103.835 42 89 42c-21.517 0-39.255 16.18-41.71 37.039Z"
      fill="url(#a)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M86 135h39.056l-22.062 33H118l-43 52 11-39.5H75L86 135Z"
      fill="url(#b)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={13}
        y1={42}
        x2={13}
        y2={159}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#A9D9FF" />
        <Stop offset={1} stopColor="#7AC5FF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={75}
        y1={135}
        x2={75}
        y2={220}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#FFF3BC" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
