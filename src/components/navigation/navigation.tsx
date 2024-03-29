import React from 'react';
import {
  Box,
  Button,
  Icon,
  SvgIcon,
  Typography
} from '@material-ui/core';
import { Menu, MenuOpen } from '@material-ui/icons';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { SOCIAL_MEDIA } from '../../modules/constants/social-media';
import { ROUTES } from '../../modules/constants/routes';
import { COLORS, DARK_COLOR, LIGHT_COLOR } from '../../modules/styles/colors';
import { ELEVATION, FONT_FAMILY_SERIF, FONT_SIZE, ICON_SIZE } from '../../modules/styles/variables';
import { NavigationLinks, SocialMediaLinks } from './styled';

export interface MenuProps {
  imgBackground: string;
  isDarkMode: boolean;
  isHomePage: boolean;
  isMobile: boolean;
  setImgBackground: Function;
  setIsDarkMode: Function;
  setIsHomePage: Function;
  setIsMobile: Function;
  setShowMenu: Function;
  showMenu: boolean;
}

const BackgroundImageDiv = styled('div')`
  background-attachment: fixed;
  background-color: ${(props: MenuProps) => props.isDarkMode
    ? DARK_COLOR.background
    : LIGHT_COLOR.background};
  background-image: ${(props: MenuProps) => props.isHomePage ? `url(${props.imgBackground})` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props: MenuProps) => props.isHomePage ? 'cover' : 'none'};
  height: 100%;
  width: 100%;
`;

const HomePageLink = styled(Link)`
  color: ${(props: MenuProps) => props.isHomePage
  ? COLORS.white
  : props.isDarkMode
    ? COLORS.colorDark
    : COLORS.colorLight};
  font-family: ${FONT_FAMILY_SERIF};
  font-size: ${FONT_SIZE.link}rem;
  text-align: right;
  text-decoration: none;
  
  :hover {
    color: ${(props: MenuProps) => props.isHomePage ? COLORS.lighterGray : COLORS.colorMainSecondary};
  }

  :visited {
    color: ${(props: MenuProps) => props.isHomePage ? COLORS.white : COLORS.colorMainSecondary};
  }
`;

export const Navigation = ({
  imgBackground,
  isDarkMode,
  isHomePage,
  isMobile,
  setImgBackground,
  setIsDarkMode,
  setIsHomePage,
  setIsMobile,
  setShowMenu,
  showMenu
} : MenuProps) => {
  return (
    <BackgroundImageDiv
      className="background-div"
      imgBackground={imgBackground}
      isDarkMode={isDarkMode}
      isHomePage={isHomePage}
      isMobile={isMobile}
      setImgBackground={setImgBackground}
      setIsDarkMode={setIsDarkMode}
      setIsHomePage={setIsHomePage}
      setIsMobile={setIsMobile}
      setShowMenu={setShowMenu}
      showMenu={showMenu}>
      <SocialMediaLinks sx={{ p: 1, m: 1 }} className="social_media-links">
        {SOCIAL_MEDIA.map(s => (
        <Link to={{ pathname: s.path }} target="_blank">
          {s.customSvg ? <SvgIcon fontSize="large"
            style={{
              fill: isHomePage
                ? COLORS.white
                : isDarkMode
                  ? DARK_COLOR.buttonPrimary
                  : LIGHT_COLOR.buttonPrimary,
              fontSize: `${ICON_SIZE.base}px`,
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline'
            }} component={s.icon}>{s.icon}</SvgIcon> :
            <Icon
              component={s.icon}
              fontSize="medium"
              style={{
                fill: isHomePage
                  ? COLORS.white
                  : isDarkMode
                    ? DARK_COLOR.buttonPrimary
                    : LIGHT_COLOR.buttonPrimary,
                fontSize: '30px',
                marginTop: '6px',
                textShadow: isHomePage
                  ? ELEVATION.el2
                  : ELEVATION.el0
              }} />}
        </Link>))}
        <Button color="primary" href="/contact" variant="contained" value="Hire Me!">hire me!</Button>
        <Box
          display="flex"
          alignItems="flex-start"
          flex-direction="column"
          onClick={() => setShowMenu(!showMenu)}
          style={{ cursor: 'pointer', marginTop: '2px' }}>
          <Icon component={showMenu ? MenuOpen : Menu} fontSize="large" style={{
            fill: isHomePage
              ? COLORS.white
              : isDarkMode
                ? DARK_COLOR.buttonPrimary
                : LIGHT_COLOR.buttonPrimary,
            fontSize: `${ICON_SIZE.navMenu}px`,
            marginTop: '-6px'
          }} />
          <Typography
            variant="subtitle2"
            style={{
              color: isHomePage
                ? COLORS.white
                : isDarkMode
                  ? DARK_COLOR.menuText
                  : LIGHT_COLOR.menuText,
              fontWeight: 500
            }}>menu</Typography>
        </Box>
      </SocialMediaLinks>

      <NavigationLinks className="navigation-links">
        {showMenu && (<Box sx={{
          borderRight: '2px solid #FFF',
          display: 'flex',
          flexDirection: 'column',
          paddingRight: '12px',
          marginTop: '16px'
        }}>
          {ROUTES.map(r => (
            !r.subMenu &&
              !r.isNotMenu
                ? <HomePageLink
                    className="navigation-links_link"
                    imgBackground={imgBackground}
                    isDarkMode={isDarkMode}
                    isHomePage={isHomePage}
                    isMobile={isMobile}
                    setImgBackground={setImgBackground}
                    setIsDarkMode={setIsDarkMode}
                    setIsHomePage={setIsHomePage}
                    setIsMobile={setIsMobile}
                    setShowMenu={setShowMenu}
                    showMenu={showMenu}
                    style={{ textAlign: 'right' }} to={r.path}>{r.componentName}</HomePageLink>
                : null))}
        </Box>)}
      </NavigationLinks>

      <Switch>
        {ROUTES.map(r => (
          !r.isNotMenu ? <Route exact path={r.path} component={r.component} /> : <Route component={r.component} />
        ))}
      </Switch>
    </BackgroundImageDiv>
  )
};

export default Navigation;