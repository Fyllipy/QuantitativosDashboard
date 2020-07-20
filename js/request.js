var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://raw.githubusercontent.com/Fyllipy/QuantitativosDashboard/master/windows.txt');
    ourRequest.onload = function (){
        var ans;
            ans = ourRequest.responseText;
            console.log(ans);
            
            //var teste = ans[rec];

            //var dict = new Object();
            //dict = ans;

            var dadosJSON = JSON.parse(ans);
            //var recState = dadosJSON.results;
            windowData(dadosJSON);
    }
    ourRequest.send();