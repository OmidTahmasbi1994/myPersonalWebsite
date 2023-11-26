function opennav()
{
    document.getElementById("mysidenav").style.left="0px";
    document.getElementById("bar").style.visibility="hidden";
}


function closenav()
{
    document.getElementById("mysidenav").style.left="-100%";
    document.getElementById("bar").style.visibility="visible";
    
}


function openresponsivenav()
{
    document.getElementById("responsivenav").style.left="0px";
    document.getElementById("responsivebar").style.transform="rotateZ(90deg)";
    document.getElementById("responsivebar").style.transition="0.3s";
    document.getElementById("responsivenav").style.transition="0.7s";
    document.getElementById("responsivenav").style.transitionDelay="0.3s";
    document.getElementById("responsivemenuword").style.visibility="hidden";
}


function closeresponsivenav()
{
    document.getElementById("responsivenav").style.left="-100%";
    document.getElementById("responsivebar").style.transform="rotateZ(0deg)";
    document.getElementById("responsivemenuword").style.visibility="visible";
    document.getElementById("responsivenav").style.transition="0s";
}


function bannerOnMouse()
{
    document.getElementById('banner').style.color="yellow";
    document.getElementById('header_inf').style.color="yellow";

}
function bannerMouseOut()
{
    document.getElementById('banner').style.color="black";
    document.getElementById('header_inf').style.color="black";
}
function bannerOnMouseFarsi()
{
    document.getElementById('Farsi_banner').style.color="yellow";
    document.getElementById('Farsi_header_inf').style.color="yellow";

}
function bannerMouseOutFarsi()
{
    document.getElementById('Farsi_banner').style.color="black";
    document.getElementById('Farsi_header_inf').style.color="black";
}


var index = 0;
setInterval(function(){slider()} , 4000);
var fade = setInterval(function(){fading()} , 10);
function slider()
{
    var slides = document.getElementById('slides-link').getElementsByTagName('img');
    ++index;

    if(slides.length == index)
        index = 0;
    
    if(index == 0)
        slides[slides.length-1].style.display = "none";
    else
        slides[index-1].style.display = "none";
        slides[index].style.display="inline";
        slides[index].style.opacity = 1;
        clearInterval(fade);
        fade = setInterval(function(){fading()} , 10);

}

function fading()
{
    var slidesF = document.getElementById('slides-link').getElementsByTagName('img');
    var opacity = slidesF[index].style.opacity >=0 ? slidesF[index].style.opacity : 1;
    slidesF[index].style.opacity = opacity-0.0025;
}

function readmorefunction()
{
    var dots = document.getElementById("dots");
    var newsmore = document.getElementById("newsmore");
    var readmoreButton = document.getElementById("readmoreButton");

    if(dots.style.display == "none")
    {
        dots.style.display = "inline";
        newsmore.style.display = "none";
        readmoreButton.className = "fa fa-chevron-down";
    }
    else
    {
        dots.style.display = "none";
        newsmore.style.display = "inline";
        readmoreButton.className = "fa fa-chevron-up";
    }
}

function readmorefunction2()
{
    var dots2 = document.getElementById("dots2");
    var newsmore2 = document.getElementById("newsmore2");
    var readmoreButton2 = document.getElementById("readmoreButton2");

    if(dots2.style.display == "none")
    {
        dots2.style.display = "inline";
        newsmore2.style.display = "none";
        readmoreButton2.className = "fa fa-chevron-down";
    }
    else
    {
        dots2.style.display = "none";
        newsmore2.style.display = "inline";
        readmoreButton2.className = "fa fa-chevron-up";
    }
}

setInterval(function(){fade_faryadBiseda()} , 13)
function faryadbiseda_CopyrightError()
{
    document.getElementById('faryadbiseda_CopyRight').style.opacity = 1;
}
function fade_faryadBiseda()
{
    var op_faryadBiseda = document.getElementById('faryadbiseda_CopyRight').style.opacity;
    if(op_faryadBiseda >= 0)
        document.getElementById('faryadbiseda_CopyRight').style.opacity = op_faryadBiseda - 0.0025; 
}

setInterval(function(){fade_leadenHearts()} , 13)
function leadenhearts_CopyrightError()
{
    document.getElementById('leadenhearts_CopyRight').style.opacity = 1;
}
function fade_leadenHearts()
{
    var op_leadenHearts = document.getElementById('leadenhearts_CopyRight').style.opacity;
    if(op_leadenHearts >= 0)
        document.getElementById('leadenhearts_CopyRight').style.opacity =  op_leadenHearts - 0.0025; 
}




function openFarsinav()
{
    document.getElementById("myFarsi_sidenav").style.right="0px";
    document.getElementById("Farsi_bar").style.visibility="hidden";
}


function closeFarsinav()
{
    document.getElementById("myFarsi_sidenav").style.right="-100%";
    document.getElementById("Farsi_bar").style.visibility="visible";    
}
