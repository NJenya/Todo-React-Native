import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = ({ text }) => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		backgroundColor: '#3949ab',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10,
	},
	text: {
		color: 'white',
	},
})
