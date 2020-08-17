function getTimeZone(timeZone) {
    if (timeZone) {
      let options = {
        timeZone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }, toTimeZone = new Intl.DateTimeFormat([], options);
      return new Date(toTimeZone.format(new Date()));
    } else {
      return new Date(Date.now());
    }
  }