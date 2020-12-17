import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'iguinho'}
          fotoUsuario={'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/26112376_10211218662163680_6490673183450327913_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEK4cuM3qqfv9iCln8UPft03UUjnGmo_UHdRSOcaaj9QZ5WFOXGFhZOB2aVu0jQtKQ&_nc_ohc=NDoMEA-ESuoAX8PnNjH&_nc_ht=scontent.fnat1-1.fna&oh=0322ed6ec2807b8e7539cafa67c34164&oe=60022E63'}
          fotoPost={'https://scontent.fnat1-1.fna.fbcdn.net/v/t31.0-8/29744548_1913676401976121_5003337817227260675_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH8d8wpJigIV86NCb1JZ0YeLZ0Fo6HgMEwtnQWjoeAwTJdOOJJ8ICDj299ofGt3xyw&_nc_ohc=eVgLo6sRO40AX-Svs8H&_nc_ht=scontent.fnat1-1.fna&oh=5babd8bae7a0a7a2893f185c3a246848&oe=6000D765'}
        />

        <Post
          nomeUsuario={'gessiquinha'}
          fotoUsuario={'https://scontent.fnat1-1.fna.fbcdn.net/v/t31.0-8/29744548_1913676401976121_5003337817227260675_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH8d8wpJigIV86NCb1JZ0YeLZ0Fo6HgMEwtnQWjoeAwTJdOOJJ8ICDj299ofGt3xyw&_nc_ohc=eVgLo6sRO40AX-Svs8H&_nc_ht=scontent.fnat1-1.fna&oh=5babd8bae7a0a7a2893f185c3a246848&oe=6000D765'}
          fotoPost={'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/26112376_10211218662163680_6490673183450327913_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEK4cuM3qqfv9iCln8UPft03UUjnGmo_UHdRSOcaaj9QZ5WFOXGFhZOB2aVu0jQtKQ&_nc_ohc=NDoMEA-ESuoAX8PnNjH&_nc_ht=scontent.fnat1-1.fna&oh=0322ed6ec2807b8e7539cafa67c34164&oe=60022E63'}
        />
      </div>
    );
  }
}

export default App;
