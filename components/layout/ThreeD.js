import { useEffect, useState, useRef } from 'react'
import { LoaderContainer } from './threeD/Loader'
import ShapeLoader from '../../lib/ShapeLoader'
import ModelLoader from '../../lib/ModelLoader'
import * as THREE from 'three'

export default function ThreeD() {

    const refContainer = useRef()
    const [mixer, setMixer] = useState()
    const [model, setModel] = useState()
    const [scene] = useState(new THREE.Scene())
    const [camera, setCamera] = useState()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [target] = useState(new THREE.Vector3(0, 1.5, 0))

    const updateModel = (model, t) => {
        model.rotation.y += t / 25
    }
    
    const handleWindowResize = () => {
        const { current: container } = refContainer
        if (container && renderer) {
            const screenW = container.clientWidth
            const screenH = container.clientHeight

            renderer.setSize(screenW, screenH)
            camera.aspect = screenW / screenH
            camera.updateProjectionMatrix()
        }
    }

    const handleWindowScroll = () => {
        const { current: container } = refContainer
        if (container && camera && model) {
            const t = window.pageYOffset
            camera.position.y = -(t * 0.004)
            if (t >= 700) {
                model.position.z = (t-700) / 75
            } else {
                model.position.z = 0
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        window.addEventListener('scroll', handleWindowScroll, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
            window.removeEventListener('scroll', handleWindowScroll, false)
        }
    }, [renderer, model, handleWindowResize])

    useEffect(() => {
        (async () => {
            const { current: container } = refContainer
            if (container && !renderer) {
                const screenH = container.clientHeight
                const screenW = container.clientWidth

                const renderer = new THREE.WebGLRenderer({
                    alpha: true
                })
                renderer.physicallyCorrectLights = true
                renderer.outputEncoding = THREE.sRGBEncoding
                renderer.toneMapping = THREE.ACESFilmicToneMapping
                renderer.toneMappingExposure = 1
                renderer.setSize(screenW, screenH)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                container.appendChild(renderer.domElement)
                setRenderer(renderer)

                const camera = new THREE.PerspectiveCamera(75, screenW / screenH, 0.01, 100)
                setCamera(camera)
                camera.position.set(0, 0, 0)
                scene.add(camera)

                const ambientLight = new THREE.AmbientLight(0xffffff, 2)
                scene.add(ambientLight)

                const directionalLight = new THREE.DirectionalLight(0xffffff, 4)
                directionalLight.position.set(10, -5, 7)
                scene.add(directionalLight)

                const starsGeometry = new THREE.OctahedronBufferGeometry(0.1, 0)
                const starsMaterial = new THREE.MeshMatcapMaterial()
                ShapeLoader(starsGeometry, starsMaterial, 1000, 80, '/texture/texture.png', scene)

                const { mixer, model } = await ModelLoader(scene, mixer, '/astronaut/scene.gltf', { 
                    castShadow: false,
                    receiveShadow: false,
                    scalar: 0.3,
                    timeScale: 1/25
                })
                setMixer(mixer)
                setModel(model)

                const clock = new THREE.Clock()
                let previousTime = 0

                const RAF = () => {
                    const elapsedTime = clock.getElapsedTime()
                    const deltaTime = elapsedTime - previousTime
                    previousTime = elapsedTime

                    if (mixer) mixer.update(deltaTime * 10)
                    if (model) updateModel(model, deltaTime * 10)

                    camera.lookAt(target)

                    renderer.render(scene, camera)
                    requestAnimationFrame(RAF)
                }

                RAF()
            }
        })()
        return () => {
            cancelAnimationFrame(requestAnimationFrame(RAF))
            renderer.dispose()
        }
    }, [])

    useEffect(() => {
        if (mixer) {
            setLoading(false)
        }
    }, [mixer])

    useEffect(() => {
        const { current: container } = refContainer
        if (container && camera && model) {
            const t = window.pageYOffset
            camera.position.y = -(t * 0.004)
            if (t >= 700) {
                model.position.z = (t-700) / 75
            } else {
                model.position.z = 0
            }
        }
    }, [model, camera])

    return <LoaderContainer loading={loading} ref={refContainer} />
}