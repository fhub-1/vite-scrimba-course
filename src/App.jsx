import Card from "./playground/card"


function App() {


  return (
    <div>
      <Card cardColor="red" height={300} width={500} />
      <Card cardColor="blue" />
      <Card cardColor="yellow" />
    </div>
  );
}

export default App
