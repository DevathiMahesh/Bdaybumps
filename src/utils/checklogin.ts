export default function checkLogin()
{
    let temp = localStorage.getItem("login");
    if(temp==="true")
       return true;
    return false;
}