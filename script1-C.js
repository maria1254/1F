
function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){

    case "1":
        myURL = "1c-a.mp4"
        break;

/*
    case "2":
         myURL = "1c-a.mp4"
          break;
*/

        case "2":
        myURL = "1c-b.mp4"
        break;
    
        case "3":
            myURL = "1Fmap.jpg"
            alert("目的地は現在地と同じ1階C階段（緑）エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
            break;

        case "4":
            myURL = "1c-d.mp4"
            break;
     
/*
        case "20":
            myURL = "1c-d.mp4"
            break;

        case "21":
            myURL = "1c-d.mp4"
            break;

*/
            case "5":
            myURL = "C1-A2.mp4"
            break;

            case "6":
            myURL = "C1-B2.mp4"
            break;


            case "7":
            myURL = "C1-C2.mp4"
            break;

            case "8":
            myURL = "C1-B2.mp4"
            alert("2階講堂はB階段（黄色）エリアの先にあります。マップアニメーションかご確認ください。");
            break;

            case "9":
            myURL = "C1-D2.mp4"
            break;

            case "10":
            myURL = "C1-B3.mp4"
            alert("3階講堂はB階段（黄色）エリアの先にあります。マップアニメーションかご確認ください。");

            break;

            case "11":
            myURL = "C1-A3.mp4"
            break;

            case "12":
            myURL = "C1-B3.mp4"
            break;

            case "13":
            myURL = "C1-D3.mp4"
            break;

            case "14":
            myURL = "C1-A4.mp4"
            break;

            case "15":
            myURL = "C1-B4.mp4"
            break;

            case "16":
            myURL = "C1-D4.mp4"
            break;


       
    

    }
    
    location.href = myURL;
    return 0;
    }

