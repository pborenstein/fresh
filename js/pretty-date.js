const { DateTime } = require("luxon")

module.exports = function prettyDate(date, fmt) {
  const dateObject = (typeof date === 'string')
                   ? DateTime.fromISO(date)
                   : DateTime.fromJSDate(date)

  switch (fmt) {
    case 'ISO':
    case 'iso':
    case 'html':                    // for use in <time datime="..."> elements
        return dateObject.toISO()   // 2017-12-31T19:00:00.000-05:00

    case 'isoDate':
        return dateObject.toISODate() 

    case 'isoTime':
         return dateObject.toISOTime() 

    case 'http':
                let str = ''
                str = dateObject.toHTTP()
                return str

    case 'rfc2822':
                return dateObject.toRFC2822()

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
          + (dateObject.toFormat(' t').toLowerCase())
                        
    default:
                return dateObject.toFormat(fmt)
  }
}
