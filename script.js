
document.querySelector("#btn").addEventListener('click',function()
{
    //console.log("clicked me");
    var newColor=generateHex();

    document.querySelector('body').style.backgroundColor=newColor;
    document.getElementById('hex-value').textContent=newColor;

});

function generateHex()
{
    var hexValues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var len=hexValues.length;

    var newValue="#";
    for(var i=0;i<6;i++)
    {
        newValue+=hexValues[Math.floor(Math.random()*len)];
    }
    return newValue;
}