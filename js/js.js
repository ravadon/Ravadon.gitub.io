document.addEventListener('DOMContentLoaded', function() {
    OnLoad();
 }, false);


 document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    // if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
    //     alert("hi 1");
    // }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        OnLoad();
    }
});

function ReplaceText(element, textToReplace, replaceWith)
{
    text = element.innerHTML;
    let result = text.replace(textToReplace, "<a href='Media/ConnectionStringPin.png' target='_blank'><span class='string'>Connection String Pin</span></a>");
    element.innerHTML = result;
}

function OnLoad()
{
    //alert("hi 2");
    //document.getElementsByTagName('p').innerHTML = document.getElementsByTagName('p').innerHTML.replace('%Set%','John');
    //document.getElementById('name').innerHTML = document.getElementById('name').innerHTML.replace('%Name%','John');

    
    var allParas = document.getElementsByTagName('p');

    for(var i = 0; i < allParas.length; i++)
    {
        if (allParas[i].classList.contains("para"))
        {
            // let text = allParas[i].innerHTML;
            // let result = text.replace(/Connection String Pin/g, "<a href='Media/ConnectionStringPin.png' target='_blank'><span class='string'>Connection String Pin</span></a>");
            // allParas[i].innerHTML = result;

           
            let text = allParas[i].innerHTML;
            let result = text.replace(/Connection String Pin/g, "<a href='Media/ConnectionStringPin.png' target='_blank'><span class='string'>Connection String</span></a> pin").
            replace(/Connection String variable/g, "<a href='#preparingBlueprintDiv'><span class='string'>Connection String</span></a> variable").
            replace(/Column Values variable/g, "<a href='#preparingBlueprintDiv'><span class='string'>Column Values</span></a> variable").
            replace(/DatabaseObject variable/g, "<a href='#preparingBlueprintDiv'><span class='object'>DatabaseObject</span></a> variable").
            replace(/DatabaseObject variable/g, "<a href='#preparingBlueprintDiv'><span class='object'>DatabaseObject</span></a> variable").
            replace(/OnComplete/g, "<a href='Media/OnCompleteEvent.png' target='_blank'><span class='event'>OnComplete</span></a>").
            replace(/On Complete/g, "<a href='Media/OnCompletePin.png' target='_blank'><span class='delegate'>On Complete</span></a>").
            replace(/ExecuteStatement/g, "<a href='Media/ExecuteStatementRaw.png' target='_blank'><span class='function'>ExecuteStatement</span></a>").
            replace(/GetAffectedRowsCount/g, "<a href='Media/GetAffectedRowsCountRaw.png' target='_blank'><span class='getFunction'>GetAffectedRowsCount</span></a>").
            replace(/GetColumnValuesByColumnName/g, "<a href='Media/GetColumnValuesByColumnName.png' target='_blank'><span class='function'>GetColumnValuesByColumnName</span></a>").
            replace(/Print String node/g, "<a href='Media/PrintStringNode.png' target='_blank'><span class='function'>Print String</span></a> node").
            replace(/Statement Tag/g, "<a href='Media/StatementStringPin.png' target='_blank'><span class='fname'>Statement Tag</span></a>").
            replace(/Success/g, "<a href='Media/OnCompleteEventSuccessPin.png' target='_blank'><span class='bool'>Success</span></a>").
            replace(/Error Msg/g, '<a href="Media/OnCompleteEventErrorMsgPin.png" target="_blank"><span class="string">Error Msg</span></a>').
            replace(/In String/g, '<a href="Media/PrintStringInStringPin.png" target="_blank"><span class="string">In String</span></a>').
            replace(/Column Name/g, '<a href="Media/GetColumnValuesByColumnNameColumnNamePin.png" target="_blank"><span class="string">Column Name</span></a>')

            
            allParas[i].innerHTML = result;

           
            // ReplaceText(allParas[i], /Connection String Pin/g, "<a href='Media/ConnectionStringPin.png' target='_blank'><span class='string'>Connection String Pin</span></a>").
            // ReplaceText(allParas[i], /Connection String Variable/g, "<a href='Media/ConnectionStringPin.png' target='_blank'><span class='string'>Connection String Pin</span></a>")

            // text = allParas[i].innerHTML;
            // result = text.replace(/Connection String Variable/g, "<a href='#preparingBlueprintDiv.png' target='_blank'><span class='string'>Connection String Variable</span></a>");
            // allParas[i].innerHTML = result;
        }


        
        // <a href="preparingBlueprintDiv"><span class="object">DatabaseObject</span></a>;
        // <span class="error">Success</span>;
        // <span class="error">FALSE</span>;

        // <span class="string">In String</span> to <span class="string">Error Msg</span> pin on the <span class="event">OnComplete </span> event we made</p>;

        // <span class="success">TRUE</span>;
        // <span class="string">Column Name</span> pin;
        // <span class="string">Password pin</span>
        // <span class="string">Return Value</span>
        // <a href="#preparingBlueprintDiv"><span class="string">ColumnValues</span></a> variable</a>
        // <span class="string">String</span>
        // <span class="object">DatabaseObject</span>
        // <span class="string">ArrayOfString</span>




        //alert("hi 2");

        
    }
}
