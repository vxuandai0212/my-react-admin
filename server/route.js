"use strict"
module.exports = function (app) {
  const auth = require("./controller/auth")
  const invoice = require("./controller/invoice")
  const report = require("./controller/report")

  // todoList Routes
  app.route("/login").post(auth.postLogin)
  app.route("/getUserInfo").get(auth.getUserInfo)

  app.route("/invoices/get-all").post(invoice.invoiceGetAll)

  app.route("/reports/latest-update").post(report.latestUpdate)
  app.route("/reports/upcoming-event").post(report.upcomingEvent)
  app.route("/reports/popular-category").post(report.popularCategory)
  app.route("/reports/overview-stat").post(report.overviewStat)
  app.route("/reports/visits").post(report.visit)
  app.route("/reports/spread-consumption").post(report.spreadConsumption)
  app.route("/reports/air-pollutant").post(report.airPollutant)
  app.route("/reports/smoking").post(report.smoking)
  app.route("/reports/road-transport-spend").post(report.roadTransportSpend)
  app.route("/reports/sales").post(report.sale)
  app.route("/reports/transportations").post(report.transportation)
}
