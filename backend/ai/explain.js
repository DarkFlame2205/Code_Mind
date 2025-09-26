const axios = require('axios');

async function explainCode(code) {
  try {
    const res = await axios.post('http://localhost:5000/explain', { code });
    return res.data.explanation;
  } catch (err) {
    console.error(err);
    return "Could not explain code";
  }
}

module.exports = { explainCode };
