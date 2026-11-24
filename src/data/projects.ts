// Edit the portfolio’s wording here. Sections follow the order of the site.
export const site = {
  name: "David Wong",
  header: {
    wordmark: "David Wong",
    wordmarkAccent: ".",
    homeLabel: "David Wong, home",
    skipLink: "Skip to content",
    navigationLabel: "Main navigation",
    projects: "Projects",
    experience: "Experience",
    contact: "Get in touch",
  },
  home: {
    pageTitle: "David Wong — Custom software",
    description: "I build custom software for the people doing the work. Explore Lineup Helper, qList, and my background in enterprise IT and application development.",
    intro: "I build custom software for businesses and professionals. I start with the people doing the work and the tools they wish they had.",
    projectsButton: "Explore my projects",
    projectsHeading: "Selected projects",
    storyLink: "Read project story",
  },
  experience: {
    heading: "Experience",
    intro: "At Intel, I built tools for people who needed access to hundreds of internal systems. At home, we wanted a better grocery list. Both projects started with listening.",
    entries: [
      {
        title: "Intel",
        text: "I developed security apps used by hundreds of thousands, led a team through major releases, and trained users and support teams worldwide. I also partnered with our largest customers to conceive and build user-friendly integrations of their software with our APIs and hardware features.",
      },
      {
        title: "NASA",
        text: "As an intern, I wrote software that helped aeronautics researchers run experiments and make new discoveries.",
      },
      {
        title: "Softball assistant coach",
        text: "I built tools to help my daughter's coaching staff manage game day substitutions and scout upcoming opponents.",
      },
      {
        title: "At home",
        text: "Building small tools to help our family and families like ours, including the qList app for quick shared lists.",
      },
      {
        title: "Education",
        text: "B.S. Computer Science Engineering, University of Michigan\nMBA, Drexel University",
      },
    ],
  },
  projectPage: {
    allProjects: "All projects",
    nextProject: "Next project",
  },
  footer: {
    heading: "What can software do \nfor your business?",
    invitation: "Tell me about a task you'd rather not do by hand or a software experience you know should be better. I’d like to hear how it works today.",
    contactLabel: "Get in touch on LinkedIn",
    contactUrl: "https://www.linkedin.com/in/wongd/",
    profileLabel: "GitHub",
    profileUrl: "https://github.com/da-vid",
  },
} as const;

export const projects = [
  {
    slug: "lineup-helper",
    title: "Lineup Helper",
    pageTitle: "Lineup Helper — David Wong",
    storyLinkLabel: "Read the Lineup Helper story",
    openButton: "Open Lineup Helper",
    url: "https://lineuphelper.com/",
    category: "Fastpitch softball",
    headline: "Getting more girls into the game.",
    intro: "A lineup and substitution tool for fastpitch coaches who want to give more players time on the field.",
    story: "I built Lineup Helper while coaching my daughter’s softball team. The coaching staff wanted to get more girls into the game. A substitution that looked simple from the dugout could affect our options later, and keeping the fastpitch rules straight took attention away from the players.",
    approach: "With Lineup Helper, we can start with the players available that day, build the batting order and defense, and check our substitutions against the rules. If you’d like to try it, load the sample roster and put together a starting lineup.",
    cover: "/images/pitcher.webp",
    image: "/images/live-game.webp",
    imageAlt: "Lineup Helper in the top of the second inning. Olivia is in left field, and Amelia has just replaced Lily in center field and the eighth batting slot.",
    caption: "Players come off the bench in the second inning of a sample game. Lineup Helper tracks player availability and usage and keeps the batting order and defense in sync.",
    tint: "#42336d",
  },
  {
    slug: "qlist",
    title: "qList",
    pageTitle: "qList — David Wong",
    storyLinkLabel: "Read the qList story",
    openButton: "Open qList",
    url: "https://qlist.cc/",
    category: "Shared lists",
    headline: "From sticky notes to one shared list.",
    intro: "A grocery list for our shopping trips that anyone in the family can update, even after someone has left for the grocery run.",
    story: "Our grocery list lived on sticky notes. I wanted anyone to be able to add what we needed and whoever went shopping to have the same list in hand.",
    approach: "I built qList to make errands an updates easy. Type an item, send the link, and everyone can work from the same list. Anyone can add one more thing while someone in the grocery aisle checks off what they’ve picked up.",
    cover: "/images/groceries.webp",
    image: "/images/grocery-run.webp",
    imageAlt: "A qList titled Saturday grocery run. Milk, eggs, and brown sugar are checked off. Coffee beans, lemons, rolled oats, and cinnamon sticks are still on the list.",
    caption: "Partway through a Saturday grocery run.",
    tint: "#33492f",
  },
] as const;

export type Project = (typeof projects)[number];
