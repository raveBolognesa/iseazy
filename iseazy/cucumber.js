const config = {
    paths: ['bdd/features/*.feature'],
    require: ['bdd/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
        'summary',
        'progress-bar',
    ],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true,
};

module.exports = {
    default: config
}
