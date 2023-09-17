/* eslint-disable */

import {encodeWithLyra, decodeWithLyra, isLyraReady} from 'lyra-codec'



console.log("Hello world");


window.process = function (data) {


    return new Promise(function (resolve) {

        console.log("Got pcm 16 data");

        console.log(data);


        setTimeout(function () {


            if(isLyraReady()){

                console.log("Ready to process");

                const encodedAudio = encodeWithLyra(data, 16000);
                console.log("Encoded audio");
                console.log(encodedAudio);

                const decoded = decodeWithLyra(encodedAudio, 16000, data.length);

                resolve(decoded);

            } else {
                console.log("Not ready");
            }


        }, 1000);




    })







}

//console.log(isLyraReady);