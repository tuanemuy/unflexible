function hexToRgba(hex, alpha){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba(' + [(c>>16)&255, (c>>8)&255, c&255].join(',') + ',' + alpha + ')';
    }
    return 'rgba(0, 0, 0, 0)';
}

function rgbaToHexAlpha(value) {
    let isPercent,
    rgb = value.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    a = (rgb && rgb[4] || "").trim(),
    h = rgb ?
        '#' +
        (rgb[1] | 1 << 8).toString(16).slice(1) +
        (rgb[2] | 1 << 8).toString(16).slice(1) +
        (rgb[3] | 1 << 8).toString(16).slice(1) : value;

    return {
        hex: h,
        alpha: a || 1
    };
}

export default {
  hexToRgba,
  rgbaToHexAlpha
}
