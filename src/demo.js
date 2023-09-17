/* eslint-disable */

import {encodeWithLyra, decodeWithLyra, isLyraReady} from 'lyra-codec'







window.process = function (encodedAudio) {





    return new Promise(function (resolve) {



        setTimeout(function () {


            if(isLyraReady()){

                const decoded = decodeWithLyra(encodedAudio, 16000, 144556);

                resolve(decoded);

            } else {
                console.log("Not ready");
            }


        }, 1000);




    })







}

//console.log(isLyraReady);