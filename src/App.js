import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/Card";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import Upload from "./Component/Upload";

function App() {
  const { height, width } = useWindowSize();
  const [b1, setb1] = useState(false);
  const [n, setn] = useState(false);

  console.log({ b1 });
  return (
    <div className="App">
      {!n ? <Card b1={b1} setb1={setb1} setn={setn} n={n} /> : <Upload />}

      {!n && <Confetti width={width} height={height} />}
    </div>
  );
}

export default App;
