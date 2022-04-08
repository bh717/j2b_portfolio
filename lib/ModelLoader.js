import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AnimationMixer } from 'three/src/animation/AnimationMixer'

export default function Loader(scene, mixer, modelPath, options = { receiveShadow: true, castShadow: true, scalar: 1 }) {
    const { receiveShadow, castShadow, scalar } = options
    return new Promise((resolve, reject) => {
        const gltfLoader = new GLTFLoader()
        gltfLoader.load(modelPath, gltf => {

            gltf.scene.traverse(c => {
                c.castShadow = castShadow
                c.receiveShadow = receiveShadow
            })
    
            gltf.scene.scale.setScalar(scalar)
    
            mixer = new AnimationMixer(gltf.scene)
            const action = mixer.clipAction(gltf.animations[0])
    
            action.play()

            scene.add(gltf.scene)

            resolve({ mixer })
        },
        undefined,
        error => {
            reject(error)
        }
        )
    })
} 