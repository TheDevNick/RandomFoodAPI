document.querySelector('button').addEventListener('click', getFoodPic)

function getFoodPic() {
    const food = document.querySelector('input').value
    const BASE_URL = `https://foodish-api.herokuapp.com/api/images/${food}`

    fetch(BASE_URL)
        .then(res => res.json())
        .then(foodPic => {
            document.querySelector('img').src = foodPic.image
            console.log(foodPic.image);
        })
}