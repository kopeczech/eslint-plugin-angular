/**
 * DEPRECATED! The scope's $digest() method shouldn't be used.
 * You should prefer the $apply method.
 *
 * @ruleName no-digest
 * @config 2
 */
module.exports = function(context) {

    'use strict';

    return {

        'MemberExpression': function(node) {
			if(node.property.type === 'Identifier' && node.property.name === '$digest'){
                context.report(node, 'Instead of using the $digest() method, you should prefer $apply()', {});
            }
        }
    };

};

module.exports.schema = [
    // JSON Schema for rule options goes here
];
