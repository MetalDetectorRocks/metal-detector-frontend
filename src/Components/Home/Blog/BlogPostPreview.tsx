import { Typography } from '@mui/material'
import classes from './BlogPostPreview.module.scss'

export type BlogPostPreviewProps = {
  image: string
  heading: string
  text: string
}

const BlogPostPreview = (props: BlogPostPreviewProps) => {
  return (
    <div className={classes['blog-post-preview']}>
      <img src={props.image} alt={props.heading} className={classes['blog-post-preview-image']} />
      <h2>{props.heading}</h2>
      <Typography>{props.text}</Typography>
    </div>
  )
}

export default BlogPostPreview
