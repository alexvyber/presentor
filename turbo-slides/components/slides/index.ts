// require all modules on the path and with the pattern defined
const req = require.context('./', true, /.tsx$/)

const modules = req.keys().map(req)

const defaultExport = {}

modules.forEach((module) => {
  // console.log("🚀 ~ modules.map ~ mod:", new Date(), mod.default)
  // console.log("🚀 ~ modules.map ~ Object.keys(mod)[0]:", Object.keys(mod)[0])
  // module.exports[[Object.keys(mod)[0]]] = mod.default
  // Object.assign(defaultExport, )

  console.log('🚀 ~ modules.forEach ~ Object.keys(module)[0]:', Object.keys(module)[0])

  defaultExport[[Object.keys(module)[0]]] = module.default
})

export default defaultExport
