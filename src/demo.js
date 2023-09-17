/* eslint-disable */

import {decodeWithLyra, isLyraReady} from 'lyra-codec'







window.decodeLyra = function (encodedAudio) {

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

