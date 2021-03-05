import React from 'react';

import Icon from '../UI/icon/';
import { MenuRow } from './styled';
import { Colors } from '../../modules/colors';

export interface MenuProps {
  mobile?: boolean;
  name?: string;
}

const Menu = (props: MenuProps) => {
  return (
    <MenuRow>
      <MenuRow>
        <Icon name="facebook" size={36} />
        <Icon name="twitter" size={36} />
        <Icon name="instagram" size={36} />
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
        <Icon name="search" size={36} />
        <Icon name="settings" size={36} />
      </MenuRow>
      <Icon name="menu_open" size={48} />
    </MenuRow>
  )
}

export default Menu;