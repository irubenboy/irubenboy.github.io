const languages = [
    {
        name: 'CSS',
        iconPath: '/assets/img/css.png',
        color: '#663399',
        bg: '#66339950',
        path: '../../web'
    },
    {
        name: 'Javascript',
        iconPath: '/assets/img/javascript.png',
        color: '#f9d856',
        bg: '#f9d85650',
        path: '../../javascript'
    },
    {
        name: 'PHP',
        iconPath: '/assets/img/php.png',
        color: '#7276AA',
        bg: '#7276AA50',
        path: '../../php'
    },
    {
        name: 'Java',
        iconPath: '/assets/img/java.png',
        color: '#d55c3e',
        bg: '#d55c3e50',
        path: '../../java'
    },
    {
        name: 'SQL',
        iconPath: '/assets/img/sql.png',
        color: '#f9d856',
        bg: '#f9d85650',
        path: '../../sql'
    },
    {
        name: 'Flutter',
        iconPath: '/assets/img/flutter.png',
        color: '#526cfe',
        bg: '#526cfe50',
        path: '../../dart'
    },
    {
        name: 'Node',
        iconPath: '/assets/img/nodejs.png',
        color: '#3DA331',
        bg: '#3DA33150',
        path: '../../node'
    },
    {
        name: 'React',
        iconPath: '/assets/img/react.png',
        color: '#afeeff',
        bg: '#afeeff50',
        path: '../../react'
    },
    {
        name: 'Android',
        iconPath: '/assets/img/android.png',
        color: '#2EDF85',
        bg: '#2EDF8550',
        path: '../../android'
    }
]


const container = document.createElement('div')
container.classList.add('cards-container')

for (const language of languages) {
    const card = document.createElement('a')
    card.href = language.path
    card.classList.add('card-container')

    card.style.setProperty('--main-color', language.color)
    card.style.setProperty('--main-bg', language.bg)

    const title = document.createElement('h2')
    title.classList.add('card-title')
    title.textContent = language.name

    const icon = document.createElement('img')
    icon.classList.add('card-image')
    icon.src = language.iconPath
    icon.alt = language.name

    card.appendChild(icon)
    card.appendChild(title)

    container.appendChild(card)
}


document.body.appendChild(container)

document.querySelector('input').addEventListener('keypress', filter)

function filter(e) {
    const cards = document.querySelectorAll('.card-container')
    const value = e.target.value.toLowerCase()

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase()
        if (title.includes(value)) {
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        }
    })

}