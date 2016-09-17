import * as types from './mutation-types'

export const selectGeneral = ({ commit, state }, general) => new Promise(resolve => {
  commit(types.SELECT_GENERAL, general)
  resolve()

  updateHash(state.deck)
})

export const selectCard = ({ commit, state }, { card, qty }) => {
  const cards = state.deck.cards
  const matchingCard = cards.find(c => c.name === card.name)

  if (matchingCard) {
    if (matchingCard.qty < 3 && qty === 1) commit(types.INCREMENT_CARD, cards.indexOf(matchingCard))
  } else {
    commit(types.SELECT_CARD, { card, qty })
  }

  updateHash(state.deck)
}

export const removeCard = ({ commit, state }, card) => {
  const cards = state.deck.cards
  const matchingCard = cards.find(c => c.name === card.name)

  if (matchingCard) {
    if (matchingCard.qty === 1) {
      commit(types.REMOVE_CARD, cards.indexOf(matchingCard))
    } else {
      commit(types.DECREMENT_CARD, cards.indexOf(matchingCard))
    }
  }

  updateHash(state.deck)
}

export const setCardList = ({ commit }, cards) => {
  commit(types.SET_CARDS, cards)
}

export const setPage = ({ commit }, pageNumber) => {
  commit(types.SET_PAGE, pageNumber)
}

export const clearDeck = ({ commit, state }) => {
  commit(types.CLEAR_DECK)
  updateHash(state.deck)
}

export const textSearch = ({ commit }, text) => {
  commit(types.TEXT_SEARCH, text)
}

export const typeSelect = ({ commit, state }, type) => {
  const typeSelect = [...state.cardList.typeSelect]
  typeSelect.includes(type) ? typeSelect.splice(typeSelect.indexOf(type), 1) : typeSelect.push(type)
  commit(types.SELECT_TYPE, typeSelect)
}

const updateHash = ({ general, cards }) => {
  if (!general || !cards) return

  const hash = []
  hash.push(`1:${general.id}`)
  cards.forEach(card => {
    hash.push(`${card.qty}:${card.id}`)
  })
  window.location.hash = btoa(hash.join(','))
}
