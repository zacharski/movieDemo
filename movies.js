
let express = require('express');
let Pool = require('pg').Pool;
let bodyParser = require('body-parser');

const app = express();

var config = {
  host: 'localhost',
  user: 'movieperson',
  password: 'lD3V3cj1RU',
  database: 'movies3',
};


var pool = new Pool(config);



app.set('port', (8080));
// app.use(bodyParser.json({ type: 'application/json' }));
// app.use(bodyParser.urlencoded({ extended: true }));
// cool comment

app.get('/movies', async (req, res) => {
	if (req.query.m) {
		res.json({'response': req.query.m});

	}
	else {
		try {
			const response = await pool.query('select distinct movie from actors');
			console.log(response);
			var movieTitles = response.rows.map(function(item){
				return item.movie;
			})
			res.json({'movies': movieTitles});
		}
		catch(err){
			console.error("ERROR running query " + err);
			//res.json({'response': 'movies'})})
	}}});
	 



app.get('/hello', async (req, res) => {
	res.json({'response': 'Hello World'});
});



app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); 

});