

const hobbies = ["assistir nba","jogar video game","comer fora","passar tempo com a Gabi","ouvir musica"]



console.log(hobbies)



console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])
console.log(hobbies[3])
console.log(hobbies[4])



hobbies[4] = "jogar rainbow six"
console.log(hobbies)



tamanho_da_lista = hobbies.length
console.log(tamanho_da_lista)



hobbies.push("jogar basquete")
console.log(hobbies)



hobbies.pop()
console.log(hobbies)



index = hobbies.indexOf("assistir série")
hobbies.splice(index, 1)
console.log(hobbies)



const hobbies_do_amigo = ["jogar baralho", "assistir filmes no cinema"]
const todos_os_hobbies = hobbies.concat(hobbies_do_amigo)
console.log(todos_os_hobbies)



const hobbies_musicais = ["ouvir musica", "tocar ukulele", "dançar loucamente"]
const hobbies_esportivos = ["jogar basquete", "jogar volei", "fazer caminhada"]
const hobbies_artísticos = ["escrever poesia", "compor musica", "pintar um quadro"]

const categorias_de_hobbies = [hobbies_musicais, hobbies_esportivos, hobbies_artísticos]
console.log(categorias_de_hobbies[0])



console.log(categorias_de_hobbies[0][0])
console.log(categorias_de_hobbies[0][2])