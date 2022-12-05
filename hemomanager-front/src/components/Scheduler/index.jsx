import { useState } from "react";
import { Conatiner } from "./styles";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";
import { fade, lighten } from "@material-ui/core/styles/colorManipulator";
import { useEffect } from "react";
import { api } from "../../api";

export function Schaduler(props) {
  const [schedules, setSchedules] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .get(`/schedules/hemocenter/${sessionStorage.id}`)
      .then((response) => {
        setSchedules(response.data);
        console.log("SCHEDULES: ", schedules);
        console.log("LIST: ", list);
      })
      .then(() => {
        schedules.map((schedule) =>
          setList({
            title: "Website Re-Design Plan",
            startDate: schedule.scheduledDate,
            endDate: schedule.scheduledTime,
            id: schedule.uuid,
            location: schedule.scheduledDonor,
          })
        );
      });
  }, []);

  const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

  const styles = ({ spacing }) => ({
    customCell: {
      verticalAlign: "Top",
      borderBottom: `1px solid ${lighten(
        fade(theme.palette.divider, 1),
        0.88
      )}`,
      height: spacing(12) + 1,
    },
  });

  const TimeSacaleCell = withStyles(styles, { name: "TimeScaleCell" })(
    ({ classes, endDate, ...restProps }) => {
      const nextEndDate = new Date(endDate);
      nextEndDate.setMinutes(0);
      return (
        <WeekView.TimeScaleCell
          className={classes.customCell}
          endDate={nextEndDate}
          {...restProps}
        />
      );
    }
  );

  return (
    <Conatiner>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Scheduler data={list}>
            <ViewState currentDate="2018-06-28" />
            <WeekView
              startDayHour={9}
              endDayHour={19}
              timeScaleCellComponent={TimeSacaleCell}
            />
            <Appointments />
          </Scheduler>
        </Paper>
      </MuiThemeProvider>
    </Conatiner>
  );
}
