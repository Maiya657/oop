export default function orderByProps(obj, order) {
  let result = [];
  order.forEach(name => {
    if (obj.hasOwnProperty(name)) {
      result.push({ key: name, value: obj[name] });
    }
  })
  
  const temp = [];
  for(const key in obj) {
    if (!order.find(name => name === key)) {
      temp.push({ key: key, value: obj[key]});
    }
  }

  temp.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    } else {
      return 1;
    }
  });

  result.push(...temp);
  
  return result;
}
