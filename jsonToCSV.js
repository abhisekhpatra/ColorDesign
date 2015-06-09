function JSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

  
        var head = array[0];
        
            for (var index in array[0]) {
                line += index + ',';
            
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    

    for (var i = 0; i < array.length; i++) {
        var line = '';

        
            for (var index in array[i]) {
              // row += '"' + arrData[i][index] + '",';
                line += '"'+array[i][index] + '",';
            }
        

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
    
}
