import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, deleteTodo, openTodo }) => {
	return (
		<TouchableOpacity
			onPress={() => openTodo(todo.id)}
			onLongPress={() => deleteTodo(todo.id)}
		>
			<View style={styles.todo}>
				<Text>{todo.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10,
	},
})
