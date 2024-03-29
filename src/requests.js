export const api_key = "live_15EQgTOqWH8RhHnlQDL6HfRdQtBHgcXW8gOAlxJcN5zSGnzDIhrmrWHzDiEMM4Jj";

const requests = {
    fetchBreeds: `breeds?api_key=${api_key}`,
    fetchBreedId: `images/search?api_key=${api_key}&limit=5&breed_ids=`,
    fetchDisAndLike: `votes?api_key=${api_key}`,
    fetchFavourites: `favourites?api_key=${api_key}`,
    fetchSearch: `images/search?api_key=${api_key}&breed_ids=`,
    fetchUpload: `images/upload?api_key=${api_key}`,
}

export default requests;