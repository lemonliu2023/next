import * as THREE from 'three';
const line = () => {
  
    const tubeGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(100, 100, 100)]), 80, 0.4)
    const texture = new THREE.TextureLoader().load('/next/public/tube_bg.png')
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; //每个都重复
    texture.repeat.set(1, 1)
    texture.needsUpdate = true
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide,
        transparent: true
    })
    const mesh = new THREE.Mesh(tubeGeometry, material);
    const animationFn = () => {
        console.log(material)
        if(material.map?.offset?.x !== undefined) {
            console.log(1111)
            material.map.offset.x = material.map?.offset?.x - 0.01
        }
        requestAnimationFrame(animationFn)
    }
    animationFn()
    console.log(mesh, 'mesh')
    return mesh

};

export default line;
