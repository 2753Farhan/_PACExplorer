import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const BoatAdventure = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [catImage, setCatImage] = useState('/Smile.png');

  useEffect(() => {
    // Initialize Three.js scene
    let camera, scene, renderer, controls, water, sun;
    let boat;
    let floatingObjects = [];
    const loader = new GLTFLoader();

    const init = async () => {
      // Renderer setup
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      mountRef.current.appendChild(renderer.domElement);

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 20000);
      camera.position.set(30, 30, 100);

      // Water setup
      const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
      water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load('/waternormals.jpg', function(texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog !== undefined
      });
      water.rotation.x = -Math.PI / 2;
      scene.add(water);

      // Sky setup
      const sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const skyUniforms = sky.material.uniforms;
      skyUniforms['turbidity'].value = 10;
      skyUniforms['rayleigh'].value = 2;
      skyUniforms['mieCoefficient'].value = 0.005;
      skyUniforms['mieDirectionalG'].value = 0.8;

      sun = new THREE.Vector3();
      const parameters = { elevation: 2, azimuth: 180 };
      const pmremGenerator = new THREE.PMREMGenerator(renderer);

      const updateSun = () => {
        const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
        const theta = THREE.MathUtils.degToRad(parameters.azimuth);
        sun.setFromSphericalCoords(1, phi, theta);
        sky.material.uniforms['sunPosition'].value.copy(sun);
        water.material.uniforms['sunDirection'].value.copy(sun).normalize();
        scene.environment = pmremGenerator.fromScene(sky).texture;
      };
      updateSun();

      // Controls setup
      controls = new OrbitControls(camera, renderer.domElement);
      controls.maxPolarAngle = Math.PI * 0.495;
      controls.target.set(0, 10, 0);
      controls.minDistance = 40.0;
      controls.maxDistance = 200.0;
      controls.update();

      // Load boat
      boat = await new Promise((resolve) => {
        loader.load('/boat/scene.gltf', (gltf) => {
          const boatObj = gltf.scene;
          scene.add(boatObj);
          boatObj.scale.set(3, 3, 3);
          boatObj.position.set(0, 13, 0);
          boatObj.rotation.y = 1.5;
          resolve({
            boat: boatObj,
            speed: { vel: 0, rot: 0 },
            update: function() {
              if (this.boat) {
                this.boat.rotation.y += this.speed.rot;
                this.boat.translateX(this.speed.vel);
              }
            },
            stop: function() {
              this.speed.vel = 0;
              this.speed.rot = 0;
            }
          });
        });
      });

      // Create floating objects
      const objectModel = await new Promise((resolve) => {
        loader.load('/trash/scene.gltf', (gltf) => resolve(gltf.scene));
      });

      for (let i = 0; i < 200; i++) {
        const isPositive = Math.random() > 0.5;
        const object = objectModel.clone();
        scene.add(object);
        object.scale.set(1.5, 1.5, 1.5);
        
        const spawnRange = 100;
        object.position.set(
          Math.random() * spawnRange * 2 - spawnRange,
          -0.5,
          Math.random() * spawnRange * 2 - spawnRange
        );

        const color = isPositive ? new THREE.Color(0, 1, 0) : new THREE.Color(1, 0, 0);
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshPhongMaterial({
              color: color,
              emissive: color.multiplyScalar(0.3),
              shininess: 30
            });
          }
        });

        floatingObjects.push({ object, isPositive });
      }

      // Store references
      sceneRef.current = {
        scene,
        camera,
        renderer,
        controls,
        water,
        boat,
        floatingObjects
      };

      // Event listeners
      const handleKeyDown = (e) => {
        if (gameStarted && boat) {
          if (e.key === 'ArrowUp') boat.speed.vel = 1;
          if (e.key === 'ArrowDown') boat.speed.vel = -1;
          if (e.key === 'ArrowRight') boat.speed.rot = -0.1;
          if (e.key === 'ArrowLeft') boat.speed.rot = 0.1;
        }
      };

      const handleKeyUp = () => {
        if (boat) boat.stop();
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    };

    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      if (!sceneRef.current) return;

      const { renderer, scene, camera, water, boat, floatingObjects } = sceneRef.current;

      water.material.uniforms['time'].value += 1.0 / 60.0;

      if (gameStarted && boat) {
        boat.update();
        checkCollisions(boat, floatingObjects, scene);
      }

      renderer.render(scene, camera);

      return () => cancelAnimationFrame(animationId);
    };

    // Initialize everything
    init().then(() => {
      animate();
    });

    // Cleanup
    return () => {
      if (sceneRef.current) {
        const { scene, renderer } = sceneRef.current;
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        renderer.dispose();
        mountRef.current?.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Start game timer
  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameStarted(false);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted]);

  const checkCollisions = (boat, floatingObjects, scene) => {
    if (!boat?.boat) return;

    floatingObjects.forEach((object, index) => {
      if (object.object) {
        const distance = boat.boat.position.distanceTo(object.object.position);
        if (distance < 15) {
          scene.remove(object.object);
          floatingObjects.splice(index, 1);

          if (object.isPositive) {
            setScore(prev => prev + 10);
            setCatImage('/Smile.png');
          } else {
            setScore(prev => prev - 5);
            setCatImage('/Crying.png');
          }

          // Add new object
          const newObject = object.object.clone();
          const spawnRange = 100;
          newObject.position.set(
            Math.random() * spawnRange * 2 - spawnRange,
            -0.5,
            Math.random() * spawnRange * 2 - spawnRange
          );
          scene.add(newObject);
          floatingObjects.push({ object: newObject, isPositive: Math.random() > 0.5 });
        }
      }
    });
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      <img 
        src={catImage}
        style={{ position: 'absolute', top: '50px', left: '50px', width: '100px', height: '100px' }}
        alt="Cat emoji"
      />
      
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', fontSize: '24px' }}>
        Score: {score}
      </div>
      
      <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white', fontSize: '24px' }}>
        Time: {timeLeft}s
      </div>

      {!gameStarted && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white'
        }}>
          <h1>Welcome to the Boat Adventure!</h1>
          <p>Use Arrow keys to move the boat. Collect green objects, avoid red ones!</p>
          <button
            onClick={() => setGameStarted(true)}
            style={{
              padding: '10px 20px',
              fontSize: '20px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default BoatAdventure;