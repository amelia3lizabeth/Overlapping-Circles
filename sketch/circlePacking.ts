/*
function calculatePackedCircles():Circle[]

	validatedCircles = empty list of circles
	
	repeat 1000 times
	
			candidate = generate a circle with random position and radius
	
			if candidate does not overlap with any circle of validatedCircles
	
			    add candidate to validatedCircles
	
			else
	
			    do nothing (we will not use this candidate)
	
	return validatedCircles
*/

interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    const validatedCircles: Circle[] = [];
    for (let i = 0; i < 1000; i++){
        const candidate = {
            pos: {x:random(0, areaWidth), y:random(0,areaHeight)},
            radius: random(0,areaHeight/4)}
        if (validatedCircles.length === 0){
            validatedCircles.push(candidate)
        }else if (OverlapAll(validatedCircles,candidate) === false){ 
            validatedCircles.push(candidate)
        }  
    }
    return validatedCircles;
}


/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}


function Overlap(Circle1: Circle, Circle2: Circle): Boolean{
    if ((Circle1.radius + Circle2.radius) > distance(Circle1.pos, Circle2.pos)){
        return true
    }else{
        return false
    }
}

function OverlapAll(ArrayOfCircles: Circle [], NewCircle: Circle): Boolean{ 
    for (let element of ArrayOfCircles){
        if (Overlap(NewCircle, element) === true){
            return true
        }
    }
    return false
}