import express from 'express';
import Server from './server';

const app = express();
new Server(app);
app.listen(2000, () => {
	console.log("server is running");

})