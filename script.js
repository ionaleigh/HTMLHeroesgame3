const buttons = document.getElementById("Buttons")
const scene = document.getElementById("scene")
let state = {}
function start() {
  state = {};
  select(1);
}
function select(scenetextindex) {
  const scenetext = scenetexts.find(scenetext => scenetext.id === scenetextindex)
  scene.innerText = scenetext.text
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }
  scenetext.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('but')
      button.addEventListener('click', () => sceneshow(option))
      buttons.appendChild(button)
    }
  });
}
function showOption(option) {
  return option.stuff == null || option.stuff(state)
}
function sceneshow(option) {
  const nextTextid = option.next
  if (nextTextid <= 0) {
    return start()
  } 
  state = Object.assign(state, option.setState)
  select(nextTextid)
}
let weapon = ""
const scenetexts = [
  {
    id:1, text: "Oh the Great land of altea, you’ve lived here all your life and you still can’t get enough of those beautiful mountains and sprawling valleys. Today though, you feel something special coming along and want to make the best of this feeling so you’re going to…", options: [
      {
        text: "Head down to the blacksmith, the weapon you commissioned should be done by now",
        next: 2,
      }
    ]
  }, {
    id:2, text: "you decide to get out of bed and head down for the blacksmith, on your way though you run into the town crier who is yelling about an imminent goblin attack on the village! And You know you’re just the person to protect it!", options: [
      {
        text: "You first have to go get your weapon though! You’re useless without it",
        next: 3
      }, 
      {
        text: "You have to go now! You’d be wasting precious seconds going for your weapon!",
        next: 4
      }
    ]

  },
  {
    id: 3,
    text: "You run through the town to the blacksmith and grab your…",
    options: [
      { text: "Spear, you like to keep your enemies at a distance", next: 5, weapon: "spear" },
      { text: "Sword, a classic, can’t go wrong with one", next: 5, weapon: "sword" },
      { text: "Axe, it may seem brutal to some, but it’s powerful", next: 5, weapon: "axe" },
      { text: "Shield, maybe to others it’s only for protection but you’re quite the master with it", next: 5, weapon: "shield"},
    ],
  },
  {
    id: 4,
    text: "Feeling the urgency of the situation, you decide to forgo collecting your weapon from the blacksmith. The safety of the village is at stake, and you can't afford to delay. Without any weapon in hand, you sprint towards the goblin camp, relying solely on your wit and agility. When you arrive they’re just starting their march you decide to…",
    options: [
      { text: "Set up a trap on their path, you’re a talented trapper", next: 28 },
      { text: "Sneak into their ranks and take them out one by one", next: 29 },
    ],
  },
  {
    id: 5,
    text: "You grab your " + state.weapon + ", saying your thanks to the smith as you run out the door and make for the goblin camp the crier said they were coming from. You make it there and they’re already moving out. You plan to…",
    options: [
      { text: "Sneak up on them, the best way to take out a big group is to get them one by one", next: 11 },
      { text: "Charge right in! You’re strong enough, your plans don’t need to be intricate", next: 12 },
      { text: "Retreat, you must set up defences at the village", next: 13 },
    ],
  },{
    id: 11,
    text: "Grasping your " + state.weapon + ", you duck behind a stump. You grab a goblin and subdue them. You manage to keep this up for a while without them noticing, but eventually, they do. They stop their march and are now looking for you so you…",
    options: [
      { text: "Take them all now that their numbers are thinned", next: 14 },
      { text: "Stay hidden, hopefully, they get distracted and you can continue picking them off", next: 15 },
      { text: "Run back to the village, the fortifications can now be much easier now that the goblin numbers are lower", next: 19 },
    ],
  },
  {
    id: 12,
    text: "You run head-on into the goblin army, taking out many with your " + state.weapon + ". You take out many, but they just keep coming! You don’t think you can hold out forever, but you can try! You decide to…",
    options: [
      { text: "Run back to the village, the fortifications can now be much easier now that the goblin numbers are lower", next: 19 },
      { text: "Keep at it! You can’t let them get to the village!", next: 20 },
    ],
  },
  {
    id: 13,
    text: "You run back to the village! But they aren’t quite inspired by the words of an adventurer who told a tale of them cowardly hiding from the goblins and are still scared to act. What can you do? You can’t let the goblins get into the village?? You decide to…",
    options: [
      { text: "Give a rousing speech to the townsfolk, inspiring them that they can take on the goblins! All they need to do is work together!", next: 21 },
      { text: "Take advantage of the townsfolk’s fears and tell them that if they don’t take up defences or they’ll die", next: 22 },
      { text: "You don’t need the townsfolk! You can defend them all by yourself!", next: 23 },
    ],
  },
  {
    id: 14,
    text: "You jump from your bush and take one out with your " + state.weapon + " and they all run at you! You hack, slash, and shove until all the goblins are on the ground! You head back to town triumphant and become the hero of the village",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 15,
    text: "You decide to stay hidden, hoping the goblins get distracted. As you observe from your concealed position, you notice the goblins becoming agitated and confused. Some start bickering among themselves, while others wander off into the forest. You know this is your moment, you…",
    options: [
      { text: "Return to your original plan of picking them off one by one", next: 17 },
      { text: "Make a distraction so you draw some of the remaining ones away and take them out in smaller groups", next: 18 },
    ],
  },
  {
    id: 16,
    text: "You rush back to the village, warning the residents and mobilising them to fortify the defences. The villagers, inspired by your tale of your fight with the goblins, join forces to build barricades and prepare for the imminent goblin attack. When the goblins arrive, they are met with a well-prepared and determined resistance, and together, the village stands strong against the invaders.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 17,
    text: "You patiently wait and continue thinning out their numbers, taking advantage of their lack of organisation. Eventually, you skulk, slash, and strangle until all the goblins are on the ground! You head back to town triumphant and become the hero of the village",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 18,
    text: "Feeling bold, you decide to create a diversion. You carefully throw a stone to a distant spot, drawing the attention of half of the remaining goblins. As they investigate the noise, you silently pick off the distracted ones, reducing their numbers without engaging in a direct confrontation. With now most of their forces gone, the goblins retreat. You head back to town triumphant and become the hero of the village",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 19,
    text: "You rush back to the village, warning the residents and mobilising them to fortify the defences. The villagers, inspired by your tale of your fight with the goblins, join forces to build barricades and prepare for the imminent goblin attack. When the goblins arrive, they are met with a well-prepared and determined resistance, and together, the village stands strong against the invaders.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 20,
    text: "You push yourself through it, gaining a second wind! You hack, slash, and shove until all the goblins are on the ground! You head back to town triumphant and become the hero of the village",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 21,
    text: "Your speech was incredible, you really boosted the morale of the town! You all make great fortifications, build barricades, and prepare for the imminent goblin attack. When the goblins arrive, they are met with a well-prepared and determined resistance, and together, the village stands strong against the invaders.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 22,
    text: "The townsfolk didn’t like you threatening them, despite the imminent goblin attack they throw you out of town! You no longer have the town on your side but you still have to do something, right? You…",
    options: [
      { text: "Even though the townsfolk did that you must still protect them! You run straight for the goblin army to hopefully defeat them single-handedly", next: 24 },
      { text: "Who needs those people! You were trying to help them and they just threw you out! You decide to allow the goblin attack", next: 25 },
    ],
  },
  {
    id: 23,
    text: "You decide that relying on the townsfolk is unnecessary; after all, you're a skilled warrior and fully capable of handling the goblin threat solo. With unwavering confidence, you charge directly into the heart of the goblin army, determined to face them head-on.",
    options: [
      { text: "Engage the goblin horde in a fierce one-on-many battle", next: 26 },
      { text: "You can’t do it, you run away, there’s too little time and too many of them", next: 27 },
    ],
  }, 
  {
    id: 24,
    text: "You run right for the goblin army and, filled with the energy of your righteous decision, you defeat the entirety of the goblin fleet but never go back to the village. You accept their hatred and still did the right thing anyway.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 25,
    text: "You wander off into the distance, hearing the screams of the village people as you disappear into the forest. You can’t help but wonder, was this the right decision?",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 26,
    text: "You unleash your combat prowess, swinging your " + state.weapon + " with unmatched skill. The goblins, surprised by your boldness, initially falter. However, their sheer numbers start to overwhelm you. As you fight valiantly, your relentless guerrilla warfare wears down the goblins, forcing them to retreat in disarray. You emerge from the forest victorious, having successfully defended the village without the assistance of the townsfolk. The villagers, though initially skeptical, witness your feat and acknowledge your unmatched skill.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 27,
    text: "Realizing the overwhelming odds and the urgency of the situation, you make a difficult choice of self-preservation and retreat. The sound of goblins' roars and footsteps echoes behind you. You run off and disappear into the forest.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 28,
    text: "Setting up a trap is a great idea you decide! You run back and start gathering materials. The question is, what type of trap?",
    options: [
      { text: "Rig a snare trap using vines and branches to catch the goblins off guard", next: 30 },
      { text: "Craft a makeshift pit trap concealed with leaves to catch the goblins by surprise", next: 31 },
      { text: "Try something you saw in a play once, a large spherical boulder that will roll over the goblins", next: 32 },
    ],
  },
  {
    id: 29,
    text: "You manage to get one goblin, but without a weapon, you can’t consistently take them out silently. You end up being spotted by the goblins and captured. You have to watch as the goblins take out your village.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 30,
    text: "The snare traps you rig are nearly invisible and take out many of the goblins. Though it doesn’t take long to cut them down from the snares, you must act now. You…",
    options: [
      { text: "Go in swinging and hope to take the remaining ones out", next: 33 },
      { text: "Retreat to the village and tell them you’ve slowed the goblins down and to start on the defenses", next: 34 },
    ],
  },
  {
    id: 31,
    text: "The pitfall traps you dig are nearly invisible and take out many of the goblins. Though it doesn’t take long to pull them out from the pitfalls, you must act now. You…",
    options: [
      { text: "Go in swinging and hope to take the remaining ones out", next: 33 },
      { text: "Retreat to the village and tell them you’ve slowed the goblins down and to start on the defenses", next: 34 },
    ],
  },
  {
    id: 32,
    text: "Amazingly, this works perfectly. You find an incredibly spherical boulder and set it up to roll over the entire party of goblins, which it did perfectly! You head back to town triumphant and become the hero of the village.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 33,
    text: "Despite your confidence, you’re unable to take out the remaining goblins without your weapon, no matter how hard you try. You fall, and so does the village.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  },
  {
    id: 34,
    text: "You rush back to the village, warning the residents and mobilizing them to fortify the defenses. The villagers, inspired by your tale of your fight with the goblins, join forces to build barricades and prepare for the imminent goblin attack. When the goblins arrive, they are met with a well-prepared and determined resistance, and together, the village stands strong against the invaders.",
    options: [
      { text: "Try for another ending?", next: -1 },
    ],
  }
  
]

start()
