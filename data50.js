const fs = require ("fs")

const addPerson = (fname , lname) => {
const allData = allData()
allData.push({
  fname : fname,
  lname : lname

})
saveAllData = () => {
}
  const loadData = fs.readFileSync('data50.json').toString()
  return JSON.parse(dataJson)
}
const saveAllData = (allData) => {
  const saveAllData =JSON.stringify(allData)
  fs.writeFileSync('data50.json' ,saveAllData)
}
