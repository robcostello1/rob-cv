import Header from "./Header/Header";

import classes from "./App.module.css";
import Timeline from "./Timeline/Timeline";

function App() {
  return (
    <div className={classes.root}>
      <Header subheader={"Senior Frontend Engineer"}>Rob Costello</Header>

      <Timeline
        items={[
          {
            id: "infogrid",
            title: "Infogrid: Senior Frontend Engineer",
            date: { start: "Feb 2022", end: "Current" },
            description:
              "Infogrid is an IoT platform for monitoring building performance with a particular focus on ESG.",
          },
          {
            id: "decibel",
            title: "Decibel/Medallia: Lead Frontend Engineer",
            date: { start: "Oct 2019", end: "Jan 2022" },
            description:
              "Decibel is a digital customer experience platform used by major brands in travel, retail and B2C SaaS. Decibel was acquired by Medallia in March 2021.",
          },
          {
            id: "freelance",
            title: "Freelance Full Stack Developer",
            date: { start: "Jan 2017", end: "Oct 2019" },
          },
          {
            id: "wiredcanvas",
            title: "Wired Canvas: Lead Developer",
            date: { start: "Mar 2013", end: "Sep 2016" },
            description:
              "Wired Canvas is an agency specialising in design and development for charities, ethical business and the arts. ",
          },
        ]}
      />
    </div>
  );
}

export default App;
