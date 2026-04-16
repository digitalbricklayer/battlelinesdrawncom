export const SITE = {
  website: "https://battlelinesdrawn.com/",
  author: "Jack Hughes",
  profile: "https://battlelinesdrawn.com/about-us/",
  desc: "The Battle Lines Drawn blog is the online workspace of Jack Hughes to keep all of his wargaming thoughts and resources in a single silo for later reference.",
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
