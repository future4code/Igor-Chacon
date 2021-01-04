import React from 'react';


function Etapa1() {
    return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <form>
                <label>
                    <p>1. Qual o seu nome?</p>
                    <input type="text" name="nome" />
                </label>

                <label>
                    <p>2. Qual a sua idade?</p>
                    <input type="text" name="idade" />
                </label>

                <label>
                    <p>3. Qual o seu e-mail?</p>
                    <input type="text" name="email" />
                </label>

                <label>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option value="medioIncompleto">Medio Incompleto</option>
                        <option value="medioCompleto">Medio Completo</option>
                        <option value="superiorIncompleto">Superior Incompleto</option>
                        <option value="superiorCompleto">Superior Completo</option>
                    </select>
                </label>

            </form>
        </div>
    );
}

export default Etapa1;
