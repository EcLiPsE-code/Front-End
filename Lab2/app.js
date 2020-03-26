const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

const labsRoute = express.Router();
const apiRouter = express.Router();
const jsonParser = express.json();

const lab2 = require('./src/lab2');
const lab3 = require('./src/lab3');
const lab4 = require('./src/lab4');
const lab4_task2 = require('./src/lab4_task2');
const {Controller} = require('./src/lab4_task2');
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

let controller = new Controller();

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
apiRouter.post('/create-vector', jsonParser, (req, res) => {
   if (!req.body.X || !req.body.Y || !req.body.Z || !req.body.Name){
       res.status(400);
   }
   let result = lab4.createVector(req.body.X, req.body.Y, req.body.Z, req.body.Name);
   res.json({
       'arrayVectors' : result
   })
});
apiRouter.post('/add-vectors', jsonParser, (req, res) => {
   if (!req.body.firstNameVector || !req.body.secondNameVector){
       res.status(400);
   }
   let result = lab4.plus(req.body.firstNameVector, req.body.secondNameVector);
   res.json({
       'plus' : result
   });
});
apiRouter.post('/scalar-vectors', jsonParser, (req, res) => {
    if (!req.body.firstNameVector || !req.body.secondNameVector){
        res.status(400);
    }
    let result = lab4.scalar(req.body.firstNameVector, req.body.secondNameVector);
    res.json({
        'scalar' : result
    });
});
apiRouter.get('/update-table', jsonParser, (req, res) => {
    let result = lab4.update();
    res.json({
       'tableValue' : result
    });
});
apiRouter.post('/create-student', jsonParser, (req, res) => {
   if (!req.body.name || !req.body.surname || !req.body.lastName || !req.body.speciality || !req.body.age){
       res.status(400);
   }
   let result = controller.createStudent(req.body.name, req.body.surname, req.body.age, req.body.speciality, req.body.lastName);
   res.json({
      listStudent : result
   });
});
apiRouter.post('/search-student', jsonParser, (req, res) => {
    if (!req.body){
        res.status(400);
    }
    let result = controller.searchStudent(req.body.surname);
    res.json({
        'student' : result
    });
});
apiRouter.post('/filter-student', jsonParser, (req, res) => {
   if (!req.body){
       res.status(400);
   }
   let result = controller.filterSpeciality(req.body.speciality);
   res.json({
      'students' : result
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