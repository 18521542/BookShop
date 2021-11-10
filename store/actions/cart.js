export const add_item_to_cart = "ADD_ITEM"

export const addItem = (name) => {
    return {
        type: add_item_to_cart,
        itemName: name,
    }
}