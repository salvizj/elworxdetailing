import * as THREE from "three"
import { MTLLoader, OBJLoader } from "three-stdlib"

export default function HandleCarScene() {
	const container = document.getElementById("car-scene")
	const scene = new THREE.Scene()
	scene.background = null

	const containerWidth = container.clientWidth || window.innerWidth
	const containerHeight = container.clientHeight || window.innerHeight

	const camera = new THREE.PerspectiveCamera(
		75,
		containerWidth / containerHeight,
		0.1,
		2000
	)
	camera.position.set(300, 200, 0)
	camera.lookAt(0, 0, 0)

	const renderer = new THREE.WebGLRenderer({ alpha: true })
	renderer.setSize(containerWidth, containerHeight)
	container.appendChild(renderer.domElement)

	const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
	directionalLight.position.set(10, 20, 10)
	directionalLight.castShadow = false
	scene.add(directionalLight)

	const ambientLight = new THREE.AmbientLight(0x808080, 10)
	scene.add(ambientLight)

	const fillLight = new THREE.DirectionalLight(0xffffff, 10)
	fillLight.position.set(-10, 10, -10)
	scene.add(fillLight)

	const topLight = new THREE.DirectionalLight(0xffffff, 4)
	topLight.position.set(0, 20, 0)
	scene.add(topLight)

	let car
	let targetRotationY = 0
	let targetRotationX = 0
	let lastScrollY = window.scrollY
	let scrollTimeout
	let isScrolling = false

	window.addEventListener("scroll", () => {
		const currentScrollY = window.scrollY
		const scrollDelta = currentScrollY - lastScrollY
		targetRotationY += scrollDelta * 0.003
		targetRotationX += scrollDelta * 0.001
		lastScrollY = currentScrollY
		isScrolling = true
		clearTimeout(scrollTimeout)
		scrollTimeout = setTimeout(() => {
			isScrolling = false
		}, 200)
	})

	const mtlLoader = new MTLLoader()
	mtlLoader.load(
		"/car.mtl",
		(materials) => {
			materials.preload()
			const objLoader = new OBJLoader()
			objLoader.setMaterials(materials)
			objLoader.load(
				"/car.obj",
				(object) => {
					car = object
					const box = new THREE.Box3().setFromObject(car)
					const center = box.getCenter(new THREE.Vector3())
					car.position.sub(center)
					car.position.x -= center.x
					car.position.z -= center.z
					car.position.y = 0
					scene.add(car)
				},
				undefined,
				(err) => console.error("OBJ loading error:", err)
			)
		},
		undefined,
		(err) => console.error("MTL loading error:", err)
	)

	function animate() {
		requestAnimationFrame(animate)
		if (car) {
			if (!isScrolling) {
				targetRotationY += 0.004
			}
			car.rotation.y += (targetRotationY - car.rotation.y) * 0.1
			car.rotation.x += (targetRotationX - car.rotation.x) * 0.1
			targetRotationX = Math.max(
				-Math.PI / 13,
				Math.min(Math.PI / 13, targetRotationX)
			)
		}
		renderer.render(scene, camera)
	}
	animate()

	function updateSize() {
		const width = container.clientWidth || window.innerWidth
		const height = container.clientHeight || window.innerHeight

		camera.aspect = width / height
		camera.updateProjectionMatrix()
		renderer.setSize(width, height)
	}

	window.addEventListener("resize", updateSize)

	return container
}
