import MultiDatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import {convertDatePicker, inputRule, useWindowSize} from '@/utils/helpers';
import {Form, Input} from 'antd';

export const DatePicker = (props) => {
  const {
    noPlaceHolder = false,
    name,
    placeholder,
    listName,
    dateFormat = 'YYYY/MM/DD'
  } = props;
  
  const formRef = Form.useFormInstance();
  
  let inputNameByListName = name;
  
  if (listName) {
    inputNameByListName = [listName, ...inputNameByListName];
  }
  
  const inputWatch = Form.useWatch(inputNameByListName, formRef);
  
  const {width} = useWindowSize();
  
  const CustomDatePickerInput = ({openCalendar, value, handleValueChange}) => {
    return (
      <Input
        placeholder={!noPlaceHolder ? placeholder : null}
        onFocus={openCalendar}
        onClick={openCalendar}
        value={value}
        onChange={handleValueChange}
        allowClear={false}
        rootClassName="d-ltr placeholder:text-right"
      />
    );
  };
  
  const handleOnChangeDatePicker = value => {
    if (value) {
      formRef.setFields([
        {
          name: inputNameByListName,
          value: convertDatePicker(value, dateFormat),
          errors: []
        }
      ]);
    } else {
      formRef.setFields([
        {
          name: inputNameByListName,
          value: '',
          errors: [inputRule('required selectBox', {name: placeholder})]
        }
      ]);
    }
    
    return true;
  };
  
  return (
    <MultiDatePicker
      className={width <= 767 ? 'rmdp-mobile' : ''}
      render={<CustomDatePickerInput />}
      onChange={handleOnChangeDatePicker}
      locale={persian_fa}
      calendar={persian}
      format={dateFormat}
      zIndex={9999}
      animations={[
        opacity(),
        transition({
          from: 40,
          transition: 'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)'
        })
      ]}
      containerStyle={{width: '100%'}}
      hideOnScroll
      mobi
      portal
    />
  );
};