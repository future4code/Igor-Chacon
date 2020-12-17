import React, {Component} from 'react'
import './SecaoCompartilhando.css'


export class SecaoCompartilhando extends Component {
	state = {
		comentario: "",
		icone: '../../img/facebook.svg',
		facebook: "Facebook",
		instagram: "Instagram",
		twitter: "Twitter",
		enviadoPara: ""
	}

	aoEnviarCompartilhamento = (event) => {
		if(event.target.value == "Facebook") {
			console.log(`Enviado para o Facebook`)
		} else if (event.target.value == "Instagram") {
			console.log(`Enviado para o Instagram`)
		} else if (event.target.value == "Twitter") {
			console.log(`Enviado para o Twitter`)
		}
	}

	render() {
		return <div className={'comment-container'}>
			<button value={this.state.facebook} onClick={this.aoEnviarCompartilhamento}>Facebook</button>
			<button value={this.state.twitter} onClick={this.aoEnviarCompartilhamento}>Twitter</button>
			<button value={this.state.instagram} onClick={this.aoEnviarCompartilhamento}>Instagram</button>
		</div>
	}
}