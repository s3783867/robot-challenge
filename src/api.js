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
}
//part 1 api
app.post('/instruction', function(req,res) {
  var xCurrent = yCurrent = uniqueLocation = step = 0;
  var photoLocations = new Array();
  var instructions = req.body.instruction.split("");

  while(step < instructions.length){
      switch(instructions[step]){
          case 'x':
            var found = false;
            for(var i = 0; i < photoLocations.length; i++){
                if(photoLocations[i].x == xCurrent && photoLocations[i].y == yCurrent){
                    found = true;
                    break;
                }
            }
            if(!found){
                photoLocations.push(new Coords(xCurrent, yCurrent));
                uniqueLocation++;
            }
            step++;
            break;

          case 'w':
            yCurrent++;
            step++;
            break;
          
          case 's':
            yCurrent--;
            step++;
            break;

          case 'a':
            xCurrent--;
            step++;
            break;
          
          case 'd':
            xCurrent++;
            step++
            break;
        
          default:
            res.status(400);
            res.send();
            return;
      }
  }
  res.json({
    unique: uniqueLocation
  });
});
//part 2 api
app.post('/pt2instruction', function(req,res) {
  var r1xCurrent = r1yCurrent = r2xCurrent = r2yCurrent = uniqueLocation = step = 0;
  var photoLocations = new Array();
  var instructions = req.body.instructionpt2.split("");
  var robotOneTurn = true; 
  for(var step = 0; step < instructions.length; step++){
      //robot one turn
      if(robotOneTurn){
        switch(instructions[step]){
            case 'x':
              var found = false;
              for(var i = 0; i < photoLocations.length; i++){
                  if(photoLocations[i].x == r1xCurrent && photoLocations[i].y == r1yCurrent){
                      found = true;
                  }
              }
              if(!found){
                  photoLocations.push(new Coords(r1xCurrent, r1yCurrent));
                  uniqueLocation++;
              }
              break;

            case 'w':
              r1yCurrent++;
              break;
            
            case 's':
              r1yCurrent--;
              break;

            case 'a':
              r1xCurrent--;
              break;
            
            case 'd':
              r1xCurrent++;
              break;
          
            default:
              res.status(400);
              res.send();
              return;
        }
        robotOneTurn = false; 
      } else{
        //robot 2 turn
        switch(instructions[step]){
          case 'x':
            var found = false;
            for(var i = 0; i < photoLocations.length; i++){
                if(photoLocations[i].x == r2xCurrent && photoLocations[i].y == r2yCurrent){
                    found = true;
                    break;
                }
            }
            if(!found){
                photoLocations.push(new Coords(r2xCurrent, r2yCurrent));
                uniqueLocation++;
            }
            break;

          case 'w':
            r2yCurrent++;
            break;
          
          case 's':
            r2yCurrent--;
            break;

          case 'a':
            r2xCurrent--;
            break;
          
          case 'd':
            r2xCurrent++;
            break;
        
          default:
            res.status(400);
            res.send();
            return;
      }
      robotOneTurn = true; 
      }
  }
  res.json({
    unique: uniqueLocation
  });
});
app.get('/', (req, res) => {
  res.json({foo: 'req'});
});
app.listen(4001, () => console.log(`Api started at http://localhost:4001`));

