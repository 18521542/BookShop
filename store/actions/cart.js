export const add_item_to_cart = "ADD_ITEM"
export const remove_item_from_cart = "REMOVE_ITEM"
export const increase_quantity = "increase"
export const decrease_quantity = "decrease"

export const addItem = (name) => {
    return {
        type: add_item_to_cart,
        itemName: name,
    }
}

export const removeItem = (item) => {
    return {
        type: remove_item_from_cart,
        item: item
    }
}

export const decreaseItem = (item) => {
    return {
        type: decrease_quantity,
        item: item,
    }
}

export const increaseItem = (item) => {
    return {
        type: increase_quantity,
        item: item,
    }
}