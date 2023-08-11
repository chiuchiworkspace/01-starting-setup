import React, { useState } from "react";
import "./LectureForm.css";

function LectureForm() {
  const [enteredTitle, setTitleChange] = React.useState("");
  const [enteredAmount, setAmountChange] = React.useState("");
  const [enteredDate, setDateChange] = React.useState("");

  // const [userInput, setUserInput] = React.useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  function titleChange(event) {
    setTitleChange(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   };
    // });
  }

  function amountChange(e) {
    setAmountChange(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // });
  }

  function dateChange(e) {
    setDateChange(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // });
  }

  function addLecture(e) {
    e.preventDefault();

    const lectureData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(lectureData);
    setTitleChange('');
    setAmountChange('');
    setDateChange('');
  }

  return (
    <form id="addLectureForm" onSubmit={addLecture}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChange}
          />
        </div>
      </div>
      <button type="submit">Add Lecture</button>
    </form>
  );
}

export default LectureForm;
