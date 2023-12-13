const model = require("../model/invoice")

module.exports = {
  invoiceGetAll: (req, res) => {
    const { status, page, limit } = req.body
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit - 1

    let items
    let filterItems

    if (status && status !== "all") {
      filterItems = model.invoiceModel.list.filter((i) => i.status === status)
      items = filterItems.filter(
        (_i, index) => index <= endIndex && index >= startIndex
      )
    } else {
      filterItems = model.invoiceModel.list
      items = filterItems.filter(
        (_i, index) => index <= endIndex && index >= startIndex
      )
    }

    res.json({
      code: 200,
      message: "ok",
      data: {
        total: filterItems.length,
        items,
      },
    })
  },
}
