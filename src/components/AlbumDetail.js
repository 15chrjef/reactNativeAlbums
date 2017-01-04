import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { url, title, artist, thumbnail_image, image } = album;
	const { 
		imageStyle, 
		headerTextStyle, 
		thumbnailContainerStyle, 
		headerContentStyle, 
		thumbnailStyle 
	} = styles; 
	return (
		<Card>
			<CardItem>
				<View style={thumbnailContainerStyle}>
					<Image 
						source={{ uri: thumbnail_image }} 
						style={thumbnailStyle}
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardItem>
			<CardItem>
				<Image 
					style={imageStyle}
					source={{ uri: image }} 
				/>
			</CardItem>
			<CardItem>
				<Button onPress={() => Linking.openURL(url)} >
					<Text>Buy Now!</Text>
				</Button>
			</CardItem>
		</Card>
	);
};


const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
