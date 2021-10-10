
// variaveis 
let boxTop = 0;
let boxLeft = 0;
let linha = 9
let coluna = 0

// dom
let home = document.querySelector('main')



const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 'F'],
    ['S', 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

create()

function create() {

    for (let i = 0; i < map.length; i++) {

        let linha = document.createElement('section')
        linha.setAttribute('class', 'linha linha' + i)
        home.appendChild(linha)

        for (let c = 0; c < map[i].length; c++) {

            let LinhaPAi = document.querySelector('.linha' + i)

            if (map[i][c] === 1) {

                let parede = document.createElement('div')
                parede.setAttribute('class', 'parede')
                LinhaPAi.appendChild(parede)

            } else if (map[i][c] === 0) {

                let caminho = document.createElement('div')
                caminho.setAttribute('class', 'caminho caminho' + c)
                LinhaPAi.appendChild(caminho)

            } else if (map[i][c] === 'S') {

                let box = document.createElement('div')
                box.setAttribute('class', 'box')
                LinhaPAi.appendChild(box)

                let bolinha = document.createElement('div')
                bolinha.setAttribute('id', 'bola')
                box.appendChild(bolinha)

            } else if (map[i][c] === 'F') {

                let chegada = document.createElement('div')
                chegada.setAttribute('class', 'buraco')
                LinhaPAi.appendChild(chegada)

            }

        }
    }
}

document.addEventListener('keydown', (event) => {

    const keyName = event.key;
    console.log(keyName);

    if (keyName === 'ArrowDown') {

        linha = linha + 1

        if (map[linha][coluna] === 0) {

            boxTop += 35
            document.getElementById('bola').style.top = boxTop + 'px'
            console.log('linha' + linha)
            console.log('coluna' + coluna)

        } else {
            linha = linha - 1
        }



    } else if (keyName === 'ArrowUp') {

        linha = linha - 1

        if (map[linha][coluna] === 0) {

            boxTop -= 35
            document.getElementById('bola').style.top = boxTop + 'px'
            console.log(boxTop)
            console.log('linha' + linha)
            console.log('coluna' + coluna)

        } else {
            linha = linha + 1
        }




    } else if (keyName === 'ArrowLeft') {

        if (coluna != 1) {

            coluna = coluna - 1

            if (map[linha][coluna] === 0) {

                boxLeft -= 35
                document.getElementById('bola').style.left = boxLeft + 'px'
                console.log('linha' + linha)
                console.log('coluna' + coluna)

            } else {
                coluna = coluna + 1
            }
        }

    } else if (keyName == 'ArrowRight') {

        coluna = coluna + 1

        if (map[linha][coluna] === 0 || map[linha][coluna] === 'F') {

            boxLeft += 35
            document.getElementById('bola').style.left = boxLeft + 'px'
            console.log('linha' + linha)
            console.log('coluna' + coluna)

        } else {
            coluna = coluna - 1
        }

    }


    if( linha === 8 && coluna === 20){
    vit()
    
    }


})

function vit() {

        let telaVit = document.createElement('section')
        telaVit.setAttribute('id', 'destino')
        telaVit.innerHTML = 'Capitão chegamos no nosso Destino - Parábens'
        home.appendChild(telaVit)
        console.log('chegou')
    
}


