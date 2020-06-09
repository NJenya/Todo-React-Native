import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'

export default function App() {
	const [todos, setTodos] = useState([])

	const addTodo = (title) => {
		// 	const newTodo = {
		// 		id: Date.now(),
		// 		title: title,
		// 	}
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
		setTodos((prev) => prev.filter((el) => el.id !== id))
	}

	return (
		<View>
			<Navbar text={'Todo Native'} />
			<View style={styles.container}>
				<AddTodo addTodo={addTodo} />
				<FlatList
					data={todos}
					renderItem={({ item }) => (
						<Todo todo={item} deleteTodo={deleteTodo} />
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
				{/* <View>
					{todos.map((el) => (
						<Todo key={el.id} todo={el} />
					))}
				</View> */}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
})
