const router = require('express').Router();
const passport = require('passport');
const authService = require('../domain/auth');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const UnauthorizedException = require('../errors/UnauthorizedException');
const ForbiddebException = require('../errors/ForbiddenExeption');

router.post(
        '/refresh',
        asyncErrorHandler(async (req, res) => {
            const { accessToken, refreshToken } = await authService.refresh(
                req.body.refreshToken,
            );
            if (accessToken) {
                    res.send({
                    accessToken,
                    refreshToken,
                    success: true,
                });
            } else {
                    throw new ForbiddebException('');
            }
        }),
);
router.post(
        '/logout',
        asyncErrorHandler(async(req, res) => {
            await authService.logout(req.body.refreshToken);
            return res.send({
                success: true,
            });
        }),
);
router.post(
    '/google',
    passport.authenticate('google-token', { session: false }),
    asyncErrorHandler(async (req, res) => {
        const { accessToken, refreshToken } = await authService.authorizeById(
            req.user.id,
        );
        if (accessToken) {
          return res.send({
              accessToken,
              refreshToken,
              userId: req.user.id,
              firstname: req.user.firstname,
              avatar: req.user.avatar,
              success: true,
          });
        }
        throw new UnauthorizedException('');
    })
);
router.post(
    '/facebook',
    passport.authenticate('facebook-token', { session: false}),
    asyncErrorHandler(async (req, res) => {
        const { accessToken, refreshToken } = await authService.authorizeById(
            req.user.id
        );
        if (accessToken) {
                 return res.send({
                         accessToken,
                         refreshToken,
                         userId: req.user.id,
                         firstname: req.user.firstname,
                         avatar: req.user.avatar,
                         success: true,
          });
        }
        throw new UnauthorizedException('');
    })
);

module.exports = router;