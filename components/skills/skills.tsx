"use client"

import React from "react"
import Skill from "./skill"
import { skills } from "@/data/skills"
const Skills = () => {
	return (
		<div className="flex">
			{skills.map(skill => (
				<Skill key={skill.name} name={skill.name} icon={skill.icon} />
			))}
		</div>
	)
}

export default Skills
