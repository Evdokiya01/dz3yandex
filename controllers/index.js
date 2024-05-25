const { login, sendIndex, sendDashboard } = require('./auth');
const { sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendCategoryDeleted } = require('./categories');

const { sendAllGames,
    sendGameCreated,
    sendGameById,
    sendGameUpdated,
    sendGameDeleted } = require("./games");

const { sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted,
    sendMe } = require("./users");


module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendAllGames,
    sendGameCreated,
    sendGameById,
    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendGameUpdated,
    sendCategoryUpdated,
    sendUserUpdated,
    sendGameDeleted,
    sendCategoryDeleted,
    sendUserDeleted,
    sendMe,
    login,
    sendIndex,
    sendDashboard
}
