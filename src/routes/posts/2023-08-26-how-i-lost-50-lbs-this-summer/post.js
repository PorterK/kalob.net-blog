import TwitterCard from "./twitter-card.png";

export default {
  title: "How I Lost 50lbs This Summer",
  tags: ["brain dump"],
  spoiler: "My experience dropping my weight by more than 50 lbs this summer",
  cardImage: TwitterCard,
  getContent: () => import("./document.mdx"),
};
