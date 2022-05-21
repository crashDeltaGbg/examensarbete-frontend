import { reactive } from 'vue';

export default function useFetch() {
	const data = reactive({});

	const getData = async (collection, slug) => {
		const response = await fetch(
			`http://localhost/headless_wp/wp-json/wp/v2/${collection}?slug=${slug}`
		);
		//console.log(response);
		const result = await response.json();
		//console.log(result);
		data.value = await result[0];
		//console.log(data);
	};

	return {
		data,
		getData,
	};
}
