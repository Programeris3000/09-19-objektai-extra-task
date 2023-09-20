const posts = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    id: 16,
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
  },
  {
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    id: 23,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
  },
  {
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
  },
  {
    id: 25,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
  }
]
// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotims kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.

// 7.1. Gauti pirmo masyvo nario reikšmę.
function task71(array){
  console.log(array)
}
// task71(posts[0]) //1

// // // 7.2. Gauti paskutinio masyvo nario reikšmę.
// task71(posts.slice(-1)) //2

// // 7.3. Gauti 15 masyvo nario reikšmę.
// task71(posts.slice(14,15)) //3

// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
// task71(posts.slice(-13,-12)) //4

//7.5. Gauti vidurinio masyvo nario reikšmę.
function task75(array) {
  let middle = array.length / 2
  let task = array.slice(middle, middle + 1);
  console.log(task);
  }
// task75(posts)

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
// task71(posts.slice(0,4)) //6

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
// task71(posts.slice(-5)) //7

// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
// task71(posts.slice(4,15)) //8

// 7.9. Gauti kas antro masyvo nario reikšmes.
function task79(array) {
for(i = 0; i < array.length; i++){
  console.log(array[i++])
}
}
// task79(posts)

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
function task710(array){
let first = array.slice(0,1)
let last = array.slice(-1)
let both =[...first, ...last]
console.log(both)
}
// task710(posts)


// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
function task711(array){
  console.log(array[0].title)
  }
// task711(posts)

// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
function task712(array){
  console.log(array[1].body)
  }
// task712(posts)

  
// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.

function task713(array){
  console.log(array[2])
  console.log(`Post title is: ${array[2].title} and the content is : ${array[2].body}`)
  }
// task713(posts)


// 7.14. Išvesti visus masyvo narius į konsolę.
function task714(array) {
  for(i = 0; i < array.length; i++){
    console.log(array[i])
  }
  }
// task714(posts)

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function task715(array) {
  for(i = 0; i < array.length; i++){
    console.log(array[i].title)
  }
  }
// task715(posts)

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function task716(array) {
  for(i = 0; i < array.length; i++){
    console.log(array[i].body)
  }
  }
// task716(posts)

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task717(array) {
  for(i = 0; i < array.length; i++){
    console.log(`Title: ${array[i].title} Content: ${array[i].body}`)
  }
  }
// task717(posts)

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task718(array) {
  for(i = 0; i < 4; i++){
  console.log(`Tittle: ${array[i].title}. Content: ${array[i].body}`) 
}
}
// task718(posts)


// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task719 (array){
array.map(function(object, i){
  let endIndex = posts.length;
  let startIndex = posts.length - 7
  if (i >= startIndex && i < endIndex) {
    console.log(`Title: ${object.title}. Content: ${object.body}`)
  }
})
}
// task719(posts)

// 7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą. 



function task720(array){
for(i = 0; i < posts.length; i++){
let ulElement720 = document.querySelector('#task720Ul')
let liElement = document.createElement ('li')
liElement.textContent = array[i].title
ulElement720.append(liElement)
}
}
// task720(posts)

// 7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".


function task721(array){
  for(i = 0; i < posts.length; i++){
  let ulElement721 = document.querySelector('#task721Ul')
  let liElement = document.createElement ('li')
  liElement.textContent = (`Title: ${array[i].title}. Content: ${array[i].body}`)
  ulElement721.append(liElement)
  }
  }
  // task721(posts)
  

// 7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".

function task722Func(array){
  array.map(function(object){
    if(object.title[0] === 's'){
    let ulElement722 = document.querySelector('#task722Ul')
    let liElement = document.createElement ('li')
    liElement.textContent = (`Title: ${object.title}. Content: ${object.body}`)
    ulElement722.append(liElement)
    }
  })
}

// task722Func(posts)

// 7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".


let task723 = (array)=> {
array.map(function(object){
  if(object.title.charAt(object.title.length - 1) === 't' || object.title.charAt(object.title.length - 1) === 'm'){
  let ulElement723 = document.querySelector('#task723Ul')
  let liElement = document.createElement ('li')
  liElement.textContent = (`Title: ${object.title}. Content: ${object.body}`)
  ulElement723.append(liElement)
  }
})
}
// task723(posts)
// 7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.


let task724 = (array)=>{
array.map(function(object){
  if(object.title.length > 15){
  let ulElement724 = document.querySelector('#task724Ul')
  let liElement = document.createElement ('li')
  liElement.textContent = (`Title: ${object.title}. Content: ${object.body}`)
  ulElement724.append(liElement)
  }
})
}
// task724(posts)


// 7.25. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.


let task725 = (array)=>{
array.map(function(object){
  if(object.title.length < 20 && object.body.length > 50){
    let ulElement725 = document.querySelector('#task725Ul')
    let liElement = document.createElement ('li')
    liElement.textContent = (`Title: ${object.title}. Content: ${object.body}`)
    ulElement725.append(liElement)
    }
})
}
// task725(posts)
// 7.26. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.


let task726 = (array)=>{
array.map(function(object){
  if(object.title.length = (object.title.length > 20 && object.title.length < 30) && (object.body.length > 70 && object.body.length > 130) ){
  let ulElement726 = document.querySelector('#task726Ul')
  let liElement = document.createElement ('li')
  liElement.textContent = (`Title: ${object.title}. Content: ${object.body}`)
  ulElement726.append(liElement)
  }
})
}
// task726(posts)

// 7.27. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".


function task727(array){
array.map(function(object){
  if(object.title.includes(`it`) && object.body.includes(`quo`)){
    let ulElement727 = document.querySelector('#task727Ul')
    let liElement = document.createElement ('li')

    liElement.textContent = (`Title: ${object.title}. Content: ${object.body}`)
    ulElement727.append(liElement)
  }
})
}
// task727(posts)



// 7.28. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.


function task728(array) {
  let regex = /\bsit\b/i // \b žymi žodžio ribą, i - nereikšti didžiąsias/mažąsias raides
  
  array.map(function (object) {
    if (regex.test(object.body)) {
      let ulElement728 = document.querySelector('#task728Ul');
      let liElement = document.createElement('li')
      liElement.textContent = `Title: ${object.title}. Content: ${object.body}`
      ulElement728.append(liElement)
    }
  })
}

// task728(posts);
// //regex yra jūsų reguliarioji išraiška \bsit\b, kuri tikrina, ar "sit" yra atskiras žodis.
// object.body yra teksto dalis, kurią jūs tikrinote.
// regex.test(object.body) grąžins true, jei "sit" yra atskiras žodis teksto object.body viduje, ir false, jei ne.



// 7.29. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.

let task729Func = (array)=> {
  array.map((object)=> {
    let wordLetters = object.title.split('');
    let sameLetters = wordLetters.filter(letter => letter === 'a');
    let wordLetters1 = object.body.split('');
    let sameLetters1 = wordLetters1.filter(letter => letter === 'o');
    let result = `Tittle: ${object.title}, Content: ${object.body}.`

    if (sameLetters.length > 3 && sameLetters1.length < 7){
      let ulElement729 = document.querySelector('#task729Ul')
      let liElement = document.createElement ('li')
      liElement.textContent = result
      ulElement729.append(liElement)
    }
  })
}
// task729Func(posts)
// 7.30. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti visų masyvo narių pavadinimus surūšiuotus nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.

//NESUGALVOJAUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU






// console.log(posts[0])
// console.log(posts[0].body)
// console.log(posts[0].title)

// console.log(posts[1])
// console.log(posts[1].body)
// console.log(posts[1].title)

// console.log(posts[2])
// console.log(posts[2].body)
// console.log(posts[2].title)

// posts.forEach(post => {
//   console.log(post)
//   console.log(post.title)
//   console.log(post.body)
// })

// console.log(posts.slice(5, 8))