const UnprocessableEntityException = require ('../errors/UnprocessableEnityException');
const db = require('../services/db');

module.exports = (validationRules, params) => async (req, res, next) => {
    const errors = {};

    for await (const field of Object.keys(validationRules)) {
        const fieldErrors = [];
        const rules = validationRules[field];

    for await (const ruleWithParams of Object.entries(rules)) {
            const [rule, param] = ruleWithParams;
            switch (rule) {
                case 'required':
                    if (!req.body[field]) {
                        fieldErrors.push('field is required');
                    }
                    break;
                case 'email':
                    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(req.body[field])) {
                        fieldErrors.push('valid email is required');
                    }
                    break;
                case 'min': {
                    const minValue = parseFloat(param);
                    if (req.body[field] && req.body[field].length < minValue) {
                            fieldErrors.push(`too short, min = ${minValue}`);
                    }
                    break;
                }
                case 'max': {
                    const maxValue = parseFloat(param);
                    if (req.body[field] && req.body[field].length > maxValue) {
                            fieldErrors.push(`too long, max = ${maxValue}`);
                    }
                    break;
                }
                case 'unique': {
                    let mainResource;
                    if (params[field].id) {
                        mainResource = await db
                            .select()
                            .first()
                            .where(params[field].id, req.params.id)
                            .from(params[field].tableName);
                    };
                    

                    const resource = await db
                            .select()
                            .first()
                            .where(params[field].fieldName, req.body[field])
                            .from(params[field].tableName);
                    if (resource && (!mainResource || mainResource.id !== resource.id)) {
                            fieldErrors.push('not unique');
                    }
                    break;
                }
                case 'regex':
                    if (!req.body[field].match(param)) {
                        fieldErrors.push('not regular expression');
                    }
                    break;
                    // no default
            }
        }
        if (fieldErrors.length !==0 ) {
            errors[field] = fieldErrors;
        }
    }

    if (Object.keys(errors).length === 0) {
        return next();
    }
    return next(new UnprocessableEntityException(errors));
};
