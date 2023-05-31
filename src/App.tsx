import {
  SiAdobe,
  SiCss3,
  SiD3Dotjs,
  SiDocker,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMysql,
  SiOpenlayers,
  SiPhp,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTestinglibrary,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

import { LuClapperboard } from "react-icons/lu";

const EMPLOYMENT = [
  {
    id: "infogrid",
    title: "Infogrid: Senior Frontend Engineer",
    date: { start: "Feb 2022", end: "Current" },
    description:
      "Infogrid is an IoT platform for monitoring building performance with a particular focus on ESG.",
    achievements: [
      "Took a lead role in planning and implementing new core features for the App.",
      "Developed and led initiative to reduce size and complexity of API requests within team domain, resulting in 2.5x speed improvement.",
      "Migrated significant portions of the frontend codebase to Typescript.",
      "Led uptake of Fullstory within engineering to aid in gathering metrics and qualitative feedback.",
      "Implemented custom Sentry session replay integration to speed bug triage and resolution.",
      "Gained insights into domain-driven development, monorepo strategies and other approaches to parallel development in a large team.",
    ],
    skills: [
      {
        name: "React",
        icon: <SiReact aria-label="React" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript aria-label="Typescript" />,
      },
      {
        name: "Redux",
        icon: <SiRedux aria-label="Redux" />,
      },
      {
        name: "React Query",
        icon: <SiReactquery aria-label="React Query" />,
      },
      {
        name: "Jest",
        icon: <SiJest aria-label="Jest" />,
      },
      {
        name: "React Testing Library",
        icon: <SiTestinglibrary aria-label="React Testing Library" />,
      },
      {
        name: "Storybook",
        icon: <SiStorybook aria-label="Storybook" />,
      },
      {
        name: "Gitlab",
        icon: <SiGitlab aria-label="Gitlab" />,
      },
      {
        name: "OpenLayers",
        icon: <SiOpenlayers aria-label="OpenLayers" />,
      },
      {
        name: "ThreeJS",
        icon: <SiThreedotjs aria-label="ThreeJS" />,
      },
    ],
  },
  {
    id: "decibel",
    title: "Decibel/Medallia: Lead Frontend Engineer",
    date: { start: "Oct 2019", end: "Jan 2022" },
    description:
      "Decibel is a digital customer experience platform used by major brands in travel, retail and B2C SaaS. Decibel was acquired by Medallia in March 2021.",
    achievements: [
      "Led the migration of the existing Backbone customer portal to modern React and Typescript.",
      "Developed new features and advised on cross-department initiatives.",
      "Senior position in 4-5 person front-end squad in the Portal team. Duties included recruitment, mentorship, pair programming, research and facilitating team discussions.",
      "Led development of best practice documentation and helped automate it with linting processes and templating.",
    ],
    expandedOffset: -15,
    skills: [
      {
        name: "React",
        icon: <SiReact aria-label="React" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript aria-label="Typescript" />,
      },
      {
        name: "Redux",
        icon: <SiRedux aria-label="Redux" />,
      },
      {
        name: "React Query",
        icon: <SiReactquery aria-label="React Query" />,
      },
      {
        name: "Jest",
        icon: <SiJest aria-label="Jest" />,
      },
      {
        name: "React Testing Library",
        icon: <SiTestinglibrary aria-label="React Testing Library" />,
      },
      {
        name: "Storybook",
        icon: <SiStorybook aria-label="Storybook" />,
      },
      {
        name: "Gitlab",
        icon: <SiGitlab aria-label="Gitlab" />,
      },
      {
        name: "D3",
        icon: <SiD3Dotjs aria-label="D3" />,
      },
    ],
  },
  {
    id: "freelance",
    title: "Freelance Full Stack Developer",
    date: { start: "Jan 2017", end: "Oct 2019" },
    achievements: [
      "Continued in a contractor role with Wired Canvas, primarily focussing on their client weAdapt - an international climate adaptation network.",
      "Worked with Studio Parallel (agency) and the charity Pen International.",
      "Built and supported ongoing development of websites and webapps, using React, Wordpress, Drupal and Craft CMS.",
      "Developed Drupal and Wordpress plugins.",
    ],
    expandedOffset: -10,
    skills: [
      {
        name: "React",
        icon: <SiReact aria-label="React" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript aria-label="JavaScript" />,
      },
      {
        name: "Sass",
        icon: <SiSass aria-label="Sass" />,
      },
      {
        name: "PHP",
        icon: <SiPhp aria-label="PHP" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql aria-label="MySQL" />,
      },
      {
        name: "Docker",
        icon: <SiDocker aria-label="Docker" />,
      },
    ],
  },
  {
    id: "wiredcanvas",
    title: "Wired Canvas: Lead Developer",
    date: { start: "Mar 2013", end: "Sep 2016" },
    description:
      "Wired Canvas is an agency specialising in design and development for charities, ethical business and the arts. ",
    achievements: [
      "Built and supported ongoing development of websites, using React headless CMS implementations, Wordpress and Drupal.",
      "Developed extensive “Vanilla” theme templates in both Wordpress and Drupal  to help speed up development of new sites, including custom admin UIs in CMS.",
      "Liaised directly with clients, pitched for new business and managed external contractors.",
    ],
    expandedOffset: 3,
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript aria-label="JavaScript" />,
      },
      {
        name: "jQuery",
        icon: <SiJquery aria-label="jQuery" />,
      },
      {
        name: "Sass",
        icon: <SiSass aria-label="Sass" />,
      },
      {
        name: "PHP",
        icon: <SiPhp aria-label="PHP" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql aria-label="MySQL" />,
      },
      {
        name: "React",
        icon: <SiReact aria-label="React" />,
      },
    ],
  },
];

const EDUCATION = [
  {
    id: "university",
    title: "BA (Hons) Fine Art: Media",
    description: "National College of Art and Design, Dublin",
    stub: true,
    skills: [
      {
        name: "Abobe Suite",
        icon: <SiAdobe aria-label="Adobe Suite" />,
      },
      {
        name: "Final Cut Pro",
        icon: <LuClapperboard aria-label="Final Cut Pro" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 aria-label="HTML" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 aria-label="CSS" />,
      },
    ],
  },
  {
    id: "school",
    title: "Honours Leaving Certificate",
    description: "Gonzaga College, Dublin",
    expandedOffset: -1.5,
    stub: true,
  },
];

import Header from "./Header/Header";
import Timeline from "./Timeline";
import Background from "./Background";

import classes from "./App.module.css";

function App() {
  return (
    <>
      <div className={classes.background}>
        <Background key={Math.random()} />
      </div>

      <div className={classes.root}>
        <Header
          subheader={
            "Senior Frontend Engineer • robcostello1@gmail.com • 075987798661"
          }
        >
          Rob Costello
        </Header>

        <h2 className="center">Selected Employment</h2>
        <Timeline items={EMPLOYMENT} />

        <h2 className="center">Education</h2>
        <Timeline items={EDUCATION} />
      </div>
    </>
  );
}

export default App;
