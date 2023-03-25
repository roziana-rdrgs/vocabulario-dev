import * as React from 'react';
import { StyledBreadcrumb, ContainerNavBar, StyledBreadcrumbLink, StyledTypography } from './styles';


export const NavBar: React.FC = ({
    ...rest
}) =>{
    return (
        <div>
            <ContainerNavBar>
                <StyledBreadcrumb aria-label="breadcrumb">
                    <StyledBreadcrumbLink underline="hover" color="initial" href="/">
                    vocabulário dev
                    </StyledBreadcrumbLink>
                    <StyledBreadcrumbLink
                    underline="hover"
                    color="initial"
                    href="/material-ui/getting-started/installation/"
                    >
                    nem só de código
                    </StyledBreadcrumbLink>
                    <StyledTypography >mania de leitura</StyledTypography>
                </StyledBreadcrumb>
            </ContainerNavBar>
           
        </div>
      );
    };
