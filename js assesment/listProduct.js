  let list1 = [1,2,3,4]

  var listProduct = (a) => {
    let count = 0
    let sum = 1;
    let lengths = a.length
    let list2  = []
    for(let i = 0; i < lengths; i++){
        sum*=a[i]  
    }
    console.log(sum)

    for(let j = 0; j < lengths; j++){
        console.log(a[j])
    let sums =  (sum - a[j] * a.length)
    list2.push(sums)
  }
  return list2
}

console.log(listProduct(list1))
