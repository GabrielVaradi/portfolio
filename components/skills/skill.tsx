"use client"

import React from "react"
import Image from "next/image"
import { Typography } from "@material-tailwind/react"

interface Skill {
	name: string
	icon: string
}

const Skill = ({ name, icon }: Skill) => {
	return (
		<div className="flex flex-col items-center border-4 border-black p-4">
			<Image alt={name} src={icon} width={50} height={50} />
			<Typography>{name}</Typography>
		</div>
	)
}

export default Skill
