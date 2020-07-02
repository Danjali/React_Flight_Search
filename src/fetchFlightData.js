// export default function fetchFlightData() {
//     fetch(`https://tw-frontenders.firebaseio.com/advFlightSearch.json`, {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json'}
//       })
//       .then(res => res.json())
//       .then(response => {
//         setFlightData(response);
//       })
//       .catch(error => {
//         console.log(console.error); // handle error more efficiently later https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd
//       })
//     }, []);
// }