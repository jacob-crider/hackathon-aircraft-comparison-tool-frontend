function generateReferenceImages(containerWidth, aircraft1, aircraft2, aircraft3) {
    // var sortedList = pseudoCode("aircraft sorted by overallCabinLength then nativeImgWidth");
    // var master = sortedList[0];
    // var child1 = sortedList[1];
    // var child2 = sortedList[2];

    //This is all we need for image calculations.
    var master = {
        "nativeImgWidth"    : aircraft1.image.width,
        "overallCabinLength": aircraft1.overallCabinLength.N,
        // Calculated values
        "nativePPF"       : -1,
        "PPFCoef"         : -1,
        "scaledRes"       : -1,
        "pageImgScaleCoef": -1,
        "pageImgRes"      : -1
    }
    var child1 = {
        "nativeImgWidth"    : aircraft2.image.width,
        "overallCabinLength": aircraft2.overallCabinLength.N,
        // Calculated values
        "nativePPF"       : -1,
        "PPFCoef"         : -1,
        "scaledRes"       : -1,
        "pageImgScaleCoef": -1,
        "pageImgRes"      : -1
    }
    var child2 = {
        "nativeImgWidth"    : aircraft3.image.width,
        "overallCabinLength": aircraft3.overallCabinLength.N,
        // Calculated values
        "nativePPF"       : -1,
        "PPFCoef"         : -1,
        "scaledRes"       : -1,
        "pageImgScaleCoef": -1,
        "pageImgRes"      : -1
    }

    master.nativePPF = master.nativeImgWidth / master.overallCabinLength;
    child1.nativePPF = child1.nativeImgWidth / child1.overallCabinLength;
    child2.nativePPF = child2.nativeImgWidth / child2.overallCabinLength;

    master.PPFCoef = 1;
    child1.PPFCoef = master.nativePPF / child1.nativePPF;
    child2.PPFCoef = master.nativePPF / child2.nativePPF;
    
    master.scaledRes = master.nativeImgWidth * master.PPFCoef;
    child1.scaledRes = child1.nativeImgWidth * child1.PPFCoef;
    child2.scaledRes = child2.nativeImgWidth * child2.PPFCoef;

    // * * * THIS IS WHAT WE WANT RIGHT HERE * * * \\
    master.pageImgScaleCoef = containerWidth / master.scaledRes;
    child1.pageImgScaleCoef = containerWidth / child1.scaledRes;
    child2.pageImgScaleCoef = containerWidth / child2.scaledRes;
    // * * * THIS IS WHAT WE WANT RIGHT HERE * * * \\

    master.pageImgRes = Math.round(master.nativeImgWidth * master.pageImgScaleCoef);
    child1.pageImgRes = Math.round(child1.nativeImgWidth * child1.pageImgScaleCoef);
    child2.pageImgRes = Math.round(child2.nativeImgWidth * child2.pageImgScaleCoef);

    return [master.pageImgScaleCoef, child1.pageImgScaleCoef, child2.pageImgScaleCoef];
}
/////////////////////////////////////////////////////////////
// DUMMY DATA
/////////////////////////////////////////////////////////////
//Other fields might exist but this is what the calculations need
var WindowinnerWidth = 840;
var containerWidth = WindowinnerWidth / 3; 

var dummyPlane1 = {
    "image": {
        "url": "https://live.staticflickr.com/4247/34855648550_7a1d7bcabb_b.jpg",
        "width": 767
    },
    "overallCabinLength": {
        "N": "28.4"
    }
};
var dummyPlane2 = {
    "image": {
        "url": "https://www.jetcraft.com/wp-content/uploads/2014/12/Challenger604-JS.jpg",
        "width": 693
    },
    "overallCabinLength": {
        "N": "28.4"
    }
};
var dummyPlane3 = {
    "image": {
        "url": "https://50skyshades.com/images/l/netjets-took-delivery-of-first-cessna-citation-longitude-15561-qkQBjAJvqZvIQBddHCbx82fc3.png",
        "width": 600
    },
    "overallCabinLength": {
        "N": "25.1"
    }
};
/////////////////////////////////////////////////////////////
// DEMO
/////////////////////////////////////////////////////////////
var img1 = document.createElement("img");
img1.setAttribute("src", dummyPlane1.image.url);
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.setAttribute("src", dummyPlane2.image.url);
document.body.appendChild(img2);

var img3 = document.createElement("img");
img3.setAttribute("src", dummyPlane3.image.url);
document.body.appendChild(img3);


var img1a = document.createElement("img");
img1a.setAttribute("src", dummyPlane1.image.url);
img1aNewWidth = dummyPlane1.image.width * generateReferenceImages(containerWidth, dummyPlane1, dummyPlane2, dummyPlane3)[0];
img1a.setAttribute("width", img1aNewWidth);
document.body.appendChild(img1a);

var img2a = document.createElement("img");
img2a.setAttribute("src", dummyPlane2.image.url);
img2aNewWidth = dummyPlane2.image.width * generateReferenceImages(containerWidth, dummyPlane1, dummyPlane2, dummyPlane3)[1];
img2a.setAttribute("width", img2aNewWidth);
document.body.appendChild(img2a);

var img3a = document.createElement("img");
img3a.setAttribute("src", dummyPlane2.image.url);
img3aNewWidth = dummyPlane2.image.width * generateReferenceImages(containerWidth, dummyPlane1, dummyPlane2, dummyPlane3)[2];
img3a.setAttribute("width", img3aNewWidth);
document.body.appendChild(img3a);