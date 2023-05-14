const { overrides } = require('@taiyuuki/eslint-config')

module.exports = {
    extends: ['@taiyuuki/eslint-config', 'plugin:@typescript-eslint/recommended'],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'plugins': ['@typescript-eslint'],
    settings: { 'import/resolver': { node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] } } },
    overrides,
    rules: {
        'import/named': 'off',

        // ts
        '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/type-annotation-spacing': ['warn', {}],
        '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', disallowTypeAnnotations: false }],
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/prefer-ts-expect-error': 'error',

        // override
        'no-undef': 'off',
        'no-useless-constructor': 'off',
        'indent': 'off',
        '@typescript-eslint/indent': ['warn', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: [
                'TemplateLiteral *',
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXFragment',
                'JSXOpeningFragment',
                'JSXClosingFragment',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild',
                'TSTypeParameterInstantiation',
                'FunctionExpression > .params[decorators.length > 0]',
                'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
            offsetTernaryExpressions: true,
        }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
            functions: false, classes: false, variables: true,
        }],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
        'semi': 'off',
        '@typescript-eslint/semi': ['warn', 'never'],
        'quotes': 'off',
        '@typescript-eslint/quotes': ['warn', 'single'],
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'warn',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'warn',
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['warn', { before: true, after: true }],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['warn', { before: false, after: true }],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['warn', 'functions'],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'warn',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'warn',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],

        // off
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
    },
}
