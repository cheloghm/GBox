import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  owned: {
    type: Boolean,
    required: true,
    default: true,
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
