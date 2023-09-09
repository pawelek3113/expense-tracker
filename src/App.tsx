import "./variables.css";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
	return (
		<>
			<h1 className="title nowrap">Expense Tracker</h1>
			<ExpenseItem></ExpenseItem>
		</>
	);
}

export default App;
