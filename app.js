var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    ejs = require('ejs-locals'),
    ROOT = __dirname

let counter = 1,
    messages = []
var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};
function typeOfMessage(message) {
    if (message.endsWith("html") || message.endsWith("ejs")) {
        return 'text/html'
    } else if (message.endsWith("css")){
        return 'text/css'
    } else if (message.endsWith("js")){
        return 'application/javascript'
    } else if (message.endsWith("jpg")){
        return 'image/jpeg'
    } else if (message.endsWith("favicon.ico")) {
        return "image/x-icon"
    }
}
var server = http.createServer(function (req, res) {
    console.log(req.url)
    uri = url.parse(req.url, true)
    if (req.method === 'POST') {
        console.log("post");
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body)
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at'])
            }

            console.log("end");
            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'})
            res.end()
        })
    } else if (uri.pathname == '/subscribe') {
//        console.log("sub");
        res.end(JSON.stringify(messages.filter(x => x.id > Number(uri.query.lastId))))
    } else if (uri.pathname == '/publish') {
//        console.log("pub");
        messages.push({ text : uri.query.text, id : counter })
        counter += 1
        res.end()
    } else if (!chackAccess(req)) {
        console.log("non check");
        res.statusCode = 403
        res.end("Tell me the secret to access!")
    } else {
        console.log("send file");
        sendFileSafe(url.parse(req.url).pathname, res)
    }
//    console.log("exit");
})
function chackAccess(req) {
    return req.url.indexOf('..') == -1
}
function sendFileSafe(filePath, res) {
    try {
        filePath = decodeURIComponent(filePath)
    } catch(e) {
        res.statusCode = 400
        res.end("Bad request")
        return
    }
    if (~filePath.indexOf('\0')) { //indexOf(\0) >= 0
        res.statusCode = 400
        res.end("Bad request")
        return
    }
    var filePath = filePath == "/" ? "/mainpage.ejs" : filePath

    filePath = path.normalize(path.join(ROOT, filePath))

    if (filePath.indexOf(ROOT) != 0) {
        res.statusCode = 404
        res.end("File not found")
        return
    }
    fs.stat(filePath, function (err, stats) {
        if (err || !stats.isFile()) {
            res.statusCode = 404
            res.end("FIle not found")
            return
        }
        sendFile(filePath, res)
    })
}
function sendFile(filePath, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', typeOfMessage(filePath) + "; charset=utf-8")
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err)
            res.statusCode = 404
            res.end(`Cannot read ${url}`)
        } else if (filePath.endsWith(".ejs")) {
            ejs(filePath, { settings : {}, header : ""}, (err, text) => {
                res.end(text)
            })
        } else {
            res.end(data)
        }
    })
}

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
