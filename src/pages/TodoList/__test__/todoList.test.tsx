import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import TodoList from "../TodoList";
import axios from "axios";

const renderTodoList = () => {
	render(<TodoList />);

	const Heading = () => screen.getByText("My Todo List");
	const CheckBox = () => screen.findByTestId("todo-1");

	return { Heading, CheckBox };
};

test("is done change", async () => {
	const { CheckBox } = renderTodoList();
	const checkbox: any = await CheckBox();

	const prevTodo = await axios.get("http://localhost:8080/todo/1");

	checkbox.click();

	await waitFor(async () => await CheckBox());

	expect(prevTodo.data.isDone).toBe(!checkbox.checked);
});
