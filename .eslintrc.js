module.exports = {
  extends: [
    'react-app',
    'react-app/jest', 
    // 'plugin:testing-library/react', // Enlève cette ligne si le conflit persiste
    'plugin:jest-dom/recommended'
  ],
  plugins: [
    'jest-dom', 
    // 'testing-library'  // Enlève cette ligne si le conflit persiste
  ],
};
