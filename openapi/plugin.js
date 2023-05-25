function OperationIdNotTest() {
    return {
        Operation(operation, ctx)
            if (operation.operationId === 'test') {
                ctx.report({
                    message: `operationId must be not "test"`,
                    location: ctx.location.child('operationId'),
                });
            }
        },
    };
}

module.exports = {
    id: 'test-plugin',
    rules: {
        oas3: {
            'id-test': OperationIdNotTest
        }
    }
}
