// const myForm = document.getElementById('myForm');

// myForm.addEventListener('submit', function (e){
//     e.preventDefault();

//     const formData = new FormData(this);

//     fetch( `https://kardslist.heroku.com/register` , {
//         method: 'post',
//         body: formData
//     }).then(function (response) {
//         return response.text();
//     }).then(function (text) {
//         console.log(text);
//     })
// }).catch(function (error) {
//     console.log(error);
// })

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e){
    e.preventDefault();
    if (email.type === 'email'){
        alert('sent')

    }else {
        alert('fill form correctly')

    }
    

    const formData = new FormData(this);
    const searchParams = new URLSearchParams();

    for (const pair of formData){
        searchParams.append(pair[0], pair[1]);
    }
    fetch( `https://kardslist.herokuapp.com/register` , {
        method: 'post',
        body: searchParams
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);

    })
}).catch(function (error) {
    console.log(error);
})