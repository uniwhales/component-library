import React, { FC, Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import { InfoStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';


export const HintsAndHovers: FC<HintsAndHoversProps> = ({hint,id}) => {
    return (
        <Fragment data-for={id} data-tip={hint}>
            <IconWrapper icon={<InfoStandard />}/>
            <ReactTooltip />
        </Fragment>
    )
}