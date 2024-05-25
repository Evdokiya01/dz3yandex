const mongoose = require('mongoose');
// Не забываем импортировать модель, на которую ссылаемся
const userModel = require('./user');
const categoryModel = require('./category');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  // Добавляем поле для списка пользователей
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: userModel,
  }],
  // Добавляем поле для списка категорий
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: categoryModel,
  }],
});

module.exports = mongoose.model('game', gameSchema);