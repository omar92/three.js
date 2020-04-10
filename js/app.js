// Import three
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
// Import the default VRButton
import { VRButton } from 'https://unpkg.com/three/examples/jsm/webxr/VRButton.js';


///// global
var container;
var scene;
var camera;
var renderer;
var controls;
var mesh;
///// Main function 
function Main() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#scene-container' );

  createScene();
  createCamera();
  createMeshes();
  createLights();
  createControls();
  createRenderer();
  renderLoop();
  
} onload = Main;


function createMeshes() {
  const texture = createTexture('textures/uv_test_bw.png');
  // create a geometry
  mesh = createCube();
  mesh.material.map = texture;
  mesh.scale.set(2, 2, 2);
  // add the mesh to the scene
  scene.add(mesh);
}

function createLights() {

  const ambientLight = new THREE.HemisphereLight(
    0xddeeff, // sky color
    0x202020, // ground color
    5, // intensity
  );

  const light = new THREE.DirectionalLight(0xffffff, 5.0);
  // move the light back and up a bit
  light.position.set(10, 10, 10);
  // remember to add the light to the scene
  scene.add(ambientLight,light);
}
var x = 0;
function update(deltaTime) {
  x += deltaTime;
  mesh.rotation.set(x, x, x);

}

function render() {
  renderer.render(scene, camera);
}


function renderLoop() {
  var then = 0;
  // Draw the scene repeatedly
  renderer.setAnimationLoop((now) => {
    //calculate deltaTime
    now *= 0.001; // convert to seconds
    const deltaTime = now - then;
    then = now;

    update(deltaTime);
    render();
  });
}

function createTexture(src) {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(src);
  // set the "color space" of the texture
  texture.encoding = THREE.sRGBEncoding;
  // reduce blurring at glancing angles
  texture.anisotropy = 16;
  return texture;
}


function createCube() {
  const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  // create a default (white) Basic material
  const material = new THREE.MeshStandardMaterial();
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

function createControls() {
 // controls = new THREE.OrbitControls(camera, container);
}

function createRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);


  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;

  renderer.physicallyCorrectLights = true;

  // Turn on VR support
  renderer.vr.enabled = true;

  // add the automatically created <canvas> element to the page
  container.appendChild(renderer.domElement);
  // Add a button to enter/exit vr to the page
  container.appendChild(VRButton.createButton(renderer));
}

// Handle browser resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
