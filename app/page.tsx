import Link from "next/link"
import Skills from "@/components/skills/skills"
export default function Home() {
	return (
		<div>
			<Link href="/test">Test</Link>
			<div> Bio / About</div>
			<a
				href="/files/GabrielVaradi Resume.pdf"
				download="GabrielVaradi Resume">
				Download Resume
			</a>
			<Skills />
			<div>Experiences</div>
			<div> My projects</div>
			<div> Contact</div>
		</div>
	)
}
