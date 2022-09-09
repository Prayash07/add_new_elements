import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";

function ExpenseItem(params) {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={params.date} />
      <div className="expense-item__description">
        <h2>{params.title}</h2>
        <div className="expense-item__price">${params.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
