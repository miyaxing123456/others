export const regTel=(tel)=>{
    const reg=/^1[3456789]\d{9}$/g
    return reg.test(tel)
}

export const regIdx=(idx)=>{
    const reg=/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/g;

    return reg.test(idx)
}