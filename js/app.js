///// global
var container;
var scene;
var camera;
var renderer;
///// Main function 
function Main() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#scene-container' );
  // create a Scene
  createScene();

  createCamera();
  createRenderer();
  
  // render, or 'create a still image', of the scene
  renderer.render(scene, camera);

} onload = Main;

function createScene() {
  scene = new THREE.Scene();
  // Set the background color
  scene.background = new THREE.Color('skyblue');
}

function createCamera() {
  const fov = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
}

function createRenderer() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // add the automatically created <canvas> element to the page
  container.appendChild(renderer.domElement);
}



