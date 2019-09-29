import React from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © Jorge Khabazze ${moment().format('YYYY')}.`}
        </Typography>
    );
};

export default Copyright;
