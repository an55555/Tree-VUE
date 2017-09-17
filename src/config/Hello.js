/**
 * Created by Administrator on 2017/9/15.
 */
export default function(txt) {
    var cH1=document.createElement("H1");
    cH1.innerHTML=txt
    cH1.className="sayHello"
    var firstDOM=document.body.firstChild
    console.log(firstDOM)
    if(firstDOM){
        document.body.insertBefore(cH1,firstDOM)
    }else{
        document.body.appendChild(cH1)
    }

}