import votesModels from "../models/votes.models";

export const addVoteCan = (req, res) => {
  try {
    const { voteCan, userID } = req.body;
    const saveVote = new votesModels({
      voteCan: voteCan,
      userID: userID,
    });
    saveVote.save();
    if (saveVote) {
      return res.status(201).json({
        data: saveVote,
        message: "Created!!!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getVoteCandid = async (req, res) => {
  try {
    const getCandid = await votesModels.find({ status: 1 });
    if (getCandid) {
      return res.status(200).json({
        data: getCandid,
        message: "Successfully Fetched!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getVoteCandids = async (req, res) => {
  try {
    const voteId = req.params.vote_id;
    const getVoteCandids = await votesModels.findOne({ _id: voteId });
    if (getVoteCandids) {
      return res.status(200).json({
        data: getVoteCandids,
        message: "Successfully Fetched!!!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateVoteCandid = async (req, res) => {
  try {
    const { voteCan } = req.body;
    const voteId = req.params.vote_id;
    const updateVoteCan = await votesModels.updateOne(
      { _id: voteId },
      {
        $set: {
          voteCan: voteCan,
        },
      }
    );
    if (updateVoteCan.acknowledged) {
      return res.status(200).json({
        message: "Updated!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteVoteCandid = async (req, res) => {
  try {
    const voteId = req.params.vote_id;
    const deletCandid = await votesModels.deleteOne({ _id: voteId });
    if (deletCandid.acknowledged) {
      return res.status(200).json({
        message: "Deleted!!!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
