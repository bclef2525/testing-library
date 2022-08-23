import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("COUNTER_DOM_TEST", () => {
	test("rendering header with test of My Counter", () => {
		// GIVEN
		render(<Counter />);
		const headingEl = screen.getByTestId("header");
		// THEN
		expect(headingEl.textContent).toBe("My Counter");
	});

	test("counter initailly start with test of 0", () => {
		// GIVEN
		render(<Counter />);
		const counterEl = screen.getByTestId("counter");
		// THEN
		expect(counterEl.textContent).toBe("0");
	});

	test("input contains initial value of 1", () => {
		// GIVEN
		render(<Counter />);
		const inputEl: HTMLInputElement = screen.getByTestId("input");
		// THEN
		expect(inputEl.value).toBe("1");
	});

	test("add button renders with +", () => {
		// GIVEN
		render(<Counter />);
		const addButton = screen.getByTestId("plus-button");
		// THEN
		expect(addButton.textContent).toBe("+");
	});

	test("add button renders with -", () => {
		// GIVEN
		render(<Counter />);
		const addButton = screen.getByTestId("minus-button");
		//THEN
		expect(addButton.textContent).toBe("-");
	});

	test("change value of input works correctly", () => {
		// GIVEN
		render(<Counter />);
		const inputEl: HTMLInputElement = screen.getByTestId("input");
		// WHEN
		fireEvent.change(inputEl, { target: { value: "5" } });
		// THEN
		expect(inputEl.value).toBe("5");
	});

	test("click on plus button adds 1 to counter", () => {
		// GIVEN
		render(<Counter />);
		const buttonEl = screen.getByTestId("plus-button");
		const counterEl = screen.getByTestId("counter");
		// WHEN
		fireEvent.click(buttonEl);
		// THEN
		expect(counterEl.textContent).toBe("1");
	});

	test("click on minus button minus 1 to counter", () => {
		// GIVEN
		render(<Counter />);
		const buttonEl = screen.getByTestId("minus-button");
		const counterEl = screen.getByTestId("counter");
		// WHEN
		fireEvent.click(buttonEl);
		// THEN
		expect(counterEl.textContent).toBe("-1");
	});

	test("changing input value then clicking on plus button works correctly", () => {
		// GIVEN
		render(<Counter />);
		const minusButtonEl = screen.getByTestId("plus-button");
		const counterEl = screen.getByTestId("counter");
		const inputEl = screen.getByTestId("input");
		// WHEN
		fireEvent.change(inputEl, { target: { value: 5 } });
		fireEvent.click(minusButtonEl);
		// THEN
		expect(counterEl.textContent).toBe("5");
	});

	test("changing input value then clicking on minus button works correctly", () => {
		// GIVEN
		render(<Counter />);
		const minusButtonEl = screen.getByTestId("minus-button");
		const counterEl = screen.getByTestId("counter");
		const inputEl = screen.getByTestId("input");
		// WHEN
		fireEvent.change(inputEl, { target: { value: 5 } });
		fireEvent.click(minusButtonEl);
		// THEN
		expect(counterEl.textContent).toBe("-5");
	});

	test("adding and then minus leads to the correct counter number", () => {
		// GIVEN
		render(<Counter />);
		const minusButtonEl = screen.getByTestId("minus-button");
		const counterEl = screen.getByTestId("counter");
		const inputEl = screen.getByTestId("input");
		// WHEN
		fireEvent.change(inputEl, { target: { value: 5 } });
		fireEvent.click(minusButtonEl);
		fireEvent.click(minusButtonEl);
		fireEvent.click(minusButtonEl);
		fireEvent.click(minusButtonEl);

		// THEN
		expect(counterEl.textContent).toBe("-20");
	});

	test("adding and then plus leads to the correct counter number", () => {
		//GIVEN
		render(<Counter />);
		const plusButtonEl = screen.getByTestId("plus-button");
		const counterEl = screen.getByTestId("counter");
		const inputEl = screen.getByTestId("input");
		// WHEN
		fireEvent.change(inputEl, { target: { value: 5 } });
		fireEvent.click(plusButtonEl);
		fireEvent.click(plusButtonEl);
		fireEvent.click(plusButtonEl);
		fireEvent.click(plusButtonEl);
		// THEN
		expect(counterEl.textContent).toBe("20");
	});
});

describe("COUNTER_FN_TEST", () => {});
