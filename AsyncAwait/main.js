

const fetchData = async function (surname) {
    let resultsFromSerch = await Person.find({ lastName: surname })
    return resultsFromSerch
    console.log(resultsFromSerch);
}



const loadPage = async function() {
    let data = await fetchData('sofer')
}

loadPage()

