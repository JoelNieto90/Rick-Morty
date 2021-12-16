import { React, useEffect, useState } from "react";
import getDataFromAPI from "../services/getDataEpisodes";

const Episodes = () => {
  const [epis, setEpis] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setEpis(data);
    });
  }, []);
  return (
    <div className="Episodes">
      <p>Episodes</p>
      {console.log(epis)}
    </div>
  )
}

export default Episodes;