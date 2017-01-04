import React from 'react';
import { View } from 'react-native';


const CardItem = (props) => (
	<View style={styles.containerStyle}>
		{props.children}
	</View>
);

export default CardItem;

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};
