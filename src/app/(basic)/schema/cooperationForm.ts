import { RegisterZod } from '@/app/schema/register';
import { z } from 'zod';
import { setInputRule } from '@/utils/setInputRule';

const CooperationFromRegisterZod = RegisterZod.pick({ firstName: true, lastName: true, mobileNumber: true });

export const CooperationZod = CooperationFromRegisterZod.extend({
  companyName: z.string({ required_error: setInputRule('requiredInput', { inputName: 'نام شرکت' }) }),
  activityField: z.string({ required_error: setInputRule('requiredInput', { inputName: 'حوزه اشتغال و فعالیت' }) }),
  email: z.string({ required_error: setInputRule('requiredInput', { inputName: 'ایمیل' }) })
  .email({ message: 'لطفا یک ایمیل معتبر وارد کنید' }),
  websiteAddress: z.string({ required_error: setInputRule('requiredInput', { inputName: 'آدرس وب سایت' }) })
  .url({ message: 'لطفا یک آدرس معتبر وارد نمایید' }),
  cooperationField: z.string({ required_error: setInputRule('requiredSelectBox', { inputName: 'زمینه همکاری' }) }),
  companyIntroduction: z.string({ required_error: setInputRule('requiredSelectBox', { inputName: 'توضیحات تکمیلی در خصوص زمینه های فعالیتی و سوابق اجرایی' }) }),
  extraInfo: z.string({ required_error: setInputRule('requiredSelectBox', { inputName: 'توضیحات تکمیلی' }) }).optional()
});
