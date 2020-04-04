///// global
var container;
var scene;
var camera;
var renderer;
///// Main function 
function Main() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#scene-container' );

  createScene();
  createCamera();
  createRenderer();
  
  // create a geometry
  const mesh = createCube();

  // add the mesh to the scene
  scene.add(mesh);

  // render, or 'create a still image', of the scene
  renderer.render(scene, camera);

} onload = Main;

function createCube() {
  const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  // create a default (white) Basic material
  const material = new THREE.MeshBasicMaterial();
  // create a Mesh containing the geometry and material
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

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

  // every object is initially created at ( 0, 0, 0 )
  // we'll move the camera back a bit so that we can view the scene
  camera.position.set(0, 0, 10);
}

function createRenderer() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // add the automatically created <canvas> element to the page
  container.appendChild(renderer.domElement);
}



