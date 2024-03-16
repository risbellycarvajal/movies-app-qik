module.exports = {
    preset: 'react-native',
    setupFiles: ['./jestSetupFile.ts'],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@?react-native|@react-navigation|@react-native-community)'
    ]
};
