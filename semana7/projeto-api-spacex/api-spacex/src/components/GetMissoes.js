import React from 'react';
import axios from "axios";
import 'C:/Users/iguvi/Desktop/Igor-Chacon/semana7/projeto-api-spacex/api-spacex/src/App.css';



export class GetMissoes extends React.Component {

    // https://api.spacexdata.com/v3/missions

    state = {
        missoes: [],
        missao: '',
        mission_id: '',
        etapa: 1,
    }

    componentDidMount = () => {
        this.pegarMissoes()
    }

    pegarMissoes = async () => {
        try {
            const res = await axios
                .get(
                    'https://api.spacexdata.com/v3/missions',
                )
            this.setState({ missoes: res.data })
        } catch (err) {
            console.log(`Erro: ${err.message} !!!`)
        }
    }

    render() {

        const renderMissoes = this.state.missoes.map((missao) => {
            return <p>
                Nome: {missao.mission_name} <br />
                Descrição: {missao.description} <br />
                <a href={missao.wikipedia} target="_blank"> Saiba mais na Wikipedia </a> <br />
                <hr />
            </p>
        })
        return (
            <div>
                <br />
                Missões
                {renderMissoes}
            </div>
        )

    }

}

export default GetMissoes;