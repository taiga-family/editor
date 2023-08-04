module.exports = {
    ...require('@tinkoff/prettier-config/angular'),
    singleAttributePerLine: true,
    overrides: [
        ...require('@tinkoff/prettier-config/angular').overrides,
        {
            files: ['*.js', '*.ts'],
            options: {printWidth: 90, parser: 'typescript'},
        },
        {
            files: '*.html',
            options: {printWidth: 80, parser: 'angular'},
        },
    ],
};
