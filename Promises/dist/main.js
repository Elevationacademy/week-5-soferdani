// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })


// $.ajax({
//     method: "GET",
//     url: "/randomWord",
//     success: function (word) {
//         $.ajax({
//             method: "GET",
//             url: `/synonyms/${word}`,
//             success: function (synonyms) {
//                 $.ajax({
//                     method: "GET",
//                     url: `sentiment/${word}`,
//                     success: function (sentiment) {
//                         console.log(`
//                         The word ${word} has a 
//                         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//                         its synonyms are: ${synonyms}`)
//                     },
//                     error: function (err) {
//                         console.log(err)
//                     }
//                 })
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         })
//     },
//     error: function (err) {
//         console.log(err)
//     }
// })

// let p = $.get('/randomWord')

// p.then(function (word){
//     console.log(word);
//     console.log(p.state())
// })

// let r = $.get("/sentiment/Ploy")

// r.then(function(res){
//     console.log(res);
// // })


// $.get('/randomWord')
//     .then(function(word){
//         return $.get(`/synonyms/${word}`)
//     })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })
// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`)
//     })
//     .catch(function (error) { console.log(error) })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })
//     .catch(function (error) { console.log(error) })


// // $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 console.log(results)
//             })
//     })

//*!this is not working!*/
// $.get('/randomWords')
//     .then(function(word){
//        console.log(word);
//     })

// $.get('/randomWord')
//     .then(function(word){
//         return $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
//     })
//     .then (function(toLog){
//         console.log(toLog);
//     })
   

    $.get('/randomWord')
        .then(function (word) {
            let randomBook = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
            let randomGif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=Zj5YljZu6Kk6K6iqjuUC3PCOEAP4Uyen&limit=1`)
            Promise.all([randomBook, randomGif])
                .then(function (results) {
                    $("#toShow").append(
                        `<img src="${results[1].data[0].url}" alt="">
                        <p>${results[0]}</p>
                        <p>${word}</p>`
                    )
                })
        })

    

// reallt cool code here!! using promises
// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//     )
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     })

// class APIManager {
//     fetch() {
//         return $.get('/data')
//     }
// }

// class Renderer {
//     render(dataPromise) {
//         dataPromise.then(function (data) {
//             $("#body").append(`<div>${data}</div>`)
//         })
//     }
// }

// const apiManager = new APIManager()
// const renderer = new Renderer()

// let initialDataPromise = apiManager.fetch()
// renderer.render(initialDataPromise) //initial page load

// $(".some-thing").on("click", function () {
//     let newDataPromise = apiManager.fetch()
//     renderer.render(newDataPromise)
// })


