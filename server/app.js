/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data = require('./data');
const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 3035;
const bodyParser = require('body-parser');
const { validateState, filterProduct, filterTag } = require('./utils/utils');

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:3030']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/products', async (req, res) => {
  try {
    const searching = await req.body.data;
    const limit = await req.body.limit;
    const page = await req.body.page;

    const productResultState = data.filter((product) => {
      return validateState(product)
    });

    const productResult = productResultState.filter((product) => {
     return filterProduct(product, searching)
    });

    const productTag = productResultState.filter((product) => {
      let tagAux = false;
       product.tags.filter(tag => {
         if (filterTag(tag, searching))
         tagAux = true;
      });
      return tagAux;
    });

    let productResultDef = new Set([...productResult, ...productTag]);
    productResultDef = [...productResultDef];
    const count = await productResultState.length;
    const totalPages = Math.ceil(count / limit);
    const { headers, method, url } = req;
    const responseBody = { headers, method, url, data: productResultDef, length: count };
    res.json(responseBody);
  } catch (err) {
    return res.status(500).json(err)
  }
});

app.listen(port, () => {
  console.log(`[Server running on ${hostname}:${port}]`);
});
