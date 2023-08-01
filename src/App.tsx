import { useState } from "react";
import Form from "./Form";
import Summary from "./Summary";
import { Expense } from "./Types";
// interface Expense {
//   id: number;
//   category: string;
//   amount: number;
//   description: string;
// }
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expense, setExpense] = useState<Expense[]>([]);
  const handleExpense = (data: any) => {
    setExpense([...expense, { ...data, id: expense.length + 1 }]);
  };

  const filteredExpensesList =
    selectedCategory !== ""
      ? expense.filter((item) => item.category === selectedCategory)
      : expense;

  return (
    <div className="App">
      <Form handleExpense={handleExpense} />
      <Summary
        expenses={filteredExpensesList}
        handleDelete={(id) =>
          setExpense(expense.filter((item) => id !== item.id))
        }
        handleFiltering={(category) => setSelectedCategory(category)}
      />
    </div>
  );
}

export default App;
