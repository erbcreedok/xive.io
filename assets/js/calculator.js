
// ------------------------  chart calculator -------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    var btc = BTC_PRICE;
    var electricityRate = 0.045;
    var blockCoins = 12.5;
    var conversionRate = btc;
    var powerConsumption = 1400;

    var outputOne = document.getElementById("profit-year-one");
    var outputSecond = document.getElementById("profit-year-Second");
    var outputThree = document.getElementById("profit-year-Three");
    var outputFour = document.getElementById("profit-year-Four");
    var outputFive = document.getElementById("profit-year-Five");

    //Hash Rate
    var hashRateSlider = document.getElementById('myRangeHashRate');
    var hashRateAmount = document.getElementById('hash-rate-count');
    hashRateSlider.min = MIN_HASH_RATE;
    hashRateSlider.max = MAX_HASH_RATE;
    hashRateSlider.value = HASH_RATE_VALUE;
    hashRateSlider.step = HASH_RATE_STEP;

    //Power
    var powerSlider = document.getElementById('myRangePower');
    var powerAmount = document.getElementById('power-count');
    powerSlider.min = MIN_POWER;
    powerSlider.max = MAX_POWER;
    powerSlider.value = POWER_VALUE;
    powerSlider.step = POWER_STEP;

    // chart
    var BTCRangefill = document.getElementById("myRangeBTC");
    var BTCRangeValuefill =BTCRangefill.value;
    var filltredBTCRange = Number(Math.round(BTCRangeValuefill+'e0')+'e-0');
    // 1 col
    var chartcolone1 = document.getElementById('chart-col-one');
    var chartcoltwos2 = document.getElementById('chart-col-two');
    var chartcolthree3 = document.getElementById('chart-col-three');
    // 2 col
    var chartcolone1two = document.getElementById('chart-col-oneA');
    var chartcoltwos2two = document.getElementById('chart-col-twoA');
    var chartcolthree3two = document.getElementById('chart-col-threeA');
    // 3 col
    var chartcolone1three = document.getElementById('chart-col-oneB');
    var chartcoltwos2three = document.getElementById('chart-col-twoB');
    var chartcolthree3three = document.getElementById('chart-col-threeB');
    // 4 col
    var chartcolone1four = document.getElementById('chart-col-oneC');
    var chartcoltwos2four= document.getElementById('chart-col-twoC');
    var chartcolthree3four = document.getElementById('chart-col-threeC');
    // 5 col
    var chartcolone1five = document.getElementById('chart-col-oneD');
    var chartcoltwos2five= document.getElementById('chart-col-twoD');
    var chartcolthree3five = document.getElementById('chart-col-threeD');

    var correctusdprice = 50000;

    var btcparceOne = correctusdprice*0.0001157;
    var btcOneParce = Number(Math.round(btcparceOne+'e3')+'e-3');
    outputOne.innerHTML = "BTC "+btcOneParce +" / ";

    var btcparceSecond = correctusdprice*0.0001157*1.017;
    var btcSecondParce = Number(Math.round(btcparceSecond+'e3')+'e-3');
    outputSecond.innerHTML = "BTC "+btcSecondParce +" / ";

    var btcparceThree = correctusdprice*0.0001157*1.0332;
    var btcThreeParce = Number(Math.round(btcparceThree+'e3')+'e-3');
    outputThree.innerHTML = "BTC "+btcThreeParce +" / ";

    var btcparceFour = correctusdprice*0.0001157*1.1041;
    var btcFourParce = Number(Math.round(btcparceFour+'e3')+'e-3');
    outputFour.innerHTML = "BTC "+btcFourParce +" / ";

    var btcparceFive = correctusdprice*0.0001157*1.108;
    var btcFiveParce = Number(Math.round(btcparceFive+'e3')+'e-3');
    outputFive.innerHTML = "BTC "+btcFiveParce +" / ";

    var y2 = document.getElementById('total-profit');
    var sum2 = btcOneParce+btcSecondParce+btcThreeParce+btcFourParce+btcFiveParce;
    var parseSum2 = Number(Math.round(sum2+'e3')+'e-3');
    y2.innerHTML =parseSum2+" BTC /";


    // chart animate Correct
    chartcolone1 =  chartcolone1.style.height=filltredBTCRange*btcOneParce/2803+"px";
    chartcoltwos2 = chartcoltwos2.style.height=filltredBTCRange*btcOneParce/8003+"px";
    chartcolthree3 = chartcolthree3.style.height=filltredBTCRange*btcOneParce/1603+"px";
    // 2
    chartcolone1two =  chartcolone1two.style.height=filltredBTCRange*btcSecondParce/2803+"px";
    chartcoltwos2two = chartcoltwos2two.style.height=filltredBTCRange*btcSecondParce/8003+"px";
    chartcolthree3two = chartcolthree3two.style.height=filltredBTCRange*btcSecondParce/1603+"px";
    // 3
    chartcolone1three =  chartcolone1three.style.height=filltredBTCRange*btcThreeParce/2803+"px";
    chartcoltwos2three = chartcoltwos2three.style.height=filltredBTCRange*btcThreeParce/8003+"px";
    chartcolthree3three= chartcolthree3three.style.height=filltredBTCRange*btcThreeParce/1603+"px";
    // 4
    chartcolone1four =  chartcolone1four.style.height=filltredBTCRange*btcFourParce/2803+"px";
    chartcoltwos2four = chartcoltwos2four.style.height=filltredBTCRange*btcFourParce/8003+"px";
    chartcolthree3four= chartcolthree3four.style.height=filltredBTCRange*btcFourParce/1603+"px";
    // 5
    chartcolone1five =  chartcolone1five.style.height=filltredBTCRange*btcFiveParce/2803+"px";
    chartcoltwos2five = chartcoltwos2five.style.height=filltredBTCRange*btcFiveParce/8003+"px";
    chartcolthree3five= chartcolthree3five.style.height=filltredBTCRange*btcFiveParce/1603+"px";

    // BTC Price
    var sliderBTC = document.getElementById("myRangeBTC");
    var outputBTC = document.getElementById("amount-count-btc");
    var outputOneBTC = document.getElementById("profit-year-one-btc");
    var outputSecondBTC = document.getElementById("profit-year-second-btc");
    var outputThreeBTC = document.getElementById("profit-year-three-btc");
    var outputFourBTC = document.getElementById("profit-year-four-btc");
    var outputFiveBTC = document.getElementById("profit-year-five-btc");
    var parseBTC = parseInt(btc);


    // var correctusdpriceBTC = sliderBTC.value;
    outputBTC.innerHTML = parseBTC.toLocaleString()+" USD"; // Display the default slider value BTC
    var btcparceOneBTC = parseBTC;
    sliderBTC.value = parseBTC;

    // function BTC
    sliderBTC.oninput = function() {
        calcBTC();
    };

    hashRateSlider.oninput = function() {
        calcBTC();
    };

    powerSlider.oninput = function() {
        calcBTC();
    };


    function calcBTC() {
        console.log('working');
        outputBTC.innerHTML = sliderBTC.value + " USD";
        hashRateAmount.innerHTML = hashRateSlider.value + ' ' + HASH_RATE_COEF;
        powerAmount.innerHTML = powerSlider.value + ' ' + POWER_COEF;

        // Chart BTC
        var chartcolone1TBC1C = document.getElementById('chart-col-one');
        var chartcoltwos2BTC2C = document.getElementById('chart-col-two');
        var chartcolthree3BTC3C = document.getElementById('chart-col-three');
        // 2
        var chartcolone1SBTC = document.getElementById('chart-col-oneA');
        var chartcoltwos2SBTC  = document.getElementById('chart-col-twoA');
        var chartcolthree3SBTC  = document.getElementById('chart-col-threeA');
        // 3
        var chartcolone1SBTCb = document.getElementById('chart-col-oneB');
        var chartcoltwos2SBTCb  = document.getElementById('chart-col-twoB');
        var chartcolthree3SBTCb  = document.getElementById('chart-col-threeB');
        // 4
        var chartcolone1SBTCc = document.getElementById('chart-col-oneC');
        var chartcoltwos2SBTCc  = document.getElementById('chart-col-twoC');
        var chartcolthree3SBTCc  = document.getElementById('chart-col-threeC');
        // 5
        var chartcolone1SBTCd = document.getElementById('chart-col-oneD');
        var chartcoltwos2SBTCd  = document.getElementById('chart-col-twoD');
        var chartcolthree3SBTCd  = document.getElementById('chart-col-threeD');



        var hashRate = hashRateSlider.value;
        var power = powerSlider.value;
        var BTCRangeValue = sliderBTC.value;

        conversionRate = BTCRangeValue;

        // Формула
        var hashTime = DIFFICULTY * (Math.pow(2.0, 32) / (hashRate * HASH_RATE_MULTIPLIER));
        var powerCostPerYear = 365.25 * 24.0 * (power * POWER_MULTIPLIER) * electricityRate;
        var blocksPerYear =  (365.25 * 24.0 * 3600.0) / hashTime ;
        var coinsPerYear = blockCoins * blocksPerYear;
        var revenuePerYear = coinsPerYear * conversionRate;
        var profitPerYear = revenuePerYear - powerCostPerYear;

        console.log('Revenue Per Year', revenuePerYear);
        console.log('Power Cost Per Year', powerCostPerYear);
        console.log('Profit Per Year', profitPerYear);

        var outputOneBTCx = powerCostPerYear;
        var outputOneBTCy = profitPerYear;
        var outputOneBTCz = revenuePerYear;
        var Xone = Number(Math.round(outputOneBTCx+'e0')+'e-0');
        var Yone = Number(Math.round(outputOneBTCy+'e0')+'e-0');
        var Zone = Number(Math.round(outputOneBTCz+'e0')+'e-0');
        outputOneBTC.innerHTML=Zone.toLocaleString()+" USD";

        var outputSecondBTCx = outputOneBTCx;
        var outputSecondBTCy = outputOneBTCy * .97;
        var outputSecondBTCz = outputOneBTCy + outputOneBTCx;
        var Xsecond = Number(Math.round(outputSecondBTCx+'e0')+'e-0');
        var Ysecond = Number(Math.round(outputSecondBTCy+'e0')+'e-0');
        var Zsecond = Number(Math.round(outputSecondBTCz+'e0')+'e-0');
        outputSecondBTC.innerHTML=Zsecond.toLocaleString()+" USD";

        var outputThreeBTCx = outputSecondBTCx;
        var outputThreeBTCy = outputSecondBTCy * .97;
        var outputThreeBTCz = outputSecondBTCy + outputThreeBTCx;
        var XThree = Number(Math.round(outputThreeBTCx+'e0')+'e-0');
        var YThree = Number(Math.round(outputThreeBTCy+'e0')+'e-0');
        var ZThree = Number(Math.round(outputThreeBTCz+'e0')+'e-0');
        outputThreeBTC.innerHTML=ZThree.toLocaleString()+" USD";

        var outputFourBTCx = outputThreeBTCx;
        var outputFourBTCy = outputThreeBTCy * .97;
        var outputFourBTCz = outputThreeBTCy + outputFourBTCx;
        var XFour = Number(Math.round(outputFourBTCx+'e0')+'e-0');
        var YFour = Number(Math.round(outputFourBTCy+'e0')+'e-0');
        var ZFour = Number(Math.round(outputFourBTCz+'e0')+'e-0');
        outputFourBTC.innerHTML=ZFour.toLocaleString()+" USD";

        var outputFiveBTCx = outputFourBTCx;
        var outputFiveBTCy = outputFourBTCy * .97;
        var outputFiveBTCz = outputFourBTCy + outputFiveBTCx;
        var XFive = Number(Math.round(outputFiveBTCx+'e0')+'e-0');
        var YFive = Number(Math.round(outputFiveBTCy+'e0')+'e-0');
        var ZFive = Number(Math.round(outputFiveBTCz+'e0')+'e-0');
        outputFiveBTC.innerHTML=ZFive.toLocaleString()+" USD";


        console.log('One', Zone, Yone);
        console.log('Second', Zsecond, Ysecond);
        console.log('Three', ZThree, YThree);
        console.log('Four', ZFour, YFour);
        console.log('Five', ZFive, YFive);

        // Total USD (btc action) in col head

        // col head 1
        var headBTC = document.getElementById('col-head-one1');
        headBTC.innerHTML=Zone.toLocaleString()+"$";

        // col head 2
        var headBT2 = document.getElementById('col-head-one2');
        headBT2.innerHTML=Zsecond.toLocaleString()+"$";

        // col head 3
        var headBT3 = document.getElementById('col-head-one3');
        headBT3.innerHTML=ZThree.toLocaleString()+"$";

        // col head 4
        var headBT4 = document.getElementById('col-head-one4');
        headBT4.innerHTML=ZFour.toLocaleString()+"$";

        // col head 4
        var headBT5 = document.getElementById('col-head-one5');
        headBT5.innerHTML=ZFive.toLocaleString()+"$";


        // chart over price  scroll btc
        var chartCol1A = document.getElementById("col-over-one1");
        chartCol1A.innerHTML ="$"+Number(Math.round(Yone + 'e0') + 'e-0').toLocaleString();
        var chartCol2A = document.getElementById("col-over-one2");
        chartCol2A.innerHTML = '';
        var chartCol3A = document.getElementById("col-over-one3");
        chartCol3A.innerHTML ="$"+Number(Math.round(Xone + 'e0') + 'e-0').toLocaleString();

        // chart over 1
        var chartCol1A2 = document.getElementById("col-over-oneT1");
        chartCol1A2.innerHTML ="$"+Number(Math.round(Ysecond+'e0')+'e-0').toLocaleString();
        var chartCol2A2 = document.getElementById("col-over-oneT2");
        chartCol2A2.innerHTML ='';
        var chartCol3A2 = document.getElementById("col-over-oneT3");
        chartCol3A2.innerHTML ="$"+Number(Math.round(Xsecond+'e0')+'e-0').toLocaleString();

        // chart over 2
        var chartCol1A3K = document.getElementById("col-over-oneF1");
        chartCol1A3K.innerHTML ="$"+Number(Math.round(YThree+'e0')+'e-0').toLocaleString();
        var chartCol2A3K = document.getElementById("col-over-oneF2");
        chartCol2A3K.innerHTML ='';
        var chartCol3A3 = document.getElementById("col-over-oneF3");
        chartCol3A3.innerHTML ="$"+Number(Math.round(XThree+'e0')+'e-0').toLocaleString();

        // chart over 3
        var chartCol1A4 = document.getElementById("col-over-oneR1");
        chartCol1A4.innerHTML ="$"+Number(Math.round(YFour+'e0')+'e-0').toLocaleString();
        var chartCol2A4 = document.getElementById("col-over-oneR2");
        chartCol2A4.innerHTML ='';
        var chartCol3A4 = document.getElementById("col-over-oneR3");
        chartCol3A4.innerHTML ="$"+Number(Math.round(XFour+'e0')+'e-0').toLocaleString();

        // chart over 4
        var chartCol1A5 = document.getElementById("col-over-oneV1");
        chartCol1A5.innerHTML ="$"+Number(Math.round(YFive+'e0')+'e-0').toLocaleString();
        var chartCol2A5 = document.getElementById("col-over-oneV2");
        chartCol2A5.innerHTML ='';
        var chartCol3A5 = document.getElementById("col-over-oneV3");
        chartCol3A5.innerHTML ="$"+Number(Math.round(XFive+'e0')+'e-0').toLocaleString();

        // function standart
        var btcparceOne = outputOneBTCx / BTCRangeValue;
        var btcOneParce = Number(Math.round(btcparceOne+'e3')+'e-3');
        outputOne.innerHTML ="BTC "+btcOneParce+" /";

        var btcparceSecond = outputSecondBTCx / BTCRangeValue;
        var btcSecondParce = Number(Math.round(btcparceSecond+'e3')+'e-3');
        outputSecond.innerHTML = "BTC "+btcSecondParce+" / ";

        var btcparceThree = outputThreeBTCx / BTCRangeValue;
        var btcThreeParce = Number(Math.round(btcparceThree+'e3')+'e-3');
        outputThree.innerHTML = "BTC "+btcThreeParce+" / ";

        var btcparceFour = outputFourBTCx / BTCRangeValue;
        var btcFourParce = Number(Math.round(btcparceFour+'e3')+'e-3');
        outputFour.innerHTML = "BTC "+btcFourParce+" / ";

        var btcparceFive = outputFiveBTCx / BTCRangeValue;
        var btcFiveParce = Number(Math.round(btcparceFive+'e3')+'e-3');
        outputFive.innerHTML = "BTC "+btcFiveParce+" / ";

        // Total BTC Action
        var x3 = document.getElementById('total-profit');
        var sum3x = btcOneParce+btcSecondParce+btcThreeParce+btcFourParce+btcFiveParce;
        var parseSum3x = Number(Math.round(sum3x+'e3')+'e-3');
        x3.innerHTML =parseSum3x+" BTC /";


        // Total USD Action
        var x1 = document.getElementById('total-profit-btc');
        var sum1x = Zone+Zsecond+ZThree+ZFour+ZFive;
        var parseSum1x = Number(Math.round(sum1x+'e0')+'e-0').toLocaleString();
        x1.innerHTML =parseSum1x+" USD";


        var defCoef = 0.06;
        var maxHeight = 522;
        var heightCoef = (Zone*defCoef) < maxHeight ? defCoef : (maxHeight / Zone);
        // chart animate scroll
        chartcolone1TBC1C = chartcolone1TBC1C.style.height=Yone*heightCoef+"px";
        chartcoltwos2BTC2C = chartcoltwos2BTC2C.style.height="0";
        chartcolthree3BTC3C = chartcolthree3BTC3C.style.height=Xone*heightCoef+"px";
        // 2
        chartcolone1SBTC = chartcolone1SBTC.style.height=Ysecond*heightCoef+"px";
        chartcoltwos2SBTC = chartcoltwos2SBTC.style.height="0";
        chartcolthree3SBTC = chartcolthree3SBTC.style.height=Xsecond*heightCoef+"px";
        // 3
        chartcolone1SBTCb = chartcolone1SBTCb.style.height=YThree*heightCoef+"px";
        chartcoltwos2SBTCb = chartcoltwos2SBTCb.style.height="0";
        chartcolthree3SBTCb = chartcolthree3SBTCb.style.height=XThree*heightCoef+"px";
        // 4
        chartcolone1SBTCc = chartcolone1SBTCc.style.height=YFour*heightCoef+"px";
        chartcoltwos2SBTCc = chartcoltwos2SBTCc.style.height="0";
        chartcolthree3SBTCc = chartcolthree3SBTCc.style.height=XFour*heightCoef+"px";
        // 5
        chartcolone1SBTCd = chartcolone1SBTCd.style.height=YFive*heightCoef+"px";
        chartcoltwos2SBTCd = chartcoltwos2SBTCd.style.height="0";
        chartcolthree3SBTCd = chartcolthree3SBTCd.style.height=XFive*heightCoef+"px";
    }
    calcBTC();
    ggg = calcBTC;
});

// ------------------------  colum price view 1  -------------------------------------

// colum 1 -------------------------------------

// col 1
var colone1 = document.getElementById('col-over-one1');
function col1() {
         colone1.style.display = "block";
}
function normal1() {
        colone1.style.display = "none";
}
// col 2
var colone2 = document.getElementById('col-over-one2');
function col2() {
         colone2.style.display = "block";
}
function normal2() {
        colone2.style.display = "none";
}

// col 3
var colone3 = document.getElementById('col-over-one3');
function col3() {
         colone3.style.display = "block";
}
function normal3() {
        colone3.style.display = "none";
}


// colum 2 -------------------------------------

// col second 1
var coloneT1 = document.getElementById('col-over-oneT1');
function colT1() {
         coloneT1.style.display = "block";
}
function normalT1() {
        coloneT1.style.display = "none";
}
// col second  2
var coloneT2 = document.getElementById('col-over-oneT2');
function colT2() {
         coloneT2.style.display = "block";
}
function normalT2() {
        coloneT2.style.display = "none";
}

// col second  3
var coloneT3 = document.getElementById('col-over-oneT3');
function colT3() {
         coloneT3.style.display = "block";
}
function normalT3() {
        coloneT3.style.display = "none";
}

// colum 3 -------------------------------------

// col thtree 1
var coloneF1 = document.getElementById('col-over-oneF1');
function colF1() {
         coloneF1.style.display = "block";
}
function normalF1() {
        coloneF1.style.display = "none";
}
// col thtree  2
var coloneF2 = document.getElementById('col-over-oneF2');
function colF2() {
         coloneF2.style.display = "block";
}
function normalF2() {
        coloneF2.style.display = "none";
}
// col thtree  3
var coloneF3 = document.getElementById('col-over-oneF3');
function colF3() {
         coloneF3.style.display = "block";
}
function normalF3() {
        coloneF3.style.display = "none";
}

// colum 4 -------------------------------------

// col Four 1
var coloneR1 = document.getElementById('col-over-oneR1');
function colR1() {
         coloneR1.style.display = "block";
}
function normalR1() {
        coloneR1.style.display = "none";
}
// col Four  2
var coloneR2 = document.getElementById('col-over-oneR2');
function colR2() {
         coloneR2.style.display = "block";
}
function normalR2() {
        coloneR2.style.display = "none";
}
// col Four  3
var coloneR3 = document.getElementById('col-over-oneR3');
function colR3() {
         coloneR3.style.display = "block";
}
function normalR3() {
        coloneR3.style.display = "none";
}

// colum 5 -------------------------------------

// col FIVE 1
var coloneV1 = document.getElementById('col-over-oneV1');
function colV1() {
         coloneV1.style.display = "block";
}
function normalV1() {
        coloneV1.style.display = "none";
}
// col FIVE  2
var coloneV2 = document.getElementById('col-over-oneV2');
function colV2() {
         coloneV2.style.display = "block";
}
function normalV2() {
        coloneV2.style.display = "none";
}
// col FIVE  3
var coloneV3 = document.getElementById('col-over-oneV3');
function colV3() {
         coloneV3.style.display = "block";
}
function normalV3() {
        coloneV3.style.display = "none";
}

// reset chart 

function rest() {
        location.reload();
 }
