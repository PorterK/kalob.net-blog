import TwitterCard from "./twitter-card.png";

export default {
  title: "Senior Dev Teams",
  tags: ["brain dump"],
  spoiler: "What I've learned from working with lots of senior developers",
  cardImage: TwitterCard,
  getContent: () => import("./document.mdx"),
};
