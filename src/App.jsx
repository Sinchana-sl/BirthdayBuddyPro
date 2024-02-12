import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  const handleOnclick = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3 style={{textAlign:"center"}}>{people.length} Birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={handleOnclick}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
