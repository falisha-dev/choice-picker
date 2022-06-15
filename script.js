const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

// this a function for focusing
textArea.focus()

// keyup is an eventListener. when you press down and let go keyup will happen
textArea.addEventListener('keyup', (e) => {
    // we call a function called createTags ni o
    createTags(e.target.value)
    // the target is property while value is whatever i typed in
    if(e.key === 'Enter'){

        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()

    }
})
function createTags(input){
   
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // split islike blah blah to turn it to  an array
    // filter is also an array method that allows you to return something based on a condition

    // console.log(tags)
    
    tagsEl.innerHTML = ''
    // WE cleared everything,before continuing

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
        
    });
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highLightTag(randomTag)

        setTimeout(() => {
            unHighLightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highLightTag(randomTag)
        }, 100)

    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag){
    tag.classList.add('highLight')
}

function unHighLightTag(tag){
    tag.classList.remove('highLight')
}