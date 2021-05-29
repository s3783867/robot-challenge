const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());

class Coords{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return "(" + this.x + "," + this.y + ")"
    }
}

app.post('/instruction', function(req,res) {
  var x = y = uniqueLocation = 0;
  var photoCoords = new Array();
  var instructions = req.body.instruction.split("");
  var step = 0;

  while(step < instructions.length){
      console.log(instructions[step]);
      switch(instructions[step]){
          case 'x':
            console.log("taking photo");
            var found = false;
            for(var i = 0; i < photoCoords.length; i++){
                if(photoCoords[i].x == x && photoCoords[i].y == y){
                    console.log("found same location");
                    found = true;
                    break;
                }
            }
            if(!found){
                console.log("adding location: " + x + y)
                photoCoords.push(new Coords(x, y));
                uniqueLocation++;
            }
            step++;
            break;

          case 'w':
            y++;
            step++;
            break;
          
          case 's':
            y--;
            step++;
            break;

          case 'a':
            x--;
            step++;
            break;
          
          case 'd':
            x++;
            step++
            break;
        
          default:
            throw "Invalid Instruction";
      }
  }
  console.log("Unique locations photographed: " +  uniqueLocation);
  res.json({
    unique: uniqueLocation
  });
});
app.get('/', (req, res) => {
    res.json({foo: 'req'});
});

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));

