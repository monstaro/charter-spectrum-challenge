export const getRestaurants = () => {
    return fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Api-Key q3MNxtfep8Gt'
        },        
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

export default getRestaurants;