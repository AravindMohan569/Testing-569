const util = require('util')
const execFile = util.promisify(require('child_process').execFile)
const { version } = require('./package')

// constants
const { ERROR, SUCCESS } = require('./constants/message-types')

// helpers
const log = require('./helpers/log')

log(`dockermon v${version}`)

const getStats = async () => {
  const { stdout } = await execFile('docker', ['stats', '--no-stream', '--format', '{"container": "{{ .Container }}", "name": "{{ .Name }}", "metrics": {"MetricName": "CPU %", "Value": "{{ .CPUPerc }}"},{"MetricName": "Memory %", "Value": "{{ .MemPerc }}"}}'])
  log('stats collected', SUCCESS)
  return stdout
}

const processStats = async (stats) => {
  log('processing stats')
  log(stats === '' ? 'no containers running' : stats)
}

setInterval(() => {
  getStats()
    .then(stats => processStats(stats))
    .catch(e => log(e.message, ERROR))
}, 60000)
