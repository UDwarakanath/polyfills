// polyfill for flat method
const arr = [1,2,3,[7,1,[2,5,9]],[11,22]];
Array.prototype.myflat = function (depth){
  let res = []
  if(!Array.isArray(this)){
    throw new Error("Given props is not array")
  }

  this.forEach(ele=>{
    if(Array.isArray(ele) && depth > 0){
      res.push(...ele.myflat(depth-1))
    }else{
      res.push(ele)
    }
  }
  )

  return res
}

console.log(arr.myflat(0))