


export const Colors = {
    // Example colors:
    transparent: 'rgba(0,0,0,0)',
    white: '#ffffff',
    text: '#525257',
    textLight:'#FAFAFA',
    inputBackground:'#F0F0F0',
    inputBorder:'#7638E8',
    placeHolder:'#B0B0B0',
    borderNotFound:'#8A8A8A',
    primaryHighLighted:'#E6D9FF',
    primary: '#5406E2',
    success: '#1B9C37',
    error: '#DF3C3C',
    buttonTitle:'#29292E',
  }
  
  /**
   * FontSize
   */
  export const FontSize = {
    small: 12,
    termsOfUse: 14,
    regular: 16,
    regularHalf:20,
    large: 30,
  }

  export const FontFamily = {
    primary:"PoppinsMedium",
  }

  export const Margin = {
    top:30,
    bottom:30,
    left:25,
    right:30
  }

  export const Images = {
    logo:[require('../Assets/Images/Logo/0-5x.png'),
          require('../Assets/Images/Logo/0-75x.png'),
          require('../Assets/Images/Logo/1x.png'),
          require('../Assets/Images/Logo/2x.png'),
          require('../Assets/Images/Logo/3x.png'),
          require('../Assets/Images/Logo/4x.png')],
    logoLoginScreen:[require('../Assets/Images/LogoLoginScreen.png')],
    siginIsometric: [require('../Assets/Images/signin-isometric.png')],
    logoDashboard:[require('../Assets/Images/logoDashboard.png')]
  }

  export default {
    Colors,
    FontSize,
    FontFamily,
    Margin,
    Images
  }