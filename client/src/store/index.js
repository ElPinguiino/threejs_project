import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#9EA3B0',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './bug.svg',
    fullDecal: './bug.svg',
});

export default state;