import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Mesh } from 'three/src/objects/Mesh'

export default function Loader(geometry, material, quantity, width, texturePath, scene) {
    const textureLoader = new TextureLoader()
    const texture = textureLoader.load(texturePath)
    material.matcap = texture
    for (let i = 0; i < quantity; i++) {
        const shape = new Mesh(geometry, material)

        shape.position.set(
            (Math.random() - 0.5) * width,
            (Math.random() - 0.5) * width,
            (Math.random() - 0.5) * width
        )

        shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            0
        )

        const scale = Math.random()
        shape.scale.set(scale, scale, scale)

        scene.add(shape)
    }
}