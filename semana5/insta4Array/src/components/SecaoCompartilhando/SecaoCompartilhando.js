import React, {Component} from 'react'
import './SecaoCompartilhando.css'

export class SecaoCompartilhando extends Component {
	state = {
		comentario: "",
		facebook: "Facebook",
		instagram: "Instagram",
		twitter: "Twitter",
		enviadoPara: "",
	}

	onChangeComentario = (event) => {
		this.setState({ comentario: event.target.value })
	}

	aoEnviarCompartilhamento = (event) => {
		this.setState({ comentario: event.target.valueComentario })
		if(event.target.value == "Facebook") {
			console.log(`Enviado para o Facebook com a mensagem: ${this.state.comentario}`)
		} else if (event.target.value == "Instagram") {
			console.log(`Enviado para o Instagram com a mensagem: ${this.state.comentario}`)
		} else if (event.target.value == "Twitter") {
			console.log(`Enviado para o Twitter com a mensagem: ${this.state.comentario}`)
		}
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comente seu compartilhamento'}
				valueComentario={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button value={this.state.facebook} onClick={this.aoEnviarCompartilhamento}>Facebook</button>
			<button value={this.state.twitter} onClick={this.aoEnviarCompartilhamento}>Twitter</button>
			<button value={this.state.instagram} onClick={this.aoEnviarCompartilhamento}>Instagram</button>

		</div>
	}
}
