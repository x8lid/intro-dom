const parentDiv = document.createElement('div')
parentDiv.style.width = '20%'

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'

const text = document.createElement('p')
text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim voluptas labore at nostrum fugit.'
text.style.border = '3px solid brown';
text.style.borderRadius = '5px'
text.style.textAlign = 'center'
text.style.padding = '3px'

parentDiv.append(text)

const links = document.createElement('div')

parentDiv.append(links)
document.body.append(parentDiv);

const linkOne = document.createElement('a')
linkOne.href = "https://learn.javascript.ru/"
linkOne.textContent = 'Intocode'

const linkTwo = document.createElement('a')
linkTwo.href = "https://learn.javascript.ru/"
linkTwo.textContent = 'Google'

const linkThree = document.createElement('a')
linkThree.href = "https://learn.javascript.ru/"
linkThree.textContent = 'Instagram'

links.style.display = 'flex'
links.style.justifyContent = 'space-around'

links.append(linkOne, linkTwo, linkThree)