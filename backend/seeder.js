import mongoose from 'mongoose'
import dotenv from 'dotenv'
import houses from './data.js'
import House from './Model/houseModel.js'
import connectDB from './Utils/DB.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
      await House.deleteMany()
    await House.insertMany(house)

    console.log('Data consted!')
    process.exit()
  } catch (error) {
    console.error(`${error}`,'hello')
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await House.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}