import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>

      <div className="flex justify-between">
    <GreetingCards title={"Celebrating You!"} message={"Hope your special day is filled with love, laughter, and joy!"}/>
      <GreetingCards title={"Happy Birthday Wishes!"} message={"Wishing you a day as amazing as you are!"}/>
      <GreetingCards title={"Cheers to Your Day!"} message={"May your birthday be full of happiness and unforgettable moments!"}/>
      </div>
      
    </div>
  );
};

export default App;
