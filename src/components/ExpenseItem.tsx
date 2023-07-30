import "./ExpenseItem.css";
export default function ExpenseItem() {
	const expenseDate = new Date(2023, 2, 28);
	const expenseTitle = "Car insurance";
	const expenseAmount = 234.67;

	return (
		<div className="expense-item">
			<div>{expenseDate.toDateString()}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseAmount}</div>
			</div>
		</div>
	);
}
