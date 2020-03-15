const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

const labsRoute = express.Router();
const apiRouter = express.Router();
const jsonParser = express.json();

const lab2 = require('./src/lab2');
const lab3 = require('./src/lab3');
// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs"
    }
));
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

apiRouter.post('/parser-text', jsonParser, (req,  res) => {
    if (!req.body.text){
        res.status(400);
    }
    let text = req.body.text;
    let parseText = lab2.parserText(text);
    res.json({
        'answer' : parseText
    });
});
apiRouter.post('/calc-date', jsonParser, (req, res) => {
   if (!req.body.firstDate || !req.body.secondDate || !req.body.firstTime || !req.body.secondTime){
       res.status(400);
   }
   let firstDate = req.body.firstDate;
   let secondDate = req.body.secondDate;
   let firstTime = req.body.firstTime;
   let secondTime = req.body.secondTime;

   let calcDate = lab2.calcCountHourAction(firstDate, secondDate, firstTime, secondTime);
   res.json({
       'answer' : calcDate
   });
});
apiRouter.post('/generate-string', jsonParser, (req, res) => {
    if (!req.body.size){
        res.status(400);
    }
    let strGenerate = lab3.strGenerate(req.body.size);
    res.json({
       'string' : strGenerate.outputStr,
        'charArray' : strGenerate.charArray,
        'sum' : strGenerate.sum
    });
});
apiRouter.post('/create-function', jsonParser, (req, res) => {
   if (!req.body.array) {
       res.status(400);
   }
   let result = lab3.getArgsAvg(req.body.array);
   res.json({
      'avgSum' : result.avgSum,
       'avgHarmonic' : result.avgHarmonic
   });
});
labsRoute.use('/:id', function (request, response) {
    response.render('lab' + request.params['id'] + '.hbs');
});
app.use('/lab', labsRoute);
app.use('/api', apiRouter);

app.use('/', function (request, response) {
    response.render('lab1.hbs');
});

app.listen(49749);
console.log('Server started successfully');