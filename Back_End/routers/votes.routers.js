import express from "express";
import {
  addVoteCan,
  deleteVoteCandid,
  getVoteCandid,
  getVoteCandids,
  updateVoteCandid,
} from "../controllers/votes.controllers";

const voteRouter = express.Router();

voteRouter.post("/addVoteCan", addVoteCan);
voteRouter.get("/getVoteCandid", getVoteCandid);
voteRouter.get("/getVoteCandids/:vote_id", getVoteCandids);
voteRouter.put("/updateVoteCandid/:vote_id", updateVoteCandid);
voteRouter.delete("/deleteVoteCandid/:vote_id", deleteVoteCandid);

export default voteRouter;
