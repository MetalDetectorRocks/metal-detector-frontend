import Heading from '@/Components/Home/Heading/Heading'
import daniel from '@/assets/img/daniel.jpeg'
import nils from '@/assets/img/nils.jpeg'
import classes from './WhoWeAre.module.scss'
import { Typography } from '@mui/material'

const WhoWeAre = () => {
  return (
    <div className={classes['who-we-are']}>
      <Heading headingTitle={'Who we are'} />
      <div className={classes['author-area']}>
        <img src={daniel} alt="Daniel" className={classes['author-image']} />
        <div>
          <h3>Daniel</h3>
          <Typography>
            I have been faithful to metal since my youth. Since those days, the problem of keeping up to date with new
            releases of my favorite artists has accompanied me. Before I started the &#34;Metal Detector&#34; with Nils,
            I used social media to keep myself informed about new releases of my favorite bands. But the ads are
            annoying, and I have to actively scroll through the feed. I wanted to create a solution that would notify me
            as soon as one of my favorite bands released or announced a new album.
          </Typography>
        </div>
      </div>
      <div className={classes['author-area']}>
        <div>
          <h3>Nils</h3>
          <Typography>
            As I have never been keen on social media, finding out about new releases of my favorite bands has always
            been a messy, time-consuming task of browsing various sites with huge ugly tables, seeing the same releases
            again and again. There was no way of tailoring that to my listening habits. Seeing lots of friends having
            the same problem as Daniel and me, I wanted to solve this once and for all and also give something back to
            the amazing community.
          </Typography>
        </div>
        <img src={nils} alt="Nils" className={classes['author-image']} />
      </div>
    </div>
  )
}

export default WhoWeAre
