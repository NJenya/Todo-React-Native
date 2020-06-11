import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { theme } from '../styles/theme'

export const AddTodo = ({ addTodo }) => {
	const [value, setValue] = useState('')

	const pressHandler = () => {
		if (value.length !== 0) {
			addTodo(value)
			setValue('')
		} else {
			Alert.alert('Enter you todo...')
		}
	}

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setValue(text)}
				placeholder="Enter todo..."
				value={value}
				autoCorrect={false}
			/>
			<Button style={styles.button} title="Add" onPress={pressHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	input: {
		width: '75%',
		borderBottomWidth: 2,
		borderBottomColor: theme.mainColor,
		padding: 5,
	},
})
