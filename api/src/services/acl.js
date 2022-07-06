const Action = {
    READ: 'read',
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete',
};

const Possession = {
    ANY: 'any',
    OWN: 'own',
};

const Resource = {
    ARTICLE: 'article',
    COMMENT: 'comment',
    USER: 'user',
};

const Roles = {
    ADMIN: 'admin',
    USER: 'user',
};

const allowAny = [
    {
        action: Action.CREATE,
        possession: Possession.ANY,
    },
    {
        action: Action.READ,
        possession: Possession.ANY,
    },
    {
        action: Action.UPDATE,
        possession: Possession.ANY,
    },
    {
        action: Action.DELETE,
        possession: Possession.ANY,
    },
];

const allowOwn = [
    {
        action: Action.CREATE,
        possession: Possession.ANY,
    },
    {
        action: Action.READ,
        possession: Possession.ANY,
    },
    {
        action: Action.UPDATE,
        possession: Possession.OWN,
    },
    {
        action: Action.DELETE,
        possession: Possession.OWN,
    },
];

const aclRules = {
    [Roles.ADMIN]: {
        [Resource.USER]: allowAny,
        [Resource.ARTICLE]: allowAny,
        [Resource.COMMENT]: allowAny,
    },
    [Roles.USER]: {
        [Resource.USER]: allowOwn,
        [Resource.ARTICLE]: allowOwn,
        [Resource.COMMENT]: allowOwn,
    }
};

module.exports = {Action, Possession, Resource, Roles, allowAny, allowOwn, aclRules};
