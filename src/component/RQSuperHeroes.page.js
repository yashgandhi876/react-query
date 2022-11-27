import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
	return axios.get("http://localhost:4000/superheroes");
};

function RQSuperHeroPage() {
    const { isLoading, data, isError, error } = useQuery("super-heroes", fetchSuperHeroes, { staleTime: Infinity });


    if(isLoading){
        return <h2>Loading......</h2>
    }

    if (isError) {
		return <h2>{error.message}</h2>;
    }

	return (
		<>
			<h2>RQSuperHeroPage</h2>
			<ul>
				{data?.data.map((singleData) => (
					<li key={singleData.id}>{singleData.name}</li>
				))}
			</ul>
		</>
	);
}

export default RQSuperHeroPage;