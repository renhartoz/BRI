import { Stack, Typography, AppBar } from "@mui/material";
import Navbar from "./Navbar";
import Button from "./Button";
const Header = () => {
    return (
        <>
            <AppBar position="sticky">
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
                <Navbar/>
            </AppBar>
        </>
    )
}
export default Header;