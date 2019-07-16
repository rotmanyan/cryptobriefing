import React, { Component } from "react";
import { connect } from "react-redux";

import onClickOutside from "react-onclickoutside";

import DayPicker, { DateUtils } from "react-day-picker";
import { newsActions } from "data/news/actions";
import { dataDate } from "data/news/selectors";
import { fetchNews } from "middleware/News";
import "react-day-picker/lib/style.css";
import "./Calendar.scss";

class CalendarView extends Component {
  handleClickOutside = evt => {
    const { handleOpenCalendar, fetchNews } = this.props;
    if (evt.isTrusted) {
      handleOpenCalendar();
      fetchNews();
    }
  };

  handleDayClick = day => {
    const { selectDate, date } = this.props;
    const range = DateUtils.addDayToRange(day, date);
    selectDate(range);
  };

  render() {
    const {
      date: { from, to }
    } = this.props;

    const modifiers = { start: from, end: to };

    return (
      <div className="wrapper-calendar">
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: dataDate(state)
});

const mapDispatchToProps = {
  selectDate: newsActions.selectDate,
  fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(CalendarView));
