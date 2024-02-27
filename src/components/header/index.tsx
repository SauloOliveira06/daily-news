import { Box } from "@mui/material";
import { HeaderNews } from "../../globalStyles";
import { TitleDailyNews } from "./styles";

export const Header = () => {
  return (
    <HeaderNews>
      <Box display={'flex'} alignItems={'center'}>
        <TitleDailyNews>Daily News</TitleDailyNews>
      </Box>
    </HeaderNews>
  );
};
