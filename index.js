let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
    let url = req.url
    switch(url){
        case '/':
            getStaticFileContent(res, 'public/index.html', 'text/html')
            break
        default:
            res.writeHead(404, {'Content-Type':'text/plain'})
            res.end('404 - Page Not Found.')
    }
}).listen(5244)

let getStaticFileContent = (res, filepath, contentType) => {
    fs.readFile(filepath, (err, data) => {
        if(err){
            res.writeHead(500, {'Content-Type':'text/plain'})
            res.end('500 - Internal Server Error.')
        }            
        if(data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        }
    })
}