module.exports = {
  '**/*.{js,ts}?(x)': ['yarn pretty:write', 'yarn lint:fix'],
  '*.md': ['prettier --write'],
};
