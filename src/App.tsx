import "./App.css";
import Header from "./components/Header";
import Actus from "./components/Actus";
import News from "./news.json";

import React from "react";
import { useState } from "react";


function App() {
  const news = Object.entries(News.news)
  const [data, setData] = useState(news);

  return (
      <div className="App">
      <Header></Header>  
      <Actus data={data} setData={setData}></Actus>
    </div>
  );
}

export default App;
