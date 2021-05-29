const add=(x:number,y:number,z?:number):number => {
    if (typeof z==='number'){
        return x+y+z
    }else {
        return x+y
    }
}
interface ISum{
    x:number,y:number,sum:()=>number
}
const mm:ISum={
    x: 2,
    y: 3,
    sum:() :number=>{return mm.x+mm.y}
}
console.log(mm.sum())

