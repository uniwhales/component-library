import React, { FC, Fragment } from 'react'
import ReactTooltip, {} from 'react-tooltip';
import { InfoStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';


export const HintsAndHovers:FC<HintsAndHoversProps> = ({id, hint, children}) => {
    return (
        <Fragment data-tip={hint} data-for={id}>
            <IconWrapper icon={<InfoStandard />} />
            <ReactTooltip id={id} />         
        </Fragment>
    )
}