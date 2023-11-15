var listaFilmes = [
    ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0554fwGDNd3p46TRrGEvl-cc0zDmJW2hAVSeUw29fz5sZcmRu", "Escola de Rock", "2003"],
    ["https://pbs.twimg.com/media/ER9gSiEW4AAmAZK.jpg", "Joias Brutas", "2019"], 
    ["https://assets.cinebelasartes.com.br/wp-content/uploads/2022/06/brilho-eterno-de-uma-mente-sem-lembrancas.jpg", "Brilho Eterno de uma Mente sem Lembranças", "2004"],
    ["https://br.web.img3.acsta.net/pictures/18/12/04/00/00/2486936.jpg", "Amigos para Sempre", "2017"],];

listaFilmes.push(["https://musicart.xboxlive.com/7/00101100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", "À Procura da Felicidade", "2006"]);

document.write('<h1 style="color: white;">Meus Filmes Favoritos</h1>');
document.write('<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">');

var i = 0;
while(i < listaFilmes.length){
    document.write('<div style="width: 200px"><img src=' + listaFilmes[i][0] + '>');
    document.write('<p style="color: white; font-size: 20px; font-family: Arial;">' + listaFilmes[i][1] +' (' + listaFilmes[i][2] + ')</p></div>');
    i++;
}
document.write('</div>');
