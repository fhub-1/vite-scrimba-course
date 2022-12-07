import React from "react";
import Card from "./playground/card";
import RoundedImg from "./playground/defaultsProps&Types";

function App() {
  return (
    // <div>
    //   <Card cardColor="red" height={200} width={200} />
    //   <Card cardColor="red" height={200} width={200} />
    //   <Card cardColor="purple" height={200} width={200} />
    // </div>
    <div>
      <RoundedImg
        src="https://picsum.photos/id/237/300/300"
        // borderRadius="10px" // or
        // borderRadius={'10'}
      />
    </div>
  );
}

export default App;
