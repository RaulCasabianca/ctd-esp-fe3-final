const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_FAV":
        let newFavs;

        if (state.favs.some((fav) => fav.id === action.payload.id)) {
            newFavs = state.favs;
        } else {
            newFavs = [...state.favs, action.payload];
        }
        return {
            ...state,
            favs: newFavs,
        };
    }
};

export default reducer;