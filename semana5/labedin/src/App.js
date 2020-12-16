import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/26112376_10211218662163680_6490673183450327913_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEK4cuM3qqfv9iCln8UPft03UUjnGmo_UHdRSOcaaj9QZ5WFOXGFhZOB2aVu0jQtKQ&_nc_ohc=SVEMq7dqqSQAX9aGx-1&_nc_ht=scontent.fnat1-1.fna&oh=10a957a8847ca1f5cf5033a44b947c9a&oe=5FFE39E3" 
          nome="Igor Chacon" 
          descricao="Oi, eu sou o Igor Chacon. Sou psicólogo e aluno da LEBENU. Formei-me em psicologia em 2011 e em Engenharia Elétrica em 2019."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="littlecard-container">
        <h2>Contatos:</h2>
        <CardPequeno
          email="E-mail: igorchacon@yahoo.com.br"
          cel="Cel: +55 84 9 9999-9999"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aluno" 
        />
        
        <CardGrande 
          imagem="https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/65636072_2301783576581926_2009597098806214656_n.png?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHcTH_w7TRKCNC_ZBnTF5OI-JcbbM4zSUr4lxtszjNJSmYGlgjkk3ARJ7EPj9lwPM8&_nc_ohc=YbE8I5YmPjIAX90EpU6&_nc_ht=scontent.fnat1-1.fna&oh=18218432deb24dabb6fa409e0ed43fa2&oe=600067F6" 
          nome="Robô Ciência" 
          descricao="Professor e psicólogo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
