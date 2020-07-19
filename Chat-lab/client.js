// const net = require('net');

// let client = net.createConnection({ port: 5000 }, () =>{
//     console.log('Connected');
//     console.log('Welcome to the chat!')


//     process.stdin.on('data', chunk =>{
//         let chunk = chunk.toString().trim();
//         while((chunk = process.stdin.read()) !== null){
//             client.write(`${chunk}`)
//         }
//     })


// });

const net = require('net');

let client = net.createConnection({port: 6000}, () => {
	process.stdin.on('data', chunk => {
		chunk = chunk.toString().trim();
		if (chunk === 'quit') {
			client.emit('end');
		}
		else {
			client.write(chunk);
		}
	});
})
.on('data', chunk => console.log(chunk.toString()))
.on('end', () => {
    process.stdin.emit('end');
    
	
})