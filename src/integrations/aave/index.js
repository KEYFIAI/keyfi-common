const api = require("./api")
const apiv1 = require("./api")
const apiv2 = require("./v2")
const isSupportedNetwork = require("./constants/address")

module.exports={
    api,
    apiv1,
    apiv2,
    isSupportedNetwork
}