
function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){

    case "1":
        myURL = "1Fmap.jpg"
        alert("目的地は現在地と同じ1階A階段エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
        break;

/*
    case "2":
        myURL = "1Fmap.jpg"
        alert("目的地は現在地と同じ1階A階段エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
        break;
*/
        case "2":
        myURL = "1a-b.mp4"
        break;
    
    
    
        case "3":
            myURL = "1a-c.mp4"
            break;


        case "4":
            myURL = "1a-d.mp4"
            break;

/*
        case "20":
            myURL = "1a-d.mp4"
            break;

        case "21":
            myURL = "1a-d.mp4"
            break;

*/


            case "5":
            myURL = "A1-A2.mp4"
            break;

 
            case "6":
            myURL = "A1-B2.mp4"
            break;


                case "7":
                myURL = "A1-C2.mp4"
                break;

         
                case "8":
                myURL = "A1-B2.mp4"
                alert("二階講堂はC階段（黄色）エリアの先にあります。")
                break;


                case "9":
                myURL = "A1-D2.mp4"
                break;

            
                case "10":
                myURL = "A1-B3.mp4"
                alert("三階講堂はC階段（黄色）エリアの先にあります。")
                break;

                case "11":
                myURL = "A1-A3.mp4"
                break;

                case "12":
                myURL = "A1-B3.mp4"
                break;

                case "13":
                myURL = "A1-D3.mp4"
                break;

                case "14":
                myURL = "A1-A4.mp4"
                break;

                case "15":
                myURL = "A1-B4.mp4"
                break;

                case "16":
                myURL="A1-D4.mp4";
                break;

    }
    
    location.href = myURL;
    return 0;
    }

