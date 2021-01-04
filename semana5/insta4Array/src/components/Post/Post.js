import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarBranco from '../../img/salvarBranco.svg'
import iconeSalvarPreto from '../../img/salvarPreto.svg'
import iconeCompartilhar from '../../img/compartilhar.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhando } from '../SecaoCompartilhando/SecaoCompartilhando'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false,
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: true
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
        curtido: false
      })
    }
  }

  onClickCompartilhando = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    if (this.state.salvo) {
      this.setState({
        salvo: false
      })
    } else {
      this.setState({
        salvo: true
      })
    }
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  render() {
    let iconeSalvar
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }



    if (this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let componenteCompartilhando

    if (this.state.compartilhando) {
      componenteCompartilhando = <SecaoCompartilhando />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhando}
    </div>
  }
}

export default Post