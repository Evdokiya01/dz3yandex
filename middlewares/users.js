const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    console.log(req.body);
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
  }
}; 

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({}, { password: 0 });
  next();
};

module.exports = {
  findAllUsers,
  createUser,
};