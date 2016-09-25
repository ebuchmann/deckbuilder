const vanar = [
  { id: 20139, name: 'Flash Freeze', type: 'spell', cost: 0, rarity: 'basic', faction: 'vanar', text: 'Deal 1 damage to a minion and <b>Stun</b> it.' },
  { id: 20150, name: 'Polarity', type: 'spell', cost: 0, rarity: 'common', faction: 'vanar', text: `Switch ANY minion's Attack and Health.` },
  { id: 20144, name: 'Aspect of the Fox', type: 'spell', cost: 1, rarity: 'basic', faction: 'vanar', text: 'Transform ANY minion into a 3/3 Ravager with no abilities.' },
  { id: 20138, name: 'Mesmerize', type: 'spell', cost: 1, rarity: 'rare', faction: 'vanar', text: 'Teleport an enemy minion or General one space.' },
  { id: 510, name: 'Snow Chaser', type: 'minion', race: 'vespyr', cost: 1, rarity: 'rare', attack: 2, health: 1, faction: 'vanar', text: '<b>Infiltrate</b>: When this minion dies, return it to your action bar.' },
  { id: 20209, name: 'Vespyric Call', type: 'spell', cost: 1, rarity: 'epic', faction: 'vanar', text: 'Put a random Vespyr minion into your action bar. It costs 1 less and has +1/+1.' },
  { id: 20214, name: 'Altered Beast', type: 'spell', cost: 2, rarity: 'common', faction: 'vanar', text: 'Transform ANY minion into a random Battle Pet.' },
  { id: 20149, name: 'Bonechill Barrier', type: 'spell', cost: 2, rarity: 'common', faction: 'vanar', text: 'Summon three joined 0/2 Vespyr Walls. Minions that attack these walls are <b>Stunned</b>.' },
  { id: 512, name: 'Borean Bear', type: 'minion', race: 'vespyr', cost: 2, rarity: 'common', attack: 1, health: 3, faction: 'vanar', text: 'Whenever you summon a Vespyr minion, this minion gains +1 Attaack.' },
  { id: 20137, name: 'Boundless Courage', type: 'spell', cost: 2, rarity: 'epic', faction: 'vanar', text: 'Give a friendly minion +2 Attack. It takes no damage this turn.' },
  { id: 531, name: 'Bur', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 3, health: 3, faction: 'vanar', text: 'When this minion survives damage, transform it into a different Battle Pet.' },
  { id: 20134, name: 'Chromatic Cold', type: 'spell', cost: 2, rarity: 'basic', faction: 'vanar', text: 'Dispel a space. If there is an enemy minion or General on that space, deal it 2 damage.' },
  { id: 30016, name: 'Coldbiter', type: 'artifact', cost: 2, rarity: 'legendary', faction: 'vanar', text: 'At the end of your turn, your General deals 2 damage to each enemy minion around them.' },
  { id: 505, name: 'Crystal Cloaker', type: 'minion', race: 'vespyr', cost: 2, rarity: 'basic', attack: 2, health: 3, faction: 'vanar', text: '<b>Infiltrate</b>: Gains +2 Attack.' },
  { id: 506, name: 'Crystal Wisp', type: 'minion', cost: 2, rarity: 'common', attack: 1, health: 1, faction: 'vanar', text: '<b>Dying Wish</b>: Permanently gain a mana crystal.' },
  { id: 20135, name: 'Frostfire', type: 'spell', cost: 2, rarity: 'basic', faction: 'vanar', text: 'Give a friendly minion +3 Attack. If it is Vespyr, also give it +3 Health.' },
  { id: 20147, name: 'Gravity Well', type: 'spell', cost: 2, rarity: 'legendary', faction: 'vanar', text: 'Summon four joined 0/1 Walls with <b>Provoke</b>.' },
  { id: 20160, name: 'Hailstone Prison', type: 'spell', cost: 2, rarity: 'common', faction: 'vanar', text: 'Return ANY minion to its action bar.' },
  { id: 517, name: 'Hearth-Sister', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 2, faction: 'vanar', text: '<b>Opening Gambit</b>: Switch positions with ANY other minion.' },
  { id: 530, name: 'Icy', type: 'minion', race: 'battle pet', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'vanar', text: '<b>Opening Gambit</b>: Stun a nearby enemy minion or General.' },
  { id: 20211, name: 'Lightning Blitz', type: 'spell', cost: 2, rarity: 'epic', faction: 'vanar', text: 'Give all friendly minions +1/+1 and randomly teleport them to your opponent\'s starting side of the battlefield.' },
  { id: 20140, name: 'Mark of Solitude', type: 'spell', cost: 2, rarity: 'rare', faction: 'vanar', text: 'One minion becomes 5/5. It can no longer attack Generals.' },
  { id: 20148, name: 'Blazing Spines', type: 'spell', cost: 3, rarity: 'rare', faction: 'vanar', text: 'Summon two joined 3/3 Walls that can attack.' },
  { id: 20165, name: 'Cryogenesis', type: 'spell', cost: 3, rarity: 'common', faction: 'vanar', text: 'Deal 4 damage to an enemy minion. Draw a Vespyr minion from your deck.' },
  { id: 503, name: 'Fenrir Warmaster', type: 'minion', cost: 3, rarity: 'basic', attack: 3, health: 2, faction: 'vanar', text: '<b>Dying Wish</b>: Summon a 3/2 Ghost Wolf on this space.' },
  { id: 519, name: 'Glacial Elemental', type: 'minion', race: 'vespyr', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'vanar', text: 'Whenever you summon a Vespyr minion, deal 2 damage to a random enemy minion.' },
  { id: 533, name: 'Iceblade Dryad', type: 'minion', race: 'vespyr', cost: 3, rarity: 'epic', attack: 3, health: 3, faction: 'vanar', text: '<b>Opening Gambit</b>: Give a friendly Vespyr minion +1/+1 and <b>Flying</b>.' },
  { id: 529, name: 'Snow Rippler', type: 'minion', race: 'vespyr', cost: 3, rarity: 'common', attack: 3, health: 4, faction: 'vanar', text: '<b>Infiltrate</b>: Whenever this minion damages a General, put a random Battle Pet into your action bar.' },
  { id: 30015, name: 'Snowpiercer', type: 'artifact', cost: 3, rarity: 'basic', faction: 'vanar', text: 'Your General gains +3 Attack.' },
  { id: 511, name: 'Wolfraven', type: 'minion', cost: 3, rarity: 'common', attack: 1, health: 4, faction: 'vanar', text: '<b>Flying</b><br> <b>Infiltrate</b>: Gains +3 Attack.' },
  { id: 20145, name: 'Aspect of the Drake', type: 'spell', cost: 4, rarity: 'epic', faction: 'vanar', text: 'Transform ANY minion into a 4/4 Whyte Drake with <b>Flying</b>. Nearby friendly minions gain <b>Flying</b>.' },
  { id: 20136, name: 'Avalanche', type: 'spell', cost: 4, rarity: 'basic', faction: 'vanar', text: 'Deal 4 damage to ALL minions and Generals on your starting side of the battlefield and <b>Stun</b> them.' },
  { id: 513, name: 'Razorback', type: 'minion', cost: 4, rarity: 'rare', attack: 4, health: 3, faction: 'vanar', text: '<b>Opening Gamit</b>: Give all friendly minions +2 Attack this turn.' },
  { id: 515, name: 'Voice of the Wind', type: 'minion', cost: 4, rarity: 'legendary', attack: 4, health: 4, faction: 'vanar', text: 'Whenever you summon a minion from your action bar, summon a 2/2 Vespyr Winter Maerid bnearby.' },
  { id: 20208, name: 'Wailing Overdrive', type: 'spell', cost: 4, rarity: 'common', faction: 'vanar', text: `Give a friendly minion on your opponent's starting side of the battlefield +5/+5.` },
  { id: 30021, name: 'White Asp', type: 'artifact', cost: 4, rarity: 'legendary', faction: 'vanar', text: 'Your General gains +3 Attack. Whenever your General destroys a minion, summon a 3/3 Balzing Spine Wall on that space.' },
  { id: 528, name: 'Wind Sister Maia', type: 'minion', cost: 4, rarity: 'legendary', attack: 4, health: 5, spirit: 0, faction: 'vanar', text: 'Whenever you summon a minion with <b>Infiltrate</b>, give it +1/+1.' },
  { id: 30019, name: 'Winterblade', type: 'artifact', cost: 4, rarity: 'epic', faction: 'vanar', text: 'Your General gains +2 Attack. Enemy minions damaged by your General are <b>Stunned</b>.' },
  { id: 526, name: 'Arctic Displacer', type: 'minion', race: 'vespyr', cost: 5, rarity: 'basic', attack: 10, health: 4, faction: 'vanar', text: '<b>Airdrop</b>' },
  { id: 20207, name: 'Frostburn', type: 'spell', cost: 5, rarity: 'rare', faction: 'vanar', text: 'Deal 3 damage to all enemy minions.' },
  { id: 507, name: 'Frosthorn Rhyno', type: 'minion', cost: 5, rarity: 'epic', attack: 6, health: 5, faction: 'vanar', text: '<b>Infiltrate</b>: Gains +1 Attack and <b>Celerity</b>.' },
  { id: 534, name: 'Frostiva', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 3, faction: 'vanar', text: '<b>Forcefield</b><br> Whenever this minion attacks or is attacked, summon a 3/3 Vespyr Night Howler nearby.' },
  { id: 532, name: 'Huldra', type: 'minion', cost: 5, rarity: 'rare', attack: 3, health: 4, faction: 'vanar', text: '<b>Opening Gambit</b>: Give a friendly Vespyr minion <b>Celerity</b>.' },
  { id: 20163, name: 'Spirit of the Wild', type: 'spell', cost: 5, rarity: 'epic', faction: 'vanar', text: 'Reactivate friendly minions on your opponent\'s starting side of the battlefield.' },
  { id: 20146, name: 'Aspect of the Mountains', type: 'spell', cost: 6, rarity: 'legendary', faction: 'vanar', text: 'Transform ANY minion into a 5/5 Seismic Elemental. Deal 5 damage to enemy minions around it.' },
  { id: 508, name: 'Draugar Lord', type: 'minion', race: 'vespyr', cost: 6, rarity: 'epic', attack: 4, health: 8, faction: 'vanar', text: '<b>Dying Wish</b>: Summon a 4/8 Ice Drake on this space.' },
  { id: 514, name: 'Ancient Grove', type: 'minion', race: 'vespyr', cost: 7, rarity: 'legendary', attack: 7, health: 7, faction: 'vanar', text: '<b>Provoke</b><br> <b>Opening Gambit</b>: You rminions gain "<b>Dying Wish</b>: Summon a 1/1 Treant with <b>Provoke</b>."' },
  { id: 20212, name: `Winter's Wake`, type: 'spell', cost: 8, rarity: 'legendary', faction: 'vanar', text: 'Give all friendly Wall minions +4/+4. Those minions can now move.' },
]

export default vanar
