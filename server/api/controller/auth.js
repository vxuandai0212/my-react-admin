const user = require("../model/auth")
const userModel = user.userModel

const ERROR_PARAM_CODE = 10000

const ERROR_PARAM_MSG = "Parameter verification failed!"

module.exports = {
  postLogin: (req, res) => {
    const { userName = undefined, password = undefined } = req.body
    if (!userName || !password) {
      res.json({
        code: ERROR_PARAM_CODE,
        message: ERROR_PARAM_MSG,
        data: null,
      })
    }

    const findItem = userModel.find(
      (item) => item.userName === userName && item.password === password
    )

    if (findItem) {
      res.json({
        code: 200,
        message: "ok",
        data: {
          token: findItem.token,
          refreshToken: findItem.refreshToken,
        },
      })
    }

    res.json({
      code: 1000,
      message: "Wrong user name or password!",
      data: null,
    })
  },
  getUserInfo: (req, res) => {
    console.log(req.headers);
    const { authorization = "" } = req.headers
    console.log(`authorization: ${authorization}`);
    const REFRESH_TOKEN_CODE = 66666

    if (!authorization) {
      res.json({
        code: REFRESH_TOKEN_CODE,
        message: "The user has expired or does not exist!",
        data: null,
      })
    }
    const userInfo = {
      userId: "",
      userName: "",
      userRole: "user",
      defaultRoute: "",
      authorizedRoutes: undefined,
    }
    const isInUser = userModel.some((item) => {
      const flag = item.token === authorization
      if (flag) {
        const {
          userId: itemUserId,
          userName,
          userRole,
          defaultRoute,
          authorizedRoutes,
        } = item
        Object.assign(userInfo, {
          userId: itemUserId,
          userName,
          userRole,
          defaultRoute,
          authorizedRoutes,
        })
      }
      return flag
    })

    if (isInUser) {
      res.json({
        code: 200,
        message: "ok",
        data: userInfo,
      })
    }

    res.json({
      code: REFRESH_TOKEN_CODE,
      message: "User information is abnormal!",
      data: null,
    })
  },
}
