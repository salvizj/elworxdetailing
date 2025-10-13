export default function HandleNavMenuToggle() {
	document.addEventListener("DOMContentLoaded", () => {
		const navOpenBtn = document.querySelector<HTMLElement>("#nav-open-btn")
		const navCollapseBtn =
			document.querySelector<HTMLElement>("#nav-collapse-btn")
		const navOpen = document.querySelector<HTMLElement>(".nav-open")
		const navCollapsed = document.querySelector<HTMLElement>(".nav-collapsed")

		if (!navOpenBtn || !navCollapseBtn || !navOpen || !navCollapsed) return

		navOpenBtn.addEventListener("click", () => {
			navOpen.classList.remove("-translate-x-full")
			navCollapsed.classList.add("-translate-x-full")
			navOpenBtn.classList.add("hidden")
		})

		navCollapseBtn.addEventListener("click", () => {
			navOpen.classList.add("-translate-x-full")
			navCollapsed.classList.remove("-translate-x-full")
			navOpenBtn.classList.remove("hidden")
		})

		window.addEventListener("resize", () => {
			if (window.getComputedStyle(navOpenBtn).display === "none") {
				navOpen.classList.add("-translate-x-full")
				navCollapsed.classList.remove("-translate-x-full")
				navOpenBtn.classList.remove("hidden")
			}
		})
		window.addEventListener("hashchange", function () {
			navOpen.classList.add("-translate-x-full")
			navCollapsed.classList.remove("-translate-x-full")
			navOpenBtn.classList.remove("hidden")
		})
	})
}
