import * as THREE from 'three';

export class ThreeJSOverlay {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private nodes: THREE.Mesh[] = [];

  constructor(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);
    
    this.animate();
  }

  updatePositions(nodes: any[]) {
    // Sync Three.js objects with D3 data
    nodes.forEach((node, i) => {
      if (!this.nodes[i]) {
        const geometry = new THREE.SphereGeometry(1);
        const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
        this.nodes[i] = new THREE.Mesh(geometry, material);
        this.scene.add(this.nodes[i]);
      }
      this.nodes[i].position.set(node.x, node.y, 0);
    });
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.renderer.domElement.remove();
    this.renderer.dispose();
  }
}