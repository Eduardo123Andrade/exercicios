import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default class App extends Component {
	render() {
		return (
			<View style={style.container}>
				<Simples texto='I want you, my love'/>				
				<ParImpar numero={12}/>
				<Inverter texto='alguma coisa'/>
				<MegaSena numeros={10}/>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})