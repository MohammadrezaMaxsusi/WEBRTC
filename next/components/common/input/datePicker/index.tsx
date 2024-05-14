import DatePicker from "react-datepicker2";
import styles from "./index.module.scss";
import { authMessages } from "@/components/pages/auth/i18n/authMessages";
import moment from "jalali-moment";

type Props = {
  value: string;
  onChange: Function;
};

function MyDatePicker(props: Props) {
  const { value, onChange } = props;

  return (
    <div className={styles["container"]}>
      <label>{authMessages["birth date"]}</label>
      <DatePicker
        isGregorian={false}
        placeholder="مثال : ۱۴۰۲/۱۰/۱۰"
        value={value}
        timePicker={false}
        showTodayButton={false}
        onChange={(value) => onChange(value)}
        className={styles["wrapper"]}
        datePickerClass={styles["date-picker"]}
        calendarClass={styles["date-picker"]}
        
      />
    </div>
  );
}

export default MyDatePicker;
