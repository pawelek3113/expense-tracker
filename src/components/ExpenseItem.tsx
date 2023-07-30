import "./ExpenseItem.css";
export default function ExpenseItem() {
	const expenseDate: Date = new Date(2023, 2, 28);
	const expenseTitle: string = "Car insurance";
	const expenseAmount: number = 234.67;

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
