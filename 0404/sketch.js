let points  = [[6, -3], [5, 0], [7, 2],[7,4],[6,5],[9,5],[9,6],[8,7],[7,8],[6,8],[5,10],[4,10],[4,9],[5,8],[4,5],[0,5],[-2,4],[-4,1],[-4,-6],[-5,-7],[-10,-6],[-9,-7],[-4,-8],[-3,-7],[-1,-5],[4,4],[3,2],[3,1],[5,-3],[4,-4],[5,-4],[6,-3],[4,1],[5,2],[1,-4],[2,-5],[2,-8],[8,-8],[7,-7],[3,-7],[3,-1],[4,-1],[3,-1],[2,-3],[0,-5],[-4,-2],[-3,-4],[-1,-5],[-1,-9],[5,-10],[6,-9],[0,-8],[0,-5],[1,0],[-1,3],[5,-4],[6,-4],[7,-3],[6,1]]; //list資料，

function setup() {   
  createCanvas(windowWidth, windowHeight); 
  
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}


function draw() {
  background(255)

  translate(mouseX, mouseY); 
  scale(1, -1); 

  for (let i = 0; i < points.length-1; i++) {
    let ratio1 = map(i, 0, points.length-1, 0, 1);
    let ratio2 = map(i+1, 0, points.length-1, 0, 1);
    let clr = lerpColor(color("#48cae4"), color("#ffafcc"), ratio1);
    let middlecolor = lerpColor(color("#48cae4"), color("#ffafcc"), (ratio1+ratio2)/2)
    stroke(clr);
    strokeWeight(10);
    for(k=1;k<6;k++){
      textSize(25*(mouseX/1000)*k)
      line(points[i][0]*(mouseX/1000)*k, points[i][1]*(mouseX/1000)*k, points[i+1][0]*(mouseX/1000)*k, points[i+1][1]*(mouseX/1000)*k);
    }
  }
  scale(1, -1); 
  strokeWeight(2)
  textSize(50)
  fill("#a8dadc")
  text("教科系",mouseX,mouseY)
  
  let clr = lerpColor(color("#48cae4"), color("#ffafcc"), map(0, 0, points.length-1, 0, 1));
  stroke(clr);
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); 
}