function greyValue(canvas) {

    var w = canvas.width;
    var h = canvas.height;

    if (canvas.getContext) {
        var context = canvas.getContext("2d");

        var pix = context.getImageData(0, 0, w, h);

        for (var i = 0; i < w * h * 4; i += 4) {
            var col = 0.3 * pix.data[i + 0] + 0.6 * pix.data[i + 1] + 0.1 * pix.data[i + 2];
            pix.data[i + 0] = col;
            pix.data[i + 1] = col;
            pix.data[i + 2] = col;
            pix.data[i + 3] = 255;
        }
        context.putImageData(pix, 0, 0);
    } else {
        alert("Error: Context not defined!");
    }
}

function blackWhite(canvas, value) {

    w = canvas.width;
    h = canvas.height;


    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        var pix = context.getImageData(0, 0, w, h);

        for (var i = 0; i < w * h * 4; i += 4) {
            var color = 0.299 * pix.data[i] + 0.587 * pix.data[i + 1] + 0.114 * pix.data[i + 2];
            pix.data[i] = color;
            pix.data[i + 1] = color;
            pix.data[i + 2] = color;
        }

        var threshold = parseInt(value);

        for (var j = 0; j < w * h * 4; j += 4) {
            if (pix.data[j] > threshold) {
                pix.data[j] = 0;
                pix.data[j + 1] = 0;
                pix.data[j + 2] = 0;
            } else {
                pix.data[j] = 255;
                pix.data[j + 1] = 255;
                pix.data[j + 2] = 255;
            }
        }
        context.putImageData(pix, 0, 0);
    } else {
        alert("Error: Context not defined!");
    }
}

function brightenDarken(canvas, scale) {

    w = canvas.width;
    h = canvas.height;

    scale = scale * 0.9;

    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        var pix = context.getImageData(0, 0, w, h);

        for (var i = 0; i < w * h * 4; i += 4) {

            //change red value, prevent x > 255
            if ((pix.data[i] + scale) > 255) {
                pix.data[i] = 255;
            } else if ((pix.data[i] + scale) < 0) {
                pix.data[i] = 0;
            } else {
                pix.data[i] += scale;
            }

            //change green value, prevent x > 255
            if ((pix.data[i + 1] + scale) > 255) {
                pix.data[i + 1] = 255;
            } else if ((pix.data[i] + scale) < 0) {
                pix.data[i + 1] = 0;
            } else {
                pix.data[i + 1] += scale;
            }

            //change blue value, prevent x > 255
            if ((pix.data[i + 2] + scale) > 255) {
                pix.data[i + 2] = 255;
            } else if ((pix.data[i] + scale) < 0) {
                pix.data[i + 2] = 0;
            } else {
                pix.data[i + 2] += scale;
            }

        }
        context.putImageData(pix, 0, 0);
    } else {
        alert("Error: Context not defined!");
    }
}

function contrast(canvas, scale) {
    w = canvas.width;
    h = canvas.height;

    scale = scale * 0.05;

    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        var pix = context.getImageData(0, 0, w, h);

        for (var i = 0; i < w * h * 4; i += 4) {

            //change red value, prevent x > 255
            if ((pix.data[i] * scale) > 255) {
                pix.data[i] = 255;
            } else if ((pix.data[i] * scale) < 0) {
                pix.data[i] = 0;
            } else {
                pix.data[i] *= scale;
            }

            //change green value, prevent x > 255
            if ((pix.data[i + 1] * scale) > 255) {
                pix.data[i + 1] = 255;
            } else if ((pix.data[i] * scale) < 0) {
                pix.data[i + 1] = 0;
            } else {
                pix.data[i + 1] *= scale;
            }

            //change blue value, prevent x > 255
            if ((pix.data[i + 2] * scale) > 255) {
                pix.data[i + 2] = 255;
            } else if ((pix.data[i] * scale) < 0) {
                pix.data[i + 2] = 0;
            } else {
                pix.data[i + 2] *= scale;
            }
        }
        context.putImageData(pix, 0, 0);
    } else {
        alert("Error: Context not defined!");
    }
}


function rgbValues(r, g, b, canvas) {

    var ctx = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    var imgData = ctx.getImageData(0, 0, width, height);
    var data = imgData.data;

    r /= 10;
    g /= 10;
    b /= 10;

    //RGBA
    for (i = 0; i < height * width * 4; i += 4) {
        if (data[i] * r <= 255) {
            data[i] = data[i] * r;
        } else {
            data[i] = 255;
        }

        if (data[i] * g <= 255) {
            data[i + 1] = data[i + 1] * g;
        } else {
            data[i + 1] = 255;
        }

        if (data[i] * b <= 255) {
            data[i + 2] = data[i + 2] * b;
        } else {
            data[i + 2] = 255;
        }
    }

    ctx.putImageData(imgData, 0, 0);



}


function invertColors(canvas) {
    var ctx = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    var imgData = ctx.getImageData(0, 0, width, height);
    var data = imgData.data;

    //RGBA
    for (i = 0; i < height * width * 4; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }

    ctx.putImageData(imgData, 0, 0);


}
/*
async function rotateExec(canvas, shift_intervall) {

    var ctx = canvas.getContext("2d");
    var ctx_Imagedata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var old_ctx_Imagedata_data = ctx_Imagedata.data;

    var width = canvas.width;
    var height = canvas.height;

    var old_width = width;
    var old_height = height;

    height += Math.floor(width / shift_intervall) + 1;

    canvas.width = width;
    canvas.height = height;

    var ctx_Imagedata_data = ctx_Imagedata.data;

    for (i = 0; i < old_height * old_width * 4; i++) {
        ctx_Imagedata_data[i] = old_ctx_Imagedata_data[i];
    }

    ctx.putImageData(ctx_Imagedata, 0, 0);

    console.log("Width: " + width);
    console.log("Height: " + height);
    console.log("Old_Width: " + old_width);
    console.log("Old_Height: " + old_height);
    console.log("ShiftIntervall: " + shift_intervall);

    //var newImgCTX = ctx.getImageData(0, 0, width, height);
    //var data = newImgCTX.data;


//x = width
//y = height
var intervallcount = 0;
var shiftdistance = shift_intervall;

for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {

        intervallcount++;

        var pix_x = x;
        var pix_y = y + shiftdistance;

        var data = ctx_Imagedata_data;

        data[(y * width + x) * 4] = data[(pix_y * width + pix_x) * 4];
        data[(y * width + x) * 4 + 1] = data[(pix_y * width + pix_x) * 4 + 1];
        data[(y * width + x) * 4 + 2] = data[(pix_y * width + pix_x) * 4 + 2];
        data[(y * width + x) * 4 + 3] = data[(pix_y * width + pix_x) * 4 + 3];

        //console.log("Setting Pixel: (" + y + "/" + x + ") to values of (" + pix_y + "/" + pix_x + ")");

    }

    if (intervallcount > shift_intervall) {
        intervallcount = 0;
        shiftdistance++;
    }
}

ctx.putImageData(ctx_Imagedata, 0, 0);
}


async function rotate(canvas, degree) {
    var f = rotateExec.bind(this, canvas, degree);
    window.requestAnimationFrame(f);
} 
*/

function drawHistogramm(canvas_r, canvas_g, canvas_b, sourceCanvas) {
    var sourceCTX = sourceCanvas.getContext("2d");

    var sourceWidth = sourceCanvas.width;
    var sourceHeight = sourceCanvas.height;

    var sourceImgData = sourceCTX.getImageData(0, 0, sourceWidth, sourceHeight);
    var data = sourceImgData.data;

    var rs = getDefaultArray();
    var gs = getDefaultArray();
    var bs = getDefaultArray();


    for (y = 0; y <= sourceHeight; y++) {
        for (x = 0; x <= sourceWidth; x++) {
            rs[data[x * y * 4]]++;
            gs[data[x * y * 4 + 1]]++;
            bs[data[x * y * 4 + 2]]++;
        }
    }
    var ctx_r = canvas_r.getContext("2d");
    var ctx_g = canvas_g.getContext("2d");
    var ctx_b = canvas_b.getContext("2d");

    ctx_r.clearRect(0, 0, canvas_r.width, canvas_r.height);
    ctx_g.clearRect(0, 0, canvas_g.width, canvas_g.height);
    ctx_b.clearRect(0, 0, canvas_b.width, canvas_b.height);

    ctx_r.fillStyle = "red";
    ctx_g.fillStyle = "green";
    ctx_b.fillStyle = "blue";

    var rmax = Math.max.apply(Math, rs);
    var gmax = Math.max.apply(Math, gs);
    var bmax = Math.max.apply(Math, bs);

    for (i = 0; i <= 255; i++) {
        ctx_r.fillRect(i, 100, 1, -Math.round((rs[i] / rmax) * 100));
        ctx_g.fillRect(i, 100, 1, -Math.round((gs[i] / gmax) * 100));
        ctx_b.fillRect(i, 100, 1, -Math.round((bs[i] / bmax) * 100));
    }

}

function getDefaultArray() {
    ret = [];
    for (i = 0; i <= 255; i++) {
        ret[i] = 0;
    }
    return ret;
}

function mirrorVertical(canvas) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw, ch);

    for (var reihe = 0; reihe < ch; reihe++) {

        for (var i = 0; i < cw * 4; i += 4) {
            pix2.data[reihe * cw * 4 + i + 0] = pix.data[(reihe + 1) * cw * 4 - (i + 4)];
            pix2.data[reihe * cw * 4 + i + 1] = pix.data[(reihe + 1) * cw * 4 - (i + 3)];
            pix2.data[reihe * cw * 4 + i + 2] = pix.data[(reihe + 1) * cw * 4 - (i + 2)];
            pix2.data[reihe * cw * 4 + i + 3] = pix.data[(reihe + 1) * cw * 4 - (i + 1)];
        }

    }
    ctx.putImageData(pix2, 0, 0);

}

function mirrorHorizontal(canvas) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw, ch);

    for (var reihe = 0; reihe < ch; reihe++) {

        for (var i = 0; i < cw * 4; i += 4) {
            pix2.data[reihe * cw * 4 + i + 0] = pix.data[(ch - reihe) * cw * 4 + i];
            pix2.data[reihe * cw * 4 + i + 1] = pix.data[(ch - reihe) * cw * 4 + i + 1];
            pix2.data[reihe * cw * 4 + i + 2] = pix.data[(ch - reihe) * cw * 4 + i + 2];
            pix2.data[reihe * cw * 4 + i + 3] = pix.data[(ch - reihe) * cw * 4 + i + 3];
        }

    }
    ctx.putImageData(pix2, 0, 0);

}

function scaleHalf(canvas) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    //Überprüfen ob ungerade Anzahl Pixel
    if (cw % 2 != 0) {
        cw++;
    } else if (ch % 2 != 0) {
        ch++;
    }
    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw / 2, ch / 2);
    for (var i = 0; i < ch / 2; i++) {

        for (var j = 0; j < cw * 2; j += 4) {
            pix2.data[i * cw * 2 + j + 0] = pix.data[(i * 2) * cw * 4 + j * 2 + 0];
            pix2.data[i * cw * 2 + j + 1] = pix.data[(i * 2) * cw * 4 + j * 2 + 1];
            pix2.data[i * cw * 2 + j + 2] = pix.data[(i * 2) * cw * 4 + j * 2 + 2];
            pix2.data[i * cw * 2 + j + 3] = pix.data[(i * 2) * cw * 4 + j * 2 + 3];
        }

    }
    canvas.width = cw / 2;
    canvas.height = ch / 2;

    ctx.putImageData(pix2, 0, 0);

}

function scaleDouble(canvas) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw * 2, ch * 2);

    for (var i = 0; i < ch * 2; i += 2) {
        for (var j = 0; j < cw * 8; j += 4) {
            pix2.data[i * 2 * cw * 8 + j * 2 + 1] = pix.data[i * cw * 4 + j + 1];
            pix2.data[i * 2 * cw * 8 + j * 2 + 0] = pix.data[i * cw * 4 + j + 0];
            pix2.data[i * 2 * cw * 8 + j * 2 + 2] = pix.data[i * cw * 4 + j + 2];
            pix2.data[i * 2 * cw * 8 + j * 2 + 3] = pix.data[i * cw * 4 + j + 3];
            pix2.data[i * 2 * cw * 8 + j * 2 + 4] = pix.data[i * cw * 4 + j + 0];
            pix2.data[i * 2 * cw * 8 + j * 2 + 5] = pix.data[i * cw * 4 + j + 1];
            pix2.data[i * 2 * cw * 8 + j * 2 + 6] = pix.data[i * cw * 4 + j + 2];
            pix2.data[i * 2 * cw * 8 + j * 2 + 7] = pix.data[i * cw * 4 + j + 3];


            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 0] = pix.data[i * cw * 4 + j + 0];
            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 1] = pix.data[i * cw * 4 + j + 1];
            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 2] = pix.data[i * cw * 4 + j + 2];
            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 3] = pix.data[i * cw * 4 + j + 3];
            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 4] = pix.data[i * cw * 4 + j + 0];
            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 5] = pix.data[i * cw * 4 + j + 1];
            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 6] = pix.data[i * cw * 4 + j + 2];
            pix2.data[(i + 1) * 2 * cw * 8 + j * 2 + 7] = pix.data[i * cw * 4 + j + 3];

        }

    }
    canvas.width = cw * 2;
    canvas.height = ch * 2;
    ctx.putImageData(pix2, 0, 0);

}


function simpleRauschfilter(canvas) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw, ch);

    for (var j = 0; j < ch; j++) {
        for (var i = 0; i < cw * 4; i += 4) {

            //ecke links oben
            if (j == 0 && i == 0) {
                //             mitte          r daneben      darunter               r unten   
                pix2.data[0] = (pix.data[0] + pix.data[4] + pix.data[cw * 4 + 0] + pix.data[cw * 4 + 4]) / 4;
                pix2.data[1] = (pix.data[1] + pix.data[5] + pix.data[cw * 4 + 1] + pix.data[cw * 4 + 5]) / 4;
                pix2.data[2] = (pix.data[2] + pix.data[6] + pix.data[cw * 4 + 2] + pix.data[cw * 4 + 6]) / 4;
                pix2.data[3] = (pix.data[3] + pix.data[7] + pix.data[cw * 4 + 3] + pix.data[cw * 4 + 7]) / 4;
            }
            //ecke rechts oben
            else if (j == 0 && i == cw * 4 - 4) {
                //                  mitte             l daneben         darunter               l unten   
                pix2.data[i + 0] = (pix.data[i + 0] + pix.data[i - 4] + pix.data[cw * 4 + 0] + pix.data[cw * 4 - 4]) / 4;
                pix2.data[i + 1] = (pix.data[i + 1] + pix.data[i - 3] + pix.data[cw * 4 + 1] + pix.data[cw * 4 - 3]) / 4;
                pix2.data[i + 2] = (pix.data[i + 2] + pix.data[i - 2] + pix.data[cw * 4 + 2] + pix.data[cw * 4 - 2]) / 4;
                pix2.data[i + 3] = (pix.data[i + 3] + pix.data[i - 1] + pix.data[cw * 4 + 3] + pix.data[cw * 4 - 1]) / 4;
            }
            //ecke links unten
            else if (j == ch - 1 && i == 0) {
                //                           mitte                      r daneben                  oben                             r oben   
                pix2.data[j * cw * 4 + 0] = (pix.data[j * cw * 4 + 0] + pix.data[j * cw * 4 + 4] + pix.data[(j - 1) * cw * 4 + 0] + pix.data[(j - 1) * cw * 4 + 4]) / 4;
                pix2.data[j * cw * 4 + 1] = (pix.data[j * cw * 4 + 1] + pix.data[j * cw * 4 + 5] + pix.data[(j - 1) * cw * 4 + 1] + pix.data[(j - 1) * cw * 4 + 5]) / 4;
                pix2.data[j * cw * 4 + 2] = (pix.data[j * cw * 4 + 2] + pix.data[j * cw * 4 + 6] + pix.data[(j - 1) * cw * 4 + 2] + pix.data[(j - 1) * cw * 4 + 6]) / 4;
                pix2.data[j * cw * 4 + 3] = (pix.data[j * cw * 4 + 3] + pix.data[j * cw * 4 + 7] + pix.data[(j - 1) * cw * 4 + 3] + pix.data[(j - 1) * cw * 4 + 7]) / 4;
            }
            //ecke rechts unten
            else if (j == ch - 1 && i == cw * 4 - 4) {
                //                              mitte                           l daneben                       darunter                         l unten   
                pix2.data[j * cw * 4 + i + 0] = (pix.data[j * cw * 4 + i + 0] + pix.data[j * cw * 4 + i - 4] + pix.data[(j - 1) * cw * 4 + 0] + pix.data[(j - 1) * cw * 4 - 4]) / 4;
                pix2.data[j * cw * 4 + i + 1] = (pix.data[j * cw * 4 + i + 1] + pix.data[j * cw * 4 + i - 3] + pix.data[(j - 1) * cw * 4 + 1] + pix.data[(j - 1) * cw * 4 - 3]) / 4;
                pix2.data[j * cw * 4 + i + 2] = (pix.data[j * cw * 4 + i + 2] + pix.data[j * cw * 4 + i - 2] + pix.data[(j - 1) * cw * 4 + 2] + pix.data[(j - 1) * cw * 4 - 2]) / 4;
                pix2.data[j * cw * 4 + i + 3] = (pix.data[j * cw * 4 + i + 3] + pix.data[j * cw * 4 + i - 1] + pix.data[(j - 1) * cw * 4 + 3] + pix.data[(j - 1) * cw * 4 - 1]) / 4;
            }
            //rand links
            else if (i == 0) {
                //                          mitte                       oben                              r oben                           r daneben                  darunter                         r unten   
                pix2.data[j * cw * 4 + 0] = (pix.data[j * cw * 4 + 0] + pix.data[(j - 1) * cw * 4 + 0] + pix.data[(j - 1) * cw * 4 + 4] + pix.data[j * cw * 4 + 4] + pix.data[(j + 1) * cw * 4 + 0] + pix.data[(j + 1) * cw * 4 + 4]) / 6;
                pix2.data[j * cw * 4 + 1] = (pix.data[j * cw * 4 + 1] + pix.data[(j - 1) * cw * 4 + 1] + pix.data[(j - 1) * cw * 4 + 5] + pix.data[j * cw * 4 + 5] + pix.data[(j + 1) * cw * 4 + 1] + pix.data[(j + 1) * cw * 4 + 5]) / 6;
                pix2.data[j * cw * 4 + 2] = (pix.data[j * cw * 4 + 2] + pix.data[(j - 1) * cw * 4 + 2] + pix.data[(j - 1) * cw * 4 + 6] + pix.data[j * cw * 4 + 6] + pix.data[(j + 1) * cw * 4 + 2] + pix.data[(j + 1) * cw * 4 + 6]) / 6;
                pix2.data[j * cw * 4 + 3] = (pix.data[j * cw * 4 + 3] + pix.data[(j - 1) * cw * 4 + 3] + pix.data[(j - 1) * cw * 4 + 7] + pix.data[j * cw * 4 + 7] + pix.data[(j + 1) * cw * 4 + 3] + pix.data[(j + 1) * cw * 4 + 7]) / 6;
            }
            //rand rechts
            else if (i == cw * 4 - 4) {
                //                              mitte                           oben                                  l oben                               l daneben                      unten                                l unten
                pix2.data[j * cw * 4 + i + 0] = (pix.data[j * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i - 4] + pix.data[j * cw * 4 + i - 4] + pix.data[(j + 1) * cw * 4 + i + 0] + pix.data[(j + 1) * cw * 4 + i - 4]) / 6;
                pix2.data[j * cw * 4 + i + 1] = (pix.data[j * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i - 3] + pix.data[j * cw * 4 + i - 3] + pix.data[(j + 1) * cw * 4 + i + 1] + pix.data[(j + 1) * cw * 4 + i - 3]) / 6;
                pix2.data[j * cw * 4 + i + 2] = (pix.data[j * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i - 2] + pix.data[j * cw * 4 + i - 2] + pix.data[(j + 1) * cw * 4 + i + 2] + pix.data[(j + 1) * cw * 4 + i - 2]) / 6;
                pix2.data[j * cw * 4 + i + 3] = (pix.data[j * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i - 1] + pix.data[j * cw * 4 + i - 1] + pix.data[(j + 1) * cw * 4 + i + 3] + pix.data[(j + 1) * cw * 4 + i - 1]) / 6;
            }
            //rand oben
            else if (j == 0) {
                //                  mitte             r unten                              r daneben         l daneben         unten                                l unten
                pix2.data[i + 0] = (pix.data[i + 0] + pix.data[(j + 1) * cw * 4 + i + 4] + pix.data[i + 4] + pix.data[i - 4] + pix.data[(j + 1) * cw * 4 + i + 0] + pix.data[(j + 1) * cw * 4 + i - 4]) / 6;
                pix2.data[i + 1] = (pix.data[i + 1] + pix.data[(j + 1) * cw * 4 + i + 5] + pix.data[i + 5] + pix.data[i - 3] + pix.data[(j + 1) * cw * 4 + i + 1] + pix.data[(j + 1) * cw * 4 + i - 3]) / 6;
                pix2.data[i + 2] = (pix.data[i + 2] + pix.data[(j + 1) * cw * 4 + i + 6] + pix.data[i + 6] + pix.data[i - 2] + pix.data[(j + 1) * cw * 4 + i + 2] + pix.data[(j + 1) * cw * 4 + i - 2]) / 6;
                pix2.data[i + 3] = (pix.data[i + 3] + pix.data[(j + 1) * cw * 4 + i + 7] + pix.data[i + 7] + pix.data[i - 1] + pix.data[(j + 1) * cw * 4 + i + 3] + pix.data[(j + 1) * cw * 4 + i - 1]) / 6;
            }
            //rand unten
            else if (j == ch - 1) {
                //                              mitte                           r oben                                r daneben         l daneben         oben                                 l oben
                pix2.data[j * cw * 4 + i + 0] = (pix.data[j * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i + 4] + pix.data[i + 4] + pix.data[i - 4] + pix.data[(j - 1) * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i - 4]) / 6;
                pix2.data[j * cw * 4 + i + 1] = (pix.data[j * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i + 5] + pix.data[i + 5] + pix.data[i - 3] + pix.data[(j - 1) * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i - 3]) / 6;
                pix2.data[j * cw * 4 + i + 2] = (pix.data[j * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i + 6] + pix.data[i + 6] + pix.data[i - 2] + pix.data[(j - 1) * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i - 2]) / 6;
                pix2.data[j * cw * 4 + i + 3] = (pix.data[j * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i + 7] + pix.data[i + 7] + pix.data[i - 1] + pix.data[(j - 1) * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i - 1]) / 6;
            } else {
                //                              mitte                           r oben                               r daneben                      r unten                          l daneben                      oben                                 l oben                               unten                                l unten                 
                pix2.data[j * cw * 4 + i + 0] = (pix.data[j * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i + 4] + pix.data[j * cw * 4 + i + 4] + pix.data[(j + 1) * cw * 4 + 4] + pix.data[j * cw * 4 + i - 4] + pix.data[(j - 1) * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i - 4] + pix.data[(j + 1) * cw * 4 + i + 0] + pix.data[(j + 1) * cw * 4 + i - 4]) / 9;
                pix2.data[j * cw * 4 + i + 1] = (pix.data[j * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i + 5] + pix.data[j * cw * 4 + i + 5] + pix.data[(j + 1) * cw * 4 + 5] + pix.data[j * cw * 4 + i - 3] + pix.data[(j - 1) * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i - 3] + pix.data[(j + 1) * cw * 4 + i + 1] + pix.data[(j + 1) * cw * 4 + i - 3]) / 9;
                pix2.data[j * cw * 4 + i + 2] = (pix.data[j * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i + 6] + pix.data[j * cw * 4 + i + 6] + pix.data[(j + 1) * cw * 4 + 6] + pix.data[j * cw * 4 + i - 2] + pix.data[(j - 1) * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i - 2] + pix.data[(j + 1) * cw * 4 + i + 2] + pix.data[(j + 1) * cw * 4 + i - 2]) / 9;
                pix2.data[j * cw * 4 + i + 3] = (pix.data[j * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i + 7] + pix.data[j * cw * 4 + i + 7] + pix.data[(j + 1) * cw * 4 + 7] + pix.data[j * cw * 4 + i - 1] + pix.data[(j - 1) * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i - 1] + pix.data[(j + 1) * cw * 4 + i + 3] + pix.data[(j + 1) * cw * 4 + i - 1]) / 9;
            }
        }
    }
    ctx.putImageData(pix2, 0, 0);
}

function gaussFilter3x3(canvas) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw, ch);

    for (var j = 0; j < ch; j++) {
        for (var i = 0; i < cw * 4; i += 4) {

            //ecke links oben
            if (j == 0 && i == 0) {
                //             mitte              r daneben         darunter                   r unten   
                pix2.data[0] = (4 * pix.data[0] + 2 * pix.data[4] + 2 * pix.data[cw * 4 + 0] + pix.data[cw * 4 + 4]) / 9;
                pix2.data[1] = (4 * pix.data[1] + 2 * pix.data[5] + 2 * pix.data[cw * 4 + 1] + pix.data[cw * 4 + 5]) / 9;
                pix2.data[2] = (4 * pix.data[2] + 2 * pix.data[6] + 2 * pix.data[cw * 4 + 2] + pix.data[cw * 4 + 6]) / 9;
                pix2.data[3] = (4 * pix.data[3] + 2 * pix.data[7] + 2 * pix.data[cw * 4 + 3] + pix.data[cw * 4 + 7]) / 9;
            }
            //ecke rechts oben
            else if (j == 0 && i == cw * 4 - 4) {
                //                  mitte                 l daneben             darunter                   l unten   
                pix2.data[i + 0] = (4 * pix.data[i + 0] + 2 * pix.data[i - 4] + 2 * pix.data[cw * 4 + 0] + pix.data[cw * 4 - 4]) / 9;
                pix2.data[i + 1] = (4 * pix.data[i + 1] + 2 * pix.data[i - 3] + 2 * pix.data[cw * 4 + 1] + pix.data[cw * 4 - 3]) / 9;
                pix2.data[i + 2] = (4 * pix.data[i + 2] + 2 * pix.data[i - 2] + 2 * pix.data[cw * 4 + 2] + pix.data[cw * 4 - 2]) / 9;
                pix2.data[i + 3] = (4 * pix.data[i + 3] + 2 * pix.data[i - 1] + 2 * pix.data[cw * 4 + 3] + pix.data[cw * 4 - 1]) / 9;
            }
            //ecke links unten
            else if (j == ch - 1 && i == 0) {
                //                           mitte                          r daneben                      oben                                 r oben   
                pix2.data[j * cw * 4 + 0] = (4 * pix.data[j * cw * 4 + 0] + 2 * pix.data[j * cw * 4 + 4] + 2 * pix.data[(j - 1) * cw * 4 + 0] + pix.data[(j - 1) * cw * 4 + 4]) / 9;
                pix2.data[j * cw * 4 + 1] = (4 * pix.data[j * cw * 4 + 1] + 2 * pix.data[j * cw * 4 + 5] + 2 * pix.data[(j - 1) * cw * 4 + 1] + pix.data[(j - 1) * cw * 4 + 5]) / 9;
                pix2.data[j * cw * 4 + 2] = (4 * pix.data[j * cw * 4 + 2] + 2 * pix.data[j * cw * 4 + 6] + 2 * pix.data[(j - 1) * cw * 4 + 2] + pix.data[(j - 1) * cw * 4 + 6]) / 9;
                pix2.data[j * cw * 4 + 3] = (4 * pix.data[j * cw * 4 + 3] + 2 * pix.data[j * cw * 4 + 7] + 2 * pix.data[(j - 1) * cw * 4 + 3] + pix.data[(j - 1) * cw * 4 + 7]) / 9;
            }
            //ecke rechts unten
            else if (j == ch - 1 && i == cw * 4 - 4) {
                //                              mitte                               l daneben                          darunter                             l unten   
                pix2.data[j * cw * 4 + i + 0] = (4 * pix.data[j * cw * 4 + i + 0] + 2 * pix.data[j * cw * 4 + i - 4] + 2 * pix.data[(j - 1) * cw * 4 + 0] + pix.data[(j - 1) * cw * 4 - 4]) / 9;
                pix2.data[j * cw * 4 + i + 1] = (4 * pix.data[j * cw * 4 + i + 1] + 2 * pix.data[j * cw * 4 + i - 3] + 2 * pix.data[(j - 1) * cw * 4 + 1] + pix.data[(j - 1) * cw * 4 - 3]) / 9;
                pix2.data[j * cw * 4 + i + 2] = (4 * pix.data[j * cw * 4 + i + 2] + 2 * pix.data[j * cw * 4 + i - 2] + 2 * pix.data[(j - 1) * cw * 4 + 2] + pix.data[(j - 1) * cw * 4 - 2]) / 9;
                pix2.data[j * cw * 4 + i + 3] = (4 * pix.data[j * cw * 4 + i + 3] + 2 * pix.data[j * cw * 4 + i - 1] + 2 * pix.data[(j - 1) * cw * 4 + 3] + pix.data[(j - 1) * cw * 4 - 1]) / 9;
            }
            //rand links
            else if (i == 0) {
                //                          mitte                           oben                                 r oben                           r daneben                      darunter                             r unten   
                pix2.data[j * cw * 4 + 0] = (4 * pix.data[j * cw * 4 + 0] + 2 * pix.data[(j - 1) * cw * 4 + 0] + pix.data[(j - 1) * cw * 4 + 4] + 2 * pix.data[j * cw * 4 + 4] + 2 * pix.data[(j + 1) * cw * 4 + 0] + pix.data[(j + 1) * cw * 4 + 4]) / 12;
                pix2.data[j * cw * 4 + 1] = (4 * pix.data[j * cw * 4 + 1] + 2 * pix.data[(j - 1) * cw * 4 + 1] + pix.data[(j - 1) * cw * 4 + 5] + 2 * pix.data[j * cw * 4 + 5] + 2 * pix.data[(j + 1) * cw * 4 + 1] + pix.data[(j + 1) * cw * 4 + 5]) / 12;
                pix2.data[j * cw * 4 + 2] = (4 * pix.data[j * cw * 4 + 2] + 2 * pix.data[(j - 1) * cw * 4 + 2] + pix.data[(j - 1) * cw * 4 + 6] + 2 * pix.data[j * cw * 4 + 6] + 2 * pix.data[(j + 1) * cw * 4 + 2] + pix.data[(j + 1) * cw * 4 + 6]) / 12;
                pix2.data[j * cw * 4 + 3] = (4 * pix.data[j * cw * 4 + 3] + 2 * pix.data[(j - 1) * cw * 4 + 3] + pix.data[(j - 1) * cw * 4 + 7] + 2 * pix.data[j * cw * 4 + 7] + 2 * pix.data[(j + 1) * cw * 4 + 3] + pix.data[(j + 1) * cw * 4 + 7]) / 12;
            }
            //rand rechts
            else if (i == cw * 4 - 4) {
                //                                  mitte                               oben                                     l oben                               l daneben                          unten                                    l unten
                pix2.data[j * cw * 4 + i + 0] = (4 * pix.data[j * cw * 4 + i + 0] + 2 * pix.data[(j - 1) * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i - 4] + 2 * pix.data[j * cw * 4 + i - 4] + 2 * pix.data[(j + 1) * cw * 4 + i + 0] + pix.data[(j + 1) * cw * 4 + i - 4]) / 12;
                pix2.data[j * cw * 4 + i + 1] = (4 * pix.data[j * cw * 4 + i + 1] + 2 * pix.data[(j - 1) * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i - 3] + 2 * pix.data[j * cw * 4 + i - 3] + 2 * pix.data[(j + 1) * cw * 4 + i + 1] + pix.data[(j + 1) * cw * 4 + i - 3]) / 12;
                pix2.data[j * cw * 4 + i + 2] = (4 * pix.data[j * cw * 4 + i + 2] + 2 * pix.data[(j - 1) * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i - 2] + 2 * pix.data[j * cw * 4 + i - 2] + 2 * pix.data[(j + 1) * cw * 4 + i + 2] + pix.data[(j + 1) * cw * 4 + i - 2]) / 12;
                pix2.data[j * cw * 4 + i + 3] = (4 * pix.data[j * cw * 4 + i + 3] + 2 * pix.data[(j - 1) * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i - 1] + 2 * pix.data[j * cw * 4 + i - 1] + 2 * pix.data[(j + 1) * cw * 4 + i + 3] + pix.data[(j + 1) * cw * 4 + i - 1]) / 12;
            }
            //rand oben
            else if (j == 0) {
                //                  mitte                 r unten                              r daneben             l daneben             unten                                    l unten
                pix2.data[i + 0] = (4 * pix.data[i + 0] + pix.data[(j + 1) * cw * 4 + i + 4] + 2 * pix.data[i + 4] + 2 * pix.data[i - 4] + 2 * pix.data[(j + 1) * cw * 4 + i + 0] + pix.data[(j + 1) * cw * 4 + i - 4]) / 12;
                pix2.data[i + 1] = (4 * pix.data[i + 1] + pix.data[(j + 1) * cw * 4 + i + 5] + 2 * pix.data[i + 5] + 2 * pix.data[i - 3] + 2 * pix.data[(j + 1) * cw * 4 + i + 1] + pix.data[(j + 1) * cw * 4 + i - 3]) / 12;
                pix2.data[i + 2] = (4 * pix.data[i + 2] + pix.data[(j + 1) * cw * 4 + i + 6] + 2 * pix.data[i + 6] + 2 * pix.data[i - 2] + 2 * pix.data[(j + 1) * cw * 4 + i + 2] + pix.data[(j + 1) * cw * 4 + i - 2]) / 12;
                pix2.data[i + 3] = (4 * pix.data[i + 3] + pix.data[(j + 1) * cw * 4 + i + 7] + 2 * pix.data[i + 7] + 2 * pix.data[i - 1] + 2 * pix.data[(j + 1) * cw * 4 + i + 3] + pix.data[(j + 1) * cw * 4 + i - 1]) / 12;
            }
            //rand unten
            else if (j == ch - 1) {
                //                              mitte                               r oben                               r daneben             l daneben            oben                                      l oben
                pix2.data[j * cw * 4 + i + 0] = (4 * pix.data[j * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i + 4] + 2 * pix.data[i + 4] + 2 * pix.data[i - 4] + 2 * pix.data[(j - 1) * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i - 4]) / 12;
                pix2.data[j * cw * 4 + i + 1] = (4 * pix.data[j * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i + 5] + 2 * pix.data[i + 5] + 2 * pix.data[i - 3] + 2 * pix.data[(j - 1) * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i - 3]) / 12;
                pix2.data[j * cw * 4 + i + 2] = (4 * pix.data[j * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i + 6] + 2 * pix.data[i + 6] + 2 * pix.data[i - 2] + 2 * pix.data[(j - 1) * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i - 2]) / 12;
                pix2.data[j * cw * 4 + i + 3] = (4 * pix.data[j * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i + 7] + 2 * pix.data[i + 7] + 2 * pix.data[i - 1] + 2 * pix.data[(j - 1) * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i - 1]) / 12;
            } else {
                //                              mitte                               r oben                               r daneben                          r unten                          l daneben                          oben                                     l oben                               unten                                    l unten                 
                pix2.data[j * cw * 4 + i + 0] = (4 * pix.data[j * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i + 4] + 2 * pix.data[j * cw * 4 + i + 4] + pix.data[(j + 1) * cw * 4 + 4] + 2 * pix.data[j * cw * 4 + i - 4] + 2 * pix.data[(j - 1) * cw * 4 + i + 0] + pix.data[(j - 1) * cw * 4 + i - 4] + 2 * pix.data[(j + 1) * cw * 4 + i + 0] + pix.data[(j + 1) * cw * 4 + i - 4]) / 16;
                pix2.data[j * cw * 4 + i + 1] = (4 * pix.data[j * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i + 5] + 2 * pix.data[j * cw * 4 + i + 5] + pix.data[(j + 1) * cw * 4 + 5] + 2 * pix.data[j * cw * 4 + i - 3] + 2 * pix.data[(j - 1) * cw * 4 + i + 1] + pix.data[(j - 1) * cw * 4 + i - 3] + 2 * pix.data[(j + 1) * cw * 4 + i + 1] + pix.data[(j + 1) * cw * 4 + i - 3]) / 16;
                pix2.data[j * cw * 4 + i + 2] = (4 * pix.data[j * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i + 6] + 2 * pix.data[j * cw * 4 + i + 6] + pix.data[(j + 1) * cw * 4 + 6] + 2 * pix.data[j * cw * 4 + i - 2] + 2 * pix.data[(j - 1) * cw * 4 + i + 2] + pix.data[(j - 1) * cw * 4 + i - 2] + 2 * pix.data[(j + 1) * cw * 4 + i + 2] + pix.data[(j + 1) * cw * 4 + i - 2]) / 16;
                pix2.data[j * cw * 4 + i + 3] = (4 * pix.data[j * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i + 7] + 2 * pix.data[j * cw * 4 + i + 7] + pix.data[(j + 1) * cw * 4 + 7] + 2 * pix.data[j * cw * 4 + i - 1] + 2 * pix.data[(j - 1) * cw * 4 + i + 3] + pix.data[(j - 1) * cw * 4 + i - 1] + 2 * pix.data[(j + 1) * cw * 4 + i + 3] + pix.data[(j + 1) * cw * 4 + i - 1]) / 16;
            }
        }
    }
    ctx.putImageData(pix2, 0, 0);
}

function gaussFilter5x5(canvas) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw, ch);

    for (var j = 2; j < ch - 2; j++) {
        for (var i = 8; i < cw * 4 - 8; i += 4) {


            //                              mitte                                r oben                                    2r 2oben                             r daneben                           2r daneben                         r unten                               2r 2unten                        l daneben                           2l daneben                         oben                                      2 oben                                   l oben                                    2l 2oben                             unten                                     2 unten                                  l unten                                   2l 2unten                            2l 1unten                                1l 2unten                                2l 1oben                                 1l 2oben                                 2r 1oben                                 1r 2oben                                 2r 1unten                                1r 2unten                                        
            pix2.data[j * cw * 4 + i + 0] = (36 * pix.data[j * cw * 4 + i + 0] + 16 * pix.data[(j - 1) * cw * 4 + i + 4] + pix.data[(j - 2) * cw * 4 + i + 8] + 24 * pix.data[j * cw * 4 + i + 4] + 6 * pix.data[j * cw * 4 + i + 8] + 16 * pix.data[(j + 1) * cw * 4 + 4] + pix.data[(j + 2) * cw * 4 + 8] + 24 * pix.data[j * cw * 4 + i - 4] + 6 * pix.data[j * cw * 4 + i - 8] + 24 * pix.data[(j - 1) * cw * 4 + i + 0] + 6 * pix.data[(j - 2) * cw * 4 + i + 0] + 16 * pix.data[(j - 1) * cw * 4 + i - 4] + pix.data[(j - 2) * cw * 4 + i - 8] + 24 * pix.data[(j + 1) * cw * 4 + i + 0] + 6 * pix.data[(j + 2) * cw * 4 + i + 0] + 16 * pix.data[(j + 1) * cw * 4 + i - 4] + pix.data[(j + 2) * cw * 4 + i - 8] + 4 * pix.data[(j + 1) * cw * 4 + i - 8] + 4 * pix.data[(j + 2) * cw * 4 + i - 4] + 4 * pix.data[(j - 1) * cw * 4 + i - 8] + 4 * pix.data[(j - 2) * cw * 4 + i - 4] + 4 * pix.data[(j - 1) * cw * 4 + i + 8] + 4 * pix.data[(j - 2) * cw * 4 + i + 4] + 4 * pix.data[(j + 1) * cw * 4 + i + 8] + 4 * pix.data[(j + 2) * cw * 4 + i + 4]) / 256;
            pix2.data[j * cw * 4 + i + 1] = (36 * pix.data[j * cw * 4 + i + 1] + 16 * pix.data[(j - 1) * cw * 4 + i + 5] + pix.data[(j - 2) * cw * 4 + i + 9] + 24 * pix.data[j * cw * 4 + i + 5] + 6 * pix.data[j * cw * 4 + i + 9] + 16 * pix.data[(j + 1) * cw * 4 + 5] + pix.data[(j + 2) * cw * 4 + 9] + 24 * pix.data[j * cw * 4 + i - 3] + 6 * pix.data[j * cw * 4 + i - 7] + 24 * pix.data[(j - 1) * cw * 4 + i + 1] + 6 * pix.data[(j - 2) * cw * 4 + i + 1] + 16 * pix.data[(j - 1) * cw * 4 + i - 3] + pix.data[(j - 2) * cw * 4 + i - 7] + 24 * pix.data[(j + 1) * cw * 4 + i + 1] + 6 * pix.data[(j + 2) * cw * 4 + i + 1] + 16 * pix.data[(j + 1) * cw * 4 + i - 3] + pix.data[(j + 2) * cw * 4 + i - 7] + 4 * pix.data[(j + 1) * cw * 4 + i - 7] + 4 * pix.data[(j + 2) * cw * 4 + i - 3] + 4 * pix.data[(j - 1) * cw * 4 + i - 7] + 4 * pix.data[(j - 2) * cw * 4 + i - 3] + 4 * pix.data[(j - 1) * cw * 4 + i + 9] + 4 * pix.data[(j - 2) * cw * 4 + i + 5] + 4 * pix.data[(j + 1) * cw * 4 + i + 9] + 4 * pix.data[(j + 2) * cw * 4 + i + 5]) / 256;
            pix2.data[j * cw * 4 + i + 2] = (36 * pix.data[j * cw * 4 + i + 2] + 16 * pix.data[(j - 1) * cw * 4 + i + 6] + pix.data[(j - 2) * cw * 4 + i + 10] + 24 * pix.data[j * cw * 4 + i + 6] + 6 * pix.data[j * cw * 4 + i + 10] + 16 * pix.data[(j + 1) * cw * 4 + 6] + pix.data[(j + 2) * cw * 4 + 10] + 24 * pix.data[j * cw * 4 + i - 2] + 6 * pix.data[j * cw * 4 + i - 6] + 24 * pix.data[(j - 1) * cw * 4 + i + 2] + 6 * pix.data[(j - 2) * cw * 4 + i + 2] + 16 * pix.data[(j - 1) * cw * 4 + i - 2] + pix.data[(j - 2) * cw * 4 + i - 6] + 24 * pix.data[(j + 1) * cw * 4 + i + 2] + 6 * pix.data[(j + 2) * cw * 4 + i + 2] + 16 * pix.data[(j + 1) * cw * 4 + i - 2] + pix.data[(j + 2) * cw * 4 + i - 6] + 4 * pix.data[(j + 1) * cw * 4 + i - 6] + 4 * pix.data[(j + 2) * cw * 4 + i - 2] + 4 * pix.data[(j - 1) * cw * 4 + i - 6] + 4 * pix.data[(j - 2) * cw * 4 + i - 2] + 4 * pix.data[(j - 1) * cw * 4 + i + 10] + 4 * pix.data[(j - 2) * cw * 4 + i + 6] + 4 * pix.data[(j + 1) * cw * 4 + i + 10] + 4 * pix.data[(j + 2) * cw * 4 + i + 6]) / 256;
            pix2.data[j * cw * 4 + i + 3] = pix.data[j * cw * 4 + i + 3];

        }
    }
    ctx.putImageData(pix2, 0, 0);
}

//bekommt Graustufenbild
function borderControl(canvas, value) {

    var cw = canvas.width;
    var ch = canvas.height;

    var ctx = canvas.getContext("2d");

    var pix = ctx.getImageData(0, 0, cw, ch);
    var pix2 = ctx.createImageData(cw, ch);

    var differenzVertikal;
    var differenzHorizontal;
    var schwellwert = value;

    for (var j = 1; j < ch - 1; j++) {
        for (var i = 4; i < cw * 4 - 4; i += 4) {

            //Horizontaler Sobel Operator
            differenzHorizontal = Math.abs(
                (-1) * pix.data[(j - 1) * cw * 4 + i - 4] +
                (-2) * pix.data[(j - 1) * cw * 4 + i + 0] +
                (-1) * pix.data[(j - 1) * cw * 4 + i + 4] +
                (0) * pix.data[j * cw * 4 + i - 4] +
                (0) * pix.data[j * cw * 4 + i + 0] +
                (0) * pix.data[j * cw * 4 + i + 4] +
                (1) * pix.data[(j + 1) * cw * 4 + i - 4] +
                (2) * pix.data[(j + 1) * cw * 4 + i + 0] +
                (1) * pix.data[(j + 1) * cw * 4 + 4]);
            //Vertikaler Sobel Operator
            differenzVertikal = Math.abs(
                (-1) * pix.data[(j - 1) * cw * 4 + i - 4] +
                (-2) * pix.data[j * cw * 4 + i - 4] +
                (-1) * pix.data[(j + 1) * cw * 4 + i - 4] +
                (0) * pix.data[j * cw * 4 + i + 0] +
                (0) * pix.data[(j - 1) * cw * 4 + i + 0] +
                (0) * pix.data[(j + 1) * cw * 4 + i + 0] +
                (1) * pix.data[(j - 1) * cw * 4 + i + 4] +
                (2) * pix.data[j * cw * 4 + i + 4] +
                (1) * pix.data[(j + 1) * cw * 4 + 4]);

            //alle pixel auf volle deckkraft
            pix2.data[j * cw * 4 + i + 3] = 255;

            if (differenzHorizontal > schwellwert || differenzVertikal > schwellwert) {
                pix2.data[j * cw * 4 + i + 0] = 255;
                pix2.data[j * cw * 4 + i + 1] = 255;
                pix2.data[j * cw * 4 + i + 2] = 255;
            } else {
                pix2.data[j * cw * 4 + i + 0] = 0;
                pix2.data[j * cw * 4 + i + 1] = 0;
                pix2.data[j * cw * 4 + i + 2] = 0;
            }

        }
    }
    ctx.putImageData(pix2, 0, 0);
}