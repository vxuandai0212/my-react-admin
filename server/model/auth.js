const route = require('./route')
const omit = require('lodash/omit')

const superDefaultRoute = "/dashboard"
const superAuthorizedRoutes = route.routeModel
const adminDefaultRoute = "/project"
const adminAuthorizedRoutes = omit(route.routeModel, ["dashboard", "report"])

const userDefaultRoute = "task"
const userAuthorizedRoutes = omit(route.routeModel, [
  "dashboard",
  "report",
  "project",
])

module.exports = {
  userModel: [
    {
      token: "__TOKEN_SOYBEAN__",
      refreshToken: "__REFRESH_TOKEN_SOYBEAN__",
      userId: "0",
      userName: "Soybean",
      userRole: "super",
      password: "soybean123",
      defaultRoute: superDefaultRoute,
      authorizedRoutes: superAuthorizedRoutes,
    },
    {
      token: "__TOKEN_SUPER__",
      refreshToken: "__REFRESH_TOKEN_SUPER__",
      userId: "1",
      userName: "Super",
      userRole: "super",
      password: "super123",
      defaultRoute: superDefaultRoute,
      authorizedRoutes: superAuthorizedRoutes,
    },
    {
      token: "__TOKEN_ADMIN__",
      refreshToken: "__REFRESH_TOKEN_ADMIN__",
      userId: "2",
      userName: "Admin",
      userRole: "admin",
      password: "admin123",
      defaultRoute: adminDefaultRoute,
      authorizedRoutes: adminAuthorizedRoutes,
    },
    {
      token: "__TOKEN_USER01__",
      refreshToken: "__REFRESH_TOKEN_USER01__",
      userId: "3",
      userName: "User01",
      userRole: "user",
      password: "user01123",
      defaultRoute: userDefaultRoute,
      authorizedRoutes: userAuthorizedRoutes,
    },
  ],
}
