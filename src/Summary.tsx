import { FormEvent, useState } from "react";
import categories from "./Categories";
import { Expense } from "./Types";
// first define expense type by giving its definition
// interface Expense {
//   id: number;
//   category: string;
//   amount: number;
//   description: string;
// }
interface SummaryProps {
  expenses: Expense[];
  handleDelete: (id: number) => void;
  handleFiltering: (category: string) => void;
}

function Summary({ expenses, handleDelete, handleFiltering }: SummaryProps) {
  let total = 0;
  expenses.map((item) => (total = total + item.amount));
  if (expenses.length === 0) return null;
  return (
    <>
      <h2>Summary of expenses</h2>
      <select
        id="category"
        className="form-select"
        onChange={(event) => handleFiltering(event.target.value)}
      >
        <option value=""></option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <table className="table border mt-3 ">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses &&
            expenses.map((item, index) => (
              <tr key={index}>
                <th className="fw-normal">{item.description}</th>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          <tr>
            <th className="text-danger fw-bold">Total</th>
            <td className="text-danger fw-bold">{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Summary;
