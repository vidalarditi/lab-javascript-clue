
// Characters Collection
var charactersArray = [];
// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

//All Constructors ---BEGIN---
function characterCons(first, last, color, description, age, image, occupation){
  this.first_name = first;
  this.last_name = last;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
}

function roomCons(name){
  this.name = name;
}

function ropeCons(name, weight) {
  this.name = name;
  this.weight = weight;
} 
//All Constructors ---END---

//New Items ---BEGIN---
var mrGreen = new characterCons("Jacob", "Green", "green", "He has a lot of connections", 45, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur")
var drOrchid = new characterCons("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist")
var profPlum = new characterCons("Victor", "Plum", "purple", "Billionare video game designer", 22, "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer")
var missScarlet = new characterCons("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31, "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor")
var mrsPeacock = new characterCons("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité")
var mrMustard = new characterCons("Jacob", "Green", "green", "He has a lot of connections", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité")
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

var DinningRoom = new roomCons("DinningRoom");
var Conservatory = new roomCons("Conservatory");
var Kitchen = new roomCons("Kitchen");
var Study = new roomCons("Study");
var Library = new roomCons("Library");
var BilliardRoom = new roomCons("BilliardRoom");
var Lounge = new roomCons("Lounge");
var Ballroom = new roomCons("Ballroom");
var Hall = new roomCons("Hall");
var Spa = new roomCons("Spa");
var LivingRoom = new roomCons("LivingRoom");
var Observatory = new roomCons("Observatory");
var Theater = new roomCons("Theater");
var GuestHouse = new roomCons("GuestHouse");
var Patio = new roomCons("Patio");
roomsArray.push(DinningRoom, Conservatory, Kitchen, Study, Library, BilliardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio);

var rope = new ropeCons("rope", 10);
var knife = new ropeCons("knife", 8);
var candlestick = new ropeCons("candlestick", 2);
var dumbbell = new ropeCons("dumbbell", 30);
var poison = new ropeCons("poison", 2);
var axe = new ropeCons("axe", 15);
var pistol = new ropeCons("pistol", 20);
var bat = new ropeCons("bat", 13);
var trophy = new ropeCons("trophy", 25);
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, pistol, bat, trophy);
//New Items ---END---

//CardStack [character[i], room[j], weapons[k]]
var cardStack = [charactersArray, roomsArray, weaponsArray];

function randomSelector(arr){
  var rNum = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[rNum];
}

function pickMistery(cardStack){
  var character, room, weapon;
  character = randomSelector(cardStack[0]);
  room = randomSelector(cardStack[1]);
  weapon = randomSelector(cardStack[2]);
  return [character, room, weapon];
  
}

var misteryEnvelope = pickMistery(cardStack);

function revealMistery(misteryEnvelope){
  var char = misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name; 
  var room = misteryEnvelope[1].name;
  var weapon = misteryEnvelope[2].name;
  var result = char + " killed Mr.Boddy using " + weapon + " in the " + room ;
  return result;
}

console.log(revealMistery(misteryEnvelope))
