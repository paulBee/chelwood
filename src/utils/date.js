import moment from 'moment';

const getStartOfMonth = () => moment().startOf('month');

export const nthWeekdayOfMonth = (options) => {
    let {   dayOfWeek,
            WeekNo,
            startOfmonth = getStartOfMonth()
        } = options;
    let monthStartTime = moment(startOfmonth);
    let firstWeek = startOfmonth.startOf('week');
    let firstDayOfWeek = firstWeek.add(dayOfWeek, 'days')

    if (firstDayOfWeek.isBefore(monthStartTime)) {
        firstDayOfWeek.add(WeekNo, "weeks");
    } else {
        firstDayOfWeek.add((WeekNo - 1), "weeks");
    }

    return  firstDayOfWeek.isAfter(moment()) ?
                firstDayOfWeek.format('dddd MMMM Do, h:mm a')
                : nthWeekdayOfMonth({dayOfWeek, WeekNo, startOfmonth: getStartOfMonth().add(1, "months")});

}
