import React from 'react'

interface EducationItemInterface{
    title: string;
    school: String;
    date_start: string;
    date_end: string;
    logo: string
}

function EducationItem(props: EducationItemInterface) {
  return (
    <div>EducationItem</div>
  )
}

export default EducationItem