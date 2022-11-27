import axios from "axios";
import { useState, useEffect } from "react";

function SuperHeroesPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/superheroes").then((res) => {
		setData(res.data);
		setIsLoading(false);
	}).catch(error => {
        setError(error.message)
        setIsLoading(false)
    });
    }, [])

    if(isLoading){
        return <h1>Loading.....</h1>
    }

    if (error) {
		return <h1>Request failed with 400 status</h1>;
    }

	return (
		<>
			<h3>Super Heroes :</h3>

			<ul>
				{data.map((oneData) => (
					<div key={oneData.id}>{oneData.name}</div>
				))}
			</ul>
		</>
	);
}

export default SuperHeroesPage;