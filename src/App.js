import Lecture from "./components/Lecture";

function App() {
  const data = [
    {
      title: "Math",
      amount: 123,
      date: new Date(4,12,2000)
    },
    {
      title: "Scienceee",
      amount: 300,
      date: new Date(4,12,2010)
    },
    {
      title: "Math",
      amount: 123,
      date: new Date(4,12,2020)
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Lecture data={data}/>
    </div>
  );
}

export default App;
