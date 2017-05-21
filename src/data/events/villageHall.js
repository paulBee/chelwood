import moment from 'moment';
import {nthWeekdayOfMonth} from '../../utils/date'

const traceDate = (mom) => console.log(mom);

traceDate(nthWeekdayOfMonth({
    dayOfWeek: 3,
    WeekNo: 1
}));

const events = [
    {
        title: "AGM",
        location: "Village Hall",
        date: moment("2017/06/06 19:45", "YYYY/MM/DD hh:mm").format('dddd MMMM Do, h:mm a'),
        time: "7:45pm"
    },
    {
        title: "Whist",
        location: "Village Hall",
        date: "2nd Sat of month",
        time: "7:30pm"
    },
    {
        title: "Words&Wine",
        location: "Village Hall",
        date: "1st Fri of month",
        time: "7:30pm – 9:30"
    }
];

export default events;
