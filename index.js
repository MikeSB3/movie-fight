const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'a169202f',
            i: 'tt0848228'
        }
    });
    console.log(response.data);
}

fetchData();
