let div=document.getElementById('comment');
function Post()
{
   
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let textarea=document.getElementById('textarea').value;
    let isvalid=1;
    if(textarea=="")
    document.getElementById('reqtextarea').innerHTML=" *write something here";
    else
    document.getElementById('reqtextarea').innerHTML="";
   
    if(name=="")
    document.getElementById('reqname').innerHTML="*name is required";
    else
    document.getElementById('reqname').innerHTML="";
   
    if(email=="")
    document.getElementById('reqemail').innerHTML="*email is required";
    else
    {
        //alert("hi")
        let atposition=email.indexOf("@");  
       let dotposition=email.lastIndexOf(".");  
       if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
       {
           isvalid=0;
        document.getElementById('reqemail').innerHTML="*email is invalid"
       }
       else
       document.getElementById('reqemail').innerHTML="" ;  
    }
    if(name!=""&&email!=""&&textarea!=""&&isvalid)
    {
    
        var link=document.createElement('link');
        link.rel='stylesheet';
        link.type='text/css';
        link.href="./css/comment.css";
        document.getElementsByTagName('head')[0].appendChild(link);
        var div=document.createElement("div");
        div.className="comment-content";
      let p=document.createElement('p');
      p.className="pid";
      let p1=document.createElement('p');
      p1.className="p1id";
      let p2=document.createElement('p');
      p1.className="p1id";
      p.textContent=name;
      p1.textContent=email;
      p2.textContent=textarea;
      let hr=document.createElement('hr');
      
    

      div.appendChild(p);
      div.appendChild(p1);
      div.appendChild(hr);
      div.appendChild(p2);
      
      document.getElementById('dis1').appendChild(div);
      


    }
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('textarea').value="";

}