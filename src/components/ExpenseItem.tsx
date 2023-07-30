import "./ExpenseItem.css";
export default function ExpenseItem() {
	return (
		<div className="expense-item">
			<div>Date</div>{" "}
			<div className="expense-item__description">Title</div>
			<div className="expense-item__price">Amount</div>
		</div>
	);
}
