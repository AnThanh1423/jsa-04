// let dog = {
//     name = "Masco",
//     age = 3,
//     size = "tiny",
//     typeOf = "Samoyed"
// }

// const data = {
//         "page": 2,
//         "per_page": 6,
//         "total": 12,
//         "total_pages": 2,
//         "data": [
//           {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//           },
//           {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//           },
//           {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//           },
//           {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//           },
//           {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//           },
//           {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//           }
//         ],
//         "support": {
//           "url": "https://reqres.in/#support-heading",
//           "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//         }
//     };
// let users = data["data"]
// console.log(users);
// let totals = data["total"]
// console.log(totals);
// let texts = data["support"]["text"]
// console.log(texts);
// let emails = [];

//   for(let x in users){
//       //console.log(users[x]["email"]);
//       emails.push(users[x]["email"])
//   }

//   console.log(emails)

  let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
}
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"]
pokemon.stats.speed = 60;
pokemon.stats.skill = pikachuSkill;
delete pokemon.stats.belongTo
console.log(pokemon);