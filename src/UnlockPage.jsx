import React from "react";

function UnlockPage() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-secondary text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1 className="mb-4">Little Baby Finger is on the way!</h1>
      <img
        src="/assets/announcement1.jpg"
        alt="Baby"
        style={{ maxWidth: "500px", height: "auto" }}
      />
      <h2 className="mb-4">Due in early 2026!</h2>
      <p>
        If you are seeing this page, please reach out to me individually until
        the others have figured out the code.
      </p>
    </div>
  );
}

export default UnlockPage;
