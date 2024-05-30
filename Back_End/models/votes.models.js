import mongoose from "mongoose";
import usersModels from "./users.models";

const Schema = mongoose.Schema;

const voteSchema = new Schema({
  voteCan: {
    type: String,
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: usersModels,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Number,
    default: 1,
  },
});

export default mongoose.model("votes", voteSchema);
