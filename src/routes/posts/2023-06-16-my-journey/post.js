import TwitterCard from "./twitter-card.png";

export default {
  title: "My Journey to Software Engineer",
  tags: ["brain dump"],
  spoiler: "How I got to where I am today",
  cardImage: TwitterCard,
  getContent: () => import("./document.mdx"),
};
