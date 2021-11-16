import * as React from 'react';
import { Grid } from '@mui/material';
import Calander from '../../Shared/Calander/Calander';
import Appoinments from '../Appoinments/Appoinments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <div>
              <Grid container spacing={2}>
                        <Grid item xs={12}  md={5}>
                            <Calander
                                date={date}
                                setDate={setDate}
                            ></Calander>
                        </Grid>
                        <Grid item xs={12} md={7}>
                           <Appoinments date={date}></Appoinments>
                        </Grid>
                    </Grid>
        </div>
    );
};

export default DashBoardHome;