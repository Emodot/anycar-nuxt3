import moment from 'moment'
export const dateDifference = value => value ? moment().diff(value) : '- -'
export const isBefore = value => value ? moment(value, 'YYYY/MM/DD').isBefore(moment()) : false
export const detailedDate = value => value ? moment(String(value)).format('Do MMM, YYYY.') : '_ _'
export const detailedDateInFull = value => value ? moment(String(value)).format('Do MMMM, YYYY., hh:mm:ss a') : '_ _'
export const numericalDate = value => value ? moment(String(value)).format('DD/MM/YYYY') : '_ _'
export const stringToDate = value => value ? moment(value, 'LL').toDate() : null
export const fromNow = value => value ? moment(value).fromNow() : '_ _'
