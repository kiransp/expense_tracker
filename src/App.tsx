import { useState } from "react";
import Form from "./Form";
import Summary from "./Summary";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expense, setExpense] = useState([
    { id: 1, amount: 10, description: "ABC", category: "Grocerries" },
  ]);
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
