import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from "@mui/material";

export default function Theme(props) {
    let kurai_ao_dark = "#0A2472";
    let kurai_ao_main = "#0A2472";
    let kurai_ao_light = "#3b508e";
    let primary_dark = "#1565c0";
    let primary_main = "#1976d2";
    let primary_light = "#42a5f5";
    let black_blue_dark = "#111344";
    let black_blue_main = "#151855";
    let black_blue_light = "#444677";
    let secondary_dark = "#00786d";
    let secondary_main = "#009688";
    let secondary_light = "#33aba0";
    let tertiary_dark = "#b72e2a";
    let tertiary_main = "#e53935";
    let tertiary_light = "#ea615d";
    let quaternary_dark = "#cc8000";
    let quaternary_main = "#ffa000";
    let quaternary_light = "#ffb333";

    // go cry lol
    // Forest Green Palette
    let forest_green_black = "#134b32";
    let forest_green_dark = "#196442";
    let forest_green_main = "#1f7d53";
    let forest_green_light = "#4c9775";
    let forest_green_white = "#79b198";

    // Crimson Root Palette
    let crimson_root_black = "#731d1d";
    let crimson_root_dark = "#992727";
    let crimson_root_main = "#bf3131";
    let crimson_root_light = "#cc5a5a";
    let crimson_root_white = "#d98383";

    // Kansai Blue Palette
    let kansai_blue_black = "#134b32";
    let kansai_blue_dark = "#3d3bf3";
    let kansai_blue_main = "#6462f5";
    let kansai_blue_light = "#8b89f8";
    let kansai_blue_white = "#b1b1fa";

    // Elusive Teal Palette
    let elusive_teal_black = "#134b32";
    let elusive_teal_dark = "#469095";
    let elusive_teal_main = "#57B4BA";
    let elusive_teal_light = "#79c3c8";
    let elusive_teal_white = "#9ad2d6";

    // Rich Purple Palette
    let rich_purple_black = "#4c3768";
    let rich_purple_dark = "#654a8a";
    let rich_purple_main = "#7e5cad";
    let rich_purple_light = "#987dbd";
    let rich_purple_white = "#b29dce";

    // Light Violet Palette
    let light_violet_black = "#565191";
    let light_violet_dark = "#726cc1";
    let light_violet_main = "#8f87f1";
    let light_violet_light = "#a59ff4";
    let light_violet_white = "#bcb7f7";

    // Mundane Blue Palette (with complimentary color)
    let mundane_blue_black = "#485e71";
    let mundane_blue_dark = "#607e96";
    let mundane_blue_main = "#789dbc";
    let mundane_blue_light = "#93b1c9";
    let mundane_blue_white = "#aec4d7";
    let mundane_blue_contrast = "#31BFBF";

    // Tangerine Palette (with complimentary color)
    let tangerine_black = "#973e20";
    let tangerine_dark = "#ca522b";
    let tangerine_main = "#fc6736";
    let tangerine_light = "#fd855e";
    let tangerine_white = "#fda486";
    let tangerine_contrast = "#f59f62";

    // Matcha Green Palette
    let matcha_green_black = "#5c854a";
    let matcha_green_dark = "#7bb262";
    let matcha_green_main = "#9ade7b";
    let matcha_green_light = "#aee595";
    let matcha_green_white = "#c2ebb0";

    // Deepslate Palette
    let deepslate_black = "#001a37";
    let deepslate_dark = "#002249";
    let deepslate_main = "#002b5b";
    let deepslate_light = "#33557c";
    let deepslate_white = "#66809d";

    let white_dark = "#a1b0c8";
    let white_main = "#c9dcfa";
    let white_light = "#d4e3fb";
    let theme = createTheme({});
    theme = createTheme(theme, {
        palette: {
            primary: theme.palette.augmentColor({
                color: {
                    dark: primary_dark,
                    main: primary_main,
                    light: primary_light,
                },
                name: "primary",
            }),
            black_blue: theme.palette.augmentColor({
                color: {
                    dark: black_blue_dark,
                    main: black_blue_main,
                    light: black_blue_light,
                },
                name: "black_blue",
            }),
            kurai_ao: theme.palette.augmentColor({
                color: {
                    dark: kurai_ao_dark,
                    main: kurai_ao_main,
                    light: kurai_ao_light,
                },
                name: "kurai_ao",
            }),
            secondary: theme.palette.augmentColor({
                color: {
                    dark: secondary_dark,
                    main: secondary_main,
                    light: secondary_light,
                },
                name: "secondary",
            }),
            tertiary: theme.palette.augmentColor({
                color: {
                    dark: tertiary_dark,
                    main: tertiary_main,
                    light: tertiary_light,
                },
                name: "tertiary",
            }),
            quaternary: theme.palette.augmentColor({
                color: {
                    dark: quaternary_dark,
                    main: quaternary_main,
                    light: quaternary_light,
                },
                name: "quaternary",
            }),
            white: theme.palette.augmentColor({
                color: {
                    dark: white_dark,
                    main: white_main,
                    light: white_light,
                },
                name: "white",
            }),
            forestGreen: theme.palette.augmentColor({
                color: {
                    dark: forest_green_dark,
                    main: forest_green_main,
                    light: forest_green_light,
                },
                name: "forestGreen",
            }),
            crimsonRoot: theme.palette.augmentColor({
                color: {
                    dark: crimson_root_dark,
                    main: crimson_root_main,
                    light: crimson_root_light,
                },
                name: "crimsonRoot",
            }),
            kansaiBlue: theme.palette.augmentColor({
                color: {
                    dark: kansai_blue_dark,
                    main: kansai_blue_main,
                    light: kansai_blue_light,
                },
                name: "kansaiBlue",
            }),
            elusiveTeal: theme.palette.augmentColor({
                color: {
                    dark: elusive_teal_dark,
                    main: elusive_teal_main,
                    light: elusive_teal_light,
                },
                name: "elusiveTeal",
            }),
            richPurple: theme.palette.augmentColor({
                color: {
                    dark: rich_purple_dark,
                    main: rich_purple_main,
                    light: rich_purple_light,
                },
                name: "richPurple",
            }),
            lightViolet: theme.palette.augmentColor({
                color: {
                    dark: light_violet_dark,
                    main: light_violet_main,
                    light: light_violet_light,
                },
                name: "lightViolet",
            }),
            mundaneBlue: theme.palette.augmentColor({
                color: {
                    dark: mundane_blue_dark,
                    main: mundane_blue_main,
                    light: mundane_blue_light,
                },
                name: "mundaneBlue",
            }),
            tangerine: theme.palette.augmentColor({
                color: {
                    dark: tangerine_dark,
                    main: tangerine_main,
                    light: tangerine_light,
                },
                name: "tangerine",
            }),
            matchaGreen: theme.palette.augmentColor({
                color: {
                    dark: matcha_green_dark,
                    main: matcha_green_main,
                    light: matcha_green_light,
                },
                name: "matchaGreen",
            }),
            deepslate: theme.palette.augmentColor({
                color: {
                    dark: deepslate_dark,
                    main: deepslate_main,
                    light: deepslate_light,
                },
                name: "deepslate",
            }),
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: ({ theme }) =>
                        theme.unstable_sx({
                            fontFamily: "Apercu, Inter, DM Sans, sans-serif",
                            textAlign: {
                                xs: "justify",
                                sm: "justify",
                                md: "justify",
                                lg: "left",
                            },
                            // The change below is debatable
                            fontSize:{
                                xs:"0.8em",
                                sm:"0.875em",
                                md:"1em",
                                lg:"1.1em",
                            },
                        }),
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: "Inter, DM Sans, sans-serif",
                    },
                },
            },
        },
    });
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
