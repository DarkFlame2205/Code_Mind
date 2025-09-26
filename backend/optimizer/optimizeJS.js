const { execSync } = require('child_process');

function optimizeJS(filePath) {
  try {
    execSync(`prettier --write ${filePath}`);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

module.exports = { optimizeJS };
