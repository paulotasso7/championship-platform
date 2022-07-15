import { useEffect } from "react";

import Home from "./pages/home/Home";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(" https://mtgmelee.com", {
      method: "GET",
      headers: {
        "Content-Type": "application / json",
      },
    })
      .then((r) => r.json())
      .then((r) => console.log(r))
      .catch((e) => console.log("eeeeeeeeerr ~>", e));
  });

  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
