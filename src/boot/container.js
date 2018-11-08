const fs = require('fs')
const path = require('path')

const containersPath = path.join(__dirname, '..', 'containers')

const container = fs
  .readdirSync(containersPath)
  .map(file => require(`@/containers/${file}`))
  .reduce((flat, dependencies) => ({...flat, ...dependencies }), {})

/**
 * @module boot/container
 */
module.exports = {
  /**
   * Retrieves a dependency
   * @param {String} name The module name
   */
  get(name) {
    return container[name](container)
  },
  /**
   * Add a depency to the container
   * @param {String} name The module name
   * @param {*} dependency The module value
   */
  add(name, dependency) {
    container[name] = dependency
  }
}