import Box from '@mui/material/Box'
import classes from './FooterBar.module.scss'
import Divider from '@mui/material/Divider'
import { Link, NavLink } from 'react-router-dom'
import { imprint, privacyPolicy } from '../../Router/InternalRoutes'
import buyUsABeerLogo from '@/assets/img/buy-us-a-beer-logo.png'
import instagramLogo from '@/assets/img/instagram-logo.png'
import githubLogo from '@/assets/img/github-logo.png'

const FooterBar = () => {
  return (
    <>
      <Divider />
      <Box className={classes['footer-bar']}>
        <Box className={classes['footer-icons']}>
          <Link
            to={'https://www.buymeacoffee.com/metaldetector'}
            title={'Buy us a beer'}
            rel={'noopener noreferrer me'}
            target={'_blank'}
            className={classes['footer-icons__icon']}
          >
            <Box component={'img'} alt={'Buy us a beer logo'} src={buyUsABeerLogo} />
          </Link>
          <Link
            to={'https://www.instagram.com/metaldetector.rocks/'}
            title={'Find us on Instagram'}
            rel={'noopener noreferrer me'}
            target={'_blank'}
            className={classes['footer-icons__icon']}
          >
            <Box component={'img'} alt={'Instagram Logo'} src={instagramLogo} />
          </Link>
          <Link
            to={'https://github.com/MetalDetectorRocks?tab=repositories'}
            title={'Find us on GitHub'}
            rel={'noopener noreferrer me'}
            target={'_blank'}
            className={classes['footer-icons__icon']}
          >
            <Box component={'img'} alt={'GitHub Logo'} src={githubLogo} />
          </Link>
        </Box>
        <Box component={'nav'} className={classes['footer-menu']}>
          <Link
            to={'https://stats.uptimerobot.com/WowYOCjRAV'}
            title={'Website status'}
            rel={'noopener noreferrer me'}
            target={'_blank'}
            className={classes['footer-menu__item']}
          >
            Website status
          </Link>
          <NavLink className={classes['footer-menu__item']} to={imprint.path}>
            {imprint.name}
          </NavLink>
          <NavLink className={classes['footer-menu__item']} to={privacyPolicy.path}>
            {privacyPolicy.name}
          </NavLink>
        </Box>
      </Box>
    </>
  )
}

export default FooterBar
