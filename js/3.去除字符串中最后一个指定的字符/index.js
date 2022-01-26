function delLast(str,target) {
    let reg =new RegExp(`${target}(?=([^${target}]*)$)`)
    return str.replace(reg,'')
  }