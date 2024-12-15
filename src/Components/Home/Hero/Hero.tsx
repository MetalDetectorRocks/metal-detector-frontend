import Button from '@mui/material/Button'
import { NavLink } from 'react-router'
import { releases } from '@/Router/InternalRoutes'
import classes from './Hero.module.scss'
import { Container } from '@mui/material'

const Hero = () => {
  return (
    <div className={classes['hero']}>
      <Container maxWidth="lg">
        <h1>
          Built for <br />
          Metal Heads.
        </h1>
        <p>
          Metal Detector is a metal release calendar that is 100% tailored to you. Follow your favorite artists and get
          notified when they announce or release a new album.
        </p>
        <Button variant="outlined" size={'large'} component={NavLink} to={releases.path}>
          Explore Upcoming Releases
        </Button>
      </Container>
    </div>
  )
}

export default Hero
