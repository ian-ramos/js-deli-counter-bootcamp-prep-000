var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var customer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${customer}.`
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
  var array = []
  for (var i = 0; i < katzDeliLine.length; i++) {
    if(i === 0) {
    array.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    else {
      array.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
  }
    return `The line is currently: ${array}`
  }
}
