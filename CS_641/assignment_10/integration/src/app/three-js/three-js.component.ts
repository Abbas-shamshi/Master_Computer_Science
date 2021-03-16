import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html',
  styleUrls: ['./three-js.component.scss'],
})
export class ThreeJSComponent implements OnInit {
  deviceWidth: any;
  deviceHeight: any;
  scene: any;
  camera: any;
  renderer: any;
  cube: any;
  ring: any;
  sphere: any;
  container: any;
  constructor(
    public platform: Platform
  ) {
    this.deviceWidth = this.platform.width();
    this.deviceHeight = this.platform.height();
    console.log("device Width " + this.deviceWidth);
    console.log("device Height " + this.deviceHeight)


  }

  ngOnInit() {


  }
  ngAfterViewInit() {
    this.container = document.getElementById('threejs');
    this.drawThreeJS();
  }
  drawThreeJS() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.deviceWidth / this.deviceHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.deviceWidth, this.deviceHeight);
    // document.body.appendChild(this.renderer.domElement);
    this.container.appendChild(this.renderer.domElement);
    console.log("Starting 3D");

    // ===============Add Cube==========
    var geometryBox = new THREE.BoxGeometry(3, 3, 3);
    var materialBox = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true, transparent: true });
    this.cube = new THREE.Mesh(geometryBox, materialBox);

    // ==================Add Sphere==============
    var geometrySphere = new THREE.SphereGeometry(8, 32, 32);
    var materialSphere = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true, transparent: true });

    this.sphere = new THREE.Mesh(geometrySphere, materialSphere);

    // ====================Add Ring==============

    var geometryRing = new THREE.RingGeometry(1, 5, 32);
    var materialRing = new THREE.MeshBasicMaterial({ color: 0x00FF00, side: THREE.DoubleSide, wireframe: true, transparent: true });
    this.ring = new THREE.Mesh(geometryRing, materialRing);

    this.scene.add(this.cube);
    this.scene.add(this.sphere);
    this.scene.add(this.ring);
    this.camera.position.z = 20;

    this.animate();
    this.sphere.position.set(20, 8, 0);
    this.ring.position.set(0, 8, 0);
    this.cube.position.set(0, -8, 0);
    
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.sphere.rotation.x += 0.01;
    this.sphere.rotation.y += 0.01;
    this.ring.rotation.x += 0.02;
    this.ring.rotation.y += 0.01;
    // requestAnimationFrame(() => { this.animate() });

    this.renderer.render(this.scene, this.camera);
  }
}
