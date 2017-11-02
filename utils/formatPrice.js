const roundCurrency = num =>  Number(Math.round((num/100)+'e2')+'e-2')

const addZeros = num => {
  const arr = num.toString().split('.')
  if (!arr[1])
    return '$'+arr[0]+'.00'
  else if (arr[1].length === 1)
    return '$'+arr.join('.')+'0'
  return '$'+num.toString()
}

const formatPrice = num => addZeros(roundCurrency(num))

export default formatPrice
