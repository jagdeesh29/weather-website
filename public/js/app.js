const weather = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')


weather.addEventListener('submit',(e)=>{
    e.preventDefault()
    message1.textContent = 'Loading'
    message2.textContent = ''
    const location = search.value
    const url = '/weather?address='+location
    //console.log(url)
    fetch(url).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            message1.textContent = data.error
        } else {
            message1.textContent = data.location
            message2.textContent = data.forecast
        }
    })
})
})