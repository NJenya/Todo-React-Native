import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ todos, addTodo, deleteTodo, openTodo }) => {
	return (
		<View>
			<AddTodo addTodo={addTodo} />
			<FlatList
				data={todos}
				renderItem={({ item }) => (
					<Todo todo={item} deleteTodo={deleteTodo} openTodo={openTodo} />
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
