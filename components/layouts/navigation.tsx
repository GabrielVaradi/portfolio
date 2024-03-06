"use client"

import React, { useState, useEffect } from "react"
import { Navbar, Collapse, Typography } from "@material-tailwind/react"
import Hamburger from "../navigation/hamburger"
import NavList from "../navigation/navList"

const Navigation = () => {
	const [openNav, setOpenNav] = useState<boolean>(false)

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false)

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize)

		return () => {
			window.removeEventListener("resize", handleWindowResize)
		}
	}, [])

	return (
		<Navbar className="mx-auto max-w-screen-xl px-6 py-3">
			<div className="flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="#"
					variant="h6"
					className="mr-4 cursor-pointer py-1.5">
					Material Tailwind
				</Typography>
				<div className="hidden lg:block">
					<NavList />
				</div>
				<Hamburger isOpen={openNav} setIsOpen={setOpenNav} />
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	)
}

export default Navigation
