// create map
const map = L.map('mapid').setView([-27.2226698,-49.642116], 15);

//create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', function(event){

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


// add photos camp
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pagar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última image adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // limpar o campo antes de adicionar nova imagem
    input.value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField (event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1){
    // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    // deletar o campo
    span.parentNode.remove();

}

// select yes or no
function toggleSelect (event) {
    // retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button').forEach(function (button){
        button.classList.remove('active')
    })
    //colocar a class .active no botão selecionado
    const button = event.currentTarget
    button.classList.add('active')
 
    //atualizar meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    console.log(input)

    input.value = button.dataset.value
}

function validate(event) {

    // validar se lat e lng estão preenchidos
    const needsLatAndLng = false
    if (needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }
    
}

