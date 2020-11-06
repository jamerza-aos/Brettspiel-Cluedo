 const suspects = [ 
    mrGreen =   {
    color: "green",
    firstname: "Jacob",
    lastname: "Green",
    occupation: "consultant",
    age: 35,
    description: "He has a lot of connections.",
    image :`<img src=https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg >`
  },

  drOrchid = {
    color: "white",
    firstname: "Mary",
    lastname: "Orchid",
    occupation: "Doctor",
    age: 55,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image : `<img src=https://www.radiotimes.com/uploads/images/Original/111967.jpg >`
  },

  profPlum = {
    color: "purple",
    firstname: "Victor",
    lastname: "Plum",
    occupation: "designer",
    age: 22,
    description: "Billionaire video game designer ",
    image : `<img src=https://64.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg >`
  },

  missScarlet ={
    color: "red",
    firstname: "Kasandra",
    lastname: "Scarlet",
    occupation: "Actress",
    age: 31,
    description: "She is an A-list movie star with a dark past ",
    image : `<img src=https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified.jpg >`
  },

  mrsPeacock  =  {
    color: "blue",
    firstname: "Eleanor",
    lastname: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image : `<img src=https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg >`
  },

  mrMustard = {
    color: "yellow",
    firstname: "Jack",
    lastname: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image : `<img src=https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg >`
  }
]

  const weapons = [
    {name: "Rope", weight: 10},
    {name: "Knife", weight: 8},
    {name: "Candlestick", weight: 2 },
    {name: "Dumbbell", weight: 30},
    {name: "Poison", weight: 2},
    {name: "Axe", weight: 15 },
    {name: "Bat", weight: 13 },
    {name: "Trophy", weight: 25},
    {name: "Pistol", weight: 20}
     ];

    const rooms = [
        {name: "Dining room"},
        {name: "Conservatory"},
        {name: "Kitchen"},
        {name: "Study"},
        {name: "Library"},
        {name: "Billiard room"},
        {name: "Lounge"},
        {name: "Ballroom"},
        {name: "Hall" },
        {name: "Spa" },
        {name: "Living room"},
        {name: "Observatory" },
        {name: "Theater" },
        {name: "Guest house"},
        {name: "Patio"}
           ];


let x ;
let a = suspects.length
let b = weapons.length
let c = rooms.length


function Cluedo(arrayName) {
    if(arrayName == suspects){
        x = Math.floor(Math.random() * a)
        document.getElementById("res").innerHTML = `${suspects[x].image}`
    return `${suspects[x].image} "<br>"  ${suspects[x].firstname} ${suspects[x].lastname} ${suspects[x].color} ${suspects[x].age}  ${suspects[x].occupation} ${suspects[x].description}`
    }
    if (arrayName == weapons){
        x = Math.floor(Math.random() * b)
        return `${arrayName[x].name}`
    }
    if(arrayName == rooms){
        x = Math.floor(Math.random() * c)
        return `${arrayName[x].name}`
    }
}

function play() {
    result = [`${Cluedo(suspects)}`,`${Cluedo(weapons)}`,`${Cluedo(rooms)}`]
    document.getElementById("res").innerHTML = result[0]+ "Killed Mr, Boddy using the" + result[1]+ " " + "in the"+result[2]
    
}

