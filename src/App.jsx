import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleHintsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUnlockClick = () => {
    if (inputValue.toUpperCase() === "WARRIOR") {
      navigate("/baby");
    } else {
      setErrorMessage("Incorrect Code");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-secondary text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <img
        src="/assets/padlock.png"
        alt="Padlock"
        className="mb-4"
        style={{ maxWidth: "300px", height: "auto" }}
      />
      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Passphrase"
          style={{ maxWidth: "300px" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-warning" onClick={handleUnlockClick}>
          Unlock
        </button>
      </div>
      {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
      <button className="btn btn-info mt-3" onClick={handleHintsClick}>
        Hints
      </button>

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title">Hints</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>1. Billy's favorite movie</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default App;
