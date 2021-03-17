const http = require('http')
const fs   = require('fs')
const url = require('url');


const app = http.createServer(serverFunc);

function serverFunc(request, response) {

    function renderTxt(text, status = 404) {
        response.writeHead(status);
        response.write(text);
        response.end();
    }

    function printFile(file, query, status) {
        fs.readFile(file, 'utf8', (err, data) => {
            if(!err){
                data = data.replace('{{name}}', query.name);
                data = data.replace('{{breed}}', query.breed);
                data = data.replace('<div></div>', `<div><img src="https://httpstatusdogs.com/img/${status}.jpg"></img></div>`)

                renderTxt(data, status);
            }
            else {
                console.log('Error reading file')
            }
            
        })
    }

    const URL = url.parse(request.url, true)

    if(URL.pathname === '/') {
        printFile('./templates/index.html', URL.query, 200);
    }
    else if (URL.pathname === '/dogs') {
        printFile('./templates/dogs.html', URL.query, 200);
    }
    else {
        renderTxt(`
        <h1>Page Not Found!</h1>
        <div><img src='https://httpstatusdogs.com/img/404.jpg'></img></div>
        `);

    }


    console.log("SERVER HAS a HIT");
}


app.listen(8000);