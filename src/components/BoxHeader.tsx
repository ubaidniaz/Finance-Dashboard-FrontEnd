import React from 'react';
import FlexBetween from './FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';

type Props = {
    title: string;
    sideText: string;
    subtitle?: string;
    icon?: React.ReactNode;
};

const BoxHeader: React.FC<Props> = ({ icon, title, subtitle, sideText }) => {
    const theme = useTheme();
    return (
        <FlexBetween 
            color={theme.palette.grey[400]}
            margin="1.5rem 1rem 0 1rem"
        >
            <FlexBetween>
                {icon}
                <Box width="100%">
                    <Typography variant="h4" mb="-0.1rem">
                        {title}
                    </Typography>
                    <Typography variant="h6">
                        {subtitle}
                    </Typography>
                </Box>
            </FlexBetween>
            <Typography 
                variant="h5" 
                fontWeight="700" 
                color={theme.palette.secondary[500]} 
            >
                {sideText}
            </Typography>
        </FlexBetween>
    );
};

export default BoxHeader;
