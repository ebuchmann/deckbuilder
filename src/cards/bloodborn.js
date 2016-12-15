const bloodborn = [
  // Abyssian
  { id: null, name: 'Furosa', set: 'bloodborn', type: 'minion', cost: 1, rarity: 'common', attack: 1, health: 2, faction: 'abyssian', text: '<b>Blood Surge:</b> Friendly Wraithlings gain +1/+1.' },
  { id: null, name: 'Punish', set: 'bloodborn', type: 'spell', cost: 1, rarity: 'rare', faction: 'abyssian', text: 'Destroy a damaged minion.' },
  { id: null, name: 'Aphotic Drain', set: 'bloodborn', type: 'spell', cost: 2, rarity: 'common', faction: 'abyssian', text: 'Destroy a friendly minion to restore 5 Health to your General.' },
  { id: null, name: 'Necrotic Sphere', set: 'bloodborn', type: 'spell', cost: 6, rarity: 'epic', faction: 'abyssian', text: 'Destroy ALL minions nearby your General and summon Wraithlings in their place.' },
  { id: null, name: 'Horror Burster', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'rare', attack: 4, health: 1, faction: 'abyssian', text: '<b>Dying Wish:</b> Transform a random friendly minion into a 6/6 Horror.' },
  { id: null, name: 'Grandmaster Variax', set: 'bloodborn', type: 'minion', cost: 7, rarity: 'legendary', attack: 7, health: 7, faction: 'abyssian', text: '<b>Opening Gambit:</b> Your Bloodborn Spell costs 3 and is now AWESOME.' },

  // Lyonar
  { id: null, name: 'Scintilla', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 4, faction: 'lyonar', text: '<b>Blood Surge:</b> Restore 3 Health to your General.' },
  { id: null, name: 'Excelsious', set: 'bloodborn', type: 'minion', cost: 8, rarity: 'legendary', attack: 6, health: 6, faction: 'lyonar', text: '<b>Provoke</b>, <b>Celerity</b> This minion gains +1/+1 for each time you healed anything this game.' },
  { id: null, name: 'Sunbreaker', set: 'bloodborn', type: 'minion', cost: 4, rarity: 'rare', attack: 2, health: 4, faction: 'lyonar', text: '<b>Forcefield</b> <br>Your Bloodborn Spell is Tempest.' },
  { id: null, name: 'Trinity Oath', set: 'bloodborn', type: 'spell', cost: 4, rarity: 'epic', faction: 'lyonar', text: 'Draw 3 cards and restore 3 Health to your General.' },
  { id: null, name: 'Draining Wave', set: 'bloodborn', type: 'spell', cost: 1, rarity: 'common', faction: 'lyonar', text: 'Deal 4 damage to a minion AND your General.' },
  { id: null, name: 'Prism Barrier', set: 'bloodborn', type: 'spell', cost: 2, rarity: 'rare', faction: 'lyonar', text: 'Give a friendly minion <b>Forcefield</b>.' },

  // Magmar
  { id: null, name: 'Drogon', set: 'bloodborn', type: 'minion', cost: 4, rarity: 'legendary', attack: 5, health: 4, faction: 'magmar', text: `<b>Blood Surge:</b> Double your General's Attack this turn.` },
  { id: null, name: 'Rancour', set: 'bloodborn', type: 'minion', cost: 2, rarity: 'epic', attack: 1, health: 3, faction: 'magmar', text: 'Whenever your General takes damage, this minion gains that much Attack.' },
  { id: null, name: 'Tectonic Spikes', set: 'bloodborn', type: 'spell', cost: 3, rarity: 'rare', faction: 'magmar', text: 'Both players draw 3 cards. Deal 3 damage to both Generals.' },
  { id: null, name: 'Entropic Gaze', set: 'bloodborn', type: 'spell', cost: 2, rarity: 'common', faction: 'magmar', text: 'Deal 4 damage to the enemy General. Both players draw a card.' },
  { id: null, name: `Valknu's Seal`, set: 'bloodborn', type: 'spell', cost: 4, rarity: 'epic', faction: 'magmar', text: 'Summoon an Egg that hatches into a copy of your General.' },
  { id: null, name: 'Thraex', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'common', attacK: 2, health: 4, faction: 'magmar', text: '<b>Blood Surge:</b> All friendly minions gain +1 Attack (including itself).' },

  // Songhai
  { id: null, name: 'Twilight Fox', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'songhai', text: '<b>Blood Surge:</b> Teleport a random enemy to the space behind your General.' },
  { id: null, name: 'Geomancer', set: 'bloodborn', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 4, faction: 'songhai', text: '<b>Opening Gambit:</b> Your Bloodborn Spell is Phoenix Fire.' },
  { id: null, name: 'Whiplash', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 3, faction: 'songhai', text: '<b>Blood Surge:</b> Deal 2 damage to the enemy General.' },
  { id: null, name: 'Obscuring Blow', set: 'bloodborn', type: 'spell', cost: 1, rarity: 'rare', faction: 'songhai', text: 'Give a friendly minion or General <b>Backstab</b>(2).' },
  { id: null, name: 'Ethereal Blades', set: 'bloodborn', type: 'spell', cost: 2, rarity: 'common', faction: 'songhai', text: 'Give a friendly minion AND your General +2 attack this turn.' },
  { id: null, name: 'Cobra Strike', set: 'bloodborn', type: 'spell', cost: 4, rarity: 'epic', faction: 'songhai', text: 'Deal 3 damage to an enemy minion AND the enemy General.' },

  // Vanar
  { id: null, name: 'Concealing Shroud', set: 'bloodborn', type: 'spell', cost: 2, rarity: 'rare', faction: 'vanar', text: 'Your General takes no damage until your next turn.' },
  { id: null, name: 'Enfeeble', set: 'bloodborn', type: 'spell', cost: 3, rarity: 'epic', faction: 'vanar', text: 'All minions become 1/1.' },
  { id: null, name: 'Frigid Corona', set: 'bloodborn', type: 'spell', cost: 3, rarity: 'common', faction: 'vanar', text: '<b>Stun</b> and enemy. Draw a card.' },
  { id: null, name: 'Grandmaster Embla', set: 'bloodborn', type: 'minion', cost: 8, rarity: 'legendary', attack: 5, health: 5, faction: 'vanar', text: '<b>Opening Gambit:</b> Surround the enemy General with random Walls.' },
  { id: null, name: 'Myriad', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'vanar', text: '<b>Blood Surge:</b> Summon a random Wall nearby.' },
  { id: null, name: 'Sleet Dasher', set: 'bloodborn', type: 'minion', cost: 4, rarity: 'rare', attack: 3, health: 6, faction: 'vanar', text: 'Whenever this minion destroys an enemy, reactivate it.' },

  // Vetruvian
  { id: null, name: 'Stone to Spears', set: 'bloodborn', type: 'spell', cost: 1, rarity: 'rare', faction: 'vetruvian', text: 'A friendly Obelysk gains +3 Attack and may move and attack this turn if able.' },
  { id: null, name: 'Divine Spark', set: 'bloodborn', type: 'spell', cost: 3, rarity: 'common', faction: 'vetruvian', text: 'Draw two cards.' },
  { id: null, name: `Autarch's Gifts`, set: 'bloodborn', type: 'spell', cost: 6, rarity: 'epic', faction: 'vetruvian', text: 'Equip 2 random Vetruvian artifacts.' },
  { id: null, name: 'Zephyr', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'vetruvian', text: '<b>Blood Surge:</b> Your General gains Frenzy this turn.' },
  { id: null, name: 'Grandmaster Nosh-Rak', set: 'bloodborn', type: 'minion', cost: 7, rarity: 'legendary', attack: 4, health: 7, faction: 'vetruvian', text: '<b>Blast</b>, <b>Flying</b><br> The enemy General takes double damage.' },
  { id: null, name: 'Incinera', set: 'bloodborn', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 6, faction: 'vetruvian', text: 'Your General may move 2 additional spaces.' },

  // Neutral
  { id: null, name: 'Cryptographer', set: 'bloodborn', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit:</b> Refresh your Bloodborn Spell.' },
  { id: null, name: 'Sanguinar', set: 'bloodborn', type: 'minion', cost: 4, rarity: 'rare', attack: 5, health: 4, faction: 'neutral', text: 'Your Bloodborn Spell costs 1 less to activate.' },
  { id: null, name: 'Meltdown', set: 'bloodborn', type: 'minion', cost: 7, rarity: 'legendary', attack: 7, health: 7, faction: 'neutral', text: '<b>Blood Surge:</b> Deal 7 damage to a random enemy.' },
]
