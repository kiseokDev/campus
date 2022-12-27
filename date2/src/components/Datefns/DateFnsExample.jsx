import React, { useRef, useState } from "react";
// import moment from "moment-timezone";
import { add, differenceInHours, format, sub } from "date-fns";
import { format as timezoneFormat, toDate } from "date-fns-tz";
import addWeeks from "date-fns/addWeeks";
import ko from "date-fns/locale/ko";

// dayjs.locale("ko");
// dayjs.extend(utc);
// dayjs.extend(timezone);

export default function DateFnsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirhDayChange = event => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };

  const dateFnsDate = new Date();
  //   const newDayFnsDate = dayFnsDate.add(1, "week");
  const newDayFnsDate = add(dateFnsDate, { days: 1 });
  const newDayFnsDate2 = addWeeks(newDayFnsDate, 1);

  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        dateFnsDate{format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        newDayFnsDate {format(newDayFnsDate, "yyyy-MM-dd")}
        <br />
        newDayFnsDate2{format(newDayFnsDate2, "yyyy-MM-dd")}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      {/* <div>{dayjs.tz.guess()}</div> */}
      <div>
        2018년 3월 10일 13시에 하루 더하기
        {timezoneFormat(
          add(new Date("2018-03-10 13:00:00"), { days: 1 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_york" }
        )}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기
        {timezoneFormat(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_york",
            }),
            { hours: 24 }
          ),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_york" }
        )}
      </div>
      <br />
      <div>Leap Year (New-york)</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {format(
          sub(new Date("2017-01-01 13:00:00"), { year: 1 }),
          "yyyy-MM-dd"
        )}
      </div>
      <div>
        2017년 1월 1일에 365일 뺴기:
        {format(
          sub(new Date("2017-01-01 13:00:00"), { year: 1 }),
          "yyyy-MM-dd"
        )}
      </div>
      <br />
      <div>한국어로 표기(07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{format(new Date("2017-07-17"), "yyyy년 M월 d일")}</div>
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirhDayChange} />
        <div>무슨 요일이였을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 과 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        {`${differenceInHours(
          new Date("2021-07-17 03:00"),
          new Date("2021-07-17 02:00")
        )} 시간`}
      </div>
    </div>
  );
}
