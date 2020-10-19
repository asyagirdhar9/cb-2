
class Paper{
   constructor(x,y,radius) {
       var options= {
          isSatic:false,
          'restitution':0.3,
           'friction':0.5, 'density':1.2
         }
         this.body =Bodies.circle(x,y,radius/2,options);
         this.radius=radius/2;
         this.image=loadImage("sprites/p.png");
          World.add(world,this.body);
         }
          display() {
              var pos =this.body.position;
               push()
                translate(pos.x, pos.y);
                ellipseMode(CENTER)
               
                 ellipse(0, 0, this.radius);
                  pop();
               } }
 