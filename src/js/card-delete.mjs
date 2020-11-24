/*
 This function deletes the card
 */
import {cardEdit} from './card-edit.mjs'

export var cardDeleteTrello = {};
export var currentBoard = null;

cardDeleteTrello.delete = function () {
	var index = currentBoard.cards[cardEdit.card.id].index

	currentBoard.unregisterCard(cardEdit.card)
	currentBoard.reregisterSubsequent(cardEdit.card.list, index + 1, -1)

	cardEdit.card.list.cardsNode.removeChild(cardEdit.card.node)
	cardEdit.card.list.cards.splice(index, 1)

	cardEdit.close()
	cardEdit.card = undefined
}

