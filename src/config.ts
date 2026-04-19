export const SITE = {
  website: "https://battlelinesdrawn.com/",
  author: "Jack Hughes",
  profile: "https://battlelinesdrawn.com/about-us/",
  desc: "A tabletop wargaming blog covering World War 2 historical gaming — battle reports, painted armies, project logs, ruleset reviews, and miniature supplier guides.",
  title: "Battle Lines Drawn",
  ogImage: "og-image.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en-GB",
  timezone: "Europe/London",
} as const;
