const tbody = document.querySelector('tbody');
const card = [];

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const campos =[
        document.querySelector('#artista'),
        document.querySelector('#dataShow'),
        document.querySelector('#cidade'),
        document.querySelector('#localShow'),
        document.querySelector('#mediaIngresso'),
        document.querySelector('#banner')
    ];

    console.log(campos);

    const tr = document.createElement('tr');

    campos.forEach((campo) => {
        const td = document.createElement('td');

        if(campo.type == 'file'){
            console.log(campo.value);
            let src = String(campo.value);
            src = src.replace('C:\\fakepath\\', '/imagens/');
            td.innerHTML = `<img src="${src}" width="200" height="auto">`;
            card.push(src);
        }
        else{
            td.textContent = campo.value;
            card.push(campo.value);
        }

        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    this.reset();

    let cards = document.querySelector('.cards-shows');
    cards.innerHTML +=`
    <div class="col-md-3 my-3">
        <div class="card">
            <img src="${card[5]}" class="card-img-top" alt="Show">
            <div class="card-body">
                <h2 class="card-title display-6">${card[0]}</h2>
                <p class="card-text lead">Data: ${card[1]}</p>
                <a href="#" class="btn btn-danger">Comprar Ingresso</a>
            </div>
        </div>
    </div>
    `
    card.splice(0);
});