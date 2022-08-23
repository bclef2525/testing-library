import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export interface Todo {
	id: string;
	content: string;
	isDone: boolean;
}

function TodoList() {
	const [todos, setTodos] = useState<
		| false
		| null
		| {
				id: string;
				content: string;
				isDone: boolean;
		  }[]
	>();

	const ChangeIsDone = async (todo: Todo) => {
		return await axios.put(`http://localhost:8080/todo/${todo.id}`, {
			...todo,
			isDone: !todo.isDone,
		});
	};

	useEffect(() => {
		const getTodo = () => {
			axios
				.get("http://localhost:8080/todo")
				.then((response) => setTodos(response.data));
		};
		getTodo();
	}, []);

	return (
		<Wrapper>
			<h1>My Todo List</h1>
			<TodoListBox>
				{todos &&
					todos.map((todo: Todo) => (
						<TodoWrapper key={todo.id}>
							<Todo>{todo.content}</Todo>
							<input
								data-testid={`todo-${todo.id}`}
								id="check-box-123"
								type="checkbox"
								name="checkbox"
								defaultChecked={todo.isDone}
								onClick={() => ChangeIsDone(todo)}
							></input>
						</TodoWrapper>
					))}
			</TodoListBox>
		</Wrapper>
	);
}

export default TodoList;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TodoListBox = styled.ul`
	border: 1px solid black;
	width: 70%;
`;

const TodoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 20px 0 10px;
`;

const Todo = styled.li`
	height: 60px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
const CheckBox = styled.input``;
