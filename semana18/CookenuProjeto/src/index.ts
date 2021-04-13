import app from './app';
import getProfile from './endpoints/users/getProfile';
import getUserById from './endpoints/users/getUserById';
import login from './endpoints/users/login';
import signup from './endpoints/users/signup';


app.post('/users/signup', signup);
app.post('/users/login', login);
app.get('/users/profile', getProfile);
app.get('/users/:id/profile', getUserById);

app.post('/recipe');
app.post('/recipe/:id');