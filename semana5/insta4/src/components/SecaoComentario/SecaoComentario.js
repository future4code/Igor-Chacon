import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentario: "",
	}

	onChangeComentario = (event) => {
		this.setState({comentario: event.target.value})
	}

	aoEnviar = () => {
		console.log(this.state.comentario)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comente aqui'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.aoEnviar}>Enviar</button>
		</div>
	}
}
