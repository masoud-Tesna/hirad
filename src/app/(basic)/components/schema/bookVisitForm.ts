import {z} from 'zod';
import {setInputRule} from '@/utils/setInputRule';

const CredentialZod = z.string({required_error: setInputRule('requiredInput', {inputName: 'شماره موبایل'})}).length(11, setInputRule('length', {inputName: 'شماره موبایل', length: 11}));

export const BookVisitFormZod = z.object({
    projectName: z.string({required_error: setInputRule('requiredSelectBox', {inputName: 'پروژه'})}),
    gender: z.string({required_error: setInputRule('requiredSelectBox', {inputName: 'جنسیت'})}),
    firstName: z.string({required_error: setInputRule('requiredInput', {inputName: 'نام'})}),
    lastName: z.string({required_error: setInputRule('requiredInput', {inputName: 'نام خانوادگی'})}),
    mobileNumber: CredentialZod,
    date: z.any({required_error: setInputRule('requiredInput', {inputName: 'تاریخ بازدید'})}),
    time: z.string({required_error: setInputRule('requiredRadio', {inputName: 'بازه زمانی'})})
});

const BookVisitFormForRegister = BookVisitFormZod.pick({firstName: true, lastName: true, mobileNumber: true});

export const RegisterFormZod = BookVisitFormForRegister.extend({
    nationalCode: z.string({required_error: setInputRule('requiredInput', {inputName: 'کد ملی'})}),
    password: z.string({required_error: setInputRule('requiredInput', {inputName: 'رمز عبور'})}).min(8, setInputRule('minLength', {inputName: 'رمز عبور', length: 8})),
    realstateName: z.string({required_error: setInputRule('requiredInput', {inputName: 'نام املاک'})}),
    realstateRegNo: z.string({required_error: setInputRule('requiredInput', {inputName: 'کد شناسایی'})}),
    realstateAddress: z.string({required_error: setInputRule('requiredInput', {inputName: 'آدرس'})})
});

export const LoginFormZod = RegisterFormZod.pick({password: true}).extend({
    credential: CredentialZod
});

export const BookVisitRequestZod = BookVisitFormZod.omit({date: true, time: true}).extend({
    selectedDate: z.string()
});

export const BookVisitRequestLegalZod = BookVisitRequestZod.pick({projectName: true, selectedDate: true})
