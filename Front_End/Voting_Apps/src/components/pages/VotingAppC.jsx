import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

export const VotingAppC = () => {
  const [candid, setCandid] = useState("");
  const getToken = localStorage.getItem("token");

  const onCandiddateChange = (e) => {
    setCandid(e.target.value);
  };

  const handleVote = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8001/addVoteCan", {
        candidate: candid,
        userID: getToken,
      })
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error sending value to backend:", error);
      });
  };

  return (
    <>
      <Container
        fluid
        className="bg-black h-screen d-flex justify-content-center align-items-center"
      >
        <Row>
          <Col className="w-100">
            <h4 className="text-red text-white mt-2 text-center">
              Voting_App's
            </h4>
            <div className=" rounded p-4 text-white text-center">
              <Form onSubmit={handleVote}>
                <Form.Group controlId="candidateSelection">
                  <Form.Check
                    type="radio"
                    name="candidate"
                    id="cand_1"
                    label="Candidate 1"
                    value="Candidate 1"
                    onChange={onCandiddateChange}
                  />
                  <Form.Check
                    type="radio"
                    name="candidate"
                    id="cand_2"
                    label="Candidate 2"
                    value="Candidate 2"
                    className="pt-3"
                    onChange={onCandiddateChange}
                  />
                  <Form.Check
                    type="radio"
                    name="candidate"
                    id="cand_3"
                    label="Candidate 3"
                    value="Candidate 3"
                    className="pt-3"
                    onChange={onCandiddateChange}
                  />
                  <Form.Check
                    type="radio"
                    name="candidate"
                    id="cand_4"
                    label="Candidate 4"
                    value="Candidate 4"
                    className="pt-3"
                    onChange={onCandiddateChange}
                  />
                </Form.Group>
                <button
                  type="submit"
                  className="px-4 rounded-lg py-2 bg-red-700 hover:bg-red-500 mt-3 font-bold"
                >
                  Vote
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
