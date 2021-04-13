import app from './app';
import login from './endpoints/users/login';
import signup from './endpoints/users/signup';


app.post('/users/signup', signup);
app.post('/users/login', login);
app.get('/users/profile');
app.get('/users/:id/profile');

app.post('/recipe');
app.post('/recipe/:id');