import React from 'react';

import Icon from '../UI/icon/'

interface Props {
  name?: string;
  text?: string;
}

const Menu = (props: Props) => {
  return (
    <div>
      <Icon name="menu_open" text={props.text} />
    </div>
  )
}

export default Menu;