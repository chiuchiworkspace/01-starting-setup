import Lecture from "./components/Lecture";
import NewLecture from "./NewLecture/NewLecture";

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
      <NewLecture />
      <Lecture data={data}/>
    </div>
  );
}

export default App;
