function getMinMax(str) {
  let num = str.split(/[ ,]+/);
   
  let minV = +num[0];
  let maxV = minV;
    for (let i = 0; i < num.length; i++) {
      let e = +num[i];
      if (e < minV) minV = e;
      if (e > maxV) maxV = e;
    }
    return {min: minV, max: maxV};
}
  