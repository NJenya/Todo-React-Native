import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { theme } from '../styles/theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ todo, backToMainScreen, deleteTodo, onSave }) => {
	const [showModal, setShowModal] = useState(false)

	const saveHandler = (title) => {
		onSave(todo.id, title)
		setShowModal(false)
	}

	return (
		<View>
			<EditModal
				showModal={showModal}
				hideModal={() => setShowModal(false)}
				value={todo.title}
				onSave={saveHandler}
			/>
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<Button title="Edit" onPress={() => setShowModal(true)} />
			</AppCard>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button
						title="Back"
						onPress={backToMainScreen}
						style={theme.lightBlueColor}
					/>
				</View>
				<View style={styles.button}>
					<Button
						title="Delete"
						color={theme.dangerColor}
						onPress={() => deleteTodo(todo.id)}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: '40%',
	},
	card: {
		marginBottom: 20,
	},
})
