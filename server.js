const http = require('http')
const users = [
  {
    id: 12,
    name: 'Tom',
  },
  {
    id: 23,
    name: 'Jerry'
  },
  {
    id: 34,
    name: 'Tom2'
  }
]

const server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if(req.url === '/api/users') {
    res.end(
      JSON.stringify(users)
    )
  }
})

server.listen(3000, () => {
  console.log('server is starting at port 3000!!')
})