import React, { useState } from "react";

export default function Counter() {
	const [counterValue, setCounterValue] = useState<number>(0);
	const [inputValue, setInputValue] = useState<number>(1);

	const plusToCounter = () => {
		setCounterValue(counterValue + inputValue);
	};

	const minusToCounter = () => {
		setCounterValue(counterValue - inputValue);
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h1 data-testid="header">My Counter</h1>
			<h2 data-testid="counter">{counterValue}</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<button
					data-testid="minus-button"
					style={{ width: "50px", height: "50px" }}
					onClick={minusToCounter}
				>
					-
				</button>
				<input
					data-testid="input"
					type="number"
					defaultValue={inputValue}
					style={{ textAlign: "center" }}
					onChange={(event) => setInputValue(Number(event.target.value))}
				></input>
				<button
					data-testid="plus-button"
					style={{ width: "50px", height: "50px" }}
					onClick={plusToCounter}
				>
					+
				</button>
			</div>
		</div>
	);
}
