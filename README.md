# FembedSourceScrapper-API (v1.0.0)

:fire: **API** built to get original video sources from fembed.com by web scrapping

## **Tools**

- [x] puppeteer
- [x] express
- [x] morgan
- [x] nodemon

## **Usage**

> **Install**
```bash
$ git clone https://github.com/atleugim/Fembed-Source-Scrapper.git

$ npm install
```

> **Run server with _NODE_**:

```bash
$ npm run start
```

> **Run server with _NODEMON_**:

```bash
$ npm run dev
```

## **Endpoints**

> **BASE_URL:**

```bash
$ http://localhost:3000/api/v1
```

#

> Method: **GET** \
> Route: **/get-source?url=${FEMBED_URL}** \
> Example: **/get-source?url=https://www.fembed.com/v/e2jj2c-q4k7wdzq**

```js
// return an array with all sources (if available) with label and type
{
  success: true,
  data: {
    url: "https://www.fembed.com/v/e2jj2c-q4k7wdzq",
    sources: [
      {
        file: "https://fvs.io/redirector?token=QnNYRTQ0ZkcwcmdjSFpEV1pma2lKTHgrMjVBMWlIYzN1M0Q2My9LWUZwWWNhUkFVd1c5YkxsSU1ETHE3UnNDTzQ4ZDlkL1RCa202N3Z1YThXTjU1Wis1YUkxenNhVlF6ekQvUjVJYVI3SUdvR1NMcGd6aFhadjJGM2o2bHRINHI0RlBNRnJZaDE2b2NlL2dpSlBRSGF0OVRqa0phNjYzOG9nPT06aVhHb2RCRlhlN3dNbHNBdVJTWDlqdz09",
        label: "480p",
        type: "mp4"
      },
      {
        file: "https://fvs.io/redirector?token=cEhMeXpRWHBCM2dlMVJWc283ejE4ejcxeVp0RlEzSndWWDdNOHpoNXBRSXhzTWNDelNtMHRJWjR4ODM5YlZEd2FNdi9LM0RrRVJNUEFlK2lDV1Brckg3dzJONEJ1MVdSazJwV1VXNlNsYjY5SWtBUHBYWWlmTThEczVTQ1JxY2UxbEFrUnVudVRvTURLZWZHU0RjcEhzclRUUVZ2cm9tcFh3PT06YU4xQnhwaUVWUm4zWlpDTEZBMlY5UT09",
        label: "720p",
        type: "mp4"
      }
    ]
  }
}
```

## **Author**

> Miguel Vega