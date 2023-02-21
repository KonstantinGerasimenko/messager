import chat from './sideBar'
import format from 'date-fns/format'
import currMessager from './cards'

const input = document.querySelector('input')
const send = document.querySelector('#send')
let lastMessage: string = ''
let lastTime: string = ''

let users = [
	{
		messages: chat?.innerHTML,
		lastMessage,
		lastTime,
		name: 'Konstantin',
		surname: 'Gerasimenko'
	},
	{
		messages: chat?.innerHTML,
		lastMessage,
		lastTime,
		name: 'Sergey',
		surname: 'Bunos'
	}
]

const addMessage = () => {
	if (input?.value.length !== undefined && input?.value.length >= 1) {
		lastMessage = input?.value
		lastTime = format(new Date(), 'hh:mm')
		let message = document.createElement('div')
		message.className = 'message'
		message.innerHTML = `<h1>${lastMessage}</h1> <h2>${lastTime}</h2>`
		chat?.append(message)
		input!.value = ''
		users[currMessager].lastMessage = lastMessage
		users[currMessager].lastTime = lastTime 
	}
}

document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		addMessage
	}
})

send?.addEventListener('click', addMessage)

export default users
