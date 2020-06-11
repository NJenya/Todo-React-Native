import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
	const [todoId, setTodoId] = useState(null)
	const [todos, setTodos] = useState([
		{ id: '1', title: 'Learn React Native' },
		{ id: '2', title: 'Create React Native App' },
	])

	const addTodo = (title) => {
		setTodos((prev) => {
			return [
				{
					id: Date.now().toString(),
					title,
				},
				...prev,
			]
		})
	}

	const deleteTodo = (id) => {
		const todo = todos.find((t) => t.id === id)
		Alert.alert(
			'Attention',
			`Delete "${todo.title}"?`,
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'OK',
					onPress: () => {
						setTodoId(null)
						setTodos((prev) => prev.filter((el) => el.id !== id))
					},
				},
			],
			{ cancelable: false }
		)
		// setTodos((prev) => prev.filter((el) => el.id !== id))
	}

	const openTodo = (id) => {
		setTodoId(id)
	}

	const updateTodo = (id, title) => {
		setTodos((old) =>
			old.map((todo) => {
				if (todo.id === id) {
					todo.title = title
				}
				return todo
			})
		)
	}

	let content = (
		<MainScreen
			todos={todos}
			addTodo={addTodo}
			deleteTodo={deleteTodo}
			openTodo={openTodo}
		/>
	)

	if (todoId) {
		const selectedTodo = todos.find((todo) => todo.id === todoId)
		content = (
			<TodoScreen
				backToMainScreen={() => setTodoId(null)}
				todo={selectedTodo}
				deleteTodo={deleteTodo}
				onSave={updateTodo}
			/>
		)
	}

	return (
		<View>
			<Navbar text={'Todo Native'} />
			<View style={styles.container}>{content}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
})
