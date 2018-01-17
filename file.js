// fs => file system
var fs = require('fs');

//var file = fs.writeFile('data.txt', 'Good evening', function(err) {
//    if(err){
//        throw err;
//    }  
//});

fs.readFile( 'data.txt', function(err, data) {
    if(err){
        throw err;
     }
     console.log(data.toString('utf-8'));
 }); 

// read assincrona
// fs.readdir('.', function (err, files) {
//     if(err){
//         throw err;
//     }

//     for (var file in files){
//         console.log(files[file]);
//     }
// })

// read sincrona
//fs
 //   .readdirSync('.')
  //  .filter(function(file) {
 //       return (file.endsWith('.js'))
 //   })
 //   .forEach(function(file) {
//       console.log(file)
//    })