export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live: string;
  github: string;
  challenges: string;
  improvements: string;
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    description:
      "A modern market price web application that displays current product prices and price changes.",
    image: "/Bazar-dor.png",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    live: "https://bazar-dor-bazar.vercel.app/",
    github: "https://github.com/nurmohammad-dev/bazar-dor",
    challenges:
      "The main challenge was organizing changing market data into a clear interface while keeping the experience fast and easy to scan on small screens.",
    improvements:
      "Future plans include richer price history, notifications for price changes, and a more complete admin workflow for updating products.",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description:
      "A responsive weather application that provides weather information using a weather API.",
    image: "/weather-app.png",
    technologies: ["React.js", "Next.js", "API", "Tailwind CSS"],
    live: "https://weather-app-nur.vercel.app/",
    github: "https://github.com/nurmohammad-dev/Weather-App",
    challenges:
      "Handling asynchronous API states, location-based searches, and useful empty or error states was the core challenge.",
    improvements:
      "I would like to add multi-day forecasts, saved locations, weather alerts, and more detailed accessibility support.",
  },
  {
    slug: "bangla-news-24",
    title: "Bangla News 24",
    description:
      "A news website that provides the latest news and updates in the Bangla language.",
    image: "/Bangla-news-24.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://bangla-news-24-i.vercel.app/",
    github: "https://github.com/nurmohammad-dev/bangla-news-24",
    challenges:
      "Creating a readable content hierarchy for many news categories while preserving a responsive layout was the biggest design challenge.",
    improvements:
      "Potential improvements include a search experience, category filters, bookmarks, and a content management workflow.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
