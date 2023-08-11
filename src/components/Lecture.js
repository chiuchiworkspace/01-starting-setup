import LectureClass from "./LectureClass";
import "./Lecture.css";

function Lecture(props) {
  return (
    <div className="expenses">
      <LectureClass
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></LectureClass>
      <LectureClass
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></LectureClass>
      <LectureClass
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></LectureClass>
    </div>
  );
}

export default Lecture;
