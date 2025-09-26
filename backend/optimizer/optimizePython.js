const { execSync } = require('child_process');

function optimizePython(filePath) {
  try {
    execSync(`autopep8 --in-place ${filePath}`);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

module.exports = { optimizePython };
