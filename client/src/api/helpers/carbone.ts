import carbone from "carbone";
import * as fs from "fs";

var data = [
  {
    movieName : 'Matrix',
    actors    : [{
      firstname : 'Keanu',
      lastname  : 'Reeves'
    },{
      firstname : 'Laurence',
      lastname  : 'Fishburne'
    },{
      firstname : 'Carrie-Anne',
      lastname  : 'Moss'
    }]
  },
  {
    movieName : 'Back To The Future',
    actors    : [{
      firstname : 'Michael',
      lastname  : 'J. Fox'
    },{
      firstname : 'Christopher',
      lastname  : 'Lloyd'
    }]
  }
];

carbone.render('./node_modules/carbone/examples/movies.docx', data, function(err, result){
  if (err) return console.log(err);
  fs.writeFileSync('movies_result.docx', result);
});

carbone.render('./node_modules/carbone/examples/flat_table.ods', data, function(err, result){
  if (err) return console.log(err);
  fs.writeFileSync('flat_table_result.ods', result);
});