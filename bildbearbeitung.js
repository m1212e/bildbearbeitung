/*ORIGINAL BILD*/
var originalPic = null;

/*SEITE WIRD GELADEN*/
window.onload = function() {
    /*VERSTECKT RGB SLIDER BEI SEITEN LADEN*/
    console.log('Page loaded');
    document.getElementById('slidersforRGBmanipulation').style.display = "none";
    document.getElementById('sliderforrotation').style.display = "none";
    document.getElementById('sliderforbrightening').style.display = "none";
    document.getElementById('sliderforbw').style.display = "none";
    document.getElementById('sliderforcontrast').style.display = "none";
    document.getElementById('edgeslider').style.display = "none";

    var divs = document.getElementsByClassName("helpText");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";

    }
}

/*DATEI LADEN*/
document.getElementById('imageLoader').onchange = function(e) {
    var img = new Image();
    originalPic = img;
    img.onload = draw;
    img.onerror = failed;
    img.src = URL.createObjectURL(this.files[0]);
};

/*DATEI ZEICHNEN*/
function draw() {
    var canvas = document.getElementById('leinwand');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = originalPic.width;
    ctx.canvas.height = originalPic.height;
    ctx.drawImage(originalPic, 0, 0);
}

function failed() {
    console.error("Datei konnte nicht als Bild geladen werden!");
}

/*HELP CLICK EVENT*/
document.getElementById('helpButton').onclick = function() {
    console.log('help Button clicked');
    var divs = document.getElementsByClassName("helpText");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].style.display == "none") {
            divs[i].style.display = "inline";
        } else {
            divs[i].style.display = "none";
        }
    }
}

/*BILD ZURÜCKSETZEN CLICK EVENT*/
document.getElementById('refreshButton').onclick = function() {
    console.log('refresh Button clicked');
    draw();
    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}

/*BILD SPEICHERN*/
document.getElementById("save").onclick = function() {
    var canvas = document.getElementById("leinwand");
    if (canvas.getContext) {
        var dataURL = canvas.toDataURL("image/png");
        var downloadlink = document.getElementById("downloadLink");
        downloadlink.href = dataURL;
        console.log("gespeichert");
    } else {
        alert("Error: Context not defined!");
    }
}

/*RGB SLIDER ZEIGEN*/
document.getElementById('toggleslidersforRGBmanipulation').onclick = function() {
    console.log('Slider reveal Button clicked');
    var sliders = document.getElementById('slidersforRGBmanipulation');

    if (sliders.style.display === "none") {
        console.log('Sliders display type: none');
        sliders.style.display = "block";
    } else {
        console.log('Sliders display type: not none');
        sliders.style.display = "none";
    }

}

/*ROATIONSLIDER ZEIGEN*/
document.getElementById('togglesliderforrotation').onclick = function() {
    console.log('Slider reveal Button clicked');
    var sliders = document.getElementById('sliderforrotation');

    if (sliders.style.display === "none") {
        console.log('Slider display type: none');
        sliders.style.display = "block";
    } else {
        console.log('Slider display type: not none');
        sliders.style.display = "none";
    }

}


/*BRIGHTENING SLIDER ZEIGEN*/
document.getElementById('togglesliderforbrightening').onclick = function() {
    console.log('Slider reveal Button clicked');
    var sliders = document.getElementById('sliderforbrightening');

    if (sliders.style.display === "none") {
        console.log('Slider display type: none');
        sliders.style.display = "block";
    } else {
        console.log('Slider display type: not none');
        sliders.style.display = "none";
    }

}

/*B/W SLIDER ZEIGEN*/
document.getElementById('togglesliderforbw').onclick = function() {
    console.log('Slider reveal Button clicked');
    var sliders = document.getElementById('sliderforbw');

    if (sliders.style.display === "none") {
        console.log('Slider display type: none');
        sliders.style.display = "block";
    } else {
        console.log('Slider display type: not none');
        sliders.style.display = "none";
    }

}

/*KONTRAST SLIDER ZEIGEN*/
document.getElementById('togglesliderforcontrast').onclick = function() {
        console.log('Slider reveal Button clicked');
        var sliders = document.getElementById('sliderforcontrast');

        if (sliders.style.display === "none") {
            console.log('Slider display type: none');
            sliders.style.display = "block";
        } else {
            console.log('Slider display type: not none');
            sliders.style.display = "none";
        }

    }
    /*KONTRAST SLIDER ZEIGEN*/
document.getElementById('toggleedge').onclick = function() {
    console.log('Slider reveal Button clicked');
    var sliders = document.getElementById('edgeslider');

    if (sliders.style.display === "none") {
        console.log('Slider display type: none');
        sliders.style.display = "block";
    } else {
        console.log('Slider display type: not none');
        sliders.style.display = "none";
    }

}

/*RGB MANIPULATION SLIDER EVENT*/

document.getElementById('slidersforRGBmanipulation').oninput = function(e) {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        e.preventDefault();
        return false;
    }
    console.log('RGBSliderCalled');
    draw();
    rgbValues(
        document.getElementById('slidersforRGBmanipulation_r').value, document.getElementById('slidersforRGBmanipulation_g').value, document.getElementById('slidersforRGBmanipulation_b').value, document.getElementById('leinwand'));

    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}

/*COLOR INVERT BUTTON EVENT*/
document.getElementById('colorinvertbutton').onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log('ColorInvertButtonClicked');
    invertColors(document.getElementById('leinwand'));
    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}

/*ROTATION SLIDER EVENT*/
document.getElementById('sliderforrotation_a').oninput = function(e) {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        e.preventDefault();
        return false;
    }
    draw();
    console.log('Rotationslidercalled');
    rotate(document.getElementById('leinwand'), document.getElementById('sliderforrotation_a').value)
    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}

/*BRIGHTENING SLIDER EVENT*/
document.getElementById('sliderforbrightening_a').oninput = function(e) {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log('Brighteningslider called');
    draw();
    brightenDarken(document.getElementById('leinwand'), document.getElementById('sliderforbrightening_a').value);
    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}

/*GRAUSTUFE EVENT*/
document.getElementById("buttongraustufen").onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Graustufen Button geklickt");
    greyValue(document.getElementById("leinwand"));
    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}

/*BLACK WHITE EVENT*/
document.getElementById("blackslider").oninput = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Schwarz Weiß geklickt");
    draw();
    blackWhite(document.getElementById("leinwand"), document.getElementById("blackslider").value);
    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}


document.getElementById("sliderforcontrast_a").oninput = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Contrast geaendert");
    draw();
    contrast(document.getElementById("leinwand"), document.getElementById("sliderforcontrast_a").value);
    drawHistogramm(document.getElementById('histogramm_r'),
        document.getElementById('histogramm_g'),
        document.getElementById('histogramm_b'),
        document.getElementById('leinwand'));
}

//Vertikal Spiegeln
document.getElementById("mirrorVerticalButton").onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Vertikal Spiegeln Button geklickt");
    mirrorVertical(document.getElementById('leinwand'));

}

//Horizontal Spiegeln
document.getElementById("mirrorHorizontalButton").onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Horizontal Spiegeln Button geklickt");
    mirrorHorizontal(document.getElementById('leinwand'));

}

//Größe halbieren
document.getElementById("scaleHalfButton").onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Größe Halbieren Button geklickt");
    scaleHalf(document.getElementById('leinwand'));

}

//Größe verdoppeln
document.getElementById("scaleDoubleButton").onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Größe verdoppeln Button geklickt");
    scaleDouble(document.getElementById('leinwand'));

}

//Einfacher Weichzeichner
document.getElementById("rauschFilterButton").onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Weichzeichnen Button geklickt");
    simpleRauschfilter(document.getElementById('leinwand'));

}

//Gauß 3x3 Weichzeichner
document.getElementById("rauschFilter3x3Button").onclick = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Gauß 3x3 Button geklickt");
    gaussFilter3x3(document.getElementById('leinwand'));

}

//Gauß 5x5 Weichzeichner
document.getElementById("rauschFilter5x5Button").onclick = function() {
        if (originalPic == null) {
            console.log('No picture found, cancelling');
            return false;
        }
        console.log("Gauß 5x5 Button geklickt");
        gaussFilter5x5(document.getElementById('leinwand'));

    }
    //Kantenerkennung
document.getElementById("edgeslider_a").oninput = function() {
    if (originalPic == null) {
        console.log('No picture found, cancelling');
        return false;
    }
    console.log("Kantenerkennung Slider aufgerufen");
    draw();
    greyValue(document.getElementById('leinwand'))
    borderControl(document.getElementById('leinwand'), document.getElementById('edgeslider_a').value);

}