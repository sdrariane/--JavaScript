let output = ''

for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 39; j++) {
    if (i == 1 || i == 7)
      output += "-"
    else if (j == 1 || j == 39)
      output += "|"
    else
      output += " "
  }
  output += "\n"
}

console.log(output);