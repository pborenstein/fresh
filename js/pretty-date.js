const { DateTime } = require("luxon")

module.exports = function prettyDate(date, fmt) {
  const dateObject = DateTime.fromJSDate(date)
  let str = ''

  switch (fmt) {
    case 'ISO':
    case 'iso':
    case 'html':
    case 'w3c':
                return dateObject.toISO()

    case 'relative':
                return dateObject.toRelative()

    case 'relativeCalendar':
                return dateObject.toRelativeCalendar()
                
    case 'DmY':
                return dateObject.toFormat('d LLL yyyy')
      
    case 'DMY':
                return dateObject.toFormat('d LLLL yyyy')
      
    case 'DmYt':
                return dateObject.toFormat('d LLL yyyy')
                  + (dateObject.toFormat(' t').toLowerCase())

    case 'DMYt':
        return dateObject.toFormat('d LLLL yyyy')
          + (dateObject.toFormat('t').toLowerCase())
                        


    default:
                return dateObject.toFormat(fmt)
  }
}
