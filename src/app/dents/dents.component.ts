import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as  THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';


@Component({
  selector: 'app-dents',
  templateUrl: './dents.component.html' ,
  styleUrls: ['./dents.component.css']
})
export class DentsComponent implements OnInit {
  @ViewChild('canvas', {static: true}) 
  public canvasElemen!: ElementRef<HTMLCanvasElement>;
  constructor( private router: Router) { }

  ngOnInit() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2()
    
    const MODEL_PATH = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/chair.glb";
   // const MODEL_PATH = "teeth/mach.glb";
    
    //canvas
    const canvas = document.querySelector('.bg');
    
    //scene
    const scene = new THREE.Scene();
    
    //background
    const BACKGROUND_COLOR = 0xFFFFFF;
    scene.background = new THREE.Color(BACKGROUND_COLOR);
    scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);
    
    //renderer   
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas!,
      antialias: true,
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
    
    //camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    camera.position.x = 0;
    
    //loader
    var theModel;
    
    var loader = new GLTFLoader();
    
    loader.load(MODEL_PATH, function(gltf) {
      theModel = gltf.scene;
    
      theModel.scale.set(1.5,1.5,1.5);
      theModel.rotation.y = 5.5;
      
      // Add the model to the scene
      theModel.position.y = -2;
      
      scene.add(theModel);
      
    }, undefined, function(error) {
      console.error(error)
    });
    
    // Add lights
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.61 );
    hemiLight.position.set( 0, 50, 0 );
    
    // Add hemisphere light to scene   
    scene.add( hemiLight );
    
    var dirLight = new THREE.DirectionalLight( 0xffffff, 0.54 );
    dirLight.position.set( -8, 12, 8 );
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    
    // Add directional Light to scene    
    scene.add( dirLight );
    
    // Add controls
    var controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = Math.PI;
    controls.minPolarAngle = 0;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.dampingFactor = 0.1;
    controls.autoRotate = false; 
    controls.autoRotateSpeed = 0.2;
    /*
    function colorPiece(){
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(scene.children);
      for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.transparent = true;
        intersects[i].object.material.opacity = 0.5;
        
      }
    }
    */
    function animate(){
      controls.update();
      renderer.render(scene , camera);
      requestAnimationFrame(animate);
    
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
    }
    animate();
    
    function resizeRendererToDisplaySize(renderer: any) {
      const canvas = renderer.domElement;
      var width = window.innerWidth;
      var height = window.innerHeight;
      var canvasPixelWidth = canvas.width / window.devicePixelRatio;
      var canvasPixelHeight = canvas.height / window.devicePixelRatio;
    
      const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
    
    var intersectObject:any;
    
    function onClick(event:any) { 
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    
      raycaster.setFromCamera( mouse, camera );
    
      const intersects = raycaster.intersectObjects( scene.children, true );
      
      if ( intersects.length > 0 ) {
        if( intersects[ 0 ].object.name !== "machoire_avatar_2004" ){
          if(intersectObject !== intersects[ 0 ].object){
    
            if(intersectObject){
              intersectObject.material.opacity = 1;
              intersectObject.material.transparent = false;
              intersectObject.material.color.setHex(0xFFFFFF);
            }
            intersectObject = intersects[0].object;
            intersectObject.material.opacity = 0.7;
            intersectObject.material.transparent = true;
            intersectObject.material.color.setHex(0x0000FF);
          } else {
    
          }
          // intersects[0].object.material.color.setHex(0x0000FF);
          // intersects[0].object.material.transparent = true;
          // intersects[0].object.material.opacity = 0.7;
          // console.log( 'Intersection:', intersects[ 0 ] );
        }
      }
    } 
    
    renderer.domElement.addEventListener( 'click', onClick, false );
  }

  goToPatientList(){
    this.router.navigate(['/patients']);
  }

  goToUtilisateurList(){
    this.router.navigate(['/utilisateurs']);
  }

  goToPatientCreate(){
    this.router.navigate(['/create-patient']);
  }

  goToAccuiel(){
    this.router.navigate(['/accueil']);
  }

  goToDent(){
    this.router.navigate(['/dent']);
  }

  goToRendezvous(){
    this.router.navigate(['/rendez-vous']);
  }

}
