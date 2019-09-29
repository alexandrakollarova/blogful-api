const setTZ = require('set-tz')
setTZ('UTC')
process.env.TZ = 'UTC'
require('dotenv').config()
const { expect } = require('chai') // assertion library
const supertest = require('supertest') // testing HTTP calls
 
global.expect = expect
global.supertest = supertest