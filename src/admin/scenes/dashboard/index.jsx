import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/admin/Header";
const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                <Button 
                    variant="outlined" 
                    type="submit" 
                    sx={{ color: colors.greenAccent[400], borderColor: colors.greenAccent[400] }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default Dashboard;
