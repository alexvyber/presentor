// require all modules on the path and with the pattern defined
const req = require.context('./', true, /.tsx$/)

const modules = req.keys().map(req)

export const slides = {}

modules.forEach((module) => {
  Object.assign(slides, { [Object.keys(module)[0]]: module.default })
})
