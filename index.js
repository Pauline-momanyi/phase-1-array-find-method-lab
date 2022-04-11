// code your solution here

function superbowlWin (record){
  const superbowlWinYear = record.find((value)=>value.result === "W"
)
//console.log(superbowlWin);
if  (superbowlWinYear){
  return superbowlWinYear.year
}
}
console.log(superbowlWin(record))

