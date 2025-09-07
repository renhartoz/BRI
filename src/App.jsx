import React, { useState, useEffect } from 'react';
import { Stack, AppBar, Typography } from "@mui/material";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { MathJaxContext } from "better-react-mathjax";
import ScrollToTop from "./components/ScrollToTop";
import { restoreSession, isTokenExpired, getAccessToken } from "./services/token.js";
import Loading from './components/Loading.jsx';

const config = {
    loader: { load: ['[tex]/color'] },
    tex: {
        packages: { '[+]': ['color'] },
    },
};

export default function App() {
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const init = async () => {
            await restoreSession();
            setIsReady(true);
        };
        init();
    }, []);

    if (!isReady) {
        return <Loading/>;
    }

    return (
        <>
            <Stack sx={{minHeight: '100vh'}}>
                <Theme>
                    <MathJaxContext config={config}>
                        <AppBar position="sticky">
                            {isTokenExpired() && (
                                <Stack 
                                    className="col-full" 
                                    justifyContent={{xs:'space-evenly', sm:'center'}} 
                                    gap={{xs:0, sm:3}} 
                                    alignItems={'center'} 
                                    direction={'row'} 
                                    sx={{backgroundColor:'secondary.main'}}
                                    p={{xs:1, sm:1.5, md:2}}
                                >
                                    <Stack>
                                        <Typography textAlign={'center !important'} fontWeight={800} color="#fff" fontSize={{xs:'.8em', sm:'.9em', md:'1.1em'}}>
                                            🎉 Dapatkan keuntungan lebih banyak dengan <Typography component={'span'} color='quaternary.main' 
                                            fontWeight={800} fontSize={'inherit !important'}>Membership</Typography>!
                                        </Typography>
                                    </Stack>
                                    <Stack>
                                        <Button bdcolor={'#000'}>
                                            <Typography fontSize={{xs:'.8em', sm:'.9em', md:'1.1em'}}>
                                                Jadi Member
                                            </Typography>
                                        </Button>
                                    </Stack>
                                </Stack>
                            )}
                            <Navbar/>
                        </AppBar>
                        <Stack flexGrow={1}>
                            <Outlet />
                        </Stack>
                        <ScrollToTop/>
                        <Footer />
                    </MathJaxContext>
                </Theme>
            </Stack>
        </>
    );
}
