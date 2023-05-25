import Header from "./Header/Header";

import classes from "./App.module.css";
import Timeline from "./Timeline/Timeline";

function App() {
  return (
    <div className={classes.root}>
      <Header subheader={"Senior Frontend Engineer"}>Rob Costello</Header>

      <Timeline items={[{ title: "Infogrid: Senior Frontend Engineer" }]} />
    </div>
  );
}

export default App;
