const { checkAuth, checkCookiesJWT } = require('./auth');
const { findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory,
    checkIsCategoryExists,
    checkEmptyName } = require('./categories');

const { findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsGameExists, 
    checkIsVoteRequest} = require('./games');

const { findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmailAndPassword,
    checkIsUserExists,
    hashPassword } = require('./users');


module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById,
    findAllGames,
    createGame,
    findGameById,
    findAllUsers,
    createUser,
    findUserById,
    updateGame,
    updateCategory,
    updateUser,
    deleteGame,
    deleteCategory,
    deleteUser,
    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsCategoryExists,
    checkEmptyName,
    checkEmptyNameAndEmailAndPassword,
    checkIsGameExists,
    checkIsUserExists,
    hashPassword,
    checkCookiesJWT,
    checkAuth,
    checkIsVoteRequest
}
