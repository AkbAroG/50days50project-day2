var tl =gsap.timeline({scrollTrigger:{
     trigger:".flavor",
     start:"0% 95%",
     end:"50% 50%",
     scrub:true,
}}) 
tl.to("#fanta",{
    top:"130%",
    left:"4%",
},orange)
tl.to("#orange2",{
    top:"160%",
    left:"20%",
},orange)
tl.to("#orange",{
    top:"170%",
    left:"80%",
    
},orange)
tl.to("#leaf1",{
    top:"110%",
    left:"80%",
    rotate:"320deg"
},orange)
tl.to("#leaf2",{
    top:"150%",
    left:"6%",
    rotate:"270deg"
},orange)
var tl2 =gsap.timeline({scrollTrigger:{
    trigger:".cards",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
}}) 
tl2.to("#fanta",{
    top:"215%",
    left:"400%%",
},orange)
tl2.to("#orange2",{
    top:"200%",
    left:"490%%",
    width:"20%",
    rotate:"360deg"
},orange)
tl2.from("#cocacola",{
    left:"0%",
    top:"50%",
    rotate:"360deg"
},orange)
tl2.from("#lemon",{
    left:"0%",
    top:"50%",
    rotate:"360deg"
},orange)
tl2.from("#pepsi",{
    left:"0%",
    top:"50%",
    rotate:"360deg"
},orange)