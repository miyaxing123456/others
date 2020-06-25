import {fn} from "./methods.js"

function getName() {
    return "这里是一个js文件"
}
export function getAge() {
    return 20;
}
export default function getAllName(){
    return fn(10);
}

// export  {
//     getName,
//     getAge,
//     getAllName
// }
