import TwitterCard from './twitter-card.png';

export default {
  title: 'Cache your images!',
  tags: ['dev ops', 'backend', 'frontend'],
  spoiler: 'Going from signed S3 URLs to CloudFront',
  cardImage: TwitterCard,
  getContent: () => import('./document.mdx'),
}
