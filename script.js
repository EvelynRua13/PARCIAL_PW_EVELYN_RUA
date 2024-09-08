const getValorInput = () =>{
    let inputTexto = document.getElementById('digimonInput');
    let valor = inputTexto.value.toLowerCase();
    peticionApi(valor)
}

const peticionApi = (nameDigimon) =>{
    const baseUrl = "https://digimon-api.vercel.app/api/digimon/"
    const enpoint = `name/${nameDigimon}`;
    const url = `${baseUrl}${enpoint}`;

    axios.get(url)
    .then(resp => printData(resp.data))
    .catch(err => window.alert('Digimon no encontrado... ', err));
}

const printData = (data) => {
    const [digimonData]=data;
    console.log(digimonData);
    document.getElementById('nameDigimon').innerText = `Nombre: ${digimonData.name}`;
    document.getElementById('digInfo').innerText = `Nivel: ${digimonData.level}`;
    document.getElementById('digimonImage').src = digimonData.img;}