import TwitterCard from './twitter-card.png';

export default {
  title: `Writing Web Apps in 2020`,
  tags: ['brain dump'],
  spoiler: "What I've learned in 2020 so far.",
  cardImage: TwitterCard,
  getContent: () => import('./document.mdx'),
}