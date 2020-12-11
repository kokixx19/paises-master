
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


var data = '[{"Pais": "Peru","Ubicacion" : "Se ubica en America del Sur","Mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16136210.825584043!2d-84.06182970207927!3d-9.108812279023104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses-419!2spe!4v1607653429101!5m2!1ses-419!2spe","Descripcion":"Perú es un país de Sudamérica que abarca una sección del bosque del Amazonas y Machu Picchu, una antigua ciudad inca en las alturas de los Andes. La región en torno a Machu Picchu, incluido el Valle Sagrado, el Camino del Inca y la ciudad colonial de Cuzco, es rica en sitios arqueológicos. En la costa árida del Pacífico de Perú se encuentra Lima, la capital, con un centro colonial preservado e importantes colecciones de arte precolombino.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/200px-Flag_of_Peru.svg.png"}, ' +
  '{ "Pais" : "Alemania" , "Ubicacion" : "Se ubica en Europa","Mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5131532.007343662!2d5.967978813358403!3d51.09681962835376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sAlemania!5e0!3m2!1ses-419!2spe!4v1607652515356!5m2!1ses-419!2spe","Descripcion":"Alemania es un país de Europa occidental con un paisaje de bosques, ríos, cadenas montañosas y playas en el mar del Norte. Tiene más de 2 milenios de historia. Berlín, su capital, cuenta con sitios de arte y vida nocturna, la Puerta de Brandeburgo y muchos sitios relacionados con la Segunda Guerra Mundial. Múnich es conocida por el Oktoberfest y los salones de la cerveza, incluido el Hofbräuhaus del siglo XVI. Fráncfort, con sus rascacielos, alberga el Banco Central Europeo.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/200px-Flag_of_Germany.svg.png"},' +
  '{"Pais": "Brasil", "Ubicacion":"Se ubica en America del Sur","Mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31760007.65149569!2d-69.67509713849078!3d-13.660557465749235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1ses-419!2spe!4v1607652790155!5m2!1ses-419!2spe","Descripcion":"Brasil es un vasto país de Sudamérica que se extiende desde la Cuenca del Amazonas en el norte hasta los viñedos y las enormes cataratas del Iguazú en el sur. Río de Janeiro, simbolizado por su estatua de 38 m del Cristo Redentor sobre el cerro del Corcovado, es famoso por sus ajetreadas playas Copacabana e Ipanema, junto con su enorme y estridente festival del Carnaval, que cuenta con carros alegóricos, exuberantes disfraces y danza y música samba.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/135px-Flag_of_Brazil.svg.png"},' +
  '{"Pais" : "Costa Rica" , "Ubicacion": "Se ubica en America del Norte","Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042191.956834409!2d-87.05311412510711!3d8.357010225871822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta%20Rica!5e0!3m2!1ses-419!2spe!4v1607652922060!5m2!1ses-419!2spe","Descripcion":"Costa Rica es un país de América Central con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino, Costa Rica es conocida por sus playas, sus volcanes y su biodiversidad. Aproximadamente un cuarto de su área corresponde a selvas protegidas, repletas de fauna, como el mono araña y los quetzales.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/135px-Flag_of_Costa_Rica.svg.png"},' +
  '{"Pais" : "Argentina" , "Ubicacion" : "Se ubica en America del Sur", "Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26095208.33289082!2d-81.61833324455823!3d-37.022909854489534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses-419!2spe!4v1607652996589!5m2!1ses-419!2spe","Descripcion":"Argentina es un país sudamericano de gran envergadura con un terreno que incluye las montañas de los Andes, lagos glaciales y praderas en las Pampas, la tierra tradicional de pastoreo de su famoso ganado. El país es conocido por el baile y la música del tango. Su gran capital cosmopolita, Buenos Aires, se centra en la Plaza de Mayo, rodeada por imponentes edificios del siglo XIX, como la Casa Rosada, el icónico palacio presidencial.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/135px-Flag_of_Argentina.svg.png"},' +
  '{"Pais" :  "Ecuador", "Ubicacion" :"Se ubica en America del Sur","Mapa" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8168899.200632921!2d-88.39419754023616!3d-1.3442303312344033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902387dda89a4bd5%3A0x9d76af04119c3702!2sEcuador!5e0!3m2!1ses-419!2spe!4v1607653056252!5m2!1ses-419!2spe","Descripcion":"En 1534, el capitán español Sebastián de Belalcázar conquistó las tierras ecuatorianas. Este, una vez tomada Quito, la refundó como ciudad española el 6 de diciembre de 1534, bautizándola como San Francisco de Quito en honor a Francisco Pizarro. Quito fue capital de la Presidencia de Quito y de la Real Audiencia de Quito, que formaba parte del Virreinato del Perú. Los españoles utilizaron los asentamientos urbanos indígenas y varios elementos de la estructura social autóctona como base de las nuevas ciudades mestizas, para colonizar los territorios que ocuparon."},' +
  '{"Pais": "Camerun" , "Ubicacion": "Se ubica en África","Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8103859.333138199!2d7.796280272514788!3d7.35809312471034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2zQ2FtZXLDum4!5e0!3m2!1ses-419!2spe!4v1607653111269!5m2!1ses-419!2spe","Descripcion":"Camerún, oficialmente la República de Camerún, es una república unitaria en el África central. Limita al noroeste con Nigeria, al este con Chad y la República Centroafricana, y al sur con Gabón, Congo y Guinea Ecuatorial. Su litoral se encuentra en el golfo de Biafra, que forma parte del golfo de Guinea."},' +
  '{"Pais" : "Estados Unidos" , "Ubicacion" :"Se ubica en America del Norte","Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8103859.333138199!2d7.796280272514788!3d7.35809312471034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sEstados%20Unidos!5e0!3m2!1ses-419!2spe!4v1607653243049!5m2!1ses-419!2spe","Descripcion":"Estados Unidos es un país de 50 estados que ocupa una extensa franja de América del Norte, con Alaska en el noroeste y Hawái que extiende la presencia del país en el océano Pacífico. Entre las principales ciudades de la costa del Atlántico, se encuentran Nueva York, un centro global financiero y cultural, y la capital Washington D. C. Chicago, metrópolis del medio oeste, es famosa por su influencia arquitectónica y, en la costa oeste, Hollywood, Los Ángeles, es famosa por la industria cinematográfica.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/135px-Flag_of_the_United_States.svg.png"},' +
  '{"Pais" : "Bolivia" ,"Ubicacion" : "Se ubica en America del Sur","Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7845679.779520784!2d-68.04555597135531!3d-16.22566574597655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8977bba295%3A0x1c9ec2bb0115edbf!2sBolivia!5e0!3m2!1ses-419!2spe!4v1607653280383!5m2!1ses-419!2spe","Descripcion":"Bolivia es un país del centro de Sudamérica, con un terreno variado desde los Andes, el Desierto de Atacama y el bosque pluvial en la cuenca del Amazonas. A más de 3,500 m de altura, su capital administrativa, La Paz, se ubica en el Altiplano de los Andes con el monte nevado Illimani de fondo. Cerca se encuentra el cristalino lago Titicaca, el más grande del continente, que se extiende por la frontera con Perú.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/135px-Flag_of_Bolivia.svg.png"},' +
  '{"Pais" : "Italia" , "Ubicacion" :"Se ubica en Europa","Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6146981.192556863!2d8.222404197396228!3d41.21183966480664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItalia!5e0!3m2!1ses-419!2spe!4v1607653316318!5m2!1ses-419!2spe","Descripcion":"Italia, país europeo con una larga costa mediterránea, influyó considerablemente en la cultura y la cocina occidental. Su capital, Roma, es hogar del Vaticano, de ruinas antiguas y de obras de arte emblemáticas. Otras ciudades importantes son Florencia, con obras maestras del renacimiento, como el David de Miguel Ángel y el Domo de Brunelleschi; Venecia, la ciudad de los canales; y Milán, la capital italiana de la moda.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/135px-Flag_of_Italy.svg.png"}, ' +
  '{"Pais": "España" , "Ubicacion" : "Se ubica en Europa","Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6146981.192556863!2d8.222404197396228!3d41.21183966480664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2zRXNwYcOxYQ!5e0!3m2!1ses-419!2spe!4v1607653345641!5m2!1ses-419!2spe","Descripcion":"España, país de la península ibérica de Europa, incluye 17 regiones autónomas con diversas características geográficas y culturales. En Madrid, su capital, se encuentra el Palacio Real y el Museo del Prado, que alberga obras de maestros europeos. Segovia tiene un castillo medieval (el Alcázar) y un acueducto romano intacto. La capital de Cataluña, Barcelona, se caracteriza por las obras modernistas extravagantes de Antoni Gaudí, como el templo de la Sagrada Familia.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/135px-Flag_of_Spain.svg.png"},' +
  '{"Pais" : "Francia" , "Ubicacion" : "Se ubica en europa","Mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6247519.38267622!2d-8.203135715514733!3d40.13010720764339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrancia!5e0!3m2!1ses-419!2spe!4v1607653386259!5m2!1ses-419!2spe","Descripcion":"Francia, en Europa Occidental, abarca ciudades medievales, villas alpinas y playas mediterráneas. París, su capital, es famosa por sus firmas de alta costura, los museos de arte clásico, como el Louvre, y monumentos como la Torre Eiffel. El país también es reconocido por sus vinos y su gastronomía sofisticada. Los dibujos de la antigua cueva de Lascaux, el teatro romano de Lyon y el imponente Palacio de Versalles dan fe de su rica historia.","Bandera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/135px-Flag_of_France.svg.png"}]';



function mostrarPeru() {

  var el = document.getElementById('Peru');

  console.log(el.innerText, el.innerHTML);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;

  document.getElementById("maps").src = arr_pais[indice].Mapa;


  document.getElementById('myModal').style.display = 'block';





}


function mostrarEcuador() {

  var el = document.getElementById('Ecuador');

  console.log(el.innerText, el.innerHTML);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById('myModal').style.display = 'block';

}


function mostrarAlemania() {

  var el = document.getElementById('Alemania');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}

function mostrarArgentina() {

  var el = document.getElementById('Argentina');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}



function mostrarBrasil() {

  var el = document.getElementById('Brasil');

  console.log(el.innerText, el.innerHTML);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}


function mostrarCostaRica() {

  var el = document.getElementById('Costa Rica');

  console.log(el.innerText, el.innerHTML);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}


function mostrarCamerun() {

  var el = document.getElementById('Camerun');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}



function mostrarEstadosUnidos() {

  var el = document.getElementById('Estados Unidos');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}


function mostrarBolivia() {

  var el = document.getElementById('Bolivia');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}

function mostrarItalia() {

  var el = document.getElementById('Italia');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}

function mostrarEspana() {

  var el = document.getElementById('Espana');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}


function mostrarFrancia() {

  var el = document.getElementById('Francia');

  console.log(el.innerText);

  var arr_pais = JSON.parse(data);

  let indice = arr_pais.findIndex(arr => arr.Pais == el.innerText);

  console.log("ELemento encontrado en el indice " + indice);
  console.log(arr_pais[indice]); // Will log "Is My Favourate Game"

  document.getElementById('ubi').innerHTML = arr_pais[indice].Ubicacion;
  document.getElementById('des').innerHTML = arr_pais[indice].Descripcion;
  document.getElementById('pai').innerHTML = arr_pais[indice].Pais;
  document.getElementById("maps").src = arr_pais[indice].Mapa;
  document.getElementById("bandera").src = arr_pais[indice].Bandera;
  document.getElementById('myModal').style.display = 'block';

}









function offmodal() {

  document.getElementById('myModal').style.display = 'none';
}









// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";





  }


};






function Onload() {
  var arr_pais = JSON.parse(data);
  console.log(arr_pais);


  load();

}



// Function to 'load JSON' data
function load() {

}




//readTextFile("paises.json");







