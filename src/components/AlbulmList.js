import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbulmList extends React.Component {
	state = { albums: [] };
	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(data => this.setState({ albums: data.data }));
	}
	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail album={album} key={album.title} /> 
		);
	}
	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}
