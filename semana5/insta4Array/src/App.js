import React from 'react'; 
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    postagens: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'igunho',
        fotoUsuario: 'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-1/p240x240/26112376_10211218662163680_6490673183450327913_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEK4cuM3qqfv9iCln8UPft03UUjnGmo_UHdRSOcaaj9QZ5WFOXGFhZOB2aVu0jQtKQ&_nc_ohc=NDoMEA-ESuoAX8PnNjH&_nc_ht=scontent.frao1-1.fna&tp=6&oh=0210e117f46f92ba7d17e2bbd0712457&oe=5FFF7A57',
        fotoPost: 'https://scontent.frao1-2.fna.fbcdn.net/v/t31.0-8/29744548_1913676401976121_5003337817227260675_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH8d8wpJigIV86NCb1JZ0YeLZ0Fo6HgMEwtnQWjoeAwTJdOOJJ8ICDj299ofGt3xyw&_nc_ohc=eVgLo6sRO40AX-Svs8H&_nc_ht=scontent.frao1-2.fna&oh=a1d316cd17ee5fecff5b4a414e46abea&oe=6000D765'
      },

      {
        nomeUsuario: 'gessiquinha',
        fotoUsuario: 'https://scontent.frao1-2.fna.fbcdn.net/v/t31.0-8/29744548_1913676401976121_5003337817227260675_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH8d8wpJigIV86NCb1JZ0YeLZ0Fo6HgMEwtnQWjoeAwTJdOOJJ8ICDj299ofGt3xyw&_nc_ohc=eVgLo6sRO40AX-Svs8H&_nc_ht=scontent.frao1-2.fna&oh=a1d316cd17ee5fecff5b4a414e46abea&oe=6000D765',
        fotoPost: 'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-1/p240x240/26112376_10211218662163680_6490673183450327913_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEK4cuM3qqfv9iCln8UPft03UUjnGmo_UHdRSOcaaj9QZ5WFOXGFhZOB2aVu0jQtKQ&_nc_ohc=NDoMEA-ESuoAX8PnNjH&_nc_ht=scontent.frao1-1.fna&tp=6&oh=0210e117f46f92ba7d17e2bbd0712457&oe=5FFF7A57'
      },
    ],
    valorInputNomeUsuario: "",
    valorInputURLFotoPerfil: "",
    valorInputURLFotoPost: "",
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputURLFotoPerfil,
      fotoPost: this.state.valorInputURLFotoPost,
    }

    const novoArray = [...this.state.postagens, novoPost]

    this.setState({ postagens: novoArray })

  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputURLFotoPerfil = (event) => {
    this.setState({ valorInputURLFotoPerfil: event.target.value })
  }

  onChangeInputURLFotoPost = (event) => {
    this.setState({ valorInputURLFotoPost: event.target.value })
  }

  render() {
    const postagensComponentes = this.state.postagens.map((item) => {
      return <Post
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
    })

    return (
      <div className={'app-container'}>

        <div>{postagensComponentes}</div>

        <p>Novo Post:</p>
        <div>
          <div>
            <input
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nome Usuário"}
            />
          </div>

          <div>
            <input
              value={this.state.valorInputURLFotoPerfil}
              onChange={this.onChangeInputURLFotoPerfil}
              placeholder={"URL foto do perfil"}
            />
          </div>

          <div>

            <input
              value={this.state.valorInputURLFotoPost}
              onChange={this.onChangeInputURLFotoPost}
              placeholder={"URL foto da postagem"}
            />
          </div>

          <button onClick={this.adicionarPost}>Add Post</button>
        </div>
      </div>
    );
  }
}

export default App;
