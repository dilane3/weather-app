import { COUNTRY } from "./Allcountries"

export const formatTemperature = (temp) => {
  return Math.floor(temp - 273.15)
}

export const formatDate = (date, type = "partial") => {
  const currentDate = new Date()
  const extraTime = currentDate.getHours()*3600 + currentDate.getMinutes()*60 + currentDate.getSeconds()
  const diffDate = Math.floor(Math.abs(currentDate.getTime()/1000 - extraTime - date))

  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ]

  const months = [
    "Jan.",
    "Fev.",
    "Mar.",
    "Avr.",
    "Mai",
    "Juin",
    "Juil.",
    "Aout",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec."
  ]

  const time = new Date(date*1000)

  if (type === "partial") {
    if (diffDate < 86400) {
      return "Aujourd'hui"
    } else if (diffDate >= 86400 && diffDate < 86400*2) {
      return "Demain"
    }
    
    return `${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]}`
  } else if (type === "full") {
    return `${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]}`
  } else if (type === "only_day") {
    return days[time.getDay()]
  } else if (type === "only_date_month") {
    return `${time.getDate()} ${months[time.getMonth()]}`
  }

}

export const formatCountry = (code) => {
  let originalCountryName = ""

  for (let country of COUNTRY) {
    if (country.alpha2Code === code) {
      originalCountryName = country.translations?.fr

      break
    }
  }

  return originalCountryName
}