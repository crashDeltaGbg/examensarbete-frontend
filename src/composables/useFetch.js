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
    data.value = await response.json();
	};

	return {
		data,
		getData,
	};
}
