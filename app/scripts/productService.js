
// this importation is necessary when we want use async/await with that We prevent error of regeneratorRuntime
import regeneratorRuntime from "regenerator-runtime";
export const getData = (searching, limit, page) => {
    const URI = 'http://localhost:3035/products';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const body = JSON.stringify({
      data: searching,
      limit,
      page
    });

    const response =  fetch(URI, { headers, body, method: 'post' })
      .then((response) => {
        const data = response.json();
        return data;
      });

    return response;
  }