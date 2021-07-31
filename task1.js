let students =[
    {name:"Adhi",gender:"male"},
    {name:"Ahamed",gender:"male"},
    {name:"rutika",gender:"female"},
    {name:"priya",gender:"female"},
    {name:'ANAND',gender:"male"}
]

var femalee=(students.filter((foo)=> foo.gender=='female' ))
var men =(students.filter((foo)=> foo.gender=='male' ))
var a =(students.filter((foo)=> foo.name[0]=="A"))
console.log(femalee.map((foo)=> foo.name))
console.log(a.map((foo)=> foo.name))
console.log(men.length)