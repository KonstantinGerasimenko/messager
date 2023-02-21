import users from './message'

const menuBody = document.querySelector('#menuBody')
let currMessager = 0

for (let i = 0; i < users.length; i++) {
	let card = document.createElement('a')
	card.href = 'index.html'
	card.className = 'card'
  card.onclick = function(){currMessager=i}
	card.innerHTML = `
    <div class="info">
      <div class="avatar"></div>
        <section>
          <div class="text">
            <h1>${users[i].name} ${users[i].surname}</h1>
            <h2>online 10 seconds ago</h2>
          </div>
          <div class="message">${users[i].lastMessage}</div>
        </section>
      </div>
    <h2 class="time">${users[0].lastTime}</h2>
  `
  menuBody?.append(card)
}

export default currMessager