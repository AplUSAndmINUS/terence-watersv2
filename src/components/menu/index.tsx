import React from 'react';

import Icon from '../UI/icon/'

interface Props {
  text?: string;
}

const Menu = (props: Props) => {
  return (
    <div>
      <Icon text={props.text} />
    </div>
  )
}

export default Menu;