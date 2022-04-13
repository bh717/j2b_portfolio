import { useEffect, useState, useCallback, useRef } from 'react'
import { Loader, LoaderContainer } from './threeD/Loader'
import ModelLoader from '../../lib/ModelLoader'
import * as THREE from 'three'

export default function ThreeD() {

    const refContainer = useRef()
    const [mixer, setMixer] = useState()
    const [scene] = useState(new THREE.Scene())
    const [camera, setCamera] = useState()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [target, setTarget] = useState(new THREE.Vector3(0, 1.5, 0))
    
    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
            const screenW = container.clientWidth
            const screenH = container.clientHeight

            renderer.setSize(screenW, screenH)
            camera.aspect = screenW / screenH
            camera.updateProjectionMatrix()
        }
    }, [renderer])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    useEffect(() => {
        (async () => {
            const { current: container } = refContainer
            if (container && !renderer) {
                const screenH = container.clientHeight
                const screenW = container.clientWidth

                const renderer = new THREE.WebGLRenderer({
                    alpha: true
                })
                renderer.shadowMap.enabled = true
                renderer.shadowMap.type = THREE.PCFSoftShadowMap
                renderer.physicallyCorrectLights = true
                renderer.outputEncoding = THREE.sRGBEncoding
                renderer.setSize(screenW, screenH)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                container.appendChild(renderer.domElement)
                setRenderer(renderer)

                const camera = new THREE.PerspectiveCamera(75, screenW / screenH, 0.1, 100)
                setCamera(camera)
                camera.position.set(0, 2, 0)
                scene.add(camera)

                const ambientLight = new THREE.AmbientLight(0xffffff, 2)
                scene.add(ambientLight)

                const directionalLight = new THREE.DirectionalLight(0xffffff, 4)
                directionalLight.castShadow = true
                directionalLight.shadow.normalBias = 0.05
                directionalLight.shadow.camera.far = 4
                directionalLight.shadow.camera.left = - 2
                directionalLight.shadow.camera.top = 3
                directionalLight.shadow.camera.right = 2
                directionalLight.shadow.camera.bottom = - 1
                directionalLight.position.set(2, 2, 2)
                scene.add(directionalLight)

                const { mixer } = await ModelLoader(scene, mixer, '/phi/scene.gltf', { 
                    castShadow: true,
                    receiveShadow: true,
                    scalar: 0.5
                })
                setMixer(mixer)

                const clock = new THREE.Clock()
                let previousTime = 0

                const RAF = () => {
                    const elapsedTime = clock.getElapsedTime()
                    const deltaTime = elapsedTime - previousTime
                    previousTime = elapsedTime

                    if (mixer) mixer.update(deltaTime * 10)

                    camera.position.x = Math.cos(elapsedTime) * 2
                    camera.position.z = Math.sin(elapsedTime) * 2
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

    return <LoaderContainer ref={refContainer}>{loading && <Loader />}</LoaderContainer>
}