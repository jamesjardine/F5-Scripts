function f5Decode(f5)
{
    var index = f5.indexOf(".");

    var val = f5.substring(0,index);

    var hIP = parseInt(val).toString(16);
    if (hIP.length < 8)
    {
        var pads = "0";
        hIP = pads + hIP;
    }
    var hIP1 = parseInt(hIP.toString().substring(6,8),16);
    var hIP2 = parseInt(hIP.toString().substring(4,6),16);
    var hIP3 = parseInt(hIP.toString().substring(2,4),16);
    var hIP4 = parseInt(hIP.toString().substring(0,2),16);

    var val2 = f5.substring(index+1);
    var index2 = val2.indexOf(".");
    val2 = val2.substring(0,index2);
    var hPort = parseInt(val2).toString(16);
    if (hPort.length < 4)
    {
        var padh = "0";
        hPort = padh + hPort;
    }
    var hPortS = hPort.toString().substring(2,4) + hPort.toString().substring(0,2);
    var hPort1 = parseInt(hPortS,16);

    var output = hIP1 + "." + hIP2 + "." + hIP3 + "." + hIP4 + ":" + hPort1;
    return output;
}
