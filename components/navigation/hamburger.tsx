"use client"

import React from "react"
import { IconButton } from "@material-tailwind/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

interface Hamburger {
	isOpen: boolean
	setIsOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void
}

const Hamburger = ({ isOpen, setIsOpen }: Hamburger) => {
	return (
		<IconButton
			variant="text"
			className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
			ripple={false}
			onClick={() => setIsOpen(!isOpen)}>
			{isOpen ? (
				<XMarkIcon className="h-6 w-6" strokeWidth={2} />
			) : (
				<Bars3Icon className="h-6 w-6" strokeWidth={2} />
			)}
		</IconButton>
	)
}

export default Hamburger
