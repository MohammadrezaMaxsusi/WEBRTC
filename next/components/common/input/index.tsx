import TextField from "./textField";
import Checkbox from "./checkbox";
import Radio from "./radio";
import Search from "./search";
import Upload from "./upload";
// import Video from "./videoRecorder";
import Camera from "./camera";
// import Slider from "./slider";
// import DatePicker from "./datePicker";

export default function Input(props: any) {
  // types of inputs like ( text, search , password, radio , textarea, ... )
  const inputTypes = {
    text: <TextField {...props} />,
    number: <TextField {...props} />,
    checkbox: <Checkbox {...props} />,
    // slider: <Slider {...props} />,
    radio: <Radio {...props} />,
    search: <Search {...props} />,
    upload: <Upload {...props} />,
    // video: <Video {...props} />,
    camera: <Camera {...props} />,
    // slider: <Slider {...props} />,
    // "date-picker": <DatePicker {...props} />,
  };
  // @ts-ignore
  return inputTypes[props?.type];
}
