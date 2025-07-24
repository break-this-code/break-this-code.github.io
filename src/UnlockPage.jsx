import React from "react";

function UnlockPage() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-secondary text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1 className="mb-4">Little Baby Finger is on the way!</h1>
      <img
        src="/assets/baby.jpg"
        alt="Baby"
        style={{ maxWidth: "300px", height: "auto" }}
      />
      <h2 className="mb-4">Due in early 2026!</h2>
    </div>
  );
}

export default UnlockPage;
