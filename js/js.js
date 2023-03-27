document.addEventListener('DOMContentLoaded', function() {
    OnLoad();
 }, false);


 document.addEventListener('readystatechange', event => { 

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
    var allParas = document.getElementsByTagName('p');

    for(var i = 0; i < allParas.length; i++)
    {
        if (allParas[i].classList.contains("para"))
        {
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
        }
    }
}
