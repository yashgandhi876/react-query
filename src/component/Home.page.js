import { useEffect } from "react";

function HomePage() {
useEffect(()=> {
console.log("Hey")
}, [])
	return (
		<div>
			<p>Home Page</p>
		</div>
	);
}

export default HomePage;