///// global
const container;
const scene;
const camera;

///// Main function 
function Main() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#scene-container' );
  // create a Scene
  scene = new THREE.Scene();
 

  // Create a Camera
  const fov = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

 

} onload = Main;



