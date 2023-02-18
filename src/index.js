import Movements from "./movement.js"
import polygon from "./Web3.js";


// contract address 0x61a4362ed9a15a9d29151d8d469ae7f2c4f2ae89

// contract address 0xE2Cf79a68dCA1F6221269862793b4413d9a79f23

// Contract 0x46c4cDC39E184a1243a221BdDBe39215B5839188



const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1C1E1F);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambient_light = new THREE.AmbientLight(0x404040);
const direction_light= new THREE.DirectionalLight(0xE9E9E9,5);
ambient_light.add(direction_light);
scene.add(ambient_light);


//////////


const geometry_area= new THREE.BoxGeometry( 100, 0.3, 50 );
const material_area = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const area = new THREE.Mesh( geometry_area, material_area );
scene.add( area );


// const geometry = new THREE.BoxGeometry( 10, 10, 10 );
// const material = new THREE.MeshPhongMaterial( {color: 0x02ff00} );
// const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

// const geometry_cyl = new THREE.CylinderGeometry( 5, 5, 20,32 );
// const material_cyl = new THREE.MeshPhongMaterial( {color: 0xffff00} );
// const cyl = new THREE.Mesh( geometry_cyl, material_cyl );
//scene.add( cyl );
//cyl.position.set(20,5,0);



//////////////////

// const geometry_cyl1 = new THREE.CylinderGeometry( 5, 5, 20,32 );
// const material_cyl1 = new THREE.MeshPhongMaterial( {color: 0xffff00} );
// const cyl1 = new THREE.Mesh( geometry_cyl1, material_cyl1 );
// //scene.add( cyl1 );
// cyl1.position.set(40,10,0);

// const geometry1 = new THREE.BoxGeometry( 25, 15, 15 );
// const material1 = new THREE.MeshPhongMaterial( {color: 0x02ff00} );
// const cube1 = new THREE.Mesh( geometry1, material1 );
// //scene.add( cube1 );
// cube1.position.set(40,25,0);

///////////////////





//camera.position.x=2;
camera.position.z=7;
camera.position.set(65,64,110)
function animate() {
    // cube.rotation.x+=.02;
    
    // cube1.rotation.y+=0.03;
    //  cube.rotation.z+=.04    
    
    // cyl.rotation.x+=0.03;
    requestAnimationFrame( animate );
     

     if(Movements.isPressed(37)){      // left
        
        camera.position.x-=0.5;

     }
      
     if(Movements.isPressed(38)){     //up
        
        camera.position.x+=0.5;
        camera.position.y+=0.5;

     }
     if(Movements.isPressed(39)){     //righr
        camera.position.x+=0.5;
        //camera.position.y+=0.5;

     }
     if(Movements.isPressed(40)){     //down
        
        camera.position.x-=0.5;
        camera.position.y-=0.5;

     }
	camera.lookAt(area.position);
	renderer.render( scene, camera );
}
animate();
//camera.position.y=3;

renderer.render(scene,camera);

polygon.then((result)=>{
   result.nft.forEach((object,index) => {
    
   
     if(index <= result.supply){ 

  const geometry_cube = new THREE.BoxGeometry( object.w, object.h, object.d );
  const material_cube = new THREE.MeshPhongMaterial( {color: 0x02ff00} );
  const nft_cube = new THREE.Mesh( geometry_cube, material_cube );
  nft_cube.position.set(object.x,object.y,object.z);
  scene.add( nft_cube );
  

   }
});

});

