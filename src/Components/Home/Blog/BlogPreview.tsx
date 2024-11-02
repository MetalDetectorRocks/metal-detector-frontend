import Heading from '../Heading/Heading'
import BlogPostPreview from '@/Components/Home/Blog/BlogPostPreview'
import classes from './BlogPreview.module.scss'
import futurePlansPost from '@/assets/img/blog-metal-detector.png'
import topReleasesPost from '@/assets/img/blog-top-releases-2020.jpg'
import onlinePost from '@/assets/img/blog-we-are-online.jpg'
import Button from '@mui/material/Button'

const BlogPreview = () => {
  return (
    <div className={classes['blog-preview']}>
      <Heading headingTitle={'Latest News'} />
      <div className={classes['blog-post-preview-area']}>
        <BlogPostPreview
          image={futurePlansPost}
          heading={'Future Plans'}
          text={
            'The Metal Detector has been online for a few days now (Closed beta). We want to share with you what we have planned for the current year.'
          }
        />
        <BlogPostPreview
          image={topReleasesPost}
          heading={'Top Releases of 2020'}
          text={
            'It is now 2021 and we have taken the time to look back at the pandemic year of 2020 to bring you our top 6 metal releases.'
          }
        />
        <BlogPostPreview
          image={onlinePost}
          heading={'We are online!'}
          text={
            'After many months of development, we can finally go online with Metal Detector in early 2021. Learn more about the initial features in this blog post.'
          }
        />
      </div>
      <Button className={classes['more-button']} variant="outlined" href={'https://blog.metal-detector.rocks'}>
        View More Posts
      </Button>
    </div>
  )
}

export default BlogPreview
