let currency = fetch(
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
);

currency.then(function (res) {
  let data = res.json();
  return data;
}).then(function (data) {
  console.log(data);
  let keys = Object.keys(data);
  console.log(data.btc)
  // console.log(keys);
  let values = Object.values(data);
  // console.log(values);
})