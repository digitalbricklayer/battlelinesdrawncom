export const SITE = {
  website: "https://battlelinesdrawn.com/",
  author: "Battle Lines Drawn",
  profile: "https://battlelinesdrawn.com/about-us/",
  desc: "A tabletop wargaming blog focused on World War 2 gaming.",
  title: "Battle Lines Drawn",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
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
