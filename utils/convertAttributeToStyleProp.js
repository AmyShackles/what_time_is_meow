function convertAttributeToStyleProp(style) {
    if (/FrontPaw/gi.test(style)) {
      style = style.replace(/((?:left)|(?:right))FrontPaw/gi, '');
      return style[0].toLowerCase() + style.slice(1);
    } else if (/BackPaw/gi.test(style)) {
      style = style.replace(/((?:left)|(?:right))BackPaw/gi, '');
      return style[0].toLowerCase() + style.slice(1);
    } else if (/arm/gi.test(style)) {
      style = style.replace(/((?:left)|(?:right))arm/gi, '');
      return style[0].toLowerCase() + style.slice(1);
    } else if (/leg/gi.test(style)) {
      style = style.replace(/((?:left)|(?:right))leg/gi, '');
      return style[0].toLowerCase() + style.slice(1);
    } else if (/(?:eyes)|(?:browridge)/gi.test(style)) {
      style = style.replace(/(?:eyes)|(?:browridge)/gi, '');
      return style[0].toLowerCase() + style.slice(1);
    } else if (/eye/gi.test(style)) {
      style = style.replace(/((?:left)|(?:right))(?:inner)?(?:outer)?eye/gi, '');
      return style[0].toLowerCase() + style.slice(1);
    } 
  }