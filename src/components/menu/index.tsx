import React from 'react';

import Icon from '../UI/icon/';

interface Props {
  text?: string;
}

const Menu = (props: Props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Menu;