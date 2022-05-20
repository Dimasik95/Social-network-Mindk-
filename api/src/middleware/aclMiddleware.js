const ForbiddenExeption = require('../errors/ForbiddenExeption');
const acl = require('../services/acl');
const userService = require('../services/store/users.service');

module.exports = (rule) => async (req, res, next) => {
    const rules = Array.isArray(rule) ? rule : [rule];
    let isAllow = false;

    const getUserById = await userService.getUser(req.auth.iduser);
    const user = getUserById[0];
    if (user) {
    for await (const checkRule of rules) {
        // const resource = await checkRule.getResource(req);
        if (
                acl.aclRules[user.role] &&
                acl.aclRules[user.role][checkRule.resource]
            ) {
                for await (const permission of acl.aclRules[user.role][checkRule.resource]) 
                {
                    const canUseAnyAction = 
                            permission.possession === acl.Possession.ANY &&
                            permission.action === checkRule.action;

                    if (checkRule.possession === acl.Possession.ANY) {
                            if (canUseAnyAction) {
                                    isAllow = true;
                                    return next();
                            }
                    } else if (canUseAnyAction) {
                            isAllow = true;
                            return next();
                    } else {
                            const resource = await checkRule.getResource(req);
                            if (checkRule.isOwn(resource[0], user.iduser)) {
                                isAllow = true;
                            }
                    }
                }
               }
    }
    }
    
    if (isAllow) {
        return next();
    }

    return next(new ForbiddenExeption());
};