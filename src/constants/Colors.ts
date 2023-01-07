export const primaryColor = '#FEFFFE';
export const secondaryColor = '#147FAF';
export const lightSecondaryColor = '#00B0FF';
export const lightColor = '#F5F9FA';
export const whiteColor = '#fff';
export const tint = '#3ED173';

export default {
    light: {
        text: secondaryColor,
        background: lightColor,
        tint: tint,
        tabIconDefault: secondaryColor,
        tabIconSelected: tint,
    },
    dark: {
        text: lightColor,
        background: secondaryColor,
        tint: tint,
        tabIconDefault: '#D3EFFF',
        tabIconSelected: primaryColor,
    },
};
