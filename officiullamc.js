const fs = require('fs');

try {
  if (!fs.existsSync('my-directory')) {
    fs.mkdirSync('my-directory');
    console.log('Directory created successfully.');
  } else {
    console.log('Directory already exists.');
  }
} catch (err) {
  console.error('Error creating directory:', err);
}
