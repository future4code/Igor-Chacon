import React from 'react';


function Etapa2() {
    return (
        <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

            <form>
                <label>
                    <p>5. Qual o curso?</p>
                    <input type="text" name="curso" />
                </label>

                <label>
                    <p>6. Qual a unidade de ensino?</p>
                    <input type="text" name="unidadeDeEnsino" />
                </label>
            </form>

        </div>
    );
}

export default Etapa2;
