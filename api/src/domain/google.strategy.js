const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const config = require('../services/config');
const userService = require('../services/store/users.service');

passport.use(
        new GoogleTokenStrategy(
            {
                clientID: config.googleClientID,
                clientSecret: config.googleClientSecret,
            },

            async (accessToken, refreshToken, profile, done) => {
                const [{ value: email }] = profile.emails;
                let user = await userService.getUserByEmail(email);
                if (!user) {
                    await userService.addUser({
                            username: profile.displayName,
                            email,
                    });
                    user = await userService.getUserByEmail(email);
                }
                return done(null, {
                        id:user.id,
                        username: user.username,
                        email: user.email,
                });
            }
        )
);

module.exports = passport;