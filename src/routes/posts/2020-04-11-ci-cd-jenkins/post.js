import TwitterCard from './twitter-card.png';

export default {
  title: `Automating Deployment with Travis CI`,
  tags: ['dev ops', 'ci/cd'],
  spoiler: "Automating deployments on Github with Travis CI",
  cardImage: TwitterCard,
  getContent: () => import('./document.mdx'),
}