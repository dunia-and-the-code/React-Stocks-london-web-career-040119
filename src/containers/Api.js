
//to import individual function
export function getStocks(){
 return fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
}

export default getStocks 
//thos potentianlly import from the whole api.js folder