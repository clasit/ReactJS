class Balls {
    generateBalls() {
        var str = '';
        var random = Math.floor((Math.random()*10) + 1);
        for(let i=0; i<random; i++){
            str = str + "<div draggable='true' class='ball ";
            if( i%3==0 )
                str += 'red';
            else if( i%2== 0 )
                str += 'green';
            else
                str += 'blue';
            str += "'></div>";
        }
        return str;
    }
}
export default Balls;

/*
export default function() {
    var _self = this;
    _self.generateBalls = function() {
        var str = '';
        var random = Math.floor((Math.random()*10) + 1);
        for(let i=0; i<random; i++){
            str = str + "<div class='ball ";
            if( i%3==0 )
                str += 'red';
            else if( i%2== 0 )
                str += 'green';
            else
                str += 'blue';
            str += "'></div>";
        }
    }
}
*/