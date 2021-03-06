export enum ThemeName {
    blue = "blue",
    light = "light"
}

interface Theme {
    name: string;
    background: string;
    header: string;
    buttonBackground: string;
    highlight: string;
    highlightText: string;
    link: string;
    menuBackground:string;
  }

export const setThemeCookie = (color: ThemeName) => {
  document.cookie = `color=${color}`;
};

const getCookieValue = (a: string):ThemeName =>{
  var b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
  var x = b ? b.pop() : "";
  if (x in ThemeName) {
    return x as ThemeName;
  }
  else return ThemeName.blue
};

const StyleTheme = (theme: Theme) => {
  document.documentElement.style.setProperty("--background", theme.background);
  document.documentElement.style.setProperty("--header", theme.header);
  document.documentElement.style.setProperty(
    "--button-background",
    theme.buttonBackground
  );
  document.documentElement.style.setProperty("--highlight", theme.highlight);
  document.documentElement.style.setProperty(
    "--highlight-text",
    theme.highlightText
  );
  document.documentElement.style.setProperty("--link", theme.link);
  document.documentElement.style.setProperty("--menu-background", theme.menuBackground);
};

function findTheme(themeName: ThemeName): Theme {return themes.filter((theme) => theme.name == themeName)[0]}


export const GetThemeFromCookie = () =>{
  StyleTheme(findTheme(getCookieValue("color")));
}

export const setThemeStyles = (themeName:ThemeName) =>{
  StyleTheme(findTheme(themeName));
}

export const SetTheme = (themeName:ThemeName) =>{
  setThemeStyles(themeName);
  setThemeCookie(themeName);
}


const blue: Theme = {
  name: "blue",
  background: "#25294a",
  header: "rgba(255, 255, 255, 0.65)",
  buttonBackground: "#2d325a",
  highlight: "#3958b8",
  highlightText: "#fff",
  link: "#fff",
  menuBackground:"#161a3a"
};

const light: Theme = {
  name: "light",
  background: "white",
  header: "#367cfa",
  buttonBackground: "#eff5ff",
  highlight: "#367cfa",
  highlightText: "white",
  link: "#001f69",
  menuBackground:"#8fb5f5"
};

const themes: Theme[] = [blue, light];