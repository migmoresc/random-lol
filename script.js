import { TreeNode, Tree } from '/arbol.js';

let todos_campeones = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"];
let topp = ["Malphite", "Mordekaiser", "Darius", "Jax", "Sion", "Sett", "Garen", "Illaoi", "Jayce", "Fiora", "Teemo", "Nasus", "Yorick", "Dr. Mundo", "Cho'Gath", "Shen", "Riven", "Ornn", "Irelia", "Aatrox", "Olaf", "Gangplank", "K'Sante", "Renekton", "Yone", "Pantheon", "Kayle", "Camille", "Gwen", "Urgot"]; let jungle = ["Lee Sin", "Kayn", "Jarvan IV", "Master Yi", "Nocturne", "Vi", "Viego", "Kha'Zix", "Hecarim", "Shaco", "Wukong", "Ekko", "Warwick", "Diana", "Sylas", "Graves", "Gragas", "Kindred", "Evelynn", "Amumu", "Sejuani", "Zac", "Fiddlesticks", "Nunu & Willump", "Rammus", "Lillia", "Nidalee", "Bel'Veth", "Udyr", "Xin Zhao"]; let mid = ["Yasuo", "Ahri", "Katarina", "Zed", "Yone", "Veigar", "Sylas", "Fizz", "Aurelion Sol", "Akali", "LeBlanc", "Viktor", "Malzahar", "Vex", "Irelia", "Lux", "Vladimir", "Pantheon", "Annie", "Syndra", "Talon", "Lissandra", "Cassiopeia", "Ekko", "Akshan", "Diana", "Anivia", "Twisted Fate", "Qiyana", "Zoe"]; let adc = ["Jinx", "Ezreal", "Kai'Sa", "Caitlyn", "Jhin", "Miss Fortune", "Xayah", "Ashe", "Vayne", "Tristana", "Samira", "Lucian", "Varus", "Zeri", "Aphelios", "Draven", "Twitch", "Sivir", "Nilah", "Veigar", "Kog'Maw", "Kalista", "Yasuo", "Ziggs", "Karthus", "Seraphine", "Senna", "Swain", "Cho'Gath", "Lux"]; let support = ["Thresh", "Lux", "Senna", "Milio", "Nautilus", "Blitzcrank", "Morgana", "Lulu", "Rakan", "Yuumi", "Pyke", "Leona", "Karma", "Xerath", "Nami", "Zyra", "Brand", "Swain", "Seraphine", "Soraka", "Alistar", "Sona", "Ashe", "Janna", "Amumu", "Vel'Koz", "Pantheon", "Zilean", "Braum", "Annie"];
let campeones_imagenes = {};
let num_campeones = todos_campeones.length;
let num_jugadores = 1;
let tree;

inicializar();
function cargarListaCampeonesImagenes() {
    for (let x of todos_campeones) {
        campeones_imagenes[x] = `${x}.png`;
    }
}

function inicializar() {
    cargarListaCampeonesImagenes();
    tree = new Tree('0', '0');
    let flecha_derecha = document.querySelector(".flecha-derecha img");
    flecha_derecha.addEventListener("click", pasarEtapa);

    let flecha_izqda = document.querySelector(".flecha-izquierda img");
    flecha_izqda.addEventListener("click", volverAtras);

    let boton_mas = document.getElementById("boton-mas");
    boton_mas.addEventListener("click", anadirJugador);

    let check_aleatorio = document.getElementById("rol-j-1-r");
    check_aleatorio.addEventListener("click", anadirEventoCheckAleatorio);

    document.querySelector(".flecha-izquierda img").style.display = "none";
    document.querySelector(".flecha-derecha img").style.display = "none";
    anadirClickCheckbox("rol-j-1");
    anadirEventoNombre("jugador-1");
}

function anadirEventoNombre(nombre) {
    document.getElementById(nombre).addEventListener("keyup", (e) => {
        if (compruebaNombres() && hayChecks()) {
            document.querySelector(".flecha-derecha img").classList.add("manita");
        } else {
            document.querySelector(".flecha-derecha img").classList.remove("manita");
        }
    })
}

function anadirClickCheckbox(nombre) {
    let checks = document.querySelectorAll(`input[type=checkbox][name=${nombre}]:not([id=${nombre}-r])`);
    for (let check of checks) {
        check.addEventListener("click", (e) => {
            if (e.target.classList.contains("error")) {
                e.target.classList.remove("error");
            }
            if (e.target.checked) {
                añadirNodo(e.target.value, parseInt(nombre.slice(-1)));
                corregirChecks();
            } else {
                quitarNodo(e.target.value, parseInt(nombre.slice(-1)));
                cambiarChecksErrorRol(e.target.value, "quitar");
                corregirChecks();
            }

            if (compruebaNombres() && hayChecks()) {
                document.querySelector(".flecha-derecha img").classList.add("manita");
            } else {
                document.querySelector(".flecha-derecha img").classList.remove("manita");
            }
        });
    }
}

function corregirChecks() {
    for (let jugador = 1; jugador <= num_jugadores; jugador++) {
        let checks = document.querySelectorAll(`input[type="checkbox"][name="rol-j-${jugador}"]:checked:not([value="Random"])`)
        for (let check of checks) {
            if (!tree.existsRolInLevel(check.value, jugador)) {
                check.checked = false;
            }
        }
    }
}

function cambiarChecksErrorRol(rol, tarea) {
    let checks = document.querySelectorAll(`input[type=checkbox][value=${rol}]:checked`);
    for (let check of checks) {
        if (tarea === "poner") {
            check.classList.add("error");
        } else if (tarea === "quitar") {
            check.classList.remove("error");
        }
    }
}

function añadirNodo(rol, nivel) {
    if (!tree.insert(rol, nivel) && !hayChecks()) {
        cambiarChecksErrorRol(rol, "poner")
    } else {
        document.querySelectorAll(`input[type=checkbox].error`).forEach(check => check.classList.remove("error"));
    }
}

function quitarNodo(rol, nivel) {
    tree.remove(rol, nivel);
    if (!tree.existsNodeInLevel(nivel)) {
        let nodes = document.querySelectorAll(`input[type="checkbox"][name="rol-j-${nivel}"]:checked`);
        for (let node of nodes) {
            cambiarChecksErrorRol(node.value, "poner");
        }
    }
}

function anadirEventoCheckAleatorio() {
    let name = this.getAttribute("name");
    let checks = document.querySelectorAll(`input[type=checkbox][name=${name}]:not([id=${name}-r])`);
    for (let check of checks) {
        if (check.classList.contains("error")) {
            check.classList.remove("error");
        }
    }

    if (this.checked == false) {
        document.querySelector(".flecha-derecha img").style.display = "none";
    } else {
        let checks = document.querySelectorAll(`input[type=checkbox][name=${name}]:not([id=${name}-r]):not(:checked)`);
        for (let check of checks) {
            check.click();
        }
        if (compruebaNombres()) {
            if (this.classList.contains("error")) {
                this.classList.remove("error");
            }
            document.querySelector(".flecha-derecha img").classList.add("manita");
        }
    }

    corregirChecks();
}

function hayErrores() {
    return (document.querySelectorAll("input[type='checkbox'].error").length != 0)
}

function anadirJugador() {
    let comprobacion1 = compruebaNombres();
    let boton_mas = document.getElementById("boton-mas");

    if (comprobacion1 && !hayErrores() && hayChecks()) {
        num_jugadores += 1;
        let jugador_nuevo = `<span><label for="jugador-${num_jugadores}">Jugador ${num_jugadores}</label></span><span><input type="text" name="jugador-${num_jugadores}" id="jugador-${num_jugadores}" maxlength="20"></span><span><input type="checkbox" name="rol-j-${num_jugadores}" id="rol-j-${num_jugadores}-t" value="Top"></span><span><input type="checkbox" name="rol-j-${num_jugadores}" id="rol-j-${num_jugadores}-j" value="Jungle"></span><span><input type="checkbox" name="rol-j-${num_jugadores}" id="rol-j-${num_jugadores}-m" value="Mid"></span><span><input type="checkbox" name="rol-j-${num_jugadores}" id="rol-j-${num_jugadores}-a" value="Adc"></span><span><input type="checkbox" name="rol-j-${num_jugadores}" id="rol-j-${num_jugadores}-s" value="Support"></span><span><input type="checkbox" name="rol-j-${num_jugadores}" id="rol-j-${num_jugadores}-r" value="Random"></span></div>`;
        document.getElementById("tabla-jugadores").insertAdjacentHTML("beforeend", jugador_nuevo);

        anadirClickCheckbox(`rol-j-${num_jugadores}`);
        anadirEventoNombre(`jugador-${num_jugadores}`);
        document.getElementById(`rol-j-${num_jugadores}-r`).addEventListener("click", anadirEventoCheckAleatorio);

        if (num_jugadores == 5) {
            boton_mas.value = "Siguiente";
            boton_mas.innerHTML = "Siguiente";
            boton_mas.removeEventListener("click", anadirJugador);
            boton_mas.addEventListener("click", pasarEtapa);
        }
    }
}

function hayChecks() {
    for (let x = 1; x <= num_jugadores; x++) {
        let checks = document.querySelectorAll(`input[type="checkbox"][name="rol-j-${x}"]:checked`);
        if (checks.length == 0) {
            document.querySelectorAll(`input[type="checkbox"][name="rol-j-${x}"]`).forEach(check => check.classList.add("error"));
            return false;
        }
    }
    return true;
}

function compruebaNombres() {
    let cuenta_nombres = {};
    let nombres = document.querySelectorAll("input[type=text]");
    let todo_correcto = true;
    let s = new Set();
    let a = new Array();
    for (let nombre of nombres) {
        if (nombre.value == "") {
            nombre.classList.add("error");
            todo_correcto = false;
        }
        a.push(nombre.value);
        s.add(nombre.value);
        if (!cuenta_nombres[nombre.value]) {
            cuenta_nombres[nombre.value] = 1;
        } else {
            cuenta_nombres[nombre.value] += 1;
        };
    }

    if (todo_correcto) {
        if (a.length != s.size) {
            todo_correcto = false;
            let inputs_nombre = document.querySelectorAll(`input[type="text"]`);
            for (let input of inputs_nombre) {
                if (cuenta_nombres[input.value] > 1) {
                    input.classList.add("error");
                }
            }
        } else {
            todo_correcto = true;
            let inputs_nombre_error = document.querySelectorAll(`input[type="text"].error`);
            if (inputs_nombre_error.length != 0) {
                for (let input of inputs_nombre_error) {
                    input.classList.remove("error");
                }
            }
        }
    } else {
        document.querySelector(".flecha-derecha img").classList.remove("manita");
    }
    return (todo_correcto);
}

function pasarEtapa() {
    document.querySelector(".flecha-izquierda img").classList.add("manita");
    document.querySelector(".etapa-1").style.transform = "translate(-150vw,-50%)";
    document.querySelector(".etapa-2").style.transform = "translate(-50%,-50%)";
    if (document.getElementById(`jugador-${num_jugadores}`).value == "") {
        num_jugadores -= 1;
    }
    calcularRandom();
}

function volverAtras() {
    document.querySelector(".etapa-1").style.transform = "translate(-50%,-50%)";
    document.querySelector(".etapa-2").style.transform = "translate(100vw,-50%)";
}
/*
let topp,jungle,mid,adc,support [lista con los 30 campeones más jugados]
let pos_jX (x 1,2,3,4,5) es un set que contiene los roles seleccionados (Top,Jungle,Mid,Adc,Support)
*/
function calcularRandom() {
    let posibilidades = [];
    let num_random;
    let checks = document.querySelectorAll(`input[type="checkbox"][name="rol-j-${num_jugadores}"]:checked`);

    for (let check of checks) {
        posibilidades.push(tree.getRoutes(check.value, num_jugadores));
    }

    let pos = Math.floor(Math.random() * posibilidades.length);
    let seleccion_roles = posibilidades[pos][0];

    seleccion_roles.reverse();
    let picks = [];

    for (let jugador = 1; jugador <= num_jugadores; jugador++) {
        let rol = seleccion_roles[jugador - 1].toLowerCase();

        document.querySelector(`.etapa-2 .${rol}`).innerHTML = document.getElementById(`jugador-${jugador}`).value;

        if (document.querySelector(`input[type="checkbox"][id="rol-j-${jugador}-r]:checked`)) {
            do {
                num_random = Math.floor(Math.random() * num_campeones);
            } while (todos_campeones[num_random] in picks);
        } else {

            switch (rol) {
                case "top":
                    do {
                        num_random = Math.floor(Math.random() * topp.length);
                    } while (topp[num_random] in picks);
                    document.querySelector(`.${rol}-img`).src = "assets/images/" + campeones_imagenes[topp[num_random]];
                    break;
                case "jungle":
                    do {
                        num_random = Math.floor(Math.random() * jungle.length);
                    } while (jungle[num_random] in picks);
                    document.querySelector(`.${rol}-img`).src = "assets/images/" + campeones_imagenes[jungle[num_random]];
                    break;
                case "mid":
                    do {
                        num_random = Math.floor(Math.random() * mid.length);
                    } while (mid[num_random] in picks);
                    document.querySelector(`.${rol}-img`).src = "assets/images/" + campeones_imagenes[mid[num_random]];
                    break;
                case "adc":
                    do {
                        num_random = Math.floor(Math.random() * adc.length);
                    } while (adc[num_random] in picks);
                    document.querySelector(`.${rol}-img`).src = "assets/images/" + campeones_imagenes[adc[num_random]];
                    break;
                case "support":
                    do {
                        num_random = Math.floor(Math.random() * support.length);
                    } while (support[num_random] in picks);
                    document.querySelector(`.${rol}-img`).src = "assets/images/" + campeones_imagenes[support[num_random]];
                    break;
            }
        }
    }
}