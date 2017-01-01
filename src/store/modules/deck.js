import Vue from 'vue'
import {
  SELECT_GENERAL,
  SELECT_CARD,
  REMOVE_CARD,
  INCREMENT_CARD,
  DECREMENT_CARD,
  CLEAR_DECK,
  SET_FACTION,
  SELECT_CARD_SIDEBOARD,
  INCREMENT_CARD_SIDEBOARD,
  REMOVE_CARD_SIDEBOARD,
  DECREMENT_CARD_SIDEBOARD,
} from '../mutation-types'

const state = {
  general: null,
  cards: [],
  sideboard: [],
  totalCards: 0,
  spirit: 0,
  faction: '',
}

const spiritCosts = {
  basic: 0,
  common: 40,
  rare: 100,
  epic: 350,
  legendary: 900
}

const mutations = {
  [SELECT_GENERAL] (state, general) {
    if (state.general === null) state.totalCards++
    state.general = general
  },

  [SELECT_CARD] (state, { card, qty }) {
    Vue.set(card, 'qty', qty)
    state.cards.push(card)
    state.totalCards += qty
    if (card.rarity && card.spirit !== 0) state.spirit += (spiritCosts[card.rarity] * qty)
  },

  [SET_FACTION] (state, faction) {
    state.faction = faction
  },

  [REMOVE_CARD] (state, index) {
    if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit -= spiritCosts[state.cards[index].rarity]
    state.cards.splice(index, 1)
    state.totalCards--
  },

  [INCREMENT_CARD] (state, index) {
    state.cards[index].qty++
    state.totalCards++
    if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit += spiritCosts[state.cards[index].rarity]
  },

  [DECREMENT_CARD] (state, index) {
    state.cards[index].qty--
    state.totalCards--
    if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit -= spiritCosts[state.cards[index].rarity]
  },

  [CLEAR_DECK] (state) {
    state.general = null
    state.cards = []
    state.totalCards = 0
    state.spirit = 0
  },

  [SELECT_CARD_SIDEBOARD] (state, { card, qty }) {
    Vue.set(card, 'qty', qty)
    state.sideboard.push(card)
  },

  [INCREMENT_CARD_SIDEBOARD] (state, index) {
    state.sideboard[index].qty++
  },

  [REMOVE_CARD_SIDEBOARD] (state, index) {
    state.sideboard.splice(index, 1)
  },

  [DECREMENT_CARD_SIDEBOARD] (state, index) {
    state.sideboard[index].qty--
  }
}

export default {
  state,
  mutations,
}
