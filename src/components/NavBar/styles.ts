import styled, { css } from 'styled-components';
import "@fontsource/montserrat";
import Chip from '@material-ui/core/Chip';
import { emphasize } from '@material-ui/core/styles';
import { Link  } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

interface ImageBackgroundProps {
    background: string
}


export const ContainerNavBar = styled.div`
    position: absolute;
    width: 100vw;
    height: 45px;
    left: 0px;
    top: 0px;

    background: #373C3F;
`;


export const StyledBreadcrumbLink = styled(Link)(({ theme }) => {
    return {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '20px',
    };
  }) as typeof Link;

export const StyledBreadcrumb = styled(Breadcrumbs)(({ theme }) => {
    return {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '20px',
        position: 'absolute',
        top: '10px',
        left: '10px'
    };
}) as typeof Breadcrumbs;


export const StyledTypography = styled(Typography)(({ theme }) => {
    return {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        
    };
}) as typeof Typography;