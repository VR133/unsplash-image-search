import Color from 'color'

export const mixin = {
    fade: (colorValue, amount) => Color(colorValue).fade(amount),
};