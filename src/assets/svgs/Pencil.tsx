import React from 'react';

import { IconProps } from '../../components/UI/icon';

export default (props: IconProps) => ({
  svg: (
    <g id="Layer_1">
      <path
        fill={props.color}
        d="M119.7,208.4l-30.9-30.9l89.1-89.1l30.9,30.9L119.7,208.4z M110,177.5l9.7,9.7l67.9-67.9l-9.7-9.7L110,177.5z M217.1,111
      l-30.9-30.9l15.5-15.5c8.5-8.5,22.4-8.5,30.9,0s8.5,22.4,0,30.9L217.1,111z M207.4,80.1l9.7,9.7l4.9-4.9c2.7-2.7,2.7-7,0-9.7
      c-2.7-2.7-7-2.7-9.7,0L207.4,80.1z M111.1,216.5l-30.3-30.3l-22.1,52.4L111.1,216.5z"
      />
    </g>
  ),
  viewBox: '0 0 300 300'
});
