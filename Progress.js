let names = ['Ben', 'captain', 'Robert', 'Strange', 'Gwen']
const main = document.querySelector('main')

let aboutData = [
    {
        'Ben': {
            'header': 'Ben Tennyson',
            'detail': 'Ten-year-old Ben Tennyson discovers a mysterious device, the Omnitrix, on a family vacation.',
            'img': 'Images/ben 10.jpg'
        }
    },
    {
        'captain': {
            'header': 'Captain America',
            'detail': 'Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics.',
            'img': 'Images/capain.jpg'
        }
    },
    {
        'Robert': {
            'header': 'Robert John Downey Jr',
            'detail': "Robert John Downey Jr.Born April 4, 1965 is an American actor. His films as a leading actor have grossed over $14 billion worldwide.",
            'img': 'Images/Robert.jpg'
        }
    },
    {
        'Strange': {
            'header': 'Dr.Stephen Strange',
            'detail': 'Dr.Stephen Vincent Strange is a fictional character appearing in American comic books published by Marvel Comics.',
            'img': 'Images/Strange.jpg'
        }
    },
    {
        'Gwen': {
            'header': 'Spider Man',
            'detail': 'Spider-Man is a superhero in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko.',
            'img': 'Images/spider.jpg'
        }
    }
]

let number = 0
let intervaID;
let ans = Object.entries(aboutData).length

const section = document.createElement('section')
section.className = 'section'
const img = document.createElement('img')
const header = document.createElement('h3')
const pTag = document.createElement('p')
const progressBarHead = document.createElement('section')
var widthCalculate;
if (names.length > 10) {
    widthCalculate = 80
} else if (names.length > 5) {
    widthCalculate = 85
} else if (names.length <= 2) {
    widthCalculate = 96
} else {
    widthCalculate = 90
}

const width = widthCalculate / names?.length

const settingAndRemovingID = () => {
    setTimeout(() => {
        header.id = 'animate';
        pTag.id = 'animate';
    }, 0);

    setTimeout(() => {
        header.removeAttribute('id');
        pTag.removeAttribute('id');
        img.removeAttribute('id')
    }, 1000);
}

function start() {
    let displayCharName = names[number];
    for (const a of aboutData) {
        for (const b in a) {
            if (displayCharName === b.trim()) {
                header.textContent = a[b]?.header;
                pTag.textContent = a[b].detail;
                img.setAttribute('src', a[b].img);
                settingAndRemovingID()

                gettingDivElementForProgress[number].style.border = '2px solid white'
                gettingDivElementForProgress[number].style.opacity = '1'
                gettingDivElementForProgress[number].style.transition = '0.9s all ease-in-out'
            }
        }
    }
    section.appendChild(header);
    section.appendChild(pTag);
    main.appendChild(img)
    main.appendChild(section)

    number++;
    intervaID = setInterval(showData, 5000)
}

for (let a = 0; a < names.length; a++) {
    const divProgress = document.createElement('div')
    divProgress.className = 'progress_container'
    divProgress.style.width = `${Math.floor(width)}%`
    progressBarHead.appendChild(divProgress)
    progressBarHead.className = 'progressHead'
    main.appendChild(progressBarHead)
}
pTag.className = 'para'
const gettingDivElementForProgress = document.querySelectorAll('.progress_container')

function showData() {
    if (number >= ans) {
        number = 0
        gettingDivElementForProgress.forEach((value)=>{
            value.style.border = '2px solid #9c9292'
        });
    }

    let displayCharName = names[number]
    for (const a of aboutData) {
        for (const b in a) {
            if (displayCharName == b.trim()) {
                header.textContent = ''
                pTag.textContent = '';
                img.setAttribute('src', '')
                header.removeAttribute('id');
                pTag.removeAttribute('id');

                header.textContent = a[b]?.header
                header.id = 'animate'
                pTag.textContent = a[b].detail;
                pTag.id = 'animate'
                img.setAttribute('src', a[b].img)

                gettingDivElementForProgress[number].style.border = '2px solid white'
                gettingDivElementForProgress[number].style.opacity = '1'
                gettingDivElementForProgress[number].style.transition = '0.6s all ease-in-out'

                settingAndRemovingID()
                break;
            }
        }
    }
    number++
}

section.appendChild(header)
section.appendChild(pTag)
main.appendChild(img)
main.appendChild(section)

function stop() {
    clearInterval(intervaID)
}

start()