import { ref } from 'vue';

export default function useFetch() {
	const data = ref([]);

	const getData = async (collection, query) => {
    const url = ref('');
    if (query) {
      url.value = `https://ithscms.yxelflod.se/wp-json/wp/v2/${collection}?${query}`;
    } else {
      url.value = `https://ithscms.yxelflod.se/wp-json/wp/v2/${collection}`;
    }
    const response = await fetch(url.value);
		//console.log(response);
		//const result = await response.json();
		//console.log(result);
		//data.value = await result;
		//console.log(data);
    data.value = await response.json();
    console.log(data.value);
	};

	return {
		data,
		getData,
	};
}
