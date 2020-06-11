import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Alert } from 'react-native'
import { theme } from '../styles/theme'

export const EditModal = ({ showModal, hideModal, value, onSave }) => {
	const [title, setTitle] = useState(value)

	const saveHandler = () => {
		if (title.trim().length < 3) {
			Alert.alert('Error', 'Must be more letters')
		} else {
			onSave(title)
		}
	}

	return (
		<Modal visible={showModal} animationType="slide" transparent={false}>
			<View style={styles.wrap}>
				<TextInput
					value={title}
					onChangeText={setTitle}
					style={styles.input}
					placeholder="Enter todo"
					autoCorrect={false}
					autoCapitalize="none"
					maxLength={64}
				/>
				<View style={styles.buttons}>
					<Button
						title="Cancel"
						onPress={hideModal}
						color={theme.dangerColor}
					/>
					<Button
						title="Save"
						color={theme.lightBlueColor}
						onPress={saveHandler}
					/>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 10,
		borderBottomColor: theme.mainColor,
		borderBottomWidth: 2,
		width: '70%',
	},
	buttons: {
		paddingTop: 10,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})
