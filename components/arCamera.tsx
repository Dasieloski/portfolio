'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton'

export function ArCamera({ onClose }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.xr.enabled = true

        containerRef.current.appendChild(renderer.domElement)
        document.body.appendChild(ARButton.createButton(renderer))

        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        cube.position.set(0, 0, -0.5)
        scene.add(cube)

        const animate = () => {
            renderer.setAnimationLoop(() => {
                cube.rotation.x += 0.01
                cube.rotation.y += 0.01
                renderer.render(scene, camera)
            })
        }

        animate()

        return () => {
            renderer.setAnimationLoop(null)
            containerRef.current.removeChild(renderer.domElement)
        }
    }, [])

    return (
        <div ref={containerRef} className="relative w-full h-64">
            <button
                className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded"
                onClick={onClose}
            >
                Cerrar AR
            </button>
        </div>
    )
}