export interface Props {
  datetime: string | Date;
  className?: string;
  type?: 'date' | 'year' | 'fullDate';
}

export default function Datetime({ datetime, type, className }: Props) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className='sr-only'>Posted on:</span>
      <span className={`text-subtle font-code text-sm inline-block font-normal`}>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const dayMonth = myDatetime.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
  });

  const year = myDatetime.toLocaleDateString([], {
    year: 'numeric',
  });

  const fullDate = myDatetime.toLocaleDateString([], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // const time = myDatetime.toLocaleTimeString([], {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });

  return (
    <>
      {dayMonth}
      {/* <span aria-hidden='true'> | </span> */}
      {/* <span className='sr-only'>&nbsp;at&nbsp;</span> */}
      {/* {time} */}
    </>
  );
};
