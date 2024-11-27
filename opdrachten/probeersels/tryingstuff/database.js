async function fetchNormal() {
    const url = 'https://pokeapi.co/api/v2/type/1';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
    return {url}
  }

  export { fetchNormal };
  