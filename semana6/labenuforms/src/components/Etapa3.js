import React from 'react';


function Etapa3() {
    return (
        <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

            <form>
                <label>
                    <p>5. Por que você não terminou o curso de graduação?</p>
                    <input type="text" name="pqNaoTerminouGraduacao" />
                </label>

                <label>
                    <p>6. Vocoê fez algum curso complementar?</p>
                    <select>
                        <option value="nenhum">Nenhum</option>
                        <option value="cursoTecnico">Curso Tecnico</option>
                        <option value="cursoIngles">Curso de Inglês</option>
                    </select>
                </label>
            </form>

        </div>
    );
}

export default Etapa3;
