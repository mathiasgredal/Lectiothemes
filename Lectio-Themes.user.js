// ==UserScript==
// @name         Lectio Themes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.lectio.dk/*
// @grant        none
// @run-at       document-start
// ==/UserScript==



// Coloring
var background = "#292929";
var card = "#292929";
var header = "#292929";
var button = "#23272A";
var text = "#FFFFFF";
var cardholder = "#36393F";
var inputcolor = "#99AAB5";
var blurple = "#7289DA";
console.log(background);

var css = `

:root {
    --bg-color: `+ background +`;
    --card-color: `+ card +`;
    --header-color: `+ header +`;
    --button-color: `+ button +`;
    --text-color: `+ text +`;
    --card-holder: `+ cardholder +`;
    --inputcolor: `+ inputcolor +`;
    --blurple: `+ blurple +`;
}

.ls-master-container1 {
background-color: var(--bg-color);
}

BODY {
background-color: var(--bg-color);
}

SECTION.island .islandContent {
background-color: var(--card-holder);
}

.s2dayHeaderSimple {
background-color: var(--card-color);
}


SECTION.island {
background-image: url("");
background-color: var(--card-color);
}

td, span, .s2dayHeaderSimple, th {
color: var(--text-color);
}


.s2bgbox .s2skemabrikcontent {
background-color: var(--card-color);
}

.ls-master-header, .lectioToolbar {
background-image: url("");
background-color: var(--header-color);
}

DIV.button A {
background-image: url("");
background-color: var(--header-color);
}

.list, .ls-table-layout1, .separationCell, .separationCell TD, .separationCell TH, BODY.ls-container, DIV.form, DIV.ls-container, DIV.panel, TABLE.form, TABLE.ls-container, TABLE.panel, TD.ls-container {
background-color: var(--card-color);
}

.lectioTabContainer .lectioTabContent, .lectioTabContainer .lectioTabFooter, .buttonhover A.aspNetDisabled, .buttonhover A.aspNetDisabled:hover, .buttonhover A[disabled=disabled], A.button[disabled=disabled]:hover, DIV.button A.aspNetDisabled, DIV.button A.aspNetDisabled:hover, DIV.button A[disabled=disabled], DIV.button A[disabled=disabled]:hover, SPAN.button A[disabled=disabled], SPAN.button A[disabled=disabled]:hover {
background-color: var(--card-color);
background-image: url("");
text-shadow: rgb(255, 255, 255) 0px 0px 0px;
}




DIV.button A:hover {
background-image: url("");
background-color: var(--card-holder);
}

tr {
background-image: url("");
background-color: var(--card-color) !important;
}

TABLE.island .islandHeaderRight {
background-image: url("");
background-color: var(--card-color);
}

TABLE.island .islandHeaderLeft {
background-image: url("");
background-color: var(--card-color);
}

TABLE.island {
background-image: url("");
background-color: var(--card-color);
border: 1px solid #b8c3cc;
}

TABLE.island .islandContent, TABLE.island .islandContentLeft, TABLE.island .islandContent, TABLE.island .islandContentRight, TABLE.island .islandHeader {
background-image: url("");
background-color: var(--card-color);
}

.s2skema .s2infoHeader, .s2weekHeader TD, .s2dayHeader TD {
background-image: url("");
background-color: var(--card-color);
}

.s2bgbox[class~=s2marking] .s2skemabrikInnerContainer:hover, .s2bgbox[class~=s2withlink] .s2skemabrikInnerContainer:hover {
background-image: url("");
background-color: var(--card-color);
}

.s2bgbox .s2skemabrikInnerContainer, .s2nohover .s2bgbox[class~=s2marking] .s2skemabrikInnerContainer:hover, .s2skemabrikcontainer{
background-image: url("");
background-color: var(--card-color);
}

.s2module-bg {
border-top: 0px;
}

.s2bgbox .s2skemabrikcontent {
padding: 0px;
}

A.s2bgbox {
border: 0px;
}

.s2dayHeader TD, .s2weekHeader TD {
color: var(--text-color);
}

.ui-widget-header, .timevertical .col, .colHeader.table-row-fixed.table-col-fixed-right, .colHeader.table-row-fixed.table-col-fixed {
background:var(--card-color) !important;
}

.ui-state-default, .ui-widget-content .ui-state-default  {
background-image: url("");
background-color: var(--card-color);
border: 0px;
}

#m_Content_eleveroverskrifttd {
background-color: var(--card-color);
}

#s_m_Content_Content_SFTabAbsenceimg {
filter: invert(70%) brightness(100%) contrast(180%);
}

#s_m_Content_Content_SFTabPeriodChooserCtrl_end__date_tb, #s_m_Content_Content_SFTabPeriodChooserCtrl_start__date_tb {
background-color: var( --card-holder);
}

`;




(function(){

    var loc = document.location.href;
    if( loc.indexOf("https://www.lectio.dk/") == 0){

            if(document.head){
                var style = document.createElement("style");
                style.innerHTML = css;
                document.head.appendChild(style);
            }
        document.body.setAttribute("data-theme", "dark");


    }

})()


document.addEventListener ("DOMContentLoaded", checkFlag);


function checkFlag() {
    if(document == undefined) {
       window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/

    } else {

            init();
    }
}

function init() {
    document.body.style.background = background;

    /*
    var stylesheetindex = 1;
    if(document.styleSheets[2].rules.length > document.styleSheets[1].rules.length)
    {
        stylesheetindex = 2;
    }


    for(var i = 0; i < document.styleSheets[stylesheetindex].cssRules.length; i++)
    {
        if(document.styleSheets[stylesheetindex].cssRules[i].selectorText)
        {
            switch(document.styleSheets[stylesheetindex].cssRules[i].selectorText)
            {
                case ".messaging-area-container .messaging-area .messages-area .response .message-box .message-text-container textarea":
                    document.styleSheets[stylesheetindex].cssRules[i].style.backgroundColor = cardholder;
                    break;
            }
        }



    }
    */
}






