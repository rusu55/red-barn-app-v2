'use client';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {clsx} from 'clsx'
import DatePicker from 'react-date-picker';


export const DatePickerDefault = ({error}: any) => {
  console.log(error)
  return (
    <>
   <DatePicker />
    <p>{error}</p>
    </>
  )
}

