import { useState } from "react";
import "./App.css";
import Add from "./component/Add/Add";
import Feed from "./component/Feed/Feed";
import Navbar from "./component/Navbar/Navbar";
import Rightbar from "./component/RightBar/Rightbar";
import Sidebar from "./component/Sidebar/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={5} justifyContent="space-evenly">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />

        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
