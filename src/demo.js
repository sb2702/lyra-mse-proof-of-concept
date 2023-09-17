/* eslint-disable */

import {decodeWithLyra, isLyraReady} from 'lyra-codec'







const MP3Encoder = function(){


    var lib = new lamejs();

    var mp3encoder = new lib.Mp3Encoder(1,   16000, 128);

    function encode(buffer){

        var input = float32ToInt(buffer);

        return mp3encoder.encodeBuffer(input);
    }


    function float32ToInt(f32){


        var len = f32.length, i = 0;
        var i16 = new Int16Array(len);

        while(i < len)
            i16[i] = convert(f32[i++]);

        function convert(n) {
            var v = n < 0 ? n * 32768 : n * 32767;       // convert in range [-32768, 32767]
            return Math.max(-32768, Math.min(32768, v)); // clamp
        }

        return i16;

    }

    function finish(){
        return mp3encoder.flush();
    }


    function toFile(buffer){

        var mp3data =  [encode(buffer)];

        mp3data.push(finish());

        return mp3data;

    }

    this.encode = encode;
    this.toFile = toFile;

};


window.encodeMP3 = function (decodedAudio) {


    const mp3Encoder = new MP3Encoder();

    const mp3data = mp3Encoder.toFile(decodedAudio);

    return mp3data[0].slice(0, mp3data[0].length/2)


}


window.decodeLyra = function (encodedAudio) {

    return new Promise(function (resolve) {


        function checkIfReady(){

            if(isLyraReady()){

                const decoded = decodeWithLyra(encodedAudio, 16000, 144556);

                return resolve(decoded);

            } else {
                return setTimeout(checkIfReady, 100);
            }


        }

        checkIfReady();


    })

}

