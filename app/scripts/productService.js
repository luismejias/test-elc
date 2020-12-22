


  export const getData = () => {
    const URI = 'http://localhost:3035/products';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const response = fetch(URI, { headers })
      .then((response) => {
        const data = response.json();
        return data;
      });

    return response;
  }