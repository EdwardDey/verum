import React, { useState } from 'react';

function problemStatementForm() {
  const [formData, setFormData] = useState({
    who: '',
    what: '',
    why: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the form data here, e.g., send it to a server.
    console.log(formData);
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="who">Who:</label>
          <input
            type="text"
            id="who"
            name="who"
            value={formData.who}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="what">What:</label>
          <input
            type="text"
            id="what"
            name="what"
            value={formData.what}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="why">Why:</label>
          <input
            type="text"
            id="why"
            name="why"
            value={formData.why}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default problemStatementForm;