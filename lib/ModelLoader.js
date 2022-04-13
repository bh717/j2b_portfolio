import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AnimationMixer } from 'three/src/animation/AnimationMixer'

export default function Loader(scene, mixer, modelPath, options = { receiveShadow: true, castShadow: true, scalar: 1, timeScale: 1 }) {
    const { receiveShadow, castShadow, scalar, timeScale } = options
    return new Promise((resolve, reject) => {
        const gltfLoader = new GLTFLoader()
        gltfLoader.load(modelPath, gltf => {
            gltf.scene.traverse(c => {
                c.castShadow = castShadow
                c.receiveShadow = receiveShadow
                c.frustumCulled = false
            })
            gltf.scene.scale.setScalar(scalar)

            gltf.scene.position.y = 0.8

            mixer = new AnimationMixer(gltf.scene)
            const action = mixer.clipAction(gltf.animations[0])
    
            action.timeScale = timeScale
            action.play()

            scene.add(gltf.scene)

            resolve({ mixer, model: gltf.scene })
        },
        undefined,
        error => {
            reject(error)
        }
        )
    })
} 