// import TimeAgo from 'javascript-time-ago'
// import en from 'javascript-time-ago/locale/en'
// import CryptoJS from 'crypto-js'
// import CONSTANTS from './constants'

function number (num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function currency (num, currency, precision) {
  const n = num ? num.toFixed(precision || 2) : num
  return n ? `${currency === 'USD' ? '$' : currency === 'NGN' ? '₦' : '#'}${n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` : `${currency === 'USD' ? '$' : currency === 'NGN' ? '₦' : '#'}0`
}

function handleFileDownload (fileUrl) {
  const linkTag = document.createElement('a')
  linkTag.style.display = 'none'
  linkTag.download = 'filename'
  linkTag.href = fileUrl
  document.body.appendChild(linkTag)
  linkTag.click()
  document.body.removeChild(linkTag)
}

function currencyDollar (num) {
  return '$' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function dateTimestamp (timestamp) {
  const dateString = new Date(timestamp).toDateString()
  return dateString.replace(' ', ', ')
}

// function encryptData (data, key) {
//   data = JSON.stringify(data)
//   const encrypted = CryptoJS.AES.encrypt(data, key)
//   return encrypted.toString()
// }

// function decryptData (data, key) {
//   const decryptedData = CryptoJS.AES.decrypt(data, key)
//   return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8))
// }

function chartDates (timestamps) {
  const dates = []
  for (const timestamp of timestamps) {
    const dateString = new Date(timestamp).toDateString()
    dates.push(dateString.replace(' ', ', ').slice(0, dateString.length - 4))
  }
  return dates
}

function formatPhoneNumber (phone) {
  // for now this is to get nigerian country code
  let code = phone.slice(0, 4)
  code = code.slice(1)
  const str = phone.slice(4)
  // Filter only numbers from the input
  const cleaned = ('' + str).replace(/\D/g, '')

  // Check if the input is of correct
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    // Remove the matched extension code
    // Change this to format for any country code.
    // const intlCode = (match[1] ? code : '')
    const intlCode = code
    return [intlCode, '(', match[2], ')', match[3], '-', match[4]].join('')
  }
  return phone
}

// function chartMonths (monthIndices) {
//   const dates = []
//   for (const index of monthIndices) {
//     dates.push(CONSTANTS.months[index - 1])
//   }
//   return dates
// }

function lastFourDigits (number) {
  const stringify = number.toString()
  const ccNumberWithoutFirstNumber = stringify.slice(12, stringify.length)
  const maskedNumber = ccNumberWithoutFirstNumber.padStart(stringify.length, '*')
  return maskedNumber
}

function dateRangeValid (fromDate, toDate) {
  const fromDateMilli = new Date(fromDate).getTime()
  const toDateMilli = new Date(toDate).getTime()
  return toDateMilli > fromDateMilli
}

function fullDateMethod (timestamp) {
  const dateString = new Date(timestamp).toDateString()
  const timeString = new Date(timestamp).toLocaleTimeString()
  return `${dateString.replace(' ', ', ')}, ${timeString}`
}

function hideEmail (target) {
  const email = target
  let hiddenEmail = ''
  for (let i = 0; i < email.length; i++) {
    if (i > 2 && i < email.indexOf('@')) {
      hiddenEmail += '**'
    } else {
      hiddenEmail += email[i]
    }
  }
  return hiddenEmail
}

function numberToArrayMethod (numberParam) {
  numberParam = numberParam.toString()
  let formattedNumber = ''
  const arr = []
  if (numberParam.includes('/')) {
    formattedNumber = Number(numberParam.slice(1))
  }
  formattedNumber = Number(numberParam)
  for (let i = 1; i <= formattedNumber; i++) {
    arr.push(i)
  }

  return arr
}

// function timeText (timestamp) {
//   TimeAgo.addLocale(en)
//   const timeAgo = new TimeAgo('en-us')
//   const date = new Date(timestamp)
//   return timeAgo.format(date.getTime(), 'round')
// }

function getDaysDifference (dateStringThen, dateStringNow) {
  const thenDate = new Date(dateStringThen)
  const nowDate = new Date(dateStringNow)
  const difference = nowDate.getTime() - thenDate.getTime()

  return Math.round(difference / (1000 * 3600 * 24))
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function truncateString (str) {
  if (str.length <= 12) {
    return str
  }
  return str.slice(0, 12) + '...'
}

const functions = {
  lastFourDigits,
  formatNumber: number,
  daysDifference: getDaysDifference,
  formatCurrency: currency,
  formatCurrencyDolls: currencyDollar,
  formatTimestamp: dateTimestamp,
  // formatChartMonths: chartMonths,
  formatChartDates: chartDates,
  validateDateRange: dateRangeValid,
  fullDate: fullDateMethod,
  numberToArray: numberToArrayMethod,
  capitalizeFirstLetter,
  truncateString,
  formatPhoneNumber,
  hideEmail,
  handleFileDownload
  // encryptData,
  // decryptData
  // timeToText: timeText
}

export default functions
